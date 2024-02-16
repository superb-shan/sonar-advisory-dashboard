"use client"

import { ThemeProvider } from "@mui/material";
import theme from '../../../theme.js'
import Table from "./Table.js";
import { useEffect, useState } from "react";
import Arrow from "/public/partner/Arrow.js";
import Logo from '/public/Logo.json'
import Lottie, { useLottie } from "lottie-react";


export default function CustomTable({data, headers, setActive, pagination=true, headerStyle}) {

    function splitData (data) {
        let data10 = [];
        let tenDatas = [];
        data.map(ele => {
            tenDatas.push(ele);
            if (tenDatas.length === 10) {
                data10.push(tenDatas);
                tenDatas = [];
            }
        })
        if (tenDatas.length > 0) {
            data10.push(tenDatas);
        }
        setDividedData(data10);
        setDividedDataLength(data10.length);
        if (data10.length<=1) setBackActive(false);
        else setBackActive(true);
        setPageNo(0);
        setFrontActive(false);
    }

    const [dividedData, setDividedData] = useState([]);
    const [dividedDataLength, setDividedDataLength] = useState(0);

    useEffect(()=>{
        splitData(data)
    },[data])

    useEffect(()=> {
        setLoading(true);
        setTimeout(()=>setLoading(false), 1500)
    }, [])

    const [frontActive, setFrontActive] = useState(false);
    const [backActive, setBackActive] = useState(true);
    const [pageNo, setPageNo] = useState(0);

    const [pageArray, setPageArray] = useState([2,3,4]);

    const pageUpdate = (pageNo)=>{
        if (dividedDataLength<=4) return;
        if (pageNo<3) {
            pageArray[0] = 2; pageArray[1] = 3; pageArray[2] = 4;
            setPageArray(pageArray)
        }
        else if (pageNo>dividedDataLength-4) {
            pageArray[0] = dividedDataLength-3; pageArray[1] = dividedDataLength-2; pageArray[2] = dividedDataLength-1;
            setPageArray(pageArray)
        }
        else {
            pageArray[0] = pageNo; pageArray[1] = pageNo+1; pageArray[2] = pageNo+2;
            setPageArray(pageArray)
        }
    }

    const pageNoClick = (n) => {
        setPageNo(n);
        pageUpdate(n);
        if(n == dividedDataLength-1) setBackActive(false);
        else setBackActive(true);
        if(n == 0) setFrontActive(false);
        else setFrontActive(true);
    }

    const [loading, setLoading] = useState(true)

    
    return(

        (loading) ?
            <div className={` bg-white p-[20px] rounded-[15px] ${(headers[0] == 'S.No')?' h-[300px] ':' h-[600px] '}`}>
                <Lottie animationData={Logo} lopp={true} className="h-full" />
            </div>
            :
            <ThemeProvider theme={theme} >
                {/* Table content */}
                <Table headers={headers} tenData={dividedData[pageNo]} setActive={setActive} headerStyle={headerStyle} />

                {/* Page Number Navigator */}
                {
                    (pagination) &&
                    <div className="flex items-center justify-center" >

                        <div className="flex gap-x-[30px] leading-[20px] font-medium text-[14px] items-center">

                            {/* Previous Button */}
                            <button className={`flex items-center gap-x-[5px] ${frontActive ? 'cursor-pointer' : 'cursor-default'}`} 
                                onClick={ () => {
                                    if(frontActive) { 
                                        setPageNo(pageNo-1);
                                        pageUpdate(pageNo-1);
                                        if(pageNo-1 == 0) setFrontActive(false);
                                        setBackActive(true) 
                                    }
                                }}
                            >
                                <Arrow active={frontActive} left={true} />
                                <p className={` ${frontActive?"text-[#0071e7]":"text-[#6e6e72]"} `} >Previous</p>
                            </button>

                            <div className="flex items-center font-medium">
                                <button onClick={()=>pageNoClick(0)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == 0 && dividedDataLength>1) && 'text-white bg-primary'} `}>{1}</button>
                                <button className={`h-[35px] w-[35px] flex items-center justify-center cursor-default ${ (pageNo<3 || dividedDataLength<=4) && 'hidden ' } `}>...</button>
                                <button onClick={()=>pageNoClick(pageArray[0]-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == pageArray[0]-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=1) && 'hidden ' } `}>{pageArray[0]}</button>
                                <button onClick={()=>pageNoClick(pageArray[1]-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == pageArray[1]-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=2) && 'hidden ' } `}>{pageArray[1]}</button>
                                <button onClick={()=>pageNoClick(pageArray[2]-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == pageArray[2]-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=3) && 'hidden ' } `}>{pageArray[2]}</button>
                                <button className={`h-[35px] w-[35px] flex items-center justify-center cursor-default ${ (pageNo>dividedDataLength-4 || dividedDataLength<=4) && 'hidden ' } `}>...</button>
                                <button onClick={()=>pageNoClick(dividedDataLength-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == dividedDataLength-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=4) && 'hidden ' } `}>{dividedDataLength}</button>
                            </div>
                            
                            {/* Next Button */}
                            <button className={`flex items-center gap-x-[5px] ${backActive ? 'cursor-pointer' : 'cursor-default' }`} 
                                onClick={ () => {
                                    if(backActive) {
                                        setPageNo(pageNo+1);
                                        pageUpdate(pageNo+1);
                                        if(pageNo+1 == dividedDataLength-1) setBackActive(false);
                                        setFrontActive(true) 
                                    }
                                }}
                            >
                                <p className={` ${backActive?"text-[#0071e7]":"text-[#6e6e72]"} `} >Next</p>
                                <Arrow active={backActive} />
                            </button>
                            
                        </div>
                    </div>
                }
            </ThemeProvider>
    );
}