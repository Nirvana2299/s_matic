'use client'
import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MapIcon from '@mui/icons-material/Map';
import Reveal from './../../utils/reveal'

export default function ContactUs() {
    const [isLoading, setIsLoading] = useState(false)
    const [banner, setbanner] = useState(false)

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true) // Set loading to true when the request starts

        const obj = {
            name: event.target[0].value ?? '',
            email: event.target[1].value ?? '',
            phone: event.target[2].value ?? '',
            message: event.target[3].value ?? ''
        }

        console.log(obj);

        setTimeout(() => {
            setIsLoading(false)
            for (let i = 0; i < event.target.length; i++) {
                event.target[i].value = '';
            }

            if (!isLoading) {
                setbanner(true)
                setTimeout(() => setbanner(false), 2000)
            }
        }, 3000)

        // try {
        //     const formData = new FormData(event.currentTarget)
        //     console.log(formData);
        //     const response = await fetch('/api/submit', {
        //         method: 'POST',
        //         body: formData,
        //     })

        //     console.log(response);

        //     // Handle response if necessary
        //     const data = await response.json()
        //     console.log(data);
        //     // ...
        // } catch (error) {
        //     // Handle error if necessary
        //     console.error(error)
        // } finally {
        //     setIsLoading(false) // Set loading to false when the request completes
        // }
    }
    return (
        <section className="relative w-full bg-[#FFF] text-black ">
            <div className="mx-auto max-w-screen-3xl px-4 py-16 sm:px-6 lg:px-8">
                <div className='flex flex-col items-center justify-center gap-10 py-6'>
                    <Reveal>
                        <p className='text-3xl'>Office Near You.</p>
                    </Reveal>
                    <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-3'>
                        <ContactCard Icon={MailOutlineIcon} title={'Email Address'} subtitle='Sent mail asap anytime' Node={
                            <div>
                                <p>info@leakfreeselas.com</p>
                                <p>info@leakfreeselas.com</p>
                            </div>
                        }
                        />
                        <ContactCard Icon={LocalPhoneIcon} title={'Phone Number'} subtitle='Call us asap anytime'
                            Node={
                                <div>
                                    <p>+91 93124567788</p>
                                    <p>+91 93870000000</p>
                                </div>
                            }

                        />
                        <ContactCard Icon={MapIcon} title={'Office Address'} subtitle='Visit Our Office'
                            Node={
                                <div>
                                    <p>Gala E-5, Surat Singh Estate, Hill</p>
                                    <p>park, Jogeshwari, Mumbai 400102</p>
                                </div>
                            }

                        />
                    </div>
                    {/* Map */}
                    <div className='w-full p-4 shadow-md rounded-xl'>
                        <Reveal>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.3247558175544!2d73.0226015!3d19.1810129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEwJzUxLjciTiA3M8KwMDEnMjEuNCJF!5e0!3m2!1sen!2sin!4v1720268584680!5m2!1sen!2sin" className='rounded-xl' width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                        </Reveal>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <Reveal slideFromSide={true} style={{}} className="lg:col-span-2 lg:py-12">
                        {/* <div className="lg:col-span-2 lg:py-12"> */}
                        <p className='text-3xl'>Leak Free Seals</p>
                        <p className="max-w-xl text-lg">
                            At the same time, the fact that we are wholly owned and totally independent from
                            manufacturer and other group control gives you confidence that we will only recommend what
                            is right for you.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="text-2xl font-bold text-[#023169]"> 0151 475 4450 </a>

                            <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                        </div>
                        {/* </div> */}
                    </Reveal>
                    <Reveal className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12" style={{}}>
                        {/* <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"> */}
                            <form action="POST" onSubmit={onSubmit} className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg bg-[#FFF] border-gray-500 border-[1px] p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        required={true}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg bg-[#FFF] border-gray-500 border-[1px] p-3 text-sm"

                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                                            required={true}
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg bg-[#FFF] border-gray-500 border-[1px] p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            pattern='^[1-9]{10,12}$'
                                            required={true}
                                        />
                                    </div>
                                </div>



                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg bg-[#FFF] border-gray-500 border-[1px] p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className={`transition-all duration-300 inline-block w-full rounded-lg bg-[#023169] shadow-lg hover:shadow-2xl ${isLoading ? 'bg-gray-700 hover:bg-gradient-to-r from-gray-600 to-grey-900' : 'bg-[#023169] hover:bg-gradient-to-r from-blue-600 to-blue-900'}   px-5 py-3 font-medium text-white sm:w-auto`}
                                    >
                                        {isLoading ? 'Loading...' : 'Send Enquiry'}
                                    </button>
                                </div>
                                {banner ?
                                    <div className='absolute inset-x-0 top-80    md:top-2 w-[100%] flex justify-center'>
                                        <div className='flex justify-center p-2 shrink h-10 items-center bg-green-500 shadow-md rounded-lg'>
                                            <p className='text-white'>Your query has been submited, Thank you!</p>
                                        </div>
                                    </div> : <></>
                                }
                            </form>
                        {/* </div> */}
                    </Reveal>
                </div>
            </div>


        </section>
    )
}


function ContactCard(props) {
    const Icon = props.Icon
    const Node = props.Node
    return (
        <Reveal slideFromSide={true} className='shadow-lg rounded-xl'>
            <div className=' p-8 flex flex-col gap-4 '>
                <div className='flex gap-4 items-center  '>
                    <div className='p-4 bg-blue-200 rounded-full'>
                        <Icon scale={2} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-bold'>{props.title}</p>
                        <p>{props.subtitle}</p>
                    </div>
                </div>
                <div className='font-semibold'>
                    {Node}
                </div>
            </div>
        </Reveal>
    )
}