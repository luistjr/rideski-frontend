import { useEffect, useState } from 'react';
import TimePicker from 'react-time-picker';
import { useHistory } from 'react-router-dom'; 
import '../AddRide.css';


function AddRide( { user } ) {

    let history = useHistory();

    const [rideList, setRideList] = useState([]);
    const [userItineraries, setUserItineraries] = useState([]);

    const [time, setTime] = useState('09:00');
    const [selectedRide, setSelectedRide] = useState(1);
    const [selectedItinerary, setSelectedItinerary] = useState(1);

    const formInfo = {
        ride_id: parseInt(selectedRide),
        itinerary_id: parseInt(selectedItinerary),
        time: time
    }

    useEffect(() => {
        fetch('http://[::1]:3001/rides')
        .then(response => response.json())
        .then(data => setRideList(data));
    }, [])
    
    useEffect(() => {
        fetch(`http://[::1]:3001/users/${user.id}`)
        .then(response => response.json())
        .then(data => setUserItineraries(data.itineraries));
    }, [user.id])
    
    const rideNames = rideList.map((ride) => {
        return <option key={ride.id} value={ride.id}>{ride.name}</option>
    })

    const userItineraryList = userItineraries.map((itinerary) => {
        return <option key={itinerary.id} value={itinerary.id}>{itinerary.date}</option>
    })

    function handleRideChange(e) {
        setSelectedRide(e.target.value)
    }

    function handleItineraryChange(e) {
        setSelectedItinerary(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://[::1]:3001/ride_itineraries/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formInfo),
        })
            .then(response => response.json())
            .then(() => history.push("/trips"));
    }

    return (
        <div className="add-time">
            <TimePicker onChange={setTime} value={time}/>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="time">Choose a time:</label>
                <select value={selectedItinerary} onChange={handleItineraryChange}>
                {userItineraryList}
                </select>
                <select value={selectedRide} onChange={handleRideChange}>
                    {rideNames}
                </select>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddRide;