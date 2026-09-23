import React from 'react'
import Comments from './Comments'
import DashboardPage from './Dashboard-page'
import TaskDescription from './TaskDescription'
import ListDetails from './ListDetails'
import Attachments from './Attachments'
function Page() {
    
     
  
       return (

    <div className='flex'>

<div className='flex-1 lg:ml-69'>
<main>
<div className='flex flex-col gap-5 m-5 lg:w-full w-80 bg-white rounded-2xl p-5'>
<Comments />
<hr />
<div className='flex lg:flex-row flex-col justify-between mt-2'>
    <div className='flex flex-col'>

<DashboardPage />
<TaskDescription />

</div>


<ListDetails />

</div>
<div>
   <Attachments />
</div>
</div>

</main>
</div>
    </div>

)
}

export default Page