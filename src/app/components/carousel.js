'use client'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import './../../app/globals.css'
import Link from 'next/link'
import Image from 'next/image'

import img1 from  './../../../public/images/carousel_images/carousel_image_1.avif'
import img2 from './../../../public/images/carousel_images/c_i_2.jpg'
import img3 from './../../../public/images/carousel_images/i_c_3jpg.jpg'
import img4 from './../../../public/images/carousel_images/c_i_4.avif'

const carouselData = [
    {
        id: 3,
        title: 'High Quality Manufacturing Processes',
        discription: 'From know how to designing, production, testing and the final delivery with utmost priority given to the quality standards.',
        imageUrl: img3,
    },
    {
        id: 1,
        title: 'Global Sales and Services',
        discription: 'Our aim at Sealmatic is to ensure utmost satisfaction of our customers where we ensure international quality and close proximity.',
        imageUrl: img1
    },
    {
        id: 2,
        title: 'Long Standing Experience',
        discription: 'Our collective knowledge of many years in the sealing industry has helped us create programs that can solve any sealing questions at the click of a button.',
        imageUrl: img2
    },
    {
        id: 4,
        title: 'Our Legacy',
        discription: 'At Sealmatic we care. We ensure that we make each of our production processes safe for our employees and our environment.',
        imageUrl: img4
    }
]



export default function CarouselSlider() {

    return (
        <section id="carousel" className="w-full">
            <Carousel
             className="w-full relative"
                autoplay={true}
                autoplayDelay={6000}
                transition={{ transition: { type: "spring", duration: 10.5 } }}
                loop={true}
                draggable={true}
                style={{width: '100%'}}
            >
                {

                    carouselData.map((c) =>

                        <div key={c.id} className="relative h-[1000px] max-h-96 w-full overflow-hidden">
                            <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                objectFit="cover"
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
        </section>
    );
}