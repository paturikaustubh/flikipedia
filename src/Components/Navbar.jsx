import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import {
  Menu,
  SearchOutlined,
  SettingsOutlined,
  West,
} from "@mui/icons-material";
import {
  Dialog,
  useMediaQuery,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { ConsumerJSX, ConsumerEffect } from "../Context/Data";

function Navbar({ navIndx, setNavIndx }) {
  let navigate = useNavigate();
  const [blur, setBlur] = useState(0);
  const [show, setShow] = useState(false);
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
      to: "/flikipedia/genre",
    },
    {
      name: "Category",
      to: "/flikipedia/category",
    },
  ];
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenDrawer] = useState(false);
  const [openPreferences, setOpenPreferences] = useState(false);

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
      setBlur(3);
    } else {
      setBlur(0);
    }

    if (document.documentElement.scrollTop > 500) setShow(true);
    else setShow(false);
  };

  return (
    <nav>
      <div
        className="flex h-20 flex-wrap px-8 py-2 items-center w-full top-0 z-50 fixed drop-shadow-md"
        style={{
          ...(blur === 0 ? "" : { backgroundColor: `rgba(9, 9, 11, 0.8)` }),
          backdropFilter: `blur(${blur}px)`,
          transitionDuration: "300ms",
        }}
      >
        {/* ====================||  TITLE  ||==================== */}
        <button
          className="rounded-full outline-none"
          onClick={() => {
            navigate(-1);
          }}
        >
          <West style={{ color: "white" }} />
        </button>
        <Link
          className="font-bold md:text-4xl text-3xl lg:mx-8 ml-auto"
          to="/flikipedia/movie"
        >
          <span className="text-fliki-500">Fliki</span>
          <span className="text-pedia-500">Pedia</span>
        </Link>

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
          className="text-gray-50 ml-auto outline-none lg:block hidden"
          onClick={() => setOpenSearch(true)}
        >
          <SearchOutlined />
        </button>
        <SearchDialog open={openSearch} setOpen={setOpenSearch} />
        <div
          className="lg:hidden block text-white ml-auto"
          onClick={() => setOpenDrawer(true)}
        >
          <Menu fontSize="large" />
        </div>
        <button
          className="lg:block hidden text-white ml-8"
          onClick={() => setOpenPreferences(true)}
        >
          <SettingsOutlined />
        </button>
      </div>
      <DrawerMenu
        list={navigators}
        open={openMenu}
        setOpen={setOpenDrawer}
        setOpenSearch={setOpenSearch}
      />
      <PreferencesMenu open={openPreferences} setOpen={setOpenPreferences} />

      <div
        className={`go-up ${show ? "scale" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆️
      </div>
    </nav>
  );
}

function SearchDialog({ open, setOpen }) {
  const { adult, header } = useContext(ConsumerEffect);
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
      `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=${adult}&language=en-US&page=1`,
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
          <p className="lg:text-5xl md:text-4xl text-3xl text-blue-300 font-bold">
            Search
          </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText component={"div"} color={"white"}>
            <input
              autoFocus
              type="text"
              className="bg-neutral-700 text-lg rounded-md px-4 py-2 h-14 w-full lg:mt-2 outline-none border-0"
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
                  : `overflow-y-auto h-96 md:pt-4 pt-2  pb-4 md:px-2 bg-neutral-900 rounded-md mt-1`
              }
            >
              {searchResults.length === 0 && search !== "" && !searching ? (
                <div className="text-xl text-white font-semibold w-full h-full flex justify-center items-center">
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
                          className="flex items-center md:flex-row flex-col min-h-36 gap-3 font-light hover:bg-neutral-800 duration-75 p-2 rounded-md"
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
                            <p className="lg:text-xl">
                              {result.name || result.title}
                            </p>
                            <p className="text-neutral-200 text-sm">
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

function DrawerMenu({ list, open, setOpen, setOpenSearch }) {
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
      <div className="bg-neutral-800 h-full">
        <List className="w-72 text-white">
          <p className="text-4xl font-semibold my-4 px-2 text-fliki-500">
            Menu
          </p>
          <ListItem
            disablePadding
            className="mb-1"
            onClick={() => {
              handleClose();
              window.scrollTo({ top: 0 });
            }}
          >
            <ListItemButton onClick={() => setOpenSearch(true)}>
              <ListItemText>
                <p className="text-lg">Search</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
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
        <List className="w-72 bg-neutral-800 text-white">
          <ConsumerJSX>
            {({ adult, handleAdult }) => {
              return (
                <>
                  <p className="text-4xl font-semibold my-4 px-2 text-fliki-500">
                    Preferences
                  </p>
                  <ListItem disablePadding className="mb-1">
                    <ListItemButton onClick={() => handleAdult(!adult)}>
                      <ListItemText>
                        <p className="text-lg">
                          {adult ? "Disable" : "Enable"} adult content
                        </p>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </>
              );
            }}
          </ConsumerJSX>
        </List>
      </div>
    </Drawer>
  );
}

function PreferencesMenu({ open, setOpen }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ backdropFilter: "blur(3px)" }}
    >
      <div className="bg-neutral-800 h-full px-4 py-2">
        <List className="w-72 bg-neutral-800 text-white">
          <ConsumerJSX>
            {({ adult, handleAdult }) => {
              return (
                <>
                  <p className="text-4xl font-semibold my-4 px-2 text-fliki-500">
                    Preferences
                  </p>
                  <ListItem disablePadding className="mb-1">
                    <ListItemButton onClick={() => handleAdult(!adult)}>
                      <ListItemText>
                        <p className="text-lg">
                          {adult ? "Disable" : "Enable"} adult content
                        </p>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </>
              );
            }}
          </ConsumerJSX>
        </List>
      </div>
    </Drawer>
  );
}

export default Navbar;
