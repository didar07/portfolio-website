import React from 'react';

const OneManDetails = () => {
    return (
        <div>
            <div className='text-center mt-2'>
                <button className='text-4xl text-center px-3 py-2 shadow-lg font-mono mt-3 text-white btn btn-secondary'>One Man Club Details</button>

                <div className="card mt-5 bg-base-100 shadow-xl">
                    <div className='grid grid-cols-3 gap-3'>

                        <a href="https://ibb.co/VYd4hQL"><img src="https://i.ibb.co/B2mM7rf/club1.png" alt="club1" border="0" /></a>

                        <a href="https://ibb.co/MkTTkrc"><img src="https://i.ibb.co/TMXXM64/club2.png" alt="club2" border="0" /></a>

                        <a href="https://ibb.co/x5Njz1P"><img src="https://i.ibb.co/f0sprkB/club3.png" alt="club3" border="0" /></a>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            One Man Club
                            <div className="badge badge-secondary">Project</div>
                        </h2>

                        <button><a className='btn btn-outline btn-secondary' href="https://zesty-alfajores-c6ad7c.netlify.app/">Live Site Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/one-man-club">Client Site Code Link</a></button>

                        <p className='font-bold'>these features are using this projects</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">Javascript</div>
                            <div className="badge badge-outline">Daisy Ui</div>
                            <div className="badge badge-outline">Single Page Applicatipn</div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OneManDetails;