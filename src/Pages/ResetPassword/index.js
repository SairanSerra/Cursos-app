import React from "react";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/base";



const ResetPassword = () => {
const {goBack} = useNavigation()
    return (
        <Styled.View>
          {/* <Styled.Title>Digite seu email</Styled.Title>  */}

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