import { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
  Link,
} from "react-router-dom";

import { Backdrop, CircularProgress } from "@mui/material";

import Navbar from "./Components/Navbar";
import { Data } from "./Context/Data";
const Browse = lazy(() => import("./Pages/Browse"));
const Test = lazy(() => import("./Pages/Test"));
const Details = lazy(() => import("./Pages/Details"));
const SeasonDetails = lazy(() => import("./Pages/SeasonDetails"));
const Genres = lazy(() => import("./Pages/Genres"));

function App() {
  const [loading, setLoading] = useState(false);
  const [navIndx, setNavIndx] = useState();

  return (
    <Data>
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
                  setLoading={setLoading}
                  setNavIndx={setNavIndx}
                  navIndx={navIndx}
                  type={"movie"}
                />
              }
            />
            <Route
              path="/flikipedia/:type/genre"
              element={
                <Genres setLoading={setLoading} setNavIndx={setNavIndx} />
              }
            />
            <Route
              path="/flikipedia/:type/genre/:id"
              element={
                <Genres setLoading={setLoading} setNavIndx={setNavIndx} />
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
              path="/flikipedia/test"
              element={<Test setLoading={setLoading} />}
            />
            <Route
              path="*"
              element={
                <div className="h-screen flex justify-center items-center flex-col text-white gap-6 p-4">
                  <span className="text-fliki-500 lg:text-5xl text-3xl font-bold">
                    Looks like you're lost
                  </span>
                  <Link
                    to="/flikipedia"
                    className="px-6 py-2 text-pedia-500 border-pedia-500 rounded-md border-2 lg:text-2xl text-lg hover:text-neutral-900 hover:bg-pedia-500 duration-200 cursor-pointer"
                  >
                    Go Home
                  </Link>
                </div>
              }
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
    </Data>
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
