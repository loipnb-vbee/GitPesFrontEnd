import { RESOURCE } from '../constants';
import api from './api';

const getAllMatches = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: `${RESOURCE.MATCH}`,
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

const getListMatches = async (playerId) => {
  try {
    const response = await api({
      method: 'GET',
      url: `${RESOURCE.MATCH}/${playerId}`,
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

const saveMatch = async (datasave) => {
  try {
    const response = await api({
      method: 'POST',
      url: `${RESOURCE.MATCH}/save`,
      data: datasave ,
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

export { getAllMatches, getListMatches,saveMatch };

