'use client';

import { ThemeProvider } from "@emotion/react";
import NavBar from "../components/register-with-us/NavBar";
import theme from "../theme";
import Image from "next/image";
import Link from "next/link";

const ServerError = () => {

    return (
        <ThemeProvider theme={theme}>
        <NavBar />
            <div className="pt-[30px] px-[80px] font-poppins text-[14px] flex flex-col justify-center items-center">
                <Image 
                    src="/login/serverError@2x.png"
                    alt="Internal Server Error"
                    width={303}
                    height={242}
                    className="mt-[152px]"
                />
                <div className="flex flex-col justify-center items-center mt-[44px] gap-[20px]">
                    <div className="text-[20px] leading-[14px] font-semibold">Internal Server Error</div>
                    <div className="text-[14px] font-medium">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                    <Link href='/login' className="w-[120px] h-[42px] bg-primary text-white font-semibold rounded-[25px] flex justify-center items-center">Go Back</Link>
                </div>                
            </div>
        </ThemeProvider>
    )
}

export default ServerError;