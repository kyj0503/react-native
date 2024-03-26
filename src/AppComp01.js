import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import MyButton from './components/MyButton1';

//Custom button - Pressable
export default function AppComp01() {

    return(<View style={ styles.container}>

      <Text style={styles.text}>MyButton - Pressable Button</Text>
      
      <MyButton />
      
      <StatusBar style='auto' />

    </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 30,
      marginBottom: 10
    }
  });