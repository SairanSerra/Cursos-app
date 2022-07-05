import React from "react";
import * as Style from './styles';

const CreateAcount = ()=>{

    return(
        <Style.View>
            <Style.AvoidingView>
                <Style.Title>Cadastro</Style.Title>
                <Style.InputText
                placeholder="Nome"
                />
                 <Style.InputText
                placeholder="Email"
                />
                <Style.InputText
                placeholder="Senha"
                />
                <Style.InputText
                placeholder="Confirme a senha"
                />
                <Style.Button>
                    <Style.TextButton>
                        Cadastrar
                    </Style.TextButton>
                </Style.Button>
                <Style.ButtonBack>
                    <Style.TextBack>
                        Voltar
                    </Style.TextBack>
                </Style.ButtonBack>
            </Style.AvoidingView>
        </Style.View>


    )

}



export default CreateAcount;
