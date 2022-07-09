import React from "react";
import xildemy from '../../../assets/xildemy.png'
import { useNavigation } from "@react-navigation/native";
import * as Styled from './styles';

const CreateAccount = ()=>{
    const {goBack} = useNavigation();
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

            <Styled.Button>
                <Styled.Textbutton>
                    Cadastrar
                </Styled.Textbutton>
            </Styled.Button>

            <Styled.ButtonBack onPress={()=>goBack()}>
                <Styled.TextBack>
                    Voltar
                </Styled.TextBack>
            </Styled.ButtonBack>
 
        </Styled.KeyboardAvoidingView>
    </Styled.ScrollView>

    )
}
export default CreateAccount;
