'use client'
import Header from '@/components/header'
import React, { use } from 'react'
import { useState } from 'react'
import Password from './Password'
import Language from './language'
import AboutBuy2 from './about-buy2'
import TermsOfUse from './terms-of-use'
import PrivacyPolicy from './privacy-policy'

function Page() {
    const [password,setPassword]=useState(true)
    const [language,setLanguage]=useState(false)
    const [aboutBuy2,setAboutBuy2]=useState(false)
    const [termsOfUse,setTermsOfUse]=useState(false)
    const [privacyPolicy,setPrivacyPolicy]=useState(false)

const passwordClicked=()=>{
    setPassword(true)
    setLanguage(false)
    setAboutBuy2(false)
    setTermsOfUse(false)
    setPrivacyPolicy(false)
}

const languageClicked=()=>{
    setPassword(false)
    setLanguage(true)
    setAboutBuy2(false)
    setTermsOfUse(false)
    setPrivacyPolicy(false)
}

const aboutBuy2Clicked=()=>{
    setPassword(false)
    setLanguage(false)
    setAboutBuy2(true)
    setTermsOfUse(false)
    setPrivacyPolicy(false)
}

const termsOfUseClicked=()=>{
    setPassword(false)
    setLanguage(false)
    setAboutBuy2(false)
    setTermsOfUse(true)
    setPrivacyPolicy(false)
}

const privacyPolicyClicked=()=>{
    setPassword(false)
    setLanguage(false)
    setAboutBuy2(false)
    setTermsOfUse(false)
    setPrivacyPolicy(true)
}

  return (
    <div className='flex'>
        <div className="flex-1 ml-69">
            <main>
                <div className="bg-gray-100 p-5 flex flex-col rounded-2xl h-screen">
            <div className="text-black text-2xl font-bold">
                settings
            </div>
            <div className="flex my-5 text-black flex-row gap-4">
                <button onClick={passwordClicked} className={`border ${password ? 'border-violet-400 text-violet-500' : 'border-gray-300'}   px-5 py-1  rounded-2xl cursor-pointer`}>password</button>
                <button onClick={languageClicked} className={`border ${language ? 'border-violet-400 text-violet-500' : 'border-gray-300'}   px-5 py-1  rounded-2xl cursor-pointer`}>language</button>
                <button onClick={aboutBuy2Clicked} className={`border ${aboutBuy2 ? 'border-violet-400 text-violet-500' : 'border-gray-300'}   px-5 py-1  rounded-2xl cursor-pointer`}>about buy2</button>
                <button onClick={termsOfUseClicked} className={`border ${termsOfUse ? 'border-violet-400 text-violet-500' : 'border-gray-300'}   px-5 py-1  rounded-2xl cursor-pointer`}>terms of use</button>
                <button onClick={privacyPolicyClicked} className={`border ${privacyPolicy ? 'border-violet-400 text-violet-500' : 'border-gray-300'}   px-5 py-1  rounded-2xl cursor-pointer`}>privacy policy</button>
            </div>
            <hr />
            <div className="w full text-white flex flex-col mt-6 items-center justify-center">
          {
            password&&<Password />
          }
          {
            language&&<Language />
          }
          {
            aboutBuy2&&<AboutBuy2 />
          }
          {
            termsOfUse&&<TermsOfUse />
          }
          {
            privacyPolicy&&<PrivacyPolicy />
          }
            </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Page