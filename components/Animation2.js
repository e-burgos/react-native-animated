import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableHighlight, Image } from 'react-native';

const mario = { uri: "https://raw.githubusercontent.com/e-burgos/react-native-animated/master/assets/img/hongo.png"};

const Animation2 = () => {

    const [ animation ] = useState(new Animated.Value(1)); // 0 es el valor inicial de la animacion

    const animateIn = () => {
        Animated.timing(
            animation, {
                toValue: 3, // El valor al que llega la animacion
                duration: 1000, // Cantidad de tiempo en minisegundos que dura en llegar a la variable final
                useNativeDriver: true
            }
        ).start(); // Siempre agregar el metodo start para iniciar la animacion
    };
    
    const animateOut = () => {
        Animated.timing(
            animation, {
                toValue: 1, // El valor al que regresa la animacion
                duration: 1000, // Cantidad de tiempo en minisegundos que dura en llegar a la variable final
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
                <Text style={styles.text}> Escala (Timing) </Text>
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
        width: 90,
        height: 90,
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
 
export default Animation2;