import Navbar from '@/app/components/navbar';
import products from '@/utils/productsData'
import Image from 'next/image';
import "../../app/globals.css";
import ProductAccordian from '@/app/components/productComponents.js/productAccordian';
import Footer from '@/app/components/footer';

export async function getStaticPaths() {
    const paths = products.map((product) => ({
        params: { name: product.name.toString() }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const product = products.find((p) => p.name.toString() === params.name);

    return { props: { product } };
}

export default function Page({ product }) {
    return (
        <>
            <Navbar />
            <main className="h-full w-full">
                <section before='' className='relative min-h-[450px] w-full before:content-[attr(before)] before:bg-bottom before:bg-factory-image before:absolute before:inset-x-0 before:inset-y-0 before:brightness-50 text-white bg-bottom flex justify-center items-center'>
                    <div className='relative flex items-center'>
                        <div className='mb-2 mx-2'>
                            <p className='text-3xl lg:text-4xl mb-2'>Engineered Seals For <br></br> Demanding Applications</p>
                            <p className='text-3xl lg:text-4xl'>{product.name}</p>
                        </div>
                        <Image className='hidden md:block' alt={product.imageAltText} src={product.image} width={250} height={250} />

                    </div>
                </section>
                <section className='flex'>
                    <ProductAccordian />
                </section>
                <h1>Product Details</h1>
                <p>ID: {product.id}</p>

            </main>
            <Footer />
        </>
    );
}