import { motion } from "framer-motion"
import coffee1 from '../../assets/coffee1.jpg'
import coffee2 from '../../assets/coffee2.jpg'
import coffee3 from '../../assets/coffee3.jpg'

const cardVariants = {
    hidden:{opacity:0,y:20},
    visible:{opacity:0,y:0},
    transition:{type:"spring",stiffness:150,damping:10,ease:"easeInOut"}
}

const containerVariants = {
    hidden:{opacity:1},
    visible:{opacity:1},
    transition:{delay:0.6,staggerChildren:0.4}
}

const ServicesData = [
    {
        id: 1,
        image: coffee1,
        title: "قهوه داغ",
        subtitle: "چشم هایش قهوه ای بود و به حق فهمیده ام که قهوه از همه چیز در این جهان اعتیاد آور تر است"
    },
    {
        id: 2,
        image: coffee2,
        title: "قهوه سرد",
        subtitle: "گرمای دستان تونوشیدن یک فنجان قهوه تلخ صبحگاهی که با نگاه تو شیرین می شودتمام چیزی است که آرزوی آن را دارم …."
    },
    {
        id: 3,
        image: coffee3,
        title: "قهوه سیاه",
        subtitle: "تا زمانی که قهوه در جهان وجود دارد، اوضاع مگر می‌شود بد باشد؟"
    }
]

function Services() {
    return <div className="container my-16 space-y-4">
        <div className="text-center max-w-lg mx-auto space-y-2">
            <motion.h1 className="text-3xl font-bold text-lightGray">
                تازه و<span className="text-primary">خوشمزه</span>
            </motion.h1>
            <motion.p className="text-xl opacity-50 font-bold " initial={{opacity:0 , y:-100}} animate={{opacity:1, y:0}} transition={{type:"spring",stiffness:100,damping:10,delay:1.4}} >یک حبه قند تلخی قهوه تو را شیرین نمی کند دنیای تلخ من اگر تو نباشی شیرین نمیشود.</motion.p>
        </div>
        <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{amount:0.8}} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {ServicesData.map((Service)=>(
                <div key={Service.id} className="text-center p-4 space-y-6">
                    <img src={Service.image} className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"></img>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-primary">{Service.title}</h1>
                        <p className="text-darkGray ">{Service.subtitle}</p>
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
}

export default Services;