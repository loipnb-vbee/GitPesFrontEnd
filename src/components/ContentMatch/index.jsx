import { useEffect, useState } from 'react';
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

const ContentMatch = () => {
  const [matches, setMatches] = useState({});
  const fetchDataMatch = async () => {
    const dataMatches = await apis.matches.getAllMatches();
    const sortDataByDate = groupByDate(dataMatches.result);
    setMatches(sortDataByDate);
  };
  useEffect(() => {
    fetchDataMatch();
  }, []);

  return (
    <MatchContainer>
      <div className="container">
        {Object.values(matches).map((element) => {
          return (
            <div key={element[0].date} className="show-matches-each-day">
              <div className="title-each-day ">
                <div>{<FaFutbol />} {element[0].groupStage} - {element[0].date}</div>
              </div>
              <div className="content-matches-each-day">
                {element.map((child) => (
                  <div key={child.id} className="content-match">
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
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </MatchContainer>
  );
};
export default ContentMatch;
