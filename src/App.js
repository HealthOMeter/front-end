import Routes from './routes/routes';
import { AppWrapper } from './App.styles';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <Routes />
    </AppWrapper>
  );
}

export default App;
