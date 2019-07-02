<div className="container">
  {message ? <Message msg={message} /> : null}
  <h1 className="title has-text-centered">File Upload</h1>
  <form onSubmit={this.upload}>
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
      {/* <Progress percentage={uploadedPercentage} /> */}
      <button type="submit" className="button is-primary is-centered">
        Submit
      </button>
      {/* {uploadedFile ? (
          <div className="columns is-centered">
            <div className="column is-half">
              <h3 className="title is-3">{uploadedFile.fileName}</h3>
              <img src={uploadedFile.filePath} alt={uploadedFile.fileName} />
            </div>
          </div>
        ) : null} */}
    </div>
  </form>
</div>;
