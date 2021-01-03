import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class App extends Component {
  render() {
    let nome = 'Scar';

    return (
      <View>
        <Text>Olá 2021!!!!</Text>
        <Text>Primeiro aplicativo em React Native</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Teste de estilo
        </Text>

        <Text style={{fontSize: 30}}>{nome}</Text>

        <Jobs largura={100} altura={200} nome="Steve Jobs" />
      </View>
    );
  }
}

export default App;

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text> {this.props.nome} </Text>
      </View>
    );
  }
}
