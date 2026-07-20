import { Component } from 'react'

// A render/transition crash anywhere below this boundary is caught here
// instead of unmounting the whole app to a blank screen. Because a full
// page reload always recovers (the crash only happens on client-side route
// transitions, not on a direct load of the same URL), we auto-reload once —
// time-guarded so a genuinely broken page can never reload-loop.
const RELOAD_KEY = 'shmully-last-reload'

function since(key) {
  try {
    return Date.now() - (Number(sessionStorage.getItem(key)) || 0)
  } catch {
    return Infinity
  }
}
function mark(key) {
  try {
    sessionStorage.setItem(key, String(Date.now()))
  } catch {
    /* private mode — ignore */
  }
}
function clear(key) {
  try {
    sessionStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

export default class ErrorBoundary extends Component {
  state = { crashed: false }

  static getDerivedStateFromError() {
    return { crashed: true }
  }

  componentDidCatch() {
    // Only auto-reload if we haven't already reloaded in the last 10s,
    // so a page that crashes even on direct load won't loop forever.
    if (since(RELOAD_KEY) > 10000) {
      mark(RELOAD_KEY)
      window.location.reload()
    }
  }

  handleReload = () => {
    clear(RELOAD_KEY)
    window.location.reload()
  }

  render() {
    if (this.state.crashed) {
      return (
        <div className="page" style={{ textAlign: 'center', paddingTop: '2.5rem' }}>
          <div className="card">
            <h3>🐷 One sec…</h3>
            <p className="muted" style={{ marginBottom: '0.9rem' }}>
              This page hiccuped. Reloading it fresh — if it doesn’t come back on its own, tap below.
            </p>
            <button className="btn" onClick={this.handleReload}>
              Reload the page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
