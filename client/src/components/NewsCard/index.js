import React from 'react';
import './NewsCard.scss';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import store from '../../store';
import { getSingleNews } from '../../actions/news';

const NewsCard = (props) => {
  const { img, id, title, date } = props;
  const image = require(`../../img/news/${img}.png`).default;

  const getNew = () => {
    store.dispatch(getSingleNews(id));
  };

  return (
    <div id={id} className="news-card">
      <Link to={`news/${id}`}>
        <img onClick={() => getNew()} src={image} alt="news" />
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
