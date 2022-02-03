import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props) {
  //   super(props);
  //   .state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults:0
  //   };
  // document.title=`${.capitalizeFirstLetter(props.category)}-ApnaNews`;

const updateNews = async () => {
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=764c471f29b144ec9ae884be0a86f950&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true);
  let data = await fetch(url);
  props.setProgress(40);
  let parseData = await data.json();
  props.setProgress(70);
  console.log(parseData);
  setArticles(parseData.articles);
  setTotalResults(parseData.totalResults);
  setLoading(false);

  props.setProgress(100);
};
// "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=764c471f29b144ec9ae884be0a86f950"
useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)}-ApnaNews`;
  updateNews();
}, []);

const handlePreviousClick = async () => {
  console.log("previous");
  setPage(page - 1);
  updateNews();
};

const handleNextClick = async () => {
  console.log("next");
  setPage(page + 1);
  updateNews();
};
const fetchMoreData = async () => {
 
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=764c471f29b144ec9ae884be0a86f950&page=${page+1}&pageSize=${props.pageSize}`;
  //setState({ loading: true });
   setPage(page + 1);
   let data = await fetch(url);
  let parseData = await data.json();
  console.log(parseData);
  setArticles(articles.concat(parseData.articles));
  setTotalResults(parseData.totalResults);
};

return (
  <>
    <div className="container my-3">
      <h2 className=" text-center" style={{ color: "red", marginTop: '75px' }}>
        ApnaNews-Today's Headlines from {capitalizeFirstLetter(props.category)}{" "}
      </h2>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>{" "}
        </div>
      </InfiniteScroll>
    </div>
    <footer id="sticky-footer" className="flex-shrink-0 py-2 bg-dark text-white-50">
      <div className=" text-center">
        <small>
          Copyright &copy; ApnaNews - Made by{" "}
          <a
            className="myname"
            href="https://github.com/Navdeepmaheshwari/My-Portfolio/"
            style={{ color: "red", textDecoration: "none" }}
          >
            {" "}
            Navdeep Maheshwari{" "}
          </a>
        </small>
      </div>
    </footer>
  </>
);
     }
News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "genral",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
