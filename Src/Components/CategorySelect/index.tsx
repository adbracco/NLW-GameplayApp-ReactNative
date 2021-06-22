import React from 'react';
import { ScrollView, View } from 'react-native';
import { categories } from '../../Helpers/categories';
import { styles } from './styles';

const CategorySelect = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => ())}
    </ScrollView>
  );
};

export default CategorySelect;
