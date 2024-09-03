import Image from 'next/image'
// import Homebanner from"@/images/home-banner.webp"
import Homebanner from"@/images/Banner-1.png"

const Slide = () => {
  return (
    <>
    <div className='carouselSec'>
        <Image src={Homebanner} style="width:100%;" />
    </div>
    </>
  )
}

export default Slide
