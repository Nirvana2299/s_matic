import Link from 'next/link'
import aboutData from '@/utils/aboutData'
export default function ImpPoints() {
    return <div className="md:text-center text-white md:text-start md:flex md:px-22 lg:px-32 xl:px-56 md:py-10 bg-white md:gap-4">
        <div className="text-center relative flex flex-col w-full md:w-80 p-8 gap-4 bg-blue-400 rounded-sm drop-shadow">
            <h2 className="text-lg">WHY CHOOSE US</h2>
            <p>Adverse environmental conditions, high rotational speed and pressure levels place demanding requirements on sealing technology employed in the process industry.</p>
            <p>Sealmatic has proven itself with its heavy-duty mechanical seals with innovative and tailor made sealing solutions guaranteeing longer service.</p>
            <div className='flex justify-center'>
                <Link className='absolute px-8 py-2 bg-blue-100 text-black bottom-[-18px] rounded-md drop-shadow-md' href={'about'}>
                    Read More
                </Link>

            </div>
        </div>
        <ul className="w-full md:w-4/5 grid md:grid-cols-2 text-black py-4 md:py-0">
            {
                aboutData.map((a) => {
                    return <li key={a.id} className='py-8 md:py-10 px-10'>
                        <h3 className='font-bold text-lg'>{a.title}</h3>
                        <p className='text-[#78716c] pb-2'>{a.summary}</p>
                        <Link className='px-8 py-2 bg-blue-100 text-black rounded-md drop-shadow-md' href={'about'}>
                            Read More
                        </Link>
                    </li>
                })
            }
        </ul>
    </div>
}