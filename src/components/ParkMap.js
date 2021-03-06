import { useEffect } from 'react'; 
import '../ParkMap.css';
import React from 'react';

function ParkMap({ setShowHome }) {

    const URL = "http://[::1]:3001/images/magic-kingdom-map.jpg";

    useEffect(() => {
        setShowHome(false)
    }, [setShowHome])

    // const initialClick = setShowHome(false);

    return (
        <div>
            {/* {initialClick} */}
            <br />
            <img src={URL} alt="Magic Kingdom Map" className="park-map"/>
        </div>

    );
}

export default ParkMap;