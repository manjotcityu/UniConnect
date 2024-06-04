import React from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity, Button, Text, SafeAreaView, Image } from 'react-native'
import { Card } from '../components/Card'
import Screen from '../components/Screen'
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from '../components/TextInput';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';
import { ProfileCard } from '../components/ProfileCard';
import { useFonts, Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';




export const Explore = () => {


    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold
    });
    return (
        <GestureHandlerRootView style={styles.container}>
            <LinearGradient
                colors={['rgb(255, 200, 124)', 'rgb(252, 251, 121)']}
                start={[0.1, 0.2]}
                end={[1, 1]}
                style={styles.gradientContainer}>
                <Screen>

                    <View style={styles.brandContainer}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("../../assets/g-brand.png")} />
                        </View>
                        <Text style={[styles.genericText, styles.logoText]}>Grad</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.preferences}>
                            <TouchableOpacity style={styles.city}>
                                <Text style={styles.cityText}>
                                    <Ionicons name="location-sharp" size={13} /> New York
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.filters}>
                                <Text style={styles.filtersText}>
                                    <Ionicons name="filter" color={colors.accent} size={13} />
                                    Filters
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <ProfileCard />

                    </View>

                </Screen>

            </LinearGradient>

        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({

    circle: {
        height: 120,
        width: 120,
        borderRadius: 500,
    },
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },

    gradientContainer: {
        flex: 1
    },
    main: {
        marginHorizontal: 20
    },

    logoContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },

    genericText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 20
    },
    brandContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        height: "150%",
        width: "150%",
        resizeMode: "cover"
    },
    logoText: {
        marginLeft: -15,
        marginTop: 2
    },

    contentContainer: {
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#FFF',
        marginHorizontal: -20,
        paddingHorizontal: 20,
        marginTop: 20
    },
    cards: {
        marginVertical: 30,
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    city: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 20,
        width: 100,
        elevation: 1,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "black",
        shadowOffset: { height: 0, width: 0 },
    },
    preferences: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10
    },
    brand: {
        marginVertical: 10
    },
    cityText: {
        color: "black",
    },
    filtersText: {
        color: "black",
    },
})



