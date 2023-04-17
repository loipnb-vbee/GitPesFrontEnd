import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { PASSWORD } from '../../../config';

const Navbar = ({ parentClassName }) => {
  const navigate = useNavigate();
  const PopUp = (event) => {
    var passWord = prompt('Enter Password:');
    if (passWord === PASSWORD) {
      navigate(`/form-match-page`, { replace: true });
    } else {
      alert('wrong Password');
      navigate(`/match`, { replace: true });
    }
  };
  return (
    <div className="navbar-header">
      <button
        onClick={() => navigate(`/match`, { replace: true })}
        className={ parentClassName }
      >
        Trận đấu
      </button>
      <button onClick={PopUp} className={ parentClassName }>
        Form
      </button>
      <button
        onClick={() => navigate(`/ranking`, { replace: true })}
        className={ parentClassName }
      >
        Bảng xếp hạng
      </button>
    </div>
  );
};

export default Navbar;
