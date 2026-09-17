import { useState } from 'react'
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
        <h2 className="section-title">Get in touch</h2>
        <div className="contact__layout">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} />
            </div>
            <button type="submit" className="btn-neutral btn-neutral--filled">
              Send message
            </button>
          </form>

          <div className="contact__aside">
            <p>
              I'm currently looking for new opportunities. Whether you have a
              role in mind or just want to say hello, I'd love to hear from you.
            </p>
            <div className="contact__links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/Jaycewalzer" target="_blank" rel="noopener noreferrer">X</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
