import React from 'react'
import Link from 'next/link'
function News() {
  return (

    <div className="bg-gray-100 rounded-2xl p-5 flex flex-col w-162 h-185 ">

<div className="flex justify-between">
<div>
<h1 className="text-black font-bold text-xl">News</h1>
<p className="text-gray-500">Everything new in the company will be here</p>
</div>
<div>
  <Link href="/recognition" className="text-blue-900 text-xl hover:text-blue-700 transition duration-300">
    view all
  </Link>
</div>
</div>

<div className="border-1 cursor-pointer p-5 rounded-xl shadow-xl flex-col mb-5 gap-5 mt-5">
<h1 className=" text-black font-bold">How to Write a Business Plan</h1>
<p className="text-gray-400"> Added june 27,2023 | 12:00 PM.</p>
<p className="mt-2 truncate text-gray-400">The executive summary provides a
  snapshot of your business and its 
  plans. This section should include your
  business’s name, location, products or 
  services, mission statement, and the purpose
  of the plan. It should be concise yet
  compelling enough to capture the reader’s
  interest. Aim for clarity and brevity, as 
  this section often determines whether 
  investors will read further</p>
</div>
<div className="border-1 p-5 cursor-pointer rounded-xl shadow-xl flex-col mb-5 gap-5 mt-5">
<h1 className=" text-black font-bold">How to Write a Business Plan</h1>
<p className="text-gray-400"> Added june 27,2023 | 12:00 PM.</p>
<p className="mt-2 truncate text-gray-400">The executive summary provides a
  snapshot of your business and its 
  plans. This section should include your
  business’s name, location, products or 
  services, mission statement, and the purpose
  of the plan. It should be concise yet
  compelling enough to capture the reader’s
  interest. Aim for clarity and brevity, as 
  this section often determines whether 
  investors will read further</p>
</div>
<div className="border-1 p-5 cursor-pointer rounded-xl shadow-xl flex-col mb-5 gap-5 mt-5">
<h1 className=" text-black font-bold">How to Write a Business Plan</h1>
<p className="text-gray-400"> Added june 27,2023 | 12:00 PM.</p>
<p className="mt-2 truncate text-gray-400">The executive summary provides a
  snapshot of your business and its 
  plans. This section should include your
  business’s name, location, products or 
  services, mission statement, and the purpose
  of the plan. It should be concise yet
  compelling enough to capture the reader’s
  interest. Aim for clarity and brevity, as 
  this section often determines whether 
  investors will read further</p>
</div>
<div className="border-1 p-5 cursor-pointer rounded-xl shadow-xl flex-col mb-5 gap-5 mt-5">
<h1 className=" text-black font-bold">How to Write a Business Plan</h1>
<p className="text-gray-400"> Added june 27,2023 | 12:00 PM.</p>
<p className="mt-2 truncate text-gray-400">The executive summary provides a
  snapshot of your business and its 
  plans. This section should include your
  business’s name, location, products or 
  services, mission statement, and the purpose
  of the plan. It should be concise yet
  compelling enough to capture the reader’s
  interest. Aim for clarity and brevity, as 
  this section often determines whether 
  investors will read further</p>
</div>

</div>
  )
}

export default News