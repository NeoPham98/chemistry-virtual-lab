import Head from 'next/head'
import type { KeyboardEvent } from 'react'
import { useEffect, useRef, useState } from 'react'

type ExperimentRecord = {
  id: string
  name: string
  description: string | null
  moduleId: number
  content: string
  thumbnailUrl: string | null
  createTime: string
  updateTime: string
}

type ExperimentListResponse = {
  code: number
  data: { list: ExperimentRecord[]; total: number; page: number; pageSize: number }
  msg: string
}

type ApiResponse<T> = { code: number; data: T; msg: string }

type DeleteTarget = Pick<ExperimentRecord, 'id' | 'name'> | null

const PAGE_SIZE = 24
const THS_TITLE = 'THS - Phòng Thí Nghiệm Ảo'
const THS_FAVICON = 'https://truonghocsoquocgia.vn/assets/logo/Logomark.svg'
const THS_SPLASH_FLAG = 'ths-transition-splash'

function SearchIcon() {
  return (
    <svg className="icon icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="7" />
      <line x1="20" y1="20" x2="16.65" y2="16.65" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg className="icon icon-flask" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M10 2v7.31" />
      <path d="M14 9.3V2" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3 19.74 19a2 2 0 0 1-1.72 3H5.98a2 2 0 0 1-1.72-3L10 9.3" />
      <path d="M7 16h10" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="icon icon-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M8 5.14v13.72A1 1 0 0 0 9.52 19.7l10.3-6.86a1 1 0 0 0 0-1.68L9.52 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg className="icon icon-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M3 6h18" />
      <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
      <path d="m19 6-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg className="icon icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

function formatTinyDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '—'
  return date.toLocaleDateString('vi-VN')
}

function getOpenHref(expId?: string, moduleId?: number) {
  const params = new URLSearchParams()
  params.set('moduleId', String(moduleId || 9))
  params.set('ignoreBlock', 'true')
  if (expId) params.set('experimentId', expId)
  return `/chemical/virtuallab.html?${params.toString()}`
}

async function readApiJson<T>(res: Response): Promise<T> {
  const text = await res.text()
  if (!text) throw new Error(`HTTP ${res.status}`)

  try {
    return JSON.parse(text) as T
  } catch {
    throw new Error(res.ok ? 'Phản hồi máy chủ không hợp lệ' : `HTTP ${res.status}`)
  }
}

export default function ExperimentsPage() {
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadMoreLoading, setLoadMoreLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [failedThumbnails, setFailedThumbnails] = useState<Set<string>>(() => new Set())

  const [list, setList] = useState<ExperimentRecord[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget>(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const cancelDeleteRef = useRef<HTMLButtonElement | null>(null)
  const deleteDialogRef = useRef<HTMLDivElement | null>(null)
  const lastDeleteTriggerRef = useRef<HTMLButtonElement | null>(null)

  const canLoadMore = list.length < total

  async function fetchPage(nextPage: number, mode: 'replace' | 'append') {
    const params = new URLSearchParams()
    params.set('page', String(nextPage))
    params.set('pageSize', String(PAGE_SIZE))
    if (keyword.trim()) params.set('keyword', keyword.trim())

    const res = await fetch(`/experiment/list?${params.toString()}`)
    const json = await readApiJson<ExperimentListResponse>(res)
    if (!res.ok || json.code !== 200) {
      throw new Error(json.msg || `HTTP ${res.status}`)
    }

    setTotal(json.data.total || 0)
    setPage(json.data.page || nextPage)

    if (mode === 'replace') setList(json.data.list || [])
    else setList(prev => [...prev, ...(json.data.list || [])])
  }

  async function loadReplace() {
    setLoading(true)
    setError(null)
    try {
      await fetchPage(1, 'replace')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error')
      setList([])
      setTotal(0)
      setPage(1)
    } finally {
      setLoading(false)
    }
  }

  async function loadMore() {
    if (!canLoadMore || loadMoreLoading) return
    setLoadMoreLoading(true)
    setError(null)
    try {
      await fetchPage(page + 1, 'append')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error')
    } finally {
      setLoadMoreLoading(false)
    }
  }

  const didInitRef = useRef(false)

  useEffect(() => {
    loadReplace()
    didInitRef.current = true
  }, [])

  useEffect(() => {
    if (!didInitRef.current) return

    const t = window.setTimeout(() => {
      loadReplace()
    }, 400)

    return () => {
      window.clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])

  useEffect(() => {
    if (!deleteTarget) return
    cancelDeleteRef.current?.focus()
  }, [deleteTarget])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let timer = 0
    try {
      const hasTransitionFlag = window.sessionStorage.getItem(THS_SPLASH_FLAG) === '1'
      if (hasTransitionFlag) {
        window.sessionStorage.removeItem(THS_SPLASH_FLAG)
      }

      timer = window.setTimeout(() => {
        document.body.classList.add('ths-splash-inactive')
      }, hasTransitionFlag ? 3400 : 2400)
    } catch {
      timer = window.setTimeout(() => {
        document.body.classList.add('ths-splash-inactive')
      }, 2400)
    }

    return () => {
      if (timer) window.clearTimeout(timer)
      document.body.classList.remove('ths-splash-inactive')
    }
  }, [])

  function closeDeleteModal() {
    setDeleteTarget(null)
    window.setTimeout(() => lastDeleteTriggerRef.current?.focus(), 0)
  }

  function handleDeleteKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      closeDeleteModal()
      return
    }

    if (event.key !== 'Tab' || !deleteDialogRef.current) return

    const focusable = Array.from(
      deleteDialogRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    )

    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
      return
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  async function handleDeleteConfirm() {
    if (!deleteTarget) return
    setDeleteLoading(true)
    try {
      const res = await fetch('/experiment/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: deleteTarget.id }),
      })
      const json = await readApiJson<ApiResponse<Record<string, never>>>(res)
      if (!res.ok || json.code !== 200) {
        throw new Error(json.msg || `HTTP ${res.status}`)
      }
      closeDeleteModal()
      await loadReplace()
    } catch (e) {
      window.alert(e instanceof Error ? e.message : 'Xóa thất bại')
    } finally {
      setDeleteLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>{THS_TITLE}</title>
        <link rel="icon" href={THS_FAVICON} type="image/svg+xml" />
        <link rel="shortcut icon" href={THS_FAVICON} type="image/svg+xml" />
      </Head>

      <style jsx>{`
        :global(.icon) {
          display: block;
          flex: none;
        }

        :global(.icon-search),
        :global(.icon-plus),
        :global(.icon-play),
        :global(.icon-trash) {
          width: 18px;
          height: 18px;
        }

        :global(.icon-flask) {
          width: 26px;
          height: 26px;
        }

        :global(body:not(.ths-splash-inactive)) {
          overflow: hidden;
        }

        .page {
          min-height: 100vh;
          background: #f3f4f8;
          color: #0f172a;
          padding: 24px 16px 56px;
        }

        .ths-splash {
          position: fixed;
          inset: 0;
          z-index: 300;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transition: opacity 360ms ease, visibility 360ms ease;
        }

        :global(body.ths-splash-inactive) .ths-splash {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .ths-splash :global(.spinComp___WmjpF) {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 999999;
        }

        .ths-splash :global(.bgComp___CDQ82) {
          position: relative;
          width: 100%;
          height: 100%;
          pointer-events: auto;
          background: #080c16;
        }

        .ths-splash :global(.spin___Ilah7) {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .ths-splash :global(.ant-spin) {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: #3555d3;
          font-size: 14px;
          font-variant: tabular-nums;
          line-height: 1.5715;
          list-style: none;
          font-feature-settings: 'tnum';
          position: absolute;
          display: none;
          color: rgba(0, 0, 0, 0.85);
          text-align: center;
          vertical-align: middle;
          opacity: 0;
          transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        }

        .ths-splash :global(.ant-spin-spinning) {
          position: static;
          display: inline-block;
          opacity: 1;
        }

        .ths-splash :global(.ant-spin-dot) {
          position: relative;
          display: inline-block;
          font-size: 20px;
          width: 1em;
          height: 1em;
        }

        .ths-splash :global(.ant-spin-dot-spin) {
          transform: rotate(45deg);
          animation: antRotate 1.2s infinite linear;
        }

        .ths-splash :global(.ant-spin-dot-item) {
          position: absolute;
          display: block;
          width: 9px;
          height: 9px;
          background-color: #3555d3;
          border-radius: 100%;
          transform: scale(0.75);
          transform-origin: 50% 50%;
          opacity: 0.3;
          animation: antSpinMove 1s infinite linear alternate;
        }

        .ths-splash :global(.ths-load-brand) {
          position: absolute;
          top: 72%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          pointer-events: none;
          text-align: center;
          z-index: 2147483647;
        }

        .ths-splash :global(.ths-load-brand img) {
          height: 44px;
          width: auto;
          display: block;
        }

        .ths-splash :global(.ths-logo-text) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .ths-splash :global(.ths-logo-text span:first-child) {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.4px;
          font-family: 'Inter', 'Be Vietnam Pro', sans-serif;
        }

        .ths-splash :global(.ths-logo-text span:last-child) {
          font-size: 9.5px;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1.2px;
          font-family: 'Inter', 'Be Vietnam Pro', sans-serif;
        }

        .ths-splash :global(.ant-spin-dot-item:nth-child(1)) {
          top: 0;
          left: 0;
        }

        .ths-splash :global(.ant-spin-dot-item:nth-child(2)) {
          top: 0;
          right: 0;
          animation-delay: 0.4s;
        }

        .ths-splash :global(.ant-spin-dot-item:nth-child(3)) {
          right: 0;
          bottom: 0;
          animation-delay: 0.8s;
        }

        .ths-splash :global(.ant-spin-dot-item:nth-child(4)) {
          bottom: 0;
          left: 0;
          animation-delay: 1.2s;
        }

        @keyframes antSpinMove {
          to {
            opacity: 1;
          }
        }

        @keyframes antRotate {
          to {
            transform: rotate(405deg);
          }
        }

        .shell {
          max-width: 1120px;
          margin: 0 auto;
        }

        .head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .title {
          display: flex;
          gap: 14px;
          align-items: center;
          min-width: 280px;
        }

        .title-mark {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #eaf0ff 0%, #f8fbff 100%);
          color: #3555d3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
          box-shadow: inset 0 0 0 1px rgba(53, 85, 211, 0.1);
        }

        .title-main {
          margin: 0;
          font-size: 22px;
          font-weight: 850;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .title-sub {
          margin: 7px 0 0;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .toolbar {
          display: grid;
          grid-template-columns: minmax(280px, 1fr) auto;
          gap: 12px;
          align-items: center;
          flex: 1;
          max-width: 720px;
        }

        .search {
          position: relative;
          min-width: 0;
        }

        .search :global(.icon-search) {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
        }

        .search input {
          width: 100%;
          height: 48px;
          border-radius: 16px;
          border: 1px solid #d6dbe5;
          background: #fff;
          color: #0f172a;
          caret-color: #0f172a;
          -webkit-text-fill-color: #0f172a;
          padding: 0 16px 0 48px;
          font-size: 14px;
          font-weight: 500;
          line-height: 48px;
          outline: none;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .search input::placeholder {
          color: #94a3b8;
          -webkit-text-fill-color: #94a3b8;
        }

        .search input:focus {
          border-color: #3555d3;
          box-shadow: 0 0 0 4px rgba(53, 85, 211, 0.1);
        }

        .cta {
          min-height: 48px;
          border-radius: 16px;
          border: 1px solid transparent;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          background: #3555d3;
          box-shadow: 0 12px 26px rgba(53, 85, 211, 0.22);
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
        }

        .cta:focus-visible {
          outline: 3px solid rgba(53, 85, 211, 0.32);
          outline-offset: 3px;
        }

        .meta-line {
          display: flex;
          gap: 10px;
          align-items: center;
          margin: 10px 0 16px;
          color: #64748b;
          font-size: 13px;
        }

        .list {
          background: #fff;
          border: 1px solid #dde3ee;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.06);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
          gap: 16px;
          padding: 20px;
        }

        .card {
          border-radius: 20px;
          border: 1px solid #e8edf5;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 232px;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
          transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
        }

        .card:hover {
          transform: translateY(-2px);
          border-color: #d6dff0;
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
        }

        .thumb {
          width: 100%;
          height: 144px;
          background: linear-gradient(135deg, #edf3ff 0%, #f8fbff 100%);
          position: relative;
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .thumb-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          color: #3555d3;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 11px;
        }

        .card-body {
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .name {
          margin: 0;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .date {
          color: #64748b;
          font-size: 12px;
          line-height: 1.4;
        }

        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 10px;
          justify-content: space-between;
          align-items: center;
        }

        .open-link {
          min-height: 44px;
          padding: 0 14px;
          border-radius: 14px;
          background: #3555d3;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          font-weight: 800;
          line-height: 1;
          flex: 1;
          transition: background 160ms ease, transform 160ms ease;
        }

        .open-link:hover,
        .cta:hover {
          background: #2746bd;
          transform: translateY(-1px);
        }

        .open-link:focus-visible {
          outline: 3px solid rgba(53, 85, 211, 0.32);
          outline-offset: 3px;
        }

        .delete-btn {
          width: 44px;
          min-height: 44px;
          border-radius: 14px;
          border: 1px solid #fecaca;
          background: #fff5f5;
          color: #dc2626;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex: none;
          transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
        }

        .delete-btn:hover {
          transform: translateY(-1px);
          border-color: #fca5a5;
          background: #fff1f2;
        }

        .delete-btn:focus-visible {
          outline: 3px solid rgba(53, 85, 211, 0.32);
          outline-offset: 3px;
        }

        .empty {
          padding: 52px 24px;
          text-align: center;
          color: #64748b;
        }

        .empty h3 {
          margin: 0;
          color: #0f172a;
          font-size: 18px;
        }

        .empty p {
          margin: 10px auto 0;
          max-width: 520px;
          line-height: 1.7;
          font-size: 14px;
        }

        .loadmore {
          padding: 16px 24px 22px;
          border-top: 1px solid #eef2f7;
          display: flex;
          justify-content: center;
        }

        .loadmore button {
          min-height: 48px;
          min-width: 180px;
          border-radius: 14px;
          border: 1px solid #d6dbe5;
          background: #fff;
          cursor: pointer;
          font-weight: 800;
          color: #0f172a;
        }

        .loadmore button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .notice {
          margin: 14px 0 0;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #fecaca;
          background: #fff1f2;
          color: #b91c1c;
          font-size: 14px;
          line-height: 1.6;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.42);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 100;
        }

        .modal {
          width: min(100%, 420px);
          background: #fff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
        }

        .modal h3 {
          margin: 0;
          font-size: 22px;
        }

        .modal p {
          margin: 10px 0 0;
          color: #64748b;
          line-height: 1.7;
          font-size: 14px;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 24px;
        }

        .modal-cancel,
        .modal-danger {
          min-height: 44px;
          border-radius: 14px;
          padding: 0 16px;
          font-weight: 800;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .modal-cancel {
          background: #f3f4f6;
          color: #0f172a;
          border-color: #e5e7eb;
        }

        .modal-danger {
          background: #dc2626;
          color: #fff;
        }

        @media (max-width: 720px) {
          .toolbar {
            grid-template-columns: 1fr;
          }

          .grid {
            grid-template-columns: 1fr;
            padding: 14px;
          }

          .card {
            min-height: 0;
          }

          .thumb {
            height: 160px;
          }
        }
      `}</style>

      <div className="ths-splash" aria-hidden="true">
        <div className="spinComp___WmjpF">
          <div className="bgComp___CDQ82" />
          <div className="spin___Ilah7">
            <span className="ant-spin ant-spin-spinning">
              <span className="ant-spin-dot ant-spin-dot-spin">
                <i className="ant-spin-dot-item" />
                <i className="ant-spin-dot-item" />
                <i className="ant-spin-dot-item" />
                <i className="ant-spin-dot-item" />
              </span>
            </span>
          </div>
          <div className="ths-load-brand">
            <img src="https://truonghocsoquocgia.vn/assets/logo/Logomark.svg" alt="THS Logo" />
            <div className="ths-logo-text">
              <span>TRƯỜNG HỌC SỐ</span>
              <span>PHÒNG THÍ NGHIỆM ẢO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="shell">
          <div className="head">
            <div className="title">
              <div className="title-mark">
                <FlaskIcon />
              </div>
              <div>
                <h1 className="title-main">Thí nghiệm hóa học</h1>
                <div className="title-sub">Thí nghiệm mẫu {total} Mục</div>
              </div>
            </div>

            <div className="toolbar">
              <div className="search">
                <SearchIcon />
                <input
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      event.preventDefault()
                      loadReplace()
                    }
                  }}
                  placeholder="Tìm kiếm..."
                  aria-label="Tìm kiếm thí nghiệm"
                />
              </div>

              <a href={getOpenHref()} className="cta" aria-label="Tạo thí nghiệm mới">
                <PlusIcon />
                Tạo thí nghiệm mới
              </a>
            </div>
          </div>

          {/* <div className="meta-line">
            <span>{list.length} / {total || 0}</span>
            <span>•</span>
            <span>Cập nhật: {latest ? formatTinyDate(latest) : '—'}</span>
          </div> */}

          {error && (
            <div className="notice" role="alert" aria-live="polite">
              {error}
            </div>
          )}

          <section className="list" aria-busy={loading ? 'true' : 'false'}>
            {loading ? (
              <div className="empty">
                <h3>Đang tải...</h3>
              </div>
            ) : list.length === 0 ? (
              <div className="empty">
                <h3>Chưa có thí nghiệm</h3>
                <p>Không tìm thấy dữ liệu về thí nghiệm của bạn.</p>
              </div>
            ) : (
              <div className="grid">
                {list.map(exp => (
                  <article key={exp.id} className="card">
                    <div className="thumb">
                      {exp.thumbnailUrl && !failedThumbnails.has(exp.id) ? (
                        <img
                          src={exp.thumbnailUrl}
                          alt={`Ảnh thumbnail của ${exp.name}`}
                          loading="lazy"
                          decoding="async"
                          onError={() => {
                            setFailedThumbnails(prev => {
                              const next = new Set(prev)
                              next.add(exp.id)
                              return next
                            })
                          }}
                        />
                      ) : (
                        <div className="thumb-fallback" aria-label={`Không có ảnh thumbnail cho ${exp.name}`}>
                          <FlaskIcon />
                          <span>Không ảnh</span>
                        </div>
                      )}
                    </div>

                    <div className="card-body">
                      <h2 className="name">{exp.name}</h2>
                      <div className="date">Cập nhật {formatTinyDate(exp.updateTime)}</div>

                      <div className="card-actions">
                        <a href={getOpenHref(exp.id, exp.moduleId)} className="open-link" aria-label={`Mở thí nghiệm ${exp.name}`}>
                          <PlayIcon />
                          Mở
                        </a>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={event => {
                            lastDeleteTriggerRef.current = event.currentTarget
                            setDeleteTarget({ id: exp.id, name: exp.name })
                          }}
                          aria-label={`Xóa thí nghiệm ${exp.name}`}
                          title="Xóa thí nghiệm"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {!loading && list.length > 0 && canLoadMore && (
              <div className="loadmore">
                <button type="button" onClick={loadMore} disabled={loadMoreLoading}>
                  {loadMoreLoading ? 'Đang load...' : 'Load more'}
                </button>
              </div>
            )}
          </section>
        </div>

        {deleteTarget && (
          <div
            className="modal-backdrop"
            role="presentation"
            onClick={event => {
              if (event.target === event.currentTarget) closeDeleteModal()
            }}
          >
            <div
              ref={deleteDialogRef}
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="delete-dialog-title"
              aria-describedby="delete-dialog-desc"
              onKeyDown={handleDeleteKeyDown}
            >
              <h3 id="delete-dialog-title">Xóa thí nghiệm?</h3>
              <p id="delete-dialog-desc">
                Bạn sắp xóa <strong>{deleteTarget.name}</strong>. Hành động này không hoàn tác.
              </p>
              <div className="modal-actions">
                <button type="button" ref={cancelDeleteRef} className="modal-cancel" onClick={closeDeleteModal}>
                  Hủy
                </button>
                <button type="button" className="modal-danger" onClick={handleDeleteConfirm} disabled={deleteLoading}>
                  {deleteLoading ? 'Đang xóa...' : 'Xóa'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
