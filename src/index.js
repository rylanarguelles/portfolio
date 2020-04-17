import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import CodeStore from './store/code_store';
import HomeStore from './store/home_store';
import MusicStore from './store/music_store';

const Root = (
    <Provider
        HomeStore={HomeStore}
        MusicStore={MusicStore}
        CodeStore={CodeStore}
    >
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
