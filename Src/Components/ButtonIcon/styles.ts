import { StyleSheet } from 'react-native';
import { theme } from '../../Global/Styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  imgWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  image: {},
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
});
