import React from 'react'

export default function StepIndicator({stepNo,isToggle}) {
  return (
    <>
        <div className={`${isToggle ? 'bg-blue-600 text-white font-bold': 'bg-gray-300'} rounded-full w-[50px] flex justify-center items-center`}>
            {stepNo}
        </div>
    </>
  )
}
