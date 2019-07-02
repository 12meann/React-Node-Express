import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Image from "./Image";

class Images extends Component {
  state = {
    images: [],
    start: 1,
    count: 30
  };

  componentDidMount() {
    const { start, count } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }))
      .catch(err => console.log(err));
  }

  fetchImages = () => {
    const { start, count } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="hero is-fullheight is-bold is-light">
        <div className="hero-body">
          <div className="container">
            <div className="header content">
              <h1 className="title is-1">Infinite Scroll with Unsplash API</h1>
            </div>
            <div className="images">
              <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.fetchImages}
                hasMore={true}
                loader={<h4 className="has-text-centered">Loading...</h4>}>
                {this.state.images.map(image => (
                  <Image key={image.id} image={image} />
                ))}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Images;
