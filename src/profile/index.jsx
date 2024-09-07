import React from 'react'
import Header from '@/components/Header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import MyListing from './components/MyListing'
export default function Profile() {
  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'> 
        <Tabs defaultValue="my-listing" className="w-full">
  <TabsList className="w-full flex justify-start">
    <TabsTrigger value="my-listing">My Listing</TabsTrigger>
    <TabsTrigger value="inbox">Inbox</TabsTrigger>
    <TabsTrigger value="profile">Profile</TabsTrigger>
  </TabsList>
  <TabsContent value="my-listing"></TabsContent>
  <TabsContent value="inbox">Inbox Tab</TabsContent>
  <TabsContent value="profile">Profile Tab</TabsContent>
</Tabs>

          <MyListing/>
        </div>
    </div>
  )
}
