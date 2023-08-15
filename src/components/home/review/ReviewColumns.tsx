import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Review from "@/components/home/review/Review";

type ReviewProps = {
  name: string;
  avatar: string;
  review: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  author: string;
};

type ReviewColumnProps = {
  className?: string;
  reviews: ReviewProps[];
  reviewClassName?: (index: number) => string;
  msPerPixel?: number;
};

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => "",
  msPerPixel = 0,
}: ReviewColumnProps) {
  let columnRef = useRef<HTMLDivElement>(null);
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current!.offsetHeight);
    });

    if (columnRef.current) {
      resizeObserver.observe(columnRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

export default ReviewColumn;
