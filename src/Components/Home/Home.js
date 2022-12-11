import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Home = () => {

    return (
        <div>
            <section className='rounded-lg shadow-lg'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='my-auto ml-3'>
                        <h1 className='text-5xl font-bold'>Hello I'm Didarul Alam Faysal</h1>
                        <h2 className='mt-5 font-bold'>I am a React Based Frontend Developer. I know Ui/Ux design & interests in learning and coding new technologies.</h2>
                    </div>
                    <div className='p-10'>
                        <img className='rounded-lg' src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&uid=R87258934&ga=GA1.2.188054106.1669221212&semt=sph" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <h2 className='text-3xl font-bold text-center mt-7 text-secondary'>My Skills</h2>
                <div className='mt-7 grid grid-cols-3 gap-3'>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse4.mm.bing.net/th?id=OIP.PHBTJoshbg880IH9z_PB6QHaHa&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 80 }}>80%</div>
                    </div>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse3.mm.bing.net/th?id=OIP.9nmpe21kOln2OBgSM-TDZAAAAA&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 100 }}>100%</div>
                    </div>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse4.mm.bing.net/th?id=OIP.p86-uZmTpATgZr93QmtYjAHaHa&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 95 }}>95%</div>
                    </div>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse2.mm.bing.net/th?id=OIP.2lPcNBjKmc6P7DhGJ02cuAHaHa&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 90 }}>90%</div>
                    </div>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse3.mm.bing.net/th?id=OIP.GgMjcyR95L35NoosfTb9vQAAAA&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 95 }}>95%</div>
                    </div>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse1.mm.bing.net/th?id=OIP.Ic719f-PCoMe0WkukecVSgAAAA&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 85 }}>85%</div>
                    </div>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse4.mm.bing.net/th?id=OIP.gJbMaH_nIJYvtkAv6Rn5_QHaHa&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 40 }}>40%</div>
                    </div>
                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse1.mm.bing.net/th?id=OIP.2CmjOPI5qbo_ffqHS-pBjwHaHa&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 60 }}>60%</div>
                    </div>

                    <div className='shadow-lg'>
                        <img className='h-60' src="https://tse2.explicit.bing.net/th?id=OIP._yfjgiojxtfaezQcjuGtcwAAAA&pid=Api&P=0" alt="" />
                        <div className="mb-3 ml-28 radial-progress text-primary" style={{ "--value": 30 }}>30%</div>
                    </div>

                </div>
            </section>

            <section>
                <h2 className='text-3xl mt-7 font-bold text-secondary text-center'>Projects</h2>
                <div className='grid grid-cols-3 mt-5 gap-5'>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Snap Kitchen</h2>
                        <img className='p-2 rounded-3xl' src="https://tse2.mm.bing.net/th?id=OIP.-c62OEBsOI4Y19qj85l1lgHaEK&pid=Api&P=0" alt="" />
                        <div className='mt-5 mb-5 text-center'>
                            <Link to='/snapdetails' className='px-3 py-2 mb-4 mt-5 rounded btn-outline btn-secondary'>view details</Link>
                        </div>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Edu-Aid Website</h2>
                        <img className='p-2 rounded-3xl' src="https://t4.ftcdn.net/jpg/02/27/81/85/240_F_227818569_WKUTIgwnHK9UxntN1HiDQGmkSiU9AELX.jpg" alt="" />
                        <div className='mt-5 mb-5 text-center'>
                            <Link to='/edudetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link></div>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Cars Direct</h2>
                        <img className='p-2 rounded-3xl' src="https://tse3.mm.bing.net/th?id=OIP.yvZff2Ry0WxI0vTlvUTd1QHaEK&pid=Api&P=0" alt="" />
                        <div className='mt-5 mb-5 text-center'>
                            <Link to='/carsdetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link></div>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Quiz World App</h2>
                        <img className='p-2 rounded-3xl' src="https://img.freepik.com/free-psd/pink-3d-question-engagement-interface-mockup_106244-1773.jpg?size=626&ext=jpg&uid=R87258934&ga=GA1.2.188054106.1669221212&semt=sph" alt="" />
                        <div className='mt-5 mb-5 text-center'>
                            <Link to='/quizdetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link></div>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: One Man Club</h2>
                        <img className='p-2 rounded-3xl' src="https://tse2.mm.bing.net/th?id=OIP.6MYylbBeXCwF6Kyj4CUsqgHaE8&pid=Api&P=0" alt="" />
                        <div className='mt-5 mb-5 text-center'>
                            <Link to='/onemandetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link></div>
                    </div>
                    <div className='bg-base-200 rounded-lg shadow-lg'>
                        <h2 className='font-bold'>project Name: Genius Car Project</h2>
                        <img className='p-2 rounded-3xl' src="https://img.freepik.com/free-photo/black-sport-car-front-side-salon-view-black-wheel-with-metallic-silver-color-direction-door-open_114579-1166.jpg?size=626&ext=jpg&uid=R87258934&ga=GA1.2.188054106.1669221212&semt=sph" alt="" />
                        <div className='mt-5 mb-5 text-center'>
                            <Link to='/geniusdetails' className='px-3 py-2 mb-4 mt-2 rounded btn-outline btn-secondary'>view details</Link></div>
                    </div>
                </div>
            </section>
            <br />
            <Contact></Contact>
        </div>
    );
};

export default Home;