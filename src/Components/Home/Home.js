import React from 'react';
import Contact from '../Contact/Contact';

const Home = () => {

    return (
        <div>
            <section>
                <h2 className='text-3xl font-bold text-secondary text-center'>Projects</h2>
                <div className='grid grid-cols-3 mt-5 gap-3'>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Snap Kitchen</h2>
                        <button className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</button>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Edu-Aid Website</h2>
                        <button className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</button>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Cars Direct</h2>
                        <button className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</button>
                    </div>
                </div>
            </section>
            <br />
            <Contact></Contact>
        </div>
    );
};

export default Home;