import { Separator } from '@radix-ui/react-select'
import React from 'react';
import { LuFuel } from "react-icons/lu";
import { IoMdSpeedometer } from "react-icons/io";
import { TbManualGearbox } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";





export default function CarItem({car}) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
        <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm pb-1 text-white'>New</h2>
<img src={car?.images[0]?.imageUrl} alt="" width={'100%'} height={250} className='rounded-t-xl'/>
<div className='p-4'>
    <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>
    <Separator className='border-[2px] border-[grey]'/>
    <div className='grid grid-cols-3 mt-5'>
        <div className='flex flex-col items-center'>
        <LuFuel className='text-lg mb-2'/>
        <h2>{car.mileage} Miles</h2>
        </div>
        <div className='flex flex-col items-center'>
        <IoMdSpeedometer className='text-lg mb-2'/>
        <h2>{car.fuelType} </h2>
        </div>
        <div className='flex flex-col items-center'>
        <TbManualGearbox className='text-lg mb-2'/>
        <h2>{car.transmission}</h2>
        </div>
    </div>
    <Separator className='border-[2px] border-[grey] my-2'/>
    <div className='flex items-center justify-between'>
        <h2 className='font-bold text-xl'>${car.sellingPrice}</h2>
        <h2 className='text-primary text-sm flex gap-2 items-center'>
     View Details
     <MdOpenInNew />
            </h2>
    </div>
</div>





    </div>
  )
}
