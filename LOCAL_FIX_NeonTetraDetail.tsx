import { useNavigate } from "react-router";
import { motion } from "motion/react";

// TEMPORARY: Replace these with your actual image paths
// For example: import imgBackground3 from "../assets/background3.png";
const imgBackground3 = "/images/background3.png";
const imgNeonTetra1 = "/images/neontetra.png";
const imgListBubble1 = "/images/list-bubble.png";
const imgBubbleButton31 = "/images/bubble-button.png";
const imgNeontetratitle = "/images/neontetra-title.png";

export default function NeonTetraDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative h-[874px] w-[402px] overflow-hidden">
        <div className="absolute h-[874px] left-0 top-0 w-[402px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground3} />
          </div>
        </div>
        <div className="absolute h-[61px] left-[10px] top-[68px] w-[383.5px]">
          <img alt="neon tetra" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeontetratitle} />
        </div>
        <motion.div
          className="absolute flex h-[199px] items-center justify-center left-[-19px] top-[184px] w-[286px]"
          animate={{
            x: [0, 300, 0],
            y: [0, -12, 0, 12, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <div className="-scale-y-100 flex-none rotate-180">
            <motion.div
              className="h-[199px] relative w-[286px]"
              animate={{
                skewX: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeonTetra1} />
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute h-[423px] left-[87px] top-[358px] w-[228px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
          </div>
        </div>
        <div className="absolute font-['Cherry_Bomb_One',sans-serif] h-[330px] leading-[0] left-[124px] not-italic text-[23.5px] text-white top-[385px] w-[179px]">
          <p className="leading-[1.676] mb-0">small</p>
          <p className="leading-[1.676] mb-0">bright stripes</p>
          <p className="leading-[1.676] mb-0">amazonian</p>
          <p className="leading-[1.676] mb-0">peaceful</p>
          <p className="leading-[1.676] mb-0">schooling</p>
          <p className="leading-[1.676] mb-0">planted tanks</p>
          <p className="leading-[1.676] mb-0">sensitive fish</p>
          <p className="leading-[1.676] mb-0">dark substrate</p>
          <p className="leading-[1.676]">soft water</p>
        </div>
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
