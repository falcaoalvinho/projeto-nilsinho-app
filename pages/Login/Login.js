import styled from 'styled-components/native';
import Nilsinho from '../../assets/images/Login/BackgroundImage.png';
import LogoIcon from '../../assets/images/Login/Logo.png'
import GoogleLogo from '../../assets/images/Login/GoogleLogo.png'
import AppleLogo from '../../assets/images/Login/AppleLogo.png'
import { TouchableOpacity, TextInput } from 'react-native';

const BoxShadowProps = ['rgba(0, 0, 0, 0.4)', { width: 0, height: 0 }]

function CallTest(){
    window.alert("Event Call suceded!");
}

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
    flex: 1;
    align-itens: center;
    justify-content: center;
    margin-bottom: -80px;
`;

function DataInput(proprieties){
    const BaseInput = styled.TextInput`
        margin-top: 30px;
        padding: 20px 15px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 400;
        color: #D9D9D9;
        background-color: #4E4E4E;
    `;
    return (
        <BaseInput
            placeholder={proprieties.placeholder}
            placeholderTextColor='#D9D9D9'
            secureTextEntry={proprieties.secureTextEntry}
        />
    )
}

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
        font-weight: 700;
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
    return (
        <LoginContainer>
            <BackgroundNilsinho source={Nilsinho}>
                <AppLogo source={LogoIcon}/>
                <InputsContainer>
                    <DataInput placeholder='Login de Usuário'/>
                    <DataInput placeholder='Senha' secureTextEntry={true}/>
                    <Regular14D9>Esqueceu a senha? <Regular14Green>Clique aqui!</Regular14Green></Regular14D9>
                    
                    <ButtonsContainer>
                        <BaseButton onPress={() => {CallTest()}} text='Cadastrar'/>
                        <BaseButton onPress={() => {CallTest()} } text='Entrar'/>
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