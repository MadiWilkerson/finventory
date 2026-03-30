import imgBackground5 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgKuhliLoach1 from "figma:asset/ac84a7f5fcd8f8570e96dc442e34bc1abb6a02d9.png";
import imgListBubble1 from "figma:asset/0a1046cefc376d091ce06ee168094fc93effc37a.png";
import imgBubbleButton31 from "figma:asset/a9b70eba2d8160c52304112df998e7693b58b7fe.png";
import imgKuhliloachtitle from "figma:asset/32245fae990da535d6ef3dcabcef8b24da332f85.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Background 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground5} />
        </div>
      </div>
      <div className="absolute h-[199px] left-[103px] top-[651px] w-[286px]" data-name="Kuhli_Loach 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKuhliLoach1} />
      </div>
      <div className="absolute h-[423px] left-[94px] top-[288px] w-[228px]" data-name="List_Bubble 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
        </div>
      </div>
      <div className="absolute font-['Cherry_Bomb:Regular',sans-serif] h-[336px] leading-[0] left-[128px] not-italic text-[23.5px] text-white top-[315px] w-[179px]">
        <p className="leading-[1.676] mb-0">eel-like</p>
        <p className="leading-[1.676] mb-0">striped</p>
        <p className="leading-[1.676] mb-0">nocturnal</p>
        <p className="leading-[1.676] mb-0">peaceful</p>
        <p className="leading-[1.676] mb-0">group-living</p>
        <p className="leading-[1.676] mb-0">burrowing</p>
        <p className="leading-[1.676] mb-0">soft substrate</p>
        <p className="leading-[1.676] mb-0">escape artists</p>
        <p className="leading-[1.676]">southeast asian</p>
      </div>
      <div className="absolute h-[39px] left-[181px] top-[160px] w-[40px]" data-name="Bubble_Button 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.41%] left-[-83.02%] max-w-none top-[-33.29%] w-[274.42%]" src={imgBubbleButton31} />
        </div>
      </div>
      <div className="absolute h-[63px] left-[11px] top-[68px] w-[380px]" data-name="kuhliloachtitle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKuhliloachtitle} />
      </div>
    </div>
  );
}