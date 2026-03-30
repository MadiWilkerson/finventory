import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
const imgBackground1 = "/images/background-aquarium.png";
const imgNeonTetra2 = "/images/neon-tetra.png";
const imgKuhliLoach2 = "/images/kuhli-loach.png";
const imgGuppy2 = "/images/guppy.png";
const imgGoldfish2 = "/images/goldfish.png";
const imgCorydora2 = "/images/corydora.png";
const imgAngelfish2 = "/images/angelfish.png";
const imgBubbleButtonLines1 = "/images/bubble-button-lines.png";
const imgBubbleButton21 = "/images/bubble-button-2.png";
const imgSeaweed1 = "/images/seaweed.png";
const imgListBubble1 = "/images/list-bubble.png";
const imgBubbleButtonX1 = "/images/bubble-button-x.png";

export default function Aquarium() {
  const navigate = useNavigate();
  const [showFishList, setShowFishList] = useState(false);

  const fishList = [
    { name: "angelfish", path: "/fish/angelfish" },
    { name: "corydora", path: "/fish/corydora" },
    { name: "goldfish", path: "/fish/goldfish" },
    { name: "guppy", path: "/fish/guppy" },
    { name: "kuhli loach", path: "/fish/kuhli-loach" },
    { name: "neon tetra", path: "/fish/neon-tetra" },
  ];

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative h-[874px] w-[402px] overflow-hidden bg-white">
        <div className="absolute h-[874px] left-[-103px] top-0 w-[607px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground1} />
        </div>
        <motion.div 
          className="absolute flex h-[109px] items-center justify-center left-[214px] top-[700px] w-[157px]"
          animate={{
            x: [-60, 100],
            y: [0, -15, 0, 15, 0, -10, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <div className="-scale-y-100 flex-none rotate-180">
            <motion.div 
              className="h-[109px] relative w-[157px]"
              animate={{
                skewX: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeonTetra2} />
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute h-[109px] left-[35px] top-[575px] w-[157px]"
          animate={{
            x: [0, 200, 0],
            y: [0, 10, 0, -10, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgKuhliLoach2}
            animate={{
              skewX: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute h-[108px] left-[215px] top-[490px] w-[156px]"
          animate={{
            x: [0, -180, 0],
            y: [0, -12, 0, 12, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgGuppy2}
            animate={{
              skewX: [0, -4, 0, 4, 0],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute h-[108px] left-[215px] top-[287px] w-[156px]"
          animate={{
            x: [0, 200, 0],
            y: [0, 18, 0, -18, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgGoldfish2}
            animate={{
              skewX: [0, -3, 0, 3, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute h-[109px] left-[20px] top-[403px] w-[157px]"
          animate={{
            x: [0, 220, 0],
            y: [0, -8, 0, 8, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgCorydora2}
            animate={{
              skewX: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute h-[105px] left-[20px] top-[184px] w-[151px]"
          animate={{
            x: [0, -180, 0],
            y: [0, 15, 0, -15, 0],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1],
          }}
        >
          <motion.img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgAngelfish2}
            animate={{
              skewX: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <button
          onClick={() => setShowFishList(!showFishList)}
          className="absolute h-[73px] left-[307px] top-[101px] w-[106px] cursor-pointer"
          aria-label="Menu"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBubbleButtonLines1} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="absolute h-[77px] left-0 top-[101px] w-[93px] cursor-pointer"
          aria-label="Home"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-12.26%] max-w-none top-0 w-[119.15%]" src={imgBubbleButton21} />
          </div>
        </button>
        <motion.div 
          className="absolute h-[171px] left-0 top-[713px] w-[151px]"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: 0.5, originY: 1 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[255.83%] left-0 max-w-none top-[-155.69%] w-[201.32%]" src={imgSeaweed1} />
          </div>
        </motion.div>
        <motion.div 
          className="absolute h-[171px] left-[251px] top-[713px] w-[151px]"
          animate={{ rotate: [3, -3, 3] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: 0.5, originY: 1 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[255.83%] left-[-100.64%] max-w-none top-[-155.85%] w-[201.32%]" src={imgSeaweed1} />
          </div>
        </motion.div>
        {showFishList && (
          <>
            <div className="absolute h-[280px] left-[187px] top-[101px] w-[151px] z-10">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
              </div>
            </div>
            <button
              onClick={() => setShowFishList(false)}
              className="absolute h-[73px] left-[306px] top-[101px] w-[106px] cursor-pointer z-10"
              aria-label="Close"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBubbleButtonX1} />
            </button>
            
            {fishList.map((fish, index) => (
              <button
                key={fish.name}
                onClick={() => navigate(fish.path)}
                className="absolute font-['Cherry_Bomb_One',sans-serif] cursor-pointer hover:opacity-80 transition-opacity not-italic text-[23.5px] text-white text-right left-[181px] w-[143px] z-10"
                style={{ top: `${116 + index * 38}px` }}
              >
                <p className="leading-[1.676] mb-0">{fish.name}</p>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}