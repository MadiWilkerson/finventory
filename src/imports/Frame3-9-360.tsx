import imgBackground3 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgAngelfish1 from "figma:asset/9479205c618ad9da3e06ae22facf1d9f0f9125e8.png";
import imgListBubble1 from "figma:asset/0a1046cefc376d091ce06ee168094fc93effc37a.png";
import imgBubbleButton31 from "figma:asset/a9b70eba2d8160c52304112df998e7693b58b7fe.png";
import imgAngelfishtitle from "figma:asset/b4c05bfcb601669e798a568e52e5e25675667061.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Background 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground3} />
        </div>
      </div>
      <div className="absolute h-[200px] left-[156px] top-[180px] w-[286px]" data-name="Angelfish 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAngelfish1} />
      </div>
      <div className="absolute h-[423px] left-[87px] top-[368px] w-[228px]" data-name="List_Bubble 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
        </div>
      </div>
      <div className="absolute font-['Cherry_Bomb:Regular',sans-serif] h-[330px] leading-[0] left-[120px] not-italic text-[23.5px] text-white top-[397px] w-[179px]">
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
      <div className="absolute h-[39px] left-[181px] top-[160px] w-[40px]" data-name="Bubble_Button 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.41%] left-[-83.02%] max-w-none top-[-33.29%] w-[274.42%]" src={imgBubbleButton31} />
        </div>
      </div>
      <div className="absolute h-[75px] left-[39px] top-[49px] w-[334px]" data-name="angelfishtitle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[497.31%]" src={imgAngelfishtitle} />
        </div>
      </div>
    </div>
  );
}