export default function HeroElement() {
    return (
        <div className="absolute top-[-300px] right-[-500px] rotate-[320deg] flex flex-col gap-8 z-0">
            <div className="hero-element"></div>
            <div className="hero-element -translate-x-[100px]"></div>
            <div className="hero-element"></div>
        </div>
    );
}
