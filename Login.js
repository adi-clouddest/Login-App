import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { withTheme } from 'styled-components';

export default function Home() {
    

    return(
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
          <Text style={styles.Title}>Cloud Destinations Login</Text>
          <View>
            <TouchableOpacity
            style = {styles.buttonContainer}>
              <Text style= {styles.buttons}> Login with Facial Rec</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.buttonContainer}>
              <Text style= {styles.buttons}> Login with QR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.buttonContainer}>
              <Text style= {styles.buttons}> Login with Admin approval</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    },
    Title: {
      fontSize: 30,
      color: "white",
      borderColor: "red",
      borderWidth: 1,
      fontFamily: "Georgia",

    },
    buttons: {
        color: "white",
        fontSize: 20,
        fontFamily: "Georgia",
        alignSelf: 'center'
    },
    buttonContainer: {
      height: 50,
      width: 200,
      backgroundColor: "blue",
      alignContent: "center",
      justifyContent: 'center',
      marginTop: 50,
      borderRadius: 15
    }
  })