import { useEffect, useRef, useState } from "react";

const MemorySection = () => {
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
      <div className={`max-w-3xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-cursive text-5xl sm:text-6xl text-center mb-12 glow-text" style={{ color: "hsl(var(--soft-pink))" }}>
          Our Beautiful Memories 🎥
        </h2>

        <div className="glass-strong glow-card p-4 sm:p-8 group">
          <div className="relative rounded-xl overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_0_40px_hsl(350_80%_60%/0.3)]">
            <video
              controls
              className="w-full rounded-xl"
              poster=""
              preload="metadata"
            >
              <source src="/assets/videos/rithika.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center mt-6 font-display italic text-muted-foreground">
            Every moment with you is a memory I treasure forever 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemorySection;
