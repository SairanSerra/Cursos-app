import React from "react";
import StyledComponentsNative from "styled-components/native";
import xildemy from '../../../assets/xildemy.png'
import * as Styled from './styles';

const CreateAccount = ()=>{
    return(
    <Styled.ScrollView>
        <Styled.KeyboardAvoidingView>

            <Styled.Img source={xildemy}/>

            <Styled.StatusBar backgroundColor="#093366"/>

            <Styled.Title>Cadastro</Styled.Title>

            <Styled.InputText
            placeholder='Nome'
            placeholderTextColor='#093366'
            />

            <Styled.InputText
            placeholder='Email'
            placeholderTextColor='#093366'
            />

            <Styled.InputText
            placeholder='Senha'
            keyboardType='numeric'
            placeholderTextColor='#093366'
            />

            <Styled.InputText
            placeholder='Confirme a Senha'
            keyboardType='numeric'
            placeholderTextColor='#093366'
            />



          
        </Styled.KeyboardAvoidingView>
    </Styled.ScrollView>

    )
}
export default CreateAccount;