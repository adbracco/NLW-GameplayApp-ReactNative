import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={DiscordImg} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
