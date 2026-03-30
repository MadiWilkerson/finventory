import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgBackground3 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgAngelfish1 from "figma:asset/9479205c618ad9da3e06ae22facf1d9f0f9125e8.png";
import imgListBubble1 from "figma:asset/0a1046cefc376d091ce06ee168094fc93effc37a.png";
import imgBubbleButton31 from "figma:asset/a9b70eba2d8160c52304112df998e7693b58b7fe.png";
import imgAngelfishtitle from "figma:asset/b4c05bfcb601669e798a568e52e5e25675667061.png";

export default function AngelFishDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative h-[874px] w-[402px] overflow-hidden">
        <div className="absolute h-[874px] left-0 top-0 w-[402px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground3} />
          </div>
        </div>
        <div className="absolute h-[75px] left-[39px] top-[49px] w-[334px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="angelfish" className="absolute h-full left-0 max-w-none top-0 w-[497.31%]" src={imgAngelfishtitle} />
          </div>
        </div>
        <motion.div 
          className="absolute h-[200px] left-[156px] top-[180px] w-[286px]"
          animate={{
            x: [0, -250, 0],
            y: [0, 20, 0, -20, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgAngelfish1}
            animate={{
              skewX: [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <div className="absolute h-[423px] left-[87px] top-[368px] w-[228px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
          </div>
        </div>
        <div className="absolute font-['Cherry_Bomb_One',sans-serif] h-[330px] leading-[0] left-[120px] not-italic text-[23.5px] text-white top-[397px] w-[179px]">
          <p className="leading-[1.676] mb-0">tropical</p>
          <p className="leading-[1.676] mb-0">south american</p>
          <p className="leading-[1.676] mb-0">tall fins</p>
          <p className="leading-[1.676] mb-0">6 inches</p>
          <p className="leading-[1.676] mb-0">warm water</p>
          <p className="leading-[1.676] mb-0">semi-aggressive</p>
          <p className="leading-[1.676] mb-0">flat body</p>
          <p className="leading-[1.676] mb-0">slow swimmer</p>
          <p className="leading-[1.676]">pair bonding</p>
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