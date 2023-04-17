import './index.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import ContentPlayerMatches from '../../components/PlayerMatches';

const Match = () => {
  return (
    <div className="match">
      <Header />
      <ContentPlayerMatches />
      <Footer />
    </div>
  );
};

export default Match;
