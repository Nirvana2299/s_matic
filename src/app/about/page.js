import Footer from "../components/footer";
import Navbar from "../components/navbar";
import aboutData from "./../../utils/aboutData";

export default function Page() {
    return <>
        {/* <Navbar /> */}
        <main className="h-full w-full text-start text-white md:text-justify bg-[#023169]">
            <section before='' className='relative min-h-[450px] w-full before:content-[attr(before)] before:bg-bottom before:bg-factory-image before:absolute before:inset-x-0 before:inset-y-0 before:brightness-50 text-white bg-bottom flex justify-center lg:justify-start items-center'>
                <div className='relative flex items-center lg:w-[1200px] mx-auto'>
                    <div className='mb-2 xl:mx-2 md:mx-10'>
                        <p className="text-3xl lg:text-4xl font-bold">About Us</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-16 max-w-[1200px] xl:mx-auto mx-4 md:mx-10 py-10 text-base">
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Leak free seals, a specialist in sealing solutions</h3>
                    <div className="flex flex-col gap-4 text-base">
                        <p> Leak Free Seals specializes in providing innovative sealing solutions for a wide range of applications for industrial use for all kinds of industries.</p>
                        <p className="">Adverse environmental conditions, high rotational speed and pressure levels place demanding requirements on sealing technology employed in the process industry. Leak Free Seals has proven itself with its heavy-duty mechanical seals with innovative and tailor made sealing solutions guaranteeing longer service.</p>
                        <p>Our legacy of 30 years has driven us constantly to grow with the challenging needs of superior sealing technology. Our engineering specialists at Leak Free Seals are experienced in application know how and trouble shooting. With the collective experience of many years we at Leak Free Seals work towards meeting global standards of operation.</p>
                    </div>
                </div>
                {/* Section  */}
                <section className="flex flex-col md:flex-row gap-5 md:gap-20">
                    <div className="flex flex-col gap-4 md:w-[50%]">
                        <h2 className="text-3xl md:text-4xl">Extensive Knowledge</h2>
                        <div className="flex flex-col gap-4">
                            <p>At Leak Free Seals, we have developed extensive knowledge
                                of seals and their applications, including
                                their composition, lifespan and suitability for a
                                specific job.</p>
                            <p>The right choice of seals minimizes the risk of
                                unexpected breakdowns. Our wide range of seals
                                allows us to provide multiple solutions.
                                Leak Free Seals range alone covers about 50,000 items,
                                of which a large proportion are stockitems. We
                                often cooperate with customers in the design of
                                special solutions. We have close relationship with
                                many of the world's leading manufacturers of
                                sealing systems and, in cooperation with us,
                                they provide their knowledge and experience to
                                our customers.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:w-[50%]">
                        <h2 className="text-3xl md:text-4xl">The Leak Free Seals Way</h2>
                        <div className="flex flex-col gap-4">
                            <p>Our knowledge in unique sealing solutions gives
                                business a competitive advantage. Our value
                                proposition is being a trustworthy business partner
                                who knows our customers needs and with the ability
                                to fulfill them. Our expertise is aimed at adding value
                                with and for our business partners.</p>
                            <p className="font-bold">This is the Leak Free Seals way</p>
                        </div>
                    </div>
                </section>
                {/* Section  */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-3xl md:text-4xl">Disclaimer</h3>
                    <p className="mb-2">The specifications, drawings, images etc included in this catalogue are intended to be generic and must be interpreted as equivalent or functionally equivalent. The identification of many items is facilitated by illustrations (photographs and general assembly drawings) and mention of, or reference to any specific standards, or trade names, including those that might appear on the photographs, drawings, images etc is intended for illustration purposes only, and does not imply an endorsement or imitation or preference of any specific standard, brand, manufacturer or supplier. Neither does the information imply the availability of any mentioned items. The items discussed alongwith the images, drawings etc portrayed are representative of industry catalogues, standards, terminology and specifications and hence accounting for any resemblance which otherwise may be co-incidental.</p>
                    <p className="mb-2">This Catalogue does not contain any guarantee or agreed quality of products or any warranty of merchantability, fitness for a particular purpose and non-infringement.</p>
                    <p className="mb-2">The data and information contained herein are being provided for information only and without responsibility, and Leak Free Seals India Ltd makes no representations or warranties, either expressed or implied, as to the accuracy, completeness, or fitness for a particular purpose. Leak Free Seals does not accept any responsibility or liability with regard to the reliance on, or use of this data and information.</p>
                    <p>Leak Free Seals is continuously improving and upgrading their products with respect to quality and application and therefore any changes made to the catalogue may be made without any notice.</p>
                </section>
            </section>

            {/* <section className="my-10 text-xl">
                {
                    aboutData.map((el, i) =>
                        <div key={el.id} className={`${i % 2 ? '' : 'bg-gray-200'} `}><div className="lg:max-w-[1200px] py-6 xl:mx-auto mx-4 md:mx-10"><h3 className="text-2xl font-bold mb-4">{el.title}</h3><p className="mb-2">{el.details}</p></div></div>

                    )
                }
            </section> */}
            {/* <section className="bg-gray-200 py-10">
                <div className="max-w-[1200px] xl:mx-auto mx-4 md:mx-10 text-xl">
                    <h3 className="text-2xl font-bold mb-4">About Us</h3>
                    <p className="mb-2">Leak Free Seals designs and manufactures mechanical seals and associated products mainly for the oil & gas, chemical, pharmaceutical, pulp & paper, power, mining and many more industrial applications.</p>
                    <p className="mb-2">Today, it provides the most complete selection of engineered mechanical seals and sealing support systems. Leak Free Seals products are globally recognized as a trusted brand in the process industry.</p>
                    <p className="mb-2">Leak Free Seals can help relieve stress and reduce the life cycle costs associated with the most important aspects of plant operation. Dedicated to delivering the highest quality support, Leak Free Seals services and solutions integrates hydraulic, mechanical and materials engineering knowledge with creative solutions. It improves equipment reliability and system performance, reduces energy consumption and improves the safety and environmental impact of operations.</p>
                    <p className="mb-2">Leak Free Seals has a longstanding tradition of providing mechanical seals and sealing services that are trusted by the industry. Leak Free Seals mechanical seals represent a collection of trusted products that are supported by strong aftermarket services, providing users with both safety and environmental benefits.</p>
                    <p className="mb-2">Leak Free Seals mechanical seals are used on a variety of rotating equipment, including pumps, compressors, mixers, steam turbines and other speciality equipment, primarily in the oil and gas, pharmaceutical, chemical processing, mineral and ore processing and general industries.</p>
                    <p className="mb-2">Leak Free Seals products guarantee highest quality standards & application know-how with full service to its customers.</p>
                </div>
            </section>
            <section className=" py-10">
                
            </section> */}
        </main>
        {/* <Footer /> */}
    </>
}