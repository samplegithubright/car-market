import React from 'react'
import { Textarea } from "@/components/ui/textarea"

export default function TextAreaField({item,handleInputChange}) {
  return (
    <div>
      <Textarea name={item.name} onChange={(e)=>handleInputChange(item.name,e.target.value)}
        required={item.required}/>
    </div>
  )
}
