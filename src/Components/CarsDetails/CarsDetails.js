import React from 'react';

const CarsDetails = () => {
    return (
        <div>
            <div className='text-center mt-2'>
                <button className='text-4xl text-center px-3 py-2 shadow-lg font-mono mt-3 text-white btn btn-secondary'>Cars Details</button>

                <div className="card mt-5 bg-base-100 shadow-xl">
                    <div className='grid grid-cols-3 gap-3'>

                        <a href="https://ibb.co/9s1n1QX"><img src="https://i.ibb.co/t8vBvVf/cars1.png" alt="cars1" border="0" /></a>

                        <a href="https://ibb.co/pnpRFHF"><img src="https://i.ibb.co/QXGCwWw/cars2.png" alt="cars2" border="0" /></a>

                        <a href="https://ibb.co/2tyJ68m"><img src="https://i.ibb.co/BZtkP4d/cars3.png" alt="cars3" border="0" /></a>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            Cars Details
                            <div className="badge badge-secondary">Project</div>
                        </h2>

                        <button><a className='btn btn-outline btn-secondary' href="https://cars-direct-85daa.web.app/">Live Site Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/cars-direct-client">Client Site Code Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/cars-direct-server">Server Site Code Link</a></button>

                        <p className='font-bold'>these features are using this projects</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">Firebase</div>
                            <div className="badge badge-outline">Daisy Ui</div>
                            <div className="badge badge-outline">Mamba Ui</div>
                            <div className="badge badge-outline">Mongo Db</div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default CarsDetails;