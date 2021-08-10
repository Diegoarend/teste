import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "./../components/Atom/Button";
import {
  Card,
  CardContent,
  CardImage,
  CardInfo,
  CardTitle,
  CardText,
} from "./../components/organism/Card";
import { Header } from "../components/organism/Header";
import star from "./../images/star.svg";
import { useCart } from "../components/CartContext";
import { GetDate } from "../components/GetDate";

export const Home = () => {
  const [state, setState] = useState([]);
  const [genreState, setGenreState] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMovies, setfilteredMovies] = useState([]);

  const baseURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=9f88a170fad15980b5b472ac47c43882&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  const genreURL =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=9f88a170fad15980b5b472ac47c43882&language=en-US";

  const onSearch = (e) => {
    setSearch(e.target.value);
    console.log(e);
  };

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setState(json.results);
        setfilteredMovies(json.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(genreURL)
      .then((response) => response.json())
      .then((json) => setGenreState(json.genres))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("chegou search effect", search);
    setfilteredMovies(
      state.filter((movie) => {
        return movie.original_title
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    );
  }, [search]);

  const cart = useCart();
  const add = (movie) => async () => {
    await cart.addToCart(movie);
    const cartCounter = document.getElementById("span__counter");
    cartCounter.classList.add("bounce");
    setTimeout(() => {
      cartCounter.classList.remove("bounce");
    }, 2000);
  };
  const remove = (id) => () => {
    cart.removeFromCart(id);
  };
  const empty = () => () => {
    cart.EmptyCart();
  };

  const TotalPrice = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].movie.price;
  }, 0);

  return (
    <>
      <main>
        <Header onSearch={onSearch} />

        <>
          <section className="side__bar">
            <div className="side__bar__header">
              <p className="side__bar__title">Meu carrinho</p>
              <button className="empty__cart" onClick={empty()}>
                Esvaziar
              </button>
            </div>
            <div className="side__bar__content">
              {Object.keys(cart.cart).map((key) => {
                return (
                  <div
                    key={cart.cart[key].movie.id}
                    className="side__bar__item"
                  >
                    <img
                      className="poster_min"
                      src={`https://image.tmdb.org/t/p/w342/${cart.cart[key].movie.poster_path}`}
                      alt=""
                    ></img>
                    <p className="side__bar__movie__title">
                      {cart.cart[key].movie.original_title}
                    </p>
                    <p>{cart.cart[key].quantity}</p>
                    <p>R$ {cart.cart[key].movie.price}</p>
                    <button
                      onClick={remove(cart.cart[key].movie.id)}
                      className="trash_can"
                    ></button>
                  </div>
                );
              })}
            </div>
            <div className="sider__bar__total">
              <p>Total</p>
              <p>R$ {TotalPrice}</p>
            </div>
            <button className="side__bar__finish">
              <Link to="/payment">Finalizar compra</Link>
            </button>
          </section>
        </>
        <section className="cards">
          {filteredMovies.map((movie) => {
            const firstGenre = genreState
              .filter((obj) => obj.id === movie.genre_ids[0])
              .map((filteredObj) => filteredObj.name)[0];
            const releaseDate = GetDate(movie.release_date);
            movie.price = 79.99;
            return (
              <Card key={movie.id}>
                <CardImage
                  releaseDate={releaseDate}
                  image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <CardContent>
                  <CardTitle title={movie.original_title} />
                  <CardInfo>
                    <img className="card__rating-img" src={star} alt=""></img>
                    <CardText
                      className="card__grade"
                      text={movie.vote_average}
                    />
                    <CardText className="card__gender" text={firstGenre} />
                  </CardInfo>
                  <CardText className="card__price" text="R$ 79,99" />
                </CardContent>
                <Button onClick={add(movie)} className="card__add-car">
                  Adicionar
                </Button>
              </Card>
            );
          })}
        </section>
      </main>
    </>
  );
};
