
interface HopperElementProps {
    className?: string;
    classIndividual?: string;
}
export default function HopperElement({className, classIndividual}: HopperElementProps) {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
          <div className={`hopper-element w-[50px] h-[50px] ${classIndividual}`}></div>
          <div className={`hopper-element w-[110px] h-[50px] ${classIndividual}`}></div>
          <div className={`hopper-element w-[170px] h-[50px] ${classIndividual}`}></div>
      </div>
    );
}