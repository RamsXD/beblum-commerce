import { Stripe } from "stripe";
import ProductImage from "@/src/app/components/ProductImage";
import { formatPrice } from "@/src/lib/utils";
import AddCart from "@/src/app/components/AddCart";

type ProductPageProps = {
  params: {
    id: string;
  };
};

async function getProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});
  const produto = await stripe.products.retrieve(id);
  const prices = await stripe.prices.list({
    product: produto.id,
  });

  return {
    id: produto.id,
    price: prices.data[0].unit_amount,
    name: produto.name,
    image: produto.images[0],
    description: produto.description,
    currency: prices.data[0].currency,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-10">
      <ProductImage product={product} />
      <div className="flex flex-col ">
        <div className="pb-4">
          <h1 className="text-2xl text-gray-300 font-bold">{product.name}</h1>
          <h2 className="text-xl text-teal-600 font-bold">
            {formatPrice(product.price)}
          </h2>
        </div>
        <div className="pb-4">
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        <AddCart product={product} />
      </div>
    </div>
  );
}
