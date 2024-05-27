import styled from 'styled-components/native';
import NilsinhoLogin from '../../assets/images/NilsinhoLogin.png';

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
`;

const nilson = "AU";

export function LoginPage() {
    return (
        <LoginContainer>
            <BackgroundNilsinho source={NilsinhoLogin}/>
        </LoginContainer>
    );
}