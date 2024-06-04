import React from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import { Card } from '../components/Card'
import Screen from '../components/Screen'
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from '../components/TextInput';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';
import { ProfileCard } from '../components/ProfileCard';




export const Home = () => {
    return (
        <View
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.main}>
                <AppTextInput />

                <View style={styles.contentContainer}>
                    <View style={styles.preferences}>
                        <TouchableOpacity style={styles.city}>
                            <Text style={styles.cityText}>
                                <Ionicons name="location-sharp" size={13} /> New York
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.filters}>
                            <Text style={styles.filtersText}>
                                <Ionicons name="filter" color={colors.green} size={13} />
                                Filters
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ProfileCard />

                    {/* <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.cards}>
                            <Card />
                            <Card />
                        </View>
                        <View style={styles.cards}>
                            <Card />
                            <Card />
                        </View>
                        <View style={styles.cards}>
                            <Card />
                            <Card />
                        </View>
                        <View style={styles.cards}>
                            <Card />
                            <Card />
                        </View>
                    </ScrollView> */}
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

    gradientContainer: {
        backgroundColor: colors.primary
    },
    main: {
        marginHorizontal: 20
    },

    contentContainer: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 900,
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
        alignItems: "center"
    },
    cityText: {
        color: "black",
    },
    filtersText: {
        color: "black",
    },
})
