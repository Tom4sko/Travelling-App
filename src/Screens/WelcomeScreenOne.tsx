import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'
import { useFonts } from 'expo-font'
import Button from '../Components/Button'
import Lines from '../Components/Lines'
import { useNavigation } from '@react-navigation/native'

type NavigationProps = {
    navigation: any,
    onPress: () => void
}

export default function WelcomeScreenOne(props: NavigationProps) {

    const navigation = useNavigation();
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
    })

    if(!loaded) {
        return null;
    }

  return (
    <View style={styles.container}>

        <View style={styles.pictureContainer}>
            <Image style={styles.picture} source={require("../Images/draw.jpg")} />
        </View>
    
        <Text style={styles.textMain}>Explore a New World</Text>
        <Text style={styles.textSecondary}>Find place for travel, campaign, hiking. Relax and enjoy your trip!</Text>

        <Lines colorOne={`${colors.green}`} colorTwo={`${colors.gray}`}/>

        <Button name="Next" onPress={ () => props.navigation.navigate('WelcomeScreenTwo')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    textMain:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.headerSize,
        color: colors.main,
        alignSelf: 'center',
        marginBottom: 18,
    },
    textSecondary:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.paragraphSize,
        color: colors.secondary,
        textAlign: 'center',
        marginHorizontal: 45,
        marginBottom: 45,
    },
    pictureContainer:{
        position: 'absolute',
        top: 24,
        width: '100%',
        justifyContent: 'center',
    },
    picture:{
        width: '100%',
        height: 500,
    },
})