import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native"
import { useNavigation } from '@react-navigation/native'

const Cadastro = './Cadastro'

import * as Animatable from 'react-native-animatable'
import { PaperProvider, TextInput } from 'react-native-paper';
import styled from 'rn-css'

export default function SignIn() {
  const navigation = useNavigation()
  const corla = '#34a094'
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <TextInput mode={'outlined'} label={'Email'} outlineColor={corla} left={<TextInput.Icon icon='account' color={corla}/>}activeOutlineColor={corla} style={styles.email} placeholder="Insira seu Email"/>
        <TextInput mode={'outlined'} label={'Senha'} outlineColor={corla} left={<TextInput.Icon icon='lock' color={corla}/>}activeOutlineColor={corla} style={styles.senha} placeholder="Insira sua Senha"/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.registerText}>Não possui uma conta? <Text style={{
            color: corla,
          }}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
<PaperProvider>
  <SignIn/>
</PaperProvider>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'   
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  
  buttonRegister: {
    marginTop: 14,
    alignItems: 'center',
  },
  registerText: {
  color: '#a1a1a1'
  },  
  email:{
    color: '#34a094',
    marginHorizontal: 13,
    marginVertical: 8,
    borderColor: '#34a094',
    marginTop:30,
  },
  senha:{
    color: '#34a094',
    marginHorizontal: 13,
    marginVertical: 8,
    borderColor: '#34a094',
  },
})