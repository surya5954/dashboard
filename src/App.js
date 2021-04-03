import './App.css';
import Drawer from './components/Navigation/Drawer/Drawer';
import ChartLayout from './components/Layout/ChartLayout/ChartLayout';

const App = () => {
  let dasboard = <ChartLayout />
  return (
    <div className="App">
      <Drawer content={dasboard} />
    </div>

  );
}

export default App;
