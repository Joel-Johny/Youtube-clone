import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Main from './Components/Main'
import { Provider } from 'react-redux';
import store from './utils/store';
import Watch from './Components/Watch';
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:
    <>
        <Header/>
        <Body/>
    </>,
    children:[
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
  }
])
function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
