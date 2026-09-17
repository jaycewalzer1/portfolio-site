import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:your.email@example.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
    window.location.href = mailto
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="contact__header">
          <span className="contact__glyph">{'\u2721'}</span>
          <h2 className="contact__title">Transmit</h2>
          <div className="contact__divider" />
          <p className="contact__subtitle">
            Ready to build something extraordinary? Let's connect.
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">Designation</label>
              <input
                className="contact__input"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="email">Signal Frequency</label>
              <input
                className="contact__input"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Transmission</label>
              <textarea
                className="contact__input contact__textarea"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={5}
              />
            </div>

            <button type="submit" className="contact__submit">
              <span className="contact__submit-glyph">{'\u2736'}</span>
              Send Transmission
            </button>
          </form>

          <div className="contact__info">
            <div className="contact__info-block">
              <h3 className="contact__info-title">Location</h3>
              <p className="contact__info-text">Available Remotely</p>
            </div>
            <div className="contact__info-block">
              <h3 className="contact__info-title">Links</h3>
              <div className="contact__links">
                <a href="https://github.com/" className="contact__ext-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com/" className="contact__ext-link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="contact__info-block">
              <h3 className="contact__info-title">Status</h3>
              <div className="contact__status">
                <span className="contact__status-dot" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
