export type ProductSpecification = {
    label: string;
    value: string;
};


export type ProductReview = {
    id: string;
    user: string;
    avatar?: string;
    rating: number;
    comment: string;
    createdAt: string;
};


export type ProductStatus =
    | "available"
    | "out_of_stock"
    | "coming_soon";


export type ProductBase = {
    
    _id: string;

    title: string;

    slug: string;

    description: string;

    category: string;

    brand: string;

    images: string[];

    price: number;

    previousPrice?: number | null;

    discount?: number;

    stock: number;

    status: ProductStatus;

    featured: boolean;

    rating: number;

    reviewCount: number;

    specifications: ProductSpecification[];

    reviews: ProductReview[];

};


export type Product = ProductBase & {

    id: string;

    createdAt: string;

    updatedAt: string;

};