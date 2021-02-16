//react things
import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';

//redux things
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//our reducers combined
import featureReducer from './reducers/featureReducer';

//style
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featureReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
