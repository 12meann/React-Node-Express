import React, { Component } from "react";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";

class fileUpload extends Component {
  state = {
    file: "",
    fileName: "",
    uploadedFile: {},
    message: "",
    uploadedPercentage: 0
  };

  handleChange = e => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    });
  };
  upload = async e => {
    e.preventDefault();
    const { file } = this.state;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          this.setState({
            uploadedPercentage: parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          });
        }
      });
      const { fileName, filePath } = res.data;
      this.setState({
        uploadedFile: { fileName, filePath },
        message: "File uploaded succesfully"
      });
    } catch (err) {
      if (err.response.status === 500) {
        this.setState({
          message: "Server problem"
        });
      } else {
        this.setState({
          message: err.response.data.msg
        });
      }
    }
  };
  render() {
    const { uploadedFile, message, uploadedPercentage } = this.state;
    return (
      <div className="container">
        {message ? <Message msg={message} /> : null}
        <h1 className="title has-text-centered">
          File Upload with progress bar
        </h1>
        <form onSubmit={this.upload}>
          <Progress percentage={uploadedPercentage} />
          <div className="field">
            <div className="file is-right is-info">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  name="resume"
                  onChange={this.handleChange}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Choose File</span>
                </span>
                <span className="file-name">{this.state.fileName}</span>
              </label>
            </div>

            <button type="submit" className="button is-primary is-centered">
              Submit
            </button>

            {uploadedFile ? (
              <div className="columns is-centered">
                <div className="column is-half">
                  <h3 className="title is-3">{uploadedFile.fileName}</h3>
                  <img
                    src={uploadedFile.filePath}
                    alt={uploadedFile.fileName}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default fileUpload;
