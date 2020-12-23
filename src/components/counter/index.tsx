import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { RootState } from 'store/rootReducer';
import { CounterState, decrement, increment, incrementAsync } from 'features/counter/counterSlice';

const useStyles = makeStyles((theme: Theme) => ({
  number: {
    textAlign: 'center',
  },
  button: {
    color: '#ffffff',
  },
}));

function Counter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState): CounterState => state.counter);

  const onIncrement = useCallback(() => {
    dispatch(increment());
  }, []);

  const onIncrementAsync = useCallback(() => {
    dispatch(incrementAsync());
  }, []);

  const onDecrement = useCallback(() => {
    dispatch(decrement());
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.number}>
        <Typography>{value}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Button fullWidth className={classes.button} onClick={onIncrementAsync}>
          async +
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button fullWidth className={classes.button} onClick={onIncrement}>
          +
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button fullWidth className={classes.button} onClick={onDecrement}>
          -
        </Button>
      </Grid>
    </Grid>
  );
}

export default Counter;
