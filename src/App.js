import { Routes, Route} from 'react-router-dom';
import Page1 from './Router/registration.js';
import Page2 from './Router/EmployeeRegistration.js';
import Page3 from './Router/EmployeeRegistrationtableData.js';
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

