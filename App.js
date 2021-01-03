import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class App extends Component {
  render() {
    let nome = 'Scar';
    let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Text>Olá 2021!!!!</Text>
        <Text>Primeiro aplicativo em React Native</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Teste de estilo
        </Text>

        <Image source={{uri: img}} style={{width: 300, height: 300}} />

        <Text style={{fontSize: 30}}>{nome}</Text>
      </View>
    );
  }
}

export default App;
