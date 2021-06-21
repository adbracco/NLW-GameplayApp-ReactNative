import { StyleSheet } from 'react-native';
import { theme } from '../../Theme/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 64,
  },
});
