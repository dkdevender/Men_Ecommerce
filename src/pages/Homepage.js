import Header from "@/components/Header";
import Slide from "@/components/Slide";
import Image from "next/image";
import Link from "next/link";
import About1 from "@/images/about-1.webp"
import About2 from "@/images/about-2.webp"
import SignatureImg from "@/images/about_signature.webp"
import ServiceIcon1 from "@/images/service-icon1.svg"
import ServiceIcon2 from "@/images/service-icon2.svg"
import ServiceIcon3 from "@/images/service-icon3.svg"
import ServiceIcon4 from "@/images/service-icon4.svg"

import galleryImg1 from "@/images/gallery1.webp"
import galleryImg2 from "@/images/gallery2.webp"
import galleryImg3 from "@/images/gallery3.webp"
import galleryImg4 from "@/images/gallery4.webp"
import galleryImg5 from "@/images/gallery5.webp"
import galleryImg6 from "@/images/gallery6.webp"
import galleryImg7 from "@/images/gallery7.webp"
import galleryImg8 from "@/images/gallery8.webp"
import galleryImg9 from "@/images/gallery9.webp"
import galleryImg10 from "@/images/gallery10.webp"

import { FaEye } from "react-icons/fa";
import Blogimg1 from "@/images/Blog1.webp"
import Blogimg2 from "@/images/Blog2.webp"
import Blogimg3 from "@/images/Blog3.webp"
import Clientprofile from "@/images/client-profile.png"
import Productcard from "@/components/Productcard";

import { FaShippingFast } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import Footer from "@/components/Footer";



