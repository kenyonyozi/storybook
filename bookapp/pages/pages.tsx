import { useState, useEffect } from 'react';

const Posts = () => {

    const people = [
        {
            id: 1,
            name: 'James',
            age: 31,
            complete: true
        },
        {
            id: 2,
            name: 'John',
            age: 45,
            complete: true
        },
        {
            id: 3,
            name: 'Paul',
            age: 65,
            complete: false
        },
        {
            id: 4,
            name: 'Ringo',
            age: 49,
            complete: true
        },
        {
            id: 5,
            name: 'George',
            age: 34,
            complete: false
        },
        {
            id: 5,
            name: 'George',
            age: 34,
            complete: false
        },
        {
            id: 6,
            name: 'George',
            age: 34,
            complete: false
        },
        {
            id: 7,
            name: 'George',
            age: 34,
            complete: false
        },
        {
            id: 8,
            name: 'George',
            age: 34,
            complete: false
        }
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("")

    let posts = people.filter((val) => {
        // if search is empty and if "all" or nothing is selected return the entire array
        if (searchTerm == "" && filter == "" || filter == "all") {
            return val

            // if the filter is not selected, return whats included with the search term 
        } else if (filter == "" && val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val

            // if search is empty and filter drop down value exists return what matches with the filter 
        } else if (searchTerm == "" && val.complete.toString().includes(filter)) {
            return val

            // if there neither are empty do logic here
        } else if (searchTerm != "" && filter != "") {
            console.log('here')

            // return what includes the search term
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
            return val
        }
    })


    return (
        <>
            <div className="bg-white py-8 px-4 mx-3 shadow-sm border rounded-[5px] sm:px-10" >
                <div className='flex gap-4 mt-4'>
                    <select value={filter} onChange={(event) => { setFilter(event.target.value) }} className="mt-2 py-1 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <option value="">All</option>
                        <option value="true">True</option>
                        <option value="false">False</option>

                    </select>
                    <input
                        className="mt-2 py-1 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        type="text"
                        placeholder="Search..."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>

                <div>
                    <h1 className='font-bold mt-3 text-2xl text-amber-200'>CUSTOMERS</h1>

                </div>

                <div className="grid gap-4 m-2 md:grid-cols-3 lg:grid-cols-4">
                {posts && posts.map(post =>(
                    <div className='grid grid-flow-col'>
                        <div  key={post.id} className='text-sm m-1'>
                            <h3 className='font-bold m-2'>  {post.name} </h3>
                            <p>{post.age}</p>

                        </div>
                    </div>
                    ))}
                    </div>
            </div>

        </>

    );
};

export default Posts;