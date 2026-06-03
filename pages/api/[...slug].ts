import type { NextApiRequest, NextApiResponse } from 'next'

import {
  createExperiment,
  deleteExperiment,
  getExperimentDetail,
  isSupabaseReady,
  listExperiments,
  updateExperiment,
} from '@/lib/experiments'

const MOCK_USER = {
    code: 200,
    data: {
        userId: 'local_user_001',
        nickName: 'Local User',
        avatar: '',
        isLogin: true,
        vipEndTime: '2099-12-31',
        isVip: true,
        token: 'mock_token_local',
        phone: '',
        email: 'local@example.com',
        subjectId: 2,
        lang: 'vi',
    },
    msg: 'success',
}

const MOCK_LOGIN_CHECK = {
    code: 200,
    data: {
        isLogin: true,
        userId: 'local_user_001',
        nickName: 'Local User',
        avatar: '',
        token: 'mock_token_local',
        vipEndTime: '2099-12-31',
        isVip: true,
        subjectId: 2,
        lang: 'vi',
        pid: 'LOCAL_PID',
    },
    msg: 'success',
}

const MOCK_EMPTY_LIST = {
    code: 200,
    data: { list: [], total: 0, page: 1, pageSize: 20 },
    msg: 'success',
}

const MOCK_SUCCESS = { code: 200, data: {}, msg: 'success' }

function getRequestBody(req: NextApiRequest) {
    if (!req.body) {
        return {}
    }

    if (typeof req.body === 'string') {
        try {
            return JSON.parse(req.body)
        } catch {
            return {}
        }
    }

    return req.body
}

function getExperimentPath(slug: string[]) {
    return '/' + slug.slice(1).join('/')
}

async function handleExperimentRoute(req: NextApiRequest, res: NextApiResponse, slug: string[]) {
    if (!isSupabaseReady()) {
        res.status(200).json(MOCK_EMPTY_LIST)
        return
    }

    const experimentPath = getExperimentPath(slug).toLowerCase()
    const body = getRequestBody(req)

    try {
        if (req.method === 'GET' && experimentPath === '/list') {
            const data = await listExperiments({
                page: req.query.page,
                pageSize: req.query.pageSize,
                keyword: req.query.keyword,
            })
            res.status(200).json({ code: 200, data, msg: 'success' })
            return
        }

        if (req.method === 'GET' && experimentPath === '/detail') {
            const id = typeof req.query.id === 'string' ? req.query.id : ''
            if (!id) {
                res.status(400).json({ code: 400, data: null, msg: 'Missing experiment id' })
                return
            }

            const data = await getExperimentDetail(id)
            if (!data) {
                res.status(404).json({ code: 404, data: null, msg: 'Experiment not found' })
                return
            }

            res.status(200).json({ code: 200, data, msg: 'success' })
            return
        }

        if (req.method === 'POST' && experimentPath === '/create') {
            const name = typeof body.name === 'string' ? body.name.trim() : ''
            const content = typeof body.content === 'string' ? body.content : ''
            if (!name || !content) {
                res.status(400).json({ code: 400, data: null, msg: 'Missing required fields' })
                return
            }

            const data = await createExperiment({
                name,
                description: typeof body.description === 'string' ? body.description : null,
                moduleId: Number(body.moduleId) || 9,
                content,
                thumbnailUrl: typeof body.thumbnailUrl === 'string' ? body.thumbnailUrl : null,
            })
            res.status(200).json({ code: 200, data, msg: 'success' })
            return
        }

        if (req.method === 'POST' && experimentPath === '/update') {
            const id = typeof body.id === 'string' ? body.id : ''
            const name = typeof body.name === 'string' ? body.name.trim() : ''
            const content = typeof body.content === 'string' ? body.content : ''
            if (!id || !name || !content) {
                res.status(400).json({ code: 400, data: null, msg: 'Missing required fields' })
                return
            }

            const data = await updateExperiment({
                id,
                name,
                description: typeof body.description === 'string' ? body.description : null,
                moduleId: Number(body.moduleId) || 9,
                content,
                thumbnailUrl: typeof body.thumbnailUrl === 'string' ? body.thumbnailUrl : null,
            })
            res.status(200).json({ code: 200, data, msg: 'success' })
            return
        }

        if (req.method === 'POST' && experimentPath === '/delete') {
            const id = typeof body.id === 'string' ? body.id : ''
            if (!id) {
                res.status(400).json({ code: 400, data: null, msg: 'Missing experiment id' })
                return
            }

            await deleteExperiment(id)
            res.status(200).json(MOCK_SUCCESS)
            return
        }

        res.status(404).json({ code: 404, data: null, msg: 'Experiment route not found' })
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({ code: 500, data: null, msg: message })
    }
}

const MOCK_ACTIVATE = {
    code: 200,
    data: { isActive: true, isVip: true, vipEndTime: '2099-12-31' },
    msg: 'success',
}

function getMockResponse(path: string): object {
    const p = path.toLowerCase()

    if (p.includes('login/check') || (p.includes('passport') && p.includes('check')))
        return MOCK_LOGIN_CHECK
    if (p.includes('/user/info') || p.includes('/userinfo') || p.includes('/user/detail'))
        return MOCK_USER
    if (p.includes('/activate') || p.includes('/activation') || p.includes('/isactive'))
        return MOCK_ACTIVATE
    if (['/save', '/update', '/create', '/delete'].some(x => p.includes(x)))
        return MOCK_SUCCESS
    if (['/vip', '/payment', '/rate'].some(x => p.includes(x)))
        return MOCK_SUCCESS

    return MOCK_SUCCESS
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = (req.query.slug as string[]) || []

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,token')

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    const first = (slug[0] || '').toLowerCase()
    if (first === 'experiment' || first === 'module') {
        return handleExperimentRoute(req, res, slug)
    }

    const path = '/' + slug.join('/')
    res.status(200).json(getMockResponse(path))
}
