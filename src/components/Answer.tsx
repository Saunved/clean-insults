import React, { FC } from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Answer: FC = () => {

    const [insult, setInsult] = useState('');

    useEffect(() => {
        setInsult(localStorage.getItem('adjective') + ' ' + localStorage.getItem('noun')?.toLowerCase())
    }, []);

    return (
        <div>
            <p className="text-center text-xl">
                { insult }
            </p>
            <hr className="my-4" />
            <p className="text-center italic">
                You {insult.toLowerCase()}!
            </p>
            <div className="text-center mt-4">
                <Link to="/">
                    <button className="btn">
                        Start again
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Answer
