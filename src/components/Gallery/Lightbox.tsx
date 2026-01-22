import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";


type LightboxProps = {
    isOpen: boolean;
    images: string[];
    image_description: string[];
    index: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
};

export default function Lightbox({isOpen, images, image_description, index, onClose, onNext, onPrev}: LightboxProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/75 flex"
            onClick={onClose}
        >
            <div
                className="m-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={'flex justify-between text-xl mb-4'}>
                    <h1>{image_description[index]}</h1>
                    <h1 className={'text'}>{index + 1} / 5</h1>
                </div>
                <Image
                    src={images[index]}
                    alt={image_description[index]}
                    width={1600}
                    height={900}
                    className="w-[2000px] max-w-[90vw] max-h-[90vh] object-contain"
                />

                <button
                    onClick={onPrev}
                    className="left-12 lightboxButton"
                >
                    <IoChevronBackOutline className={'w-full text-[36px] -ml-[3px]'} />
                </button>

                <button
                    onClick={onNext}
                    className="right-12 lightboxButton"
                >
                    <IoChevronBackOutline className={'w-full text-[36px] rotate-180 ml-[2px]'} />
                </button>

                <button
                    onClick={onClose}
                    className="absolute top-12 right-12 bg-black/50 text-white w-14 h-14 rounded-full cursor-pointer flex justify-center items-center"
                >
                    <IoIosClose className={'text-[44px] -mb-[2px]'}/>
                </button>
            </div>
        </div>
    );
}
