import React from 'react';
import Profile from '../profile/profile.component';
import Repos from '../show-repos/repos.component'
import Axios from 'axios'
class SearchBox extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            profile:null,
            repos:null
        }
    }

    onInputChange=(e)=>{
        this.setState({username:e.target.value})
        console.log(this.state.username)
        
    }
    searchUser=(e)=>{
        e.preventDefault();
        this.searchProfile();
        this.searchRepos();
    }
    searchProfile=()=>{
        Axios.get(`https://api.github.com/users/${this.state.username}`)
        .then(response=>{
            this.setState({profile:response.data})
        })
        .catch(err=>{
            console.log(err);
        })
    }

    searchRepos=()=>{
        Axios.get(`https://api.github.com/users/${this.state.username}/repos`)
        .then(response=>{
            this.setState({repos:response.data})
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header p-3 mb-2 bg-secondary text-white">
                                    <h3>Search Github User</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={this.searchUser}>
                                        <div className="form-group">
                                            <input
                                            value={this.state.username}
                                            onChange={this.onInputChange}
                                             size="40"
                                              type="text"
                                               className="form-control"
                                                placeholder="user-name"
                                            />
                                        </div>
                                        <div>
                                            <input 
                                            type="submit" 
                                            value="Search"
                                            className="btn btn-secondary btn-sm"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile
                                 ? 
                                <Profile profile={this.state.profile}/>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos
                                 ? 
                                <Repos repos={this.state.repos}/>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>            

            </div>
        )
    }
}

export default SearchBox;
