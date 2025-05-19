import type { ImageProps } from "next/image";
import Image from "next/image";

export function ImageWithPlaceholder(props: ImageProps) {
  return (
    <Image
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPs23SxHgAGeQKSo4nawAAAAABJRU5ErkJggg=="
      {...props}
      alt={props.alt || ""}
    />
  );
}
