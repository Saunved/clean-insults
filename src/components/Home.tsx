import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
    return (
        <div className="mt-4">
            <div className="text-center">         
                <Link to="/adjectives">
                    <button className="px-8 py-2 rounded-lg text-xl tracking-wide shadow bg-gradient-to-tr from-indigo-400 to-indigo-600 text-white hover:to-indigo-700">
                        Start
                    </button>
                </Link>
            </div>
            <div className="text-center mt-4">
                <Link to="/random">
                    <button className="mt-2 px-4 py-2 rounded-lg shadow border border-gray-500">
                        Generate random insult
                    </button>   
                </Link>
            </div>         
        </div>
    )
}

export default Home
