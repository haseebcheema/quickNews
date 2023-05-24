import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, urlImage, urlSite, author, publishedAt } =
      this.props; // destructuring
    return (
      <div className="card my-2">
        <img src={urlImage} className="card-img-top" alt="..." />
        <div className="card-body col">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              <strong>
                <em>
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(publishedAt).toGMTString()}
                </em>
              </strong>
            </small>
          </p>
          <a
            href={urlSite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
