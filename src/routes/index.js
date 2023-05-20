//Layouts
import { HeaderOnly } from '../components/Layout/indext.js';

import Home from '../pages/Home/indext';
import Following from '../pages/Following/indext';
import Profile from '../pages/Profile/indext';
import Upload from '../pages/Upload/indext';
import Search from '../pages/Seach/indext.js';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
