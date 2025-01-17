import { Image } from 'react-native';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { widthToDP as wp } from 'react-native-responsive-screens';
import { heightToDP as hp } from 'react-native-responsive-screens';
import { useSharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import Categories from './Categories';



export default function WelcomeScreen(){

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(() => ring1padding.value = withSpring(ring1padding.value + hp(5)), 100);
        setTimeout(() => ring2padding.value = withSpring(ring2padding.value + hp(5.5)), 300);
        setTimeout(() => navigation.navigate('Home'), 2500);
    }, []);


    return (
        <View className = 'flex-1 justify-center items-center space-y-10 bg-amber-500'>
            <StatusBar style = 'light'/>

            {/* Logo Image with Rings*/}
            <Animated.View className = 'bg-white/20 rounded-full' style = {{padding: ring1padding}}>
                <Animated.View className = 'bg-white/20 rounded-full' style = {{padding: ring2padding}}>
                    <Image 
                        source={require('../Images/WelcomeScreen.jpeg')}
                        style = {{width: hp(20), height: hp(20)}}
                        className = 'rounded-full'
                    />
                </Animated.View>
            </Animated.View>

            {/*Tags and punchline*/}
            <View className = 'flex items-center space-y-2'>
                <Text style = {{fontSize: hp(7)}} className = 'font-bold text-white tracking-widest'>
                    Foody
                </Text>
                <Text style = {{fontSize: hp(2)}} className = 'font-medium text-white tracking-widest'>
                    Food is always right
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});