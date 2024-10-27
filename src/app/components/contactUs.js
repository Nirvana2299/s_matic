'use client'
import React, { useState } from 'react'
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
        <section className="relative w-full bg-[#023169] text-white">
            <div className="mx-auto max-w-screen-3xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
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
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="POST" onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-500 border-[1px] p-3 text-sm"
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
                                        className="w-full rounded-lg border-gray-500 border-[1px] p-3 text-sm"
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
                                        className="w-full rounded-lg border-gray-500 border-[1px] p-3 text-sm"
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
                                    className="w-full rounded-lg border-gray-500 border-[1px] p-3 text-sm"
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
                    </div>
                </div>
            </div>


        </section>
    )
}  