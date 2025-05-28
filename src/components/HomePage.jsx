import React from 'react'
import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div>
            <div className="home-page">
                <h1>Pizza Acıktırır!</h1>
                <Link to="/order">
                    <button>Acıktım</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
