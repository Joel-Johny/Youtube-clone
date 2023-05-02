import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
