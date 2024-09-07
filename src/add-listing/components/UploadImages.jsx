import { Button } from '@/components/ui/button';

import {storage} from './../../../configs/firebaseConfig'
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { db } from './../../../configs'
import { CarImages } from './../../../configs/schema';




export default function UploadImages({triggerUploadImages,setLoader}) {

const[selectedFileList,setSelectedFileList]=useState([]);

useEffect(()=>{
if(triggerUploadImages){
  UploadImageToServer();
}
},triggerUploadImages);


const onFileSelected=(event)=>{
    const files=event.target.files;
    for(let i=0;i<files?.length;i++){
      const file=files[i];
      setSelectedFileList((prev)=>[...prev,file]);
    }
}

const onImageRemove=(image,index)=>{
  const result=selectedFileList.filter((item)=>item!=image);
  setSelectedFileList(result);

}
const UploadImageToServer=()=>{
  setLoader(true);
  selectedFileList.forEach((file)=>{
    const fileName=Date.now()+'.jpeg';
    const storageRef=ref(storage,'car-market/'+fileName);
    const metaData={
      contentType:'image/jpeg'
    }
    uploadBytes(storageRef,file,metaData).then((snapShot)=>{
      console.log("uploaded File");
    }).then(resp=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl);
        await db.insert(CarImages).values({
          imageUrl:downloadUrl,
          carListingId:triggerUploadImages
        })
      })
  })
  setLoader(false);
  })
}

  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-6 gap-5'>
          {selectedFileList.map((image,index)=>(
            <div key={index}>
              <h2><IoIosCloseCircle  className='absolute m-3 text-lg text-white' onClick={()=>onImageRemove(image,index)}/></h2>
<img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl'/>
              </div>
          ))}
            <label htmlFor="upload-images">
<div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
    <h2 className='text-lg text-center text-primary'>+</h2>
</div>
            </label>
            <input type="file" multiple={true} id='upload-images' onChange={onFileSelected} className='opacity-0' />
        </div>
        
    </div>
  )
}
