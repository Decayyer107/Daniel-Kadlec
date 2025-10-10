import { ReactNode } from "react";

interface HeadingProps{
    Heading: ReactNode;
    Subheading?: string;
    className?: string;
}
export default function Heading({Heading, Subheading, className}:HeadingProps) {
    return(
        <div className={`mb-18 ${className}`}>
            <h1 className={'text-h1'}>{Heading}</h1>
            <h2 className={'text-subheading'}>{Subheading}</h2>
        </div>
    );
}