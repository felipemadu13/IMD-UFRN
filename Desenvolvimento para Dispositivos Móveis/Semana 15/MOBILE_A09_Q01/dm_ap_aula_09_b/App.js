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
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  box1: {
    backgroundColor: '#DAA520',
    width: "50%"
  },
  box2: {
    backgroundColor: '#8B4513',
    width: "50%"
  },
  box3: {
    backgroundColor: '#CD853F',
    width: "50%"
  },
  box4: {
    backgroundColor: '#D2691E',
    width: "50%"
  },
});
