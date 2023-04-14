import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Complete() {
    const store = JSON.parse(localStorage.getItem("three"));

    let cart = [];
      if (store) {
          cart = store;
      }


    const running = cart.filter(task => task.finish === true);
 

    return (
        <section>
            <Navbar />
            <div className="container  mt-5">
                <h6 className='fs-4 text-center text-light mb-4'>Finish Task</h6>
                <div className='runningTodo-container'>
                    {
                        running?.map((task, ind) => {
                            return <div key={ind} className='running_child'>
                                <div><p>Title:{task.task} </p></div>
                                <div><p>Des:{task.description}</p></div>
                                <div className={task.finish? "text-success":"text-dark"}><i className="bi bi-building-check"></i></div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}