import { Routes, Route} from 'react-router-dom';
import Page1 from './Router/Page1.js';
import Page2 from './Router/Page2.js';
import { ThemeProvider } from 'styled-components';
import theme from './Theme/theme.js';

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path = '/' element ={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
