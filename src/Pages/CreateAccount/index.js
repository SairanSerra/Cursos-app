import React from "react";
import StyledComponentsNative from "styled-components/native";
import xildemy from '../../../assets/xildemy.png'
import * as Styled from './styles';

const CreateAccount = ()=>{
    return(
    <Styled.ScrollView>
        <Styled.KeyboardAvoidingView>

            <Styled.Img source={xildemy}/>

            <Styled.Title>Cadastro</Styled.Title>

            <Styled.InputText
            placeholder='Nome'
            />

            <Styled.InputText
            placeholder='Email'
            />

            <Styled.InputText
            placeholder='Senha'
            />

            <Styled.InputText
            placeholder='Confirme a Senha'
            />



          
        </Styled.KeyboardAvoidingView>
    </Styled.ScrollView>

    )
}
export default CreateAccount;