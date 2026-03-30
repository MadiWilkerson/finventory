import imgBackground4 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgListBubble1 from "figma:asset/0a1046cefc376d091ce06ee168094fc93effc37a.png";
import imgCorydora1 from "figma:asset/bc564f321e35930786bc5396608d7334780e807d.png";
import imgBubbleButton31 from "figma:asset/a9b70eba2d8160c52304112df998e7693b58b7fe.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Background 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground4} />
        </div>
      </div>
      <div className="absolute h-[423px] left-[87px] top-[252px] w-[228px]" data-name="List_Bubble 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
        </div>
      </div>
      <div className="absolute font-['Cherry_Bomb:Regular',sans-serif] h-[330px] leading-[0] left-[123px] not-italic text-[23.5px] text-white top-[282px] w-[191px] whitespace-pre-wrap">
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
      <p className="absolute bg-clip-text blur-[1.05px] font-['Cherry_Bomb:Regular',sans-serif] leading-[normal] left-[43px] not-italic text-[72px] text-[transparent] top-[60px] tracking-[2.88px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(12.0817deg, rgba(255, 255, 255, 0.2) 18.791%, rgba(102, 102, 102, 0) 82.702%), linear-gradient(192.428deg, rgba(131, 255, 253, 0.63) 8.6459%, rgba(102, 102, 102, 0) 65.974%), linear-gradient(-5.39403deg, rgba(51, 255, 0, 0.48) 6.0387%, rgba(38, 120, 177, 0) 94.608%), linear-gradient(175.057deg, rgba(255, 36, 251, 0.78) 13.76%, rgba(38, 120, 177, 0) 94.551%)" }}>
        corydora
      </p>
      <div className="absolute h-[200px] left-[59px] top-[656px] w-[286px]" data-name="Corydora 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCorydora1} />
      </div>
      <div className="absolute h-[39px] left-[181px] top-[160px] w-[40px]" data-name="Bubble_Button 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.41%] left-[-83.02%] max-w-none top-[-33.29%] w-[274.42%]" src={imgBubbleButton31} />
        </div>
      </div>
    </div>
  );
}