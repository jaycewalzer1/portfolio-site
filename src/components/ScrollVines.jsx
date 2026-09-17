import { useEffect, useRef } from 'react'
import './ScrollVines.css'

function VineDivider({ variant = 'a', flip = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const transform = flip ? 'scale(-1, 1)' : undefined

  if (variant === 'a') {
    return (
      <div ref={ref} className="vine-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ transform, height: 80 }}>
          {/* Main sweeping vine */}
          <path
            className="vine-stem"
            d="M-20 60 C100 60, 150 20, 300 25 S500 55, 600 40 S750 10, 900 30 S1050 60, 1220 45"
            stroke="var(--dark-leaf)" strokeWidth="2.5" fill="none" opacity="0.5"
            style={{ '--dash-len': 1400 }}
          />
          {/* Secondary thinner vine */}
          <path
            className="vine-stem"
            d="M-10 55 C80 50, 200 30, 320 35 S480 60, 580 48 S720 18, 880 38 S1020 55, 1220 40"
            stroke="var(--leaf)" strokeWidth="1.5" fill="none" opacity="0.35"
            style={{ '--dash-len': 1400 }}
          />
          {/* Curling tendrils */}
          <path className="vine-stem" d="M200 28 C210 15, 225 12, 220 25" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 60 }} />
          <path className="vine-stem" d="M500 42 C508 30, 520 28, 515 40" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 60 }} />
          <path className="vine-stem" d="M800 28 C810 16, 822 14, 818 27" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 60 }} />
          <path className="vine-stem" d="M1050 48 C1060 36, 1072 34, 1068 47" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 60 }} />

          {/* Leaves along the vine */}
          <g className="vine-leaf" style={{ '--rot': '-25deg', '--ox': '305px', '--oy': '25px' }}>
            <path d="M300 25 C308 15, 318 14, 315 25 C312 36, 302 35, 300 25Z" fill="var(--leaf)" opacity="0.55" />
            <line x1="300" y1="25" x2="315" y2="25" stroke="var(--dark-leaf)" strokeWidth="0.5" opacity="0.4" />
          </g>
          <g className="vine-leaf" style={{ '--rot': '15deg', '--ox': '450px', '--oy': '48px' }}>
            <path d="M445 48 C452 38, 462 36, 460 47 C458 58, 448 58, 445 48Z" fill="var(--dark-leaf)" opacity="0.45" />
            <line x1="445" y1="48" x2="460" y2="47" stroke="var(--dark-leaf)" strokeWidth="0.5" opacity="0.3" />
          </g>
          <g className="vine-leaf" style={{ '--rot': '-10deg', '--ox': '620px', '--oy': '38px' }}>
            <path d="M615 38 C622 28, 632 27, 630 38 C628 49, 618 48, 615 38Z" fill="var(--leaf)" opacity="0.5" />
          </g>
          <g className="vine-leaf" style={{ '--rot': '20deg', '--ox': '780px', '--oy': '18px' }}>
            <path d="M775 18 C782 8, 792 7, 790 18 C788 29, 778 28, 775 18Z" fill="var(--leaf)" opacity="0.45" />
          </g>
          <g className="vine-leaf" style={{ '--rot': '-15deg', '--ox': '950px', '--oy': '35px' }}>
            <path d="M945 35 C952 25, 962 24, 960 35 C958 46, 948 45, 945 35Z" fill="var(--dark-leaf)" opacity="0.5" />
          </g>
          <g className="vine-leaf" style={{ '--rot': '10deg', '--ox': '150px', '--oy': '42px' }}>
            <path d="M145 42 C152 32, 162 31, 160 42 C158 53, 148 52, 145 42Z" fill="var(--leaf)" opacity="0.4" />
          </g>
          <g className="vine-leaf" style={{ '--rot': '-30deg', '--ox': '1100px', '--oy': '42px' }}>
            <path d="M1095 42 C1102 32, 1112 31, 1110 42 C1108 53, 1098 52, 1095 42Z" fill="var(--leaf)" opacity="0.45" />
          </g>

          {/* Small flowers with Mayan gem centers */}
          <g className="vine-flower">
            <circle cx="380" cy="30" r="5" fill="var(--parchment)" opacity="0.6" />
            <circle cx="376" cy="27" r="2.5" fill="var(--parchment)" opacity="0.5" />
            <circle cx="384" cy="27" r="2.5" fill="var(--parchment)" opacity="0.5" />
            <circle cx="376" cy="33" r="2.5" fill="var(--parchment)" opacity="0.5" />
            <circle cx="384" cy="33" r="2.5" fill="var(--parchment)" opacity="0.5" />
          </g>
          <g className="vine-gem">
            <circle cx="380" cy="30" r="2.5" fill="var(--gold)" opacity="0.7" />
            <circle cx="380" cy="30" r="1.5" fill="var(--teal)" opacity="0.8" />
          </g>

          <g className="vine-flower">
            <circle cx="700" cy="22" r="4.5" fill="var(--parchment)" opacity="0.55" />
            <circle cx="696" cy="19" r="2.2" fill="var(--parchment)" opacity="0.45" />
            <circle cx="704" cy="19" r="2.2" fill="var(--parchment)" opacity="0.45" />
            <circle cx="696" cy="25" r="2.2" fill="var(--parchment)" opacity="0.45" />
            <circle cx="704" cy="25" r="2.2" fill="var(--parchment)" opacity="0.45" />
          </g>
          <g className="vine-gem">
            <circle cx="700" cy="22" r="2.2" fill="var(--gold)" opacity="0.7" />
            <circle cx="700" cy="22" r="1.3" fill="var(--teal)" opacity="0.8" />
          </g>

          <g className="vine-flower">
            <circle cx="1000" cy="38" r="4" fill="var(--parchment)" opacity="0.5" />
            <circle cx="997" cy="35" r="2" fill="var(--parchment)" opacity="0.4" />
            <circle cx="1003" cy="35" r="2" fill="var(--parchment)" opacity="0.4" />
            <circle cx="997" cy="41" r="2" fill="var(--parchment)" opacity="0.4" />
            <circle cx="1003" cy="41" r="2" fill="var(--parchment)" opacity="0.4" />
          </g>
          <g className="vine-gem">
            <circle cx="1000" cy="38" r="2" fill="var(--gold)" opacity="0.65" />
            <circle cx="1000" cy="38" r="1.2" fill="var(--teal)" opacity="0.75" />
          </g>
        </svg>
      </div>
    )
  }

  // Variant B — different curve pattern
  return (
    <div ref={ref} className="vine-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ transform, height: 80 }}>
        {/* Main vine arching differently */}
        <path
          className="vine-stem"
          d="M-20 40 C60 15, 200 10, 350 30 S550 65, 700 45 S850 8, 1000 25 S1150 50, 1220 35"
          stroke="var(--dark-leaf)" strokeWidth="2.5" fill="none" opacity="0.5"
          style={{ '--dash-len': 1400 }}
        />
        <path
          className="vine-stem"
          d="M-10 45 C70 22, 180 18, 330 35 S530 58, 680 42 S830 15, 980 32 S1130 52, 1220 38"
          stroke="var(--leaf)" strokeWidth="1.5" fill="none" opacity="0.35"
          style={{ '--dash-len': 1400 }}
        />

        {/* Tendrils */}
        <path className="vine-stem" d="M250 22 C258 10, 268 9, 265 22" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 55 }} />
        <path className="vine-stem" d="M550 58 C560 46, 570 45, 567 57" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 55 }} />
        <path className="vine-stem" d="M850 14 C858 2, 868 1, 865 14" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 55 }} />
        <path className="vine-stem" d="M1100 42 C1110 30, 1120 28, 1115 42" stroke="var(--leaf)" strokeWidth="1" fill="none" opacity="0.4" style={{ '--dash-len': 55 }} />

        {/* Leaves */}
        <g className="vine-leaf" style={{ '--rot': '20deg' }}>
          <path d="M180 18 C188 8, 198 7, 195 18 C192 29, 183 28, 180 18Z" fill="var(--leaf)" opacity="0.5" />
        </g>
        <g className="vine-leaf" style={{ '--rot': '-20deg' }}>
          <path d="M420 52 C428 42, 438 41, 435 52 C432 63, 422 62, 420 52Z" fill="var(--dark-leaf)" opacity="0.45" />
        </g>
        <g className="vine-leaf" style={{ '--rot': '10deg' }}>
          <path d="M600 50 C608 40, 618 39, 615 50 C612 61, 603 60, 600 50Z" fill="var(--leaf)" opacity="0.5" />
        </g>
        <g className="vine-leaf" style={{ '--rot': '-25deg' }}>
          <path d="M760 20 C768 10, 778 9, 775 20 C772 31, 763 30, 760 20Z" fill="var(--leaf)" opacity="0.45" />
        </g>
        <g className="vine-leaf" style={{ '--rot': '15deg' }}>
          <path d="M920 28 C928 18, 938 17, 935 28 C932 39, 923 38, 920 28Z" fill="var(--dark-leaf)" opacity="0.5" />
        </g>
        <g className="vine-leaf" style={{ '--rot': '-10deg' }}>
          <path d="M1080 40 C1088 30, 1098 29, 1095 40 C1092 51, 1083 50, 1080 40Z" fill="var(--leaf)" opacity="0.4" />
        </g>

        {/* Flowers with gems */}
        <g className="vine-flower">
          <circle cx="480" cy="58" r="5" fill="var(--parchment)" opacity="0.55" />
          <circle cx="476" cy="55" r="2.5" fill="var(--parchment)" opacity="0.45" />
          <circle cx="484" cy="55" r="2.5" fill="var(--parchment)" opacity="0.45" />
          <circle cx="476" cy="61" r="2.5" fill="var(--parchment)" opacity="0.45" />
          <circle cx="484" cy="61" r="2.5" fill="var(--parchment)" opacity="0.45" />
        </g>
        <g className="vine-gem">
          <circle cx="480" cy="58" r="2.5" fill="var(--gold)" opacity="0.7" />
          <circle cx="480" cy="58" r="1.5" fill="var(--teal)" opacity="0.8" />
        </g>

        <g className="vine-flower">
          <circle cx="820" cy="12" r="4" fill="var(--parchment)" opacity="0.5" />
          <circle cx="817" cy="9" r="2" fill="var(--parchment)" opacity="0.4" />
          <circle cx="823" cy="9" r="2" fill="var(--parchment)" opacity="0.4" />
          <circle cx="817" cy="15" r="2" fill="var(--parchment)" opacity="0.4" />
          <circle cx="823" cy="15" r="2" fill="var(--parchment)" opacity="0.4" />
        </g>
        <g className="vine-gem">
          <circle cx="820" cy="12" r="2" fill="var(--gold)" opacity="0.65" />
          <circle cx="820" cy="12" r="1.2" fill="var(--teal)" opacity="0.75" />
        </g>

        <g className="vine-flower">
          <path d="M130 32 C135 26, 140 30, 137 35 C134 40, 128 38, 130 32Z" fill="var(--parchment)" opacity="0.4" />
          <path d="M132 30 C128 25, 133 22, 136 28" fill="var(--parchment)" opacity="0.35" />
        </g>
        <g className="vine-gem">
          <circle cx="134" cy="32" r="1.5" fill="var(--gold)" opacity="0.6" />
          <circle cx="134" cy="32" r="0.9" fill="var(--teal)" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
}

