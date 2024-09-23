import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Image from "next/image";
import About1 from "@/images/about-1.webp"
import About2 from "@/images/about-2.webp"
import SignatureImg from "@/images/about_signature.webp"
import trendyAboutImg from "@/images/aboutsec_img.webp"
import "../app/globals.css";
import Productcard from "@/components/Productcard";

const About = () => {
    return (
        <>
            <Header />

            <div className="innerBannr py-36">
                <h2 className="text-xl font-semibold uppercase text-[#fff] mb-0 text-center z-10 relative">About Us</h2>
            </div>

            <div className="aboutSec bg-[#f0efeb]">
                <div className="flex">
                    <div className="about1imgBox">
                        <Image src={About1} alt="About Img" />
                    </div>

                    <div className="aboutContentBox flex flex-col items-center justify-center px-20 text-center">
                        <span className="text-md font-medium text-[#008ed6] italic mb-1">About Us</span>
                        <h1 className="sm:text-4xl font-black uppercase text-[#011628] mb-8">Interesting Facts</h1>
                        <p className="text-sm font-regular text-[#4a4a4a] leading-7 mb-8">Morbi quam mi, consectetur non vestibulum ac, fringilla et quam. Mauris malesuada odio et est finibus, id faucibus metus blandit. Etiam et fermentum nunc. Aliquam nec ipsum vel ultricies. Vestibulum eleifend blandit condi</p>
                        <Image src={SignatureImg} width="300" alt="Signature" />
                    </div>

                    <div className="about2imgBox">
                        <Image src={About2} alt="About Img 2" />
                    </div>
                </div>
            </div>

            <div className="container my-16 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                    <div className="aboutTrendy_ContentSec">
                        <h4 className="text-md font-medium text-[#008ed6] italic mb-1">We bring trends to your doorstep</h4>
                        <h2 className="sm:text-4xl font-black uppercase text-[#011628] uppercase mb-4">BRANDED DESIGNERS</h2>
                        <p className="text-sm font-regular text-[#000] pe-5 leading-6 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p className="text-sm font-regular text-[#000] pe-5 leading-6 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <div className="mb-2">
                            <h2 className="sm:text-lg font-bold uppercase text-[#011628] mb-2">UPGRADED DESIGN</h2>
                            <p className="text-sm font-regular text-[#000] pe-5 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        </div>

                        <div className="mb-2">
                            <h2 className="sm:text-lg font-bold uppercase text-[#011628] mb-2">RESONABLE PRICE</h2>
                            <p className="text-sm font-regular text-[#000] pe-5 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        </div>

                        <div className="mb-2">
                            <h2 className="sm:text-lg font-bold uppercase text-[#011628] mb-2">HIGH QUALITY PRODUCTS</h2>
                            <p className="text-sm font-regular text-[#000] pe-5 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        </div>
                    </div>

                    <div className="aboutTrendyImg">
                        <Image src={trendyAboutImg} alt="About Trendy Image" />
                    </div>
                </div>

                <p className="text-sm font-regular text-[#000] pe-5 leading-6 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                <p className="text-sm font-regular text-[#000] pe-5 leading-6 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                <p className="text-sm font-regular text-[#000] pe-5 leading-6 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About
