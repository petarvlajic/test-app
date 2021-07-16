import { Link } from 'react-router-dom';
import Moment from 'moment';
import React from 'react';
import './NewsCard.scss';

const NewsCard = (props) => {
  const { img, id, title, date } = props;
  const image = require(`../../img/news/${img}.png`).default;

  return (
    <div id={id} className="news-card">
      <Link to={`news/${id}`}>
        <img src={image} alt="news" />
      </Link>
      <div className="news-card-info">
        <span>{Moment(date).format('MMMM Do YYYY')}</span>
        <p>{title}</p>
        <span>Lorem Ipsum is simple</span>
      </div>
    </div>
  );
};

export default NewsCard;
