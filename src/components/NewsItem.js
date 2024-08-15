import React from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>
            {source}
          </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...s</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unkown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
