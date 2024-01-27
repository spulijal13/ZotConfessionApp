import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

export default function Confessions({navigation}) {
  function submit (){
    fetch("https://fb62-169-234-101-254.ngrok-free.app").then(res => res.json()).then(response => {console.log("Hello", response)})
    navigation.navigate('Submission');
  }
  return (
    <View style={styles.container}>
        <Image source={require('./assets/confessyoursins-removebg-preview.png')} style={styles.shrinkedImage} />
        <TextInput style={styles.input}>
            
        </TextInput>
        <Button title="Submit" onPress={submit} color='#d1b79f'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    color: 'white',
    backgroundColor: '#f5edd0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  text: {
    color:'#000000',
    fontSize: 30,
    textAlign: 'center',
  },
  button:{

  },
  shrinkedImage: {
    width: 30,
    height: 30,
    aspectRatio: 10,
  }

});
