import products from '@/utils/productsData'

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
        <div className="flex justify-center items-center h-full w-full">
            <h1>Product Details</h1>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
        </div>
    );
}