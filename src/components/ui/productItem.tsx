import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-bold">
                R$ {Number(product.totalPrice).toFixed(2).replace(".", ",")}
              </p>
              <p className="text-xs text-gray-400 line-through">
                R$ {Number(product.basePrice).toFixed(2).replace(".", ",")}
              </p>
            </>
          ) : (
            <p className="text-sm font-bold">
              R$ {Number(product.basePrice).toFixed(2).replace(".", ",")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
