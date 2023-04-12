import React from 'react'
import Navbar from '../Navbar/Navbar'
import TodoWrapper from '../TodoWrapper'

function Home() {
    return (
        <section>
            <Navbar />
            <div className='col-lg-6 col-md-8 bg-light mx-auto d-flex justify-content-center rounded  mt-5 p-3'>
                <TodoWrapper />
            </div>
        </section>
    )
}

export default Home