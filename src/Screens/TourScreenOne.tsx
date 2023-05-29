import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import cardInfo from '../database/cardInfoDatabase'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'
import { useFonts } from 'expo-font'
import ButtonTour from '../Components/ButtonTour'

export default function TourScreenOne() {

const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
})

if(!loaded){
    return null;
}

  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../Images/tent.jpg')} style={styles.image} />
        </View>

        <View style={styles.wrapperHeader}>
          <Text style={styles.textHeader}>{cardInfo.names[0]}</Text>
          <TouchableOpacity>
              <MaterialCommunityIcons name="heart-outline" color={`${colors.greenLight}`} size={35} />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapper}>
            <View style={styles.wrapperRating}>
                <Text style={styles.textRating}>Rating</Text>
                <View style={styles.wrapperStars}>
                    <MaterialCommunityIcons name="star" color={`${colors.starColor}`} size={24} />
                    <MaterialCommunityIcons name="star" color={`${colors.starColor}`} size={24} />
                    <MaterialCommunityIcons name="star" color={`${colors.starColor}`} size={24} />
                    <MaterialCommunityIcons name="star" color={`${colors.starColor}`} size={24} />
                    <MaterialCommunityIcons name="star" color={`${colors.starColor}`} size={24} />
                </View>
            </View>

            <View>
                <Text style={styles.textPrice}>Price</Text>
                <Text style={styles.price}>{cardInfo.price[0]}</Text>
            </View>
        </View>

        <View style={styles.wrapperDescription}>
            <Text style={styles.textDescription}>Description</Text>
            <Text style={styles.paragraph}>{cardInfo.description[0]}</Text>
        </View>
        
        <ButtonTour />
    
      </View>
  )
}

const styles = StyleSheet.create({
    paragraph:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.paragraphSizeMedium,
        color: colors.secondary,
        marginBottom: 25,
        height: 100,
    },
    textDescription:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.descriptionSize,
        marginBottom: 8,
    },
    wrapperDescription:{
        marginHorizontal: 20,
    },
    textHeader:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.headerTourSize,
    },
    wrapperHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 24,
    },
    price:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        color: colors.secondary,
    },
    textPrice:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.descriptionSize,
    },
    textRating:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.descriptionSize,
    },
    wrapperStars:{
        display: 'flex',
        flexDirection: 'row',
    },
    wrapperRating:{
        display: 'flex',
        flexDirection: 'column',
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    image:{
        width: 348,
        height: 295,
        borderRadius: 30,
    },
    imageContainer:{
        position: 'absolute',
        top: 0,
        width: '100%',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    container:{
        flex: 1,
        justifyContent: 'flex-end',
    },
})