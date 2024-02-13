import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface InputProps{
    placeholder: string
    name: string
    OnChangeText:(name: string, value: string)=> void
}

export const InputComponent = ({placeholder, name, OnChangeText}: InputProps) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType='default'
    style={styles.input}
    onChangeText={(value: string)=> OnChangeText(name,value)} 
    />
  )
}


const styles=StyleSheet.create({
    input:{
        borderBottomWidth: 1
      },
})