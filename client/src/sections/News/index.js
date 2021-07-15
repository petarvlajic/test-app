import { Heading, NewsCard } from '../../components';
import { getNews } from '../../actions/news';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import store from '../../store';
import './News.scss';

const News = ({ news }) => {
  useEffect(() => {
    store.dispatch(getNews());
  }, []);

  const renderNews = () => {
    const displayAllNews = () => {
      return news.map((snews) => {
        return (
          <NewsCard
            id={snews._id}
            title={snews.title}
            description={snews.description}
            categories={snews.categories}
            img={snews.image}
            date={snews.createdAt}
          />
        );
      });
    };

    return (
      <>
        <div className="news">
          <Heading title="News and trends" subtitle="Lorem ipsum" />
          <div className="news-grid">{displayAllNews()}</div>
        </div>
      </>
    );
  };

  return <Fragment>{news && renderNews()}</Fragment>;
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps)(News);
