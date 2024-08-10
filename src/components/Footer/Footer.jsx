import {FaFacebook,FaGoogle,FaInstagram,FaPhone,FaTelegram} from "react-icons/fa6"
import {FaMapLocation} from "react-icons/fa6"
import CreditCarrds from "../../assets/credit.png"

function Footer() {
    return <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">بلک کافه</h1>
                    <p className="text-sm max-w-[300px]">قهوه ات را بنوش و باور کن  من به فنجان تو نمی گنجم </p>
                    <div>
                        <p className="flex items-center gap-2 mt-6"><FaPhone></FaPhone>09126660266</p>
                        <p className="flex items-center gap-2 mt-6"><FaMapLocation></FaMapLocation>زعفرانیه خیابان بهار کوچه صدیقی</p>
                    </div>
                    <div className="space-y-6">
                        <p className="text-3xl font-bold">لینک های دسترسی سریع</p>
                    </div>
                    <div className="grid-cols-2 gap-3">
                        <div>
                            <ul className="space-y-2">
                                <li>خانه </li>
                                <li>درباره ما</li>
                                <li>تماس با ما</li>
                                <li>حریم شخصی</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                <h1 className="text-3xl font-bold">ما را دنبال کنید</h1>
                <div className="flex items-center gap-3">
                    <FaFacebook className="text-3xl hover:scale-105 duration-300"></FaFacebook>
                    <FaInstagram className="text-3xl hover:scale-105 duration-300"></FaInstagram>
                    <FaTelegram className="text-3xl hover:scale-105 duration-300"></FaTelegram>
                </div>
                </div>
            </div>
            <p className="text-white text-center mt-8 border-t-2">copyRight &copy; 2024 ErfanTimaji All Right Reserved</p>
        </div>
    </div>
}

export default Footer;