import React from "react";

interface ImageProps {
    src: string;
    fallback: string;
    type?: string;
    alt: string;
}
const Image = ({ src, fallback, type = "image/webp", alt }: ImageProps) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img src={fallback} alt={alt} />
        </picture>
    );
};

export default Image;
