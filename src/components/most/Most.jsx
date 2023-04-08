import React from 'react'

//Components
import MostNew from './MostNew'
import MostPopular from './MostPopular'
import MostViewed from './MostViewed'
import Commercial from '../Commercial/Commercial'

const Most = ({ data }) => {

    return (
        <>
            <h1 className='text-slate-100 font-semibold text-2xl py-4'>Most Popular</h1>
            <MostPopular endpoint={data[0]}/>

            <Commercial />

            <h1 className='text-slate-100 font-semibold text-2xl py-4'>Most viewed</h1>
            <MostViewed endpoint={data[1]}/>

            <h1 className='text-slate-100 font-semibold text-2xl py-4'>Most New</h1>
            <MostNew endpoint={data[2]}/>
        </>
    )
}

export default Most