import Hero from "../components/hero";
import products from "@/utils/productsData";
import Image from 'next/image';

export default function Products() {
    return (
        <section className="md:mx-10 bg-gray-100">
            <Hero name='Products' />
            <section className="flex justify-center items-center mx-10 py-10">
                <div className="grid md:grid-cols-4 gap-10" >
                    {
                        products.map((product) => {
                            return (
                                <div className="flex flex-col text-[#023169] bg-white p-10 hover:scale-[1.1] rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl justify-between text-center gap-4 items-center" key={product.id}>
                                    <Image src={product.image} width={250} height={400} alt={product.imageAltText} />
                                    <div>
                                        <p className="text-md font-bold sm:text-xl">{product.name}</p>
                                        <p className="leading-tight">{product.shortInfo}</p>
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