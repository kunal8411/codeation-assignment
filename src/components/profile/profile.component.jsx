import React from 'react' 
import ProfileCard from '../profile-card/profile-card.component'
import ProfileDetails from '../profile-details/profile-details.component';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {
                                Object.keys(this.props).length !== 0 ?
                                <ProfileCard profile={this.props.profile}/>
                                :
                                null
                            }
                        </div>
                        <div className="col-md-9">
                        {
                                Object.keys(this.props).length !== 0 ?
                                <ProfileDetails profile={this.props.profile}/>
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

export default Profile