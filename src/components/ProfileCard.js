import React from 'react'
import Screen from './Screen'
import { View, StyleSheet, Image, ScrollView, Text, Dimensions } from 'react-native'
import { useFonts, Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Tags } from './Tags';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';



export const ProfileCard = () => {


    const pressed = useSharedValue(false);

    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);

    const pan = Gesture.Pan()
        .onBegin(() => {
            pressed.value = true;
        })
        .onChange((event) => {
            offsetX.value = event.translationX;
            offsetY.value = event.translationY;
        })
        .onFinalize(() => {
            offsetX.value = withSpring(0);
            offsetY.value = withSpring(0);
            pressed.value = false;
        });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: offsetX.value },
            { translateY: offsetY.value },
            // { scale: withTiming(pressed.value ? 1.2 : 1) },
        ],
    }));

    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_600SemiBold
    });

    const screenHeight = Dimensions.get('window').height;
    const x = useSharedValue(0);
    const y = useSharedValue(0);


    return (



        <View style={styles.container}>
            <GestureDetector gesture={pan}>
                <Animated.View style={[styles.circle, animatedStyles]}>
                    <ScrollView>
                        <View style={[styles.imageContainer, { height: screenHeight * 0.7 }]}>

                            <Image style={styles.ProfileImage}
                                source={{ uri: "https://avatars.githubusercontent.com/u/4?v=4" }}
                                resizeMode="cover" />
                            <Text style={[styles.nameContainer, styles.nameText]}>Manjot, 24</Text>
                        </View>

                        <View style={styles.aboutMeContainer}>
                            <Text style={styles.genericText}>About me </Text>
                            <View style={styles.aboutTags}>
                                <Tags text="India" icon="globe-outline" />
                            </View>
                            <View style={styles.aboutTags}>
                                <Tags
                                    text="City University Of Seattle"
                                    icon="school-outline" />
                            </View>
                            <View style={styles.aboutText}>
                                <Text style={styles.genericText}>
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                </Text>
                            </View>

                            <View style={styles.aboutText}>
                                <Text style={styles.genericText}>
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                </Text>
                            </View>

                            <View style={styles.aboutText}>
                                <Text style={styles.genericText}>
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                </Text>
                            </View>

                            <View style={styles.aboutText}>
                                <Text style={styles.genericText}>
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                    Hi There! I'm a student at City
                                    University of Seattle, you can ask me about
                                    acommodation for India students, Tution and much more.
                                </Text>
                            </View>

                        </View>
                    </ScrollView>
                </Animated.View>
            </GestureDetector>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    aboutMeContainer: {
        paddingLeft: 10,
        marginVertical: 10,
    }
    , aboutTags: {
        paddingVertical: 10,
        // backgroundColor: "red"
    },
    extraSpace: {
        height: 200,
        width: 10,
    },
    aboutText: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginLeft: -10
    }
    , container: {
        flex: 1,
        // backgroundColor: "gold",
        borderRadius: 10
    }
    , imageContainer: {
        overflow: "hidden",
        borderRadius: 10
    }
    , nameContainer: {
        position: "absolute",
        bottom: 10,
        left: 10
    }
    , nameText: {
        fontFamily: 'Montserrat_700Bold',
        color: "#fff",
        fontSize: 40
    },
    genericText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 15
    }
    , ProfileImage: {
        width: "100%",
        height: "100%"
    }
})
