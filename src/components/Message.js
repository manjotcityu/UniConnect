import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';

const randomTime = () => {
    const hrs = Math.round(Math.random() * 12);
    const mins = Math.round(Math.random() * 60);
    const hFormat = hrs < 10 ? '0' : '';
    const mFormat = mins < 10 ? '0' : '';
    const amPm = hrs < 12 ? 'AM' : 'PM';
    return String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
}


export const Message = ({ username, uri, count, onPress }) => {
    count = 10
    return (
        <TouchableOpacity

            style={styles.msgContainer}
            onPress={onPress}>



            <Image style={styles.msgImage} source={{ uri: uri }} />
            <View style={{ marginLeft: 10, }}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.text}>Hello, How are you</Text>
            </View>
            <Text style={styles.duration}>{randomTime()}</Text>
            {
                count > 0 ? (
                    <LinearGradient
                        colors={[colors.accent, colors.accent]}
                        style={styles.gradientStyle}
                    >
                        <Text style={styles.count}>{count}</Text>
                    </LinearGradient>
                ) : null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    count: {
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 10
    },
    gradientStyle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
        position: "absolute",
        right: 5
    },
    msgContainer: {
        flexDirection: "row",
        marginLeft: 20,
        alignItems: "center",
        marginVertical: 10
    },
    msgImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    text: {
        color: '#b6b6b6',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 11,
    },
    username: {
        color: '#000119',
        fontFamily: 'Montserrat_700Bold'
    },
    duration: {
        color: '#000119',
        fontSize: 12,
        flex: 1,
        marginLeft: 280,
        position: 'absolute',
        fontFamily: 'Montserrat_600SemiBold'
    },
})
