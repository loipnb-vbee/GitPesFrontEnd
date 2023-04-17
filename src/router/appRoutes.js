import MatchPages from './../pages/Match/Match';
import RankPages from './../pages/Rankings/Ranking';
import ROUTES from './../constants/routes';

export default [
  {
    path: ROUTES.HOME,
    component: MatchPages,
  },
  {
    path: ROUTES.MATCH,
    component: RankPages, 
  },
  {
    path: ROUTES.RANKINGS,
    component: RankPages, 
  },
];
