import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useWindowDimensions ,View } from 'react-native';
import Button, {ButtonTypes} from './components/Button';
import { useState } from 'react';

const Operators = {
    CLEAR: 'C',
    PLUS: '+',
    MINUS: '-',
    EQUAL: '=',
};

const App = () =>  {
    const [result, setResult] = useState(0);
    const [formula, setFormula] = useState([]);

    const ButtonTypes = {
        OPERATOR: 'OPERATOR',
        NUMBER: 'NUMBER',
    };

    const calculate = () => {
        let calculatedNumber = 0;
        let operator = '';
    
        formula.forEach((value)=> {
            if ([Operators.PLUS, Operators.MINUS].includes(value)) {
                operator = value;
            } else {
                if (operator === Operators.PLUS) {
                    calculatedNumber += value;
                } else if (operator === Operators.MINUS) {
                    calculatedNumber -= value;
                } else {
                    calculatedNumber = value;
                }
            }
        });
        setResult(calculatedNumber);
        setFormula([]);
    };
    

    const onPressOperator = (operator) => {
    switch (operator) {
        case Operators.CLEAR:
            setFormula([]);
            setResult(0);
            return;
        case Operators.EQUAL:
            calculate();
            return;
        default:
            const last = formula[formula.length - 1];
            if ([Operators.PLUS, Operators.MINUS].includes(last)) {
                setFormula((prev) => {
                    prev.pop();
                    return [...prev, operator];
                });
            } else {
                setFormula((prev) => [...prev, operator]);
            }
            return;
        }
    };

    const widowWidth = useWindowDimensions().width;
    const width = (widowWidth - 5) / 4;

    return (
    <View style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.resultContainer}>
            <Text style={styles.text}>
                {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',' )}
            </Text>
        </View>

        <View style={styles.buttonContainer}>
            <View style={styles.leftPad}>
                <View style={styles.number}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <Button
                        key={num}
                        title={num.toString()}
                        onPress={() => onPressNumber(num)}
                        buttonStyle={{ width, height: width, marginBottom: 1}}
                        />
                    ))}
                </View>
                <View style={styles.bottom}>
                    <Button
                    title="0"
                    onPress={() => onPressNumber(num)}
                    buttonType={ButtonTypes.NUMBER}
                    buttonStyle={{
                        width: width * 2,
                        height: width,
                        marginTop: 1,
                    }}
                    />
                    <Button
                    title="EQUAL"
                    onPress={() => onPressOperator()}
                    buttonType={ButtonTypes.OPERATOR}
                    buttonStyle={{ width, height: width, marginTop: 1}}
                    />
                </View>
            </View>

            <View>
                <Button
                title={Operators.CLEAR}
                onPress={() => onPressOperator(Operators.CLEAR)}
                buttonType={ButtonTypes.OPERATOR}
                buttonStyle={{ width, height: width, marginTop: 1}}
                />
                <Button
                title={Operators.MINUS}
                onPress={() => onPressOperator(Operators.MINUS)}
                buttonType={ButtonTypes.OPERATOR}
                buttonStyle={{ width, height: width, marginTop: 1}}
                />
                <Button
                title={Operators.PLUS}
                onPress={() => onPressOperator(Operators.PLUS)}
                buttonType={ButtonTypes.OPERATOR}
                buttonStyle={{ 
                    width, 
                    height: width * 2 + 1, 
                    marginTop: 1
                }}
                />
            </View>
        </View>
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    },
    text: {
        fontSize: 60,
        fontWeight: '700',
        color: '#ffffff',
        paddingBottom: 30,
        paddingRight: 30,
    },
    resultContainer: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    buttonContainer: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    leftPad: {
        width: '75%',
    },
    number: {
        flexWrap: 'wrap-reverse',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export {ButtonTypes};
export default App;