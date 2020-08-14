import React from 'react'
import container from '../../styles/container.module.css'
import Card from './components/Card'

const Timeline = () => {
    return (
        <div className={container.flexContainer}>
            <Card/>
            <Card position="right"/>
            <Card />
            <Card position="right"/>
            <div className={container.line}></div>
        </div>
    )
}

export default Timeline
