import Link from "next/link"
import FooterLogo from "@/images/footer-logo.webp"
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footerSec bg-[#011628] py-12">
                <div className="container mx-auto">
                    <div class="grid gap-5 grid-cols-4">
                        <div className="footerCardWrapper">
                            <Link href="/">
                                <Image src={FooterLogo} width="200" />
                            </Link>

                            <p className="text-sm font-regular text-[#fff] mt-5 leading-6 pe-5">Pellentesque id rhoncus augue nec maximus enim nunc commodo purus sit</p>

                            <ul className="contactLinks mt-3">
                                <li className="flex items-center gap-3 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                    <FaLocationDot />
                                    <span className="text-sm font-regular">London Eye, London, United Kingdom</span>
                                </li>

                                <li className="flex items-center gap-3 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                    <IoMdCall />
                                    <span className="text-sm font-regular">(657) 123-456</span>
                                </li>

                                <li className="flex items-center gap-3 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                    <IoMdMail />
                                    <span className="text-sm font-regular">contact@website.com</span>
                                </li>

                                <li className="flex items-center gap-3 pt-2 text-[#ffffffbf] hover:text-[#fff]">
                                    <MdOutlineAccessTimeFilled />
                                    <span className="text-sm font-regular">Mon - Fri / 9:00 AM - 6:00 PM</span>
                                </li>
                            </ul>
                        </div>

                        <div className="footerCardWrapper">
                            <h2 className="text-md font-medium text-[#fff] uppercase">Information</h2>

                            <ul className="contactLinks mt-3">
                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular">About Us</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Store Location</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Contact Us</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Shipping & Delivery</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Latest News</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Our Sitemap</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footerCardWrapper">
                            <h2 className="text-md font-medium text-[#fff] uppercase">Our Service</h2>

                            <ul className="contactLinks mt-3">
                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular">Privacy Policy</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Terms of Sale</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Customer Service</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Delivery Information</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Payments</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="flex items-center gap-2 py-2 text-[#ffffffbf] hover:text-[#fff]">
                                        <FaRegDotCircle />
                                        <span className="text-sm font-regular text-[#fff]">Save Cards</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footerCardWrapper">
                            <h2 className="text-md font-medium text-[#fff] uppercase">Newsletter</h2>

                            <p className="text-sm font-regular text-[#fff] mt-5 leading-6 pe-5">Subscribe to our mailing list to get the new updates!</p>

                            <div className="cstmInputBox relative mt-8">
                                <input type="text" className="cstmInput placeholder:text-[#fff]" placeholder="Enter your email address" />
                                <button class="goBTN">Go</button>
                            </div>

                            <div className="cstmInputBox relative mt-4 flex items-center gap-2">
                                <input type="checkbox" className="cstmInputcheck w-5 h-5" />
                                <label className="text-sm font-regular text-[#ffffffbf]">Accept GDPR Terms</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomFooterSec bg-[#000] py-4">
                <div className="container mx-auto">
                    <p className="text-xs font-regular text-[#ffffffbf] uppercase text-center">© Copyright – <Link href="/">OceanWP</Link></p>
                </div>
            </div>
        </>
    )
}

export default Footer
