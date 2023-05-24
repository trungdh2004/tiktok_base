import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from 'src/layouts/indext.js';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, indext) => {
                        let Layout = DefaultLayout;

                        if (route.layout) Layout = route.layout;
                        if (route.layout === null) Layout = Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={indext}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
