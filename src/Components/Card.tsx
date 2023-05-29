import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

type CardProps = {
    header: string,
    result: string,
    reviews: string,
    image: any,
    navigation: any,
    onPress: () => void
}

export default function Card(props: CardProps) {
    
const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
})

if(!loaded){
    return null;
}

  return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={styles.cardContainer}>
        <Image
            source={props.image} 
            style={styles.image}
        />
        <View style={styles.textAlign}>
            <Text style={styles.textHeader}>{props.header}</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="heart-outline" color={`${colors.greenLight}`} size={24} />
            </TouchableOpacity>
        </View>

        <View style={styles.infoAlign}>
            <MaterialCommunityIcons name="star" color={`${colors.starColor}`} size={24} />
            <Text style={styles.result}>{props.result}</Text>
            <Text style={styles.reviews}>({props.reviews} reviews)</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    reviews:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.buttonTextSmall,
        color: colors.secondary,
        marginHorizontal: 2,
    },
    result:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.paragraphSizeSmaller,
        marginHorizontal: 2,
    },
    infoAlign:{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 12,
        alignItems: 'center',
    },
    textHeader:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.menuText,
    },
    textAlign:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 9,
        marginBottom: 7,
        marginHorizontal: 12,
    },
    image:{
        width: 200,
        height: 170,
        borderRadius: 30,
    },
    cardContainer:{
        width: 200,
        height: 250,
        borderRadius: 30,
        backgroundColor: colors.white,
        elevation: 20,
        marginLeft: 35,
    },
})