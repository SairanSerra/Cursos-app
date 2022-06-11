import React from 'react';
import {StyleSheet, Image, TextInput, Button, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Header } from 'react-navigation-stack';
import xildemy from '../assets/xildemy.png';

function logar(){
    alert('Logado com sucesso!')
}

export default function login(){
    return(
    <ScrollView>
        <KeyboardAvoidingView  style={estilos.container} behavior='padding'>      
            <Image source={xildemy} style={estilos.img}/>                
            <TextInput
            placeholder='Email'
            style={estilos.input}
            />           

            <TextInput 
            placeholder='Senha'
            keyboardType='number'
            style={estilos.input}
            />        
            
            <Button title='Login' onPress={logar} />
        </KeyboardAvoidingView> 
    </ScrollView>
    )
     
}


const estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#093366',
        alignItems:'center',
    },
    text:{
        fontSize:40,
        color:'#FFFFFF'
    },
    img:{
        marginBottom:100
    },
   input:{
    backgroundColor:'#FFFFFF',
    borderColor: "#FFFFFF",
    width:350,
    marginTop:10
       
   },
   botao:{
    width:100,
    marginTop:10,
    backgroundColor:'#1ABC9C'
   }
})