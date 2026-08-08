import mongoose, {
    Schema,
    model,
    models,
} from "mongoose";

const ProductSpecificationSchema = new Schema(

    {

        label: {

            type: String,

            required: true,

            trim: true,

        },

        value: {

            type: String,

            required: true,

            trim: true,

        },

    },

    {

        _id: false,

    }

);

const ProductReviewSchema = new Schema(

    {

        user: {

            type: String,

            required: true,

        },

        avatar: {

            type: String,

            default: "",

        },

        rating: {

            type: Number,

            required: true,

            min: 1,

            max: 5,

        },

        comment: {

            type: String,

            required: true,

        },

        createdAt: {

            type: Date,

            default: Date.now,

        },

    },

    {

        _id: true,

    }

);

const ProductSchema = new Schema(

    {

        title: {

            type: String,

            required: true,

            trim: true,

        },


        slug: {

            type: String,

            required: true,

            unique: true,

            index: true,

            lowercase: true,

            trim: true,

        },


        description: {

            type: String,

            required: true,

        },


        category: {

            type: String,

            required: true,

            index: true,

        },


        brand: {
            type: String,
            required: true,
            index: true,
        },


        images: {

            type: [String],

            required: true,

        },


        price: {

            type: Number,

            required: true,

        },


        previousPrice: {

            type: Number,

            default: null,

        },


        discount: {

            type: Number,

            default: 0,

        },


        stock: {

            type: Number,

            default: 0,

        },


        status: {

            type: String,

            enum: [

                "available",

                "out_of_stock",

                "coming_soon",

            ],

            default: "available",

            index: true,

        },


        featured: {

            type: Boolean,

            default: false,

            index: true,

        },
        
        featuredOrder: {

            type: Number,

            default: 0,

        },


        rating: {

            type: Number,

            default: 5,

        },


        reviewCount: {

            type: Number,

            default: 0,

        },


        specifications: [

            ProductSpecificationSchema,

        ],


        reviews: [

            ProductReviewSchema,

        ],

    },


    {

        timestamps: true,

    }

);

const Product =

    models.Product ||

    model("Product", ProductSchema);


export default Product;