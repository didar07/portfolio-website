import React from 'react';
import { Link } from 'react-router-dom';

const SnapDetails = () => {
    return (
        <div>
            <div className='text-center mt-2'>
                <button className='text-4xl text-center px-3 py-2 shadow-lg font-mono mt-3 text-white btn btn-secondary'>Snap Kitchen Details</button>


                <div className="card mt-5 bg-base-100 shadow-xl">
                    <div className='grid grid-cols-3 gap-3'>

                        <a href="https://ibb.co/mcQZ36b"><img src="https://i.ibb.co/87FvH6N/Snap1.png" alt="Snap1" border="0" /></a>

                        <a href="https://ibb.co/5GwcrTj"><img src="https://i.ibb.co/TYdh4c0/Snap2.png" alt="Snap2" border="0" /></a>

                        <a href="https://ibb.co/Th12dbZ"><img src="https://i.ibb.co/VBx95Qd/Snap3.png" alt="Snap3" border="0" /></a>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            Snap Kitchen
                            <div className="badge badge-secondary">Project</div>
                        </h2>

                        <button><a className='btn btn-outline btn-secondary' href="https://snap-kitchen-e4a4a.web.app/">Live Site Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/snap-kitchen-client">Client Site Code Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/snap-kitchen-server">Server Site Code Link</a></button>

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

        </div >
    );
};

export default SnapDetails;