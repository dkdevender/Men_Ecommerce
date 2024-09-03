// import React from 'react'
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaRss } from "react-icons/fa";
import Logo from "../images/Logo.webp"
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";



const header = () => {
    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ]

    // function classNames(...classes) {
    //     return classes.filter(Boolean).join(' ')
    // }

    return (
        <>
            <div className='topHeaderSec'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center'>
                        <ul className="socialLink flex">
                            <li>
                                <Link href="/">
                                    <FaTwitter className="text-white" />
                                </Link>
                            </li>

                            <li>
                                <Link href="/">
                                    <FaFacebook className="text-white" />
                                </Link>
                            </li>

                            <li>
                                <Link href="/">
                                    <FaPinterestP className="text-white" />
                                </Link>
                            </li>

                            <li>
                                <Link href="/">
                                    <IoLogoInstagram className="text-white" />
                                </Link>
                            </li>

                            <li>
                                <Link href="/">
                                    <FaLinkedin className="text-white" />
                                </Link>
                            </li>

                            <li>
                                <Link href="/">
                                    <FaRss className="text-white" />
                                </Link>
                            </li>
                        </ul>

                        <span className="text-xs text-white font-normal">contact@website.com | (657) 123-456</span>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="container mx-auto">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {/* <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" /> */}
                            </button>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <Image src={Logo} width="200" className="h-8 w-auto" />
                            </div>

                            <div className="hidden sm:ml-6 sm:flex items-center navbarLinkBox gap-3">
                                <div className="flex space-x-4">
                                    <Link href="/" className="navlink text-blue-950 px-3 py-2 text-sm font-semibold uppercase">
                                        Home Page
                                    </Link>

                                    <Link href="/" className="navlink text-blue-950 px-3 py-2 text-sm font-semibold uppercase">
                                        Our Suits
                                    </Link>

                                    <Link href="/" className="navlink text-blue-950 px-3 py-2 text-sm font-semibold uppercase">
                                        Blog
                                    </Link>

                                    <Link href="/" className="navlink text-blue-950 px-3 py-2 text-sm font-semibold uppercase">
                                        Contact
                                    </Link>

                                    <Link href="/" className="navlink text-blue-950 px-3 py-2 text-sm font-semibold uppercase">
                                        My Account
                                    </Link>
                                </div>

                                <div className="cartItemBox">
                                    <Link href="/" className="inline-flex items-center">
                                        <IoBagOutline />
                                        <span>0</span>
                                        <span className="text-sm text-blue-950 font-semibold">$0.00</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default header
