import React, { useEffect, useState } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            kj
            <div className={` transition-transform duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
                <p>Content goes here</p>
            </div>
        </div>

    );
};

export default Home;