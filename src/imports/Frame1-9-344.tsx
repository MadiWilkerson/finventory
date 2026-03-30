import imgBackground2 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgBubbleButton1 from "figma:asset/bac78a846f97bba1a42ba92f85b00219a6b0b656.png";
import imgFinventorytitle from "figma:asset/64e259469f3aa9271aae976c8f8f934c6a1f4f38.png";

function IPhone171Default({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#2678b1] h-[874px] left-0 overflow-clip top-0 w-[402px]"} data-name="iPhone 17 - 1/Default">
      <div className="absolute h-[960px] left-[-69px] top-[-19px] w-[667px]" data-name="Background 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground2} />
      </div>
      <div className="absolute bottom-0 h-[235px] left-[43px] pointer-events-none top-[639px]">
        <div className="h-[219px] pointer-events-auto sticky top-0 w-[315px]" data-name="Bubble_Button 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBubbleButton1} />
        </div>
      </div>
      <div className="absolute h-[591.5px] left-[2px] top-[80px] w-[399.5px]" data-name="finventorytitle">
        <img alt="" className="absolute block max-w-none size-full" height="591.5" src={imgFinventorytitle} width="399.5" />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <IPhone171Default />
    </div>
  );
}