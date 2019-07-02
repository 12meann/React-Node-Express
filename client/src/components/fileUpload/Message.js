import React, { Component } from "react";
import PropTypes from "prop-types";

class Message extends Component {
  componentDidMount() {
    var deleteButtons = document.getElementsByClassName("delete");

    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", dismiss);
    }

    function dismiss(e) {
      this.parentNode.classList.add("is-hidden");
    }
  }
  render() {
    const { msg } = this.props;

    return (
      <div className="notification is-primary">
        <button className="delete" />
        {msg}
      </div>
    );
  }
}

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
