import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';
import './Blog.css';

import Posts from './Posts/Posts'

import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import asyncComponent from '../../hoc/asyncComponent'

// import NewPost from './NewPost/NewPost'

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})


class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/post" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color:'orange',
                                        textDecoration: 'underline'
                                    }}
                                    >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                <Switch>
                    {this.state.auth ? <Route path="/new-post"  component={AsyncNewPost} /> : null}
                    <Route path="/post" component={Posts} />
                    <Redirect from="/" to="/post" />
                    {/* <Route render={() => <h1>404 Page Not Found</h1>} /> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;