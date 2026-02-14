import { useEffect, useRef, useState } from "react";

const FinalSection = () => {
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
        <div className="glass-strong glow-card p-8 sm:p-12 space-y-6">
          <p className="font-display italic text-xl leading-relaxed" style={{ color: "hsl(var(--blush))" }}>
            Close your eyes tonight…
          </p>
          <p className="font-display italic text-xl leading-relaxed text-foreground/90">
            Feel my arms around you.
          </p>
          <p className="font-display italic text-xl leading-relaxed text-foreground/90">
            That's not imagination.
          </p>
          <p className="font-display italic text-2xl font-semibold leading-relaxed glow-text" style={{ color: "hsl(var(--soft-pink))" }}>
            That's my love reaching you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
