"use client";

import { motion } from "framer-motion";

// Each ring pulses in sequence — inner to outer — like terrain being scanned
const rings = [
  {
    d: "M 370,440 C 415,365 510,348 575,395 C 640,442 645,545 600,592 C 555,638 450,645 395,598 C 340,551 330,505 370,440 Z",
    baseOpacity: 0.13,
    delay: 0,
  },
  {
    d: "M 285,415 C 365,280 555,258 650,335 C 745,412 755,565 690,645 C 625,725 445,750 340,680 C 235,610 215,530 285,415 Z",
    baseOpacity: 0.09,
    delay: 0.55,
  },
  {
    d: "M 185,390 C 310,190 600,158 730,268 C 860,378 875,590 795,705 C 715,820 480,855 335,765 C 190,675 80,560 185,390 Z",
    baseOpacity: 0.065,
    delay: 1.1,
  },
  {
    d: "M 65,365 C 250,90 660,42 830,195 C 1000,348 1015,620 920,770 C 825,920 530,965 340,852 C 150,738 -80,610 65,365 Z",
    baseOpacity: 0.045,
    delay: 1.65,
  },
  {
    d: "M -80,340 C 165,-20 760,-80 970,115 C 1180,310 1190,650 1080,840 C 970,1030 600,1090 355,948 C 110,806 -240,655 -80,340 Z",
    baseOpacity: 0.028,
    delay: 2.2,
  },
  {
    d: "M -240,315 C 80,-130 860,-195 1110,35 C 1360,265 1375,680 1240,910 C 1105,1140 670,1215 370,1044 C 70,873 -480,700 -240,315 Z",
    baseOpacity: 0.015,
    delay: 2.75,
  },
];

export default function TopographicBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#c8965a" strokeWidth="0.8" fill="none">
        {rings.map((ring, i) => (
          <motion.path
            key={i}
            d={ring.d}
            animate={{
              opacity: [
                ring.baseOpacity,
                ring.baseOpacity * 3.2,
                ring.baseOpacity * 1.1,
                ring.baseOpacity,
              ],
              strokeWidth: [0.8, 1.2, 0.9, 0.8],
            }}
            transition={{
              duration: 3.5,
              delay: ring.delay,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>
    </svg>
  );
}
