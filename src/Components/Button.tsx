import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import sizes from '../assets/Sizes'
import colors from '../assets/Colors'
import { useFonts } from 'expo-font'

type ButtonProps = {
  name: string,
  onPress: () => void
}

export default function Button(props: ButtonProps) {

  const [loaded] = useFonts({
    Monserrat: require('../assets/fonts/Montserrat.ttf'),
  })

  if(!loaded){
    return null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        width: 310,
        height: 53,
        backgroundColor: colors.green,
        borderRadius: 30,
        marginBottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 20,
    },
    buttonText:{
        fontSize: sizes.buttonTextSize,
        color: colors.white,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    }
})