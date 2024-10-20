import React from 'react'
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

function Commonform({formcontrols, formData, setFormdata, onSubmit, buttontext}) {

  function renderInputelement(item) {
    let element = '';
    let value = formData[item.name] || '';
    switch (item.contentType) {
      case 'input':
        element = <Input type={item.type} placeholder ={item.placeholder} name={item.name} value={value} onChange={(event) => setFormdata({
          ...formData, [item.name]: event.target.value})}/>
        break;
        case 'select':
          element = (<Select name={item.name} value={value} onValueChange={(value) => setFormdata({...formData, [item.name]: value })}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={item.placeholder} />
          </SelectTrigger>
          <SelectContent>            
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>)
        break;
      case 'textarea':
        element = <Textarea className="resize-none" placeholder ={item.placeholder} name={item.name} value={value} onChange={(event) => setFormdata({
          ...formData, [item.name]: event.target.value})} />
        break;
      default:
        element = <Input type={type} placeholder ={item.placeholder} name={item.name} value={value} onChange={(event) => setFormdata({
          ...formData, [item.name]: event.target.value})}/>
        break;
    }  
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
          {
            formcontrols.map(item => {
              return <div className='grid w-full gap-1.5' key={item.name}>
              <Label className='mb-1'>{item.label}</Label>
              {
                renderInputelement(item)
              }
              </div>              
            })
          }
        </div>
        <Button type='submit' className='w-full rounded-full bg-[#2257bf] text-white hover:bg-[#3867C5] py-2 mt-4'>{buttontext ? buttontext : 'Submit'}</Button>
    </form>    
  )
}

export default Commonform