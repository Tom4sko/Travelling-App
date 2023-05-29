import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'

type LinesProps = {
    colorOne: string,
    colorTwo: string,
}

export default function Lines(e: LinesProps) {
  return (
    <View style={styles.linesContainer}>
        <View style={[styles.lineOne, {backgroundColor: e.colorOne}]}></View>
        <View style={[styles.lineTwo, {backgroundColor: e.colorTwo}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    linesContainer:{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 22,
        gap: 10,
    },
    lineOne:{
        backgroundColor: colors.green,
        width: 50,
        height: 8,
        borderRadius: 30,
    },
    lineTwo:{
        backgroundColor: colors.gray,
        width: 50,
        height: 8,
        borderRadius: 30,
    },
})