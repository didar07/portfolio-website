import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Home = () => {

    return (
        <div>
            <section>
                <h2 className='text-3xl font-bold text-secondary text-center'>Projects</h2>
                <div className='grid grid-cols-3 mt-5 gap-5'>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Snap Kitchen</h2>
                        <img className='p-2 rounded-3xl' src="https://tse2.mm.bing.net/th?id=OIP.-c62OEBsOI4Y19qj85l1lgHaEK&pid=Api&P=0" alt="" />
                        <Link to='/snapdetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Edu-Aid Website</h2>
                        <img className='p-2 rounded-3xl' src="https://t4.ftcdn.net/jpg/02/27/81/85/240_F_227818569_WKUTIgwnHK9UxntN1HiDQGmkSiU9AELX.jpg" alt="" />
                        <Link to='/edudetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Cars Direct</h2>
                        <img className='p-2 rounded-3xl' src="https://tse3.mm.bing.net/th?id=OIP.yvZff2Ry0WxI0vTlvUTd1QHaEK&pid=Api&P=0" alt="" />
                        <Link to='/carsdetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Quiz World App</h2>
                        <img className='p-2 rounded-3xl' src="https://img.freepik.com/free-psd/pink-3d-question-engagement-interface-mockup_106244-1773.jpg?size=626&ext=jpg&uid=R87258934&ga=GA1.2.188054106.1669221212&semt=sph" alt="" />
                        <Link to='/quizdetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: One Man Club</h2>
                        <img className='p-2 rounded-3xl' src="https://tse2.mm.bing.net/th?id=OIP.6MYylbBeXCwF6Kyj4CUsqgHaE8&pid=Api&P=0" alt="" />
                        <Link to='/onemandetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Genius Car Project</h2>
                        <img className='p-2 rounded-3xl' src="https://img.freepik.com/free-photo/black-sport-car-front-side-salon-view-black-wheel-with-metallic-silver-color-direction-door-open_114579-1166.jpg?size=626&ext=jpg&uid=R87258934&ga=GA1.2.188054106.1669221212&semt=sph" alt="" />
                        <Link to='/geniusdetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link>
                    </div>
                </div>
            </section>
            <br />
            <Contact></Contact>
        </div>
    );
};

export default Home;