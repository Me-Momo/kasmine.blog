import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import App from './App';
import ProjectBox from './components/projectBox/index'

// 引入css
require("../public/style.css");
require("../public/style-print.css");


const rootEl = document.getElementById('root');
// render(
//     <AppContainer>
//         <App />
//     </AppContainer>,
//     rootEl
// );
render(
    <AppContainer>
        <ProjectBox />
    </AppContainer>,
    rootEl
);


// if (module.hot) {
//     module.hot.accept('./App', () => {
//         // If you use Webpack 2 in ES modules mode, you can
//         // use <App /> here rather than require() a <NextApp />.
//         const NextApp = require('./App').default;
//         render(
//             <AppContainer>
//                 <NextApp />
//             </AppContainer>,
//             rootEl
//         );
//     });
// }
if (module.hot) {
    module.hot.accept('./components/projectBox/index', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./components/projectBox/index').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}