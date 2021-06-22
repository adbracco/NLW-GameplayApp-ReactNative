import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../Global/Styles';

const Background: React.FC = ({ children }) => {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      colors={[secondary80, secondary100]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
