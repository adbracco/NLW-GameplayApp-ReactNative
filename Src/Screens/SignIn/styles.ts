import { StyleSheet } from 'react-native';
import { theme } from '../../Global/Styles';

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: colors.heading,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 16,
    fontFamily: fonts.title700,
  },
  subTitle: {
    color: colors.heading,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 64,
    fontFamily: fonts.title500,
  },
});
