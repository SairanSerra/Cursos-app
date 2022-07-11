import React, { useState } from "react";
import { StyleSheet } from "react-native";
import xildemy from '../../../assets/xildemy.png'
import { useNavigation } from "@react-navigation/native";
import * as Styled from './styles';
import { Input } from "@rneui/base";
import Icon  from "react-native-vector-icons/Ionicons";



const CreateAccount = ()=>{
    const {goBack} = useNavigation();

    const [createpassword,setcreatepassword] = useState(true);
    const [createpasswordconfirm,setcreatepasswordconfirm] = useState(true);

    return(
    <Styled.ScrollView>
        <Styled.KeyboardAvoidingView>

            <Styled.Img source={xildemy}/>

            <Styled.StatusBar backgroundColor="#093366"/>

            <Styled.Title>Cadastro</Styled.Title>

            <Input
            placeholder='Nome'
            placeholderTextColor='#FFFFFF'
            style={style.input}
            />

            <Input
            placeholder='Email'
            placeholderTextColor='#FFFFFF'
            style={style.input}
            />

            <Input
            placeholder='Senha'
            keyboardType='numeric'
            placeholderTextColor='#FFFFFF'
            style={style.input}
            maxLength={8}
            secureTextEntry={createpassword}
            rightIcon={
                <Styled.ButtonIcon onPress={()=>setcreatepassword(!createpassword)}>
                {
                    createpassword
                    ? 
                    <Icon name="eye" size={25} color="#FFFF"/>
                    :
                    <Icon name="eye-off" size={25} color="#FFFF"/>
                }
                

            </Styled.ButtonIcon>
            }
            />
           

            <Input
            placeholder='Confirme a Senha'
            keyboardType='numeric'
            placeholderTextColor='#FFFFFF'
            maxLength={8}
            style={style.input}
            secureTextEntry={createpasswordconfirm}
            rightIcon={
                <Styled.ButtonIcon onPress={()=>setcreatepasswordconfirm(!createpasswordconfirm)}>
                    {
                        createpasswordconfirm ?
                        <Icon name="eye" size={25} color="#FFFF"/>
                        :
                        <Icon name="eye-off" size={25} color="#FFFF"/>
                    }
                </Styled.ButtonIcon>
            }
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
const style = StyleSheet.create({
    input:{
        color: '#FFFF',
        borderBottomColor:'#FFFFFF',
       
    },
})
export default CreateAccount;
