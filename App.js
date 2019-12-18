import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: newFunction(),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function newFunction() {
    return '#fff';
}

