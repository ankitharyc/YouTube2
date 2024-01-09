import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/appStore'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';
import Error from './components/Error.js';  
import Demo from './components/Demo.js';
import Demo2 from './components/Demo2.js'


const appRouter = createBrowserRouter([
  {
    path :'/',
    element:<Body/>,
    children:[
    {
      path:'/',
      element :<Maincontainer/>,
    },
    {
      path:'/watch',
      element :<Watchpage/>
    },
    {
      path:'/demo',
      element :<><Demo/><Demo2/></>
    }
  ],
  errorElement:<Error/>
  },
  ])


function App() {
  return (
    <Provider store={store}>
    <div className="App mx-20">
      <Header/>
      <RouterProvider router={appRouter} />
      {/* <Body/> */}
    </div>
    </Provider>
  );
}

export default App;
