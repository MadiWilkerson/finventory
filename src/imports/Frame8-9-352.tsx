import imgBackground3 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgNeonTetra1 from "figma:asset/6b3aaf8fa9c1e0dd365387cfc5cee8708f87c83a.png";
import imgListBubble1 from "figma:asset/0a1046cefc376d091ce06ee168094fc93effc37a.png";
import imgNeontetratitle from "figma:asset/acd6eeb9d4c3b03618231390a8c4c2d42f1cb2a0.png";
import imgBubbleButton31 from "figma:asset/a9b70eba2d8160c52304112df998e7693b58b7fe.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Background 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground3} />
        </div>
      </div>
      <div className="absolute flex h-[199px] items-center justify-center left-[-19px] top-[184px] w-[286px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[199px] relative w-[286px]" data-name="Neon_Tetra 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeonTetra1} />
          </div>
        </div>
      </div>
      <div className="absolute h-[423px] left-[87px] top-[358px] w-[228px]" data-name="List_Bubble 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
        </div>
      </div>
      <div className="absolute font-['Cherry_Bomb:Regular',sans-serif] h-[330px] leading-[0] left-[122px] not-italic text-[23.5px] text-white top-[385px] w-[179px]">
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
      <div className="absolute h-[61px] left-[10px] top-[68px] w-[383.5px]" data-name="neontetratitle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeontetratitle} />
      </div>
      <div className="absolute h-[39px] left-[181px] top-[160px] w-[40px]" data-name="Bubble_Button 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.41%] left-[-83.02%] max-w-none top-[-33.29%] w-[274.42%]" src={imgBubbleButton31} />
        </div>
      </div>
    </div>
  );
}