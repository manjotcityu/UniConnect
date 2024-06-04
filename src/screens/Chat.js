import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useFonts, Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import Entypo from '@expo/vector-icons/Entypo';



import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Animated,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';
import AppLoading from 'expo-app-loading';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Profile } from '../components/Profile';
import { Message } from '../components/Message';
import colors from '../config/colors';


export const Chat = ({ navigation }) => {

    const URL = `https://api.github.com/users`;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const pan = useRef(new Animated.ValueXY()).current;
    const list = useRef(new Animated.ValueXY()).current;


    useEffect(() => {
        const getData = async () => {
            const resp = await fetch(URL);
            const data = await resp.json();
            setData(data)
            setIsLoading(false);
        };
        getData()

        Animated.timing(pan, {
            toValue: { x: -380, y: 0 },
            delay: 1000,
            useNativeDriver: false
        }).start();

        Animated.timing(list, {
            toValue: { x: 0, y: -300 },
            delay: 2000,
            useNativeDriver: false
        }).start();



    }, [])

    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold
    });

    appIsReady = fontsLoaded
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }


    return (
        <LinearGradient
            colors={['rgb(255, 200, 124)', 'rgb(252, 251, 121)']}
            start={[0.1, 0.2]}
            end={[1, 1]}
            style={styles.gradient}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Chats</Text>
                    <Icon name="add" color="#fff" size={30} />
                </View>
                <ScrollView
                    horizontal
                    style={styles.proContainer}
                    showsHorizontalScrollIndicator={false}
                >
                    {isLoading ? (
                        <ActivityIndicator size='small' color='#FFF' />
                    ) :
                        <Animated.View style={[pan.getLayout(), styles.card]}>
                            {
                                data.map((item, index) => (
                                    <Profile
                                        key={item.id}
                                        uri={item.avatar_url}
                                        username={item.login} />
                                ))
                            }
                        </Animated.View>
                    }
                </ScrollView>

                <View style={styles.messageContainer}>
                    <View style={styles.today}>
                        <Text style={styles.day}>Sunday</Text>
                        <Entypo name='dots-three-horizontal' color='#000119' size={30} />
                    </View>

                    <ScrollView>
                        {
                            isLoading ? (
                                <ActivityIndicator size='small' color='#FFF' />
                            ) : (
                                <Animated.View style={[list.getLayout(), styles.list]}>

                                    {data.map((item, index) => (
                                        <Message

                                            key={item.id}
                                            username={item.login}
                                            uri={item.avatar_url}
                                            onPress={() => {
                                                console.log("go to chat")
                                                navigation.navigate("Discussion", {
                                                    itemId: item.id,
                                                    itemName: item.login,
                                                    itemPic: item.avatar_url
                                                })
                                            }} />
                                    ))}
                                </Animated.View>
                            )
                        }
                    </ScrollView>
                </View>


            </SafeAreaView>

        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        marginLeft: 400,
        width: 400,
    },
    day: {
        fontFamily: 'Montserrat_800ExtraBold',
        color: '#000119',
        flex: 1,
        fontSize: 20
    },
    gradient: {
        left: 0,
        right: 0,
        top: 0,
        paddingHorizontal: 20,
        paddingTop: 30,
        flex: 1
    },
    header: {
        color: "#fff",
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 24,
        flex: 1,
    },

    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    messageContainer: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 900,
        backgroundColor: '#FFF',
        marginHorizontal: -20,
        marginTop: 20
    },
    proContainer: {
        marginLeft: -20,
        alignSelf: "center"
    },
    list: {
        marginTop: 300,
    },
    today: {
        flexDirection: "row",
        marginTop: 25,
        justifyContent: "space-between",
        marginHorizontal: 20,
    }
})
