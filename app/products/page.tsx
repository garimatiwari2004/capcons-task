import React from "react";
import Image from "next/image";
import products from "@/public/Frame.png";

export default function ProductsPage() {
    return (
        <div className="bg-white grid grid-cols-[1fr_3fr] gap-4 pt-10 mt-50 md:mt-80">
            <div>

            </div>
            <div>
                <Image src={products} alt='products'></Image>
            </div>
        </div>
    )
};
