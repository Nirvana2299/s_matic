import Hero from "../components/hero";
import products from "@/utils/productsData";
import Image from 'next/image';
import Link from "next/link";
import { WhatsApp } from '@mui/icons-material'

export default function Products() {
    return (
        <section className="md:mx-10 bg-gray-100 shadow-md">
            <Hero name='Products' />
            <section className="flex justify-center items-center mx-10 py-10 rounded-md">
                <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10" >
                    {
                        products.map((product) => {
                            return (
                                <div className="flex flex-col text-[#023169] bg-white p-10 hover:scale-[1.1] rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl justify-between text-center gap-4 items-center" key={product.id}>
                                    <Image src={product.image} width={250} height={400} alt={product.imageAltText} />
                                    <div className="flex flex-col gap-2 items-center ">
                                        <div>
                                            <p className="text-md font-bold sm:text-xl">{product.name}</p>
                                            <p className="leading-tight">{product.shortInfo}</p>
                                        </div>
                                        <a
                                            href={`https://wa.me/+91123456789?text=I'm%20interested%20in%20your%20product%20for%20sale`}
                                        >
                                            <div className="border border-current p-2 rounded-md flex items-center gap-2 hover:text-[#25D366]">
                                                <WhatsApp />
                                                <p>Chat on WhatsApp</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </section>
    )
}