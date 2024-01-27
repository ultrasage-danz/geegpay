import React from 'react'
import { motion } from "framer-motion"
import Search from './../assets/Seacrh.png'
import Group from './../assets/Group.png'
import Bell from './../assets/Bell.png'
import doc from './../assets/document-download.png'
import luffy from './../assets/luffy.jpg'
import dragon from './../assets/dragon.jpg'
import garp from './../assets/garp.jpg'
import sanji from './../assets/sanji.jpg'
import roger from './../assets/roger.jpg'
import arrow_down from './../assets/Arrow-Down-2.png'
import trends from './../assets/trending-up.png'
import trend from './../assets/trending-down.png'
import Bars from './bars'
import './bars.css'
import con1 from './../assets/con-1.svg'
import con2 from './../assets/con-2.svg'
import con3 from './../assets/con-3.svg'
import con4 from './../assets/con-4.svg'

function Container() {
  return (
    <div className='Conteiner flex-wrap relative max-w-fit h-1080 bg-back4 dark:bg-black'>
      {/* Header */}
      <div className='sm:1/6 md:1/5 lg:1/4 flex-wrap header items-center max-w-fit overflow-hidden h-22 space-y-4.5 bg-back4 dark:bg-black'>
        <hr className='w-1360 relative top-20 flex justify-center items-end bg-back5' />
        <div className=' Search-Icon w-1320 ml-5 mt-4.5 inline-flex h-auto flex-row space-x-[22px]'>
          <div className='mt-0.5 w-810 flex-row inline-flex h-auto justify-between'>
            <h1 className='text-content inline-block h-auto font-inter font-semibold text-xl leading-7  text-left align-top w-auto'>Dashboard</h1>
            
            <div className=' mr-4 relative justify-self-end'>
              <div  className="rounded-normal  absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 -mt-2.5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              </div>
              <input type={"search"} id="default-search" className=" rounded-huge flex w-349 h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
          
            </div>
            
          </div>
          <div className='flex-row space-x-5 inline-flex h-auto w-min  justify-between'>
            <div className='inline-flex h-auto w-min flex-row space-x-5 justify-end'>
              <div  className=' h-10 flex-row space-x-2 px-4 py-3 rounded-normal inline-flex rotate-0'>
                <div className='inline-flex h-5.5 w-40 space-x-2.5 flex-row'>
                  <div className='h-5 w-5 ease-in-out cursor-pointer hover:bg-gray-500/5 hover:rounded-full hover:justify-around hover:h-7 hover:w-7 '>
                    <img className='ml-0.5 mt-0.5 h-4 w-4 hover:ml-1.5 hover:mt-1 ' src={Group} alt="Group" />
                  </div>
                  <h1 className='text-sm font-inter  font-medium text-content leading-5.5 whitespace-nowrap overflow-hidden overflow-ellipsis'>May 8th 2024</h1>
                </div>
              </div>
              <div className='Bell h-10 w-10 rounded-normal flex-row space-x-1.5 px-2.5 py-2.5 border-strokes/30 border-2'>
                <div className='stretch drop-shadow-sm hover:drop-shadow-2xl h-5 w-5 ease-in-out cursor-pointer'>                  
                  <span class="relative ml-3 -mt-1 flex h-1 w-1">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-1 w-1 bg-red-500"></span>
                  </span>
                  <img className='-ml-0.5' src= {Bell}/>
                  
                </div>
              </div>
            </div>
            <div className='-mt-1 Login inline-flex cursor-pointer h-[52px] w-215 rounded-normal2 flex-row space-x-3 px-2 py-1.5 border-strokes/45 border-2'>
              <div className='inline-flex h-auto flex-row space-x-2 justify-start'>
                <div className='h-38 w-38 rounded-normal bg-slate-100'>
                  <img className='w-38 h-38 rounded-normal' src= {luffy}/>
                </div>
                <div className='inline-flex h-auto space-y-1 flex-col items-start justify-end'>
                  <h1 className='inline-flex h-auto text-content text-sm'> Monkey D. Luffy</h1>
                  <h1 className='inline-flex h-auto text-content text-xs font-inter font-thin'>monkeydluffy@gmail.com</h1>
                </div>
              </div>
              <div className='h-5 w-5 overflow-hidden mt-2'>
                <div className='mt-2.5 '>
                  <img className='w-3.5 h-2' src= {arrow_down}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className='w-1360 relative top-20 flex justify-center items-end bg-back5' /> */}
      </div>

      {/* Body */}
        {/* Chart */}
        <div className='sm:1/4 md:1/3 lg:1/2 flex-wrap bu w-806 h-374 rounded-norms bg-white flex items-center pl-6 pt-4.5 pb-4 pr-4 border-2 border-strike '>
          {/* <div className='w-806 h-374 rounded-norms bg-white flex items-center'> */}
            {/* <Chart/> */}
          {/* </div> */}
          
          <Bars ></Bars>
        </div>
        {/* Order */}
        <div className='sm:1/6 md:1/5 lg:1/4 flex-wrap bu w-806 h-461 mt-16 border-2 border-strike  rounded-norms bg-white flex flex-col'>
          {/* Orders */}
          <div className='flex ml-5 w-766 h-auto mt-4.5 space-x-[540px] flex-row '>
            <h1 className='font-inter font-semibold text-[18px] leading-6 w-full text-content inline-flex h-26 align-top'>Last Orders</h1>
            {/* <h1 className='font-inter font-semibold text-lg leading-6 w-full text-content inline-flex h-auto align-top'>Last Orders</h1> */}
            <h1 className='stretch  cursor-pointer mr-2 font-inter font-medium text-lg  leading-6 w-full text-see inline-flex h-auto align-top '>See All</h1>
          </div>
          <div className='flex ml-5 w-766 h-auto mt-5 flex-row space-x-10'>
            <h1 className='font-inter font-medium text-base leading-6 w-216 text-colors inline-flex h-auto align-top'>Name</h1>
            <h1 className='font-inter font-medium text-base leading-6 w-29 text-colors inline-flex h-auto align-top'>Date</h1>
            <h1 className='font-inter font-medium text-base leading-6 w-30 text-colors inline-flex h-auto align-top'>Amount</h1>
            <h1 className='font-inter font-medium text-base leading-6 w-24 text-colors inline-flex h-auto align-top'>Status</h1>
            <h1 className='font-inter font-medium text-base leading-6 w-20 text-colors inline-flex h-auto align-top'>Invoice</h1>
            {/* <h1 className='font-inter font-semibold text-lg leading-6 w-full text-content inline-flex h-auto align-top'>Last Orders</h1> */}
            {/* <h1 className=' mr-2 font-inter font-medium text-lg leading-6 w-full text-see inline-flex h-auto align-top '>See All</h1> */}
          </div>

          <div className='flex w-full h-auto mt-12 flex-col space-y-4 items-center'>
              <div  className='hover:bg-neutral-100/60 hover:h-[50px]  cursor-pointer  flex w-766 h-auto flex-col space-y-3 items-center'>
                <hr  className='w-766 ml-3 mr-10 bg-back5/40' />  
                <div className='  w-full flex selection:h-auto flex-row space-x-34.75'>
                  <div className='w-216 inline-flex h-auto flex-row space-x-2.5 justify-start'>
                      <div className='flex-row space-x-2.5 justify-start flex  h-auto w-min"'>
                        <img className='w-8 h-8 rounded-normal overflow-hidden' src= {luffy}/>
                        <span className='h-auto font-inter font-medium leading-6 text-base text-sales'>Monkey D. Luffy</span>
                      </div>
                  </div>
                  <h1 className='w-29  min-w-min text-weird '>Nov 12, 2023</h1> 
                  <h1 className='w-30 inline-flex h-auto text-base font-inter font-medium leading-6  text-price align-top '>$80,000</h1> 
                  <h1 className='w-24 inline-flex h-auto text-base font-inter font-normal leading-6 text-back3 align-top '>Paid</h1> 
                  <div className='w-20 flex min-w-min justify-start flex-row space-x-1.5'>
                    <img className='w-4 h-4.5 rounded-normal overflow-hidden' src= {doc}/>
                    <h1 className='stretch cursor-pointer inline-block h-auto w-min text-sm font-inter font-normal leading-6 text-pr'>View</h1> 
                  </div> 
                </div>           
              </div>
              <div className='hover:bg-neutral-100/60  hover:h-[50px] cursor-pointer flex w-766 h-auto flex-col space-y-3 items-center'>
                <hr  className='w-766 ml-3 mr-10 bg-back5/40' />  
                <div className='w-full flex selection:h-auto flex-row space-x-34.75'>
                  <div className='w-216 inline-flex h-auto flex-row space-x-2.5 justify-start'>
                      <div className='flex-row space-x-2.5 justify-start flex  h-auto w-min"'>
                        <img className='w-8 h-8 rounded-normal overflow-hidden' src= {dragon}/>
                        <span className='h-auto font-inter font-medium leading-6 text-base text-sales'>Monkey D. Dragon</span>
                      </div>
                  </div>
                  <h1 className='w-29  min-w-min text-weird '>Jun 19, 2023</h1> 
                  <h1 className='w-30 inline-flex h-auto text-base font-inter font-medium leading-6 text-price align-top '>$180,000</h1> 
                  <h1 className='w-24 inline-flex h-auto text-base font-inter font-normal leading-6 text-sees align-top '>Refund</h1> 
                  <div className='w-20 flex min-w-min justify-start flex-row space-x-1.5'>
                    <img className='w-4 h-4.5 rounded-normal overflow-hidden' src= {doc}/>
                    <h1 className='stretch cursor-pointer inline-block h-auto w-min text-sm font-inter font-normal leading-6 text-pr'>View</h1> 
                  </div> 
                </div>           
              </div> 
              <div className='hover:bg-neutral-100/60 hover:h-[50px]  cursor-pointer flex w-766 h-auto flex-col space-y-3 items-center'>
                <hr  className='w-766 ml-3 mr-10 bg-back5/40' />  
                <div className='w-full flex selection:h-auto flex-row space-x-34.75'>
                  <div className='w-216 inline-flex h-auto flex-row space-x-2.5 justify-start'>
                      <div className='flex-row space-x-2.5 justify-start flex  h-auto w-min"'>
                        <img className='w-8 h-8 rounded-normal overflow-hidden' src= {sanji}/>
                    <span className='h-auto font-inter font-medium leading-6 text-base text-sales'>Vinsmoke D. Sanji</span>
                      </div>
                  </div>
                  <h1 className='w-29  min-w-min text-weird '>Aug 12, 2023</h1> 
                  <h1 className='w-30 inline-flex h-auto text-base font-inter font-medium leading-6 text-price align-top '>$850,000</h1> 
                  <h1 className='w-24 inline-flex h-auto text-base font-inter font-normal leading-6 text-back3 align-top '>Paid</h1> 
                  <div className='w-20 flex min-w-min justify-start flex-row space-x-1.5'>
                    <img className='w-4 h-4.5 rounded-normal overflow-hidden' src= {doc}/>
                    <h1 className='stretch cursor-pointer inline-block h-auto w-min text-sm font-inter font-normal leading-6 text-pr'>View</h1> 
                  </div> 
                </div>           
              </div>
              <div className='hover:bg-neutral-100/60 hover:h-[50px] cursor-pointer flex w-766 h-auto flex-col space-y-3 items-center'>
                <hr  className='w-766 ml-3 mr-10 bg-back5/40' />  
                <div className='w-full flex selection:h-auto flex-row space-x-34.75'>
                  <div className='w-216 inline-flex h-auto flex-row space-x-2.5 justify-start'>
                      <div className='flex-row space-x-2.5 justify-start flex  h-auto w-min"'>
                        <img className='w-8 h-8 rounded-normal overflow-hidden' src= {roger}/>
                        <span className='h-auto font-inter font-medium leading-6 text-base text-sales'>Gol D. Roger</span>
                      </div>
                  </div>
                  <h1 className='w-29  min-w-min text-weird '>Sep 1, 2023</h1> 
                  <h1 className='w-30 inline-flex h-auto text-base font-inter font-medium leading-6 text-price align-top '>$800,000</h1> 
                  <h1 className='w-24 inline-flex h-auto text-base font-inter font-normal leading-6 text-sees align-top '>Refund</h1> 
                  <div className='w-20 flex min-w-min justify-start flex-row space-x-1.5'>
                    <img className='w-4 h-4.5 rounded-normal overflow-hidden' src= {doc}/>
                    <h1 className='stretch cursor-pointer inline-block h-auto w-min text-sm font-inter font-normal leading-6 text-pr'>View</h1> 
                  </div> 
                </div>           
              </div>
              <div className='hover:bg-neutral-100/70 hover:h-[50px] cursor-pointer flex w-766 h-auto flex-col space-y-3 items-center'>
                <hr  className='w-766 ml-3 mr-10 bg-back5/40' />  
                <div className='w-full flex selection:h-auto flex-row space-x-34.75'>
                  <div className='w-216 inline-flex h-auto flex-row space-x-2.5 justify-start'>
                      <div className='flex-row space-x-2.5 justify-start flex  h-auto w-min"'>
                        <img className='w-8 h-8 rounded-normal overflow-hidden' src= {garp}/>
                        <span className='h-auto font-inter font-medium leading-6 text-base text-sales'>Monkey D. Garp</span>
                      </div>
                  </div>
                  <h1 className='w-29  min-w-min text-weird '>May 8, 2023</h1> 
                  <h1 className='w-30 inline-flex h-auto text-base font-inter font-medium leading-6 text-price align-top '>$220,000</h1> 
                  <h1 className='w-24 inline-flex h-auto text-base font-inter font-normal leading-6 text-back3 align-top '>Paid</h1> 
                  <div className='w-20 flex min-w-min justify-start flex-row space-x-1.5'>
                    <img className='w-4 h-4.5 rounded-normal overflow-hidden' src= {doc}/>
                    <h1 className='stretch cursor-pointer inline-block h-auto w-min text-sm font-inter font-normal leading-6 text-pr'>View</h1> 
                  </div> 
                </div>           
              </div>
              
          </div>
          
          
          
          
        </div>
        {/* Container */}
        <div className='sm:1/6 md:1/5 lg:1/4  ml-900 -mt-972 grid grid-cols-2 gap-y-4 flex-wrap'>
          <div className='bums cursor-pointer drop-shadow-sm hover:drop-shadow-2xl w-60 h-44 border-strike border-2 rounded-2xl overflow-hidden bg-white flex items-start justify-end'>
            <div className='mt-4 mx-4 flex-col space-y-2.5 inline-flex h-auto w-min'>
              <div className='w-52 inline-flex h-auto flex-row '>
                <img className='w-52 h-10' src= {con1}/>
              </div>
              <div className='h-16 w-24 flex-col space-y-1.5 flex'>
                <h1 className=' h-6 w-24 font-inter font-medium text-lg leading-7 text-card align-left'>Total Order</h1>
                <h1 className=' h-auto w-16 font-inter  leading-8 text-[#3a3f51] font-semibold text-2xl align-left'>350</h1>
              </div>
              
              <div className='w-52 inline-flex h-auto  flex-row justify-start'>
                <div className='w-70 h-6 space-x-1 px-2 flex flex-row py-1 rounded-hugest bg-see/10'>
                  <img className='w-3 h-3' src= {trends}/>
                  
                  <h1 className='h-4 w-9 text-xs text-see leading-4'>23.5%</h1>
                </div>
                <h1 className="h-auto mt-0.5 ml-0.5 w-32 font-inter font-normal text-slip text-sm">vs. previous month</h1>
              </div>

            </div>
          </div>

          <div className='bums cursor-pointer drop-shadow-sm hover:drop-shadow-2xl w-60 h-44 border-strike border-2 rounded-2xl overflow-hidden bg-white flex items-start justify-end'>
          <div className='mt-4 mx-4 flex-col space-y-2.5 inline-flex h-auto w-min'>
            <div className='w-52 inline-flex h-auto flex-row '>
              <img className='w-52 h-10' src= {con2}/>
            </div>
            <div className='h-16 w-26 flex-col space-y-1.5 flex'>
              <h1 className=' h-6 w-26 font-inter font-medium text-lg leading-7 text-card align-left'>Total Refund</h1>
              <h1 className=' h-auto w-16 font-inter font-semibold text-2xl align-left '>270</h1>
            </div>
            
            <div className='w-52 inline-flex h-auto  flex-row justify-start'>
              <div className='w-70 h-6 space-x-1 px-2 flex flex-row py-1 rounded-hugest bg-sees/10'>
                <img className='w-3 h-3' src= {trend}/>
                
                <h1 className='h-4 w-9 font-inter  text-xs text-sees leading-4'>23.5%</h1>
              </div>
              <h1 className="h-auto mt-0.5 ml-0.5 w-32 font-inter font-normal text-slip text-sm">vs. previous month</h1>
            </div>

          </div>
        </div>

          <div className='bums cursor-pointer drop-shadow-sm hover:drop-shadow-2xl w-60 h-44 border-strike border-2 rounded-2xl overflow-hidden bg-white flex items-start justify-end'>
          <div className='mt-4 mx-4 flex-col space-y-2.5 inline-flex h-auto w-min'>
            <div className='w-52 inline-flex h-auto flex-row '>
              <img className='w-52 h-10' src= {con3}/>
            </div>
            <div className='h-16 w-26 flex-col space-y-1.5 flex'>
              <h1 className=' h-6 w-26 font-inter font-medium text-lg leading-7 text-card align-left'>Average Sales</h1>
              <h1 className=' h-auto w-16 font-inter font-semibold text-2xl align-left'>1567</h1>
            </div>
            
            <div className='w-52 inline-flex h-auto  flex-row justify-start'>
              <div className='w-70 h-6 space-x-1 px-2 flex flex-row py-1 rounded-hugest bg-sees/10'>
                <img className='w-3 h-3' src= {trend}/>
                
                <h1 className='h-4 w-9 text-xs text-sees leading-4'>23.5%</h1>
              </div>
              <h1 className="h-auto mt-0.5 ml-0.5 w-32 font-inter font-normal text-slip text-sm">vs. previous month</h1>
            </div>

          </div>
        </div>

          <div className='bums cursor-pointer drop-shadow-sm hover:drop-shadow-2xl w-60 h-44 border-strike border-2 rounded-2xl overflow-hidden bg-white flex items-start justify-end'>
          <div className='mt-4 mx-4 flex-col space-y-2.5 inline-flex h-auto w-min'>
            <div className='w-52 inline-flex h-auto flex-row '>
              <img className='w-52 h-10' src= {con4}/>
            </div>
            <div className='h-16 w-26 flex-col space-y-1.5 flex'>
              <h1 className=' h-6 w-26 font-inter font-medium text-lg leading-7 text-card align-left'>Total Income</h1>
              <h1 className=' h-auto w-16 font-inter font-semibold text-2xl align-left'>$350.000</h1>
            </div>
            
            <div className='w-52 inline-flex h-auto  flex-row justify-start'>
              <div className='w-70 h-6 space-x-1 px-2 flex flex-row py-1 rounded-hugest bg-see/10'>
                <img className='w-3 h-3' src= {trends}/>
                
                <h1 className='h-4 w-9 text-xs text-see leading-4'>23.5%</h1>
              </div>
              <h1 className="h-auto mt-0.5 ml-0.5 w-32 font-inter font-normal text-slip text-sm">vs. previous month</h1>
            </div>

          </div>
        </div>
        </div>
        {/* Sales Report */}
        <div className='flex-wrap sm:1/6 md:1/5 lg:1/4 bum Sales-Report ml-900 mt-12 rounded-lg  border-2 border-strike overscroll-contain bg-white w-488 h-542 flex  space-y-4.5 flex-col'>
          <div className='flex ml-5 flex-row mt-4 w-452 h-6.5'>
            <h1 className='text-lg font-inter font-semibold w-full  leading-6 inline-flex h-auto'>Top platform</h1>
            <div onClick={
              function toggleHeight() {
                const container = document.querySelector('.Sales-Report .overscroll-contain');
                container.classList.toggle('max-h-full')
              }
              } className=' hover:bg-see/5 hover:rounded-full  hover:h-7 hover:w-22 transition duration-700 hover:drop-shadow-md ease-in-out cursor-pointer text-lg font-inter font-medium leading-6 justify-end mr-3 align-middle w-full inline-flex h-auto text-see'>
              <span className='hover:text-base hover:justify-end hover:-ml-10 ml-4' >See All</span>
            </div>
          </div>
          <div className='ml-5 mt-16 w-452 h-auto inline-block flex-col space-y-5 items-center'>
            <div className='w-452 h-24 space-y-4'>
              <h1 className='w-[124.4px] font-inter font-semibold text-[18px] leading-[26px] text-charts'>Book Bazar</h1>
              <div className='animate-pulse w-452 mt-[43px] h-3 rounded-normal3 bg-gray-200'>
                <div className='shim-green bg-blue-600 h-3 rounded-full w-8/12'></div>
              </div>
              <div className=' w-452 flex-row inline-flex h-auto'>
                <h1 className='inline-flex align-text-top  h-[26px] w-[113px] leading-[26px] font-inter font-normal text-[18px] text-[#525252]'>$2,500,000</h1>
                <h1 className='inline-flex ml-[300px] align-text-top  h-auto w-[47px] leading-[26px] font-inter font-normal text-[18px] text-[#525252] '>+15%</h1>
              </div>
            </div>
            <div className='w-452 h-24 space-y-4'>
              <h1 className='w-[124.4px] font-inter font-semibold text-[18px] leading-[26px] text-charts'>Book Bazar 2</h1>
              <div className='animate-pulse w-452 mt-[43px] h-3 rounded-normal3 bg-gray-200'>
                <div className='shim-green bg-red-600 h-3 rounded-full w-7/12'></div>
              </div>
              <div className='w-452 flex-row inline-flex h-auto'>
                <h1 className='inline-flex align-text-top  h-[26px] w-[113px] leading-[26px] font-inter font-normal text-[18px] text-[#525252]'>$2,300,000</h1>
                <h1 className='inline-flex ml-[300px] align-text-top  h-auto w-[47px] leading-[26px] font-inter font-normal text-[18px] text-[#525252] '>+13%</h1>
              </div>
            </div>
            <div className='w-452 h-24 space-y-4'>
              <h1 className='w-[124.4px] font-inter font-semibold text-[18px] leading-[26px] text-charts'>Book Bazar 3</h1>
              <div className='animate-pulse w-452 mt-[43px] h-3 rounded-normal3 bg-gray-200'>
                <div className='shim-green bg-yellow-600 h-3 rounded-full w-6/12'></div>
              </div>
              <div className='w-452 flex-row inline-flex h-auto'>
                <h1 className='inline-flex align-text-top  h-[26px] w-[113px] leading-[26px] font-inter font-normal text-[18px] text-[#525252]'>$2,100,000</h1>
                <h1 className='inline-flex ml-[300px] align-text-top  h-auto w-[47px] leading-[26px] font-inter font-normal text-[18px] text-[#525252] '>+11%</h1>
              </div>
            </div>
            <div className='w-452 h-24 space-y-4'>
              <h1 className='w-[124.4px] font-inter font-semibold text-[18px] leading-[26px] text-charts'>Book Bazar 4</h1>
              <div className='animate-pulse w-452 mt-[43px] h-3 rounded-normal3 bg-gray-200'>
                <div className='shim-green  bg-green-600 h-3 rounded-full w-5/12'></div>
              </div>
              <div className=' w-452 flex-row inline-flex h-auto'>
                <h1 className='inline-flex align-text-top  h-[26px] w-[113px] leading-[26px] font-inter font-normal text-[18px] text-[#525252]'>$1,900,000</h1>
                <h1 className='inline-flex ml-[300px] align-text-top  h-auto w-[47px] leading-[26px] font-inter font-normal text-[18px] text-[#525252] '>+9%</h1>
              </div>
            </div>
            
          </div>
        </div>
        
        
        
        
        
    </div>
    
  )
}

export default Container