import { getSingleNews } from '../../actions/news';
import { Fragment, useEffect } from 'react';
import { Heading } from '../../components';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import './SingleNews.scss';
import React from 'react';
import store from '../../store';

const SingleNews = ({ news }) => {
  const { id } = useParams();
  useEffect(() => {
    store.dispatch(getSingleNews(id));
  }, []);

  const renderSingleNews = () => {
    const { title, description, categories, image } = news;
    const img = require(`../../img/news/${image}.png`).default;
    return (
      <>
        <Heading title={title} subtitle={categories} align="center" />
        <img className="news-banner" src={img} alt="news"></img>
        <p className="news-text">{description}</p>
        <div className="social">
          <i class="fab fa-twitter-square fa-2x"></i>
          <i class="fab fa-facebook-square fa-2x"></i>
          <i class="fab fa-instagram-square fa-2x"></i>
          <i class="fab fa-pinterest-square fa-2x"></i>
        </div>
        <div className="comments">
          <h2>Feel Free to post your comment here!</h2>
          <input type="text" placeholder="Write your comment" />
          <input type="submit" value="Submit" />
        </div>
      </>
    );
  };

  return <Fragment>{news && renderSingleNews()}</Fragment>;
};

const mapStateToProps = (state) => ({
  news: state.sNews,
});

export default connect(mapStateToProps)(SingleNews);
