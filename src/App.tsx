import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResetCSS from './theme/ResetCSS';
import Photos from './components/pages/Photos';
import Books from './components/pages/Books';
import Foods from './components/pages/Foods';
import SeasonsPhotos from './components/pages/SeasonsPhotos';

const App: FC = () => {
  return (
    <>
      <ResetCSS />
      <Router>
        <Switch>
          <Route path="/" exact component={Photos} />
          <Route path="/photos/spring" exact component={SeasonsPhotos} />
          <Route path="/photos/summer" exact component={SeasonsPhotos} />
          <Route path="/photos/autumn" exact component={SeasonsPhotos} />
          <Route path="/photos/winter" exact component={SeasonsPhotos} />
          <Route path="/books" component={Books} />
          <Route path="/foods" component={Foods} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
