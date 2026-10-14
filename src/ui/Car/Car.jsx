import './car.css'

const BODY =
  'M58 112 L72 96 L150 88 L212 72 Q238 56 262 58 L272 72 L320 76 L362 84 L432 96 L520 108 L584 116 L588 123 L520 123 L432 121 L362 121 L300 124 L160 124 L72 122 Z'

const DARK = '#16161a'

function Wheel({ cx, r = 34 }) {
  const cy = 150 - r
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#0b0b0e" />
      <circle cx={cx} cy={cy} r={r - 3} fill="none" stroke="#1f1f25" strokeWidth="3" />
      <circle
        cx={cx} cy={cy} r={r * 0.8} fill="none" stroke="#ffd21f" strokeWidth="2"
        strokeDasharray={`${r * 0.9} ${r * 0.45}`} className="spin"
      />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="#202027" />
      <g className="spin">
        {[0, 45, 90, 135].map((a) => (
          <line
            key={a} x1={cx} y1={cy - r * 0.56} x2={cx} y2={cy + r * 0.56}
            stroke="#55555f" strokeWidth="2.5" transform={`rotate(${a} ${cx} ${cy})`}
          />
        ))}
      </g>
      <circle cx={cx} cy={cy} r={r * 0.16} fill="#e10600" />
    </g>
  )
}

export default function Car() {
  return (
    <svg viewBox="0 0 610 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Formula car">
      <defs>
        <linearGradient id="carBody" x1="0" x2="1">
          <stop offset="0" stopColor="#6e0200" />
          <stop offset=".45" stopColor="#e10600" />
          <stop offset="1" stopColor="#ff3b2f" />
        </linearGradient>
        <linearGradient id="carShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" />
          <stop offset=".45" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="carPod" x1="0" x2="1">
          <stop offset="0" stopColor="#7a0300" />
          <stop offset="1" stopColor="#c40500" />
        </linearGradient>
      </defs>

      <ellipse cx="310" cy="152" rx="290" ry="6" fill="#000" opacity=".55" />

      {/* rear wing */}
      <path d="M24 34 L36 34 L38 112 L26 112 Z" fill={DARK} />
      <path d="M28 38 L96 34 L96 43 L28 47 Z" fill={DARK} />
      <path d="M28 50 L98 46 L98 56 L28 60 Z" fill="#e10600" />
      <path d="M78 56 L86 56 L92 96 L84 96 Z" fill={DARK} />
      <path d="M32 94 L84 92 L84 98 L32 100 Z" fill="#e10600" />
      <rect x="26" y="114" width="8" height="6" rx="1" fill="#ff3b2f" className="rain-light" />

      {/* floor + diffuser */}
      <path d="M60 124 L548 126 L548 132 L60 133 Z" fill="#0d0d10" />
      <path d="M44 118 L76 116 L76 132 L50 134 Z" fill="#0d0d10" />

      {/* suspension */}
      <path d="M160 102 L118 116 M160 112 L118 118" stroke={DARK} strokeWidth="3" />
      <path d="M430 100 L468 116 M430 112 L468 118" stroke={DARK} strokeWidth="3" />

      {/* body */}
      <path d={BODY} fill="url(#carBody)" />
      <path d="M128 90 L232 68 L238 52 L136 80 Z" fill="#b80400" />
      <path d="M228 96 L336 92 Q350 94 348 106 L344 121 L228 123 Z" fill="url(#carPod)" />
      <path d="M332 94 L347 97 L345 113 L333 113 Z" fill="#0d0d10" />
      <path d="M252 60 L266 58 L268 69 L254 71 Z" fill="#0d0d10" />
      <path d={BODY} fill="url(#carShine)" />
      <path d="M150 106 L300 103 L430 108 L560 116" stroke="#fff" strokeWidth="2.5" opacity=".85" />
      <text x="168" y="104" fill="#fff" fontFamily="Orbitron" fontWeight="900" fontSize="13" fontStyle="italic">MH</text>

      {/* cockpit */}
      <circle cx="292" cy="64" r="11" fill="#f5f5f5" />
      <rect x="286" y="59" width="14" height="6" rx="2" fill="#111" />
      <path d="M281 68 L303 68" stroke="#e10600" strokeWidth="2" />
      <path d="M262 70 Q292 44 332 76" stroke={DARK} strokeWidth="5" strokeLinecap="round" />
      <path d="M326 70 L330 82" stroke={DARK} strokeWidth="4" strokeLinecap="round" />
      <path d="M340 80 L354 78 L354 84 L340 85 Z M346 85 L348 92" fill={DARK} stroke={DARK} strokeWidth="1.5" />

      {/* front wing */}
      <path d="M540 123 L546 123 L546 130 L540 130 Z" fill={DARK} />
      <path d="M536 125 L594 123 L595 128 L534 130 Z" fill={DARK} />
      <path d="M528 132 L596 130 L598 137 L524 139 Z" fill="#e10600" />
      <path d="M590 112 L600 112 L600 139 L590 139 Z" fill={DARK} />

      <Wheel cx={118} />
      <Wheel cx={468} />
    </svg>
  )
}