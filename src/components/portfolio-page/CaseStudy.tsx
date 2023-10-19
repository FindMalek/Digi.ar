import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/utils";

import { Button } from "@/components/ui/Button";

import { Blockquote } from "@/components/portfolio-page/Blockquote";
import Border from "@/components/portfolio-page/Border";

interface CaseStudy {
  caseStudy: {
    logo: string;
    client: string;
    service: string;
    date: string;
    title: string;
    summary: string[];
    testimonial: {
      author: {
        name: string;
        role: string;
      };
      content: string;
    };
  };
}

export default function CaseStudy({ caseStudy }: CaseStudy) {
  return (
    <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
      <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
        <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
          <Image
            src={caseStudy.logo}
            alt={caseStudy.client}
            width={700}
            height={500}
            className="h-[100px] w-[100px] flex-none"
            unoptimized
          />
          <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
            {caseStudy.client}
          </h3>
        </div>
        <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
          <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
            {caseStudy.service}
          </p>
          <p className="text-sm text-neutral-950 lg:mt-2">
            <time dateTime={caseStudy.date}>{formatDate(caseStudy.date)}</time>
          </p>
        </div>
      </div>
      <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
        <p className="font-display text-4xl font-semibold text-neutral-950">
          {caseStudy.title}
        </p>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          {caseStudy.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {caseStudy.testimonial && (
          <Blockquote author={caseStudy.testimonial.author} className="mt-12">
            {caseStudy.testimonial.content}
          </Blockquote>
        )}
      </div>
    </Border>
  );
}
