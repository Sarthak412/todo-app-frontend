import React from 'react'

const About = () => {
  return (
    <div>
        
        <div className='w-[550px] px-8 py-8 flex flex-col mx-auto mt-[4rem] rounded shadow bg-gray-200'>
            <div className='text-2xl mb-3 text-teal-900'>
                <h1>About To-do</h1>
            </div>

            <div className='flex font-sans tracking-wider'>
                <p>
                    To-do app is a Web Application in which you can create your daily todo's or manage your daily tasks.
                    This application is developed for you to be productive and be more consistent with your day to day tasks.
                </p>
            </div>
        </div>

        <div className='w-[550px] px-8 py-8 flex flex-col mx-auto mt-[4rem] rounded shadow bg-gray-200'>
            <div className='text-2xl text-teal-900'>
                <h1>Tech Stack</h1>
            </div>
            <div className='flex flex-row space-x-12'>               
                <div>
                    <h2 className='mt-3 mb-2 text-[17px] tracking-wider'>Back-end Technologies</h2>
                    <ul className='list-disc mx-4 text-[15px]'>
                        <li> Java </li>
                        <li> Spring Boot </li>
                        <li> MySQL for Database </li>
                    </ul>
                </div>

                <div>
                    <h2 className='mt-3 mb-2 text-[17px] tracking-wider'>Front-end Technologies</h2>
                    <ul className='list-disc mx-4 text-[15px]'>
                        <li> React </li>
                        <li> Tailwind CSS </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About;