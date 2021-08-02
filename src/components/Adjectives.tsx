import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import adjectives from '../data/adjectives'
import { useState } from 'react'

const Adjective: FC = () => {

    const [adjective, setAdjective] = useState('');

    const selected = (adjective: string) => {
        localStorage.setItem('adjective', adjective)
        setAdjective(adjective)
    }

    return (
        <div>
            <p className="text-2xl text-center my-2">
                Pick an adjective
            </p>
            <div className="overflow-y-auto mt-4" style={{maxHeight: '60vh'}}>
                {
                    adjectives.map((a, idx) => { 
                        return (
                        <div onClick={() => selected(a.name)} key={idx} className={`item " + ${adjective === a.name ? 'selected-item':''}`}>
                            <p>
                                {a.name}
                            </p>
                            <p className="text-xs text-gray-500 italic">{a.meaning}</p> 
                        </div>
                    )
                })
            }
            </div>
            <div className="text-center mt-4">
                <Link to="/noun">
                    { adjective ? 
                    <button className="btn">
                        Next
                    </button>: <></>  }
                </Link>
            </div>
        </div>
    )
}

export default Adjective
