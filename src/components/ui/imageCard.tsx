import Image from "next/image";

type Props = {
  imageUrl: string;
  caption: string;
};

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="rounded-base border-border dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark w-[250px] overflow-hidden border-2">
      <Image
        className="aspect-[4/3] w-full object-cover"
        src={imageUrl}
        width={250}
        height={250}
        fill={false}
        alt="image"
      />
      <figcaption className="text-text border-border dark:border-darkBorder border-t-2 p-4">
        {caption}
      </figcaption>
    </figure>
  );
}
