import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.style.js';
import { MatchContainer } from './index.style.js';
import { FaFutbol } from 'react-icons/fa';
import apis from '../../apis/';
import ButtonPlayerMatches from '../ButtonPlayerMatches/index.jsx';


const groupByDate = (arr) => {
  const grouped = {};
  arr.forEach((item) => {
    if (!grouped[item.date]) {
      grouped[item.date] = [];
    }
    grouped[item.date].push(item);
  });
  return grouped;
};

const ContentPlayerMatches = () => {
  let {id} = useParams();
  const [matches, setMatches] = useState({});

  const fetchDataMatch = async () => {
    const dataMatches = await apis.matches.getListMatches(id);
    const sortDataByDate = groupByDate(dataMatches.result);
    setMatches(sortDataByDate);
  };

  useEffect(() => {
    fetchDataMatch();
  }, [id]);

  return (
    <MatchContainer>
      <div className="container">
        {Object.values(matches).map((element) => {
          return (
            <div key={element[0].date} className="loop">
              <div className="loop1">
                {<FaFutbol />} {element[0].groupStage} - {element[0].date}
              </div>
              <div className="loop2">
                {element.map((child) => (
                  <div key={child.id} className="loop21">
                    <div className="loop21Item1">
                      <div className="loop21Item1Frame">
                        <div className="frameChild">{child.table}</div>
                        <ButtonPlayerMatches
                          id={child.homeId.id}
                          image={child.homeId.image}
                          name={child.homeId.name}
                          score={child.homeScore}
                        />
                        <ButtonPlayerMatches
                          id={child.awayId.id}
                          image={child.awayId.image}
                          name={child.awayId.name}
                          score={child.awayScore}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </MatchContainer>
  );
};
export default ContentPlayerMatches;
