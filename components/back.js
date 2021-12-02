import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function BackButton(previous){
    const Navigation = useNavigation();
    
     return(
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}} onPress={() => Navigation.navigate({
          name: previous.previous.toString()})}>
       <Icon name="arrow-back-outline" color={'white'} size={30}/>
       <Text style={{fontSize: 20, color: 'white'}}>Previous</Text>
   </TouchableOpacity>

     );
}
