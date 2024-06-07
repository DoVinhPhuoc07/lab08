export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export interface INewProduct {
  name: string;
  price: string | number;
  image: string;
  description: string;
  id: string;
}
