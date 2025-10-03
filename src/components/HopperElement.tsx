export default function HopperElement(){
    return (
      <div className={'flex flex-col gap-2'}>
          <div className={'hopper-element w-[50px] h-[50px]'}></div>
          <div className={'hopper-element w-[110px] h-[50px]'}></div>
          <div className={'hopper-element w-[170px] h-[50px]'}></div>
      </div>
    );
}