import { useMemo } from "react";
import clsx from "clsx";
import StarRating from "@/components/home/review/StarRating";
import Image from "next/image";

type ReviewProps = {
  title: string;
  body: string;
  author: string;
  rating: number;
  imageSrc: string;
  className?: string;
};

function Review({
  title,
  body,
  author,
  rating,
  imageSrc,
  className,
  ...props
}: ReviewProps) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-100 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <div className="flex justify-between items-center mb-4">
          <p className="mt-4 text-lg font-semibold leading-6">{title}</p>
          <Image src={imageSrc} alt={author} width={60} height={60} />
        </div>
        <p className="mt-3 text-base leading-7 before:content-['“'] after:content-['”']">
          {body}
        </p>
      </blockquote>
      <div className="flex justify-between items-center mb-4">
        <figcaption className="text-sm text-gray-600  before:content-['–_']">
          {author}
        </figcaption>
        <StarRating rating={rating} />
      </div>
    </figure>
  );
}

export default Review;
