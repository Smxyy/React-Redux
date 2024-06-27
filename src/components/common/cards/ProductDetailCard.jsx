import { Card } from "flowbite-react";

export function ProductDetailCard({ title, price, image, desc }) {
  return (
    <Card className="max-w-xl mx-auto"> 
    <div className="flex items-center gap-5">
        <img
        className="h-[250px] mr-4"  src={image || "../src/assets/placeholder.png"}
        alt={title || "Unknown Product"}
         />
      <div className="flex flex-col"> 
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title || "Unknown Product"}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {desc || "No description"}
        </p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {price ? price : "Unavailable"}
        </p>
      </div>
      </div>
    </Card>
  );
}
