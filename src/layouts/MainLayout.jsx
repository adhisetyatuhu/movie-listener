import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
    let movieList = [
        {
            "adult": false,
            "backdrop_path": "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
            "genre_ids": [
              16,
              12,
              10751,
              35
            ],
            "id": 1241982,
            "original_language": "en",
            "original_title": "Moana 2",
            "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
            "popularity": 6947.74,
            "poster_path": "/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg",
            "release_date": "2024-11-27",
            "title": "Moana 2",
            "video": false,
            "vote_average": 7.0,
            "vote_count": 250
          },
          {
            "adult": false,
            "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
            "genre_ids": [
              878,
              28,
              12
            ],
            "id": 912649,
            "original_language": "en",
            "original_title": "Venom: The Last Dance",
            "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
            "popularity": 3207.406,
            "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
            "release_date": "2024-10-22",
            "title": "Venom: The Last Dance",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 976
          },
    ]

    const [favs, setFavs] = useState(movieList);

    useEffect(() => {
        setFavs(movieList);
    }, []);

    return (
        <div className='px-6 md:container md:mx-auto md:px-20 lg:px-6'>
            <Header />
            <Outlet context={[favs, setFavs]} />
        </div>
    );
}

export default MainLayout;