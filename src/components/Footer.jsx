import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer__inner">
        <span className="footer__name">Jayce Walzer</span>
        <span className="footer__sep" aria-hidden="true" />
        <a href="https://x.com/Jaycewalzer" className="footer__x" target="_blank" rel="noopener noreferrer">@Jaycewalzer</a>
        <span className="footer__sep" aria-hidden="true" />
        <span className="footer__copy">&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
