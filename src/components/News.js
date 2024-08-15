import React, {useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

  const updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parceData = await data.json();
    props.setProgress(70);
    setArticles(parceData.articles);
    setTotalResults(parceData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  },[])

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parceData = await data.json();
    setArticles(articles.concat(parceData.articles));
    setTotalResults(parceData.totalResults);
  };

    return (
      <>
        <h1 className="text-center" style={{marginTop : "90px"}}>NewsMonkey - Top Headlines</h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row mt-4">
              {articles.map((element) => {
                return (
                  <div className="col md-3 my-2" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description
                          ? element.description.slice(0, 100)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                      newsUrl={element.url}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}

export default News;
