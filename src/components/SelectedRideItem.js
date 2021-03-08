import React, { useState } from 'react';
import '../RideItem.css';
import TimePicker from 'react-time-picker';

function SelectedRideItem({ currentItinerary, setCurrentItinerary, ride }) {

    const { id, name, img, land, description, ride_itineraries } = ride;
    const [updatedTime, setUpdatedTime] = useState('09:00');
    const [showUpdateTime, setShowUpdateTime] = useState(false);

    const rideTime = ride_itineraries.map((rI) => parseInt(rI.time))[0]

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

    const correctTime = function convertTime() {
        if (rideTime <= 12) {
            return rideTime + " AM"
        } else {
            return (rideTime - 12) + " PM"
        }
    };

    function handleEditButton(e) {
        console.log(e.target)
        setShowUpdateTime(true);

        return ride_itineraries.map((ride_itin) => {
            if (ride_itin.id === e.target.id) {
                console.log(ride_itin)
                // console.log("ride it id", ride_itin.id)

                fetch(`http://[::1]:3001/ride_itineraries/${ride_itin.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ride_id: ride_itin.ride_id,
                        itinerary_id: ride_itin.itinerary_id,
                        time: updatedTime
                    }),
                })
                    .then(response => response.json())
                    .then((data) => console.log(data));

            }
        });
    };

    return (
        <div>
            <h3>{correctTime()}</h3>
            <h1 className="ride-name">{name}</h1>
            <img src={img} alt={name} className="ride-img" />
            <h4>{land}</h4>
            <p>{description}</p>
            <button onClick={handleEditButton} id={rideItineraryId}>Edit Time</button>
            <button onClick={handleDeleteEvent} id={rideItineraryId}>Remove Me</button>
            <br />
            <br />
            {showUpdateTime ? <div><TimePicker onChange={setUpdatedTime} value={updatedTime} /></div> : null}
            <hr />
        </div>
    );
}

export default SelectedRideItem;