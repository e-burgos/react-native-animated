import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableHighlight, Image } from 'react-native';

const mario = { uri: "https://pngimg.com/uploads/mario/mario_PNG107.png"};

const Animation3 = () => {

    const [ animation ] = useState(new Animated.Value(1)); // 0 es el valor inicial de la animacion

    const animateIn = () => {
        Animated.spring(
            animation, {
                toValue: 3, // El valor al que llega la animacion
                //friction: 2,
                //tension: 30,
                speed: 1, // la velocidad no se puede mezclar con friction o tension
                bounciness: 20, // rebote
                useNativeDriver: true
            }
        ).start(); // Siempre agregar el metodo start para iniciar la animacion
    };
    
    const animateOut = () => {
        Animated.spring(
            animation, {
                toValue: 1, // El valor al que regresa la animacion
                friction: 2,
                tension: 10,
                useNativeDriver: true
            }
        ).start(); // Siempre agregar el metodo start para iniciar la animacion
    };

    const styleAnimation = {
        transform: [{ scale: animation}]
    }


    return (
        <View style={styles.box}>   
            <Animated.Image 
                style={[ styles.image, styleAnimation]}
                source={mario}
            />
            <View style={styles.footer}>
                <Text style={styles.text}> Escala (spring) </Text>
            </View>
            <View style={styles.footer}>
                <TouchableHighlight onPress={() => animateIn()}>
                    <Text style={styles.btn}>🔽</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => animateOut()}>
                    <Text style={styles.btn}>🔼</Text>
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
        width: 110,
        height: 100,
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
 
export default Animation3;