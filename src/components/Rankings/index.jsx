import React, { useState,useEffect } from 'react';
import { RankingContainer } from './index.style';
import { AVATAR_DEFAULT } from '../../constants';
import apis from '../../apis';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';



const Group = () => {
  const [ranks, setRanks] = useState([]);
  const fetchDataRanking = async () => {
    const dataRankings = await apis.players.getRankingPlayer();
    setRanks(dataRankings.result);
  };
  useEffect(() => {
    fetchDataRanking();
  }, []);

  return (
    <React.Fragment>
      <RankingContainer>
        <div className="groups">
          <div className="line"></div>
          <section>
            <div className="table-center">
              <div className="card my-2" id="group-team">
                <p className="h5 mx-2"> Group </p>
                <div className="table-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Đội</th>
                        <th>Số trận</th>
                        <th>Thắng</th>
                        <th>Hòa</th>
                        <th>Thua</th>
                        <th>Hiệu số</th>
                        <th>Số điểm</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ranks.map((team) => (
                        <tr key={team.id}>
                          <td>{team.rank}</td>
                          <th className="pointer">
                            <li>
                              <img
                                className="icon"
                                src={team.img || AVATAR_DEFAULT}
                                alt=""
                              ></img>{' '}
                              {team.name}
                            </li>
                          </th>
                          <td>{team.p}</td>
                          <td>{team.w}</td>
                          <td>{team.d}</td>
                          <td>{team.l}</td>
                          <td>{team.gd}</td>
                          <td>{team.pts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </RankingContainer>
    </React.Fragment>
  );
};
export default Group;
