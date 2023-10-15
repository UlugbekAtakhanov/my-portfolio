
import Image from 'next/image';
import Login from "../Login/Login"
import {AppWrapper} from "../AppWrapper"

const Footer = () => {
        return (
            <div className="flex-1 bg-white pb-12 flex flex-col items-center justify-center bg- ">
                <h1 className="text-4xl font-semibold capitalize text-center px-4">take a coffee & chat with me</h1>

                <div className="flex flex-col md:flex-row items-center gap-12 my-12 w-full justify-center">
                    <div className="flex items-center gap-4 bg-rose-100 py-2 px-4 rounded  w-[330px] justify-center">
                        <div>
                            <Image src="/email.png" width={40} height={40} alt="img" />
                        </div>
                        <div className="text-sm text-gray-color ">
                            <p>ulugbekatakhanov93@gmail.com</p>
                            <p>atakhanov_ux@mail.ru</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-emerald-100 py-2 px-4 rounded  w-[330px] justify-center">
                        <div>
                            <Image src="/mobile.png" width={40} height={40} alt="img" />
                        </div>
                        <div className="text-sm text-gray-color ">
                            <p>+998 99 085 06 22</p>
                            <p>+998 90 642 06 22</p>
                        </div>
                    </div>
                </div>

                <Login />
            </div>
        );
}

export default AppWrapper(Footer, "contact", "sth");