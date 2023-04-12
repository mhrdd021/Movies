import React from "react";

//component
import BasicRating from './Rating'

//Lodash
import { truncate } from "lodash"

const CommentCart = (data) => {
  return (
    <div className="item-center flex-col justify-center rounded-xl md:flex px-6 pt-8 my-12 gap-4 bg-zinc-900 border-1" style={{boxShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 40px -10px'}}>
      <div className="flex items-center justify-center relative -top-12">
        <img src={data.data.img} alt="avatar" className="w-16 h-16 border-2 border-gray-300 rounded-full shadow-lg shadow-white/20"/>
      </div>
      <div className="flex items-center justify-center flex-col flex-start relative -top-12">
        <h1 className="text-lg font-bold text-slate-100">{data.data.name}</h1>
        <p className="text-md font-light text-slate-300 flex justify-center">{truncate(data.data.comment, {length: 175})}</p>
      </div>
      <div className="flex items-center justify-center relative -top-12 mt-4">
        <BasicRating data={data.data.value}/>
      </div>
    </div>
  );
};

export default CommentCart;
