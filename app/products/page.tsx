import React from "react";
import Image from "next/image";
import products from "@/public/Frame.png";
import { ArrowDown, Menu } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="bg-white grid grid-cols-[1fr_3fr] gap-4 pt-10 mt-40 md:mt-50">
            <div>

            </div>
            <div>
                <div className="flex px-4 md:px-10 gap-2 md:gap-6 justify-end w-full mb-4 ">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <h3 className="text-sm">Hide Filters </h3>
                        <Menu className="h-4 w-4" ></Menu>

                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <h3>Sort</h3>
                        <ArrowDown></ArrowDown>
                    </div>
                </div>
                <Image src={products} alt='products'></Image>
            </div>
        </div>
    )
};
