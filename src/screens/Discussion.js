import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import LastWatch from '../components/LastWatch'
import Data from '../dummy/Data.json';
import Received from '../components/Received';
import Sent from '../components/Sent';
import InputMessage from '../components/InputMessage';
import colors from '../config/colors';








export const Discussion = ({ route, navigation }) => {

    const { itemName, itemPic } = route.params;
    const [inputMessage, setMessage] = useState('');

    console.log(itemPic)
    const send = () => {
        Data.push({ id: inputMessage, message: inputMessage });
        setMessage('');
    };

    var txt = []
    for (var i = 5; i < Data.length; i++) {
        txt.push(<Sent key={Data[i].id} message={Data[i].message} />);
    }
    console.log(Data)

    return (
        <View
            colors={colors.primary}
            style={styles.container}
        >
            <View style={styles.main}>
                <SafeAreaView>
                    <View style={styles.headerContainer}>
                        <Text style={styles.username}>{itemName}</Text>
                    </View>
                </SafeAreaView>

                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <LastWatch checkedOn='Yesterday' />
                    <Received
                        image={itemPic}
                        message={Data[0].message}
                    />
                    <Sent
                        message={Data[1].message}
                    />
                    <Received
                        image={itemPic}
                        message={Data[2].message}
                    />
                    <Sent
                        message={Data[3].message}
                    />
                    <LastWatch checkedOn='Today' />
                    <Received
                        image={itemPic}
                        message={Data[4].message}
                    />
                    <View>
                        {txt}
                    </View>
                </ScrollView>
            </View>
            <InputMessage
                inputMessage={inputMessage}
                setMessage={(inputMessage) => setMessage(inputMessage)}
                onSendPress={send}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%"
    },

    main: {
        backgroundColor: '#FFF',
        height: '88%',
        paddingHorizontal: 20,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        paddingTop: 40
    },
    username: {
        color: "#000119",
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        color: "#000119",
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }

})
