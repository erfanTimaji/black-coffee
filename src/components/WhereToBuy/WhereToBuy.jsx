import wordMap from '../../assets/word-map.jpg'
import {motion} from 'framer-motion'

function WhereToBuy() {
    return <div className="container my-36">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
            <div className="space-y-8 ">
                <motion.h1 initial={{opacity:0 , y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} className='text-3xl font-bold text-darkGray font-serif'>محصولات ما را از مراکز معتبر بلک کافی خریداری نمایید.</motion.h1>
                <div className="flex items-center gap-4">
                <input type="text" placeholder="اسم" className="input-style w-full lg:w-[150px]"></input>
                <input type="email" placeholder="ایمیل" className="input-style w-full lg:w-[150px]"></input>
                </div>
                <div className="flex items-center gap-4">
                <input type="text" placeholder="کشور" className="input-style w-full lg:w-[150px]"></input>
                <input type="text" placeholder="شهر" className="input-style w-full"></input>
                </div>
                <motion.button initial={{opacity:0 , y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} className="primary-btn w-full">همین الان ثبت سفارش کنید</motion.button>
            </div>
        </div>
        <div className="col-span-2">
            <motion.img initial={{opacity:0 , scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:0.8}} src={wordMap} className="w-full sm:w-[500px] mx-auto rounded-full"></motion.img>
        </div>
    </div>
}

export default WhereToBuy;