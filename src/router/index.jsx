import React from 'react';
import { Routes, Route } from "react-router-dom";
import MatchPages from './../pages/Match/Match';
import RankPages from './../pages/Rankings/Ranking';
import FormMatchPages from '../pages/FormMatch/FormMatch';
import MatchesPlayerPages from './../pages/Match/MatchesPlayer';
const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<MatchPages/>} />
        <Route path="/match" element={<MatchPages />} />
        <Route path="/match/:id" element={<MatchesPlayerPages />} />
        <Route path="/ranking" element={<RankPages />} />
        <Route path="/form-match-page" element={<FormMatchPages />} />
      </Routes>
  );
};

export default AppRouter;
