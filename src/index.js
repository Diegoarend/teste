import * as React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import {App} from './pages/index'



import './index.css';

const data ={"results": [
  {
    "adult": false,
    "backdrop_path": "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
    "genre_ids": [
      28,
      12,
      53,
      878
    ],
    "id": 497698,
    "original_language": "en",
    "original_title": "Black Widow",
    "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
    "popularity": 5139.784,
    "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    "release_date": "2021-07-07",
    "title": "Black Widow",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 3876
  },
  {
    "adult": false,
    "backdrop_path": "/bwBmo4I3fqMsVvVtamyVJHXGnLF.jpg",
    "genre_ids": [
      12,
      14,
      35,
      28
    ],
    "id": 451048,
    "original_language": "en",
    "original_title": "Jungle Cruise",
    "overview": "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
    "popularity": 4798.394,
    "poster_path": "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    "release_date": "2021-07-28",
    "title": "Jungle Cruise",
    "video": false,
    "vote_average": 8,
    "vote_count": 1192
  },
  {
    "adult": false,
    "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "id": 385128,
    "original_language": "en",
    "original_title": "F9",
    "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
    "popularity": 4018.723,
    "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
    "release_date": "2021-05-19",
    "title": "F9",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 2226
  },
  {
    "adult": false,
    "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      878
    ],
    "id": 379686,
    "original_language": "en",
    "original_title": "Space Jam: A New Legacy",
    "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
    "popularity": 3217.442,
    "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
    "release_date": "2021-07-08",
    "title": "Space Jam: A New Legacy",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 1566
  }
]
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
