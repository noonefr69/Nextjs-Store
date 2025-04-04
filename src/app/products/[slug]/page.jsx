import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import AddToCart from "@/components/AddToCart";
import { auth } from "@/auth";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = await params;

  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${slug}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

async function getProduct(slug) {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
  return res.json();
}

export default async function ItemDetails({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  const product = await getProduct(params.slug);

  const relatedData = data.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const session = await auth();

  const user = session?.user;

  return (
    <div className="px-7 md:px-14 rounded">
      <div className="max-w-[1000px] mx-auto rounded bg-white shadow-sm px-7 md:px-14 md:my-20">
        <div className="md:grid md:grid-cols-2 md:gap-20 mt-10 md:p-10">
          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              className="mb-7 md:mb-0"
              width={300}
              height={250}
            />
          </div>
          <div>
            <h1 className="text-3xl mb-5">{product.title}</h1>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-bold text-2xl">£{product.price}</span>
              <p>+ Free Shipping</p>
            </div>
            <p className="text-zinc-700 text-lg mb-5">{product.description}</p>
            <AddToCart productId={product.id} />
            <div className="h-[1px] my-5 w-full bg-zinc-300"></div>
            <div className="text-zinc-700 flex items-center gap-2">
              Category:
              <span className="text-[#1B9C85] capitalize">
                <Link
                  href={`/products/${product.category
                    .replace(/'/g, "")
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  {product.category}
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <div className="border-t">
            <Tabs defaultValue="description" className="w-full">
              <TabsList
                className={`rounded-none bg-transparent text-center items-center justify-center flex w-full md:w-fit`}
              >
                <TabsTrigger
                  value="description"
                  className={`cursor-pointer rounded-none text-lg`}
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className={`cursor-pointer rounded-none text-lg`}
                >
                  Reviews (0)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className={``}>
                <p className="text-zinc-700 mt-6 mb-12">
                  {product.description}
                </p>
              </TabsContent>
              <TabsContent value="reviews">
                {user ? (
                  <div className="mt-6 mb-12">
                    <h1 className="text-2xl">There is no review</h1>
                  </div>
                ) : (
                  <div className="mt-6 mb-12">
                    <h1 className="text-2xl">
                      You are nor signing it go{" "}
                      <Link
                        className="bg-[#1B9C85] text-white px-2 py-1 rounded"
                        href={`/account`}
                      >
                        Sign In
                      </Link>
                    </h1>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
          <div className="pb-20">
            <h1 className="md:text-4xl font-semibold mb-7">Related products</h1>
            <div className="md:grid md:grid-cols-4 md:gap-6">
              {relatedData.map((dat) => (
                <Link
                  className="flex flex-col items-center w-full mx-auto text-center shadow-sm p-2 rounded mb-7 md:mb-0"
                  key={dat.id}
                  href={`/products/${dat.id}`}
                >
                  <Image
                    src={dat.image}
                    className="rounded mb-4 shrink-0"
                    width={150}
                    height={150}
                    alt={dat.title}
                  />
                  <div className="flex flex-col justify-between h-full">
                    <h6 className="mt-3 mb-4 md:m-0 text-zinc-500 capitalize">
                      {dat.category}
                    </h6>
                    <h3 className="text- font-semibold">{dat.title}</h3>
                    <span className="text-sm my-1 flex items-center justify-center">
                      {Array.from(
                        { length: Math.floor(dat.rating.rate) },
                        (_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        )
                      )}
                    </span>
                    <h3 className="font-semibold">£{dat.price.toFixed(2)}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
