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

export type Product = {
    id: string;

    title: string;

    slug: string;

    description: string;

    category: string;

    brand: string;

    images: string[];

    price: number;

    previousPrice?: number;

    discount?: number;

    stock: number;

    rating: number;

    reviewCount: number;

    specifications: ProductSpecification[];

    reviews: ProductReview[];

    createdAt: string;

    updatedAt: string;
};