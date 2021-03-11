import { Document, Page } from 'react-pdf'
import '../ParkMap.css';

function ParkMap() {

    const URL = "http://[::1]:3001/images/magic-kingdom-map.jpg"


    return (
        <div>
            <br />
            <img src={URL} alt="Magic Kingdom Map" className="park-map"/>
        </div>

    );
}

export default ParkMap;