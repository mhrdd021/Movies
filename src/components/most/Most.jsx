import React, { useEffect, useState } from 'react'

//Components
import MostNew from './MostNew'
import MostPopular from './MostPopular'
import MostViewed from './MostViewed'

//Axios
import axios from "axios";

const Most = ({ Api }) => {

    const [mostPopular , setMostPopular] = useState([]);
    const [mostView , setMostView] = useState([]);
    const [mostNew , setMostNew] = useState([]);

    useEffect(() => {
        async function FetchApi() {
          const res = await axios.get(`${Api.BaseURL}?page=1`);
          const res2 = await axios.get(`${Api.BaseURL}?page=8`);
          const res3 = await axios.get(`${Api.BaseURL}?page=19`);
          setMostPopular(res.data.data.slice(0, 10));
          setMostView(res2.data.data.slice(0, 10));
          setMostNew(res3.data.data.slice(0, 10));
        }
        FetchApi();
      }, []);

    return (
        <>
            <h1 className='text-slate-100 font-semibold text-2xl py-4'>Most Popular</h1>
            <MostPopular endpoint={mostPopular}/>

            <h1 className='text-slate-100 font-semibold text-2xl py-4'>Most viewed</h1>
            <MostViewed endpoint={mostView}/>

            <h1 className='text-slate-100 font-semibold text-2xl py-4'>Most New</h1>
            <MostNew endpoint={mostNew}/>
        </>
    )
}

export default Most