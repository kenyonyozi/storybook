import Image from 'next/image'
import projectImage from '../public/pic.jpg'
import { useState } from 'react';


const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

export default function Home() {

  const [search, setSearch] = useState('')

  return (

    <div className=" flex flex-col items-center justify-center mt-4">
      {/* fliter */}

      <div>
      <div>
      <input  className='w-full  autofill:bg-yellow-200 ' type="text"  placeholder='search' onChange={(e) =>{setSearch(e.target.value)}} />
      </div>
     

        {people.filter((val)=>{
          if(search == '') {
          return val
          }
          else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val
          }
        }).map(filteredPerson => (
          <li>
            {filteredPerson.name}
          </li>
        ))}
      </div>
      {/* {discounts.fliter (discount => discount.discount_status === active) .map(filteredDiscount =>(filteredDiscount.code))} */}


      <div className='font-semibold text-yellow-400  m-4'>
        we would like to know these guys and what they are like
      </div>
      <div className='text-green-500 mt-2'>
        know us!!
      </div>

      {/* grid */}

      <div className="grid gap-4 m-2 md:grid-cols-3 lg:grid-cols-4">

        <div className='grid grid-flow-col'>
          <Image src={projectImage} alt="Picture of the author" width={500} height={500} />
          <div className='text-sm m-1'>
            <h3 className='font-bold m-2'> This person is likeable and abit weird</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat commodi.</p>

          </div>
        </div>

        <div className='grid grid-flow-col'>
          <Image src={projectImage} alt="Picture of the author" width={500} height={500} />
          <div className=' text-sm  m-1'>
            <h3 className='font-bold m-2'> This person is sensitive and abit witty</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat commodi.</p>
          </div>
        </div>

        <div className='grid grid-flow-col'>
          <Image src={projectImage} alt="Picture of the author" width={500} height={500} />
          <div className='text-sm m-1'>
            <h3 className='font-bold m-2'> This person is sensitive and abit witty</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat commodi.</p>
          </div>
        </div>
        <div className='grid grid-flow-col'>
          <Image src={projectImage} alt="Picture of the author" width={500} height={500} />
          <div className='text-sm m-1'>
            <h3 className='font-bold m-2'> This person is sensitive and abit witty</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat commodi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
