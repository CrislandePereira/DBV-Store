import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <h1>{product?.name}</h1>
    </div>
  );
};

export default ProductDetailsPage;
