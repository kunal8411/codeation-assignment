import React from 'react'

class ProfileCard extends React.Component{
    render(){
        var {name, avatar_url, company, html_url} = this.props.profile;
        console.log("I am in profile-card",this.props.profile)
        return(
            <div>
                <div className="card">
                    <img src={avatar_url} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p>{company}</p>
                        <a href={html_url}  className="btn btn-success btn-sm">Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;