import Routes from './routes/routes';
import Navbar from './components/Navbar/Navbar';
import { AppWrapper } from './App.styles';

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Routes />
    </AppWrapper>
  );
}

export default App;
