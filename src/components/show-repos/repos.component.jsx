import React from 'react';

class Repos extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        // let {} = this.props.repos
        return(
            <div>
                <div className="card">
                    <div className="card-header bg-light text-black">
                        <h3>Github Repositories</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                this.props.repos.map((repo)=>{
                                    return(
                                        <li className="list-group-item">
                                             <a href={repo.html_url}>{repo.name}</a>
                                            <span className="badge badge-success mx-5">{repo.stargazers_count}Stars</span>
                                            <span className="badge badge-warning mx-5">{repo.watchers_count}Watches</span>
                                        </li>

                                    )
                                })
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repos;