import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Tab } from '@headlessui/react'


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
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

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
            {/* navbar */}
            <nav className="fixed relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="container-fluid">
                        <a className="text-xl text-black" href="#">Navbar</a>
                    </div>

                    <div className="mb-3 w-96">
                        <input
                            type="search"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-slate-300 bg-clip-padding border border-solid border-white-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-300 focus:outline-none"
                            id="exampleSearch"
                            placeholder="Search"
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                            }}
                        />
                    </div>
                            <div className="mb-3 ">
                                <select value={filter} onChange={(event) => { setFilter(event.target.value) }} className="form-select appearance-none
                                 block
                                 w-full
                                 px-3
                                 py-1.5
                                 text-base
                                 font-normal
                                 text-gray-700
                                 bg-white bg-clip-padding bg-no-repeat
                                 border border-solid border-gray-300
                                 rounded
                                 transition
                                 ease-in-out
                                 m-0
                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                    <option value="">All</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                </div>
            </nav>
            {/* hhjj */}
            <div className='grid grid-cols-2 gap-4 m-4'>
                <div className='grid-flow-row auto-rows-max'>
                    <div className='flex gap-4 mt-4'>
                    </div>
                    <div className="m-2">
                        {posts && posts.map(post => (
                            <div key={post.id} className="m-2 p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{post.age}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    {post.name}
                                </p>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <button className='m-4 w-20 h-10 inline-flex items-center justify-center gap-2 rounded-lg border shadow-sm' onClick={() => setIsOpen(true)}>open</button>
                    <div>
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                            <div className="fixed inset-0 flex items-center justify-center p-4">
                                <Dialog.Panel className="w-full max-w-sm rounded bg-red-300">
                                    <Dialog.Title>Deactivate account</Dialog.Title>
                                    <Dialog.Description>
                                        This will permanently deactivate your account
                                    </Dialog.Description>

                                    <p>
                                        Are you sure you want to deactivate your account? All of your data
                                        will be permanently removed. This action cannot be undone.
                                    </p>

                                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                                </Dialog.Panel>
                            </div>
                        </Dialog>
                    </div>

                    <div className=''>
                        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                            <Tab.List className='gap-6'>
                                <Tab>Recent</Tab>
                                <Tab>popular</Tab>
                                <Tab>Trending</Tab>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel><div className="flex justify-center">
                                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                                        </a>
                                        <div className="p-6">
                                            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                            <p className="text-gray-700 text-base mb-4">
                                                Some quick example text to build on the card title and make up the bulk of the card's
                                                content.
                                            </p>
                                            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                        </div>
                                    </div>
                                </div>
                                </Tab.Panel>
                                <Tab.Panel>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Tab.Panel>

                                <Tab.Panel>
                                    <section className="overflow-hidden text-gray-700 ">
                                        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                                            <div className="flex flex-wrap -m-1 md:-m-2">
                                                <div className="flex flex-wrap w-1/3">
                                                    <div className="w-full p-1 md:p-2">
                                                        <Image src="https://unsplash.com/photos/DNjN4DRlE4M" alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={500} height={500} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap w-1/3">
                                                    <div className="w-full p-1 md:p-2">
                                                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                            src="https://unsplash.com/photos/DNjN4DRlE4M" width={500} height={500} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap w-1/3">
                                                    <div className="w-full p-1 md:p-2">
                                                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                            src="https://unsplash.com/photos/DNjN4DRlE4M" width={500} height={500} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap w-1/3">
                                                    <div className="w-full p-1 md:p-2">
                                                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                            src="https://unsplash.com/photos/DNjN4DRlE4M" width={500} height={500} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap w-1/3">
                                                    <div className="w-full p-1 md:p-2">
                                                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                            src="https://unsplash.com/photos/DNjN4DRlE4M" width={500} height={500} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap w-1/3">
                                                    <div className="w-full p-1 md:p-2">
                                                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                            src="https://unsplash.com/photos/DNjN4DRlE4M" width={500} height={500} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
            {/* <button className='m-4 w-20 h-10 inline-flex items-center justify-center gap-2 rounded-lg border shadow-sm' onClick={() => setIsOpen(true)}>open</button>
            <div>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-sm rounded bg-red-300">
                            <Dialog.Title>Deactivate account</Dialog.Title>
                            <Dialog.Description>
                                This will permanently deactivate your account
                            </Dialog.Description>

                            <p>
                                Are you sure you want to deactivate your account? All of your data
                                will be permanently removed. This action cannot be undone.
                            </p>

                            <button onClick={() => setIsOpen(false)}>Deactivate</button>
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>

            <div>

                <Tab.Group defaultIndex={1} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>


            <div className="" >
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

                <div className="">
                    {posts && posts.map(post => (
                        <div className='grid grid-flow-col'>
                            <div key={post.id} className='text-sm m-1'>
                                <h3 className='font-bold m-2'>  {post.name} </h3>
                                <p>{post.age}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


        </>

    );
};

export default Posts;