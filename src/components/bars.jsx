import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 5000, max: 50000 })),
      backgroundColor: 'rgba(52, 202, 165, 0.1)',
      borderColor: 'rgba(52, 202, 165, 0.1)',
      borderWidth: 1,
      barThickness: 20,
      borderRadius: 20,
      borderSkipped: 'bottom',
      hoverBackgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        const { top, bottom } = chartArea;
        const gradient = ctx.createLinearGradient(0, top, 0, bottom);
        gradient.addColorStop(0, 'rgba(52, 202, 165, 1)');
        gradient.addColorStop(1, 'white');
        return gradient;
      },
    },
  ],
};

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Sales Trend',
        align: 'start', // Shift the title to the left edge
        padding: {
          top: 20,
          bottom: 30,
          
          right: 30, // Increase the spacing between the chart and the title
        },
        font: {
          family: 'Inter',
          size: 18,
          weight: '600', // Medium font-weight
        },
      },
      tooltip: {
        callbacks: {
        label: function (context) {
          var value = context.parsed.y;
          return '$' + value.toLocaleString();
        },
        title: function () {
          return null; // Return null to hide the title
        },
      },
      body: {
        font: {
          family: 'Inter', // Set the font family to Inter
        },
      },
      },
    },
    scales: {
        
      x: {
        display: true,
        
        grid: {
          display: false,
        },
        ticks: {
            font: {
                family: 'Inter',
                size: 12,
                weight: '400', // Medium font-weight
              },
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
        },
        ticks: {
            // stepSize: 5000
            stepSize: 10000,
            font: {
                family: 'Inter',
                size: 12,
                weight: '500', // Medium font-weight
              },
             // Set the step size of the vertical axis to 10,000
          },
      },
    },
  };

function App() {
  return <Bar options={options} data={data} />;
}

export default App;

function Bars(){
    return(
        <div className="sidebar bg-back py-5 h-876 w-20 space-y-2.5 ">
            <div className='Container/Menu bg-back w-full inline-block space-y-64 self-center h-auto  pt-4  flex-col'>
                {/* Main Menu */}
                <div className=' Main-Menu w-full items-center inline-block flex-col space-y-5'>
                    <img className='w-10 h-10 ml-5' src= {Logo}/>
                    <img className='w-10 h-10 ml-5 mt-16' src= {Logo1}/>
                        <div className='Frame 8 w-full inline-block flex-col space-y-4'>
                            <div className='Component 8 Fill w-full flex flex-row h-10 space-x-auto px-2.5 py-2.5'>
                                <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='w-6 h-6' src= {category}/>

                                </div>
                            </div>
                            <div className='Icon Fill w-20 flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='w-6 h-6' src= {trend}/>

                                </div>
                            </div>
                            <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='w-6 h-6' src= {Icon}/>

                                </div>
                            </div>
                            <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='w-6 h-6' src= {box}/>

                                </div>
                            </div>
                            <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                                <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='w-6 h-6' src= {discount}/>

                                </div>
                            </div>
                            <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5 '>
                                <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                                    <img className='w-6 h-6  hover:back3 hover:rounded-full' src= {circle}/>

                                </div>
                            </div>
                            <div className='Thame w-20 inline-block h-auto flex-row space-x-2.5 px-2.5 align-middle'>
                                <div className='Theme inline-block h-auto w-min rounded-huge px-2 py-2 space-x-2 flex-col items-center justify-center'>
                                    <div className='Frame inline-block h-auto w-min flex-col space-y-4'>
                                        <div className='Icon Fill w-30 flex flex-row rounded-huge space-x-2.5 px-2.5 py-2.5 '>
                                            <div className='Frame12 rounded-lg flex-row w-10 h-10'>
                                                <img className='w-7.5 h-7.5  hover:bg-back3 hover:rounded-full' src= {sun}/>

                                            </div>
                                        </div>
                                        <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5 '>
                                            <div className='Frame12 rounded-lg flex-row w-10 h-10'>
                                                <img className='w-7.5 h-7.5  hover:bg-back3 hover:rounded-full' src= {moon}/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                
                {/* Other Menu */}
                <div className=' Other-Menu w-20 inline-flex flex-col h-auto space-y-4 bg-back'>
                    <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                        <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                            <img className='w-6 h-6' src= {arrow_right}/>

                        </div>
                    </div>
                    
                    <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                        <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                            <img className='w-6 h-6' src= {settings}/>

                        </div>
                    </div>
                    <div className='Icon Fill w-full flex flex-row h-10 space-x-2.5 px-2.5 py-2.5'>
                        <div className='Frame12 ml-5 rounded-lg flex-row w-10 h-10'>
                            <img className='w-6 h-6' src= {logout}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
// export default Bars