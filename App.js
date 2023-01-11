import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Platform,StatusBar } from 'react-native';

export default function App() {
  console.log()
  return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor:'blue'}}>
    <View style={{ flex:1, justifyContent: 'center', paddingTop: StatusBar.currentHeight }}>
      <View style={{padding:16, backgroundColor:"green"}}>
        <Text>search</Text>
      </View>
      <View style={{flex :1,padding:16, backgroundColor:"blue"}}>
        <Text>list</Text>
      </View>
    </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  
});
