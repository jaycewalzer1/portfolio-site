import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about__header">
          <span className="about__glyph">{'\u2726'}</span>
          <h2 className="about__title">About Me</h2>
          <div className="about__divider" />
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a passionate full-stack developer who thrives on building
              elegant, performant web applications. With a deep appreciation for
              both clean code architecture and striking visual design, I craft
              digital experiences that are as robust under the hood as they are
              beautiful on the surface.
            </p>
            <p>
              My approach blends modern frameworks and cutting-edge tooling with
              timeless design principles &mdash; merging the precision of
              technology with the artistry of ancient civilizations.
            </p>
          </div>

          <div className="about__stats">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '15+', label: 'Projects Built' },
              { value: '5+', label: 'Technologies' },
              { value: '100%', label: 'Passion' },
            ].map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative temple border */}
      <div className="about__temple-border">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="about__temple-block" />
        ))}
      </div>
    </section>
  )
}
