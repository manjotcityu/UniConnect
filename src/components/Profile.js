import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';


export const Profile = ({ username, uri }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: uri }} style={styles.avatar} />
            <Text style={styles.username}>{username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    container: {
        alignItems: "center",
        marginTop: 20,
        marginRight: 17
    },
    username: {
        color: "#fff",
        marginTop: 10,
        fontSize: 11,
        fontFamily: "Montserrat_700Bold"
    }
})
