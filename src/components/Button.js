import { Pressable , StyleSheet ,Text } from "react-native";
import PropTypes from 'prop-types';

const ButtonType = {
    NUMBER: 'NUMBER',
    OPERATOR: 'OPERATOR',
};

const Colors = {
    NUMBER: ['#71717a', '#f59e06'],
    OPERATOR: ['#3F3F46', '#B45309']
}

const Button = ({title, onPress, buttonStyle, buttonType}) => {
    return (
        <Pressable 
        style={(pressed) => [
            styles.button,
            {backgroundColor: Colors[buttonType][0]},
            pressed && {backgroundColor: Colors[buttonType][1]},
            buttonStyle,
        ]}
        onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
};

Button.defaultProps = {
    buttonType: ButtonType.NUMBER,
};

Button.prototype= {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
    buttonType: PropTypes.oneOf(Object.values(ButtonType)),
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#71717a',
    },
    title: {
        color: '#ffffff',
        fontSize: 50,
    },
});

export { ButtonType };
export default Button;