import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PostsList from './pages/PostsList/PostsList';
import Post from './pages/Post'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PostsList} />
                <Route path="/Postagem" component={Post} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
