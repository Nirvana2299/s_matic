'use client'
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { useKeenSlider } from "keen-slider/react"
import products from '@/utils/productsData';
import "keen-slider/keen-slider.min.css"
import '@/app/globals.css'


export default function ProductCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const animation = { duration: 15000, easing: (t) => t }
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        loop: true,

        slides: {
            origin: 'center',
            perView: 1,
            spacing: 10,
            size: 0.2
        },
        breakpoints: {
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 52,
                    size: 0.10,
                },
            },
            '(min-width: 1035px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 58,
                    size: 0.10,
                },
            },
            '(min-width: 1100px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 95,
                    // size: 0.10,
                },
            },
            '(min-width: 1200px)': {
                slides: {
                    origin: 'auto',
                    perView: 4,
                    spacing: 30,
                    size: 0.10,
                },
            },
            '(min-width: 1280px)': {
                slides: {
                    origin: 'auto',
                    perView: 4,
                    spacing: 54,
                    size: 0.10,
                },
            },
            '(min-width: 1400px)': {
                slides: {
                    origin: 'auto',
                    perView: 4,
                    spacing: 64,
                    size: 0.10,
                },
            },
            '(min-width: 1460px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 42,
                    size: 0.10,
                },
            },
            '(min-width: 1700px)': {
                slides: {
                    origin: 'auto',
                    perView: 4,
                    spacing: 32 ,
                    size: 0.10,
                },
            },
        },
        renderMode: "performance",

        // slideChanged() {
        //     console.log('slide changed')
        // },
        // created(s) {
        //     s.moveToIdx(1, true, animation)
        // },
        // updated(s) {
        //     s.moveToIdx(s.track.details.abs + 5, true, animation)
        // },
        // animationEnded(s) {
        //     s.moveToIdx(s.track.details.abs + 5, true, animation)
        // },


    }, []);

    return (
        <section className="bg-[#023169] w-full flex-col items-center justify-center py-10">
            <div className=" text-center flex flex-col items-center">
                <h2 className="text-xl text-white font-bold tracking-tight text-gray-900 sm:text-3xl">
                    FEATURED PRODUCTS
                </h2>
                <div className='mt-2 h-[4px] w-10 bg-[#01b9e6] rounded-xl'>

                </div>
            </div>

            <div className="w-auto mt-8 mx-4 md:mx-44 lg:mx-40 xl:mx-40 2xl:mx-52 flex justify-between items-center">
                <div ref={sliderRef} id="keen-slider" className="keen-slider">

                    {
                        products.map((product) => (
                            <Link href={{ pathname: `/products/${product.name}` }} key={product.id}>
                                <div className="keen-slider__slide bg-white rounded-xl shadow-md">
                                <div className='flex flex-col items-center text-center bg-white rounded-xl p-4'>
                                    <Image src={product.image} width={250} height={250} alt={product.imageAltText} />

                                    <div className="overflow-hidden text-[#023169]">
                                        <p className="text-md font-bold sm:text-xl">{product.name}</p>

                                        <p className="leading-tight">
                                            {product.shortInfo}</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))
                    }






                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className="mt-8 mx-20 flex gap-4 lg:mt-12  flex justify-around items-center">
                    <button
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                        aria-label="Previous slide"
                        id="keen-slider-previous"
                        className="rounded-full border bg-white p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="black"
                            className="size-5 rtl:rotate-180"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        // disabled={
                        //     currentSlide ===
                        //     instanceRef.current.track.details.slides.length - 1
                        // }
                        aria-label="Next slide"
                        id="keen-slider-next"
                        className="rounded-full border bg-white p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                        <svg
                            className="size-5 rtl:rotate-180"
                            fill="none"
                            stroke="black"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    )
}
