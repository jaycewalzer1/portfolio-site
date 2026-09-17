import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer__inner">
        <span className="footer__copy">&copy; {new Date().getFullYear()} Jayce Walzer</span>
        <div className="footer__links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/Jaycewalzer" target="_blank" rel="noopener noreferrer">@Jaycewalzer</a>
        </div>
      </div>
    </footer>
  )
}
