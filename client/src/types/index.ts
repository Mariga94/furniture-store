export interface Product {
    id: string;
    name: string;
    category: string;
    short_desc: string;
    long_desc: string;
    price: number;
    currency: string;
    placeholder_image_url: string;
    image_urls: string[];
}

export interface ProductProps extends Product {

}