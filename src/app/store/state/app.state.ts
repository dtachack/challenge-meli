import { Product, ProductResult } from 'src/app/models/product';

export const appFeatureName = 'challenge-meli';

export type UIAppState = Readonly<{
  isLoading: boolean
}>;

export type AppState = Readonly<{
  products: ProductResult,
  productDetail: Product,
  ui: UIAppState
}>;
