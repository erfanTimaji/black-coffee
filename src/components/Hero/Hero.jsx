import BgImage from "../../assets/bgImage.jpg"
import bgMain from "../../assets/bgmain.jpg"
import Navbar from "../Navbar/navbar"
import {motion, spring} from "framer-motion"

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

function Hero() {
    return (
        <main style = {bgImage}>
            <section className="w-full min-h-[750px]">
                <div className="container">
                    <Navbar></Navbar>
                    {/*hero section*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[1140px]">
                        <div className="text-lightOrange mt-[50px] md:mt-0 p-4 space-y-8 ">
                        <motion.h1 initial={{opacity:0 , y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness:100,damping:10,delay:0.7}} className="text-7xl font-bold leading-tight mr-14">بلک کافی</motion.h1>
                        <motion.div initial={{opacity:0 , y:100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness:100,damping:10,delay:1.2}} className="relative z-10 space-y-4">
                        <h1 className="text-2xl">عاشقان لایف استایل قهوه</h1>
                        <h1 className="text-sm opacity-55 leading-loose">بوی قهوه به قدر زیباست که باورم نمیشه مال این جهان باشه!</h1>
                        <div className="absolute -top-6 -right-10 w-[250px] h-[180px] bg-gray-500/25"></div>
                        </motion.div>
                        </div>
                        <div className="relative">
                        <img src={bgMain} className="relative z-50 h-[500px] w-[400px] img-shadow rounded-full top-[300px]"></img>
                        <motion.div initial={{opacity:0 , scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring",stiffness:100,damping:10,delay:1.2}} className="h-[180px] w-[180px] absolute top-64 -left-16 border-primary border-[20px] rounded-full z-10"></motion.div>
                        <div className="absolute top-10 right-[400px] z-[1]">
                        <h1 className="text-[140px] scale-150 font-bold text-darkGray/90 leading-none">بلک کافی</h1>
                        </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </main>
    ) 
}

export default Hero;