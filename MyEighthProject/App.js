import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' //import image picker
import * as Sharing from 'expo-sharing'; //import image sharing


export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
    if(permissionResult.granted === false){
      
      alert("Permission required");
      return;
    } 

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true){

      return;
    }

    setSelectedImage({ localuri: pickerResult.uri});
  };

  //
  let openSharingDialogAsync = async () => {
    if ( !(await Sharing.isAvailableAsync())){
      alert('Sharing is not available on my phone')
      return;
    }

    Sharing.shareAsync(selectedImage.localuri);

  };

  //display
  if (selectedImage !== null ){
    return(
      <View style = {styles.container}>
        <Image source = {{uri: selectedImage.localuri}} style = {styles.selImage}/>
        <TouchableOpacity onPress= {openSharingDialogAsync} style = {styles.button}> 
          <Text style = {styles.buttonText}> Share my photo </Text>
        </TouchableOpacity>
      </View>
    )
  }

  //end of the code

  return (
    <View style={styles.container}>
    
      <Image  source = {{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
        style={styles.logo}/>
      <Text style = {styles.insts}> 
          Press the button below to select an image on your phone! 
      </Text>
     
      <TouchableOpacity style = {styles.button} onPress = {openImagePickerAsync}>
        <Text style = {styles.buttonText}> Pick image! </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0",
  },

  button: {
    
    backgroundColor: "#778899",
    padding: 20,
    borderRadius: 5

  },

  inst: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20,

  },

  buttonText:{
    fontSize: 20,
    color: "black",

  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }


});
