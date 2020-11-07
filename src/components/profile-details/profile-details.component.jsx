import React from 'react'

class ProfileDetails extends React.Component{
    render(){
        var {followers, following, public_repos, public_gists,name, location, company, email, blog, created_at, html_url} =this.props.profile;

        return(
            <div>
               <div className="card">
                   <div className="card-header bg-light">
                            <span className="badge badge-primary mx-2">{followers} Followers</span>
                            <span className="badge badge-success mx-2">{public_repos} Repos</span>
                            <span className="badge badge-warning mx-2">{public_gists} Gists</span>
                            <span className="badge badge-danger mx-2">{following} Following</span>
                   </div>
                   <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">User Name: {name}</li>
                            <li className="list-group-item">Location: {location} </li>
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Company: {company}</li>
                            <li className="list-group-item">Blog: {blog}</li>
                            <li className="list-group-item">Member Since: {created_at}</li>
                            <li className="list-group-item">Profile URL: {html_url}</li>
                            
                        </ul>
                   </div>
               </div>
            </div>
        )
    }
}

export default ProfileDetails;