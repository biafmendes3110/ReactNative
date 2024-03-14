import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <Image style={styles.container}
    source={{uri:'https://cdn-images.farfetch-contents.com/20/87/53/10/20875310_50943614_2048.jpg'}}
    />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

});
