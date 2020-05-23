import { getAll, createNew, putVote } from '../services/anecdotes';

const reducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.payload;
    case 'VOTE': {
      const { id } = action.payload;

      return state.map(anecdote =>
        anecdote.id === id ? action.payload : anecdote
      );
    }
    case 'ADD_ANECDOTE':
      return state.concat(action.payload);
    default:
      return state;
  }
};

// ACTION CREATORS ========================
export const initAnecdotes = () => async dispatch => {
  const anecdotes = await getAll();
  dispatch({
    type: 'INIT_ANECDOTES',
    payload: anecdotes,
  });
};

export const addVote = anecdote => async dispatch => {
  const updatedAnecdote = await putVote({
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  dispatch({
    type: 'VOTE',
    payload: updatedAnecdote,
  });
};

export const addAnecdote = anecdote => async dispatch => {
  const newAnecdote = await createNew(anecdote);
  dispatch({
    type: 'ADD_ANECDOTE',
    payload: newAnecdote,
  });
};

export default reducer;
