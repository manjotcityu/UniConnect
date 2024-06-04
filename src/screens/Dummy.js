import React, { useRef } from 'react';
import { View, Animated, PanResponder, Dimensions, Text, ScrollView } from 'react-native';
import { ProfileCard } from '../components/ProfileCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

const Dummy = ({ card, onSwipeLeft, onSwipeRight }) => {
    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    swipeRight();
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    swipeLeft();
                } else {
                    resetPosition();
                }
            },
        })
    ).current;

    const swipeRight = () => {
        Animated.timing(position, {
            toValue: { x: SCREEN_WIDTH, y: 0 },
            duration: 250,
            useNativeDriver: false,
        }).start(() => onSwipeRight());
    };

    const swipeLeft = () => {
        Animated.timing(position, {
            toValue: { x: -SCREEN_WIDTH, y: 0 },
            duration: 250,
            useNativeDriver: false,
        }).start(() => onSwipeLeft());
    };

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
        }).start();
    };

    const getCardStyle = () => {
        return {
            ...position.getLayout(),
        };
    };

    return (
        <ScrollView>
            <Animated.View
                {...panResponder.panHandlers}
                style={[getCardStyle(), styles.card]}
            >
                <ProfileCard />
            </Animated.View>
        </ScrollView>
    );
};

const styles = {
    card: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
};

export default Dummy;
