"use client"

import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

import IDashboard from '/public/Dashboard.js';
import IEarlyRisk from '/public/EarlyRisk.js';
import IRedemption from '/public/Redemption.js';
import IMonitoringTarget from '/public/MonitoringTarget.js';
import back from 'public/back.svg'


import Dashboard from './components/Dashboard';
import MonitoringTarget from './components/MonitoringTarget';
import SIPBook from './components/SIPBook';
import Redemption from './components/Redemption';
import Portfolio from './components/Portfolio';
import EarlyRisk from './components/EarlyRisk';
import ClientRisk from './components/ClientRisk';
import ChangePassword from './components/ChangePassword';

export default function Content() {


    const [active, setActive] = useState('dashboard');
    const [navOpen, setNavOpen] = useState(true);

    const [viewProfile, setViewProfile] = useState(false)
    
    function handleRoute(route) {
        setActive(route)
    }

    return (
        <ThemeProvider theme={theme} >
            <div className=' overflow-auto relative'>
                <div>
                    <Box sx={{ flexGrow: 1, zIndex: 1 }}>
                    <AppBar position={(false)?"static":"absolute"} sx={{height: '60px', backgroundColor: "white", px: '40px', boxShadow: '0px 3px 6px #0000001A', top:0, left:0, '& .MuiToolbar-regular': {padding: '0px'}}}>
                        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                        <div className='flex gap-x-[10px] items-center'>
                            <Link href={'/'}><Image src='/logo.svg' width={125} height={36} /></Link>
                        </div>

                        <div className='flex gap-x-[30px] items-center relative'>
                            
                            <button className='relative w-[38px] h-[38px] text-[#0084FF] rounded-full bg-[#D8ECFF] font-bold text-[18px] flex items-center justify-center' onClick={()=>setViewProfile(true)} onBlur={()=>setViewProfile(false)} >
                                B
                                {
                                    viewProfile && 
                                    <div className='pointer-events-auto cursor-default font-medium' >
                                        <div className='absolute right-[10px] bottom-[-14px] shadow-[0px_0px_10px_#00000026] bg-gradient-radial from-[#00000026] to-white rounded-t-[10px]'>
                                            <div className=' border-[#ffffff] opacity-100 border-x-[10px] border-b-[12px] border-x-transparent h-0 w-0' />
                                        </div>
                                        <div className='absolute bottom-[-384px] right-[-10px] bg-white w-[267px] h-[375px] rounded-[20px] shadow-[0px_3px_8px_#00000026] p-[20px] text-black text-[15px] flex flex-col gap-y-[15px] items-center '>
                                            <div className='flex gap-x-[10px] px-[10px] items-center '>
                                                <div className='overflow-clip text-ellipsis font-semibold w-[168px] h-[20px] text-left whitespace-nowrap'>Kishore Kumar Palaniswamy</div>
                                            </div>


                                            <div className='border-b-[1px] h-0 w-full' />

                                            <div className='flex flex-col gap-y-[18px] w-full'>
                                                
                                            </div>
                                        </div>
                                    </div>
                                }
                            </button>
                        </div>
                        </Toolbar>
                    </AppBar>
                    </Box>

                    <div className={`flex h-[calc(100vh-60px)] relative ${(!(false)) && ' mt-[60px]'} `}> {/* */}
                        
                        {/* {
                            (notificationMessage == 'Portfolio Deleted Successfully' || notificationMessage == 'Successfully Downloaded' ) &&
                            <div className='absolute z-[1] top-[20px] right-[45px] bg-[#E2FFEE] rounded-[6px] border-[2px] border-[#04A345] p-[10px] flex gap-x-[10px] items-center'>
                                <CheckCircleRoundedIcon className='text-[#04A345]' />
                                <p className=' text-[#04A345] text-[14px] font-bold'>{notificationMessage}  </p>
                            </div>
                        } */}
                        {/* navigation segment */}
                        <div className={` h-full py-[35px] px-[20px] flex flex-col gap-y-[30px] overflow-y-scroll overflow-x-hide text-[14px] font-medium text-[#6E6E72] ${(navOpen)? 'w-[250px] ': 'w-[61px]'} transition-all duration-[0.6s] `}>

                            <Image src={back} className={`absolute ${(navOpen) ? 'left-[240px]' : 'left-[51px]  rotate-180'} z-[2] cursor-pointer  transition-all duration-[0.6s] `} onClick={()=>{setNavOpen(!navOpen)}} />

                            <div className='flex gap-x-[14px] items-center relative'>
                                {(active==='dashboard') && <div className='absolute w-[3px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('dashboard')}}><IDashboard active={active} /></span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='dashboard' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('dashboard')}} >Dashboard</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative'>
                                {active === 'monitoring-target' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('monitoring-target');}}><IMonitoringTarget active={active} /></span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='monitoring-target' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('monitoring-target')}} >Monitoring Target</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative'>
                                {active === 'sipbook' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('sipbook')}}></span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='sipbook' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('sipbook')}} >SIP Book</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative'>
                                {active === 'redemption' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('redemption')}}>< IRedemption active={active} /></span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='redemption' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('redemption')}} >Redemption Dashboard</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative'>
                                {active === 'portfolio' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{ handleRoute('portfolio')}}> </span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='portfolio' && 'font-semibold text-primary'}`} onClick={()=>{ handleRoute('portfolio')}} >Portfolio Review</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative'>
                                {active === 'early-risk' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('early-risk')}}><IEarlyRisk active={active} /></span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='early-risk' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('early-risk')}} >Early Risk Warning System</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative'>
                                {active === 'client-risk' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('client-risk')}}> </span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='client-risk' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('client-risk')}} >Client level Risks</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative'>
                                {active === 'password' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('password')}}> </span>
                                <h6 className={`cursor-pointer ${navOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-[1s] w-[175px] shrink-0 ${active==='password' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('password')}} >Change Password</h6>
                            </div>

                        </div>

                        {/* page segment */}
                        <div className={`bg-[#F5F7FE] h-full ${!navOpen ? 'w-[calc(100vw-61px)]' :'w-[calc(100vw-250px)]'} duration-[0.6s] transition-all overflow-auto z-0`}>

                            {
                                (active==='dashboard' && <Dashboard /> )||
                                (active==='monitoring-target' && <MonitoringTarget /> )||
                                (active==='sipbook' && <SIPBook /> )||
                                (active==='redemption' && <Redemption /> )||
                                (active==='portfolio' && <Portfolio /> )||
                                (active==='early-risk' && <EarlyRisk /> )||
                                (active==='client-risk' && <ClientRisk /> )||
                                (active==='password' && <ChangePassword /> )
                            }

                        </div>

                    </div>
                </div>   
            </div>
        </ThemeProvider>
    );
}