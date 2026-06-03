import { getSupabaseServerClient, hasSupabaseServerConfig } from '@/lib/supabase/server'

export type ExperimentRecord = {
  id: string
  name: string
  description: string | null
  moduleId: number
  content: string
  thumbnailUrl: string | null
  createTime: string
  updateTime: string
}

type ExperimentRow = {
  id: string
  name: string
  description: string | null
  module_id: number
  content: string
  thumbnail_url: string | null
  created_at: string
  updated_at: string
}

type SaveExperimentInput = {
  id?: string
  name: string
  description?: string | null
  moduleId?: number
  content: string
  thumbnailUrl?: string | null
}

const EXPERIMENT_TABLE = 'experiments'
const DEFAULT_PAGE_SIZE = 20

function normalizeExperiment(row: ExperimentRow): ExperimentRecord {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    moduleId: row.module_id,
    content: row.content,
    thumbnailUrl: row.thumbnail_url,
    createTime: row.created_at,
    updateTime: row.updated_at,
  }
}

function getSafePage(value: unknown) {
  const page = Number(value)
  if (!Number.isFinite(page) || page < 1) {
    return 1
  }

  return Math.floor(page)
}

function getSafePageSize(value: unknown) {
  const pageSize = Number(value)
  if (!Number.isFinite(pageSize) || pageSize < 1) {
    return DEFAULT_PAGE_SIZE
  }

  return Math.min(Math.floor(pageSize), 100)
}

export function isSupabaseReady() {
  return hasSupabaseServerConfig()
}

export async function listExperiments(params: { page?: unknown; pageSize?: unknown; keyword?: unknown }) {
  const page = getSafePage(params.page)
  const pageSize = getSafePageSize(params.pageSize)
  const keyword = typeof params.keyword === 'string' ? params.keyword.trim() : ''
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  const supabase = getSupabaseServerClient()

  let query = supabase
    .from(EXPERIMENT_TABLE)
    .select('id, name, description, module_id, content, thumbnail_url, created_at, updated_at', { count: 'exact' })
    .order('updated_at', { ascending: false })
    .range(from, to)

  if (keyword) {
    query = query.ilike('name', `%${keyword}%`)
  }

  const { data, count, error } = await query

  if (error) {
    throw error
  }

  return {
    list: (data || []).map(row => normalizeExperiment(row as ExperimentRow)),
    total: count || 0,
    page,
    pageSize,
  }
}

export async function getExperimentDetail(id: string) {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from(EXPERIMENT_TABLE)
    .select('id, name, description, module_id, content, thumbnail_url, created_at, updated_at')
    .eq('id', id)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data ? normalizeExperiment(data as ExperimentRow) : null
}

export async function createExperiment(input: SaveExperimentInput) {
  const supabase = getSupabaseServerClient()
  const payload = {
    name: input.name,
    description: input.description?.trim() || null,
    module_id: input.moduleId ?? 9,
    content: input.content,
    thumbnail_url: input.thumbnailUrl?.trim() || null,
  }

  const { data, error } = await supabase
    .from(EXPERIMENT_TABLE)
    .insert(payload)
    .select('id, name, description, module_id, content, thumbnail_url, created_at, updated_at')
    .single()

  if (error) {
    throw error
  }

  return normalizeExperiment(data as ExperimentRow)
}

export async function updateExperiment(input: SaveExperimentInput & { id: string }) {
  const supabase = getSupabaseServerClient()
  const payload = {
    name: input.name,
    description: input.description?.trim() || null,
    module_id: input.moduleId ?? 9,
    content: input.content,
    thumbnail_url: input.thumbnailUrl?.trim() || null,
    updated_at: new Date().toISOString(),
  }

  const { data, error } = await supabase
    .from(EXPERIMENT_TABLE)
    .update(payload)
    .eq('id', input.id)
    .select('id, name, description, module_id, content, thumbnail_url, created_at, updated_at')
    .single()

  if (error) {
    throw error
  }

  return normalizeExperiment(data as ExperimentRow)
}

export async function deleteExperiment(id: string) {
  const supabase = getSupabaseServerClient()
  const { error } = await supabase.from(EXPERIMENT_TABLE).delete().eq('id', id)

  if (error) {
    throw error
  }

  return true
}
