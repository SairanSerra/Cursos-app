import React from 'react';
import { Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import xildemy from '../assets/xildemy.png';
import estilos from './styles.js';
import * as Styled from './styles.js';
function logar() {
    alert('Logado com sucesso!')
}

export default function login() {
    return (
        <Styled.Container>
                <KeyboardAvoidingView style={estilos.keybord} behavior='padding'>
                    <Image source={xildemy} style={estilos.img} />

                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#093366'
                        style={estilos.input}
                    />

                    <TextInput
                        placeholder='Senha'
                        placeholderTextColor='#093366'
                        keyboardType='numeric'
                        style={estilos.input}
                    />

                    <TouchableOpacity title='Login'
                        onPress={logar}
                        style={estilos.botao}>
                        <Text style={estilos.texto}>Login</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
    
        </Styled.Container>
    )

}


