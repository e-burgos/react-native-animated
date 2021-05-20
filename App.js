import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, TouchableWithoutFeedback, Alert, ScrollView } from 'react-native';
import Header from './components/Header';
import Animation1 from './components/Animation1';
import Animation2 from './components/Animation2';
import Animation3 from './components/Animation3';
import Animation4 from './components/Animation4';
import Animation5 from './components/Animation5';

const mainBg = { uri: "https://raw.githubusercontent.com/e-burgos/react-native-animated/master/assets/img/bg.gif" };

const App = () => {
  return (
    <ImageBackground source={mainBg} style={styles.background}>
      <Header />
      <ScrollView>
        <View style={styles.mainCointaner}>
          <View style={styles.item}>
            <Animation1 />
          </View>
          <View style={styles.item}>
            <Animation2 />
          </View>
          <View style={styles.item}>
            <Animation3 />
          </View>
          <View style={styles.item}>
            <Animation4 />
          </View>
          <View style={styles.item}>
            <Animation5 />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  mainCointaner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%'
  },
  item: {
    marginHorizontal: '2.5%',
    marginBottom: '20%'
  }
});

export default App;
