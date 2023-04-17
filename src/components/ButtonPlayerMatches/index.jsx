import { useNavigate } from 'react-router-dom';
import { AVATAR_DEFAULT } from '../../constants';
import { ButtonStyle } from './index.style';

const ButtonPlayerMatches = ({ id, image, name, score }) => {
  const navigate = useNavigate();
  return (
    <ButtonStyle>
      <button
        value={id}
        onClick={() => navigate(`/match/${id}`)}
        className="button"
      >
        <div className="information">
          <img className="avatar" src={image || AVATAR_DEFAULT} alt="" />
          <div className="name">{name}</div>
        </div>
        <div>{score}</div>
      </button>
    </ButtonStyle>
  );
};
export default ButtonPlayerMatches;
