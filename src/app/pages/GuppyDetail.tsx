import { useNavigate } from "react-router";
import { motion } from "motion/react";
const imgBackground4 = "/images/background-blue.png";
const imgListBubble1 = "/images/list-bubble.png";
const imgGuppy1 = "/images/guppy.png";
const imgBubbleButton31 = "/images/bubble-button-3.png";
const imgGuppytitle = "/images/fish-title-generic.png";

export default function GuppyDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative h-[874px] w-[402px] overflow-hidden">
        <div className="absolute h-[874px] left-0 top-0 w-[402px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground4} />
          </div>
        </div>
        <div className="absolute h-[423px] left-[88px] top-[235px] w-[228px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
          </div>
        </div>
        <div className="absolute font-['Cherry_Bomb_One',sans-serif] h-[330px] leading-[0] left-[122px] not-italic text-[23.5px] text-white top-[262px] w-[190px]">
          <p className="leading-[1.676] mb-0">colorful</p>
          <p className="leading-[1.676] mb-0">livebearer</p>
          <p className="leading-[1.676] mb-0">fast breeding</p>
          <p className="leading-[1.676] mb-0">variety</p>
          <p className="leading-[1.676] mb-0">small size</p>
          <p className="leading-[1.676] mb-0">flowing tails</p>
          <p className="leading-[1.676] mb-0">active swimmers</p>
          <p className="leading-[1.676] mb-0">hardy fish</p>
          <p className="leading-[1.676]">brighter male</p>
        </div>
        <div className="absolute h-[75px] left-[92px] top-[49px] w-[224px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="guppy" className="absolute h-full left-[-641.52%] max-w-none top-0 w-[741.52%]" src={imgGuppytitle} />
          </div>
        </div>
        <motion.div
          className="absolute h-[199px] left-[152px] top-[606px] w-[286px]"
          animate={{
            x: [0, -260, 0],
            y: [0, 12, 0, -12, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgGuppy1}
            animate={{
              skewX: [0, -4, 0, 4, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <button
          onClick={() => navigate("/fish-list")}
          className="absolute h-[39px] left-[181px] top-[160px] w-[40px] cursor-pointer"
          aria-label="Back"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[196.41%] left-[-83.02%] max-w-none top-[-33.29%] w-[274.42%]" src={imgBubbleButton31} />
          </div>
        </button>
      </div>
    </div>
  );
}