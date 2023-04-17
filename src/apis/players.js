import { RESOURCE } from '../constants';
import api from './api';

const getAllPlayer = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: `${RESOURCE.PLAYER}`,
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

const getRankingPlayer = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: `${RESOURCE.PLAYER}\/ranking`,
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

export { getAllPlayer, getRankingPlayer };

