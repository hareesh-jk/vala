import { useEffect, useState } from "react";

const typingText = "You are my forever. My always. My home.";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < typingText.length) {
        setDisplayText(typingText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const scrollToLetter = () => {
    document.getElementById("love-letter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden px-4">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1
          className="font-cursive text-5xl sm:text-7xl md:text-8xl glow-text animate-fade-up mb-6"
          style={{ color: "hsl(var(--soft-pink))" }}
        >
          Happy Valentine's Day, My Rithika ❤️
        </h1>

        <p
          className="font-display italic text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-up mb-10"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards", color: "hsl(var(--blush))" }}
        >
          Distance may separate our hands today… but it can never separate our hearts.
        </p>

        <button
          onClick={scrollToLetter}
          className="opacity-0 animate-fade-up gradient-rose px-8 py-4 rounded-full text-lg font-display glow-button transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ animationDelay: "1s", animationFillMode: "forwards", color: "hsl(var(--primary-foreground))" }}
        >
          Open My Heart 💌
        </button>

        <div
          className="mt-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          <p className="font-display italic text-xl sm:text-2xl glow-gold" style={{ color: "hsl(var(--gold))" }}>
            {displayText}
            {showCursor && <span className="animate-pulse ml-0.5">|</span>}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
