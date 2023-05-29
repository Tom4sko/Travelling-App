import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import sizes from '../assets/Sizes'
import colors from '../assets/Colors'
import { useFonts } from 'expo-font'

export default function InputBox() {

const [loaded] = useFonts({
    Montserral: require('../assets/fonts/Montserrat.ttf'),
})

if(!loaded){
    return null;
}

  return (
    <View style={styles.textBox}>
            <MaterialCommunityIcons name="magnify" size={40} style={styles.icon} color={colors.magnifyColor} />
            <TextInput style={styles.inputText}
                autoCapitalize="none"
                autoCorrect={true}
                placeholder="Search Destination"
                maxLength={15}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    inputText:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.menuText,
    },
    icon:{
        marginLeft: 15,
        marginRight: 5,
    },
    textBox:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 35,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 30,
        paddingTop: 6,
        paddingBottom: 6,
        marginBottom: 45,
    },
})