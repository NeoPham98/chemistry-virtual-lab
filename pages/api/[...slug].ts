import type { NextApiRequest, NextApiResponse } from 'next'

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

const MOCK_EXPERIMENT = {
    code: 200,
    data: {
        id: 'local_exp_001',
        name: 'Untitled Experiment',
        content: '',
        moduleId: 9,
        createTime: '2026-01-01T00:00:00Z',
        updateTime: '2026-01-01T00:00:00Z',
    },
    msg: 'success',
}

const MOCK_EMPTY_LIST = {
    code: 200,
    data: { list: [], total: 0, page: 1, pageSize: 20 },
    msg: 'success',
}

const MOCK_SUCCESS = { code: 200, data: {}, msg: 'success' }

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
    if (p.includes('/experiment') || p.includes('/module')) {
        if (p.includes('list')) return MOCK_EMPTY_LIST
        return MOCK_EXPERIMENT
    }
    if (['/save', '/update', '/create', '/delete'].some(x => p.includes(x)))
        return MOCK_SUCCESS
    if (['/vip', '/payment', '/rate'].some(x => p.includes(x)))
        return MOCK_SUCCESS

    return MOCK_SUCCESS
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = (req.query.slug as string[]) || []
    const path = '/' + slug.join('/')

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,token')

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    res.status(200).json(getMockResponse(path))
}
