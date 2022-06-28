import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import xildemy from '../../../assets/xildemy.png';

import * as Styled from './styles.js';

function logar() {
    alert('Logado com sucesso!')
}

export default function login() {
    return (
        <Styled.Container>
                <Styled.Keybord behavior='padding'>

                    <Styled.StatusBar backgroundColor='#093366'/>

                    <Styled.Img source={xildemy}/>

                    <Styled.Input
                        placeholder='Email'
                        placeholderTextColor='#093366'                      
                    />
                    <Styled.Input
                        placeholder='Senha'
                        placeholderTextColor='#093366'
                        keyboardType='numeric'    
                        maxLength={8}                                        
                    />
                    <Styled.Olho>
                    <Icon name="eye" size={20} color="black" />
                    </Styled.Olho>

                    <Styled.Login 
                    onPress={logar}>
                    <Styled.Texto>Login</Styled.Texto> 
                    </Styled.Login>

                    <Styled.EsqueciSenha>
                    <Styled.TextEsqueci>Esqueci minha senha</Styled.TextEsqueci>
                    </Styled.EsqueciSenha>

                    <Styled.Create>
                    <Styled.TextCreate>Criar Conta</Styled.TextCreate>
                    </Styled.Create>

                </Styled.Keybord>
    
        </Styled.Container>
    )

}


