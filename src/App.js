import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoute } from "./routes";
import { Suspense, useRef, useState } from "react";
function App() {
  const categoryRef = useRef(null);
  const cartInitialState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
  };
  const [cartItems, setCartItems] = useState(cartInitialState);
  return (
    <div>
      <Navbar categoryRef={categoryRef} />
      <Suspense
        fallback={() => (
          <h1 style={{ color: "black", fontSize: "80px" }}>Loading...</h1>
        )}
      >
        <Routes>
          {appRoute.map((route) => (
            <Route
              path={route.path}
              exact
              key={route.path}
              element={<route.component categoryRef={categoryRef} />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
