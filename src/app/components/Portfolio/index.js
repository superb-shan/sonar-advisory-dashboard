import Image from "next/image";
import { CustomTextField } from "../InputFields";
import SearchIcon from '@mui/icons-material/Search';
import data from './data.json';
import { useRef, useState } from "react";
import CheckBoxName from "./CheckBoxName";
import { Checkbox } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import rightArrow from "/public/Group 547353.svg";
import leftArrow from "/public/Group 547354.svg";
import whatsappIcon from "/public/Group 549708.svg";
import telegramIcon from "/public/Path 238665.svg";

export default function Portfolio() {

    // for(let i in data) {
    //     console.log(i)
    //     if (typeof data[i] == 'object') {
    //         for (let j in data[i]) console.log(j)
    //     }
    // }

    const tableNameRef = useRef();
    const tableBasicDetailsRef = useRef();
    const tableAssetAllocationRef = useRef();
    const tableCashAllocationRef = useRef();
    const tablePortfolioQualityRef = useRef();

    function handleScroll(pos) {
        tableNameRef.current.scroll({top: pos});
        tableBasicDetailsRef.current.scroll({top: pos});
        tableAssetAllocationRef.current.scroll({top: pos});
        tableCashAllocationRef.current.scroll({top: pos});
        tablePortfolioQualityRef.current.scroll({top: pos});
    }

    const [selectedOption,setSelectedOption]=useState("basicDetails");

    const [checked, setChecked] = useState([false,false,false,false,false]);
    const [selectAll, setSelectAll] = useState(false);
    const handleChecked = i => {
        setChecked(checked.map((e, index) => {
            if (index == i) return !e;
            return e;
        }))
    }
    const handleCheckAll = (val) => {
        setChecked(Array(checked.length).fill(val))
    }

    const [showClientInfo, setShowClientInfo] = useState(-1);

    return (
        <div className="bg-white m-[20px] rounded-[10px] p-[20px] h-[calc(100vh-104px)]">
            <div className="flex justify-between items-center pb-[30px] pt-[10px]">
                <h1 className="text-[18px] font-bold leading-[20px]">Client Portfolio Moniter</h1>
                <div className="flex gap-x-[20px]">
                    <CustomTextField width="309px" label={<div className="flex gap-x-[8px] justify-center items-center"><SearchIcon className="text-[20px] text-[#0071E7]" /><p>Search</p></div>} />
                    <button className="flex items-center justify-center border-[1px] border-[#E4E5E5] hover:border-[#6f7070] rounded-[7px] gap-x-[10px] h-[40px] w-[100px]"><div className="text-[14px] text-[#6E6E72] font-medium leading-[18px]">Filter</div></button>
                </div>
            </div>
           
            <div className="flex">
                <div className="w-[210px] ml-[-15px]">
                    <div className="flex gap-x-[15.68px] h-[34px] items-center pl-[10px]">
                        <div className="text-[14px] text-[#6E6E72]">Share via</div>
                        <Image src={whatsappIcon}/>
                        <Image src={telegramIcon}/>
                    </div>
                    <table>
                    <thead>
                    <th className="h-[54px] max-w-[192px] pt-[10px] flex items-center text-[12px] text-[#6E6E72] font-normal">
                        <Checkbox 
                            checked={selectAll} 
                            onChange={(e)=> {
                                setSelectAll(e.target.checked); 
                                handleCheckAll(e.target.checked) 
                            }}
                            sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: '20px',
                                },
                                color: '#c2c2c5',
                                margin: "-5px"
                            }}
                        />
                        <p>Client Name</p>
                    </th>
                    </thead>

                    <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar z-[0]" ref={tableNameRef} onScroll={()=>{handleScroll(tableNameRef.current.scrollTop) }}>
                    <tbody >
                        {
                            data.clients.map( (client, i) => 
                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                    <CheckBoxName index={i} checked={checked} handleChecked={handleChecked} /> 
                                    <p>{client["Client Name"]}</p>
                                    <div onMouseOver={()=>setShowClientInfo(i)} onMouseLeave={()=>setShowClientInfo(-1)} className="relative">
                                        <InfoOutlinedIcon className="ml-[5px] mb-[-2px] text-[13px] text-primary " />
                                            <div className={` ${(showClientInfo == i) ? "opacity-100 cursor-auto": 'opacity-0 hidden'} absolute flex flex-col h-auto w-[250px] top-[20px] left-[-125px] bg-white rounded-[10px] shadow-[0px_3px_8px_#00000026] z-[3] `}>
                                                <h6 className="h-[40px] border-b-[1px] border-[#f6f6f6] px-[20px] py-[10px] ">{client["Client Name"]}</h6>
                                                <div className="py-[10px] px-[20px] flex-col flex gap-y-[10px]">
                                                    <p>Email : {client["Email"]}</p>
                                                    <p>Mobile : {client["Mobile"]}</p>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </tr>
                            ) //<input value={''} type="checkbox" className="appearance-none  w-[16px] h-[16px] rounded-[3px] border-[2px] border-solid outline-none border-[#ceced0] checked:bg-primary" />
                        }
                    </tbody>
                    </div>

                    </table>
                
                </div>
                <div className="flex flex-col">
                    <div className="h-[34px] flex gap-x-[10px] overflow-x-scroll text-[14px] text-[#BEBEBE] font-bold"> 
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='basicDetails'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('basicDetails')}}>Basic Details</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='assetAllocationRisk'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('assetAllocationRisk')}}>Asset Allocation Risk</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='cashAllocation'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('cashAllocation')} }>Cash Allocation</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='portfolioQualityRisk'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('portfolioQualityRisk')} }>Portfolio Quality Risk</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='diversityRisk'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('diversityRisk')} }>Diversification Risk</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='liquidity'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('liquidity')} }>Liquidity</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='cost'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('cost')} }>Cost</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='equityMonitor'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('equityMonitor')} }>Equity Monitor</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='debtMonitor'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('debtMonitor')} }>Debt Monitor</button>
                        <button className={`rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='sipBook'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{setSelectedOption('sipBook')} }>SIP Book</button>
                    </div>

                    <div className="flex overflow-x-scroll w-[calc(100vw-507px)] p-[10px] gap-x-[10px] no-scrollbar ">

                        <div className=" border-[2px] border-[#7EB7F270] rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]">
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[130px] justify-end flex items-center text-[12px] text-[#6E6E72] font-normal pr-[10px]">AUM</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p className="w-[135px]">Net Inflow YTD (without MTM)</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p className="w-[135px]">Net Inflow Growth (without MTM)</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p className="w-[135px]">Since Inception Returns</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>RiskScore</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableBasicDetailsRef} onScroll={()=>{handleScroll(tableBasicDetailsRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[130px] justify-end flex items-center pr-[10px]">{client["Basic Details"]["AUM"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["Net Inflow YTD (without MTM)"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["Net Inflow Growth (without MTM)"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["Since Inception Returns"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["RiskScore"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>
                        
                        <div className=" border-[2px] border-[#7EB7F270] rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]">
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">ABC Number</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Equity Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Target Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Equity Exposure Deviation</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Debt Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Gold & Others Exposure</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableAssetAllocationRef} onScroll={()=>{handleScroll(tableAssetAllocationRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["ABC Number"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Equity Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Target Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Equity Exposure Deviation"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Debt Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Gold & Others Exposure"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div className=" border-[2px] border-[#7EB7F270] rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]">
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">Overnight/Liquid Exposure</th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableCashAllocationRef} onScroll={()=>{handleScroll(tableCashAllocationRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Cash Allocation"]["Overnight/Liquid Exposure"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div className=" border-[2px] border-[#7EB7F270] rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]">
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">5 star rated funds</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>4 star rated funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Low Rated Fund</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Not Rated Fund Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>FundsIndia Select Fund Exposure</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tablePortfolioQualityRef} onScroll={()=>{handleScroll(tablePortfolioQualityRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["5 star rated funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["4 star rated funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["Low Rated Fund"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["Not Rated Fund Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["FundsIndia Select Fund Exposure"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                    </div>
                </div>
                <div className="w-[41px] h-[30px] flex gap-x-[20px]">
                    <Image src={leftArrow}/>
                    <Image src={rightArrow}/>
                    
                </div>
            </div>
        </div>
    )
}