import './App.css';
import Login from './Login';
import Prooducts from './http req/Prooducts';
// import ErrorBoundry from './ErrorBoundry';
import Posts from './http req/Posts';
import Comments from './http req/Comments';
import Users from './http req/Users';

function App() {
  return (
    <div>
      <Prooducts/>
      <Login/>
      <hr/>
      <Posts/>
      <Comments/>
      <Users/>
      {/* <h1 style={{textAlign:'center'}}>Latest Products</h1>
        <Prooducts/> */}
    </div>
  );
}

export default App;
