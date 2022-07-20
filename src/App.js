import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Actors from './components/Actors/Actors';
import Directors from './components/Directors/Directors';
import Layout from './components/Layout';
import Movies from './components/Movies/Movies';
import Studios from './components/Studios/Studios';

function App() {
	return (
		<Router>
			<div className='container'>
				<Routes>
          <Route path="/" element={<Layout />}>
            <Route path="movies/*" element={<Movies/>}/>
            <Route path="actors/*" element={<Actors/>}/>
            <Route path="directors/*" element={<Directors/>}/>
            <Route path="studios/*" element={<Studios/>}/>
            <Route index element={<div>Home</div>}/>
            <Route path="*" element={<Navigate to="/movies" replace={true}/>}/>
          </Route>
        </Routes>
			</div>
		</Router>
	);
}

export default App;
