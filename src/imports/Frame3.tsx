const imgBackground3 = "/images/background-blue.png";
const imgAngelfish1 = "/images/angelfish.png";
const imgListBubble1 = "/images/list-bubble.png";
const imgBubbleButton31 = "/images/bubble-button-3.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Background 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.84%] left-[-33.1%] max-w-none top-[-2.97%] w-[165.95%]" src={imgBackground3} />
        </div>
      </div>
      <p className="absolute bg-clip-text blur-[1.05px] font-['Cherry_Bomb:Regular',sans-serif] leading-[normal] left-[38px] not-italic text-[72px] text-[transparent] top-[60px] tracking-[2.88px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(11.7575deg, rgba(255, 255, 255, 0.2) 18.791%, rgba(102, 102, 102, 0) 82.702%), linear-gradient(192.095deg, rgba(131, 255, 253, 0.63) 8.6459%, rgba(102, 102, 102, 0) 65.974%), linear-gradient(-5.24596deg, rgba(51, 255, 0, 0.48) 6.0387%, rgba(38, 120, 177, 0) 94.608%), linear-gradient(175.193deg, rgba(255, 36, 251, 0.78) 13.76%, rgba(38, 120, 177, 0) 94.551%)" }}>
        angelfish
      </p>
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
    </div>
  );
}