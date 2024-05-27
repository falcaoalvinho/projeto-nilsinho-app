import styled from 'styled-components/native';
import FailledConnectionIcon from '../../assets/images/FailledConnectionIcon.png';


const SplashContainer = styled.View`
    display: flex;
    flex: 1;
    align-itens: center;
    justify-content: center;
    padding: 30px;
    background-color: #171717;
`;

const SplashContent = styled.View`
    background-color: #212121;
    border-radius: 100px;
    display: flex;
    flex: 1;
    align-itens: center;
    justify-content: center;
    gap: 30px;
`;

const SplashIcon = styled.Image`
    width: 240px;
    height: 240px;
    align-self: center;
`;

const Medium20Font = styled.Text`
    max-width: 240px;
    color: #d9d9d9;
    font-size: 20px;
    font-weight: 400;
    align-self: center;
    text-align: center;
`;

export function SplashPage() {
    return (
        <SplashContainer>
            <SplashContent>
                <SplashIcon source={FailledConnectionIcon}/>
                <Medium20Font>A conexão não pode ser estabelecida.</Medium20Font>
            </SplashContent>
        </SplashContainer>
    )
}