import React from 'react'
import MyRequests from './my-requests';
import TeamRequests from './team-requests';
import RequestsTabs from './RequestsTabs';
function Page() {

  return (
<div className="flex">
  <div className="flex-1 lg:ml-69">
    <main>
     
   
<RequestsTabs MyRequests={<MyRequests />} TeamRequests={<TeamRequests />} />

    </main>
  </div>
</div>

  )
}

export default Page