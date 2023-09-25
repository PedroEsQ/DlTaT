import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>  
      <ImageBackground 
        style={styles.logo}
        source={require('./assets/2023-07-30_18.41.55.png')}
        resizeMode='cover'
      >
        
        <Text
          style={{color:'white', flex:1, display:'flex', fontSize:42, zIndex:1}}
        >O que você está fazendo aqui? Circulando! Não tem nada aqui! Além do mais, não sei nem o que EU estou fazendo aqui.</Text>

        
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 1900,
    height: 1000,
  },
});


