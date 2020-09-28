import React from 'react';
import './App.scss';
import GetPlusLogo from './assets/img/get-plus-logo.svg'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MyGetPlus from './pages/MyGetPlus';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<div className='navbar'>
						<div className='navbar-before'>
							<img src={GetPlusLogo} alt='GetPlus Logo'/>
							<NavLink exact to='/what-is-getplus' >What is GetPlus</NavLink>
							<NavLink exact to='/how-it-works' >How it Works</NavLink>
							<NavLink exact to='/tiers' >Tiers</NavLink>
							<NavLink exact to='/' >My GetPlus</NavLink>
							<NavLink exact to='/Blog'>Blog</NavLink>
						</div>
						<div className='navbar-after'>
							<div className='cart'>
								<span>0</span>
								<ShoppingCartOutlinedIcon/>
							</div>
							<button>Logout xxx</button>
							<label>sasasasa</label>
						</div>
					</div>
					<div className='content'>
						<Route exact path='/' component={MyGetPlus}/>
						<Route exact path='/:child' component={MyGetPlus}/>
					</div>
				</Router>
			</header>
		</div>
	);
}

export default App;
