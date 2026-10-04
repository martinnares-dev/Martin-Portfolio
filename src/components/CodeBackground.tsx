const symbols = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 16 + ((i * 5) % 28),
  duration: 12 + ((i * 7) % 10),
  delay: -((i * 3) % 15),
}));

export default function CodeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      {symbols.map((s, i) => (
        <span
          key={i}
          className="code-float"
          style={{
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {"</>"}
        </span>
      ))}
    </div>
  );
}