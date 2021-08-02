import React, { FC } from 'react'
import nouns from '../data/nouns'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Noun: FC = () => {

    const [noun, setNoun] = useState('');

    const selected = (noun: string) => {
        localStorage.setItem('noun', noun)
        setNoun(noun)
    }


    return (
        <div>
            <p className="text-2xl text-center">
                Pick a noun
            </p>
            <div className="overflow-y-auto mt-4" style={{maxHeight: '60vh'}}>
                {
                    nouns.map((n, idx) => { 
                        return (
                        <div key={idx} onClick={() => selected(n.name)} className={`item " + ${noun === n.name ? 'selected-item':''}`}>
                            <p>
                                {n.name}
                            </p>
                            {/* <p className="text-xs text-gray-500 italic">{a.meaning}</p>  */}
                        </div>
                    )
                })
            }
            </div>
            <div className="text-center mt-4">
                <Link to="/answer">
                    <button className="btn">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Noun
