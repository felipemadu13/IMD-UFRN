import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  let camera;

  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [fotos, setFotos] = useState([])
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [flashImage, setFlashImage] = useState(false);

  async function requestPermission() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted')
  }


  async function flipCamera() {
    if (type === Camera.Constants.Type.back) {
      setType(Camera.Constants.Type.front)
    } else {
      setType(Camera.Constants.Type.back)
    }
  }
  async function takePicture() {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    setFotos([...fotos, photo])
  }

  async function flashCamera() {
    if (flashMode === Camera.Constants.FlashMode.off) {
      setFlashMode(Camera.Constants.FlashMode.on);
      setFlashImage(true)
    } else {
      setFlashMode(Camera.Constants.FlashMode.off);
      setFlashImage(false)
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])

  if (hasPermission == null) {
    return <View></View>
  }

  if (hasPermission === false) {
    return <View><Text>Não foi possível acessar a câmera</Text></View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewCamera}>
        <Camera ref={ref => camera = ref} type={type} style={styles.camera} flashMode={flashMode}>
          <View style={{ marginLeft: -330, marginTop: 100 }}>
            <Pressable onPress={() => flipCamera()}>
              <Image source={require('./assets/img/camera48.png')} />
            </Pressable>
            <Pressable onPress={() => flashCamera()}>
              <Image style={styles.containerPar} source={flashImage ? require('./assets/img/flashOn48.png') : require('./assets/img/flashOff48.png')} />
            </Pressable>
          <View style={styles.preview}>
          </View>
          </View>
            <ScrollView horizontal={true}>
              {
                fotos.map((foto, index) => <Image key={index} style={styles.imgPreview} source={{ uri: foto && foto.uri }}></Image>)
              }
            </ScrollView>
            <Pressable style={styles.takePictureButton} title="Tirar foto" onPress={() => takePicture()} />
        </Camera>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  viewCamera: {
    flex: 6,
    backgroundColor: 'pink',
  },
  takePictureButton: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 20
  },
  preview: {
    height: 20,
    width: 20
  },
    imgPreview: {
    margin: 1,
    marginTop: 400,
    width: 80,
    height: 80
  }
});

