import { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button";

const API_KEY = "22026737-4ace7165bbd581938b49ded93";
const BASE_URL = "https://pixabay.com/api/";

// const status = {
//   IDEL: "idel",
//   PENDING: "pending",
//   REJECT: "reject",
//   RESOLVE: "resolve",
// };

class App extends Component {
  state = {
    searchQuery: "",
    page: "1",
    images: [],
  };

  componentDidMount() {
    console.log("приложение замаунтилось");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("приложение обновилосью - изменился стейт");
    console.log(prevState);
    console.log(this.state);
    const { searchQuery, page } = this.state;
    // console.log(searchQuery, page, images);

    // const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (searchQuery !== prevState.searchQuery) {
      this.setState({ images: [], page: 1 });

      const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

      fetch(url)
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then(({ hits }) => {
          // console.log(hits);
          this.setState((prevState) => ({
            images: [...prevState.images, ...hits],
          }));
        });
    }
  }

  pegeIncrement = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  hendleSearchQuery = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.hendleSearchQuery} />
        <ImageGallery images={images} />
        <Button onLoadMore={this.pegeIncrement} />
      </div>
    );
  }
}

export default App;

// const API_KEY = "22026737-4ace7165bbd581938b49ded93";
// const BASE_URL = "https://pixabay.com/api/";
