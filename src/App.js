import React, { useState, useEffect } from "react";

import SearchBar from "./component/SearchBar/SearchBar";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Modal from "./component/Modal/Modal";
import Button from "./component/Button/Button";
import Spinner from "./component/Loader/Loader";

import fetchImages from "./API/apiService";

import "./App.css";

function App() {
  // state = {
  //   modalContent: "",
  //   searchQuery: "",
  //   visibleImages: [],
  //   isLoading: false,
  //   openModal: false,
  // };

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [visibleImages, setVisibleImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        setVisibleImages((prevSate) => [...prevSate, ...hits]);
        handleScroll();
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line no-use-before-define
  }, [searchQuery, page]);

  const toggleModal = () => {
    setOpenModal(({ openModal }) => ({ openModal: !openModal }));
  };

  // const toggleLoading = () => {
  //   setIsLoading(({ isLoading }) => ({ isLoading: !isLoading }));
  // };

  const hadleChangeQuery = (query) => {
    if (query === searchQuery) {
      return;
    }
    setSearchQuery(query);
    setVisibleImages([]);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const modalContentSet = (itemId) => {
    // const el = visibleImages.find(({ id }) => id === itemId);
    setModalContent(visibleImages.largeImageURL);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={() => hadleChangeQuery()} />

      <ImageGallery
        images={visibleImages}
        onClick={toggleModal}
        onItemClick={() => modalContentSet()}
      />

      {openModal && (
        <Modal content={modalContent} onBackdrop={() => toggleModal()} />
      )}
      {isLoading && <Spinner />}

      {<Button onPress={handleNextPage} />}
    </div>
  );
}

export default App;
