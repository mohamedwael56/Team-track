import AddingKpi from './AddingKpi';
import FeedBack from './FeedBack';


function Page() {
  
  return (
    
<div className="flex">
  <div className="flex-1 lg:ml-69">
    <main>
    
      <div className="bg-gray-100 lg:w-full w-80 flex flex-col rounded-2xl p-5 my-4">
  
  <AddingKpi />

    <h1 className='text-black text-xl mb-1'>Feed back</h1>
    
<FeedBack />

      </div>
   


    </main>
  </div>
</div>

  )
}

export default Page