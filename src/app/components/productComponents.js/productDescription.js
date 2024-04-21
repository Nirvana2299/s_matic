export default function ProductDescription({ product }) {
    const productDiscriptionList = product.productsDescription;
    return <div className="flex flex-col p-4 md:p-2 lg:p-0">
        <div className="mb-4">
            <p className="mb-4 text-2xl font-bold">{product.name}</p>
            <p className="text-xl font-bold">Product discription</p>
        </div>
        <div className="relative border-b-2 border-black w-[60px]">
            <div className="absolute right-0 top-[-3px] w-2 h-2 bg-blue-400"></div>
        </div>
        <div className="w-full lg:w-[300px]">
            <ul className="relative list-none">
                {productDiscriptionList.map((el) => {
                    return <li before='▶' className="my-4 before:pr-1 before:left-0 before:content-[attr(before)]">{el}</li>
                })}
            </ul>
        </div>
    </div>



}