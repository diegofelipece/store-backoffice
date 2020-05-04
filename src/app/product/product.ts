export interface Product {

  id?: string;
  category: string;
  reviews?: string[];
  price: number;
  title: string;
  description?: string;
  employee: string;
}

export interface ProductFetchedFromList {

  id: string;
  data: {
    category: string;
    reviews: string[];
    price: number;
    title: string;
    description: string;
    employee: string;
  };
}
