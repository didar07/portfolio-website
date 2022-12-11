import React from 'react';

const EduDetails = () => {
    return (
        <div>
            <div className='text-center mt-2'>
                <button className='text-4xl text-center px-3 py-2 shadow-lg font-mono mt-3 text-white btn btn-secondary'>Edu Aid Website Details</button>

                <div className="card mt-5 bg-base-100 shadow-xl">
                    <div className='grid grid-cols-3 gap-3'>

                        <a href="https://ibb.co/MngBDVx"><img src="https://i.ibb.co/4WF1ZTn/edu1.png" alt="edu1" border="0" /></a>

                        <a href="https://ibb.co/3Wc52fv"><img src="https://i.ibb.co/gwJbNvd/edu2.png" alt="edu2" border="0" /></a>

                        <a href="https://ibb.co/mGWRKr8"><img src="https://i.ibb.co/kxCGTV1/edu3.png" alt="edu3" border="0" /></a>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            Edu Aid Website
                            <div className="badge badge-secondary">Project</div>
                        </h2>

                        <button><a className='btn btn-outline btn-secondary' href="https://edu-aid-client.web.app/">Live Site Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/edu-aid-client">Client Site Code Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/edu-aid-server">Server Site Code Link</a></button>

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

export default EduDetails;