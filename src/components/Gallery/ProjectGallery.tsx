import GalleryImage from "@/components/Gallery/GalleryImage";
import { useState } from "react";

type ProjectGalleryProps = {
    images: string[];
    alt: string[];
};

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {

    const [hovered, setHovered] = useState<number | null>(null);
    const baseClasses =
        "cursor-pointer transition-all duration-500 ease-out";

    const getStyle = (id: number) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
        ${baseClasses}
        ${isHovered ? "scale-[100%]" : isOther ? "opacity-50" : "opacity-100"}
    `;
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {images[0] && (
                <GalleryImage
                    url={images[0]}
                    alt={alt[0]}
                    onMouseEnter={() => setHovered(0)}
                    onMouseLeave={() => setHovered(null)}
                    className={getStyle(0)}
                />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {images.slice(1, 5).map((img, i) =>
                    img ? (
                        <GalleryImage
                            key={i + 1}
                            url={img}
                            alt={alt[i + 1]}
                            onMouseEnter={() => {setHovered(i + 1);}}
                            onMouseLeave={() => setHovered(null)}
                            className={getStyle(i + 1)}
                        />
                    ) : null
                )}
            </div>
        </div>
    );
}
