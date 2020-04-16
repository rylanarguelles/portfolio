import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import MusicStore from './store/music_store';

const Root = (
    <Provider MusicStore={MusicStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
