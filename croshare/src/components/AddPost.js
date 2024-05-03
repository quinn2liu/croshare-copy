import React from 'react';
import Navigation from "./Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const AddPost = () => {

    const [isPost, setPosts] = useState(true);

    return (
        <>
            <div className="fixed inset-x-8 top-0 bg-white">
                <p className="text-2xl font-bold pt-6 pb-3 font-fredoka">Add Post</p>
            </div>
            <div className='flex flex-col items-center pt-24'>
                <div onClick={() => setPosts(!isPost)}>
                    {isPost ? (
                        <div className="flex flex-row w-2/3 justify-between items-center">
                            <p className="bg-blue-300 py-1 px-8 rounded-l-md font-semibold text-white text-sm whitespace-nowrap">
                                Social Post
                            </p>
                            <p className="bg-gray-400 flex-grow py-1 px-8 rounded-r-md font-semibold text-white text-sm whitespace-nowrap">
                                Pattern
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-row w-2/3 justify-between align-center">
                            <p className="bg-gray-400 py-1 px-8 rounded-l-md font-semibold text-white text-sm whitespace-nowrap">
                                Social Post
                            </p>
                            <p className="bg-blue-300 flex-grow py-1 px-8 rounded-r-md font-semibold text-white text-sm whitespace-nowrap">
                                Pattern
                            </p>
                        </div>
                    )}
                </div>
                {isPost ? (
                    <div className='flex flex-col px-8 w-full'>
                        <div className='flex flex-col items-center '>
                            <p className='pt-6 pb-2 text-xl font-semibold font-fredoka'>Title</p>
                            <div className='py-2 px-3 w-full text-gray-500 rounded-lg bg-gray-300'>Enter Title Here</div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-col items-center pr-4'>
                                <p className='text-lg font-semibold py-2 font-fredoka'>Add Image</p>
                                <p className='p-12 rounded-xl text-3xl bg-gray-300'>+</p>
                            </div>
                            <div className='flex flex-col w-full items-center'>
                                <p className='font-semibold text-lg py-2 font-fredoka'>Caption</p>
                                <div className='w-full py-14 px-4 text-gray-500 rounded-lg bg-gray-300 text-base'>Enter Caption Here</div>
                            </div>
                        </div>
                        <Link to={'/friendfeed'}>
                            <div className='flex flex-col items-center mt-4'>
                                <p className='mt-4 p-4 bg-emerald-600 text-center text-white font-semibold text-lg w-1/2 rounded-xl'>Create Post!</p>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className='flex flex-col px-8 w-full'>
                        <div className='flex flex-col items-center '>
                            <p className='pt-6 pb-2 text-xl font-semibold font-fredoka'>Title</p>
                            <div className='py-2 px-3 w-full text-gray-500 rounded-lg bg-gray-300'>Enter Title Here</div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-col items-center pr-4'>
                                <p className='text-lg font-semibold py-2 font-fredoka'>Add Image</p>
                                <p className='p-12 rounded-xl text-3xl bg-gray-300'>+</p>
                            </div>
                            <div className='flex flex-col w-full items-center'>
                                <p className='font-semibold text-lg py-2 font-fredoka'>Description</p>
                                <div className='w-full py-14 px-4 text-gray-500 rounded-lg bg-gray-300 text-base'>Enter Description Here</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between pt-4'>
                            <div className='flex flex-col items-center w-44'>
                                <p className='pb-2 text-lg font-semibold font-fredoka'>Diffuculty</p>
                                <div className='py-2 px-3 w-full flex flex-row justify-between items-center rounded-lg bg-gray-300'>
                                    <p className='text-gray-500'>Choose Difficulty</p>
                                    <FontAwesomeIcon icon={faCaretDown} className='text-gray-500' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center w-44'>
                                <p className='pb-2 text-lg font-semibold font-fredoka'>Stitches</p>
                                <div className='py-2 px-3 w-full flex flex-row justify-between items-center rounded-lg bg-gray-300'>
                                    <p className='text-gray-500'>Choose Stitches</p>
                                    <FontAwesomeIcon icon={faCaretDown} className='text-gray-500' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full mt-4'>
                                <p className='pb-2 text-lg font-semibold font-fredoka'>Colors</p>
                                <div className='py-2 px-3 w-full flex flex-row justify-between items-center rounded-lg bg-gray-300'>
                                    <p className='text-gray-500'>Choose Colors</p>
                                    <FontAwesomeIcon icon={faCaretDown} className='text-gray-500' />
                                </div>
                        </div>
                       
                        <Link to={'/'}>
                            <div className='flex flex-col items-center mt-4'>
                                <p className='mt-4 p-4 bg-emerald-600 text-center text-white font-semibold text-lg w-1/2 rounded-xl'>Create Pattern!</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            <div className="fixed inset-x-0 bottom-0 z-20">
                <Navigation />
            </div>
        </>
    );
  }
  
  export default AddPost;
  