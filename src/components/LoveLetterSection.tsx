import { useEffect, useRef, useState } from "react";

const LoveLetterSection = () => {
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
    <section id="love-letter" className="relative py-24 px-4" ref={ref}>
      <div className={`max-w-2xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-cursive text-5xl sm:text-6xl text-center mb-12 glow-text" style={{ color: "hsl(var(--soft-pink))" }}>
          My Love Letter to You
        </h2>

        <div className="glass-strong glow-card p-8 sm:p-12 space-y-6">
          <p className="font-display italic text-xl mb-4" style={{ color: "hsl(var(--gold))" }}>My Dearest Rithika,</p>

          <p className="leading-relaxed text-foreground/90">
            I may not be near you right now, but close your eyes for a moment. Feel me beside you. Imagine I am holding your hand — gently, like I always do. Imagine I am whispering in your ear… <em className="font-display" style={{ color: "hsl(var(--soft-pink))" }}>I love you.</em>
          </p>
          <p className="leading-relaxed text-foreground/90">
            My heartbeat still says your name. With every breath, with every pulse, it whispers — <em className="font-display" style={{ color: "hsl(var(--soft-pink))" }}>Rithika</em>. Even miles cannot weaken what we have. Not distance. Not time. Nothing.
          </p>
          <p className="leading-relaxed text-foreground/90">
            You are not just my love — you are my peace. The calm in my chaos. The warmth in my coldest nights. I don't miss you… because I carry you with me every single second of every single day.
          </p>

          <div className="my-10 py-8 px-6 glass rounded-xl text-center space-y-3">
            <p className="font-display italic text-lg" style={{ color: "hsl(var(--blush))" }}>
              "If love had a face, it would look like you.
            </p>
            <p className="font-display italic text-lg" style={{ color: "hsl(var(--blush))" }}>
              If peace had a voice, it would sound like you.
            </p>
            <p className="font-display italic text-lg" style={{ color: "hsl(var(--blush))" }}>
              If my heart had a home, it would be with you."
            </p>
          </div>

          <p className="font-display italic text-right text-lg" style={{ color: "hsl(var(--gold))" }}>
            — Forever Yours ❤️
          </p>
        </div>

        {/* Poem Card */}
        <div className={`mt-16 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="glass-strong glow-card p-8 sm:p-10 text-center">
            <h3 className="font-cursive text-3xl sm:text-4xl mb-8 glow-gold" style={{ color: "hsl(var(--gold))" }}>
              A Poem for You ✨
            </h3>
            <div className="space-y-4 font-display italic text-lg" style={{ color: "hsl(var(--blush))" }}>
              <p>When nights feel long and skies feel wide,</p>
              <p>I close my eyes and you're by my side.</p>
              <p>No distance strong, no time apart,</p>
              <p>Can steal your place inside my heart.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
