import { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import LoaderSpinner from "./Components/Loader/Loader";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button";
import s from "./App.module.css";

import apiImages from "./serveces/apiImages";

// const API_KEY = "22026737-4ace7165bbd581938b49ded93";
// const BASE_URL = "https://pixabay.com/api/";

// const status = {
//   IDEL: "idel",
//   PENDING: "pending",
//   REJECT: "reject",
//   RESOLVE: "resolve",
// };

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    loading: false,
    error: null,
    showButtom: false,
  };

  componentDidMount() {
    console.log("приложение замаунтилось");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("приложение обновилосью - изменился стейт");
    // console.log(prevState);
    // console.log(this.state);
    const { searchQuery } = this.state;
    // console.log(searchQuery, page, images);

    if (searchQuery !== prevState.searchQuery) {
      this.getImages();
    }
  }

  getImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
      apiImages
        .fetchImages(searchQuery, page)
        .then(({ hits }) => {
          console.log(hits);

          if (hits.length === 0) {
            console.log("error");
          }

          if (hits.length !== 12) {
            this.setState({ showButtom: false });
          } else {
            this.setState({ showButtom: true });
          }

          this.setState((prevState) => ({
            images: [...prevState.images, ...hits],
            page: prevState.page + 1,
          }));
          this.smoothScroll();
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  };

  smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  hendleSubmit = (searchQuery) => {
    this.setState({ searchQuery, images: [], page: 1 });
  };

  render() {
    const { images, loading, showButtom } = this.state;
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.hendleSubmit} />
        {loading && <LoaderSpinner />}
        {this.state.error && <p>{this.state.error}</p>}
        <ImageGallery images={images} />
        {showButtom && <Button onLoadMore={this.getImages} />}
      </div>
    );
  }
}

export default App;
