import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'

export default function HighlightedButton() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
          <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="logout"
                  size={sizes.iconSize}
              />
          </View>
          <Text style={styles.text}>Log Out</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text:{
        marginLeft: 90,
        fontSize: sizes.menuText,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        color: colors.white,
    },
    iconContainer:{
        backgroundColor: colors.greenLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
      },
      container:{
        flexDirection: 'row',
        backgroundColor: colors.green,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        marginBottom: 23,
        marginHorizontal: 28,
        alignItems: 'center',
        elevation: 20,
        borderRadius: 30,
      },
})