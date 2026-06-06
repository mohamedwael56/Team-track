import React from 'react'

function DashboardPage() {
  return (
<div className='border shadow-xl flex flex-col rounded-2xl p-3'>
<div className='flex justify-between items-center text-black'>
<p className='text-xl mr-3'>Revision 1: Fixing Navbar at Dashboard Page</p>
50%
</div>

<div className="w-full mt-2 bg-gray-50 rounded-full h-3">
 <div
    className="bg-green-600 h-3 rounded-full transition-all duration-500"
    style={{ width: "50%" }}
  ></div>
</div>

<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Change the icons to font awesome icons.</p>
<select disabled className='bg-red-200 text-red-600 pl-2 py-1 rounded-lg' name="" id="">
    <option value="">To-do</option>
</select>
</div>
<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Adjust the size to responsive mobile.</p>
<select disabled className='bg-green-100 text-green-600 pl-2 py-1 rounded-lg' name="" id="">
    <option  value="">Completed</option>
</select>
</div>
<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Activate the navigation buttons to direct the users.</p>
<select disabled className='bg-red-200 text-red-600 pl-2 py-1 rounded-lg' name="" id="">
    <option value="">To-do</option>
</select>
</div>
<div className='bg-gray-50 rounded-2xl items-center p-3 mt-3 justify-between flex text-black'>
<p>Activate the navigation buttons to direct the users.</p>
<select disabled className='bg-green-100 text-green-600 pl-2 py-1 rounded-lg' name="" id="">
    <option value="">Completed</option>
</select>
</div>

</div>  )
}

export default DashboardPage