import React from "react";

import { Header } from "../components/organism/Header";

import { useCart } from "../components/CartContext";

export const Payment = () => {
  const cart = useCart();

  const remove = (id) => () => {
    cart.removeFromCart(id);
  };
  const empty = () => () => {
    cart.EmptyCart();
  };

  return (
    <>
      <Header />
      <>
        <section className="side__bar">
          <div className="side__bar__header">
            <p className="side__bar__title">Meu carrinho</p>
            <button className onClick={empty()}>
              Esvaziar
            </button>
          </div>
          <div className="side__bar__content">
            {Object.keys(cart.cart).map((key) => {
              return (
                <>
                  <div className="side__bar__item">
                    <img
                      key={cart.cart[key].movie.id}
                      className="poster_min"
                      src={`https://image.tmdb.org/t/p/w342/${cart.cart[key].movie.poster_path}`}
                      alt=""
                    ></img>
                    <p>{cart.cart[key].movie.original_title}</p>
                    <p>{cart.cart[key].quantity}</p>
                    <p>R$ {cart.cart[key].movie.price}</p>
                    <button
                      onClick={remove(cart.cart[key].movie.id)}
                      className="trash_can"
                    ></button>
                  </div>
                </>
              );
            })}
          </div>
          <div className="sider__bar__total">
            <p>Total</p>
            <p>R$ 19,98</p>
          </div>
          <a className="side__bar__finish" target="_blank">
            Finalizar compra
          </a>
        </section>
      </>
    </>
  );
};
