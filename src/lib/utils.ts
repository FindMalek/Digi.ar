import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SplitArray = {
  array: any[];
  numParts: number;
};

export function splitArray({ array, numParts }: SplitArray) {
  let result: any[][] = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

export function formatDate(dateString: string) {
  let parts = dateString.split("-");
  let hasDay = parts.length > 2;

  return new Date(`${dateString}Z`).toLocaleDateString("en-US", {
    day: hasDay ? "numeric" : undefined,
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}