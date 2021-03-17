export type ProductResultResponse = Readonly<{
  site_id: string;
  paging: ProductResultPagingResponse;
  results: ProductsResultResponse[]
}>;

export type ProductResultPagingResponse = Readonly<{
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}>;

export type ProductResultAddressResponse = Readonly<{
  city_id: string;
  city_name: string;
  state_id: string;
  state_name: string;
}>;

export type ProductsResultResponse = Readonly<{
  id: string;
  title: string;
  price: number;
  currency_id: string;
  shipping: ProductsResultShippingResponse,
  thumbnail: string,
  address: ProductResultAddressResponse
}>;

export type ProductsResultShippingResponse = Readonly<{
  free_shipping: boolean;
}>;

export type ProductDescriptionResponse = Readonly<{
  plain_text: string
}>;

export type ProductDetailResponse = Readonly<{
  id: string;
  title: string;
  price: number;
  currency_id: string;
  shipping: ProductsResultShippingResponse,
  pictures: ProductPicturesResponse[]
}>;

export type ProductPicturesResponse = Readonly<{
  id: string;
  max_size: string,
  quality: string,
  secure_url: string,
  size: string,
  url: string
}>;