export default function Hero(props) {
    return (
        <section before='' className='relative min-h-[450px] w-full before:content-[attr(before)] before:bg-bottom before:bg-factory-image before:absolute before:inset-x-0 before:inset-y-0 before:brightness-50 text-white bg-bottom flex justify-center lg:justify-start items-center'>
            <div className='relative flex items-center lg:w-[1200px] mx-auto'>
                <div className='mb-2 xl:mx-2 md:mx-10'>
                    <p className="text-3xl lg:text-4xl font-bold">{props.name}</p>
                </div>
            </div>
        </section>
    )
}