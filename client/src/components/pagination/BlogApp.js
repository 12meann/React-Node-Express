import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

class BlogApp extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 10
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data,
        loading: false
      });
    });
  }
  paginate = number => {
    this.setState({
      currentPage: number
    });
  };
  render() {
    const { currentPage, postsPerPage, posts } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div className="container">
        <h1 className="title is-2 has-text-centered ">
          Blog Posts with Pagination
        </h1>
        <h6 className="subtitle is-4 has-text-centered ">
          from jsonplaceholder API
        </h6>
        <Posts posts={currentPosts} loading={this.state.loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={this.paginate}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default BlogApp;
