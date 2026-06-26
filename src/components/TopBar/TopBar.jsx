import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <span className="topbar__left">
        <span className="topbar__badge">INTERVIEW PREPARATION</span>
        Speak with a senior migration advisor — 7 days a week, 9am–7pm
      </span>
      <span className="topbar__right">
        <a href="tel:+18001234567" className="topbar__phone">+1 (800) 123-4567</a>
        <span className="topbar__dot">·</span>
        <a href="tel:+448001234567" className="topbar__phone">+44 800 123 4567</a>
      </span>
    </div>
  )
}
