"use client";

import {
    Children,
    ReactNode,
    useCallback,
} from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

import styles from "./Carousel.module.scss";

type Props = {
    children: ReactNode;

    autoplay?: boolean;
    loop?: boolean;
    showArrows?: boolean;
};

export default function Carousel({

    children,

    autoplay = true,

    loop = true,

    showArrows = true,

}: Props) {

    const autoplayPlugin = Autoplay({

        delay: 3500,

        stopOnMouseEnter: true,

    });

    const [emblaRef, emblaApi] = useEmblaCarousel(

        {

            align: "start",

            loop,

            dragFree: false,

        },

        [

            WheelGesturesPlugin(),

            ...(autoplay ? [autoplayPlugin] : []),

        ]

    );

    const scrollPrev = useCallback(() => {

        emblaApi?.scrollPrev();

    }, [emblaApi]);

    const scrollNext = useCallback(() => {

        emblaApi?.scrollNext();

    }, [emblaApi]);

    return (

        <section className={styles.embla}>

            {

                showArrows &&

                <button

                    className={styles.prev}

                    onClick={scrollPrev}

                >

                    ❯

                </button>

            }

            <div

                className={styles.viewport}

                ref={emblaRef}

            >

                <div className={styles.container}>

                    {

                        Children.toArray(children).map((child, index) => (

                            <div

                                key={index}

                                className={styles.slide}

                            >

                                {child}

                            </div>

                        ))

                    }

                </div>

            </div>

            {

                showArrows &&

                <button

                    className={styles.next}

                    onClick={scrollNext}

                >

                    ❮

                </button>

            }

        </section>

    );

}