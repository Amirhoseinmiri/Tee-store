import { Navigate, Route, Routes } from "react-router-dom";
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
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <Navbar
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
        isLogged={isLogged}
      />
      <Suspense
        fallback={() => (
          <h1 style={{ color: "black", fontSize: "80px" }}>Loading...</h1>
        )}
      >
        <Routes>
          {appRoute.map((route) => {
            if (route.requireAuth && !isLogged) {
              return (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  element={<Navigate replace to={"/login"} />}
                />
              );
            } else {
              return (
                <Route
                  path={route.path}
                  exact
                  key={route.path}
                  element={
                    <route.component
                      _cartItems={cartItems}
                      categoryRef={categoryRef}
                      setUser={setUser}
                      setIsLogged={setIsLogged}
                      cartItems={cartItems}
                      user={user}
                      setCartItems={setCartItems}
                    />
                  }
                />
              );
            }
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
