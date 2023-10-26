import { useEffect, useState } from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Router } from 'react-router-dom';
import { withTheme } from 'styled-components';


export default function Finish({navigation}) {

return(
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
          <Text style={styles.Title}>Welcome in</Text>
      </KeyboardAvoidingView>
)}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    Title: {
      fontSize: 30,
      color: "black",
      fontFamily: "Georgia",

    }
  })