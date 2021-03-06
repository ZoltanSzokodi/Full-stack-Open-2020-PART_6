import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createAnecdote = e => {
    e.preventDefault();

    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = '';

    dispatch(addAnecdote(anecdote));
  };

  return (
    <Fragment>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </Fragment>
  );
};

export default AnecdoteForm;
