import Image from "next/image";
import Link from "next/link";
import SuitsImage from "@/images/Suits1.jpg"
import Moreproductimage1 from "@/images/moreproductimage1.jpg"
import Moreproductimage2 from "@/images/moreproductimage2.jpg"
import Moreproductimage3 from "@/images/moreproductimage3.jpg"
import Moreproductimage4 from "@/images/moreproductimage4.jpg"
import "@/app/globals.css"

const Productcard = () => {
    return (
        <>
            <div className="productcard p-3 relative">
                <div className="productCardWrapper">
                    <div className="productImgBox overflow-hidden relative mb-3">
                        <Image src={SuitsImage} alt="Product-Image" />
                        <Link href="\" className="bg-[#011628] text-[#fff] p-2 block text-center uppercase text-sm">Add To Cart</Link>
                    </div>

                    <span className="text-sm font-regular italic text-[#9f9f9f] block text-center">Suits</span>
                    <h2 className="text-md font-semibold uppercase text-[#011628] mb-4 text-center">NAGATO – Prince of Wales Suit</h2>
                    <span className="text-md font-medium text-[#011628] text-center block">$750.00</span>
                </div>

                <div className="moreProductImgBox">
                    <ul>
                        <li>
                            <Link href="/">
                                <Image src={Moreproductimage1} alt="Product-Image" />
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                <Image src={Moreproductimage2} alt="Product-Image" />
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                <Image src={Moreproductimage3} alt="Product-Image" />
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                <Image src={Moreproductimage4} alt="Product-Image" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Productcard
