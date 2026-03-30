import { useNavigate } from "react-router";
import { motion } from "motion/react";
import imgBackground4 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgListBubble1 from "figma:asset/0a1046cefc376d091ce06ee168094fc93effc37a.png";
import imgCorydora1 from "figma:asset/bc564f321e35930786bc5396608d7334780e807d.png";
import imgBubbleButton31 from "figma:asset/a9b70eba2d8160c52304112df998e7693b58b7fe.png";
import imgCorydoratitle from "figma:asset/b4c05bfcb601669e798a568e52e5e25675667061.png";

export default function CorydoraDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative h-[874px] w-[402px] overflow-hidden">
        <div className="absolute h-[874px] left-0 top-0 w-[402px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground4} />
          </div>
        </div>
        <div className="absolute h-[423px] left-[87px] top-[252px] w-[228px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
          </div>
        </div>
        <div className="absolute font-['Cherry_Bomb_One',sans-serif] h-[330px] leading-[0] left-[123px] not-italic text-[23.5px] text-white top-[282px] w-[191px] whitespace-pre-wrap">
          <p className="leading-[1.676] mb-0">bottom-dweller</p>
          <p className="leading-[1.676] mb-0">peaceful</p>
          <p className="leading-[1.676] mb-0">barbels</p>
          <p className="leading-[1.676] mb-0">schooling</p>
          <p className="leading-[1.676] mb-0">small groups</p>
          <p className="leading-[1.676] mb-0">{`cleaners `}</p>
          <p className="leading-[1.676] mb-0">armored plates</p>
          <p className="leading-[1.676] mb-0">sand lovers</p>
          <p className="leading-[1.676]">air gulping</p>
        </div>
        <div className="absolute h-[75px] left-[39px] top-[49px] w-[325px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="corydora" className="absolute h-full left-[-150.15%] max-w-none top-0 w-[511.08%]" src={imgCorydoratitle} />
          </div>
        </div>
        <motion.div
          className="absolute h-[200px] left-[59px] top-[656px] w-[286px]"
          animate={{
            x: [0, 240, 0],
            y: [0, -10, 0, 10, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgCorydora1}
            animate={{
              skewX: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 1.5,
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