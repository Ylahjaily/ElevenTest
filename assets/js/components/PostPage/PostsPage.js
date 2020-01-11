import React  from 'react';
import PostsList from "./PostsList";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchPosts} from '../../actions/postsActions'

class PostsPage extends React.Component
{
    componentDidMount(){
        this.props.fetchPosts();
    }

    render()
    {
        return (
            <div>
                <h1>Posts page</h1>
                <PostsList posts = {this.props.posts}/>
            </div>
        )
    }
};

PostsPage.propTypes = {
    posts : PropTypes.array.isRequired,
    fetchPosts : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsPage);