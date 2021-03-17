import { environment } from "src/environments/environment";
import { Product, ProductPrice, ProductResult } from "../models/product";
import { ProductDescriptionResponse, ProductDetailResponse, ProductResultResponse } from "../models/product-response";

export function resultSearch(productResult: ProductResultResponse): ProductResult {
  let products: Product[] = [];
  productResult?.results?.forEach(product => {
    products.push({
      id: product?.id,
      title: product?.title,
      price: {
        currency: product?.currency_id,
        amount: product?.price,
        decimals: 0
      } as ProductPrice,
      picture: product?.thumbnail,
      condition: '',
      free_shipping: product?.shipping?.free_shipping,
      location: product?.address?.state_name || product?.address?.city_name
    } as Product);
  });
  return {
    items: !!products && products.length > environment.numberProducts ?
      products?.slice(0, environment.numberProducts) :
      products
  } as ProductResult;
}

export function productDetail(productDetail: ProductDetailResponse, description: ProductDescriptionResponse): Product {
  return {
    id: productDetail?.id,
    title: productDetail?.title,
    price: { amount: productDetail?.price } as ProductPrice,
    picture: !!productDetail?.pictures && productDetail?.pictures.length > 0 ? productDetail?.pictures[0].url : null,
    free_shipping: productDetail?.shipping?.free_shipping,
    description: description?.plain_text
  } as Product;
}