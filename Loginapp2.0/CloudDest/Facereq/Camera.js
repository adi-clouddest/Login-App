
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Constants from 'expo-constants'
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import Button from '../helpers/Button'
import FaceRec from './Face'

export default function TakePic({navigation}) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null) 
    const [image, setImage] = useState(null) 
    const [type, setType] = useState(Camera.Constants.Type.back) 
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off) 
    const cameraRef = useRef(null) 

    useEffect(() => {
        (async () => {
        MediaLibrary.requestPermissionsAsync() 
        const cameraStatus = await Camera.requestCameraPermissionsAsync() 
        setHasCameraPermission(cameraStatus.status === 'granted') 
        })() 
    }, []) 

    const takePicture = async () => {
        if (cameraRef) {
          try {
            const data = await cameraRef.current.takePictureAsync() 
            console.log(data) 
            setImage(data.uri) 
          } catch (error) {
            console.log(error) 
          }
        }
      } 
    
      const savePicture = async () => {
        if (image) {
          console.log(image)
          const asset = await MediaLibrary.createAssetAsync(image)
          //try {
          if(FaceRec(image)){
            navigation.navigate('Final')
          }
          else{
            image = null;
          }
          //   //normally we would save to database but im using local machine for now
          //   const album2 = MediaLibrary.getAlbumAsync("Userimage")
          //   if(album2){
          //     const asset = await MediaLibrary.createAssetAsync(image)
          //     console.log(album2)
          //     const works = await MediaLibrary.addAssetsToAlbumAsync(asset.id, (await album2).id)
          //   }
          //   else{
          //     const album = await MediaLibrary.createAlbumAsync("Userimage", asset) 
          //   }
          // } catch (error) {
          //   console.log(error) 
          // }
        }
      } 
    
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.container}>
          {!image ? (
            <Camera
              style={styles.camera}
              type={type}
              ref={cameraRef}
              flashMode={flash}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 30,
                }}
              >
                <Button
                  title=""
                  icon="retweet"
                  onPress={() => {
                    setType(
                      type === CameraType.back ? CameraType.front : CameraType.back
                    );
                  }}
                />
                <Button
                  onPress={() =>
                    setFlash(
                      flash === Camera.Constants.FlashMode.off
                        ? Camera.Constants.FlashMode.on
                        : Camera.Constants.FlashMode.off
                    )
                  }
                  icon="flash"
                  color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
                />
              </View>
            </Camera>
          ) : (
            <Image source={{ uri: image }} style={styles.camera} />
          )}
    
          <View style={styles.controls}>
            {image ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 50,
                }}
              >
                <Button
                  title="Re-take"
                  onPress={() => setImage(null)}
                  icon="retweet"
                />
                <Button title="Save" onPress={savePicture} icon="check" />
              </View>
            ) : (
              <Button title="Take a picture" onPress={takePicture} icon="camera" />
            )}
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#000',
      padding: 8,
    },
    controls: {
      flex: 0.5,
    },
    button: {
      height: 40,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#E9730F',
      marginLeft: 10,
    },
    camera: {
      flex: 5,
      borderRadius: 20,
    },
    topControls: {
      flex: 1,
    },
  });