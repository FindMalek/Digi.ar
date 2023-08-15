import clsx from "clsx";
import { StarIcon } from "@/icons/StarIcon";

type StarRatingProps = {
  rating: number;
  className?: string;
};

function StarRating({ rating, className }: StarRatingProps) {
  const keysArray = Array.from(Array(5).keys());

  return (
    <div className={className}>
      <div className="flex">
        {keysArray.map((index) => (
          <StarIcon
            key={index}
            className={clsx(
              "h-5 w-5",
              rating > index ? "fill-pink-500" : "fill-pink-200"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default StarRating;
