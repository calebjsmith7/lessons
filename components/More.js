import React from "react";
import { 
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    Button,
    TouchableOpacity,
    Linking
 } from "react-native";

 import { Divider } from 'react-native-elements';

import { ScrollView } from "react-native-gesture-handler";

const More = () => {
    return(
        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 35, textAlign: 'center', textDecorationLine: 'underline', marginTop: '5%'}}>More</Text>
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '7%', marginLeft: '5%'}}>Love this app?</Text>
            <Text style={{color: 'white', fontSize: 21, marginTop: '4%', marginLeft: '5%', marginRight: '5%'}}>Leave us a review! If you have any comments, questions, or concerns, email our support!</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://www.apple.com/app-store/')}}><Text style={{color: 'white', fontSize: 27}}>* Review</Text></TouchableOpacity>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://sites.google.com/view/worship-pads-pro-privacypolicy/support')}}><Text style={{color: 'white', fontSize: 27}}>* Support</Text></TouchableOpacity>
            <Divider orientation="horizontal" style={{marginTop: '10%'}} />
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '10%', marginLeft: '5%'}}>Donate</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://cash.app/$calebjsmith')}}><Text style={{color: 'white', fontSize: 27}}>* Donate to Lesson Pro</Text></TouchableOpacity>
            <Divider orientation="horizontal" style={{marginTop: '10%'}} />
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '10%', marginLeft: '5%'}}>Share</Text>
            <Text style={{color: 'white', fontSize: 21, marginTop: '4%', marginLeft: '5%', marginRight: '5%'}}>Share this app with a friend!</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%', paddingBottom: '20%'}} onPress={()=> { Linking.openURL('https://apps.apple.com/mu/app/worship-pads-pro/id1586199401')}}><Text style={{color: 'white', fontSize: 27}}>* Click to Share</Text></TouchableOpacity>
            
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e2427'
    },
    resources: {
        height: Dimensions.get('window').height
    }
});

export default More;