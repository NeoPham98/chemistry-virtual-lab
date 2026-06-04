import type { NextApiRequest, NextApiResponse } from 'next'
import { getSupabaseServerClient, hasSupabaseServerConfig } from '@/lib/supabase/server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!hasSupabaseServerConfig()) {
    return res.status(500).json({ code: 500, msg: 'Supabase is not configured' })
  }

  try {
    const supabase = getSupabaseServerClient()
    // Thực hiện một câu lệnh SELECT đơn giản để duy trì hoạt động cho Supabase DB
    const { data, error } = await supabase
      .from('experiments')
      .select('id')
      .limit(1)

    if (error) {
      throw error
    }

    return res.status(200).json({ code: 200, msg: 'Database keep-alive ping successful', data })
  } catch (error: any) {
    return res.status(500).json({
      code: 500,
      msg: 'Database keep-alive ping failed',
      error: error?.message || String(error),
    })
  }
}
