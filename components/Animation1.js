import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableHighlight, Image } from 'react-native';

const mario = { uri: "https://media.moddb.com/images/mods/1/27/26251/com.MemoryMakers.SuperMarioHD.png"};

const Animation1 = () => {

    const [ animation ] = useState(new Animated.Value(0)); // 0 es el valor inicial de la animacion

    const animateIn = () => {
        Animated.timing(
            animation, {
                toValue: 360, // El valor al que llega la animacion
                duration: 1000, // Cantidad de tiempo en minisegundos que dura en llegar a la variable final
                useNativeDriver: true
            }
        ).start(); // Siempre agregar el metodo start para iniciar la animacion
    };
    
    const animateOut = () => {
        Animated.timing(
            animation, {
                toValue: 0, // El valor al que regresa la animacion
                duration: 1000, // Cantidad de tiempo en minisegundos que dura en llegar a la variable final
                useNativeDriver: true
            }
        ).start(); // Siempre agregar el metodo start para iniciar la animacion
    };

    const interpolation = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const styleAnimation = {
        transform: [{ rotate: interpolation}]
    }


    return (
        <View style={styles.box}>   
            <Animated.Image 
                style={[ styles.image, styleAnimation]}
                source={mario}
            />
            <View style={styles.footer}>
                <Text style={styles.text}> Rotación (Timing) </Text>
            </View>
            <View style={styles.footer}>
                <TouchableHighlight onPress={() => animateIn()}>
                    <Text style={styles.btn}>↩</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => animateOut()}>
                    <Text style={styles.btn}>↪</Text>
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
        width: 100,
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
 
export default Animation1;