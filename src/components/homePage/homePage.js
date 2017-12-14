import React from "react";
import Header from "../common/header";
import {Route, Switch} from "react-router-dom";
import Profile from "../profile/profile";
import UsersPage from "../users/usersPage";
import SingleUserPage from "../users/singleUserPage";
import NewsFeedPage from "../newsFeed/newsFeedPage";
import SinglePostPage from "../singlePost/singlePostPage";
import ImageComponent from "../newsFeed/imageComponent";


class HomePage extends React.Component {


    render() {

        return (

            <div>

                <Header />
                
                <Switch>
                    <Route exact path="/" component={NewsFeedPage}/>
                    <Route path="/feed/:type/:postId" component={SinglePostPage}/>
                    <Route path="/profile" component={Profile}/>
                    <Route exact path="/people" component={UsersPage}/>
                    <Route path="/people/:id" component={SingleUserPage}/>
                    <Route path="/image/:id" component={ImageComponent}/>
                </Switch>

            </div>

        );
    }
};

export default HomePage;