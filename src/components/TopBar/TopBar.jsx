import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <span className="topbar__left">
        <span className="topbar__badge">NOW ENROLLING</span>
        Career training, interview prep & mentorship — speak to an advisor 7 days
      </span>
      <span className="topbar__right">
        <a href="tel:+18001234567" className="topbar__phone">+1 (800) 123-4567</a>
        <span className="topbar__dot">·</span>
        <a href="tel:+448001234567" className="topbar__phone">+44 800 123 4567</a>
      </span>
    </div>
  )
}
