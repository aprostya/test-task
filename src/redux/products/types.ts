export interface IFilter {
  groupCategory: string;
  filters: string[];
}
export interface IProductItem {
  title: string;
  description: string;
  price: number;
  image?: { src: string; alt: string };
  url?: string;
  color?: string;
  size?: string;
  type?: string;
}
