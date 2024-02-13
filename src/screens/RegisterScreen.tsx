import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { InputComponent } from '../components/InputComponent'
import { StackScreenProps } from '@react-navigation/stack'

interface UserForm {
    email: string,
    password: string,
    nombre: string,
    apellido: string,
    telefono: string
}

interface Props extends StackScreenProps<any, any>{};

export const RegisterScreen = ({navigation}: Props) => {

    const [form, setForm] = useState<UserForm>({
        email: '',
        password: '',
        nombre: '',
        apellido: '',
        telefono: ''
    })

    const handlerTextChange=(name:string, value: string)=>{
        setForm(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>REGISTRO</Text>
            <View style={{gap:20}}>
            <InputComponent placeholder='EMAIL' name='email' OnChangeText={handlerTextChange}/>
            <InputComponent placeholder='CONTRASEÑA' name='password' OnChangeText={handlerTextChange}/>
            <InputComponent placeholder='NOMBRE' name='nombre' OnChangeText={handlerTextChange}/>
            <InputComponent placeholder='APELLIDOS' name='apellido' OnChangeText={handlerTextChange}/>
            <InputComponent placeholder='TELÉFONO' name='telefono' OnChangeText={handlerTextChange}/>  
            </View>
        </View>
        <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate('Login')}>
            <Text style={{color: 'white'}}>CREAR CUENTA</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({        
    container:{
        flex:1,
        padding: 20,
        paddingTop: 80,
        gap: 70
    },

    title:{
        fontSize:16,
        fontWeight: 'bold'
    },

    box:{
        gap: 30,
        margin:10
    },

    boton:{
        height: 40,
        borderWidth: 1,
        alignItems: 'center',
        padding:10,
        marginTop: 30,
        backgroundColor: 'black',
    },

})