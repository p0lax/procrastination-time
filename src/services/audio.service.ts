import axios from 'axios';

export const getSound = (id: string) => {
  return axios.get(`assets/sounds/${id}.mp3`, {
    responseType: 'arraybuffer',
  });
};
