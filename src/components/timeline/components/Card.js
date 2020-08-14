import React from 'react'
import timeline from '../../../styles/timeline.module.css'
import classNames from 'classnames'

const Card = ({position = "left"}) => {
    
    const { left, right, rowContainer, arrow, container, circle } = timeline;
    //Classes
    const arrowClass = classNames(
        arrow,
        position == "left" ? left : right,
    )
    const cardClass = classNames(
        container,
        position == "left" ? left : right,
    )

    return (
        <div className={rowContainer}>
            <div className={circle}></div>
            <div className={cardClass}>
                <h2>C++</h2>
                <p>TEST TEST</p>
                <div className={arrowClass}></div>
            </div>
        </div>
    )
}

export default Card


// <div>C</div>
// <div>Java</div>
// <div>VB .NET</div>
// <div>ASP.NET MVC</div>
// <div>React</div>
// <div>T</div>