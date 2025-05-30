import React from 'react'

import Footer from './Footer';
import Header1 from './Header1';
import Navigate from './Navigate';
import Main from './Main';
function HomePage() {
    return (
        <div>
            <div>
                <Header1 />
            </div>
            <div>
                <Navigate />
            </div>

            <div>
                <Main />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
