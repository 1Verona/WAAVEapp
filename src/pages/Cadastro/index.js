import React from 'react'
import {
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
 } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { PaperProvider, TextInput } from 'react-native-paper';


export default function Cadastro() {
  const navigation = useNavigation()
  const corla = '#34a094'
  return (
    <View>
      <Animatable.View style={styles.containerAnim} animation={'fadeInUp'}>
          <Text style={styles.titulo}> Bem Vindo!</Text>
          <TextInput style={styles.campos} mode={'outlined'} 
          outlineColor='#34a094' activeOutlineColor={corla} label={'Email'} 
          placeholder='Insira seu Email' left={<TextInput.Icon icon='email' color='#34a094'></TextInput.Icon>}/>
          <TextInput style={styles.campos} mode={'outlined'} 
          outlineColor='#34a094' activeOutlineColor={corla} label={'Nome'} 
          placeholder='Insira seu Nome' left={<TextInput.Icon icon='account' color='#34a094'></TextInput.Icon>}/>
          <TextInput id='senha' style={styles.campos} mode={'outlined'} 
          outlineColor='#34a094' activeOutlineColor={corla} label={'Senha'} 
          placeholder='Insira sua senha' left={<TextInput.Icon icon='lock' color='#34a094'></TextInput.Icon>}/>
          <TextInput id='senha' style={styles.campos} mode={'outlined'} 
          outlineColor='#34a094' activeOutlineColor={corla} label={'Repita sua senha'} 
          placeholder='Confirme sua senha' left={<TextInput.Icon icon='lock' color='#34a094'></TextInput.Icon>}/>

        <TouchableOpacity 
          style={ styles.button}
          onPress={ () => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 30,
  },
  containerAnim:{

  },
  campos:{
    color: '#34a094',
    marginHorizontal: 13,
    marginVertical: 8,
    borderColor: '#34a094',
    borderCurve: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#38A69D',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
})