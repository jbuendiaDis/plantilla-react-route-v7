interface ProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const ProfileImage = ({ src, alt, className = '' }: ProfileImageProps) => (
    <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover ${className}`}
    />
); 