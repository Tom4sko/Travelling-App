import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'
import { useFonts } from 'expo-font'

export default function TreasureScreen() {

  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
  })
  
  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
  
      <View style={styles.pictureContainer}>
        <Image style={styles.picture} source={require('../Images/treasure.jpg')} />
      </View>

      <Text style={styles.textHeader}>Congratulation!</Text>
      <Text style={styles.textParagraphOne}>You have found the Golden Treasure!</Text>
      <Text style={styles.textParagraphTwo}>You are getting 15% sale for next purchase.</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  textHeader:{
    fontFamily: 'Montserrat',
    fontSize: sizes.hugeSize,
    fontWeight: '700',
    marginBottom: 15,
    marginHorizontal: 45,
    textAlign: 'center',
  },
  textParagraphOne:{
    color: colors.secondary,
    fontSize: sizes.buttonTextSize,
    fontWeight: '400',
    marginBottom: 15,
    marginHorizontal: 45,
    textAlign: 'center',
  },
  textParagraphTwo:{
    color: colors.secondary,
    fontSize: sizes.buttonTextSize,
    marginBottom: 150,
    fontWeight: '400',
    marginHorizontal: 45,
    textAlign: 'center',
  },
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  pictureContainer:{
    position: 'absolute',
    top: 20,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  picture:{
    width: '100%',
    height: 325,
  },
})