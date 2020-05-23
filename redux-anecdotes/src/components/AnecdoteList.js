import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdotes';
import { setNotification } from '../reducers/notification';
import sortByVotes from '../helpers/sortByVotes';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter.length === 0
      ? anecdotes
      : anecdotes.filter(anecdote =>
          anecdote.content.toLowerCase().includes(filter.toLowerCase())
        );
  });

  const dispatch = useDispatch();

  const vote = anecdote => {
    dispatch(addVote(anecdote));

    dispatch(setNotification(`You voted for "${anecdote.content}"`, 5000));
  };

  return (
    <Fragment>
      {[...anecdotes].sort(sortByVotes).map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default AnecdoteList;
