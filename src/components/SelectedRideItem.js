import React from 'react';
import '../RideItem.css';

function SelectedRideItem({ currentItinerary, setCurrentItinerary, ride, itineraries, setItineraries, user }) {
    const { id, name, img, land, description, ride_itineraries } = ride;

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };

    const rideTime = ride_itineraries.map((rI) => rI.time)

    const rideItineraryId = ride_itineraries.map((rI) => rI.id)

    // console.log("set ride item itinerary", itineraries);
    console.log("selected ride item - current itinerary", currentItinerary);

    // function updateItineraries(id) {
    //     fetch(`http://[::1]:3001/users/${id}`)
    //         .then(r => r.json())
    //         .then(data => {
    //             return setItineraries(data.itineraries)
    //         });
    // }

    // how do I get itineraries to update? 

    // function deleteItineraries(dataId) {
    //     const updatedItinerary = itineraries.map((itinerary) => {
    //         if (currentItinerary.id === itinerary.id) {
    //             const matchItinerary = itinerary.rides.map((ride) => {
    //                 if (ride.id === id) {
    //                     console.log(ride)
    //                     const updatedRide = []
    //                      ride.ride_itineraries.map((individualRideItinerary) => {
    //                         console.log("individual", individualRideItinerary)
    //                         console.log("dataid", dataId)
    //                             if (individualRideItinerary.id !== dataId){
    //                                 updatedRide.push(individualRideItinerary)
    //                             }
    //                         })
    //                         console.log(updatedRide)
    //                         const test = {...ride, ride_itineraries: updatedRide}
    //                         console.log("test", test)
    //                         return test
    //                 } else {
    //                     return ride
    //                 }
    //             }
    //             )
    //             console.log(matchItinerary)
    //             return matchItinerary
    //         } else {
    //             return itinerary
    //         }
    //         // console.log("updated itinerary", updatedItinerary)
    //         // setCurrentItinerary({ ...currentItinerary, rides: updatedItinerary });
    //     })
    //     console.log("updated itinerary", updatedItinerary);
    //     setItineraries(updatedItinerary)
    // }

    function deleteItineraries(dataId) {
        // console.log('CURRENT', currentItinerary);

        // let matchItineraryRides = currentItinerary.rides.filter(ride => ride.id !== id)
        // console.log('DELETED RIDE', matchItineraryRides);

        // currentItinerary.rides = matchItineraryRides
        // console.log('NEW CURRENT', currentItinerary);
        
        // setCurrentItinerary(currentItinerary)
    }

    function handleDeleteEvent(e) {

        // setItineraries([]);

        fetch(`http://[::1]:3001/ride_itineraries/${e.target.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then((data) => deleteItineraries(data.id))
    }

    const checkFunction = function convertTime(){
        if (parseInt(rideTime[0]) <= 12){
            return parseInt(rideTime[0]) + " AM"
        } else {
            return (parseInt(rideTime[0]) - 12) + " PM"
        }
    }

    // how to get the state updated

    return (
        <div>
            <h3>{checkFunction()}</h3>
            <h1 className="ride-name">{name}</h1>
            <img src={img} alt={name} className="ride-img" />
            <h4>{land}</h4>
            <p>{description}</p>
            <button onClick={handleDeleteEvent} id={rideItineraryId}>Remove Me</button>
            <hr />
        </div>
    );
}

export default SelectedRideItem;