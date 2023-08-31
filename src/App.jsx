import { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import { Backdrop, CircularProgress } from "@mui/material";

import Navbar from "./Components/Navbar";
const Browse = lazy(() => import("./Pages/Browse"));
const Test = lazy(() => import("./Pages/Test"));
const Details = lazy(() => import("./Pages/Details"));
const SeasonDetails = lazy(() => import("./Pages/SeasonDetails"));
const Genres = lazy(() => import("./Pages/Genres"));

function App() {
  const [loading, setLoading] = useState(false);
  const [navIndx, setNavIndx] = useState();
  const [adult, setAdult] = useState(false);

  return (
    <Router>
      <Navbar navIndx={navIndx} setNavIndx={setNavIndx} />
      <Routes>
        <Route path="/" element={<LazyAss />}>
          <Route
            path="/flikipedia/"
            element={<Navigate to="/flikipedia/movie/" />}
          />
          <Route
            path="/flikipedia/movie"
            element={
              <Browse
                adult={adult}
                setLoading={setLoading}
                setNavIndx={setNavIndx}
                navIndx={navIndx}
                type={"movie"}
              />
            }
          />
          <Route
            path="/flikipedia/movie/:id"
            element={
              <Details
                type={"movie"}
                setLoading={setLoading}
                setNavIndx={setNavIndx}
              />
            }
          />
          <Route
            path="/flikipedia/tv"
            element={
              <Browse
                adult={adult}
                setLoading={setLoading}
                setNavIndx={setNavIndx}
                navIndx={navIndx}
                type={"tv"}
              />
            }
          />
          <Route
            path="/flikipedia/tv/:id"
            element={
              <Details
                type={"tv"}
                setLoading={setLoading}
                setNavIndx={setNavIndx}
              />
            }
          />
          <Route
            path="/flikipedia/tv/:id/season/:no"
            element={
              <SeasonDetails
                type={"tv"}
                setLoading={setLoading}
                setNavIndx={setNavIndx}
              />
            }
          />
          <Route
            path="/flikipedia/genre/:type"
            element={<Genres setLoading={setLoading} setNavIndx={setNavIndx} />}
          />
          <Route
            path="/flikipedia/test"
            element={<Test setLoading={setLoading} />}
          />
        </Route>
      </Routes>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "black",
        }}
        open={loading}
      >
        <div className="text-3xl mr-8">Loading data...</div>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Router>
  );
}

function LazyAss() {
  return (
    <Suspense fallback={<FallbackScreen />}>
      <Outlet />
    </Suspense>
  );
}

function FallbackScreen() {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;
