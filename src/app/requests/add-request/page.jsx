import React from 'react'
import Leave from './Leave.jsx';
import OverTime from './overTime.jsx';
import RemoteWork from './RemoteWork.jsx/';
import Loan from './Loan.jsx';
import Reimbursement from './Reimbursement.jsx';
import AddRequestTabs from './AddRequestTabs.jsx';

function Page() {

  return (
<div className="flex">
  <div className="flex-1 lg:ml-69">
    <main>
   
<AddRequestTabs Leave={<Leave />} OverTime={<OverTime />} RemoteWork={<RemoteWork />} Loan={<Loan />} Reimbursement={<Reimbursement />} />
    </main>
  </div>
</div>

  )
}

export default Page