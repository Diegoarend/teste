import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

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
import { useCart} from '../components/CartContext';
import poster from "./../images/poster.jpg";
import { GetDate } from '../components/GetDate';


export const Home = () => {
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

  const cart=useCart()
  const add=(movie) => () => {
    cart.addToCart(movie)
  }
  const remove= (id) => () => {
  cart.removeFromCart(id)
  }
  const empty= () => () => {
    cart.EmptyCart()
    }


    const TotalPrice= Object.keys(cart.cart).reduce((prev,curr) => {
      return prev + cart.cart[curr].movie.price
    },0)

  return ( 
    <>
    < Header />
   <>

       <section className="side__bar">
        <div className="side__bar__header">
          <p className="side__bar__title">Meu carrinho</p>
          <button className onClick={empty()}>Esvaziar</button>
        </div>
        <div className="side__bar__content">
        {Object.keys(cart.cart).map((key) => {
          console.log(cart.cart[key])
          return (
            <>
            <div className="side__bar__item">
              <img key={cart.cart[key].movie.id} className="poster_min" src={poster} alt=""></img>
              <p>{cart.cart[key].movie.original_title}</p>
              <p>{cart.cart[key].quantity}</p>
              <p>R$ {cart.cart[key].movie.price}</p>
              <button onClick={remove(cart.cart[key].movie.id)} className="trash_can"></button>
          </div>
          </>
          )
        })

        }
        </div>
        <div className="sider__bar__total">
          <p>Total</p>
          <p>R$ {TotalPrice}</p>
        </div>
        <a className="side__bar__finish" href="/cart" target="_blank"><Link to="/payment">Finalizar compra</Link></a>

    </section>
    </>
    <section className="cards">
      {state.map(movie => {
        const firstGenre=genreState.filter(obj =>(obj.id === movie.genre_ids[0])).map(filteredObj => filteredObj.name)[0]
        const releaseDate=GetDate(movie.release_date)
        movie.price=79.99
      return (
        <Card key={movie.id}>
          <CardImage image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.original_title} />
          <CardContent>
            <CardTitle title={movie.original_title} />
            <CardInfo>
              <p>{releaseDate}</p>
              <img className="card__rating-img" src={star} alt=""></img>
              <CardText className="card__grade" text= {movie.vote_average} />
              <CardText className="card__gender" text={firstGenre} />
            </CardInfo>
            <CardText className="card__price" text="R$ 79,99" />
          </CardContent>
          <Button onClick={add(movie)} className="card__add-car">Adicionar</Button>
          <button onClick={remove(movie.id)}>add</button>
        </Card>
      );
  })}
    </section>
    </>
  )
} 