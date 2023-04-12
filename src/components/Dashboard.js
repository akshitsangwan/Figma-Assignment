import React from 'react'
import DashboardIcon from '../images/dashboard_icon.png'
import TransactionsIcon from '../images/transaction_icon.png'
import SchedulesIcon from '../images/schedule_icon.png'
import UsersIcon from '../images/user_icon.png'
import SettingsIcon from '../images/setting_icon.png'
import SearchIcon from '../images/search-icon.png'
import BellIcon from '../images/bell-icon.png'
import ProfileImg from '../images/profile-img.png'
import RevenueIcon from '../images/revenue-icon.png'
import TotalTransIcon from '../images/total-trans-icon.png'
import LikesIcon from '../images/likes-icon.png'
import TotalUsersIcon from '../images/total-users-icon.png'
import PieChart from '../images/pie-chart.png'
import SeeAllIcon from '../images/see-all-icon.png'
import Chart from '../images/Chart.png'
import ChartWeeks from '../images/chart_weeks.png'
import LineChart1 from '../images/line_chart_1.png' 
import LineChart2 from '../images/line_chart_2.png' 

const Dashboard = () => {
  return (
    <div className='bg-[#eae6e6] flex'>
        {/* Left Part */}
        <div className='p-[40px]'>
            <div className='flex flex-col bg-black w-[280px] h-full rounded-[30px] py-[60px] px-[50px] box-border relative'>
                <p className='text-white text-[36px] font-bold font-Montserrat leading-[44px]'>
                    Board.
                </p>

                <div className='flex flex-col mt-14 gap-10'>
                    <div className='flex gap-5 hover:cursor-pointer'>
                        <img src={DashboardIcon} alt='Dashboard-Icon' className='h-[18px] w-[18px]' loading='lazy' />
                        <p className='text-white text-[18px] font-bold font-Montserrat leading-[22px]'>Dashboard</p>
                    </div>

                    <div className='flex gap-5 hover:cursor-pointer'>
                        <img src={TransactionsIcon} alt='Transactions-Icon' className='h-[18px] w-[18px]' loading='lazy' />
                        <p className='text-white text-[18px] font-normal font-Montserrat leading-[22px]'>Transactions</p>
                    </div>

                    <div className='flex gap-5 hover:cursor-pointer'>
                        <img src={SchedulesIcon} alt='Schedules-Icon' className='h-[18px] w-[18px]' loading='lazy' />
                        <p className='text-white text-[18px] font-normal font-Montserrat leading-[22px]'>Schedules</p>
                    </div>

                    <div className='flex gap-5 hover:cursor-pointer'>
                        <img src={UsersIcon} alt='Users-Icon' className='h-[18px] w-[18px]' loading='lazy' />
                        <p className='text-white text-[18px] font-normal font-Montserrat leading-[22px]'>Users</p>
                    </div>

                    <div className='flex gap-5 hover:cursor-pointer'>
                        <img src={SettingsIcon} alt='Settings-Icon' className='h-[18px] w-[18px]' loading='lazy' />
                        <p className='text-white text-[18px] font-normal font-Montserrat leading-[22px]'>Settings</p>
                    </div>
                </div>

                <div className='flex flex-col absolute left-12 bottom-14 gap-5'>
                    <p className='text-white text-[14px] font-normal font-Montserrat leading-[17px] hover:cursor-pointer'>Help</p>
                    <p className='text-white text-[14px] font-normal font-Montserrat leading-[17px] hover:cursor-pointer'>Contact Us</p>
                </div>
            </div>
        </div>

        {/* Right Part */}
        <div className='flex flex-col p-14 flex-grow gap-10'>
            
            <div className='flex justify-between'>
                <h1 className='text-black font-Montserrat font-bold text-[24px] leading-[29px]'>Dashboard</h1>

                <div className='flex gap-7 items-center'>
                    <label htmlFor='search' className='flex bg-white rounded-[10px] w-[180px] h-[30px] justify-between items-center p-2'>
                            <input 
                                type='text' 
                                name='search'
                                id='search'
                                placeholder='Search...' 
                                className='font-Lato font-normal text-[14px] leading-[17px] placeholder:text-[#B0B0B0] outline-none'
                            />
                            <img src={SearchIcon} alt='Search-Icon' className='h-[12px] w-[12px]' loading='lazy' />
                    </label>

                    <img src={BellIcon} alt='bell-icon' className='h-[20px] w-[18px] hover:cursor-pointer' loading='lazy' />

                    <img src={ProfileImg} alt='Profile-Img' className='h-[30px] w-[30px] hover:cursor-pointer' loading='lazy' />
                </div>
            </div>

            <div className='flex gap-10'>

                <div className='flex flex-col bg-[#DDEFE0] p-5 w-1/4 h-[120px] rounded-[20px]'>
                    <img src={RevenueIcon} alt='revenue-icon' className='h-[24px] w-[26.4px] self-end' loading='lazy' />
                    <p className='font-Lato font-normal text-[14px] text-black leading-[17px]'>Total Revenues</p>
                    <p className='font-OpenSans font-bold text-[24px] text-black leading-[33px]'>$2,129,430</p>
                </div>

                <div className='flex flex-col bg-[#F4ECDD] p-5 w-1/4 h-[120px] rounded-[20px]'>
                    <img src={TotalTransIcon} alt='revenue-icon' className='h-[24px] w-[20.8px] self-end' loading='lazy' />
                    <p className='font-Lato font-normal text-[14px] text-black leading-[17px]'>Total Transactions</p>
                    <p className='font-OpenSans font-bold text-[24px] text-black leading-[33px]'>1,520</p>
                </div>

                <div className='flex flex-col bg-[#EFDADA] p-5 w-1/4 h-[120px] rounded-[20px]'>
                    <img src={LikesIcon} alt='revenue-icon' className='h-[24px] w-[23.3px] self-end' loading='lazy' />
                    <p className='font-Lato font-normal text-[14px] text-black leading-[17px]'>Total Likes</p>
                    <p className='font-OpenSans font-bold text-[24px] text-black leading-[33px]'>9,721</p>
                </div>

                <div className='flex flex-col bg-[#DEE0EF] p-5 w-1/4 h-[120px] rounded-[20px]'>
                    <img src={TotalUsersIcon} alt='revenue-icon' className='h-[24px] w-[36.8px] self-end' loading='lazy' />
                    <p className='font-Lato font-normal text-[14px] text-black leading-[17px]'>Total Users</p>
                    <p className='font-OpenSans font-bold text-[24px] text-black leading-[33px]'>892</p>
                </div>
                
            </div>

            <div className='flex flex-col bg-white rounded-[20px] w-full h-[359px] py-[30px] px-[40px] gap-10'>

                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-Montserrat font-bold text-[18px] text-black leading-[22px]'>Activities</h3>
                        <select className='bg-white font-Montserrat font-normal text-[14px] text-[#858585] leading-[17px] outline-none'>
                            <option value="1">May - June 2021</option>
                        </select>
                    </div>

                    <ul className='list-inside flex gap-10'>
                        <li className='flex items-center gap-3'>
                            <div className='bg-[#E9A0A0] h-[10px] w-[10px] rounded-full'>
                            </div>
                            <p className='font-Lato font-normal text-[14px] text-black leading-[17px]'>Guest</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='bg-[#9BDD7C] h-[10px] w-[10px] rounded-full'>
                            </div>
                            <p className='font-Lato font-normal text-[14px] text-black leading-[17px]'>User</p>
                        </li>
                    </ul>
                </div>

                <div className='relative m-auto'>
                    <img src={Chart} alt='chart' loading='lazy' />
                    <img src={LineChart1} alt='line-chart-1' className='absolute top-[28px] left-[40.5px]' loading='lazy' />
                    <img src={LineChart2} alt='line-chart-2' className='absolute top-[28px] left-[40.5px]' loading='lazy' />
                    <img src={ChartWeeks} alt='chart-weeks' className='absolute top-[210px] left-[139px]' loading='lazy' />
                </div>
            </div>

            <div className='flex gap-10'>
                {/* Card-1 */}
                <div className='bg-white w-1/2 rounded-[20px] flex flex-col p-[30px] gap-5'>

                    <div className='flex justify-between'>
                        <h3 className='font-Montserrat font-bold text-[18px] text-black leading-[22px]'>Top products</h3>
                        <select className='bg-white font-Montserrat font-normal text-[12px] text-[#858585] leading-[15px] outline-none'>
                            <option value="1">May - June 2021</option>
                        </select>
                    </div>

                    <div className='flex gap-[80px] px-4'>
                        <img src={PieChart} alt='pie-chart' className='h-[145px] w-[145px] ml-2' loading='lazy' />
                        <ul className='list-disc flex flex-col gap-3'>
                            <li className='marker:text-[#98D89E] marker:text-[30px] font-Montserrat font-bold text-[16px] text-black leading-[17px]'>
                                Basic Tees
                                <br />
                                <span className='font-Lato font-normal text-[13px] text-[#858585]'>55%</span>
                            </li>
                            <li className='marker:text-[#F6DC7D] marker:text-[30px] font-Montserrat font-bold text-[16px] text-black leading-[17px]'>
                                Custom Short Pants
                                <br />
                                <span className='font-Lato font-normal text-[13px] text-[#858585]'>31%</span>
                            </li>
                            <li className='marker:text-[#EE8484] marker:text-[30px] font-Montserrat font-bold text-[16px] text-black leading-[17px]'>
                                Super Hoodies
                                <br />
                                <span className='font-Lato font-normal text-[13px] text-[#858585]'>14%</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Card-2 */}
                <div className='bg-white w-1/2 rounded-[20px] flex flex-col p-[30px] gap-5'>

                    <div className='flex justify-between'>
                        <h3 className='font-Montserrat font-bold text-[18px] text-black leading-[22px]'>Today’s schedule</h3>
                        <div className='flex items-center justify-center gap-[5px] font-Montserrat font-normal text-[12px] text-[#858585] leading-[15px] hover:cursor-pointer'>
                            See All
                            <img src={SeeAllIcon} alt='see-all-icon' className='h-[8px] w-[5px] mb-[1px]' loading='lazy' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-7'>
                        <div className='flex gap-3'>
                            <div className='bg-[#9BDD7C] w-1 h-[70px] -mt-1'>
                            </div>

                            <div className='flex flex-col gap-[6px]'>
                                <p className='font-Lato font-bold text-[14px] leading-[17px] text-[#666666]'>Meeting with suppliers from Kuta Bali</p>
                                <p className='font-Lato font-normal text-[12px] leading-[14px] text-[#666666]'>14.00-15.00</p>
                                <p className='font-Lato font-normal text-[12px] leading-[14px] text-[#666666]'>at Sunset Road, Kuta, Bali</p>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className='bg-[#6972C3] w-1 h-[70px] -mt-1'>
                            </div>

                            <div className='flex flex-col gap-[6px]'>
                                <p className='font-Lato font-bold text-[14px] leading-[17px] text-[#666666]'>Check operation at Giga Factory 1</p>
                                <p className='font-Lato font-normal text-[12px] leading-[14px] text-[#666666]'>18.00-20.00</p>
                                <p className='font-Lato font-normal text-[12px] leading-[14px] text-[#666666]'>at Central Jakarta</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard