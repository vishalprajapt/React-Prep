// loader/ReactSpinner.jsx
// Small spinning React atom — used as inline API loading indicator.
// Props:
//   size  — overall px size (default 56)
//   dark  — theme flag

export default function ReactSpinner({ size = 56, dark = true }) {
  const C  = size / 2;
  const RX = size * 0.44;
  const RY = size * 0.15;
  const SW = size * 0.055;
  const color = '#22d3ee';

  return (
    <>
      <style>{`
        @keyframes rsp-spin1 { from { transform: rotate(0deg);   } to { transform: rotate(360deg); } }
        @keyframes rsp-spin2 { from { transform: rotate(60deg);  } to { transform: rotate(420deg); } }
        @keyframes rsp-spin3 { from { transform: rotate(120deg); } to { transform: rotate(480deg); } }
      `}</style>

      <div
        style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}
        aria-label="Loading"
        role="status"
      >
        {/* Orbit 1 */}
        <svg
          style={{
            position: 'absolute', inset: 0,
            animation: 'rsp-spin1 2.2s linear infinite',
            transformOrigin: '50% 50%',
          }}
          width={size} height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <ellipse cx={C} cy={C} rx={RX} ry={RY}
            fill="none" stroke={color} strokeWidth={SW} opacity="0.9" />
        </svg>

        {/* Orbit 2 */}
        <svg
          style={{
            position: 'absolute', inset: 0,
            animation: 'rsp-spin2 2.2s linear infinite',
            transformOrigin: '50% 50%',
          }}
          width={size} height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <ellipse cx={C} cy={C} rx={RX} ry={RY}
            fill="none" stroke={color} strokeWidth={SW} opacity="0.9" />
        </svg>

        {/* Orbit 3 */}
        <svg
          style={{
            position: 'absolute', inset: 0,
            animation: 'rsp-spin3 2.2s linear infinite',
            transformOrigin: '50% 50%',
          }}
          width={size} height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <ellipse cx={C} cy={C} rx={RX} ry={RY}
            fill="none" stroke={color} strokeWidth={SW} opacity="0.9" />
        </svg>

        {/* Nucleus */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg
            width={size * 0.38}
            height={size * 0.38}
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="19" fill="#22d3ee14" />
            <circle cx="20" cy="20" r="13" fill="#22d3ee20" />
            <circle cx="20" cy="20" r="10" fill="#22d3ee" opacity="0.95" />
            <circle cx="20" cy="20" r="6"  fill="#cffafe" />
            <circle cx="16" cy="16" r="2.5" fill="white" opacity="0.7" />
          </svg>
        </div>
      </div>
    </>
  );
}
