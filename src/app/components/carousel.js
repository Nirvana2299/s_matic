'use client'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import './../../app/globals.css'
import Link from 'next/link'
import { useRef } from 'react';
import { useEffect } from "react";

const carouselData = [
    {
        id: 1,
        title: 'Global Sales and Services',
        discription: 'Our aim at Sealmatic is to ensure utmost satisfaction of our customers where we ensure international quality and close proximity.',
        imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
    },
    {
        id: 2,
        title: 'Long Standing Experience',
        discription: 'Our collective knowledge of many years in the sealing industry has helped us create programs that can solve any sealing questions at the click of a button.',
        imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
    },
    {
        id: 3,
        title: 'High Quality Manufacturing Processes',
        discription: 'From know how to designing, production, testing and the final delivery with utmost priority given to the quality standards.',
        imageUrl: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
    },
    {
        id: 4,
        title: 'Our Legacy',
        discription: 'At Sealmatic we care. We ensure that we make each of our production processes safe for our employees and our environment.',
        imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
    }
]



export default function CarouselSlider() {

    return (
        <Carousel
        autoplay = {true}
           autoplayDelay={6000}
            transition={{ transition: { type: "spring", duration: 10.5 } }}
            loop={true}
            className="">
            {

                carouselData.map((c) =>

                    <div key={c.id} className="relative h-[1000px] max-h-96 w-full overflow-hidden">
                        <img
                            src={c.imageUrl}
                            alt={`image ${c.id}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 grid  w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-start md:w-2/4">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    {c.title}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-4 md:mb-12 opacity-80"
                                >
                                    {c.discription}
                                </Typography>
                                <div className="flex justify-start gap-1 md:gap-2">
                                    <Link href={'about'}>
                                        <Button size="lg" color="white">
                                            About Us
                                        </Button>
                                    </Link>
                                    {/* <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </Carousel>
    );
}