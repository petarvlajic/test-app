import { Heading } from '../../components';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import './SingleNews.scss';
import React from 'react';

const SingleNews = ({ news }) => {
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
