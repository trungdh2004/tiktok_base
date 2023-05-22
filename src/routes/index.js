//Layouts
import routesConfig from 'src/config/routes.js';

import { HeaderOnly } from '../components/Layout/indext.js';

import Home from '../pages/Home/indext';
import Following from '../pages/Following/indext';
import Profile from '../pages/Profile/indext';
import Upload from '../pages/Upload/indext';
import Search from '../pages/Seach/indext.js';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
