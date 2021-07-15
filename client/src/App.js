// React
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Landing, SingleNews } from './pages';
import { Background } from './components';
import { Footer, Form } from './sections';
import { useEffect } from 'react';
import './App.css';

//Redux
import { getNews } from './actions/news';
import { Provider } from 'react-redux';
import store from './store';
import SingleNewsPage from './pages/SingleNews';

const App = () => {
  useEffect(() => {
    store.dispatch(getNews());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/news/:id" component={SingleNewsPage} />

          <Background bg="form-bg">
            <div className="container">
              <Form />
            </div>
          </Background>
          <div className="container">
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
