import styled from 'styled-components/native';
import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';
import FailledConnectionIcon from '../../assets/images/Splash/FailledConnectionIcon.png';
import SuscessfullConectionIcon from '../../assets/images/Splash/SuscessfullConectionIcon.png';

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

export function SplashPage({navigation}) {
        const [isConnected, setIsConnected] = useState(false);
        
        useEffect(() => {
          const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
          });
      
          NetInfo.fetch().then(state => {
            setIsConnected(state.isConnected);
          });
      
          return () => {
            unsubscribe();
            };
            }, []);
            
    setTimeout(() =>{
        if(isConnected == true)
            navigation.navigate('Login')
    }, 5000)

    return (
        <SplashContainer>
                {isConnected ? 
                (
                    <SplashContent>
                        <SplashIcon source={SuscessfullConectionIcon}/>
                        <Medium20Font>A conexão pode ser estabelecida.</Medium20Font>
                    </SplashContent>
                ): 
                (   
                    <SplashContent>
                        <SplashIcon source={FailledConnectionIcon}/>
                        <Medium20Font>A conexão não pode ser estabelecida.</Medium20Font>
                    </SplashContent>
                )}
        </SplashContainer>
    )
}