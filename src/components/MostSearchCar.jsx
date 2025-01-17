import FakeData from '@/Shared/FakeData'
import React from 'react'
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
export default function MostSearchCar() {
    console.log(FakeData.carList);
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Car</h2>
        <Carousel>
  <CarouselContent>
   
    {
            FakeData.carList.map((car,index)=>(
                <CarouselItem className='basis-1/4'>
                    <CarItem car={car} key={index}/>
                </CarouselItem>
                
            ))
        }
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>



       
    </div>
  )
}
