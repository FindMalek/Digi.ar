import clsx from "clsx";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { splitArray } from "@/lib/utils";

import ReviewColumn from "@/components/home/review/ReviewColumns";

type Review = {
  reviews: {
    title: string;
    body: string;
    author: string;
    rating: number;
    imageSrc: string;
  }[];
};

function ReviewGrid({ reviews }: Review) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray({ array: reviews, numParts: 3 });
  columns = [
    columns[0],
    columns[1],
    splitArray({ array: columns[2], numParts: 2 }),
  ];


  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  "md:hidden",
                reviewIndex >= columns[0].length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />

          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
}

export default ReviewGrid;
