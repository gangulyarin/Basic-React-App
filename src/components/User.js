import React from 'react';
import axios from 'axios';

class User extends React.Component {
    state = {
        users: [],
        fileteredUsers:[]
      }

      filterUsers=(event)=>{
          let searchText = event.target.value;
          let userList = this.state.users;
          this.setState({fileteredUsers: userList.filter(u=>(u.username.toLowerCase().indexOf(searchText.toLowerCase())>-1))})
      }
    
      componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            const users = res.data;
            this.setState({ users:users,
            fileteredUsers:users });
          })
      }
    render(){
        return (
        <div className="card">
            <div className="form-group">
                <label>Search User</label>
                <input type="text" className="form-control" id="search" name="search"
                onChange={this.filterUsers}/>
            </div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.fileteredUsers.map(u=>{
                        return (<tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                        </tr>)
                    }
               )}
                </tbody>
            </table>
            </div>
        )
    }
}

export default User