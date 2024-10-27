import { Button } from "@mui/material";
import { WhatsApp } from '@mui/icons-material'

export default function ProductDescription({ product }) {
    const productDiscriptionList = product.productsDescription;
    return <div className="flex flex-col p-4 md:p-2 lg:p-0 gap-2 w-full lg:w-[300px] xl:w-[500px]">
        {/* <div className="mb-4"> */}
        <p className="mb-4 text-2xl font-bold text-[#023169]">{product.name}</p>
        {/* </div> */}
        <p className="text-xl font-bold text-gray-800">Model</p>
        <p>{product.model}</p>
        <p className="text-xl font-bold text-gray-800">Product discription</p>
        <div className="relative border-b-2 border-black w-[60px]">
            <div className="absolute right-0 top-[-3px] w-2 h-2 bg-blue-400"></div>
        </div>
        {/* <div className="w-full lg:w-[300px]">
            <ul className="relative list-none">
                {productDiscriptionList.map((el) => {
                    return <li before='▶' className="my-4 before:pr-1 before:left-0 before:content-[attr(before)]">{el}</li>
                })}
            </ul>
        </div> */}
        <div>
            <p>{product.description}</p>
        </div>
        <div className="flex flex-col gap-4">
            <Button className=" h-10" variant="contained">
                <div className="flex items-center justify-center h-full">
                    <p className="text-center self-center">{`Enquiry `}</p>
                    <WhatsApp />
                </div>
            </Button>
            <Button variant="contained">Download catalogue</Button>
        </div>
    </div>
}