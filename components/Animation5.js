import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableHighlight, Image } from 'react-native';

const mario = { uri: "https://pngimg.com/uploads/mario/mario_PNG97.png"};

const Animation5 = () => {

    const [ animation1 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation2 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation3 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation4 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation5 ] = useState(new Animated.Value(1)); // 1 es el valor inicial de la animacion

    const anima = Animated.loop(
        Animated.sequence([
            Animated.timing(animation1, {
                toValue: -130,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(animation2, {
                toValue: -205, 
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(animation3, {
                toValue: 360,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(animation4, {
                toValue: 130,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.spring(animation5, {
                toValue: 3,
                bounciness: 20, // rebote
                useNativeDriver: true
            }),
            Animated.spring(animation5, {
                toValue: 1, // El valor al que regresa la animacion
                friction: 2,
                tension: 10,
                useNativeDriver: true
            }),
            Animated.timing(animation1, {
                toValue: 0, 
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(animation2, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(animation3, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(animation4, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(animation5, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            })
        ])
    );

    const interpolation = animation3.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    const styleAnimation = {
        transform: [
            { translateX: animation1},
            { translateY: animation2},
            { rotate: interpolation},
            { translateX: animation4},
            { scale: animation5}, 
        ]
    };

    const animateStart = () => {
        anima.start();
    };
    
    const animatePause = () => {
        anima.reset();
    };

    const animateReset = () => {
        animation1.setValue(0);
        animation2.setValue(0);
        animation3.setValue(0);
        animation4.setValue(0);
        animation5.setValue(1);
    }
    

    return (
        <View style={styles.box}>   
            <Animated.Image 
                style={[ styles.image, styleAnimation]}
                source={mario}
            />
            <View style={styles.footer}>
                <Text style={styles.text}> Loop (secuencia) </Text>
            </View>
            <View style={styles.footer}>
                <TouchableHighlight onPress={() => animateStart()}>
                    <Text style={styles.btn}>⏯</Text>
                </TouchableHighlight>
               
                <TouchableHighlight onPress={() => animatePause()}>
                    <Text style={styles.btn}>⏸</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => animateReset()}>
                    <Text style={styles.btn}>⏹</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 155,
        height: 150,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10
    },
    btn: {
        marginHorizontal: 10,
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 5
    }
})
 
export default Animation5;