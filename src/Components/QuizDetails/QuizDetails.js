import React from 'react';

const QuizDetails = () => {
    return (
        <div>
            <div className='text-center mt-2'>
                <button className='text-4xl text-center px-3 py-2 shadow-lg font-mono mt-3 text-white btn btn-secondary'>Quiz World App Details</button>

                <div className="card mt-5 bg-base-100 shadow-xl">
                    <div className='grid grid-cols-3 gap-3'>

                        <a href="https://ibb.co/CVdLGg3"><img src="https://i.ibb.co/DwXd2hH/quiz1.png" alt="quiz1" border="0" /></a>

                        <a href="https://ibb.co/6t7qSnS"><img src="https://i.ibb.co/bvMGVWV/quiz2.png" alt="quiz2" border="0" /></a>

                        <a href="https://ibb.co/HVYR7m2"><img src="https://i.ibb.co/0cZ1qPX/quiz3.png" alt="quiz3" border="0" /></a>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            Quiz World App
                            <div className="badge badge-secondary">Project</div>
                        </h2>

                        <button><a className='btn btn-outline btn-secondary' href="https://bright-phoenix-93f622.netlify.app/topics">Live Site Link</a></button>
                        <button><a className='btn btn-outline btn-secondary' href="https://github.com/didar07/quiz-world-app">Client Site Code Link</a></button>

                        <p className='font-bold'>these features are using this projects</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">Daisy Ui</div>
                            <div className="badge badge-outline">KitWind</div>
                            <div className="badge badge-outline">Mamba Ui</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;