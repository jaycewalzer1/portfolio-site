import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <span className="section-label">About</span>
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
        <div className="about__body">
          <div className="about__text">
            <p>
              I got into programming by breaking things and figuring out how to
              put them back together. These days I do that professionally —
              building full-stack applications from database schemas to pixel-perfect
              interfaces.
            </p>
            <p>
              I care about writing code that other people can read, maintaining
              systems that don't page you at 3 AM, and shipping features that
              users actually want. Currently looking for a team where I can
              contribute meaningfully and keep growing.
            </p>
          </div>
          <aside className="about__details">
            <div className="about__detail">
              <span className="about__detail-label">Focus</span>
              <span>Full-stack web development</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Location</span>
              <span>Remote / flexible</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Experience</span>
              <span>3+ years building for the web</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
