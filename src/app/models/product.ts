export type ProductResult = Readonly<{
  author: ProductAuthor;
  categories: string[];
  items: Product[]
}>;

export type Product = Readonly<{
  id: string;
  title: string;
  price: ProductPrice;
  picture: string | null;
  condition: string;
  free_shipping: boolean;
  location: string;
  description: string
}>;

export type ProductAuthor = Readonly<{
  name: string;
  lastname: string;
}>;

export type ProductPrice = Readonly<{
  currency: string;
  amount: number;
  decimals: number;
}>;