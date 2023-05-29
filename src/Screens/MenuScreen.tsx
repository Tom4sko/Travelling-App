import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../assets/Colors'
import sizes from '../assets/Sizes'
import { useFonts } from 'expo-font'
import HighlightedButton from '../Components/HighlightedButton'

type List = {
  title: string,
  icon: {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
  },
}

const myList: List[] = [
  {title: "Tomáš Zeleňák", icon: {
    name: "account",
  }},
  {title: "Settings", icon: {
    name: "cog-outline",
  }},
  {title: "Support", icon: {
    name: "email-outline",
  }},
  {title: "My Favourities", icon: {
    name: "heart-outline",
  }},
]

export default function MenuScreen() {

  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat.ttf'),
  })

  if(!loaded){
    return null;
  }

  return (
    <View style={styles.wrapper}>

    <View style={styles.container}>
        <FlatList
          data={myList}
          keyExtractor={item => item.title}
          renderItem={({item}) =>
            <View style={styles.iconContainer}>

              <View style={styles.iconBackground}>
                  <MaterialCommunityIcons
                      name={item.icon.name}
                      style={styles.icon}
                      size={sizes.iconSize}
                   />
              </View>
  
                <Text style={styles.text}>
                    {item.title}
                </Text>
            </View>}
        />

        <HighlightedButton />

        <Text style={styles.copyrightText}>All rights reserved. Made by Tomáš Zeleňák 2023 ©</Text>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    display: 'flex',
    flexDirection: 'row',
  },
  copyrightText:{
    fontFamily: 'Montserrat',
    fontSize: sizes.menuText,
    textAlign: 'center',
    fontWeight: '500',  
    marginTop: 220,
    marginBottom: 25,
    marginHorizontal: 28,
  },
  text:{
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: sizes.menuText,
    marginLeft: 10,
  },
  iconBackground:{
    backgroundColor: colors.third,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  icon:{
    marginHorizontal: 10,
  },
  iconContainer:{
    flexDirection: 'row',
    marginBottom: 32,
    marginHorizontal: 28,
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 30,
  },
  container:{
    flex: 1,
    marginTop: 20,
  },
})