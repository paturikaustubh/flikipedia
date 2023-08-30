import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import { Menu, SearchOutlined, SettingsOutlined } from "@mui/icons-material";
import {
  Dialog,
  useMediaQuery,
  useTheme,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
} from "@mui/material";

function Navbar({ navIndx, setNavIndx }) {
  const [blur, setBlur] = useState(0);
  const navigators = [
    {
      name: "Movies",
      to: "/flikipedia/movie",
    },
    {
      name: "Series",
      to: "/flikipedia/tv",
    },
    {
      name: "Genre",
      to: navIndx === 0 ? "/flikipedia/genre/movie" : "/flikipedia/genre/tv",
    },
    {
      name: "Category",
      to:
        navIndx === 0 ? "/flikipedia/category/movie" : "/flikipedia/categoy/tv",
    },
  ];
  const [openSearch, setOpenSearch] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
      setBlur(3);
    } else {
      setBlur(0);
    }
  };

  return (
    <nav>
      <div
        className="flex h-20 flex-wrap px-8 py-2 items-center w-full top-0 z-10 fixed drop-shadow-md"
        style={{
          ...(blur === 0 ? "" : { backgroundColor: `rgba(9, 9, 11, 0.8)` }),
          backdropFilter: `blur(${blur}px)`,
          transitionDuration: "700ms",
        }}
      >
        {/* ====================||  TITLE  ||==================== */}
        <a
          className="font-bold md:text-4xl text-3xl mr-8"
          href="/flikipedia/movie/"
        >
          <span className="text-[#FF6F00]">Fliki</span>
          <span className="text-[#00BFFF]">Pedia</span>
        </a>

        {/* ====================||  NAVIGATORS  ||==================== */}
        <div className="lg:flex gap-8 text-xl text-gray-400 hidden">
          {navigators.map((item, indx) => {
            return (
              <Link
                style={{
                  ...((navIndx === indx || blur === 0) && {
                    color: "white",
                    scale: "110%",
                  }),
                }}
                className="hover:text-gray-50 duration-300"
                to={item.to}
                key={indx}
                value={indx}
                onClick={(e) => {
                  window.scrollTo({ top: 0 });
                  setNavIndx(parseInt(e.target.getAttribute("value")));
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* ====================||  SEARCH  ||==================== */}
        {/* <input
          className="ml-auto mr-4 text-gray-50 bg-stone-800 border-none outline-none h-11 rounded-xl p-4 lg:w-80 w-40 "
          placeholder={`Search in ${navigators[navIndx].name}`}
        /> */}
        <button
          className="text-gray-50 ml-auto outline-none"
          onClick={() => setOpenSearch(true)}
        >
          <SearchOutlined />
        </button>
        <SearchDialog open={openSearch} setOpen={setOpenSearch} />
        <button
          className="lg:hidden block text-white ml-4"
          onClick={() => setOpenDrawer(true)}
        >
          <Menu fontSize="large" />
        </button>
        <button className="lg:block hidden text-white ml-8">
          <SettingsOutlined />
        </button>
      </div>
      <div className="">
        <DrawerMenu
          list={navigators}
          open={openDrawer}
          setOpen={setOpenDrawer}
        />
      </div>
    </nav>
  );
}

function SearchDialog({ open, setOpen }) {
  let header = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJkZGUxZmYxNTg5MjBhMzc5ZDNmZjhjNDk2YzVkNyIsInN1YiI6IjY0NmI2ZDhkYzM1MTRjMmIwYTMzNWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HbEmD6dynpOHWFNSglBkGwyS7-Scl1pyUtLwXzBpnI",
  };
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setSearch("");
    setSearchResults([]);
  };

  useEffect(() => {
    setSearching(true);
    let cancel;
    Axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`,
      {
        headers: header,
        cancelToken: new Axios.CancelToken((c) => (cancel = c)),
      }
    )
      .then((resp) => {
        setSearchResults(resp.data.results);
        setSearching(false);
      })
      .catch((e) => {
        if (Axios.isCancel(e)) return;
      });
    return cancel;
  }, [search]);

  return (
    <>
      <Dialog
        disableRestoreFocus
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgb(38, 38, 38)",
          },
        }}
        sx={{ backdropFilter: "blur(3px)" }}
      >
        <DialogTitle>
          <p className="text-5xl text-blue-300 font-bold">Search</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText component={"div"} color={"white"}>
            <input
              autoFocus
              type="text"
              className="bg-neutral-700 text-lg rounded-md px-4 py-2 h-14 w-full mt-2 outline-none border-0"
              placeholder="Movies/TV Shows"
              onInput={(e) => setSearch(e.target.value)}
            />
            <p
              className={
                searchResults.length === 0 && search === ""
                  ? "hidden"
                  : "block mt-4"
              }
            >
              Results
            </p>
            <div
              className={
                searchResults.length === 0 && search === ""
                  ? "hidden"
                  : `overflow-y-auto h-96 pt-8 pb-4 px-2 bg-neutral-900 rounded-md mt-1`
              }
            >
              {searchResults.length === 0 && search !== "" && !searching ? (
                <div className="text-xl text-white font-semibold top-1/2 left-1/2 w-full h-full">
                  No results found
                </div>
              ) : searchResults.length !== 0 && search !== "" && !searching ? (
                <div className="flex flex-col gap-1">
                  {searchResults
                    .filter((result) => {
                      return (
                        result.media_type === "movie" ||
                        result.media_type === "tv"
                      );
                    })
                    .map((result) => {
                      return (
                        <Link
                          to={`/flikipedia/${result.media_type}/${result.id}`}
                          className="flex items-center min-h-36 gap-3 font-light hover:bg-neutral-800 duration-300 p-2 rounded-md"
                          key={`${result.media_type}/${result.id}`}
                          onClick={() => {
                            setOpen(false);
                            window.scrollTo({ top: 0 });
                          }}
                        >
                          <img
                            loading="lazy"
                            id={`${result.media_type}/${result.id}`}
                            className={
                              result.poster_path
                                ? "opacity-100 duration-300"
                                : "opacity-0"
                            }
                            src={
                              result.poster_path &&
                              `https://image.tmdb.org/t/p/w92${result.poster_path}`
                            }
                            alt="Poster"
                            width={100}
                          />
                          <div className="flex flex-col gap-2">
                            <p className="text-xl">
                              {result.name || result.title}
                            </p>
                            <p className="text-neutral-200">
                              {result.release_date
                                ? result.release_date.slice(0, 4)
                                : result.first_air_date
                                ? result.first_air_date.slice(0, 4)
                                : ""}
                            </p>
                            <p className="text-sm text-neutral-400">
                              {result.media_type.toUpperCase()}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              ) : searching ? (
                <div className="w-full h-full flex items-center justify-center">
                  <CircularProgress sx={{ color: "white" }} />
                </div>
              ) : (
                ""
              )}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className="px-3 py-2 text-lg text-gray-300"
            onClick={handleClose}
          >
            Close
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function DrawerMenu({ list, open, setOpen }) {
  const sizeBreak = useMediaQuery("(min-width:1024px)");

  const handleClose = () => {
    setOpen(false);
  };
  sizeBreak ? handleClose() : "";

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(3px)" }}
    >
      <List className="w-72 h-full bg-neutral-800 text-white">
        <p className="text-4xl font-semibold my-4 px-2">Menu</p>
        <Divider sx={{ color: "white" }} />
        {list.map((element) => {
          return (
            <ListItem
              key={element.to}
              disablePadding
              className="mb-1"
              onClick={() => {
                handleClose();
                window.scrollTo({ top: 0 });
              }}
            >
              <Link className="w-full" to={element.to}>
                <ListItemButton>
                  <ListItemText>
                    <p className="text-lg">{element.name}</p>
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default Navbar;
