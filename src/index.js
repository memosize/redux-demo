import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './index.redux'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
class Test extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
    render(){
      return(
        <h2>测试组建：{this.props.match.params.location}</h2>
      )
    }
  
  
}
function Erying(){
  return <h2>二营</h2>
}
function Qibinglian(){
  return <h2>骑兵连</h2>
}
ReactDOM.render((
    <Provider store={store}>
       <BrowserRouter>
         <div>
         <ul>
           <li>
             <Link to='/'>一营</Link>
           </li>
           <li>
             <Link to='erying'>二营</Link>
           </li>
           <li>
             <Link to='/qibinglian'>骑兵连</Link>
           </li>
         </ul>
          <Switch>
          <Route path='/' exact component={App}></Route>
         <Route path='/erying' component={Erying}></Route>
         <Route path='/qibinglian' component={Qibinglian}></Route>
         <Route path='/:location' component={Test}/>
          </Switch>
         </div>
       </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
