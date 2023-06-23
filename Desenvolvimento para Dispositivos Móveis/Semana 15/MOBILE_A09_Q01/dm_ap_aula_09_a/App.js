import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    backgroundColor: '#000000',
    flex: 2
  },
  box2: {
    backgroundColor: '#202020',
    flex: 2
  },
  box3: {
    backgroundColor: '#606060',
    flex: 2
  },
  box4: {
    backgroundColor: '#808080',
    flex: 2
  },
});
