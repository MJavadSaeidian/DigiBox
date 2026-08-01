"use client";

import { Children, ReactNode, useCallback, useEffect, useRef, useState, } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styles from "./Carousel.module.scss";
import Autoplay from "embla-carousel-autoplay";


type Props = {
    children: ReactNode;
};


export default function Carousel({
    children
}: Props) {

    const autoplay = useRef(

        Autoplay({

            delay: 3500,

            stopOnMouseEnter: false,

            stopOnInteraction: true,

        })

    ).current;


    const [emblaRef, emblaApi] = useEmblaCarousel(

        {

            align: "start",

            loop: true,

            direction: "rtl",

            skipSnaps: false,

        },

        [
            autoplay
        ]

    );

    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    useEffect(() => {

        if (!emblaApi) return;


        const update = () => {

            setCanPrev(
                emblaApi.canScrollPrev()
            );

            setCanNext(
                emblaApi.canScrollNext()
            );

        };


        update();


        emblaApi.on("select", update);

        emblaApi.on("reInit", update);


        return () => {

            emblaApi.off("select", update);

            emblaApi.off("reInit", update);

        };


    }, [emblaApi]);



    const scrollPrev = useCallback(() => {

        emblaApi?.scrollPrev();

    }, [emblaApi]);



    const scrollNext = useCallback(() => {

        emblaApi?.scrollNext();

    }, [emblaApi]);



    return (

        <div className={styles.carousel}>


            <button
                className={`${styles.arrow} ${styles.right}`}
                onClick={scrollPrev}
                disabled={!canPrev}
            >
                <HiChevronRight />

            </button>



            <div

                className={styles.viewport}

                ref={emblaRef}

            >

                <div className={styles.container}>


                    {
                        Children.map(
                            children,
                            (child) => (

                                <div
                                    className={styles.slide}
                                >

                                    {child}

                                </div>

                            )
                        )
                    }


                </div>


            </div>



            <button
                className={`${styles.arrow} ${styles.left}`}
                onClick={scrollNext}
                disabled={!canNext}
            >

                <HiChevronLeft />

            </button>



        </div>

    );

}