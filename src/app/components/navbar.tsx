"use client"
import Link from 'next/link'
import products, { prod } from './../../utils/productsData'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    ChevronRightIcon,
    ArrowUpRightIcon
    // PhoneIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneArrowUpRightIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function onClick() {
        setMobileMenuOpen(false);
    }


    const pathname = usePathname();

    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="z-10 bg-white sticky left-0 right-0 top-0"
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href={{ pathname: '/' }} className="-m-1.5 p-1.5">
                        <span className="text-[#023169] text-xl font-bold">Leak Free Seals</span>
                        {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                    </Link>
                </div>
                <div className="flex lg:hidden gap-2">
                    <a
                        href={`tel:+9112364578950`}
                    >
                        <div className='text-start flex gap-4 bg-[#023169] px-4 rounded-3xl'>
                            <p className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white'>Call Now</p>
                            {/* <p className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 '>+91 12364578950</p> */}
                        </div>
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                </div>
                <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 z-10 mt-3 min-w-80 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4 flex flex-col gap-4">
                                    {prod.map((e, i) => (
                                        <div key={i} className=''>
                                            <Popover.Group className="hidden w-full lg:flex lg:items-center lg:gap-x-12">
                                                <Popover className=" w-full">
                                                    {({ open }) => (
                                                        <>
                                                            <Popover.Button className='w-full'>
                                                                <div className='flex w-full justify-between items-center'>
                                                                    <p className={classNames(open ? 'text-[#023169]' : '', 'transition-all')}>{e.categoryName}</p>
                                                                    <ChevronRightIcon className={classNames(open ? 'rotate-180' : '', 'transition-all h-5 w-5 flex-none')} />
                                                                </div>
                                                            </Popover.Button >

                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 -translate-x-1"
                                                                enterTo="opacity-100 translate-x-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-x-0"
                                                                leaveTo="opacity-0 translate-x-1"
                                                            >
                                                                {/* <div className='bg-gray-300 h-px w-full'></div> */}
                                                                <Popover.Panel className="absolute top-0 left-80 z-20 ml-3 min-w-80 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                                                                    <div className="p-2 flex flex-col">
                                                                        {prod[i].products.map((item) => <div
                                                                            key={item.name}
                                                                            className="group relative flex items-center gap-x-4 rounded-md px-2 py-2 text-sm hover:bg-gray-100 hover:text-[#023169]"
                                                                        >
                                                                            <div className="flex-auto ">
                                                                                <div className='flex justify-between items-center'>
                                                                                    <Link href={{
                                                                                        pathname: `/products/${e.categoryName.toLowerCase().replace(/\s+/g, '-')}/${item.name}`,
                                                                                    }}
                                                                                        className="block hover:text-[#023169] leading-6 text-md text-gray-900">
                                                                                        {item.name}
                                                                                        <span className="absolute inset-0" />
                                                                                    </Link>
                                                                                    <ArrowUpRightIcon className=' h-5 w-5'/>
                                                                                </div>
                                                                                {/* <div className='bg-gray-300 h-px w-full'></div> */}
                                                                            </div>
                                                                        </div>)}
                                                                    </div>
                                                                </Popover.Panel >
                                                            </Transition>
                                                        </>
                                                    )}
                                                </Popover>
                                            </Popover.Group>
                                        </div>
                                    ))}
                                </div>

                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link href={{
                        pathname: `/`,
                    }} className={`text-md font-semibold leading-6 hover:text-[#023169] ${pathname === '/' ? 'text-[#023169]' : 'text-gray-900'}`}>
                        Home
                    </Link>
                    <Link href={{
                        pathname: `/productCatalogue`,
                    }} className={`text-md font-semibold leading-6 hover:text-[#023169] ${pathname === '/productCatalogue' ? 'text-[#023169]' : 'text-gray-900'}`}>
                        Products
                    </Link>
                    <Link href={{
                        pathname: `/contactus`,
                    }} className={`text-md font-semibold leading-6 hover:text-[#023169] ${pathname === '/contactus' ? 'text-[#023169]' : 'text-gray-900'}`}>
                        Contact
                    </Link>
                    <Link href={{
                        pathname: `/about`,
                    }} className={`text-md font-semibold leading-6 hover:text-[#023169] ${pathname === '/about' ? 'text-[#023169]' : 'text-gray-900'}`}>
                        About
                    </Link>
                    <Link
                        href={{
                            pathname: `tel:+9112364578950`,
                        }}
                    >
                        <div className='text-start'>
                            <p className='italic font-semibold'>Quick Sales Support</p>
                            <div className='flex gap-2'>
                                <PhoneArrowUpRightIcon className="h-6 w-6 text-[#023169]" aria-hidden="true" />
                                <p className='italic font-bold text-[#023169]'>+91 12364578950</p>
                            </div>
                        </div>
                    </Link>
                </Popover.Group>
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div> */}
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Products
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'transition-all h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {/* {[...products,].map((item) => ( */}
                                                <Disclosure.Button

                                                    as="a"
                                                    // href={`products/${item.name}`}
                                                    className="block rounded-lg  pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    {/* <Link href={{ pathname: `/products/${item.name}` }}><a onClick={onClick}>{item.name}</a> </Link> */}
                                                </Disclosure.Button>

                                                {/* ))} */}
                                                {prod.map((e, i) => <Disclosure as="div" className="mx-4">
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                                {e.categoryName}
                                                                <ChevronDownIcon
                                                                    className={classNames(open ? 'rotate-180' : '', 'transition-all h-5 w-5 flex-none')}
                                                                    aria-hidden="true"
                                                                />
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                                {[...e.products,].map((item) => (
                                                                    <Disclosure.Button
                                                                        key={item.name}
                                                                        as="a"
                                                                        // href={`products/${item.name}`}
                                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                    >
                                                                        <Link href={{ pathname: `/products/${e.categoryName.toLowerCase().replace(/\s+/g, '-')}/${item.name}` }}><a onClick={onClick}>{item.name}</a> </Link>
                                                                    </Disclosure.Button>

                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>)}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    href="/"
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${pathname === '/' ? 'text-[#023169]' : 'text-gray-900'}`}
                                >
                                    Home
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    href="/productCatalogue"
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${pathname === '/productCatalogue' ? 'text-[#023169]' : 'text-gray-900'}`}
                                >
                                    Products
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    href="/about"
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${pathname === '/about' ? 'text-[#023169]' : 'text-gray-900'}`}
                                >
                                    About
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    href="/contactus"
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${pathname === '/contactus' ? 'text-[#023169]' : 'text-gray-900'}`}
                                >
                                    Contact
                                </Link>

                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </motion.header>
    )
}
