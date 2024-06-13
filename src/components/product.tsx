"use client";
import { ProductType } from "@/interface";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "./image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className=" flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border">
      <div className="relative min-h-80 flex-1">
        <CustomImage product={product} fill />
      </div>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <p className="leading-relaxed text-base line-clamp-2">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
