import React from 'react'
import './Card2.css'


export default function Card2({ title, data }) {


    return (
        <>
            <div className='card2'>
                <div className='card2-title'>
                    {title}
                </div>

                <div className='card2-text'>
                    {data ? data : "No data available"}
                </div>

            </div>
        </>
    )
}
