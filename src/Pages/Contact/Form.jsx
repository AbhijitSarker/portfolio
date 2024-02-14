import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, message,)
    };

    return (
        <div className=' section-bg border border-gray-800  shadow-inner shadow-black  max-w-xl  px-5 py-5  flex flex-col'>
            <div className=''>
                <div className='text-center text-4xl text-white font-medium mt-4 mb-8'>
                    <h1>Contact Me</h1>
                </div>
                <div className=' uppercase mt-10 md:mt-0'>
                    <form>
                        <div className=' font-medium space-y-10'>

                            <div className="relative">
                                <p className="section-bg pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-headingText absolute">Name</p>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className=" focus:shadow-xl border text-headingText placeholder-gray-400 focus:outline-none focus:border-gray-500 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-transparent border-gray-700 rounded-md" />
                            </div>
                            <div className="relative">
                                <p className="section-bg pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-headingText absolute">Email</p>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" focus:shadow-xl border text-headingText placeholder-gray-400 focus:outline-none focus:border-gray-500 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-transparent border-gray-700 rounded-md" />
                            </div>
                            <div className="relative">
                                <p className="section-bg pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-headingText absolute">Message</p>
                                <textarea
                                    className=" focus:shadow-xl border text-headingText placeholder-gray-400 focus:outline-none focus:border-gray-500 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-transparent border-gray-700 rounded-md"
                                    placeholder="Write your Message..."
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    cols="30"
                                    rows="5"></textarea>
                            </div>

                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading} // Disable button based on loading state
                            className={`w-full h-16 mt-10 border border-primary text-secondary text-2xl font-semibold rounded-lg transition duration-200 hover:bg-primary ease ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >Submit Message
                        </button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Form;