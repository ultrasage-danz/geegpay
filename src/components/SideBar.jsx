// Imports
import React from 'react'
import Logo from './../assets/Logo1.png'
import Logo1 from './../assets/Logo.png'
import arrow_right from './../assets/arrow-right.png'
import settings from './../assets/setting-2.png'
import logout from './../assets/logout.png'
import category from './../assets/category.png'
import Icon from './../assets/Icon.png'
import trend from './../assets/trend-up.png'
import box from './../assets/box.png'
import discount from './../assets/discount-shape.png'
import circle from './../assets/info-circle.png'
import moon from './../assets/moon 1.png'
import sun from './../assets/sun.png'
import vector from './../assets/vector.png'
import trend_up from './../assets/trending-up.png'
import './bars.css'
import ModeToggle from './ModeToggle'
// Side Bar function
function SideBar(){
    return(
        <div className="sidebar bg-back py-5 h-876 w-20 space-y-2.5 dark:bg-black">
            <div className='Container/Menu bg-back w-full inline-block space-y-64 self-center h-auto  pt-0.5  flex-col'>
                {/* Main Menu */}
                <div className=' Main-Menu w-full items-center inline-block flex-col space-y-5'>
                    <img className='w-10 h-10 ml-5' src= {Logo}/>
                    
                        <div className='Frame 8 w-full inline-block flex-col space-y-4'>
                            <div className='active:bg-gray-100/60 active:border-r-[3px] active:mr-2 active:rounded-r-sm  active:border-gray-600/60 Component 8 Fill w-full flex flex-row h-10 space-x-auto px-2.5 py-2.5'>
                                <div className='Frame12 cursor-pointer ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='stretch w-6 h-6' src= {category}/>

                                </div>
                            </div>
                            <div className='active:bg-gray-100/60 active:border-r-[3px] active:mr-2 active:rounded-r-sm  active:border-gray-600/60 Icon Fill w-20 flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 cursor-pointer ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='stretch w-6 h-6' src= {trend}/>
                                    
                                </div>
                                
                            </div>
                            <div className='active:bg-gray-100/60 active:border-r-[3px] active:mr-2 active:rounded-r-sm  active:border-gray-600/60 Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 cursor-pointer ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='stretch  w-6 h-6' src= {Icon}/>

                                </div>
                            </div>
                            <div onClick={box} className='active:bg-gray-100/60 active:border-r-[3px] active:mr-2 active:rounded-r-sm  active:border-gray-600/60 Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 cursor-pointer ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='stretch   w-6 h-6' src= {box}/>

                                </div>
                            </div>
                            <div className='active:bg-gray-100/60 active:border-r-[3px] active:mr-2 active:rounded-r-sm  active:border-gray-600/60 Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 cursor-pointer ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='stretch  w-6 h-6' src= {discount}/>

                                </div>
                            </div>
                            <div className='active:bg-gray-100/60 active:border-r-[3px] active:mr-2 active:rounded-r-sm  active:border-gray-600/60 Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5 '>
                                <div className='Frame12 cursor-pointer ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='stretch  stretch w-6 h-6  hover:back3 hover:rounded-full' src= {circle}/>

                                </div>
                            </div>
                            <div className='Thame md:w-5 w-20 inline-flex relative k h-auto flex-row space-x-2.5 px-2.5 align-middle'>
                                
                                <div className='Theme ml-[19px] inline-flex h-70 w-7.5 rounded-3xl  px-2 space-x-2 flex-col items-center justify-center bg-white'>
                                    <div  className='items-start px-2 Frame inline-flex  h-70 rounded-3xl bg-white w-10 flex-col space-y-2'>
                                    <div id="mode-toggle" className='cursor-pointer space-y-1'>
                                        <svg class="dark:block block" width="40" height="20" xmlns="http://www.w3.org/2000/svg">
                                            <path width="40" class="dark:fill-white fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                                            <path width="40" class="dark:fill-white fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                                        </svg>
                                        <svg class="dark:block block" width="40" height="20" xmlns="http://www.w3.org/2000/svg">
                                            <path class="dark:fill-white fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                                            <path class="dark:fill-white fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                                        </svg>
                                    </div>
                                    {/* <div className='py-6 '><ModeToggle></ModeToggle></div> */}
                                    
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                
                {/* Other Menu */}
                <div className=' Other-Menu w-20 inline-flex flex-col h-auto space-y-4 bg-back'>
                    <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                        <div className='drop-shadow-sm hover:drop-shadow-2xl cursor-pointer Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                            <img className='stretch  w-6 h-6' src= {arrow_right}/>

                        </div>
                    </div>
                    
                    <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                        <div className='Frame12 ml-5 rounded-lg cursor-pointer flex-row w-10 h-10'>
                            <img className='stretch  w-6 h-6' src= {settings}/>

                        </div>
                    </div>
                    <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                        <div className='Frame12 ml-5 rounded-lg cursor-pointer flex-row w-10 h-10'>
                            <img className='stretch  w-6 h-6' src= {logout}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        
    )
}

export default SideBar