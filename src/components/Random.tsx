import React, { FC, useEffect } from 'react'
import adjectives from '../data/adjectives'
import nouns from '../data/nouns'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Random: FC = () => {

    const [insult, setInsult] = useState('')

    useEffect(() => {
        generateRandomInsult()

    }, []);

    const generateRandomInsult = () => {
        const adjective = adjectives[Math.floor(Math.random()*adjectives.length)].name.toLowerCase()
        const noun = nouns[Math.floor(Math.random()*nouns.length)].name.toLowerCase()

        setInsult(adjective + ' ' + noun)
    }

    return (
        <div>
            <p className="text-center italic">
                You {insult}!
            </p>
            <div className="text-center mt-6">
                <button onClick={() => generateRandomInsult()} className="btn">
                    Randomize
                </button>
            </div>
            <div className="text-center">
                <Link to="/">
                    <button className="border-b mt-4 text-sm">
                        Back to home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Random
