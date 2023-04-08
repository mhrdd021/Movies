import React from 'react'


//Images
import Action from '../../assets/action.jpg'
import Animation from '../../assets/animation.jpg'
import Biography from '../../assets/biography.jpg'
import Comedy from '../../assets/comedy.jpg'
import Crime from '../../assets/crime.jpg'
import Fantasy from '../../assets/fantasy.jpg'
import Mystery from '../../assets/mystery.jpg'
import War from '../../assets/war.jpg'
import CategoriesList from './CategoriesList/CategoriesList'

const CategoriesData = [
  {
    title : 'Action' ,
    image: Action,
    CategoryId: 3
  },
  {
    title : 'Animation' ,
    image: Animation,
    CategoryId: 15
  },
  {
    title : 'Biography' ,
    image: Biography,
    CategoryId: 4
  },
  {
    title : 'Comedy' ,
    image: Comedy,
    CategoryId: 9
  },
  {
    title : 'Crime' ,
    image: Crime,
    CategoryId: 1
  },
  {
    title : 'Fantasy' ,
    image: Fantasy,
    CategoryId: 7
  },
  {
    title : 'Mystery' ,
    image: Mystery,
    CategoryId: 11
  },
  {
    title : 'War' ,
    image: War,
    CategoryId: 14
  },
]



const Categories = () => {


  return (
    <div className='w-full auto bg-red flex item center justify-center py-10'

    >
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 md:w-9/12 w-10/12'>
          {
            CategoriesData.map ((categoryItem , i) => (
              <li key={i}>
                <CategoriesList CategoriesData={categoryItem} className="rounded-full"/>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Categories