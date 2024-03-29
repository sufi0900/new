export type ItemKey = "cart" | "wishlist" | "checkout";

export interface NavItem {
  label: string;
  href: string;
}

export interface IRating {
  rate: number;
  count: number;
}
export interface Game {
  _id: string;
  name: string;
  price: number;
  images: Array<{
    _key: string;
    url: string;
  }>;
  isFeatured: boolean;
  isTrending: boolean;
  category: { name: string; slug: { current: string } };
  slug: { current: string };
  quantity: number;
  description: string;
}

export type GameSubset = Pick<
  Game,
  "_id" | "price" | "quantity" | "images" | "name"
> & { maxQuantity: number };

export interface IProduct {
  id: string;
  name: string;
  description: any;
  tableOfContents: {
    title: string;
    description: string;
    id: string;
  }[];
  content: any;
  price: number;
  rating: IRating;
  slug: string;
  mainImage: string;
  category: ICategory;
  gallery: string[];
}
export interface Aitool {
  id: string;
  title: string;
  description: any;
  tableOfContents: {
    title: string;
    description: string;
    id: string;
  }[];
  content: any;
  price: number;
  rating: IRating;
  slug: { current: string };
  mainImage: string;
  categoryAitool: { name: string; slug: { current: string } };

  gallery: string[];
}

export interface ICategory {
  id: string;
  name: string;
  image: string;
  slug: { current: string };
}
export interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  image: string;
  subtitle: string;
}

export interface IFeaturedItems {
  topCategories: ICategory[];
  bestDeals: IProduct[];
  mostSellingProducts: IProduct[];
  trendingProducts: IProduct[];
}

export interface IState {
  cart: IItem[];
  wishlist: IItem[];
  checkout: IItem[];
}

export interface IItem extends IProduct {
  count: number;
}

export interface IBreadcrumbItem {
  name: string;
  link: string;
}

export interface IContext {
  state: IState;
  addItem: (key: ItemKey, product: IProduct, count?: number) => void;
  removeItem: (key: ItemKey, productId: string) => void;
  increaseCount: (key: ItemKey, productId: string) => void;
  decreaseCount: (key: ItemKey, productId: string) => void;
  isAdded: (key: ItemKey, productId: string) => boolean;
  resetItems: (key: ItemKey) => void;
}
