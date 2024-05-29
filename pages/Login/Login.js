import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import Nilsinho from '../../assets/images/Login/BackgroundImage.png';
import LogoIcon from '../../assets/images/Login/Logo.png'
import GoogleLogo from '../../assets/images/Login/GoogleLogo.png'
import AppleLogo from '../../assets/images/Login/AppleLogo.png'
import { TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
    baseInput: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    color: '#D9D9D9',
    backgroundColor: '#4E4E4E',
    }
});

const LoginContainer = styled.View`
    display: flex;
    flex: 1;
    align-itens: center;
    justify-content: center;
    background-color: #171717;
`;

const BackgroundNilsinho = styled.ImageBackground`
    display: flex;
    flex: 1;
    margin-top: 0px;
    margin-left: 0px;
    padding: 30px;
`;

const AppLogo = styled.Image`
    width: 53px;
    height: 56px;
`;

const InputsContainer = styled.View`
    display: block;
    align-itens: center;
    justify-content: center;
    margin-top: auto;
`;

const Regular14D9 = styled.Text`
    margin: 15px;
    font-size: 14px;
    font-weight: 400;
    color: #D9D9D9;
`
const Regular14Green = styled.Text`
margin: 15px;
font-size: 14px;
font-weight: 400;
color: #00AD1C;
`;

const Regular16D9 = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: #D9D9D9;
    align-self: center;
`
const Bold14FF = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #fff;
`

const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    gap: 15px;
`;

function BaseButton(proprieties) {
    const ButtonStylePatern = styled.TouchableOpacity`
        margin-top: 15px;
        padding:    15px;
        border-radius: 40px;
        font-size: 14px;
        color: #fff;
        background-color: #00AD1C;
    `;
    return(
        <ButtonStylePatern onPress={proprieties.onPress}>
            <Bold14FF>{proprieties.text}</Bold14FF>
        </ButtonStylePatern>
    )
}

const TextAndLines = styled.View`
    flex-direction: row;
    align-itens: center;
    justify-content: center;
`;

const VerticalLineDetail = styled.View`
    align-self: center;
    height: 1px;
    width: 45%;
    background-color: #D9D9D9;
`;

const SocialMediaLogin = styled.TouchableOpacity`
    margin-bottom: 30px;
    flex-direction: row;
    gap: 5px;
    border-radius: 20px;
    background-color: #4E4E4E;
    padding: 12px 15px;
`;

const MediaLoginIcon = styled.Image`
    height: 35px;
    width: 35px;
`;

export function LoginPage() {

    var[InputUser, SetUserValue] = useState('');
    var[InputPassword, SetPasswordValue] = useState('');

    function CallSignIn(){
        window.alert(`At the present moment, the aplication isn't connect to a database.`);
    }

    function CallLogIn() {
        if(InputUser == 'root' && InputPassword == 'root' ) {
            window.alert('Suscessfull login detected')
        }
        else{
            console.log(InputUser)
            console.log(InputPassword)
            window.alert('Incorrect credentials.')
        }
    }

    return (
            <LoginContainer>
                <BackgroundNilsinho source={Nilsinho}>
                    <AppLogo source={LogoIcon}/>
                    <InputsContainer>
                        <TextInput placeholder='Login de Usuário' placeholderTextColor='#D9D9D9' onChangeText={event => {SetUserValue(event)}} style={styles.baseInput}/>
                        <TextInput placeholder='Senha' placeholderTextColor='#D9D9D9' secureTextEntry={true} onChangeText={event => {SetPasswordValue(event)}} style={styles.baseInput}/>
                        <Regular14D9>Esqueceu a senha? <Regular14Green>Clique aqui!</Regular14Green></Regular14D9>
                        
                        <ButtonsContainer>
                            <BaseButton onPress={() => {CallSignIn()}} text='Cadastrar'/>
                            <BaseButton onPress={() => {CallLogIn()} } text='Entrar'/>
                        </ButtonsContainer>
                        
                        <TextAndLines>
                            <VerticalLineDetail/>
                            <Regular14D9>ou</Regular14D9>
                            <VerticalLineDetail/>
                        </TextAndLines>

                        <SocialMediaLogin>
                            <MediaLoginIcon source={GoogleLogo}/>
                            <Regular16D9>Entrar com o Google</Regular16D9>
                        </SocialMediaLogin>

                        <SocialMediaLogin>
                            <MediaLoginIcon source={AppleLogo}/>
                            <Regular16D9>Entrar com a Apple</Regular16D9>
                        </SocialMediaLogin>
                    </InputsContainer>
                </BackgroundNilsinho>
            </LoginContainer>
        );
    }

