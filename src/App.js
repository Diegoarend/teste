import { CartProvider } from "./components/CartContext";
import { Routes } from "./routes/routes";

export const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
};
