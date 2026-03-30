import { useNavigate } from "react-router";
import imgBackground2 from "figma:asset/ff98dfb4e745aac78d193196de4acb5d57c1c51e.png";
import imgBubbleButton1 from "figma:asset/bac78a846f97bba1a42ba92f85b00219a6b0b656.png";
import imgFinventorytitle from "figma:asset/64e259469f3aa9271aae976c8f8f934c6a1f4f38.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative h-[874px] w-[402px] overflow-hidden bg-[#2678b1]">
        <div className="absolute h-[960px] left-[-69px] top-[-19px] w-[667px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground2} />
        </div>
        <div className="absolute h-[591.5px] left-[2px] top-[80px] w-[399.5px]">
          <img alt="finventory" className="absolute block max-w-none size-full" height="591.5" src={imgFinventorytitle} width="399.5" />
        </div>
        <button
          onClick={() => navigate("/aquarium")}
          className="absolute bottom-0 h-[235px] left-[43px] top-[639px] cursor-pointer"
          aria-label="Start"
        >
          <div className="h-[219px] w-[315px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBubbleButton1} />
          </div>
        </button>
      </div>
    </div>
  );
}