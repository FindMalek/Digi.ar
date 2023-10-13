"use client"

import { useState } from "react";
import Image from "next/image";


import DetailBlog from "@/components/blog-page/DetailBlog";

type Post = {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
  content: {
    subtitle: string;
    p: string[];
  }[];
  
}

export default function Blog(post: Post) {
  const [open, setOpen] = useState(false);

  return (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between"
      onClick={() => setOpen(true)}
    >
      <div className="relative w-full">
        <Image
          src={post.imageUrl}
          alt={post.imageAlt}
          height={2000}
          width={2000}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <p className="relative z-10 rounded-full text-white bg-pink-600 px-3 py-1.5 font-medium hover:bg-pink-400">
            {post.category.title}
          </p>
        </div>
        <div className="group relative">
          <h3
            className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <span className="absolute inset-0" />
            {post.title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={post.author.imageUrl}
            alt=""
            height={2000}
            width={2000}
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <span className="absolute inset-0" />
              {post.author.name}
            </p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div>
      </div>
      <DetailBlog open={open} setOpen={setOpen} post={post} />
    </article>
  );
}
