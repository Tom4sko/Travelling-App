import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import sizes from '../assets/Sizes'
import colors from '../assets/Colors'
import { useFonts } from 'expo-font'

type NameProps = {
    name: string,
    onPress: () => void
}

export default function WelcomeText(props: NameProps) {
const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
})

    if(!loaded){
    return null;
}

  return (
    <View style={styles.textWrapper}>
        <View>
          <Text style={styles.textWelcome}>Hi, {props.name}👋</Text>
          <Text style={styles.textTravel}>Let’s Travel Now</Text>
        </View>

        <TouchableOpacity onPress={props.onPress}>
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={sizes.bellSize}
          />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    textWelcome:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.welcomeText,
        color: colors.secondary,
      },
      textTravel:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.buttonTextSize,
      },
      textWrapper:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 42,
      },
})