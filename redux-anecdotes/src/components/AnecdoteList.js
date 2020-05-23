import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdotes';
import { showMessage, hideMessage } from '../reducers/notification';
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

  const vote = id => {
    console.log('vote', id);
    dispatch(addVote(id));

    const anecdote = anecdotes.find(a => a.id === id);
    dispatch(showMessage(anecdote.content));

    setTimeout(() => dispatch(hideMessage()), 5000);
  };

  return (
    <Fragment>
      {[...anecdotes].sort(sortByVotes).map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default AnecdoteList;
