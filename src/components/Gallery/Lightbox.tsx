import Image from "next/image";

type LightboxProps = {
    isOpen: boolean;
    images: string[];
    index: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
};


export default function Lightbox({
                                     isOpen,
                                     images,
                                     index,
                                     onClose,
                                     onNext,
                                     onPrev,
                                 }: LightboxProps) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/75 z-90"
                onClick={onClose}
            />

            <div className="fixed inset-0 z-[100]">
                <button
                    onClick={onClose}
                    className="fixed top-12 left-12 z-[110]"
                >
                    Close
                </button>

                <button
                    onClick={onNext}
                    className="fixed top-20 left-12 z-[110]"
                >
                    Forward
                </button>

                <button
                    onClick={onPrev}
                    className="fixed top-28 left-12 z-[110]"
                >
                    Back
                </button>

                <div className="absolute inset-12">
                    <Image
                        src={images[index]}
                        alt="Lightbox image"
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
        </>
    );
}
