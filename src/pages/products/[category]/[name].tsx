
import Image from 'next/image';
import Head from 'next/head';
import "../../../app/globals.css";
import { prod } from './../../../utils/productsData';
import Navbar from '../../../app/components/navbar';
import Footer from '../../../app/components/footer';
import ProductDescription from '../../../app/components/productComponents/productDescription'
import ProductAccordian from '../../../app/components/productComponents/productAccordian'


export async function getStaticPaths() {
    const paths: {
        params: {
            category: string;
            name: string;
        }
    }[] = [];

    prod.forEach(category => {
        category.products.forEach(product => {
            return paths.push({
                params: {
                    category: category.categoryName.toString().toLowerCase().replace(/\s+/g, '-'),
                    name: product.name.toString()
                }
            });
        });
    });

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: {
    params: {
        category: string;
        name: string;
    }
}) {
    const { category, name } = params;

    const categoryData = prod.find(cat =>
        cat.categoryName.toLowerCase().replace(/\s+/g, '-') === category
    );

    if (!categoryData) {
        return { notFound: true };
    }

    const product = categoryData.products.find(p => p.name.toString() === name);
    if (!product) {
        return { notFound: true };
    }

    return { props: { product, category: categoryData.categoryName } };
}

type PageProps = {
    product: {
        id: number;
        name: string;
        shortInfo: string;
        image: string;
        imageAltText: string;
        productsDescription: string[];
        description: string;
        model: string;
    }
    category: string
}

export default function Page({ product, category }: PageProps) {
    return (
        <>
            <Navbar />
            <Head>
                <title>{`${product.name} - ${category} - Leak Proof Seals`}</title>
                <meta name="description" content={product.description} />
            </Head>
            <main className="h-full w-full overflow-hidden">
                <section className='relative min-h-[450px] w-full before:content-[attr(before)] before:bg-bottom before:bg-factory-image before:absolute before:inset-x-0 before:inset-y-0 before:brightness-50 text-white bg-bottom flex justify-center items-center'>
                    <div className='relative flex items-center'>
                        <div className='mb-2 mx-2'>
                            <p className='text-3xl lg:text-4xl mb-2'>Engineered Seals For <br></br> Demanding Applications</p>
                            <p className='text-3xl lg:text-4xl'>{product.name}</p>
                        </div>
                        <Image className='hidden md:block' alt={product.imageAltText} src={product.image} width={250} height={250} />
                    </div>
                </section>
                <section className='flex flex-col md:flex-row md:justify-between w-full grow lg:w-[1000px] xl:w-[1200px] mx-auto my-4 md:my-8 lg:my-10'>
                    <Image className='p-4 md:p-2 lg:p-0' src={product.image} width={400}
                        height={300} alt={''}                    // sizes="100vw"
                    // style={{ width: '90%', height: '90%' }} 

                    />
                    <ProductDescription product={product} />
                    <ProductAccordian productProp={{ prod: prod, category: category, product: product }} />
                </section>
            </main>
            <Footer />
        </>
    );
}
