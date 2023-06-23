import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>
      <View style={styles.box6}></View>
      <View style={styles.box7}></View>
      <View style={styles.box8}></View>
      <View style={styles.box9}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#264653'
  },
  box1: {
    backgroundColor: '#2a9d8f',
    width: "75%",
    height: "50%"
  },
  box2: {
    backgroundColor: '#054F77',
    width: "25%",
    height: "20%"
  },
  box3: {
    backgroundColor: '#90EE90',
    width: "75%",
    height: "30%"
  },
  box4: {
    backgroundColor: '#90EE90',
    width: "25%",
    height: "16.8%",
    position: 'absolute',
    left: "75%"
  },
  box5: {
    backgroundColor: '#054F77',
    width: "25%",
    height: "16.6%",
    position: 'absolute',
    left: "50%",
    top: "16.6%"
  },
  box6: {
    backgroundColor: '#90EE90',
    width: "25%",
    height: "17%",
    position: 'absolute',
    left: "25%",
    top: "33.2%"
  },
  box7: {
    backgroundColor: '#264653',
    position: 'absolute',
    width: "25%",
    height: "18%",
    left: "50%",
    top: "33.2%"
  },
  box8: {
    backgroundColor: '#2a9d8f',
    position: 'absolute',
    width: "20%",
    height: "12%",
    left: "55%",
    top: "70%"
  },
  box9: {
    backgroundColor: '#054F77',
    position: 'absolute',
    width: "25%",
    height: "18%",
    left: "75%",
    top: "82%"
  },
  
});
