const imgBackground4 = "/images/background-blue.png";
const imgListBubble1 = "/images/list-bubble.png";
const imgGoldfish1 = "/images/goldfish.png";
const imgBubbleButton31 = "/images/bubble-button-3.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Background 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground4} />
        </div>
      </div>
      <div className="absolute h-[423px] left-[87px] top-[368px] w-[228px]" data-name="List_Bubble 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.41%] left-[-46.83%] max-w-none top-[-21.92%] w-[186.09%]" src={imgListBubble1} />
        </div>
      </div>
      <div className="absolute font-['Cherry_Bomb:Regular',sans-serif] h-[330px] leading-[0] left-[119px] not-italic text-[23.5px] text-white top-[395px] w-[179px] whitespace-pre-wrap">
        <p className="leading-[1.676] mb-0">popular</p>
        <p className="leading-[1.676] mb-0">east asian</p>
        <p className="leading-[1.676] mb-0">long-lived</p>
        <p className="leading-[1.676] mb-0">large growth</p>
        <p className="leading-[1.676] mb-0">cool water</p>
        <p className="leading-[1.676] mb-0">heavy waste</p>
        <p className="leading-[1.676] mb-0">fancy varieties</p>
        <p className="leading-[1.676] mb-0">pond fish</p>
        <p className="leading-[1.676]">{` hardy species`}</p>
      </div>
      <p className="absolute bg-clip-text blur-[1.05px] font-['Cherry_Bomb:Regular',sans-serif] leading-[normal] left-[55px] not-italic text-[72px] text-[transparent] top-[60px] tracking-[2.88px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(13.0387deg, rgba(255, 255, 255, 0.2) 18.791%, rgba(102, 102, 102, 0) 82.702%), linear-gradient(193.41deg, rgba(131, 255, 253, 0.63) 8.6459%, rgba(102, 102, 102, 0) 65.974%), linear-gradient(-5.83293deg, rgba(51, 255, 0, 0.48) 6.0387%, rgba(38, 120, 177, 0) 94.608%), linear-gradient(174.654deg, rgba(255, 36, 251, 0.78) 13.76%, rgba(38, 120, 177, 0) 94.551%)" }}>
        goldfish
      </p>
      <div className="absolute h-[199px] left-[-56px] top-[233px] w-[286px]" data-name="Goldfish 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGoldfish1} />
      </div>
      <div className="absolute h-[39px] left-[181px] top-[160px] w-[40px]" data-name="Bubble_Button 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.41%] left-[-83.02%] max-w-none top-[-33.29%] w-[274.42%]" src={imgBubbleButton31} />
        </div>
      </div>
    </div>
  );
}