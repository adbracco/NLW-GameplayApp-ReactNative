import React from 'react';
import { View } from 'react-native';
import { ButtonAdd, CategorySelect, Profile } from '../../Components';
import { styles } from './styles';

const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect />
      </View>
    </>
  );
};

export default Home;
