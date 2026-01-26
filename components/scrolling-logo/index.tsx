// components/ui/infinite-moving-cards/index.tsx
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface InfiniteMovingLogoProps {
  items: {
    name?: string;
    logo: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingLogo: React.FC<InfiniteMovingLogoProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Combine className strings
  const containerClasses =
    `scroller relative z-20 max-w-7xl overflow-hidden ${className}`.trim();

  const scrollerClasses =
    `flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 ${
      start ? "animate-scroll" : ""
    } ${pauseOnHover ? "hover:pause-animation" : ""}`.trim();

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul ref={scrollerRef} className={scrollerClasses}>
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 px-8 py-6"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-10 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* {item.logo}
              </span> */}
              <div className="relative z-20 flex flex-row items-center mb-6">
                <span className="flex gap-2 items-center">
                  <Image
                    src={item.logo}
                    className="relative z-20 max-w-[76px]"
                    width={50}
                    height={50}
                    alt={"logo"}
                  />
                  <span className="text-sm leading-[1.6] font-semibold text-[#60617D]">
                    {item.name}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
