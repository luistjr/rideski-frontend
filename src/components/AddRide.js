import { useEffect, useState } from 'react';

function AddRide( { user, currentItinerary, setCurrentItinerary } ) {

    const [rideList, setRideList] = useState([]);
    const [userItineraries, setUserItineraries] = useState([]);

    const [time, setTime] = useState("1 PM");
    const [selectedRide, setSelectedRide] = useState(1);
    const [selectedItinerary, setSelectedItinerary] = useState(1);

    const formInfo = {
        ride_id: parseInt(selectedRide),
        itinerary_id: parseInt(selectedItinerary),
        time: time
    }

    console.log("form info", formInfo)

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

    function handleTimeChange(e) {
        setTime(e.target.value)
    }

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
            .then(() => setCurrentItinerary(""));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="time">Choose a time:</label>
                <select value={selectedItinerary} onChange={handleItineraryChange}>
                {userItineraryList}
                </select>
                <select value={time} onChange={handleTimeChange}>
                    <option value="1 PM">1 PM</option>
                    <option value="2 PM">2 PM</option>
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