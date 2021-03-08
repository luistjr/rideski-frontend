import React, { useState } from 'react';
import '../RideItem.css';
import TimePicker from 'react-time-picker';

function SelectedRideItem({ currentItinerary, setCurrentItinerary, ride }) {

    console.log("selected ride item", { currentItinerary })

    const { id, name, img, land, description, ride_itineraries } = ride;
    const [updatedTime, setUpdatedTime] = useState('09:00');
    const [showUpdateTime, setShowUpdateTime] = useState(false);


    const rideTime = ride_itineraries.map((rI) => parseInt(rI.time))[0]

    const [convertedTime, setConvertedTime] = useState(rideTime);

    const rideItineraryId = ride_itineraries.map((rI) => rI.id)[0]

    function deleteItineraries(dataId) {

        let matchItineraryRides = currentItinerary.rides.filter(ride => ride.id !== id)
        let newItineraryObj = { date: currentItinerary.date, rides: matchItineraryRides }

        setCurrentItinerary(newItineraryObj)
    }

    function handleDeleteEvent(e) {

        fetch(`http://[::1]:3001/ride_itineraries/${e.target.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then((data) => deleteItineraries(data.id))
    }

    function convertTime() {
        if (convertedTime <= 12) {
            return convertedTime.toString() + " AM"
        } else {
            return ((convertedTime - 12).toString()) + " PM"
        }
    };

    console.log("converted time", convertedTime)

    function handleEditButton(e) {
        setShowUpdateTime(!showUpdateTime);
    };

    function handleSubmitClick(e) {
        fetch(`http://[::1]:3001/ride_itineraries/${e.target.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                time: updatedTime
            }),
        })
            .then(response => response.json())
            .then((data) => {
                setShowUpdateTime(!showUpdateTime);
                const timeInteger = parseInt(data.time)
                setConvertedTime(timeInteger)
            }
            );
    }

    return (
        <div>
            <h3>{convertTime()}</h3>
            <h1 className="ride-name">{name}</h1>
            <img src={img} alt={name} className="ride-img" />
            <h4>{land}</h4>
            <p>{description}</p>
            <button onClick={handleEditButton} id={rideItineraryId}>Edit Time</button>
            <button onClick={handleDeleteEvent} id={rideItineraryId}>Remove Me</button>
            <br />
            <br />
            {showUpdateTime ? <div><TimePicker onChange={setUpdatedTime} value={updatedTime} />
                <button onClick={handleSubmitClick} id={rideItineraryId}>Submit</button></div> : null}
            <hr />
        </div>
    );
}

export default SelectedRideItem;