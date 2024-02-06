import './App.css';
import ReactGA from 'react-ga';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home';
import theme from './theme';

function App() {
  //Google Tracking
  const TRACKING_ID = 'G-5N60213VKS';
  ReactGA.initialize(TRACKING_ID);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;