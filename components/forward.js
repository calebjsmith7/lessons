import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function BackButton(next){
    const Navigation = useNavigation();

   
     return(
         <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}} onPress={() => Navigation.navigate({
            name: next.next.toString()})}>
             <Text style={{fontSize: 20, color: 'white'}}>Next</Text>
            <Icon name="arrow-forward-outline" color={'white'} size={30} />
        </TouchableOpacity>

     );
}