const Homepage = () => {
    return (
        <>
            <Header />

            <Slide />

            <div className="aboutSec bg-[#f0efeb]">
                <div className="flex">
                    <div className="about1imgBox">
                        <Image src={About1} />
                    </div>

                    <div className="aboutContentBox flex flex-col items-center justify-center px-20 text-center">
                        <span className="text-md font-medium text-[#008ed6] italic mb-1">About Us</span>
                        <h1 className="text-4xl font-black uppercase text-[#011628] mb-8">Interesting Facts</h1>
                        <p className="text-sm font-regular text-[#4a4a4a] leading-7 mb-8">Morbi quam mi, consectetur non vestibulum ac, fringilla et quam. Mauris malesuada odio et est finibus, id faucibus metus blandit. Etiam et fermentum nunc. Aliquam nec ipsum vel ultricies. Vestibulum eleifend blandit condi</p>
                        <Image src={SignatureImg} width="300" />
                    </div>

                    <div className="about2imgBox">
                        <Image src={About2} />
                    </div>
                </div>
            </div>

            <div className="serviceSec my-14">
                <div className="container mx-auto">
                    <div className="sectionHeading text-center mb-7">
                        <span className="text-md font-medium text-[#008ed6] italic mb-1">Services</span>
                        <h1 className="sm:text-4xl font-black uppercase text-[#011628] mb-3">Suits for men</h1>
                        <span className="textAfterShape">&nbsp;</span>
                    </div>

                    {/* <div className="grid grid-cols-4 gap-4"> */}
                    {/* <div className="flex flex-col flex md:flex-row gap-4"> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="serviceCard">
                            <span className="w-[100px] h-[100px] rounded-full bg-[#f0efeb] block p-6 mx-auto mb-5" >
                                <Image src={ServiceIcon1} />
                            </span>

                            <h2 className="text-md font-medium text-center text-[#008ed6] uppercase mb-2">Perfectly designed</h2>
                            <p className="text-sm font-regular text-[#000] text-center">faucibus metus blandit etiam et nunc aliquam elementum</p>
                        </div>

                        <div className="serviceCard">
                            <span className="w-[100px] h-[100px] rounded-full bg-[#f0efeb] block p-6 mx-auto mb-5" >
                                <Image src={ServiceIcon2} />
                            </span>

                            <h2 className="text-md font-medium text-center text-[#008ed6] uppercase mb-2">Natural Materials</h2>
                            <p className="text-sm font-regular text-[#000] text-center">faucibus metus blandit etiam et nunc aliquam elementum</p>
                        </div>

                        <div className="serviceCard">
                            <span className="w-[100px] h-[100px] rounded-full bg-[#f0efeb] block p-6 mx-auto mb-5" >
                                <Image src={ServiceIcon3} />
                            </span>

                            <h2 className="text-md font-medium text-center text-[#008ed6] uppercase mb-2">Best Approach</h2>
                            <p className="text-sm font-regular text-[#000] text-center">faucibus metus blandit etiam et nunc aliquam elementum</p>
                        </div>

                        <div className="serviceCard">
                            <span className="w-[100px] h-[100px] rounded-full bg-[#f0efeb] block p-6 mx-auto mb-5" >
                                <Image src={ServiceIcon4} />
                            </span>

                            <h2 className="text-md font-medium text-center text-[#008ed6] uppercase mb-2">Stunning suits</h2>
                            <p className="text-sm font-regular text-[#000] text-center">faucibus metus blandit etiam et nunc aliquam elementum</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bestQualitySec flex flex-col items-center justify-center py-24">
                <span className="text-md font-medium text-[#008ed6] italic mb-2">Best Quality</span>
                <h1 className="sm:text-4xl font-black uppercase text-[#fff] mb-5 text-center">For unique people only</h1>
                <button className="bg-sky-500 text-white text-sm font-medium rounded-full py-3 px-7 uppercase">Find Your Suit</button>
            </div>

            <div className="latesProductSec my-14">
                <div className="container mx-auto">
                    <div className="sectionHeading text-center mb-7">
                        <span className="text-md font-medium text-[#008ed6] italic mb-1">Hello Gentlemen</span>
                        <h1 className="sm:text-4xl font-black uppercase text-[#011628] mb-3">Latest Suits</h1>
                        <span className="textAfterShape">&nbsp;</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>
                    </div>

                    <div className="productBox hidden">
                        <ul>
                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="gallerySec bg-[#011628] pt-14">
                <div className="sectionHeading text-center mb-7">
                    <span className="text-md font-medium text-[#008ed6] italic mb-1">Gallery</span>
                    <h1 className="sm:text-4xl font-black uppercase text-white mb-3">Featured work</h1>
                    <span className="textAfterShape whiteTextafterShape">&nbsp;</span>
                </div>

                <div class="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
                    <div className="galleryImg relative">
                        <Image src={galleryImg1} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg2} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg3} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg4} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg5} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg6} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg7} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg8} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg9} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                    <div className="galleryImg relative">
                        <Image src={galleryImg10} />
                        <div className="imgViewOverlay">
                            <Link href="/" className="text-white text-xl p-3"><FaEye /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blogSec my-14">
                <div className="container mx-auto">
                    <div className="sectionHeading text-center mb-7">
                        <span className="text-md font-medium text-[#008ed6] italic mb-1">Our Blog</span>
                        <h1 className="sm:text-4xl font-black uppercase text-[#011628] mb-3">Latest News</h1>
                        <span className="textAfterShape">&nbsp;</span>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="blogCardWrapper bg-[#f5f5f5]">
                            <div className="blogImgBox mb-5">
                                <Image src={Blogimg1} className="w-[100%]" />
                            </div>

                            <h2 className="text-md font-medium text-[#011628] text-center mb-3 px-3">Duis sagitis ipsum prasent</h2>
                            <p className="text-sm font-regular text-[#011628] text-center mb-3 px-3 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…</p>

                            <Link href="/" className="readmoreBTN text-md font-medium text-[#011628] uppercase text-center underline mb-5 block">Learn More</Link>
                        </div>

                        <div className="blogCardWrapper bg-[#f5f5f5]">
                            <div className="blogImgBox mb-5">
                                <Image src={Blogimg2} className="w-[100%]" />
                            </div>

                            <h2 className="text-md font-medium text-[#011628] text-center mb-3 px-3">Duis sagitis ipsum prasent</h2>
                            <p className="text-sm font-regular text-[#011628] text-center mb-3 px-3 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…</p>

                            <Link href="/" className="readmoreBTN text-md font-medium text-[#011628] uppercase text-center underline mb-5 block">Learn More</Link>
                        </div>

                        <div className="blogCardWrapper bg-[#f5f5f5]">
                            <div className="blogImgBox mb-5">
                                <Image src={Blogimg3} className="w-[100%]" />
                            </div>

                            <h2 className="text-md font-medium text-[#011628] text-center mb-3 px-3">Duis sagitis ipsum prasent</h2>
                            <p className="text-sm font-regular text-[#011628] text-center mb-3 px-3 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…</p>

                            <Link href="/" className="readmoreBTN text-md font-medium text-[#011628] uppercase text-center underline mb-5 block">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="clientFeedback_Sec py-10">
                <div className="container mx-auto z-10 relative">
                    <div className="sectionHeading text-center mb-5">
                        <span className="text-md font-medium text-[#008ed6] italic mb-1">Testimonials</span>
                        <h1 className="sm:text-4xl font-black uppercase text-[#fff] mb-3">What Clients Say</h1>
                        <span className="textAfterShape whiteTextafterShape">&nbsp;</span>
                    </div>

                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className="clientFeedbackcard">
                            <p className="text-sm font-light text-[#fff] leading-7 text-center mb-5 px-5">Aenean ullamcorper convallis mi, in viverra quam mattis sed. Sed at faucibus neque. Fusce egestas odio vitae augue scelerisque, in laoreet nisi bibendum. Sed ultrices nisi ut consequat ultrices. Suspendisse id luctus metus, quis commodo ex.</p>
                            <div className="flex justify-center items-center gap-3">
                                <div className="clientfeedbackProfile w-16 h-16 overflow-hidden rounded-full">
                                    <Image src={Clientprofile} />
                                </div>
                                <h2 className="text-md font-medium text-[#fff] uppercase">Mike Johnson</h2>
                            </div>
                        </div>

                        <div className="clientFeedbackcard">
                            <p className="text-sm font-light text-[#fff] leading-7 text-center mb-5 px-5">Aenean ullamcorper convallis mi, in viverra quam mattis sed. Sed at faucibus neque. Fusce egestas odio vitae augue scelerisque, in laoreet nisi bibendum. Sed ultrices nisi ut consequat ultrices. Suspendisse id luctus metus, quis commodo ex.</p>
                            <div className="flex justify-center items-center gap-3">
                                <div className="clientfeedbackProfile w-16 h-16 overflow-hidden rounded-full">
                                    <Image src={Clientprofile} />
                                </div>
                                <h2 className="text-md font-medium text-[#fff] uppercase">Mike Johnson</h2>
                            </div>
                        </div>

                        <div className="clientFeedbackcard">
                            <p className="text-sm font-light text-[#fff] leading-7 text-center mb-5 px-5">Aenean ullamcorper convallis mi, in viverra quam mattis sed. Sed at faucibus neque. Fusce egestas odio vitae augue scelerisque, in laoreet nisi bibendum. Sed ultrices nisi ut consequat ultrices. Suspendisse id luctus metus, quis commodo ex.</p>
                            <div className="flex justify-center items-center gap-3">
                                <div className="clientfeedbackProfile w-16 h-16 overflow-hidden rounded-full">
                                    <Image src={Clientprofile} />
                                </div>
                                <h2 className="text-md font-medium text-[#fff] uppercase">Mike Johnson</h2>
                            </div>
                        </div>

                        <div className="clientFeedbackcard">
                            <p className="text-sm font-light text-[#fff] leading-7 text-center mb-5 px-5">Aenean ullamcorper convallis mi, in viverra quam mattis sed. Sed at faucibus neque. Fusce egestas odio vitae augue scelerisque, in laoreet nisi bibendum. Sed ultrices nisi ut consequat ultrices. Suspendisse id luctus metus, quis commodo ex.</p>
                            <div className="flex justify-center items-center gap-3">
                                <div className="clientfeedbackProfile w-16 h-16 overflow-hidden rounded-full">
                                    <Image src={Clientprofile} />
                                </div>
                                <h2 className="text-md font-medium text-[#fff] uppercase">Mike Johnson</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="latesProductSec my-14">
                <div className="container mx-auto">
                    <div className="sectionHeading text-center mb-7">
                        <span className="text-md font-medium text-[#008ed6] italic mb-1">Shop</span>
                        <h1 className="sm:text-4xl font-black uppercase text-[#011628] mb-3">Popular Suits</h1>
                        <span className="textAfterShape">&nbsp;</span>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>

                        <div className="productBox">
                            <Productcard />
                        </div>
                    </div>

                    <div className="productBox hidden">
                        <ul>
                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>

                            <li>
                                <Productcard />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shippinginfoSec bg-[#f0efeb] py-3">
                <div className="container mx-auto">
                    <div class="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 justify-center">
                        <div className="shippinginfoCard flex items-center gap-3">
                            <div className="w-14 h-14 overflow-hidden rounded-full bg-[#011628] flex items-center justify-center">
                                <FaShippingFast className="text-[#fff] w-16" />
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-[#011628] uppercase tracking-wide">Fast delivery</h2>
                                <Link href="/" className="text-sm font-regular italic text-[#011628]">More Info</Link>
                            </div>
                        </div>

                        <div className="shippinginfoCard flex items-center gap-3">
                            <div className="w-14 h-14 overflow-hidden rounded-full bg-[#011628] flex items-center justify-center">
                                <FaBoxOpen className="text-[#fff] w-16" />
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-[#011628] uppercase tracking-wide">Free returns</h2>
                                <Link href="/" className="text-sm font-regular italic text-[#011628]">More Info</Link>
                            </div>
                        </div>

                        <div className="shippinginfoCard flex items-center gap-3">
                            <div className="w-14 h-14 overflow-hidden rounded-full bg-[#011628] flex items-center justify-center">
                                <FaWallet className="text-[#fff] w-16" />
                            </div>

                            <div>
                                <h2 className="text-sm font-medium text-[#011628] uppercase tracking-wide">Order tracking</h2>
                                <Link href="/" className="text-sm font-regular italic text-[#011628]">More Info</Link>
                            </div>
                        </div>

                        <div className="shippinginfoCard flex items-center gap-3">
                            <div className="w-14 h-14 overflow-hidden rounded-full bg-[#011628] flex items-center justify-center">
                                <FaHeadset className="text-[#fff] w-16" />
                            </div>

                            <div>
                                <h2 className="text-md font-medium text-[#011628] uppercase tracking-wide">24h service</h2>
                                <Link href="/" className="text-sm font-regular italic text-[#011628]">More Info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Homepage
