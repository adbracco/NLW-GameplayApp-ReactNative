import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={DiscordImg} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default ButtonIcon;
