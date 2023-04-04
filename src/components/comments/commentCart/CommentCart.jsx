import React from 'react'

//Icons
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { IoArrowUndoOutline } from 'react-icons/io5';

const CommentCart = (data) => {
  return (
    <div className='item-center justify-center rounded-xl md:flex py-8 my-2 bg-slate-600'>

        <div className='flex item-center justify-center pb-4 md:pb-0'>
            <div className='flex items-center justify-between px-4 gap-2'>
                <div className='flex-col items-center justify-center text-red-500 pt-2 px-3 text-sm md:text-lg rounded-lg w-12' style={{border:"1px solid gray"}}>
                    <BiDislike className='mx-auto'/>
                    <h3 className='text-center text-zinc-400 text-sm pt-1'>{data.data.dislike}</h3>
                </div>
                <div className='flex-col items-center justify-center text-green-600 pt-2 px-3 text-sm md:text-lg rounded-lg w-12' style={{border:"1px solid gray"}}>
                    <BiLike className='mx-auto'/>
                    <h3 className='text-center text-zinc-400 text-sm pt-1'>{data.data.like}</h3>
                </div>
            </div>

            <div className='flex items-center justify-center rotate-45 w-12 h-12 rounded-xl ml-4 md:ml-0' style={{border:"1px solid gray" ,background:"#121212"}}>
                <BiUser className='red -rotate-45 text-center font-extralight mx-auto my-3 text-2xl'/>
            </div>
        </div>

        <div className='w-full md:my-0 flex-col items-center justify-center'>
            <div className='flex item-center justify-between w-full px-4 pb-2'>
                <h1 className='font-bold red md:text-lg text-sm'>
                    {data.data.name}
                </h1>
                <h1 className='md:text-sm text-zinc-300 text-xs'>
                    ({data.data.hour} hours ago)
                </h1>
            </div>

            <div className='flex item-center justify-between px-4'>
                <p className='font-thin md:text-sm text-zinc-200 text-xs'>
                    {data.data.comment}
                </p>
                <IoArrowUndoOutline className='red'/>
            </div>
        </div> 

    </div>
  )
}

export default CommentCart