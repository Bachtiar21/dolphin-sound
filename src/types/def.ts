export interface Products {
  id: number;
  badge: string;
  name: string;
  what_in_the_box: string[];
  price: number;
  category: string;
  image: string;
  video_review_link: string[];
  url_page: string;
  spesification?: string[];
  product_features?: string[];
}

export interface Jumbotrons {
  id: number;
  link_image: string;
  alt: string;
}

export interface Navbar {
  label: string,
  href: string,
  children: boolean
}

export interface AboutUs {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
}