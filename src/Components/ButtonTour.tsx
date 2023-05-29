import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'

export default function ButtonTour() {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Booking Now</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        width: 310,
        height: 53,
        backgroundColor: colors.green,
        borderRadius: 30,
        marginBottom: 30,
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
    },
})