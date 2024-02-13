import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { InputComponent } from '../components/InputComponent'
import { StackScreenProps } from '@react-navigation/stack';

interface UserForm{
  email: string;
  password: string
}

interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ({navigation}:Props) => {

  const [form, setForm] = useState<UserForm>({
    email: '',
    password: ''
  })

  const handlerTextChange=(name: string, value: string)=>{
    setForm(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style = {styles.title}>ACCEDE A TU CUENTA</Text>
        <InputComponent placeholder='EMAIL' OnChangeText={handlerTextChange} name='email'/>
        <InputComponent placeholder='CONTRASEÑA' OnChangeText={handlerTextChange} name='password'/>
        <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.textbtn}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>¿NECESITAS UNA CUENTA?</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textbtn}>REGÍSTRATE</Text>
        </TouchableOpacity>
      </View>
    </View>  
    )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      padding: 20,
      paddingTop: 100,
      gap: 70
    },

    title:{
      fontSize:15,
      fontWeight: 'bold'
    },

    box:{
      gap: 30
    },


    boton:{
      height: 30,
      borderWidth: 1,
      alignItems: 'center',
      padding:5,
      marginTop: 30,
      backgroundColor: 'black',
    },

    textbtn:{
      color: 'white'
    }
})