import React from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import xildemy from '../assets/xildemy.png';

function logar() {
    alert('Logado com sucesso!')
}

export default function login() {
    return (
        <ScrollView style={estilos.container}> 
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
        </ScrollView>
    )

}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#093366',
    },
    keybord: {
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        color: '#FFFFFF'
    },
    img: {
        marginBottom: 100,
        marginTop: 30
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        color: '#093366',
        width: 350,
        marginTop: 10

    },
    texto: {
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 2
    },
    botao: {
        width: 100,
        height: 40,
        borderRadius: 5,
        marginTop: 40,
        backgroundColor: '#1ABC9C'
    }
})