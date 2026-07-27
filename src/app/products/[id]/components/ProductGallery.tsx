"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./ProductGallery.module.scss";

type ProductGalleryProps = {
    images: string[];
};

function ProductGallery({
    images,
}: ProductGalleryProps) {

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (

        <div className={styles.gallery}>

            <div className={styles.preview}>

                <Image
                    src={selectedImage}
                    alt=""
                    width={500}
                    height={500}
                />

            </div>

            <div className={styles.thumbnails}>

                {images.map((image, index) => (

                    <button
                        key={index}
                        type="button"
                        className={`${styles.thumbnail} ${selectedImage === image ? styles.active : ""
                            }`}
                        onClick={() => setSelectedImage(image)}
                    >

                        <Image
                            src={image}
                            alt=""
                            width={90}
                            height={90}
                        />

                    </button>

                ))}

            </div>

        </div>

    );

}

export default ProductGallery;