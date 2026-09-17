import { useState } from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:walzerjayce@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
    window.location.href = mailto
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <span className="section-label">Contact</span>
        <div className="glyph-divider" aria-hidden="true">
          <span className="glyph-divider__line" />
          <span className="glyph-divider__motif">
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
            <span className="glyph-divider__step" />
          </span>
          <span className="glyph-divider__line" />
        </div>
        <div className="contact__layout">
          <div className="contact__intro">
            <h2 className="contact__title">Let's work together</h2>
            <p className="contact__desc">
              I'm currently looking for new opportunities. Whether you have a
              role in mind or just want to say hello, I'd love to hear from you.
            </p>
            <a href="mailto:walzerjayce@gmail.com" className="contact__email">
              <Mail size={16} />
              walzerjayce@gmail.com
            </a>
            <div className="contact__links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={13} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href="https://x.com/Jaycewalzer" target="_blank" rel="noopener noreferrer">
                X <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Your message..." />
            </div>
            <button type="submit" className="btn btn--primary contact__submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
