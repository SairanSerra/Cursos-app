import React, { useContext } from "react";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/base";
import { Auth } from "../../context/Auth";



const ResetPassword = () => {
const {nome} = useContext(Auth);
const {goBack} = useNavigation();
    return (
        <Styled.View>
          <Styled.Title>Nome: {nome}</Styled.Title> 

          <Input 
          placeholder="Digite seu email"
          placeholderTextColor="#FFFFFF"
          />

          <Styled.BtnConfirm>
          <Styled.TextConfirm>Continuar</Styled.TextConfirm>
          </Styled.BtnConfirm>

          <Styled.ButtonBack onPress={()=>goBack()}>
            <Styled.TextBack>Voltar</Styled.TextBack>
          </Styled.ButtonBack>

        </Styled.View>
        
)

}

export default ResetPassword;