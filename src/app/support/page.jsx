import Questions from './Questions'
import Issues from './issues'
import SupportTabs from './SupportTabs'
function Page() {
  return (
    <div className='flex'>
        <div className="flex-1 lg:ml-69">
            <main>
       <SupportTabs Questions={<Questions />} Issues={<Issues />} />
            </main>
        </div>
    </div>
  )
}

export default Page