import React, { use, useState } from 'react'
import Tittle from '../../Components/Tittle'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashbord = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData); 

  return (
    <div>
          <Tittle align='left' font='outfit' title='Dashboard' subtitle='Manage your hotel rooms and bookings, listings and track booking , analyze revenue and performance metrics to ensure smooth operations.  ' />
          
          <div className='flex gap-4 my-8'> 
              {/* total booking */}
              <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                  <img src={assets.totalBookingIcon} alt="Booking Icon" className="max-sm:hidden h-10" />
                  <div className='flex flex-col sm:ml-4 font-medium'>
                      <p text-blue-500 text-lg>
                            Total Bookings
                      </p>
                      <p className='text-neutral-500 text-lg'>{ dashboardData.totalBookings}</p>
                 </div>
              </div>
              
              {/* tootal revenue */}
             <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                  <img src={assets.totalRevenueIcon} alt="Booking Icon" className="max-sm:hidden h-10" />
                  <div className='flex flex-col sm:ml-4 font-medium'>
                      <p text-blue-500 text-lg>
                            Total Revenue
                      </p>
                      <p className='text-neutral-500 text-lg'> $ { dashboardData.totalRevenue}</p>
                 </div>
              </div>
          </div>

          {/* recent  booking */}
          <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>

          <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
              <table className='w-full'>
                  <thead className='bg-gray-50'>
                      <tr>
                          <th className='py-3 px-4 text-gray-800 font-medium'>
                              User Name
                          </th>
                           <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>
                              Room Name
                          </th>
                           <th className='py-3 px-4 text-gray-800 font-medium text-center'>
                              Total Amount
                          </th>
                           <th className='py-3 px-4 text-gray-800 font-medium text-center'>
                             Payment status
                          </th>
                      </tr>
                      
                  </thead>
                  <tbody className='text-sm'>
                      {dashboardData.bookings.map((item, index) =>
                      (
                          <tr key={index}>
                                        <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                            {item.user.username}
                              </td>
                              
                               <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                            {item.room.roomType}
                              </td>
                              
                               <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                        $ {item.totalPrice}
                              </td>

                              <td className='py-3 px-4 border-t cborder-gray-300 flex'>
                                  <button className= {`py-1 px-3 text-sm rounded-full max-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-yellow-600'}`}>
                                      {item.isPaid ? 'Completed ' : 'Pending'}
                                  </button>
                              </td>
                              
                          </tr>
                    ))}
                  </tbody>
              </table>
          </div>
    </div>
  )
}

export default Dashbord
