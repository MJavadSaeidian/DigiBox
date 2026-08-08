"use client";

import {
    useEffect,
    useState
} from "react";

import Image from "next/image";

import styles from "./cart.module.scss";
import dynamic from "next/dynamic";

const MapPicker =
    dynamic(
        () =>
            import(
                "@/shared/components/MapPicker"
            ),
        {
            ssr: false
        }
    );



type CartProduct = {
    _id: string;

    title: string;

    brand?: string;

    price: number;

    previousPrice?: number | null;

    images: string[];

    stock: number;
};


type CartItem = {
    product: CartProduct;

    quantity: number;
};


type CartData = {
    items: CartItem[];
};


export default function CartPage() {

    const [cart, setCart] =
        useState<CartData | null>(null);


    const [loading, setLoading] =
        useState(true);


    const [couponCode, setCouponCode] =
        useState("");


    const [address, setAddress] =
        useState("");


    const [city, setCity] =
        useState("");


    const [postalCode, setPostalCode] =
        useState("");


    const [isGettingLocation, setIsGettingLocation] =
        useState(false);


    const [locationMessage, setLocationMessage] =
        useState("");

    const [isMapOpen, setIsMapOpen] =
        useState(false);


    const [mapLatitude, setMapLatitude] =
        useState(35.6892);


    const [mapLongitude, setMapLongitude] =
        useState(51.3890);


    const [isFindingAddress, setIsFindingAddress] =
        useState(false);




    /*
    |--------------------------------------------------------------------------
    | Get Cart
    |--------------------------------------------------------------------------
    */

    async function getCart() {

        try {

            setLoading(true);


            const response =
                await fetch(
                    "/api/cart"
                );


            const data =
                await response.json();


            if (!response.ok) {

                console.error(
                    data.message
                );

                return;
            }


            setCart(
                data.cart
            );


        } catch (error) {

            console.error(
                "Get cart error:",
                error
            );

        } finally {

            setLoading(false);

        }

    }


    async function handleMapLocation(
        latitude: number,
        longitude: number
    ) {

        setMapLatitude(latitude);

        setMapLongitude(longitude);

        setIsFindingAddress(true);


        try {

            const response =
                await fetch(
                    `/api/geocode/reverse?lat=${latitude}&lon=${longitude}`
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message
                );

            }


            /*
             * شهر
             */

            setCity(
                data.city || ""
            );


            /*
             * خیابان
             */

            const road =
                data.road || "";


            /*
             * محله
             */

            const neighbourhood =
                data.neighbourhood || "";


            /*
             * شماره پلاک
             */

            const houseNumber =
                data.houseNumber || "";


            const generatedAddress =
                [
                    data.province,
                    neighbourhood,
                    road,
                    houseNumber
                ]
                    .filter(Boolean)
                    .join("، ");


            setAddress(
                generatedAddress
            );


            setLocationMessage(
                "آدرس با موفقیت از روی نقشه دریافت شد."
            );


            /*
             * بستن نقشه
             */

            setIsMapOpen(false);


        } catch (error) {

            console.error(
                "Address error:",
                error
            );


            setLocationMessage(
                "امکان دریافت آدرس این نقطه وجود ندارد."
            );


        } finally {

            setIsFindingAddress(false);

        }

    }



    useEffect(() => {

        getCart();

    }, []);



    /*
    |--------------------------------------------------------------------------
    | Get User Location
    |--------------------------------------------------------------------------
    */

    function handleGetLocation() {

        if (!navigator.geolocation) {

            setLocationMessage(
                "مرورگر شما از موقعیت مکانی پشتیبانی نمی‌کند."
            );

            return;
        }


        setIsGettingLocation(true);

        setLocationMessage(
            "در حال دریافت موقعیت..."
        );


        navigator.geolocation.getCurrentPosition(

            (position) => {

                const {
                    latitude,
                    longitude
                } = position.coords;


                console.log({
                    latitude,
                    longitude
                });


                setLocationMessage(
                    "موقعیت شما با موفقیت دریافت شد."
                );


                setIsGettingLocation(false);

            },


            () => {

                setLocationMessage(
                    "دسترسی به موقعیت مکانی داده نشد."
                );


                setIsGettingLocation(false);

            },


            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }

        );

    }



    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <main
                className={styles.page}
            >

                <div
                    className={styles.loading}
                >
                    در حال دریافت جعبه خرید...
                </div>

            </main>

        );

    }



    /*
    |--------------------------------------------------------------------------
    | Empty Cart
    |--------------------------------------------------------------------------
    */

    if (
        !cart ||
        cart.items.length === 0
    ) {

        return (

            <main
                className={styles.page}
            >

                <div
                    className={styles.container}
                >

                    <div
                        className={styles.empty}
                    >

                        <div
                            className={styles.emptyIcon}
                        >
                            🛒
                        </div>


                        <h1>
                            جعبه خرید شما خالی است
                        </h1>


                        <p>
                            هنوز محصولی به جعبه خرید
                            اضافه نکرده‌اید.
                        </p>

                    </div>

                </div>

            </main>

        );

    }



    /*
    |--------------------------------------------------------------------------
    | Total Quantity
    |--------------------------------------------------------------------------
    */

    const totalQuantity =
        cart.items.reduce(
            (
                total,
                item
            ) =>
                total +
                item.quantity,
            0
        );



    /*
    |--------------------------------------------------------------------------
    | Current Price
    |--------------------------------------------------------------------------
    */

    const totalPrice =
        cart.items.reduce(
            (
                total,
                item
            ) =>
                total +
                (
                    item.product.price *
                    item.quantity
                ),
            0
        );



    /*
    |--------------------------------------------------------------------------
    | Original Price
    |--------------------------------------------------------------------------
    */

    const totalOriginalPrice =
        cart.items.reduce(
            (
                total,
                item
            ) => {

                const originalPrice =
                    item.product.previousPrice &&
                        item.product.previousPrice >
                        item.product.price

                        ? item.product.previousPrice

                        : item.product.price;


                return (
                    total +
                    (
                        originalPrice *
                        item.quantity
                    )
                );

            },
            0
        );



    /*
    |--------------------------------------------------------------------------
    | Product Discount
    |--------------------------------------------------------------------------
    */

    const productDiscount =
        Math.max(
            0,
            totalOriginalPrice -
            totalPrice
        );



    /*
    |--------------------------------------------------------------------------
    | Coupon
    |--------------------------------------------------------------------------
    */

    const couponDiscount = 0;



    /*
    |--------------------------------------------------------------------------
    | User Savings
    |--------------------------------------------------------------------------
    */

    const userSavings =
        productDiscount +
        couponDiscount;



    /*
    |--------------------------------------------------------------------------
    | Shipping
    |--------------------------------------------------------------------------
    */

    const normalizedCity =
        city.trim();


    const isTehran =
        normalizedCity === "تهران";


    const shippingCost =
        isTehran
            ? 120000
            : normalizedCity
                ? 200000
                : 0;


    const shippingMethod =
        isTehran
            ? "پیک داخلی"
            : normalizedCity
                ? "پست پیشتاز"
                : "";



    /*
    |--------------------------------------------------------------------------
    | Final Price
    |--------------------------------------------------------------------------
    */

    const finalPrice =
        Math.max(
            0,
            totalPrice -
            couponDiscount +
            shippingCost
        );



    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (

        <main
            className={styles.page}
        >

            <div
                className={styles.container}
            >


                {/* =========================
                    Header
                ========================= */}

                <header
                    className={styles.header}
                >

                    <div>

                        <h1
                            className={styles.title}
                        >
                            جعبه خرید
                        </h1>


                        <p
                            className={styles.subtitle}
                        >
                            محصولات انتخاب‌شده شما
                        </p>

                    </div>


                    <span
                        className={styles.itemCount}
                    >
                        {totalQuantity} کالا
                    </span>

                </header>



                <div
                    className={styles.layout}
                >


                    {/* =========================
                        Products
                    ========================= */}

                    <div>

                        <section
                            className={styles.items}
                        >

                            {
                                cart.items.map(
                                    (item) => {

                                        const product =
                                            item.product;


                                        const itemTotal =
                                            product.price *
                                            item.quantity;


                                        const hasDiscount =
                                            !!(
                                                product.previousPrice &&
                                                product.previousPrice >
                                                product.price
                                            );


                                        return (

                                            <article
                                                key={
                                                    product._id
                                                }
                                                className={
                                                    styles.item
                                                }
                                            >

                                                {/* Image */}

                                                <div
                                                    className={
                                                        styles.image
                                                    }
                                                >

                                                    <Image
                                                        src={
                                                            product.images?.[0] ||
                                                            "/images/placeholder.png"
                                                        }
                                                        alt={
                                                            product.title
                                                        }
                                                        width={140}
                                                        height={140}
                                                    />

                                                </div>



                                                {/* Info */}

                                                <div
                                                    className={
                                                        styles.info
                                                    }
                                                >

                                                    {
                                                        product.brand && (

                                                            <span
                                                                className={
                                                                    styles.brand
                                                                }
                                                            >
                                                                {
                                                                    product.brand
                                                                }
                                                            </span>

                                                        )
                                                    }


                                                    <h2>
                                                        {
                                                            product.title
                                                        }
                                                    </h2>



                                                    <div
                                                        className={
                                                            styles.prices
                                                        }
                                                    >

                                                        {
                                                            hasDiscount && (

                                                                <span
                                                                    className={
                                                                        styles.previousPrice
                                                                    }
                                                                >
                                                                    {
                                                                        product
                                                                            .previousPrice!
                                                                            .toLocaleString()
                                                                    }

                                                                    {" "}تومان
                                                                </span>

                                                            )
                                                        }


                                                        <span
                                                            className={
                                                                styles.currentPrice
                                                            }
                                                        >
                                                            {
                                                                product.price
                                                                    .toLocaleString()
                                                            }

                                                            {" "}تومان
                                                        </span>

                                                    </div>



                                                    <div
                                                        className={
                                                            styles.quantity
                                                        }
                                                    >

                                                        <button
                                                            type="button"
                                                        >
                                                            +
                                                        </button>


                                                        <span>
                                                            {
                                                                item.quantity
                                                            }
                                                        </span>


                                                        <button
                                                            type="button"
                                                        >
                                                            −
                                                        </button>

                                                    </div>

                                                </div>



                                                {/* Total */}

                                                <div
                                                    className={
                                                        styles.itemTotal
                                                    }
                                                >

                                                    <strong>
                                                        {
                                                            itemTotal
                                                                .toLocaleString()
                                                        }

                                                        {" "}تومان
                                                    </strong>


                                                    <button
                                                        type="button"
                                                        className={
                                                            styles.remove
                                                        }
                                                    >
                                                        حذف
                                                    </button>

                                                </div>

                                            </article>

                                        );

                                    }
                                )
                            }

                        </section>



                        {/* =========================
                            Shipping Address
                        ========================= */}

                        <section
                            className={styles.shipping}
                        >

                            <div
                                className={
                                    styles.shippingHeader
                                }
                            >

                                <div>

                                    <h2>
                                        آدرس و نحوه ارسال
                                    </h2>


                                    <p>
                                        آدرس دریافت سفارش خود را وارد کنید.
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    className={styles.locationButton}
                                    onClick={() => setIsMapOpen(true)} >
                                    انتخاب از روی نقشه
                                </button>

                            </div>



                            {
                                locationMessage && (

                                    <div
                                        className={
                                            styles.locationMessage
                                        }
                                    >
                                        {
                                            locationMessage
                                        }
                                    </div>

                                )
                            }



                            <div
                                className={
                                    styles.addressGrid
                                }
                            >

                                {/* City */}

                                <div
                                    className={
                                        styles.field
                                    }
                                >

                                    <label>
                                        شهر
                                    </label>


                                    <input
                                        type="text"
                                        value={city}
                                        onChange={
                                            (event) =>
                                                setCity(
                                                    event.target.value
                                                )
                                        }
                                        placeholder="مثلاً تهران"
                                    />

                                </div>



                                {/* Postal Code */}

                                <div
                                    className={
                                        styles.field
                                    }
                                >

                                    <label>
                                        کد پستی
                                    </label>


                                    <input
                                        type="text"
                                        value={
                                            postalCode
                                        }
                                        onChange={
                                            (event) =>
                                                setPostalCode(
                                                    event.target.value
                                                )
                                        }
                                        placeholder="کد پستی ۱۰ رقمی"
                                        inputMode="numeric"
                                    />

                                </div>



                                {/* Address */}

                                <div
                                    className={
                                        `${styles.field} ${styles.fullField}`
                                    }
                                >

                                    <label>
                                        آدرس کامل
                                    </label>


                                    <textarea
                                        value={
                                            address
                                        }
                                        onChange={
                                            (event) =>
                                                setAddress(
                                                    event.target.value
                                                )
                                        }
                                        placeholder="استان، شهر، خیابان، کوچه، پلاک و واحد..."
                                        rows={4}
                                    />

                                </div>

                            </div>



                            {
                                city.trim() && (

                                    <div
                                        className={
                                            styles.shippingMethod
                                        }
                                    >

                                        <div>

                                            <span>
                                                روش ارسال
                                            </span>


                                            <strong>
                                                {
                                                    shippingMethod
                                                }
                                            </strong>

                                        </div>


                                        <strong>
                                            {
                                                shippingCost
                                                    .toLocaleString()
                                            }

                                            {" "}تومان
                                        </strong>

                                    </div>

                                )
                            }

                        </section>

                    </div>



                    {/* =========================
                        Summary
                    ========================= */}

                    <aside
                        className={
                            styles.summary
                        }
                    >

                        <h2
                            className={
                                styles.summaryTitle
                            }
                        >
                            خلاصه سفارش
                        </h2>



                        <div
                            className={
                                styles.summaryRow
                            }
                        >

                            <span>
                                تعداد کالا
                            </span>


                            <strong>
                                {totalQuantity}
                            </strong>

                        </div>



                        <div
                            className={
                                styles.summaryRow
                            }
                        >

                            <span>
                                قیمت محصولات
                            </span>


                            <strong>
                                {
                                    totalOriginalPrice
                                        .toLocaleString()
                                }

                                {" "}تومان
                            </strong>

                        </div>



                        <div
                            className={
                                styles.summaryRow
                            }
                        >

                            <span>
                                جمع تخفیفات
                            </span>


                            <strong
                                className={
                                    styles.discountValue
                                }
                            >

                                {
                                    productDiscount > 0
                                        ? "-"
                                        : ""
                                }

                                {
                                    productDiscount
                                        .toLocaleString()
                                }

                                {" "}تومان

                            </strong>

                        </div>



                        <div
                            className={
                                styles.divider
                            }
                        />



                        {/* Coupon */}

                        <div
                            className={
                                styles.coupon
                            }
                        >

                            <span
                                className={
                                    styles.couponTitle
                                }
                            >
                                کد تخفیف دارید؟
                            </span>


                            <div
                                className={
                                    styles.couponBox
                                }
                            >

                                <input
                                    type="text"
                                    value={
                                        couponCode
                                    }
                                    onChange={
                                        (event) =>
                                            setCouponCode(
                                                event.target.value
                                            )
                                    }
                                    placeholder="کد تخفیف"
                                />


                                <button
                                    type="button"
                                >
                                    اعمال
                                </button>

                            </div>

                        </div>



                        {
                            couponDiscount > 0 && (

                                <div
                                    className={
                                        styles.summaryRow
                                    }
                                >

                                    <span>
                                        تخفیف کد
                                    </span>


                                    <strong
                                        className={
                                            styles.discountValue
                                        }
                                    >
                                        -
                                        {
                                            couponDiscount
                                                .toLocaleString()
                                        }

                                        {" "}تومان
                                    </strong>

                                </div>

                            )
                        }



                        {/* Shipping */}

                        <div
                            className={
                                styles.summaryRow
                            }
                        >

                            <span>
                                هزینه ارسال
                            </span>


                            <strong
                                className={
                                    shippingCost > 0
                                        ? styles.shippingPrice
                                        : ""
                                }
                            >

                                {
                                    shippingCost > 0
                                        ? shippingCost.toLocaleString()
                                        : "انتخاب آدرس"
                                }

                                {
                                    shippingCost > 0 &&
                                    " تومان"
                                }

                            </strong>

                        </div>



                        {
                            shippingMethod && (

                                <div
                                    className={
                                        styles.deliveryInfo
                                    }
                                >
                                    ارسال با
                                    {" "}
                                    <strong>
                                        {
                                            shippingMethod
                                        }
                                    </strong>
                                </div>

                            )
                        }



                        {/* Savings */}

                        <div
                            className={
                                styles.savings
                            }
                        >

                            <div>

                                <span>
                                    سود شما از این خرید
                                </span>


                                <strong>
                                    {
                                        userSavings
                                            .toLocaleString()
                                    }

                                    {" "}تومان
                                </strong>

                            </div>


                            <span
                                className={
                                    styles.savingsIcon
                                }
                            >
                                ✓
                            </span>

                        </div>



                        <div
                            className={
                                styles.divider
                            }
                        />



                        {/* Total */}

                        <div
                            className={
                                styles.total
                            }
                        >

                            <span>
                                مبلغ قابل پرداخت
                            </span>


                            <strong>
                                {
                                    finalPrice
                                        .toLocaleString()
                                }

                                {" "}تومان
                            </strong>

                        </div>



                        <button
                            type="button"
                            className={
                                styles.checkout
                            }
                        >
                            ادامه فرایند خرید
                        </button>

                    </aside>

                </div>

            </div>

            {
                isMapOpen && (

                    <div
                        className={
                            styles.mapOverlay
                        }
                    >

                        <div
                            className={
                                styles.mapModal
                            }
                        >

                            {/* Header */}

                            <div
                                className={
                                    styles.mapHeader
                                }
                            >

                                <div>

                                    <h2>
                                        انتخاب آدرس روی نقشه
                                    </h2>


                                    <p>
                                        روی محل موردنظر خود روی نقشه کلیک کنید.
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    className={
                                        styles.closeMap
                                    }
                                    onClick={() =>
                                        setIsMapOpen(false)
                                    }
                                >
                                    ×
                                </button>

                            </div>



                            {/* Map */}

                            <div
                                className={
                                    styles.mapWrapper
                                }
                            >

                                <MapPicker

                                    latitude={
                                        mapLatitude
                                    }

                                    longitude={
                                        mapLongitude
                                    }

                                    onSelect={
                                        handleMapLocation
                                    }

                                />



                                {
                                    isFindingAddress && (

                                        <div
                                            className={
                                                styles.mapLoading
                                            }
                                        >
                                            در حال دریافت آدرس...
                                        </div>

                                    )
                                }

                            </div>



                            <div
                                className={
                                    styles.mapFooter
                                }
                            >

                                <span>
                                    برای انتخاب آدرس، روی نقطه موردنظر کلیک کنید.
                                </span>


                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsMapOpen(false)
                                    }
                                >
                                    بستن
                                </button>

                            </div>

                        </div>

                    </div>

                )
            }


        </main>

    );

}

