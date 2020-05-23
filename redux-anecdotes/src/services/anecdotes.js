import axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

export const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const createNew = async content => {
  const response = await axios.post(baseURL, { content, votes: 0 });
  return response.data;
};

export const putVote = async anecdote => {
  const response = await axios.put(`${baseURL}/${anecdote.id}`, anecdote);
  return response.data;
};
