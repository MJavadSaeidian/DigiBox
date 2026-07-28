"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/shared/components/ImageUploader";
import styles from "./ProductForm.module.scss";
import { toast } from "react-toastify";

type ProductFormProps = {
    productId?: string;
};

export default function ProductForm({
    productId,
}: ProductFormProps) {


    const [images, setImages] =
        useState<string[]>([]);



    const [form, setForm] =
        useState({

            title: "",
            slug: "",
            brand: "",
            category: "",
            description: "",
            price: "",
            previousPrice: "",
            stock: "",
            featured: false,
            featuredOrder: 0,

        });


    const router = useRouter();

    const [specifications, setSpecifications] =
        useState([
            {
                label: "",
                value: ""
            }
        ]);

    const [loading, setLoading] =
        useState(false);

    const isEditMode = Boolean(productId);

    useEffect(() => {

        if (!productId) return;

        async function loadProduct() {

            try {

                const res =
                    await fetch(
                        `/api/admin/products/${productId}`
                    );

                const product =
                    await res.json();

                setForm({

                    title: product.title,
                    slug: product.slug,
                    brand: product.brand,
                    category: product.category,
                    price: product.price,
                    previousPrice: product.previousPrice,
                    stock: product.stock,
                    description: product.description,
                    featured: product.featured,
                    featuredOrder: product.featuredOrder ?? 0,

                });

                setImages(product.images ?? []);

                setSpecifications(
                    product.specifications ?? []
                );

            }

            catch (error) {

                console.log(error);

                toast.error("خطا در دریافت محصول");

            }

        }

        loadProduct();

    }, [productId]);

    const discount =

        form.previousPrice &&
            form.price

            ?

            Math.round(

                (

                    Number(form.previousPrice)
                    -
                    Number(form.price)

                )

                /

                Number(form.previousPrice)

                *

                100

            )

            :

            0;




    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement
        >
    ) => {

        const {
            name,
            value,
            type
        } = e.target;

        setForm({

            ...form,

            [name]:

                type === "checkbox"

                    ? (e.target as HTMLInputElement).checked

                    : value,

        });

    };





    function addSpecification() {

        setSpecifications([

            ...specifications,

            {
                label: "",
                value: ""
            }

        ]);

    }


    function removeSpecification(index: number) {

        const updated =
            specifications.filter(
                (_, i) => i !== index
            );


        setSpecifications(updated);

    }




    function changeSpecification(
        index: number,
        field: "label" | "value",
        value: string
    ) {


        const updated =
            [...specifications];


        updated[index][field] =
            value;


        setSpecifications(updated);

    }


    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();
        try {

            setLoading(true);

            const endpoint = isEditMode
                ? `/api/admin/products/${productId}`
                : "/api/admin/products";

            const method = isEditMode
                ? "PUT"
                : "POST";

            const res = await fetch(
                endpoint,
                {
                    method,

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({

                        ...form,

                        price: Number(form.price),

                        previousPrice: Number(form.previousPrice),

                        stock: Number(form.stock),

                        discount,

                        images,

                        specifications,

                    }),
                }
            );

            const data = await res.json();

            if (!res.ok) {

                toast.error(data.message);
                return;

            }

            toast.success(

                isEditMode

                    ? "محصول با موفقیت ویرایش شد"

                    : "محصول با موفقیت اضافه شد"

            );

            router.push("/admin/products");

            router.refresh();

        }

        catch (error) {

            console.log(error);

            toast.error("خطایی رخ داد");

        }

        finally {

            setLoading(false);

        }

    }


    return (

        <section className={styles.container}>


            <form
                className={styles.card}
                onSubmit={handleSubmit}
            >


                <h1>

                    {
                        isEditMode

                            ? "ویرایش محصول"

                            : "افزودن محصول جدید"
                    }

                </h1>



                <div className={styles.grid}>


                    <div>

                        <label className={styles.label}>
                            نام محصول
                        </label>

                        <input

                            className={styles.input}

                            name="title"

                            value={form.title}

                            onChange={handleChange}

                            placeholder="مثلا iPhone 16 Pro Max"

                        />

                    </div>




                    <div>

                        <label className={styles.label}>
                            Slug
                        </label>

                        <input

                            className={styles.input}

                            name="slug"

                            value={form.slug}

                            onChange={handleChange}

                            placeholder="iphone-16-pro-max"

                        />

                    </div>




                    <div>

                        <label className={styles.label}>
                            برند
                        </label>

                        <input

                            className={styles.input}

                            name="brand"

                            value={form.brand}

                            onChange={handleChange}

                            placeholder="Apple"

                        />

                    </div>




                    <div>

                        <label className={styles.label}>
                            دسته بندی
                        </label>

                        <input

                            className={styles.input}

                            name="category"

                            value={form.category}

                            onChange={handleChange}

                            placeholder="موبایل"

                        />

                    </div>




                    <div>

                        <label className={styles.label}>
                            قیمت فعلی
                        </label>

                        <input

                            className={styles.input}

                            type="number"

                            name="price"

                            value={form.price}

                            onChange={handleChange}

                        />

                    </div>




                    <div>

                        <label className={styles.label}>
                            قیمت قبل
                        </label>

                        <input

                            className={styles.input}

                            type="number"

                            name="previousPrice"

                            value={form.previousPrice}

                            onChange={handleChange}

                        />

                    </div>




                    <div>

                        <label className={styles.label}>
                            تخفیف
                        </label>

                        <input

                            className={styles.input}

                            value={`${discount}%`}

                            disabled

                        />

                    </div>




                    <div>

                        <label className={styles.label}>
                            موجودی
                        </label>

                        <input

                            className={styles.input}

                            type="number"

                            name="stock"

                            value={form.stock}

                            onChange={handleChange}

                        />

                    </div>

                    <div>

                        <label className={styles.label}>
                            نمایش در محصولات ویژه
                        </label>

                        <label className={styles.checkbox}>

                            <input
                                type="checkbox"
                                name="featured"
                                checked={form.featured}
                                onChange={handleChange}
                            />

                            <span>
                                این محصول در صفحه اصلی نمایش داده شود
                            </span>

                        </label>

                    </div>



                    <div>

                        <label className={styles.label}>
                            ترتیب نمایش
                        </label>

                        <input

                            className={styles.input}

                            type="number"

                            name="featuredOrder"

                            value={form.featuredOrder}

                            onChange={handleChange}

                            min={0}

                        />

                    </div>


                </div>





                <div className={styles.full}>


                    <label className={styles.label}>
                        توضیحات
                    </label>


                    <textarea

                        className={styles.input}

                        name="description"

                        value={form.description}

                        onChange={handleChange}

                    />


                </div>






                <div className={styles.full}>


                    <h3>
                        تصاویر محصول
                    </h3>


                    <ImageUploader

                        onChange={setImages}

                    />
                    <div className={styles.imagePreview}>

                        {

                            images.map((image, index) => (

                                <div
                                    key={index}
                                    className={styles.imageCard}
                                >

                                    <img
                                        src={image}
                                        alt=""
                                    />

                                    <button

                                        type="button"

                                        onClick={() =>
                                            setImages(

                                                images.filter(
                                                    (_, i) => i !== index
                                                )

                                            )
                                        }

                                    >

                                        حذف

                                    </button>

                                </div>

                            ))

                        }

                    </div>

                </div>







                <div className={styles.full}>


                    <h3>
                        مشخصات فنی
                    </h3>



                    {
                        specifications.map(
                            (item, index) => (

                                <div

                                    key={index}

                                    className={styles.specRow}

                                >

                                    <input

                                        className={styles.input}

                                        placeholder="عنوان"

                                        value={item.label}

                                        onChange={(e) =>
                                            changeSpecification(
                                                index,
                                                "label",
                                                e.target.value
                                            )
                                        }

                                    />



                                    <input

                                        className={styles.input}

                                        placeholder="مقدار"

                                        value={item.value}

                                        onChange={(e) =>
                                            changeSpecification(
                                                index,
                                                "value",
                                                e.target.value
                                            )
                                        }

                                    />



                                    <button

                                        type="button"

                                        className={styles.removeSpec}

                                        onClick={() =>
                                            removeSpecification(index)
                                        }

                                    >

                                        حذف

                                    </button>


                                </div>

                            )
                        )
                    }



                    <button

                        type="button"

                        className={styles.addSpec}

                        onClick={addSpecification}

                    >

                        + افزودن مشخصه

                    </button>


                </div>






                <button

                    type="submit"

                    className={styles.submit}

                    disabled={loading}

                >

                    {
                        loading

                            ? "در حال ذخیره..."

                            : isEditMode

                                ? "ذخیره تغییرات"

                                : "ذخیره محصول"
                    }

                </button>


            </form>


        </section>

    );

}