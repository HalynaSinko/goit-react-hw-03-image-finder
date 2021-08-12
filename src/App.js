import { Component } from "react";
import Searchbar from "./Components/Searchbar";
import LoaderSpinner from "./Components/Loader";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Modal from "./Components/Modal/";
import apiImages from "./serveces/apiImages";

import s from "./App.module.css";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    loading: false,
    showButton: false,
    showModal: false,
    imageModal: "",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (searchQuery !== prevState.searchQuery) {
      this.getImages();
    }
  }

  getImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({
      loading: true,
      showButton: false,
    });

    apiImages
      .fetchImages(searchQuery, page)
      .then(({ hits, total }) => {
        if (hits.length === 0) {
          this.setState({
            error: "Sorry, search returned no results. Enter correct query.",
          });
        }

        if (hits.length === 12 && total - 12 * page > 0) {
          this.setState({ showButton: true });
        }

        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
        this.smoothScroll();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  hendleSubmit = (searchQuery) => {
    this.setState({ searchQuery, images: [], page: 1, error: "" });
  };

  toggelModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  hendleOnImageClick = (event) => {
    this.setState({ imageModal: event });
    this.toggelModal();
  };

  render() {
    const { images, loading, showButton, showModal, imageModal, error } =
      this.state;
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.hendleSubmit} />
        {loading && <LoaderSpinner />}
        {error && <p>{error}</p>}
        <ImageGallery images={images} onClick={this.hendleOnImageClick} />
        {showButton && <Button onLoadMore={this.getImages} />}
        {showModal && (
          <Modal imageModal={imageModal} onClose={this.toggelModal} />
        )}
      </div>
    );
  }
}

export default App;
