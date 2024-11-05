import { Routes, Route} from 'react-router-dom';
import Page1 from './Router/home.js';
import Page2 from './Router/main.js';
import Page3 from './Router/table.js';
import { ThemeProvider } from 'styled-components';
import theme from './Theme/theme.js';

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path = '/' element ={<Page1 />} />
          <Route path='/addEmployees' element={<Page2 />} />
          <Route path='/employeesData' element={<Page3 />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
