import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home'
import Form from './Form'
import Search from './Search'


const HomeRoute = () => <Home/>
const SearchRoute = () => <Search/>
const ProfileRoute = () => <Form/>
const LoanRoute = () => <Text>Loan</Text>

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Search', icon: 'magnify' },
    { key: 'profile', title: 'Profile', icon: 'account-circle'},
    { key: 'loan', title: 'Loan', icon: 'cash' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    profile: ProfileRoute,
    loan: LoanRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        shifting={true}
      />
    );
  }
}