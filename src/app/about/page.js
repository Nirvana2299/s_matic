import Footer from "../components/footer";
import Navbar from "../components/navbar";
import aboutData from "@/utils/aboutData";

export default function Page() {
    console.log(aboutData);
    return <>
        <Navbar />
        <main className="h-full w-full text-start md:text-justify">
            <section before='' className='relative min-h-[450px] w-full before:content-[attr(before)] before:bg-bottom before:bg-factory-image before:absolute before:inset-x-0 before:inset-y-0 before:brightness-50 text-white bg-bottom flex justify-center lg:justify-start items-center'>
                <div className='relative flex items-center lg:w-[1200px] mx-auto'>
                    <div className='mb-2 xl:mx-2 md:mx-10'>
                        <p className="text-3xl lg:text-4xl font-bold">About Us</p>
                    </div>
                </div>
            </section>
            <section className="max-w-[1200px] xl:mx-auto mx-4 md:mx-10 my-10 text-xl">
                <h3 className="text-2xl font-bold mb-4">About the Company</h3>
                <p className="mb-2">Adverse environmental conditions, high rotational speed and pressure levels place demanding requirements on sealing technology employed in the process industry. Sealmatic has proven itself with its heavy-duty mechanical seals with innovative and tailor made sealing solutions guaranteeing longer service.</p>
                <p>Our legacy of 30 years has driven us constantly to grow with the challenging needs of superior sealing technology. Our engineering specialists at Sealmatic are experienced in application know how and trouble shooting. With the collective experience of many years we at Sealmatic work towards meeting global standards of operation.</p>
            </section>
            <section className="my-10 text-xl">
                {
                    aboutData.map((el, i) =>
                        <div key={el.id} className={`${i % 2 ? '' : 'bg-gray-200'} `}><div className="lg:max-w-[1200px] py-6 xl:mx-auto mx-4 md:mx-10"><h3 className="text-2xl font-bold mb-4">{el.title}</h3><p className="mb-2">{el.details}</p></div></div>

                    )
                }
            </section>
            <section className="bg-gray-200 py-10">
                <div className="max-w-[1200px] xl:mx-auto mx-4 md:mx-10 text-xl">
                    <h3 className="text-2xl font-bold mb-4">About Us</h3>
                    <p className="mb-2">Sealmatic designs and manufactures mechanical seals and associated products mainly for the oil & gas, chemical, pharmaceutical, pulp & paper, power, mining and many more industrial applications.</p>
                    <p className="mb-2">Today, it provides the most complete selection of engineered mechanical seals and sealing support systems. Sealmatic products are globally recognized as a trusted brand in the process industry.</p>
                    <p className="mb-2">Sealmatic can help relieve stress and reduce the life cycle costs associated with the most important aspects of plant operation. Dedicated to delivering the highest quality support, Sealmatic services and solutions integrates hydraulic, mechanical and materials engineering knowledge with creative solutions. It improves equipment reliability and system performance, reduces energy consumption and improves the safety and environmental impact of operations.</p>
                    <p className="mb-2">Sealmatic has a longstanding tradition of providing mechanical seals and sealing services that are trusted by the industry. Sealmatic mechanical seals represent a collection of trusted products that are supported by strong aftermarket services, providing users with both safety and environmental benefits.</p>
                    <p className="mb-2">Sealmatic mechanical seals are used on a variety of rotating equipment, including pumps, compressors, mixers, steam turbines and other speciality equipment, primarily in the oil and gas, pharmaceutical, chemical processing, mineral and ore processing and general industries.</p>
                    <p className="mb-2">Sealmatic products guarantee highest quality standards & application know-how with full service to its customers.</p>
                </div>
            </section>
            <section className=" py-10">
                <div className="max-w-[1200px] xl:mx-auto mx-4 md:mx-10 text-xl">
                    <h3 className="text-2xl font-bold mb-4">Disclaimer</h3>
                    <p className="mb-2">The specifications, drawings, images etc included in this catalogue are intended to be generic and must be interpreted as equivalent or functionally equivalent. The identification of many items is facilitated by illustrations (photographs and general assembly drawings) and mention of, or reference to any specific standards, or trade names, including those that might appear on the photographs, drawings, images etc is intended for illustration purposes only, and does not imply an endorsement or imitation or preference of any specific standard, brand, manufacturer or supplier. Neither does the information imply the availability of any mentioned items. The items discussed alongwith the images, drawings etc portrayed are representative of industry catalogues, standards, terminology and specifications and hence accounting for any resemblance which otherwise may be co-incidental.</p>
                    <p className="mb-2">This Catalogue does not contain any guarantee or agreed quality of products or any warranty of merchantability, fitness for a particular purpose and non-infringement.</p>
                    <p className="mb-2">The data and information contained herein are being provided for information only and without responsibility, and Sealmatic India Ltd makes no representations or warranties, either expressed or implied, as to the accuracy, completeness, or fitness for a particular purpose. Sealmatic does not accept any responsibility or liability with regard to the reliance on, or use of this data and information.</p>
                    <p>Sealmatic is continuously improving and upgrading their products with respect to quality and application and therefore any changes made to the catalogue may be made without any notice.</p>
                </div>
            </section>
        </main>
        <Footer />
    </>
}