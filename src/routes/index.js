//Layouts
import config from 'src/config/index';
import Live from 'src/pages/Live';
import { HeaderOnly } from 'src/layouts/indext.js';

import Home from '../pages/Home/indext';
import Following from '../pages/Following/indext';
import Profile from '../pages/Profile/indext';
import Upload from '../pages/Upload/indext';
import Search from '../pages/Seach/indext.js';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
