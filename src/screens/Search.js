import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import BackgroundPlane from '../components/BackgroundPlane'

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <BackgroundPlane>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </BackgroundPlane>
  );
};

export default MyComponent;