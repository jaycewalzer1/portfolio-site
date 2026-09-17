import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__intro">Jayce Walzer</p>
        <h1 className="hero__title">
          I build things<br />for the web.
        </h1>
        <p className="hero__desc">
          Full-stack developer focused on clean interfaces,
          solid architecture, and shipping real products.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn-neutral btn-neutral--filled">See my work</a>
          <a href="#contact" className="btn-neutral">Contact me</a>
        </div>
      </div>
      <div className="hero__ornament" aria-hidden="true">
        <svg viewBox="0 0 300 480" className="hero__figure">
          {/* ===== MAYAN FIGURE ===== */}

          {/* Headdress - elaborate feathered crown */}
          <path d="M150 60 L130 45 L110 55 L95 35 L85 50 L70 30 L75 55 L60 50 L80 70"
                stroke="var(--dark-leaf)" strokeWidth="1.5" fill="var(--leaf)" opacity="0.7" />
          <path d="M150 60 L170 45 L190 55 L205 35 L215 50 L230 30 L225 55 L240 50 L220 70"
                stroke="var(--dark-leaf)" strokeWidth="1.5" fill="var(--leaf)" opacity="0.7" />
          {/* Headdress feather tips */}
          <path d="M70 30 L65 18 L72 28" fill="var(--leaf)" opacity="0.5" />
          <path d="M95 35 L90 20 L97 32" fill="var(--dark-leaf)" opacity="0.5" />
          <path d="M230 30 L235 18 L228 28" fill="var(--leaf)" opacity="0.5" />
          <path d="M205 35 L210 20 L203 32" fill="var(--dark-leaf)" opacity="0.5" />
          {/* Center headdress plume */}
          <path d="M150 60 L145 25 L150 10 L155 25 L150 60" fill="var(--dark-leaf)" opacity="0.6" />
          <circle cx="150" cy="10" r="4" fill="var(--gold)" />
          <circle cx="150" cy="10" r="2" fill="var(--teal)" />

          {/* Headdress band with gems */}
          <rect x="100" y="62" width="100" height="10" rx="2" fill="var(--gold)" opacity="0.8" />
          <circle cx="120" cy="67" r="3" fill="var(--teal)" />
          <circle cx="150" cy="67" r="4" fill="var(--teal)" />
          <circle cx="180" cy="67" r="3" fill="var(--teal)" />
          {/* Band end tassels */}
          <line x1="100" y1="67" x2="88" y2="80" stroke="var(--gold)" strokeWidth="1.5" />
          <circle cx="88" cy="82" r="2.5" fill="var(--gold)" />
          <circle cx="88" cy="82" r="1.5" fill="var(--teal)" />
          <line x1="200" y1="67" x2="212" y2="80" stroke="var(--gold)" strokeWidth="1.5" />
          <circle cx="212" cy="82" r="2.5" fill="var(--gold)" />
          <circle cx="212" cy="82" r="1.5" fill="var(--teal)" />

          {/* Face - geometric Mayan style */}
          <rect x="125" y="75" width="50" height="55" rx="4" fill="var(--clay)" opacity="0.7" />
          {/* Eyes - angular */}
          <path d="M133 90 L143 86 L143 94 Z" fill="var(--bark)" opacity="0.6" />
          <path d="M167 90 L157 86 L157 94 Z" fill="var(--bark)" opacity="0.6" />
          {/* Nose - stepped */}
          <path d="M147 95 L150 100 L153 95" stroke="var(--brown)" strokeWidth="1.2" fill="none" />
          {/* Mouth */}
          <path d="M140 108 Q150 114 160 108" stroke="var(--brown)" strokeWidth="1.2" fill="none" />
          {/* Ear plugs */}
          <circle cx="122" cy="95" r="5" fill="var(--gold)" opacity="0.6" />
          <circle cx="122" cy="95" r="2.5" fill="var(--teal)" opacity="0.5" />
          <circle cx="178" cy="95" r="5" fill="var(--gold)" opacity="0.6" />
          <circle cx="178" cy="95" r="2.5" fill="var(--teal)" opacity="0.5" />

          {/* Necklace / Collar - layered gold with gems */}
          <path d="M115 130 Q150 150 185 130" stroke="var(--gold)" strokeWidth="3" fill="none" />
          <path d="M110 135 Q150 158 190 135" stroke="var(--gold)" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="130" cy="140" r="3" fill="var(--teal)" />
          <circle cx="150" cy="148" r="4" fill="var(--teal)" />
          <circle cx="170" cy="140" r="3" fill="var(--teal)" />
          {/* Pendant */}
          <line x1="150" y1="148" x2="150" y2="162" stroke="var(--gold)" strokeWidth="1.5" />
          <path d="M143 162 L150 175 L157 162 Z" fill="var(--gold)" />
          <circle cx="150" cy="166" r="2.5" fill="var(--teal)" />

          {/* Torso - geometric patterned */}
          <path d="M120 130 L110 200 L120 260 L180 260 L190 200 L180 130 Z"
                fill="var(--clay)" opacity="0.4" stroke="var(--brown)" strokeWidth="1" />
          {/* Chest plate pattern - stepped Mayan motif */}
          <rect x="135" y="180" width="30" height="30" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.5" />
          <rect x="140" y="185" width="20" height="20" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.4" />
          <rect x="145" y="190" width="10" height="10" fill="var(--gold)" opacity="0.15" />
          <circle cx="150" cy="195" r="3" fill="var(--teal)" opacity="0.4" />

          {/* Belt / Waist piece */}
          <rect x="112" y="255" width="76" height="14" rx="2" fill="var(--gold)" opacity="0.5" />
          <circle cx="130" cy="262" r="3" fill="var(--teal)" opacity="0.5" />
          <circle cx="150" cy="262" r="4" fill="var(--teal)" opacity="0.6" />
          <circle cx="170" cy="262" r="3" fill="var(--teal)" opacity="0.5" />
          {/* Belt dangles */}
          <line x1="125" y1="269" x2="125" y2="285" stroke="var(--gold)" strokeWidth="1" opacity="0.5" />
          <line x1="150" y1="269" x2="150" y2="290" stroke="var(--gold)" strokeWidth="1.2" opacity="0.5" />
          <line x1="175" y1="269" x2="175" y2="285" stroke="var(--gold)" strokeWidth="1" opacity="0.5" />
          <circle cx="125" cy="287" r="2" fill="var(--teal)" opacity="0.4" />
          <circle cx="150" cy="292" r="2.5" fill="var(--teal)" opacity="0.5" />
          <circle cx="175" cy="287" r="2" fill="var(--teal)" opacity="0.4" />

          {/* Arms */}
          <path d="M120 135 Q95 170 80 200 Q75 215 85 220"
                stroke="var(--clay)" strokeWidth="8" fill="none" opacity="0.5" strokeLinecap="round" />
          <path d="M180 135 Q205 170 220 200 Q225 215 215 220"
                stroke="var(--clay)" strokeWidth="8" fill="none" opacity="0.5" strokeLinecap="round" />
          {/* Arm bands */}
          <circle cx="95" cy="175" r="6" fill="none" stroke="var(--gold)" strokeWidth="2" opacity="0.5" />
          <circle cx="205" cy="175" r="6" fill="none" stroke="var(--gold)" strokeWidth="2" opacity="0.5" />
          {/* Wrist cuffs */}
          <rect x="76" y="212" width="16" height="8" rx="2" fill="var(--gold)" opacity="0.5" />
          <circle cx="84" cy="216" r="2" fill="var(--teal)" opacity="0.4" />
          <rect x="208" y="212" width="16" height="8" rx="2" fill="var(--gold)" opacity="0.5" />
          <circle cx="216" cy="216" r="2" fill="var(--teal)" opacity="0.4" />

          {/* Legs / Loincloth */}
          <path d="M125 270 L120 350 L135 350" stroke="var(--clay)" strokeWidth="6" fill="none" opacity="0.4" strokeLinecap="round" />
          <path d="M175 270 L180 350 L165 350" stroke="var(--clay)" strokeWidth="6" fill="none" opacity="0.4" strokeLinecap="round" />
          {/* Loincloth front panel */}
          <path d="M130 260 L140 310 L150 320 L160 310 L170 260"
                fill="var(--parchment)" stroke="var(--gold)" strokeWidth="0.8" opacity="0.6" />
          {/* Loincloth pattern */}
          <path d="M145 280 L150 290 L155 280" stroke="var(--gold)" strokeWidth="0.6" fill="none" opacity="0.5" />
          <circle cx="150" cy="285" r="1.5" fill="var(--teal)" opacity="0.4" />

          {/* Ankle bands */}
          <rect x="117" y="340" width="18" height="6" rx="1" fill="var(--gold)" opacity="0.4" />
          <rect x="165" y="340" width="18" height="6" rx="1" fill="var(--gold)" opacity="0.4" />

          {/* Sandals */}
          <path d="M115 350 L115 358 L140 358 L140 350" fill="var(--brown)" opacity="0.3" />
          <path d="M160 350 L160 358 L185 358 L185 350" fill="var(--brown)" opacity="0.3" />

          {/* Staff in right hand */}
          <line x1="215" y1="220" x2="230" y2="380" stroke="var(--brown)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          {/* Staff head - serpent */}
          <path d="M215 220 Q210 205 215 195 Q220 188 225 192 Q222 200 218 210"
                stroke="var(--dark-leaf)" strokeWidth="2" fill="var(--leaf)" opacity="0.5" />
          <circle cx="222" cy="190" r="1.5" fill="var(--bark)" opacity="0.5" />
          {/* Staff gems */}
          <circle cx="220" cy="240" r="2.5" fill="var(--gold)" opacity="0.5" />
          <circle cx="220" cy="240" r="1.5" fill="var(--teal)" opacity="0.4" />
          <circle cx="223" cy="280" r="2" fill="var(--gold)" opacity="0.4" />
          <circle cx="223" cy="280" r="1.2" fill="var(--teal)" opacity="0.3" />

          {/* Stepped platform base */}
          <rect x="100" y="360" width="100" height="6" rx="1" fill="var(--clay)" opacity="0.25" />
          <rect x="90" y="367" width="120" height="6" rx="1" fill="var(--clay)" opacity="0.2" />
          <rect x="80" y="374" width="140" height="6" rx="1" fill="var(--clay)" opacity="0.15" />

          {/* Glyph carvings on platform */}
          <rect x="105" y="361" width="8" height="4" rx="1" fill="var(--gold)" opacity="0.2" />
          <rect x="120" y="361" width="8" height="4" rx="1" fill="var(--gold)" opacity="0.2" />
          <rect x="172" y="361" width="8" height="4" rx="1" fill="var(--gold)" opacity="0.2" />
          <rect x="187" y="361" width="8" height="4" rx="1" fill="var(--gold)" opacity="0.2" />
        </svg>
      </div>
    </section>
  )
}
