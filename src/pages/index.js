import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Button} from "./../components/Atom/Button";
import {
  Card,
  CardContent,
  CardImage,
  CardInfo,
  CardTitle,
  CardText
} from "./../components/organism/Card";
import {Header} from "../components/organism/Header"
import star from "./../images/star.svg";

export const App=() => {
  const [state,setState] = useState([]) 
  const [genreState,setGenreState]=useState([])

  const baseURL="https://api.themoviedb.org/3/discover/movie?api_key=9f88a170fad15980b5b472ac47c43882&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  const genreURL="https://api.themoviedb.org/3/genre/movie/list?api_key=9f88a170fad15980b5b472ac47c43882&language=en-US"

 
  useEffect(() => {
    fetch(baseURL)
    .then((response) => response.json())
    .then(json => setState(json.results))
    .catch(function(error) {
      console.log(error);
    });
  },[])

  useEffect(() => {
    fetch(genreURL)
    .then((response) => response.json())
    .then(json => setGenreState(json.genres))
    .catch(function(error) {
      console.log(error);
    })
  },[])

  return ( 
    <>
    < Header />
    <section className="cards">
      {state.map(movie => {
        const firstGenre=genreState.filter(obj =>(obj.id == movie.genre_ids[0])).map(filteredObj => filteredObj.name)[0]
      return (
        <Card key={movie.id}>
          <CardImage image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.original_title} />
          <CardContent>
            <CardTitle title={movie.original_title} />
            <CardInfo>
              <img className="card__rating-img" src={star} alt=""></img>
              <CardText className="card__grade" text= {movie.vote_average} />
              <CardText className="card__gender" text={firstGenre} />
            </CardInfo>
            <CardText className="card__price" text="R$ 79,99" />
          </CardContent>
          <Button className="card__add-car">Adicionar</Button>
        </Card>
      );
  })}
    </section>
    </>
  )
} 