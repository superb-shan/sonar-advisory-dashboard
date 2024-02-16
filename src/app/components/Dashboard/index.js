import { useState } from "react"
import Image from "next/image";

import data from './data.json';
import Avathar from 'public/Dashboard/Group 549729/Group 549729@2x.png';
import sort from 'public/Dashboard/sort.svg';
import target from 'public/Dashboard/Group 509017.svg';
import people from 'public/Dashboard/Group 509081.svg'
import down from 'public/Dashboard/Group 508930.svg'
import up from 'public/Dashboard/Group 508929.svg'
import calender from 'public/Dashboard/Group 508995.svg'
import dot from 'public/Dashboard/Group 508926.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Dashboard() {
    const [isCritical, setisCritical] = useState(true);
    return (
        <div className="p-[30px] scroll-auto text-[14px] flex flex-col gap-y-[20px]">

            {/* Name Container */}
            <div className="h-[82px] flex justify-between items-center">
                <div className="flex">
                    <div className="w-[70px] h-[70px]">
                        <CircularProgressbar value={(+data.tasks.today) / (+data.tasks.total) * 100} strokeWidth={"5"} styles={buildStyles({ pathColor: "#0171e7", })} />
                    </div>
                    <Image className="w-[55px] h-[55px] -ml-[63px] mt-[8px]" src={Avathar} />
                    <div className="ml-[20px] flex flex-col gap-[10px]">
                        <p className="font-bold mt-[10px] text-[18px] leading-[15px]">Good Evening Bruce!👋</p>
                        <p className="font-medium text-[#6E6E72]">Have an in-depth look at all the metrics within your dashboard</p>
                    </div>
                </div>
                <div className="flex gap-[42px]">
                    <p>Remaining calls: <strong>{data.tasks.remainingCalls}</strong></p>
                    <p>Task Today: <strong>{data.tasks.today + "/" + data.tasks.total}</strong></p>
                </div>
            </div>

            {/* Critical/Others */}
            <div className="bg-white w-full p-[20px] rounded-[10px] ">
                <div className="flex justify-between">
                    <div className="flex w-[272px] gap-[38px] justify-center pb-[8px]">
                        <button className={`text-[16px] px-[30px] ${isCritical && 'font-bold'}`} onClick={() => { setisCritical(true) }}>Critical</button>
                        <button className={`text-[16px] px-[30px] ${!isCritical && 'font-bold'}`} onClick={() => { setisCritical(false) }}>Others</button>
                    </div>
                    <div className="flex gap-[4px] pr-[20px]">
                        <Image src={sort} />
                        <button className="text-[#6E8CA0] text-[14px] font-medium">Sort</button>
                    </div>
                </div>

                <div className="w-[272px] relative flex h-[2px] bg-[#EDEDED] rounded-[5px] mb-[18px]">
                    <div className={`absolute left-0 ${!isCritical && ' translate-x-[150px] '} w-[122px] h-[4px] rounded-[5px] bg-primary transition-[all_0.4s] `} />
                </div>
                {

                    (isCritical) ?
                        <div className="max-h-[200px] overflow-auto">
                            <table class="w-full table-fixed text-left text-[14px]">
                                <thead className="text-[#6E6E72] text-[12px] sticky top-0">
                                    <tr className="align-top border-b-[1px] bg-white border-b-[#F2F2F2] [&>*:nth-child(1)]:w-[200px] [&>*:nth-child(2)]:w-[180px] [&>*:nth-child(3)]:w-[260px] [&>*:nth-child(4)]:w-[150px] [&>*:nth-child(4)]:pl-[70px] [&>*:nth-child(5)]:pl-[100px]">
                                        <th className="font-medium pb-[5px]">Client Name</th>
                                        <th className="font-medium pb-[5px]">Date</th>
                                        <th className="font-medium pb-[5px]">Task</th>
                                        <th className="font-medium pb-[5px]">Status</th>
                                        <th className="font-medium pb-[5px]">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data["Critical/Others"].Critical.map(person =>
                                            <>
                                                <tr className="align-top [&>*:nth-child(1)]:w-[200px] [&>*:nth-child(2)]:w-[150px] [&>*:nth-child(3)]:w-[260px] [&>*:nth-child(4)]:w-[150px] [&>*:nth-child(4)]:pl-[70px] [&>*:nth-child(5)]:pl-[100px]">
                                                    <td className="pt-[15px]" rowSpan={3}>{person.name}</td>
                                                    <td className="pt-[15px]">{person.data[0].date}</td>
                                                    <td className="pt-[15px]">{person.data[0].task}</td>
                                                    <td className="pt-[15px] text-[#EA9954] font-semibold">{person.data[0].status}</td>
                                                    <td className="pt-[15px] text-[#0066CD] font-semibold">{person.data[0].action}</td>
                                                </tr>
                                                <tr className="align-top [&>*:nth-child(1)]:w-[150px] [&>*:nth-child(2)]:w-[260px] [&>*:nth-child(3)]:w-[150px] [&>*:nth-child(3)]:pl-[70px] [&>*:nth-child(4)]:pl-[100px]">
                                                    <td className="pt-[15px]">{person.data[1].date}</td>
                                                    <td className="pt-[15px]">{person.data[1].task}</td>
                                                    <td className="pt-[15px] text-[#EA9954] font-semibold">{person.data[1].status}</td>
                                                    <td className="pt-[15px] text-[#0066CD] font-semibold">{person.data[1].action}</td>
                                                </tr>
                                                <tr className="align-top border-b-[1px] border-b-[#F2F2F2] [&>*:nth-child(1)]:w-[150px] [&>*:nth-child(2)]:w-[260px] [&>*:nth-child(3)]:w-[150px] [&>*:nth-child(3)]:pl-[70px] [&>*:nth-child(4)]:pl-[100px]">
                                                    <td className="pt-[15px] pb-[10px]">{person.data[2].date}</td>
                                                    <td className="pt-[15px] pb-[10px]">{person.data[2].task}</td>
                                                    <td className="pt-[15px] pb-[10px] text-[#EA9954] font-semibold">{person.data[2].status}</td>
                                                    <td className="pt-[15px] pb-[10px] text-[#0066CD] font-semibold">{person.data[2].action}</td>
                                                </tr>
                                            </>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                        :
                        <div className="max-h-[200px] overflow-auto">
                            <table class="w-full table-fixed text-left text-[14px]">
                                <thead className="text-[#6E6E72] text-[12px] sticky top-0">
                                    <tr className="align-top border-b-[1px] bg-white border-b-[#F2F2F2] ">
                                        <th className="font-medium pb-[5px]">Client Name</th>
                                        <th className="font-medium pb-[5px]">Date</th>
                                        <th className="font-medium pb-[5px]">Task</th>
                                        <th className="font-medium pb-[5px]">Status</th>
                                        <th className="font-medium pb-[5px]">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data["Critical/Others"].Others.map(person =>
                                            <>
                                                <tr className="align-top border-b-[1px] border-b-[#F2F2F2] [&>*:nth-child(1)]:w-[250px] [&>*:nth-child(2)]:w-[150px] [&>*:nth-child(3)]:w-[150px] [&>*:nth-child(4)]:w-[150px]">
                                                    <td className="pt-[15px] pb-[15px]">{person.name}</td>
                                                    <td className="pt-[15px] pb-[15px]">{person.date}</td>
                                                    <td className="pt-[15px] pb-[15px]">{person.task}</td>
                                                    <td className={`pt-[15px] pb-[15px] ${person.status === "Completed" ? 'text-[#6FC88D]' : "text-[#EA9954]"} font-semibold`}>{person.status}</td>
                                                    <td className={`pt-[15px] pb-[15px] ${person.status === "Completed" ? 'text-[#6FC88D]' : "text-[#0066CD]"} font-semibold`}>{person.action}</td>
                                                </tr>
                                            </>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                }
            </div>

            {/* Monitor */}
            <div className="flex items-center justify-between w-full bg-white gap-x-[40px] rounded-[10px] p-[20px]">
                <div className="flex flex-col w-3/5">
                    <div className="flex items-center justify-between mb-[20px]">
                        <h2 className="text-[16px] font-bold">Monitoring Target & Client AUM</h2>
                        <button className="text-[14px] font-semibold text-[#0066CD]">View All</button>
                    </div>
                    <div className="flex flex-col gap-y-[20px] items-start justify-between w-full">
                        <div className="flex w-full h-fit justify-center rounded-[9px] bg-[#FBFBFF] p-[20px]">
                            <div className="flex items-center w-2/5 gap-x-[20px]">
                                <Image className="w-[40px] h-[40px]" src={target} />
                                <div className="flex flex-col">
                                    <h3 className="text-[#6E6E72] text-[14px] font-medium">Target AUM</h3>
                                    <div className="text-[20px] font-semibold">10%</div>
                                </div>
                            </div>
                            <div className="h-[65px] border-[1px] border-[#F2F2F2] mx-[20px]" />
                            <div className="flex items-center w-3/5 gap-[20px]">
                                <Image className="w-[40px] h-[40px]" src={people} />
                                <div className="flex flex-col">
                                    <h3 className="text-[#6E6E72] text-[14px] font-medium">Current AUM</h3>
                                    <div className="flex gap-[81px]">
                                        <div className="text-[20px] font-semibold">8%</div>
                                        <div className="flex w-[67px] h-[25px] items-center justify-center rounded-[13px] bg-[#EA995420]">
                                            <Image className="w-[14px] h-[10px]" src={down} />
                                            <div className="text-[#EA9954] text-[16px] font-semibold">-2%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full h-fit justify-center rounded-[9px] bg-[#FBFBFF] p-[20px]">
                            <div className="flex items-center w-2/5 gap-x-[20px]">
                                <Image className="w-[40px] h-[40px]" src={target} />
                                <div className="flex flex-col">
                                    <h3 className="text-[#6E6E72] text-[14px] font-medium">Target SIP</h3>
                                    <div className="text-[20px] font-semibold">10%</div>
                                </div>
                            </div>
                            <div className="h-[65px] border-[1px] border-[#F2F2F2] mx-[20px]" />
                            <div className="flex items-center w-3/5 gap-[20px]">
                                <Image className="w-[40px] h-[40px]" src={people} />
                                <div className="flex flex-col">
                                    <h3 className="text-[#6E6E72] text-[14px] font-medium">Current SIP</h3>
                                    <div className="flex gap-[73px]">
                                        <div className="text-[20px] font-semibold">18%</div>
                                        <div className="flex w-[67px] h-[25px] items-center justify-center rounded-[13px] bg-[#6FC88D20]">
                                            <Image className="w-[14px] h-[10px]" src={up} />
                                            <div className="text-[#6FC88D] text-[16px] font-semibold">+3%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-2/5">
                    <div className="flex items-center justify-between mb-[20px]">
                        <h2 className="text-[16px] font-bold">Client Portfolio Monitor</h2>
                        <button className="text-[14px] font-semibold text-[#0066CD]">View All</button>
                    </div>
                    <div className="flex flex-col w-full h-full justify-center gap-y-[20px] rounded-[9px] bg-[#FBFBFF] p-[20px]">
                        <div className="flex items-center w-3/5 gap-[20px]">
                            <Image className="w-[40px] h-[40px]" src={people} />
                            <div className="flex flex-col">
                                <h3 className="text-[#6E6E72] text-[14px] font-medium">Total users</h3>
                                <div className="text-[20px] font-semibold">300</div>
                            </div>
                        </div>
                        <div className="flex items-center w-3/5 gap-[20px]">
                            <Image className="w-[40px] h-[40px]" src={target} />
                            <div className="flex flex-col">
                                <h3 className="text-[#6E6E72] text-[14px] font-medium">Total AUM</h3>
                                <div className="flex gap-[27px]">
                                    <div className="text-[20px] font-semibold">50,00,00,00</div>
                                    <div className="flex w-[67px] h-[25px] items-center justify-center rounded-[13px] bg-[#6FC88D20]">
                                        <Image className="w-[14px] h-[10px]" src={up} />
                                        <div className="text-[#6FC88D] text-[16px] font-semibold">+3%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-3/5 gap-[20px]">
                            <Image className="w-[40px] h-[40px]" src={people} />
                            <div className="flex flex-col">
                                <h3 className="text-[#6E6E72] text-[14px] font-medium">Total SIP</h3>
                                <div className="flex gap-[26px]">
                                    <div className="text-[20px] font-semibold">3,00,00,000</div>
                                    <div className="flex w-[67px] h-[25px] items-center justify-center rounded-[13px] bg-[#6FC88D20]">
                                        <Image className="w-[14px] h-[10px]" src={up} />
                                        <div className="text-[#6FC88D] text-[16px] font-semibold">+50%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SIP Book and Remainder */}
            <div className="flex items-center justify-between w-full gap-x-[20px]">
                <div className="h-[126px] flex flex-col w-2/5 gap-y-[15px] bg-white rounded-[10px] p-[20px]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[16px] font-bold">SIP Book</h2>
                        <button className="text-[#0066CD] font-semibold">View All</button>
                    </div>
                    <div className="flex justify-start gap-[114px]">
                        <div className="flex flex-col gap-y-[15px]">
                            <h3 className="text-[12px] text-[#6E6E72] font-medium">Total SIP Book</h3>
                            <p className="text-[20px] font-semibold leading-[12px]">300 Cr</p>
                        </div>
                        <div className="flex flex-col gap-y-[15px]">
                            <h3 className="text-[12px] text-[#6E6E72] font-medium">Total SIP Executed</h3>
                            <p className="text-[20px] font-semibold leading-[12px]">280 Cr</p>
                        </div>
                    </div>
                </div>
                <div className="h-[126px] w-3/5 bg-white rounded-[10px] p-[20px]">
                    <h2 className="text-[16px] font-bold mb-[20px]">Reminder</h2>
                    <div className="flex flex-col gap-y-[15px]">
                        <div className="w-full border-[7px] border-[#F2F2F2] rounded-[13px]" />
                        <div className="w-4/5 border-[7px] border-[#F2F2F2] rounded-[13px]" />
                    </div>
                </div>
            </div>

            {/* Redemption dashboard */}
            <div className="flex gap-x-[21px] mb-[17px]">
                <div className="flex items-center justify-between w-3/5 bg-white gap-x-[40px] rounded-[10px] p-[20px] h-[261px]">
                    <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between mb-[20px]">
                            <h2 className="text-[16px] font-bold leading-[12px]">Redemption Dashboard</h2>
                            <button className="text-[14px] font-medium text-[#0066CD]">View All</button>
                        </div>
                        <div className="flex flex-col gap-y-[20px] items-start justify-between w-full text-[14px]">
                            <div className="flex w-full justify-around">
                                <div className=" w-[48%] h-[84px] justify-center rounded-[9px] bg-[#FBFBFF] p-[20px]">
                                    <div className="flex gap-x-[20px]">
                                        <Image className="w-[32px] h-[32px]" src={people} />
                                        <div className="flex flex-col">
                                            <h3 className="text-[#6E6E72] width-[50px] text-[14px] font-medium">Total user on redemption page</h3>
                                            <div className="text-[20px] font-semibold">3000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[48%] h-[84px] justify-center rounded-[9px] bg-[#FBFBFF] p-[20px]">
                                    <div className="flex gap-[20px]">
                                        <Image className="w-[32px] h-[32px]" src={calender} />
                                        <div className="flex flex-col">
                                            <h3 className="text-[#6E6E72] text-[14px] font-medium">Total redemption today</h3>
                                            <div className="flex gap-[81px]">
                                                <div className="text-[20px] font-semibold">₹ 3,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full justify-around">
                                <div className=" w-[48%] h-[84px] justify-center rounded-[9px] bg-[#FBFBFF] p-[20px]">
                                    <div className="flex gap-x-[20px]">
                                        <Image className="w-[32px] h-[32px]" src={calender} />
                                        <div className="flex flex-col">
                                            <h3 className="text-[#6E6E72] width-[50px] text-[14px] font-medium">Total redemption MTD</h3>
                                            <div className="text-[20px] font-semibold">₹ 3,00,000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" w-[48%] h-[84px] justify-center rounded-[9px] bg-[#FBFBFF] p-[20px]">
                                    <div className="flex   gap-[20px]">
                                        <Image className="w-[32px] h-[32px]" src={calender} />
                                        <div className="flex flex-col">
                                            <h3 className="text-[#6E6E72] text-[14px] font-medium">Total redemption YTD</h3>
                                            <div className="flex gap-[81px]">
                                                <div className="text-[20px] font-semibold">₹ 4,00,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 h-[261px] flex flex-col rounded-[10px] bg-[#FFFFFF] p-[20px] gap-[15px]">
                    <div className="flex items-center justify-between mb-[5px]">
                        <h2 className="text-[16px] font-bold">Portfolio Review</h2>
                        <div className="text-[12px] flex gap-[5px] items-center"> <Image className="w-[14px]  h-[14px]" src={dot} /> <span>Include team's clients</span></div>
                    </div>

                    <div className="bg-[#FBFBFF] h-[46px] rounded-[9px] w-full p-[4px] flex gap-[25px] items-center">
                        <div className="h-[38px] w-[44px] bg-white rounded-[8px] flex justify-center items-center">
                            <p className="text-[20px] font-semibold">32</p>
                        </div>
                        <p>Due This Month</p>
                    </div>

                    <div className="bg-[#FBFBFF] h-[46px] rounded-[9px] w-full p-[4px] flex gap-[25px] items-center">
                        <div className="h-[38px] w-[44px] bg-white rounded-[8px] flex justify-center items-center">
                            <p className="text-[20px] font-semibold">2</p>
                        </div>
                        <p>Due This Week</p>
                    </div>

                    <div className="bg-[#FBFBFF] h-[46px] rounded-[9px] w-full p-[4px] flex gap-[25px] items-center">
                        <div className="h-[38px] w-[44px] bg-white rounded-[8px] flex justify-center items-center">
                            <p className="text-[20px] font-semibold">2</p>
                        </div>
                        <p>Overdue</p>
                    </div>

                    <div className="flex gap-[20px] mx-auto">
                        <button className="w-[136px] h-[34px] text-[#0066CD] text-[12px] font-semibold border-[#0066CD] bg-white border-[1px] rounded-[17px]">View All Reviews</button>
                        <button className="w-[136px] h-[34px] text-[#FFFFFF] text-[12px] font-semibold bg-[#0171E7] border-[#0066CD] border-[1px] rounded-[17px]">View All Clients</button>
                    </div>
                </div>
            </div>

            {/*Early warning System*/}
            <div className="w-full h-[429px] bg-white p-[20px] text-[#000308] font-semibold rounded-[10px] mb-[20px]">
                <p className="text-[16px] font-bold">Early Risk Warning System </p>
                <div className=" flex justify-between mt-[19px] h-[14px]">
                    <p className=" font-medium text-[#6E6E72]">Client  level Risks </p>
                    <p className="text-[#0066CD] font-medium cursor-pointer">View client list</p>
                </div>
                <div className="mt-[20px] flex justify-between gap-[60px] items-start">
                    <div className="w-[225px] h-[46px] bg-[#F8F9FF] flex justify-start items-center rounded-[9px]">
                        <span className=" w-[44px] h-[36px] bg-[#FFFF] flex  items-center justify-center font-semibold text-[20px] ml-[7px] rounded-[8px]">145</span>
                        <span className="pl-[21px] font-medium text-[14px] ml-[10px] ">Asset Allocation</span>
                    </div>
                    <div className="w-[225px] h-[46px] bg-[#F8F9FF] flex justify-start items-center rounded-[9px]">
                        <span className=" w-[44px] h-[36px] bg-[#FFFF] flex  items-center justify-center font-semibold text-[20px] ml-[7px] rounded-[8px]">14</span>
                        <span className="pl-[21px] font-medium text-[14px]">Portfolio Quality</span>
                    </div>
                    <div className="w-[225px] h-[46px] bg-[#F8F9FF] flex justify-start items-center rounded-[9px]">
                        <span className=" w-[44px] h-[36px] bg-[#FFFF] flex  items-center justify-center font-semibold text-[20px] ml-[7px] rounded-[8px]">14</span>
                        <span className="pl-[21px] font-medium text-[14px]"> Diversification</span>
                    </div>
                    <div className="w-[225px] h-[46px] bg-[#F8F9FF] flex justify-start items-center rounded-[9px]">
                        <span className=" w-[44px] h-[36px] bg-[#FFFF] flex  items-center justify-center font-semibold text-[20px] ml-[7px] rounded-[8px]">14</span>
                        <span className="pl-[21px] font-medium text-[14px]">Liquidity</span>
                    </div>

                </div>
                <div className="mt-[30px] font-medium text-[#6E6E72] ">
                    <p>Enterprise-wide Risks</p>
                    <div className=" mt-[10px] font-medium text-[#000000]">
                        <table className="w-full border-collapse ml-[20px]">
                            <thead>
                                <tr>
                                    <th className="p-4 text-left font-semibold text-[#000000] pl-[50px]">Risk</th>
                                    <th className="p-4 text-left font-semibold text-[#000000]">Description</th>
                                    <th className="p-4 text-left font-semibold text-[#000000] pl-[50px]">Clients</th>
                                    <th className="p-4 text-left font-semibold text-[#000000]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4 text-left text-[14px] w-[300px] pl-[50px]">Franklin Templeton Debt</td>
                                    <td className="p-4 text-left text-[14px] w-[350px] h-[32px]">consectetur adipiscing elit.    Donec ullamcorper aliquam interdum.</td>
                                    <td className="p-4 text-left pl-[50px] w-[250px] items-center flex flex-nowrap"> <div className=" w-[33px] h-[34px] mr-[6px]"><CircularProgressbar value={80 / 120 * 100} strokeWidth={"11"} /></div>
                                        <div><span className="text-[18px] font-bold pr-0 mr-0">80<span className=" pl-0 ml-0 text-[14px] font-bold">/120</span></span></div>
                                    </td>
                                    <td className="p-4 text-left  text-[#0066CD] cursor-pointer">View Client</td>
                                </tr>
                                <tr className=" ">
                                    <td className="p-4 text-left mb-[20px] pl-[50px]">Axis Bank</td>
                                    <td className="p-4 text-left mb-[20px]">Vivamus varius iaculis eleifend. Nam id tristique nulla, nec convallis nulla.</td>
                                    <td className="p-4 text-left mb-[20px] pl-[50px] flex items-center flex-nowrap"> <div className=" w-[33px] h-[34px] mr-[6px]"><CircularProgressbar value={90 / 300 * 100} strokeWidth={"11"} styles={buildStyles({ pathColor: "orange", })} /></div> <div><span className="text-[18px] font-bold">90<span className="text-[14px] font-bold">/300</span></span></div></td>
                                    <td className="p-4 text-left text-[#0066CD] mb-[20px] cursor-pointer">View Client</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="w-[136px] h-[34px] text-[#FFFFFF] text-[12px] font-semibold bg-[#0171E7] border-[#0066CD] border-[1px] rounded-[17px]">Portfolio Exposure</button>
                </div>
            </div>

            {/* SIP Analytics */}
            <div className="flex items-center justify-between w-full bg-white rounded-[10px] p-[20px]">
                <div className="w-2/3 flex flex-col">
                    <div className="text-[16px] font-bold pb-[15px]">SIP Analytics</div>
                    <div className="text-[14px] text-[#6E6E72]">SIP Trend, SIP stopped, SIP decreased, SIP expiring next month, SIP with no mandate, SIP with expiring mandate, Failed SIPs, etc.</div>
                </div>
                <button className="w-[136px] h-[34px] text-[#0066CD] text-[14px] font-semibold border-[#0066CD] border-[1px] rounded-[17px]">Analytics</button>
            </div>

            {/* SIP Analytics view */}
            <div className="flex items-center justify-between w-full bg-white rounded-[10px] p-[20px]">
                <div className="text-[16px] font-bold">SIP Analytics</div>
                <button className="w-[136px] h-[34px] text-[#0066CD] text-[14px] font-semibold border-[#0066CD] border-[1px] rounded-[17px]">View</button>
            </div>

            {/* Broker Change */}
            <div className="flex items-center justify-between w-full bg-white rounded-[10px] p-[20px]">
                <div className="text-[16px] font-bold">Broker Change</div>
                <button className="w-[136px] h-[34px] text-[#0066CD] text-[14px] font-semibold border-[#0066CD] border-[1px] rounded-[17px]">Broker</button>
            </div>

        </div>
    )
}