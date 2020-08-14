import React from 'react'
import timeline from '../../../styles/timeline.module.css'

const Arrow = ({rotation = 0}) => {
    const style = {
        transform: `rotate(${rotation}deg`
    }
    return <div style={style} className={timeline.arrow}></div>
}

export default Arrow
