import { ProductBase } from "@/shared/types/product";


export const PRODUCTS: ProductBase[] = [

    {
        title: "Apple iPhone 16 Pro Max",

        slug: "apple-iphone-16-pro-max",

        images: [
            "/images/products/iPhone 16 Pro Max.jpg",
            "/images/products/iPhone 16 Pro Max.jpg",
            "/images/products/iPhone 16 Pro Max.jpg",
            "/images/products/iPhone 16 Pro Max.jpg",
        ],


        price: 89900000,

        previousPrice: 94900000,

        discount: 5,


        category: "موبایل",

        brand: "Apple",


        description:
            "آیفون 16 پرو مکس جدیدترین پرچمدار اپل با نمایشگر Super Retina XDR، تراشه قدرتمند A18 Pro، دوربین حرفه‌ای و طراحی تیتانیومی است.",


        stock: 12,


        status: "available",

        featured: true,


        rating: 4.9,

        reviewCount: 248,


        specifications: [

            {
                label: "نمایشگر",
                value: "6.9 اینچ Super Retina XDR OLED",
            },

            {
                label: "پردازنده",
                value: "Apple A18 Pro",
            },

            {
                label: "حافظه داخلی",
                value: "256 گیگابایت",
            },

            {
                label: "رم",
                value: "8 گیگابایت",
            },

            {
                label: "دوربین",
                value: "48 + 48 + 12 MP",
            },

            {
                label: "باتری",
                value: "4685 mAh",
            },

        ],


        reviews: [],

    },

];