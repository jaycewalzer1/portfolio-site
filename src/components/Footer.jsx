import './Footer.css'

const glyphs = ['\u13A0', '\u13A2', '\u13A4', '\u13A6', '\u13A8']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glyphs">
        {glyphs.map((g, i) => (
          <span key={i} className="footer__glyph">{g}</span>
        ))}
      </div>
      <div className="footer__line" />
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Jayce Walzer. Forged with React.
      </p>
    </footer>
  )
}
