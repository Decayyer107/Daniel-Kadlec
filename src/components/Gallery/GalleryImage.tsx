import Image from "next/image";

type GalleryImageProps = {
    url: string;
    alt: string;
    className?: string;
};

export default function GalleryImage({url, alt, className = ""}: GalleryImageProps) {
    return (
        <div className={`relative overflow-hidden rounded-lg aspect-[5/3] ${className}`}>
            <Image
                src={url}
                alt={alt}
                fill
                className="object-cover object-center"
            />
        </div>
    );
}
