import { Button, ScrollView, TouchableOpacity, Text, View, TextInput, Image } from "react-native";
import styled from "styled-components/native";
import { useState, useEffect } from "react";

import HamburguerIcon from '../../assets/images/MainHub/HamburguerMenu.png'
import SearchIcon from '../../assets/images/MainHub/SearchIcon.png'
import RemoveIcon from '../../assets/images/MainHub/Button.png'
import NilsinhoImage from '../../assets/images/MainHub/SunnyImage.png'

function ShowMenu() {
    window.alert("ShowMenu has been called sucessfully!.")
}

const MainHubContainer = styled.View`
    display: flex;
    flex: 1;
    align-itens: center;
    justify-content: center;
    padding: 40px 30px;
    background-color: #171717;
`;

const MainHubHeader = styled.View`
    align.itens: flex-end;
    margin-bottom: 30px;
`;

const MenuIcon = styled.Image`
    margin-left: auto ;
    width: 40px;
    height: 30px;
`;


function MenuButton() {
    return (
        <TouchableOpacity onPress={() => {ShowMenu()}}>
            <MenuIcon source={HamburguerIcon}/>
        </TouchableOpacity>
    );
}

const LocalsScrowView = styled.ScrollView`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const LocalItem = styled.View`
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 20px;
    color: #fff;
    border-radius: 20px;
    font-size: 25px;
    font-weight: bold;
    background-color: #4E4E4E;
    margin-bottom: 20px
`;

const ColoredDetailPart = styled.View`
    height: 70%;
    width: 8px;
    margin: 0px;
`;


function ColoredDetail(params){
    return (
        <View style={{display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "flex-start"}}>
            <ColoredDetailPart style={{backgroundColor: params.color1}}/>
            <ColoredDetailPart style={{backgroundColor: params.color2}}/>
        </View>
    )

}

export const LocalItemText = styled.Text`
    font-weight: bold;
    font-size: 25px;
    color: #fff;
`;

export function RemoveButton({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Image 
                source={RemoveIcon}
                style={{
                    width:30,
                    height:30
                }}
            />
        </TouchableOpacity>
    )
}

export function LocalInput({onPress, onChange}) {
    return (
        <View 
        style={{
            display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#4e4e4e',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            fontSize: 16,
            marginBottom: 30
        }}>
            <TextInput 
                style={{
                    fontSize: 20,
                    color: '#d9d9d9'
                    }}
                placeholder="Buscar Local"
                placeholderTextColor='#d9d9d9'
                onChangeText={onChange}
            />
            <TouchableOpacity style={{border: 'none'}} onPress={onPress}>
                <Image 
                    source={SearchIcon}
                    style={{width: 32, height: 32}}
                />
            </TouchableOpacity>
        </View>
    )
}

const ShowWeatherContainer = styled.View`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 30px;
`;

const NilsinhoBackground = styled.ImageBackground`
    padding: 30px 30px 0px 30px;
    align-items: flex-start;
    justify-content: flex-end;
    height: 322px;
    width: 370px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const ShowWeatherTextContainer = styled.View`
    flex-direction: row;
    padding: 10px 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #4e4e4e;
`;

const ShowWeatherLocal = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: 800;
`;

const ShowWeatherTemperature = styled.Text`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: #fff;
    font-size: 50px;
    font-weight: 800;
    text-decoration-line: underline;
    padding: 15px;
    background-color: #393939;
`;

function ShowWeather({CurrentLocal, temperature, navigation}){
    return(
        <ShowWeatherContainer>
            <NilsinhoBackground source={NilsinhoImage}>
                <ShowWeatherTemperature>{temperature}</ShowWeatherTemperature>
            </NilsinhoBackground>
            <ShowWeatherTextContainer>
                <ColoredDetail color1='#909090' color2='#d9d9d9'/>
                <ShowWeatherLocal><ColoredDetail color1='#909090' color2='#d9d9d9'/>{CurrentLocal}</ShowWeatherLocal>
            </ShowWeatherTextContainer>
        </ShowWeatherContainer>
    )
}

export function MainHubPage() {
    const [Locals, setLocals] = useState(['São Paulo']);
    const [CurrentLocal, setCurrentLocal] = useState('São Paulo')
    const [Input, setInput] = useState('');

    var [temperature, setTemperature] = useState('');
    var [weather, setWeather] = useState('');


    const setLocalHandler = () => {
        if (Input && !Locals.includes(Input)) {
            setLocals([...Locals, Input]);
            setCurrentLocal(Input);
            setInput('');
        }
    }

    function removeLocal(Local){
        setLocals(Locals.filter(Item => Item !== Local))
    }

    const selectCurrentLocal = (LocalName) => {
        setCurrentLocal(LocalName)
    
        const APIKey = '5a69e1a297ec15a6c66557de2e5a8e60';
        var URL = `https://api.openweathermap.org/data/2.5/weather?q=${LocalName}&appid=${APIKey}&lang=pt_br`;
        
        fetch(URL)
        .then((response) => response.json())
        .then(json => {
            setTemperature(`${Math.round(json.main.temp - 273.15)}ºc`);
            setWeather(json.weather[0].description);
    
        })
      }
      
      useEffect(() => {
        selectCurrentLocal(CurrentLocal);
      }, [CurrentLocal]);

    return (
        <MainHubContainer>
            <MainHubHeader>
                <MenuButton/>
            </MainHubHeader>
        <LocalsScrowView>
            <LocalInput onChange={event => {setInput(event)}} onPress={setLocalHandler}/>
            <ShowWeather CurrentLocal={CurrentLocal} temperature={temperature}/>
            {
                Locals.map((Local, index) =>{
                    return(
                        <LocalItem key={index}>
                            <TouchableOpacity style={{flexDirection: 'row', gap: 5}} onPress={() => {selectCurrentLocal(Local)}}>
                                <ColoredDetail color1='#909090' color2='#d9d9d9'/>
                                <LocalItemText>{Local}</LocalItemText>
                            </TouchableOpacity>
                            <RemoveButton onPress={() => {removeLocal(Local)}}/>
                        </LocalItem>
                    )}
                )
            }
        </LocalsScrowView>
        </MainHubContainer>
    )
}
