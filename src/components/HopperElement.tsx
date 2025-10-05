
interface HopperElementProps {
    className?: string;
}
export default function HopperElement({className}: HopperElementProps) {
    return (
      <div className={'flex flex-col gap-1'}>
          <div className={`hopper-element w-[50px] h-[50px] ${className}`}></div>
          <div className={`hopper-element w-[110px] h-[50px] ${className}`}></div>
          <div className={`hopper-element w-[170px] h-[50px] ${className}`}></div>
      </div>
    );
}