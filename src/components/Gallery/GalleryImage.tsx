import Image from "next/image";
import { HTMLAttributes } from "react";

type GalleryImageProps = {
    url: string;
    alt: string;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function GalleryImage({url, alt, className = "", ...props}: GalleryImageProps) {
    return (
        <div
            {...props}
            className={`relative overflow-hidden rounded-lg aspect-[5/3] cursor-pointer ${className}`}
        >
            <Image
                src={url}
                alt={alt}
                fill
                className="object-cover object-center"
            />
        </div>
    );
}
