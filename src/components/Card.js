import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native'
import Screen from './Screen'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../config/colors'
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts, Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';




export const Card = () => {

    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold
    });
    return (
        <View style={styles.cardContainer}>
            <View style={styles.flexContainer}>
                <View style={styles.box1}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: "https://avatars.githubusercontent.com/u/4?v=4" }}
                            style={styles.image} />
                    </View>
                </View>
                <View style={styles.box2}>
                    <View
                        style={styles.gradientContainer}
                        start={{ x: 0.1, y: 0.2 }}
                    >
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Manjot, 29</Text>
                            <View style={styles.locationContainer}>
                                <Entypo name='location' color='black' size={15} style={styles.globe} />
                                <Text style={styles.country}>India</Text>
                            </View>

                        </View>
                        <View style={styles.universityContainer}>
                            <Text style={styles.university}>City University of Seattle</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    box1: {
        flexGrow: 3,
    },
    box2: {
        flexGrow: 1,
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 3

    },
    universityContainer: {
        marginTop: 3
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    country: {
        color: 'black',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 11,
        marginLeft: 3
    },
    globe: {

    },

    cardContainer: {
        height: "100%",
        width: "40%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },

    name: {
        fontFamily: 'Montserrat_700Bold',
        color: "#fff",
    },
    university: {
        color: 'black',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 11,
        marginTop: 4
    },

    flexContainer: {
        flex: 1,
    },
    imageContainer: {
        flex: 1, // This will make sure the image container takes up all available space in box1
        overflow: "hidden",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    infoContainer: {

    },
    gradientContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        overflow: "hidden",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 7,
    }

})
