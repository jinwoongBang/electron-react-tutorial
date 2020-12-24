import React from 'react';
import clsx from 'clsx';
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Theme,
  withStyles,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // border: '1px solid tomato',
  },
  margin: {
    margin: '10px 0 10px 0',
  },
  timeInputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  timeInput: {
    width: '30%',
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input': {
      // color: '#ffffff',
    },
    '& input:valid + fieldset': {
      borderColor: '#3f51b5',
      // borderLeftWidth: 6,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      // borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
    '&.Mui-focused fieldset': {
      //   borderColor: 'green',
    },
    '& input:hover fieldset': {
      borderColor: '#ffffff',
    },
    // '& .MuiOutlinedInput-root': {
    //   '&:hover fieldset': {
    //     // borderColor: '#ffffff',
    //   },
    // },
  },
})(TextField);

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

function Calculator() {
  const classes = useStyles();

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.margin}>
          <ValidationTextField
            fullWidth
            label="FPS"
            // required
            variant="outlined"
            id="validation-outlined-input"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} className={clsx(classes.margin, classes.timeInputContainer)}>
          <ValidationTextField
            className={classes.timeInput}
            label="hour"
            variant="outlined"
            id="validation-outlined-input"
            // placeholder="hour"
          />
          <ValidationTextField
            className={classes.timeInput}
            label="minute"
            variant="outlined"
            id="validation-outlined-input"
            // placeholder="hour"
          />
          <ValidationTextField
            className={classes.timeInput}
            label="second"
            variant="outlined"
            id="validation-outlined-input"
            // placeholder="hour"
          />
        </Grid>
        <Grid item xs={12} className={classes.margin}>
          <ValidationTextField
            fullWidth
            label="Frame Rate"
            variant="outlined"
            id="validation-outlined-input"
            // placeholder="minute"
          />
        </Grid>
        <Grid item xs={12} className={classes.margin}>
          <ValidationTextField
            fullWidth
            label="Frame Rate"
            // required
            variant="outlined"
            id="validation-outlined-input"
            // placeholder="second"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} className={classes.margin}>
          <Button fullWidth color="primary" variant="contained">
            계산
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Calculator;
