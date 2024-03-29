import React from 'react'
import ButtonLink from './Global/ButtonLink'

export default function ProductCard(props) {
  const {id,crop_img,crop_name,city,state,price,quality} = props
  return (
    <div className="relative w-72 rounded-lg shadow-md overflow-hidden m-5 bg-white">
    <img src={crop_img} alt="Crop Image" className="w-full h-[180px]" />
    <div className="absolute top-0 right-0 bg-green-600 text-white py-1 px-2 rounded-tr-lg font-bold">
      Premium Quality
    </div>
    <div className="p-4">
      <div className="text-xl font-bold mb-1 text-gray-800">{crop_name}</div>
      <div className="text-l font-bold mb-2">Rs. {price}</div>
      <div className="text-gray-500 text-sm mb-1">{city}, {state}</div>
      <ButtonLink name={"Add Bid"} href={"/crop/"+id} />
    </div>
  </div>
  )
}
