import React from 'react'
import  Heading from './Heading'
import Card from './Crad'

const data  = [{
    id:0,
    title: 'Todo List',
    desc: 'Typescript based app for managing and organizing your task efficiently',
    img: '/todoss.JPG',
    tags: [ 'Next.js','Typescript','Node', 'CSS'],
},
{
  id: 1,
  title: 'Weather Widget',
  desc: 'Next.js and Typescript tool for fetching and desplaying real-time weather data',
  img: '/1.png',
  tags: ['Next.js', 'Typescript','Node', 'CSS'],
},
{
  id: 2,
  title: 'Countdown Timer',
  desc: 'Next.js and Typescript powered website to track time with an interactive countdown feature',
  img: '/count.png',
  tags: ['Next.js','Typescript', 'Css'],
},]

const Projects = () => {
  return (
    <div  className='container pt-32'>
      <Heading title='My projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card  
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
      </div>
    </div>
  )
}

export default Projects
