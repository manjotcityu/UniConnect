import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import Ionicons from '@expo/vector-icons/Ionicons';


export const Tags = ({ text, Icon = '', theme, icon }) => {

    return (
        <View style={styles.container}>
            <Ionicons name={icon} size={20} />
            <Text style={styles.tagText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    tagText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 12,
        marginLeft: 10
    }
})
