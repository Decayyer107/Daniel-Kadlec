import GalleryImage from "@/components/Gallery/GalleryImage";

type ProjectGalleryProps = {
    images: string[];
    alt: string[];
};

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {
    return (
        <div className="w-full flex flex-col gap-6">
            {images[0] && (
                <GalleryImage
                    url={images[0]}
                    alt={alt[0]}
                    className=""
                />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {images[1] && (
                    <GalleryImage
                        url={images[1]}
                        alt={alt[1]}
                        className=""
                    />
                )}

                {images[2] && (
                    <GalleryImage
                        url={images[2]}
                        alt={alt[2]}
                        className=""
                    />
                )}

                {images[3] && (
                    <GalleryImage
                        url={images[3]}
                        alt={alt[3]}
                        className=""
                    />
                )}

                {images[4] && (
                    <GalleryImage
                        url={images[4]}
                        alt={alt[4]}
                        className=""
                    />
                )}
            </div>
        </div>
    );
}
