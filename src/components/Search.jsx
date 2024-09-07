import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from '@radix-ui/react-select'
import { CiSearch } from "react-icons/ci";






export default function Search() {

    const CarMakes=[
    
        {
            "id": 1,
            "name": "Audi"
        },
        {
            "id": 2,
            "name": "BMW"
        },
        {
            "id": 3,
            "name": "Chevrolet"
        },
        {
            "id": 4,
            "name": "Ferrari"
        },
        {
            "id": 5,
            "name": "Ford"
        },
        {
            "id": 6,
            "name": "Honda"
        },
        {
            "id": 7,
            "name": "Hyundai"
        },
        {
            "id": 8,
            "name": "Jaguar"
        },
        {
            "id": 9,
            "name": "Lamborghini"
        },
        {
            "id": 10,
            "name": "Land Rover"
        },
        {
            "id": 11,
            "name": "Lexus"
        },
        {
            "id": 12,
            "name": "Mazda"
        },
        {
            "id": 13,
            "name": "Mercedes-Benz"
        },
        {
            "id": 14,
            "name": "Nissan"
        },
        {
            "id": 15,
            "name": "Porsche"
        },
        {
            "id": 16,
            "name": "Subaru"
        },
        {
            "id": 17,
            "name": "Tesla"
        },
        {
            "id": 18,
            "name": "Toyota"
        },
        {
            "id": 19,
            "name": "Volkswagen"
        },
        {
            "id": 20,
            "name": "Volvo"
        }
    
    
];
const Pricing=[
    {
        id:1,
        amount:1000
    },
    {
        id:2,
        amount:2000
    },
    {
        id:3,
        amount:5000
    },
    {
        id:4,
        amount:10000
    }
];


  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center  
     w-[60%]'>
        <Select>
  <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg" >
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
    
  </SelectContent>
</Select>
<Separator orientation="vertical" className='outline-none md:border-none w-full '/>
<Select>
  <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Cars Makes" />
  </SelectTrigger>
  <SelectContent>
    {
        CarMakes.map((maker,index)=>(
<SelectItem value={maker.name}>{maker.name}</SelectItem>
        ))
    }
    
  </SelectContent>
</Select>
<Separator orientation="vertical" className='outline-none md:border-none w-full '/>
<Select>
  <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
    {
        Pricing.map((price,index)=>(
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
        ))
    }
   

  </SelectContent>
</Select>
<div>
<CiSearch  className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer'/>

</div>


    </div>
  )
}
