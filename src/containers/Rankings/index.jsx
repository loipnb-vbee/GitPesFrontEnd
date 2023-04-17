import React from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Group from '../../components/Rankings';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Ranking = () => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <div className="ranking">
          <Group />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Ranking;
