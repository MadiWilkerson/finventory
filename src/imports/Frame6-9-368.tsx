import imgBackground4 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgListBubble1 from "figma:asset/0a1046cefc376d091ce06ee168094fc93effc37a.png";
import imgGuppy1 from "figma:asset/d445e3033a1fdf9d1f553d6973c835e7bf6dcd90.png";
import imgBubbleButton31 from "figma:asset/a9b70eba2d8160c52304112df998e7693b58b7fe.png";
import imgGuppytitle from "figma:asset/b4c05bfcb601669e798a568e52e5e25675667061.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Background 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground4} />
        </div>
      </div>
      <div className="absolute h-[423px] left-[88px] top-[235px] w-[228px]" data-name="List_Bubble 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
        </div>
      </div>
      <div className="absolute font-['Cherry_Bomb:Regular',sans-serif] h-[330px] leading-[0] left-[122px] not-italic text-[23.5px] text-white top-[262px] w-[190px]">
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
      <div className="absolute h-[199px] left-[152px] top-[606px] w-[286px]" data-name="Guppy 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGuppy1} />
      </div>
      <div className="absolute h-[39px] left-[181px] top-[160px] w-[40px]" data-name="Bubble_Button 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.41%] left-[-83.02%] max-w-none top-[-33.29%] w-[274.42%]" src={imgBubbleButton31} />
        </div>
      </div>
      <div className="absolute h-[75px] left-[92px] top-[49px] w-[224px]" data-name="guppytitle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-641.52%] max-w-none top-0 w-[741.52%]" src={imgGuppytitle} />
        </div>
      </div>
    </div>
  );
}