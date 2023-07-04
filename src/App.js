import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Button, {ButtonType} from './components/Button';
import { useState } from 'react';

const App = () =>  {
    const [result, setResult] = useState(0);
    console.log('rending :', result);

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.text}>{result}</Text>

        <Button 
        title = "+"
        onPress={() => {
            setResult((prevState) => {
                console.log('prevState 1', prevState);
                return prevState +1;
            });
            setResult((prevState) => {
                console.log('prevState 2', prevState);
                return prevState +1;
            });
        }}
        buttonStyle={styles.button}
        uttonType={ButtonType.OPERATOR}
        />

        <View style={{ paddingVertical: 10}}></View>

        <Button 
        title = "-"
        onPress={() => {
            setResult(result - 1);
            console.log('- : ', result);
        }}
        buttonStyle={styles.button}
        uttonType={ButtonType.OPERATOR}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
        fontSize: 60,
        fontWeight: '700',
    },
    button: {
        width: 100,
        height: 100,
    },
});

export default App;