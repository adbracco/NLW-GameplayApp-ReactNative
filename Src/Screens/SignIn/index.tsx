import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../Components';
import { styles } from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  const handleSignIn = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}e organize suas {'\n'}jogatinas
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {'\n'}favoritos com seus amigos
        </Text>
        <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
      </View>
    </View>
  );
};

export default SignIn;
