import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function MyCardHeader() {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const shadowRef = useRef(null);
  const rippleRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;

    // On mobile the card art is hidden (display: none), so there's nothing
    // to animate — skip the whole GSAP setup to avoid measuring a 0x0 node.
    if (!wrap || !card) return;

    const ctx = gsap.context(() => {
      // Compute how far the card must travel from an oversized bottom-center
      // start to its natural top-right slot, then animate it home.
      const rect = card.getBoundingClientRect();
      const startScale = 1.5;
      const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const dy =
        window.innerHeight -
        (rect.height * startScale) / 2 -
        (rect.top + rect.height / 2) -
        40;

      gsap.set(card, {
        x: dx,
        y: dy,
        scale: startScale,
        transformOrigin: "50% 50%",
      });

      const rotX = gsap.quickTo(card, "rotateX", {
        duration: 0.6,
        ease: "power3.out",
      });
      const rotY = gsap.quickTo(card, "rotateY", {
        duration: 0.6,
        ease: "power3.out",
      });
      const shineX = gsap.quickTo(shineRef.current, "xPercent", {
        duration: 0.6,
        ease: "power3.out",
      });
      const shineY = gsap.quickTo(shineRef.current, "yPercent", {
        duration: 0.6,
        ease: "power3.out",
      });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(card, { x: 0, y: 0, scale: 1, duration: 1.0, delay: 0.05 })
        .from(
          shadowRef.current,
          { opacity: 0, scale: 0.6, duration: 1.1 },
          "<0.2",
        )
        .from(
          shineRef.current,
          { xPercent: -160, opacity: 0, duration: 0.9 },
          "-=0.5",
        )
        .to(card, {
          y: -10,
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        })
        .to(
          shadowRef.current,
          {
            opacity: 0.35,
            scale: 0.92,
            duration: 2.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          },
          "<",
        );

      gsap
        .timeline({ repeat: -1, repeatDelay: 2.2, delay: 1.6 })
        .set(rippleRef.current, { opacity: 0.7, scale: 0.2 })
        .to(rippleRef.current, {
          scale: 2.6,
          opacity: 0,
          duration: 1.4,
          ease: "power2.out",
        });

      const onMove = (e) => {
        const b = wrap.getBoundingClientRect();
        const px = (e.clientX - b.left) / b.width - 0.5;
        const py = (e.clientY - b.top) / b.height - 0.5;
        rotY(px * 20);
        rotX(-py * 20);
        shineX(px * 60);
        shineY(py * 60);
        gsap.to(shineRef.current, { opacity: 0.35, overwrite: "auto" });
        gsap.to(card, { scale: 1.03, duration: 0.4, overwrite: "auto" });
      };
      const onLeave = () => {
        rotX(0);
        rotY(0);
        gsap.to(shineRef.current, { opacity: 0, duration: 0.6 });
        gsap.to(card, { scale: 1, duration: 0.6, ease: "elastic.out(1,0.6)" });
      };

      wrap.addEventListener("mousemove", onMove);
      wrap.addEventListener("mouseleave", onLeave);
      return () => {
        wrap.removeEventListener("mousemove", onMove);
        wrap.removeEventListener("mouseleave", onLeave);
      };
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white flex items-center px-6 sm:px-10 mb-10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div className="text-center pt-10 md:text-left md:pt-0 md:ml-15">
          <h1 className="text-4xl sm:text-5xl md:text-6xl md:mt-10 font-bold text-gray-900 tracking-tight">
            My <span className="text-[#FF6200]">Card</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-black mt-4 md:mt-10">
            View, manage and top up your Abia Green Shuttle cards.
          </p>
        </div>

        {/* Animated card art is a desktop flourish only; hidden below md */}
        <div
          ref={wrapRef}
          className="hidden md:block max-w-sm md:justify-self-end w-full my-15"
          style={{ perspective: "1000px" }}
        >
          <div
            ref={shadowRef}
            className="absolute w-[80%] h-8 rounded-full blur-xl bg-black/30 opacity-0"
            style={{ marginTop: "16%", marginLeft: "5%" }}
          />
          <div
            ref={cardRef}
            className="relative w-[90%]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="src/assets/card images/PhysicalCard.png"
              alt="Abia Connect transit card by Cowry"
              className="w-full h-auto rounded-2xl shadow-2xl block"
            />
            <div
              ref={shineRef}
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 48%, transparent 66%)",
              }}
            />
            <div
              ref={rippleRef}
              className="pointer-events-none absolute rounded-full opacity-0"
              style={{
                left: "12%",
                top: "58%",
                width: "36px",
                height: "36px",
                background:
                  "radial-gradient(circle, rgba(244,193,30,0.9) 0%, rgba(244,193,30,0) 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
