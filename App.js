import * as React from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

import Header from './components/Header';
import TakePhotoButton from './components/TakePhotoButton';
import ChoosePhotoButton from './components/ChoosePhotoButton';
import SharePhotoButton from './components/SharePhotoButton';

const { width: screenWidth } = Dimensions.get('window');

const memeTemplateImageUris = [
  'https://i.imgflip.com/2/4t0m5.jpg',
  'https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg',
  'https://i.imgflip.com/3j1z70.jpg',
  'https://imgflip.com/s/meme/Arthur-Fist.jpg',
  'https://i.imgflip.com/3jysf6.png',
];

export default function App() {
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");

  const placeholderMeme = memeTemplateImageUris[0];
  const [imgUri, setImgUri] = React.useState(placeholderMeme);

  const memeView = React.useRef();

  const [loaded] = useFonts({
    Bougan: require('./assets/fonts/Bougan-Black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View>
      <StatusBar 
        backgroundColor="black"
        hidden={false}
      />
      <Header textHeader={'App Meme'} /> 
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.styleMeme} collapsable={false} ref={memeView}>
            <Image
              source={{uri: imgUri}}
              style={{height: screenWidth, marginLeft:'2%', width: '96%'}}
            />
            <Text style={[styles.memeText, {top: 8}]}> {topText} </Text>
            <Text style={[styles.memeText, {bottom: 10}]}> {bottomText} </Text>
          </View>

          <View style={{marginTop:10,width:'96%', marginLeft:'2%'}}> 
            <SharePhotoButton memeView={memeView}/>
          </View>

          <View style={styles.styleGambar}>
            <Text style={styles.pilihGambar}>Pilih Gambar :</Text>       
            <View style={{ flexDirection: 'row',borderWidth: 1, borderColor: "gray", height:80, borderRadius: 5,}}>
            {memeTemplateImageUris.map((uri) => {
              return (
                <TouchableOpacity
                  key={uri}
                  onPress={() => {
                    setImgUri(uri);
                  }}>
                  <Image source={{ uri }} style={styles.templateImage} />
                </TouchableOpacity>
              );
            })}
            </View>
          </View>

          <View style={styles.styleInput}>
            
            <TextInput
              style={styles.textInput}
              value={topText}
              placeholder="Input kata ke-1"
              onChangeText={(text)=>{setTopText(text)}}
            />
            <TextInput
              style={styles.textInput}
              value={bottomText}
              placeholder="Input kata ke-2"
              onChangeText={(text)=>{setBottomText(text)}}
            />
          </View>

          
          <View style={styles.getPhoto}>
            <View style={{marginRight:10, width:135}}>  
              <TakePhotoButton setImgUri={setImgUri}/>
            </View>
            <View style={{width:135}}>
              <ChoosePhotoButton setImgUri={setImgUri}/>
            </View>
          </View>

       
          
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: "white",
  },

  styleMeme : {
    textAlign: "center",
    justifyContent:'center',
  },

  memeText: {
    color: "white",
    fontSize: 38,
    fontFamily: 'Bougan',
    fontWeight: "900",
    textAlign: "center",
    position: "absolute",
    left: 5,
    right: 5,
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowRadius: 5,
    textShadowOffset: { height: 2, width: 2 },
  },

  pilihGambar :{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5,
  },

  styleGambar :{
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },

  templateImage: {
    height: 60,
    width: 60,
    marginHorizontal: 4,
    marginVertical: 9,
  },

  textInput: {
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    padding:8,
    marginBottom:6,
    borderRadius: 5,
  },

  styleInput :{
    width:'95%',
    marginLeft:'2.5%',
  },

  getPhoto :{
    flexDirection: 'row',
    justifyContent:'center',
    marginTop:10,
    marginBottom:60,
  },
});
