import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CarouselImageProps {
  imagePath: string;
  title: string;
  number: string;
  link: string;
}

const SlidingCarouselImage: FunctionComponent<CarouselImageProps> = ({
  imagePath,
  title,
  number,
  link,
}) => {
  const imageUrl = `${imagePath}`;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="group relative float-left mx-2 overflow-hidden">
        <Link href={link} className="relative block lg:min-w-[296px]">
          <Image
            src={imageUrl}
            alt={title}
            className="object-cover"
            height={350}
            width={296}
          />
          <span className="absolute bottom-8 right-0 bg-primary px-6 py-3 text-body-base-bold uppercase text-pure-white">
            {title}
          </span>
          <span className="absolute left-4 top-4 -translate-x-full bg-pure-white px-4 py-3 text-body-base-bold text-primary opacity-0 transition duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
            {number}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SlidingCarouselImage;
