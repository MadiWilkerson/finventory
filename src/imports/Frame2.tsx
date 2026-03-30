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

function IPhone171Default({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-white h-[874px] left-0 overflow-clip top-0 w-[402px]"} data-name="iPhone 17 - 1/Default">
      <div className="absolute h-[874px] left-[-103px] top-0 w-[607px]" data-name="Background 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground1} />
      </div>
      <div className="absolute flex h-[109px] items-center justify-center left-[214px] top-[700px] w-[157px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[109px] relative w-[157px]" data-name="Neon_Tetra 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeonTetra2} />
          </div>
        </div>
      </div>
      <div className="absolute h-[109px] left-[35px] top-[575px] w-[157px]" data-name="Kuhli_Loach 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKuhliLoach2} />
      </div>
      <div className="absolute h-[108px] left-[215px] top-[490px] w-[156px]" data-name="Guppy 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGuppy2} />
      </div>
      <div className="absolute h-[108px] left-[215px] top-[287px] w-[156px]" data-name="Goldfish 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGoldfish2} />
      </div>
      <div className="absolute h-[109px] left-[20px] top-[403px] w-[157px]" data-name="Corydora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCorydora2} />
      </div>
      <div className="absolute h-[105px] left-[20px] top-[184px] w-[151px]" data-name="Angelfish 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAngelfish2} />
      </div>
      <div className="absolute h-[73px] left-[307px] top-[101px] w-[106px]" data-name="Bubble_Button_Lines 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBubbleButtonLines1} />
      </div>
      <div className="absolute h-[77px] left-0 top-[101px] w-[93px]" data-name="Bubble_Button 2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-12.26%] max-w-none top-0 w-[119.15%]" src={imgBubbleButton21} />
        </div>
      </div>
      <div className="absolute h-[171px] left-0 top-[703px] w-[151px]" data-name="Seaweed 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[255.83%] left-0 max-w-none top-[-155.69%] w-[201.32%]" src={imgSeaweed1} />
        </div>
      </div>
      <div className="absolute h-[171px] left-[251px] top-[703px] w-[151px]" data-name="Seaweed 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[255.83%] left-[-100.64%] max-w-none top-[-155.85%] w-[201.32%]" src={imgSeaweed1} />
        </div>
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