"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import ProductCard from "@/shared/components/ProductCard";
import { Product } from "@/shared/types/product";

import styles from "./ProductCarousel.module.scss";

type Props = {
    products: Product[];
};

function ProductCarousel({ products }: Props) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        direction: "rtl",
        align: "start",
        dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    useEffect(() => {

        if (!emblaApi) return;

        const onSelect = () => {

            setSelectedIndex(emblaApi.selectedScrollSnap());

            setCanPrev(emblaApi.canScrollPrev());

            setCanNext(emblaApi.canScrollNext());

        };

        setScrollSnaps(emblaApi.scrollSnapList());

        onSelect();

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

    }, [emblaApi]);

    return (

        <div className={styles.wrapper}>

            <button
                className={styles.prev}
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
            >
                <LuChevronRight />
            </button>

            <div
                className={styles.embla}
                ref={emblaRef}
            >

                <div className={styles.container}>

                    {products.map(product => (

                        <div
                            key={product.id}
                            className={styles.slide}
                        >

                            <ProductCard {...product} />

                        </div>

                    ))}

                </div>

            </div>

            <button
                className={styles.next}
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
            >
                <LuChevronLeft />
            </button>

            <div className={styles.dots}>

                {scrollSnaps.map((_, index) => (

                    <button

                        key={index}

                        onClick={() => emblaApi?.scrollTo(index)}

                        className={`${styles.dot} ${
                            index === selectedIndex
                                ? styles.active
                                : ""
                        }`}

                    />

                ))}

            </div>

        </div>

    );

}

export default ProductCarousel;