function CornerVine({ position = 'top-left' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const styles = {
    'top-left': { top: -10, left: 0 },
    'top-right': { top: -10, right: 0 },
    'bottom-left': { bottom: -10, left: 0 },
    'bottom-right': { bottom: -10, right: 0 },
  }

  const isRight = position.includes('right')
  const isBottom = position.includes('bottom')

  return (
    <div
      ref={ref}
      className="vine-corner"
      style={styles[position]}
      aria-hidden="true"
    >
      <svg
        width="120" height="100" viewBox="0 0 120 100"
        style={{
          transform: `${isRight ? 'scaleX(-1)' : ''} ${isBottom ? 'scaleY(-1)' : ''}`.trim() || undefined
        }}
      >
        {/* Corner vine that curls around the edge */}
        <path
          className="vine-stem"
          d="M0 5 C20 5, 40 8, 55 15 S80 35, 85 50 S82 70, 70 80"
          stroke="var(--dark-leaf)" strokeWidth="2" fill="none" opacity="0.45"
          style={{ '--dash-len': 200 }}
        />
        <path
          className="vine-stem"
          d="M0 10 C15 12, 35 15, 48 22 S65 40, 68 52"
          stroke="var(--leaf)" strokeWidth="1.2" fill="none" opacity="0.3"
          style={{ '--dash-len': 140 }}
        />
        {/* Tendril */}
        <path className="vine-stem" d="M55 15 C60 8, 68 6, 65 15" stroke="var(--leaf)" strokeWidth="0.8" fill="none" opacity="0.35" style={{ '--dash-len': 40 }} />
        {/* Leaves */}
        <g className="vine-leaf" style={{ '--rot': '-20deg' }}>
          <path d="M42 12 C48 5, 55 4, 52 12 C50 20, 44 19, 42 12Z" fill="var(--leaf)" opacity="0.45" />
        </g>
        <g className="vine-leaf" style={{ '--rot': '15deg' }}>
          <path d="M75 42 C82 35, 88 34, 86 42 C84 50, 78 49, 75 42Z" fill="var(--dark-leaf)" opacity="0.4" />
        </g>
        <g className="vine-leaf" style={{ '--rot': '-10deg' }}>
          <path d="M65 68 C72 60, 78 59, 76 68 C74 77, 68 76, 65 68Z" fill="var(--leaf)" opacity="0.4" />
        </g>
        {/* Small flower */}
        <g className="vine-flower">
          <circle cx="58" cy="28" r="3.5" fill="var(--parchment)" opacity="0.5" />
          <circle cx="55" cy="26" r="1.8" fill="var(--parchment)" opacity="0.4" />
          <circle cx="61" cy="26" r="1.8" fill="var(--parchment)" opacity="0.4" />
          <circle cx="55" cy="31" r="1.8" fill="var(--parchment)" opacity="0.4" />
          <circle cx="61" cy="31" r="1.8" fill="var(--parchment)" opacity="0.4" />
        </g>
        <g className="vine-gem">
          <circle cx="58" cy="28" r="2" fill="var(--gold)" opacity="0.65" />
          <circle cx="58" cy="28" r="1.2" fill="var(--teal)" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
}

export { VineDivider, CornerVine }
