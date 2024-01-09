
import { CssVarsProvider } from '@mui/joy';
import './App.css';
import NavbarSection from './components/navbar';
import Search from './components/search';
import MapContainer from './components/google';
function App() {
  return (
    <div className="App">
      <CssVarsProvider>
      <NavbarSection></NavbarSection>
      <Search></Search>
      </CssVarsProvider>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
