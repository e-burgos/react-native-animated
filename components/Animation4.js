import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableHighlight, Image } from 'react-native';

const mario = { uri: "https://pngimg.com/uploads/mario/mario_PNG103.png"};

const Animation4 = () => {

    const [ animation1 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation2 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation3 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation4 ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion
    const [ animation5 ] = useState(new Animated.Value(1)); // 0 es el valor inicial de la animacion

    const animateIn = () => {
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
        ]).start() // Siempre agregar el metodo start para iniciar la secuencia de animacion
        
    };
    
    const animateOut = () => {
        Animated.sequence([
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
        ]).start() // Siempre agregar el metodo start para iniciar la secuencia de animacion
    };

    const interpolation = animation3.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const styleAnimation = {
        transform: [
            { translateX: animation1},
            { translateY: animation2},
            { rotate: interpolation},
            { translateX: animation4},
            { scale: animation5}, 
        ]
    }

    return (
        <View style={styles.box}>   
            <Animated.Image 
                style={[ styles.image, styleAnimation]}
                source={mario}
            />
            <View style={styles.footer}>
                <Text style={styles.text}> Trasladar (Secuencia) </Text>
            </View>
            <View style={styles.footer}>
                <TouchableHighlight onPress={() => animateIn()}>
                    <Text style={styles.btn}>⏪</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => animateOut()}>
                    <Text style={styles.btn}>⏩</Text>
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
        width: 140,
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
 
export default Animation4;