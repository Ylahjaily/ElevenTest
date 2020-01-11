import React  from 'react';
import UsersList from "./UsersList"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchUsers} from '../../actions/usersActions'

class UsersPage extends React.Component
{
    componentDidMount(){
        this.props.fetchUsers();
    }

    render()
    {
        return (
            <div>
                <h1>Users page</h1>
                <UsersList users = {this.props.users}/>
            </div>
        )
    }
};

UsersPage.propTypes = {
    users : PropTypes.array.isRequired,
    fetchUsers : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersPage);