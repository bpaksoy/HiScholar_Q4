import React, { Component } from 'react';
import ProfileInfoForm from './ProfileInfoForm';
import ProfileInfoCard from './ProfileInfoCard';
import PersonalStatementForm from './PersonalStatementForm';
import PersonalStatementCard from './PersonalStatementCard';
import ProfileCard from 'components/containers/ProfileCard';
import University from 'components/containers/University';

export default class ProfileContainerComponent extends Component {

  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
  }

  updateUser(updated_user) {
    this.props.updateCurrentUser(updated_user);
  }

  render() {
    const { user = {} } = this.props;
    const { currentUser, ui } = user;
    const { profileInfo: info_ui, statement: statement_ui } = ui;
    const { personal = {}, personal_statement = '' } = currentUser;
    if (Object.keys(currentUser).length) {
      return(
        <div>
          <div className="col-md-8">
            {
              info_ui == 'form' &&
              <ProfileInfoForm
                updateUser={this.updateUser.bind(this)}
                user={currentUser}
              />
            }
            {
              statement_ui == 'form' &&
              <PersonalStatementForm
                updateUser={this.updateUser.bind(this)}
                user={currentUser}
              />
            }

            {
              statement_ui == 'card' &&
              <PersonalStatementCard
                user={currentUser}
                updateStatement={this.props.toggleStatement}
              />
            }
            <University />
          </div>
          <div className="col-md-4">
            <ProfileCard user={user} />
            {
              info_ui == 'card' &&
              <ProfileInfoCard
                user={currentUser}
                updateInformation={this.props.toggleProfileInfo}
              />
            }
         </div>
        </div>
      );
    }
    return 'Loading...';
  }
}
