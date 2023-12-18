export interface IProductItem {
  title: string;
  description: string;
  price: number;
  image?: { src: string; alt: string };
  url?: string;
  color?: string;
  size?: string;
  type?: string;
  key?: string;
}
