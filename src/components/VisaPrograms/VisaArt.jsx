export default function VisaArt({ artClass, Icon, title, region, statNum, statLabel }) {
  return (
    <div className={`visa-art ${artClass}`}>
      <div className="visa-art__dots" />
      <div className="visa-art__inner">
        <div className="visa-art__emoji"><Icon size={64} color="#D4A856" strokeWidth={1.5} /></div>
        <div className="visa-art__country">{title}</div>
        <div className="visa-art__region">{region}</div>
        <div className="visa-art__stat">
          <div className="visa-art__stat-num">{statNum}</div>
          <div className="visa-art__stat-label">{statLabel}</div>
        </div>
      </div>
    </div>
  )
}
