import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CarImages, CarListing } from './../../../configs/schema'
import { useUser } from '@clerk/clerk-react'
import {db} from './../../../configs'
import {desc,eq} from 'drizzle-orm'
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem'


export default function MyListing() {

    const {user}=useUser();
    const [carList,setCarList]=useState([]);
useEffect(()=>{
    user && GetUserCarListing();
},[user]);

const GetUserCarListing=async()=>{
    const result=await db.select().from(CarListing)
    .leftJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
    .where(eq(CarListing.createdBy,user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(CarListing.id))

    const resp=Service.FormatResult(result);


setCarList(resp);

    console.log(resp);
}




  return (
    <div className='mt-6'>
          <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl'>My Listing</h2>
                <Link to={'/add-listing'}>
                <Button>+ Add New Listing</Button>
                </Link>
            </div>
            <div>
{
    carList.map((item,index)=>(
        <div key={index}>
<CarItem car={item}/>
            </div>
    ))
}
            </div>
    </div>
  )
}
