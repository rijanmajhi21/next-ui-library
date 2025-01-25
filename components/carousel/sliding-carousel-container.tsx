import { FunctionComponent } from "react";
import SlidingCarouselImage from "./sliding-carouse-image";

const AboutUsCarousel: FunctionComponent = () => {
  return (
    <div className="relative h-auto w-full overflow-hidden">
      <div className="flex h-full w-[calc(296px*7)] animate-scroll-carousel hover:animate-pause">
        {/* {ARRAY.concat(ARRAY).map((slide, index) => ( */}
        <div
          // key={index}
          className="h-full w-[226px] flex-shrink-0 md:w-[256px] lg:w-[296px]"
        >
          <SlidingCarouselImage
            imagePath={""}
            title={""}
            number={""}
            link={""}
          />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default AboutUsCarousel;
