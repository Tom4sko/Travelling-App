import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

type NavigationProps = {
    onPress: () => void
}

export default function Offer(props: NavigationProps) {

const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
})

if(!loaded){
    return null;
}

  return (
    <LinearGradient style={styles.offerContainer}
          colors={[`${colors.linearGriadient.offerOne}`, `${colors.linearGriadient.offerTwo}`]}
        >
            <View style={styles.wrapper}>
                <View style={styles.sectionOne}>
                    <Text style={styles.textHeader}>Explore The World and Find Best Deal!</Text>
                    <Text style={styles.textParagraph}>Get Special Offer</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
                        <Text style={styles.buttonText}>Explore More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionTwo}>
                    <Image source={require('../Images/backpack.png')} style={styles.image} />
                </View>
            </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    buttonText:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.buttonTextSmall,
        color: colors.white,
        padding: 9,
    },
    buttonContainer:{
        backgroundColor: colors.green,
        borderRadius: 30,
        width: 101,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTwo:{
        marginLeft: -20,
    },
    sectionOne:{
        width: 180,
        paddingTop: 30,
        paddingLeft: 18,
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'row',
    },
    textParagraph:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.paragraphSizeSmaller,
        color: colors.secondary,
        marginBottom: 26,
    },
    textHeader:{
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: sizes.menuText,
        textAlign: 'left',
        marginBottom: 6,
    },
    image:{
        width: 200,
        height: 200,
        marginTop: -7,
    },
    offerContainer:{
        height: 180,
        marginHorizontal: 35,
        marginBottom: 45,
        borderRadius: 30,
        elevation: 20,
      },
})