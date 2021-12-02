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


const Resources = () => {
    return(
        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 35, textAlign: 'center', textDecorationLine: 'underline', marginTop: '5%'}}>Resources</Text>
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '10%', marginLeft: '5%'}}>Chord Charts</Text>
            <Text style={{color: 'white', fontSize: 21, marginTop: '4%', marginLeft: '5%', marginRight: '5%'}}>Here are two reputable and free chord chart resources. Search for the song you want and navigate to the chords section. There you will be able to transpose to whichever key you desire.</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://ultimate-guitar.com')}}><Text style={{color: 'white', fontSize: 27}}>* Ultimate Guitar</Text></TouchableOpacity>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://worshipchords.com')}}><Text style={{color: 'white', fontSize: 27}}>* Worship Chords</Text></TouchableOpacity>
            <Divider orientation="horizontal" style={{marginTop: '10%'}} />
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '10%', marginLeft: '5%'}}>Metronome</Text>
            <Text style={{color: 'white', fontSize: 21, marginTop: '4%', marginLeft: '5%', marginRight: '5%'}}>Here is the link to download a great metronome app. Feel free to download any metronome app.</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://apps.apple.com/us/app/pro-metronome-tempo-beat-subdivision-polyrhythm/id477960671')}}><Text style={{color: 'white', fontSize: 27}}>* Pro Metronome</Text></TouchableOpacity>
            <Divider orientation="horizontal" style={{marginTop: '10%'}} />
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '10%', marginLeft: '5%'}}>Pad Backing Tracks</Text>
            <Text style={{color: 'white', fontSize: 21, marginTop: '4%', marginLeft: '5%', marginRight: '5%'}}>Here is the link to our Background Pads app. Its awesome. Download it to give your performance a bigger feel.</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://apps.apple.com/mu/app/worship-pads-pro/id1586199401')}}><Text style={{color: 'white', fontSize: 27}}>* Worship Pads Pro</Text></TouchableOpacity>
            <Divider orientation="horizontal" style={{marginTop: '10%'}} />
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '10%', marginLeft: '5%'}}>Tuner App</Text>
            <Text style={{color: 'white', fontSize: 21, marginTop: '4%', marginLeft: '5%', marginRight: '5%'}}>Here is the link to a great free and accurate tuner app. You will either need a real tuner or an app.</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%'}} onPress={()=> { Linking.openURL('https://apps.apple.com/us/app/boss-tuner/id1113473319')}}><Text style={{color: 'white', fontSize: 27}}>* Boss Tuner App</Text></TouchableOpacity>
            <Divider orientation="horizontal" style={{marginTop: '10%'}} />
            <Text style={{color: 'white', fontSize: 30, textDecorationLine: 'underline', marginTop: '10%', marginLeft: '5%'}}>Have a Question?</Text>
            <Text style={{color: 'white', fontSize: 21, marginTop: '4%', marginLeft: '5%', marginRight: '5%'}}>Here is the link to an awesome resource to answer any questions you may have.</Text>
            <TouchableOpacity style={{marginLeft: '5%', marginTop: '5%', paddingBottom: '25%'}} onPress={()=> { Linking.openURL('https://google.com')}}><Text style={{color: 'white', fontSize: 27}}>* Questions</Text></TouchableOpacity>
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

export default Resources;