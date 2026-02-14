import { useEffect, useRef, useState } from "react";

const PromiseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-24 px-4" ref={ref}>
      <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-6xl sm:text-7xl animate-heartbeat mb-8">❤️</div>

        <div className="glass-strong glow-card p-8 sm:p-12 space-y-4">
          <h2 className="font-cursive text-4xl sm:text-5xl mb-8 glow-gold" style={{ color: "hsl(var(--gold))" }}>
            My Promise
          </h2>
          <p className="font-display italic text-lg leading-relaxed" style={{ color: "hsl(var(--blush))" }}>
            I promise,
          </p>
          <p className="font-display italic text-lg leading-relaxed text-foreground/90">
            No matter where life takes me,
          </p>
          <p className="font-display italic text-lg leading-relaxed text-foreground/90">
            No matter how far we travel,
          </p>
          <p className="font-display italic text-lg leading-relaxed" style={{ color: "hsl(var(--soft-pink))" }}>
            My heart will always return to you.
          </p>
          <div className="pt-4 space-y-2">
            <p className="font-display text-xl" style={{ color: "hsl(var(--gold))" }}>You are my today.</p>
            <p className="font-display text-xl" style={{ color: "hsl(var(--gold))" }}>You are my tomorrow.</p>
            <p className="font-display text-2xl font-bold glow-gold" style={{ color: "hsl(var(--gold))" }}>You are my forever.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
