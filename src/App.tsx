import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles';
import Counter from 'components/counter';
import { Calculator } from 'components/calculator';

const theme = createMuiTheme({
  typography: {
    // fontFamily: "Noto Sans KR",
    fontSize: 10,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // "@font-face": [
        //   {
        //     fontFamily: "Noto Sans KR",
        //     fontStyle: "normal",
        //     fontDisplay: "swap",
        //     fontWeight: 400,
        //     src: `
        //     local(''),
        //     local('Noto Sans KR'),
        //     url(${NotoSansWoff2}) format('woff2'),
        //     url(${NotoSansWoff}) format('woff')
        //   `,
        //   },
        // ],
        html: {
          WebkitFontSmoothing: 'auto',
          letterSpacing: -1,
        },
        body: {
          backgroundColor: 'inherit',
          color: '#ffffff',
          boxSizing: 'border-box',
        },
      },
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 960,
  //     lg: 1200,
  //     xl: 1920,
  //   },
  // },
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // margin: '100px 0 0 0',
    // border: '1px solid tomato',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container className={classes.root}>
          <Calculator />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
