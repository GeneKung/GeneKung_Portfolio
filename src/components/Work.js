import './WorkCardStyles.css'
import React, { useDebugValue } from 'react'

import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'></h1>
        <div className='project-container'>
            {WorkCardData.map((val,ind) => {
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work;

/*
<div className='project-card'>
                <img src="https://alan.app/static/mainIll.35028f97.svg" alt="image"/>
                <h2 className='project-title'>Task Maanagement App</h2>
                <div className="pro-details">
                    <p>My project includes</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
*/