import Password from './Password'
import Language from './language'
import AboutBuy2 from './about-buy2'
import TermsOfUse from './terms-of-use'
import PrivacyPolicy from './privacy-policy'
import SettingsTabs from './SettingsTabs'

function Page() {

  return (
    <div className='flex'>
        <div className="flex-1 lg:ml-69">
            <main>
              <SettingsTabs Password={<Password />} Language={<Language />} 
              AboutBuy2={<AboutBuy2 />} TermsOfUse={<TermsOfUse />} PrivacyPolicy={<PrivacyPolicy />} />
            </main>
        </div>
    </div>
  )
}

export default Page