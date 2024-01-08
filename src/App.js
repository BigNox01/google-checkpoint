
import { CssVarsProvider } from '@mui/joy';
import './App.css';
import NavbarSection from './components/navbar';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
      <NavbarSection></NavbarSection>
      <Search></Search>
      </CssVarsProvider>
    </div>
  );
}

export default App;
