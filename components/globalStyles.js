import { StyleSheet } from "react-native"

export default StyleSheet.create({
    
    inputField: {
        fontSize: 18,
        color: '#DDD',
        fontFamily: 'Outfit',
        flex: 1
    },

    inputFieldBefore: {
        fontSize: 18,
        color: '#DDD',
        fontFamily: 'Outfit',
        paddingRight: 8
    },

    inputFieldAfter: {
        ...this.inputFieldAfter,
        paddingLeft: 8
    },

    inputDisabled: {
        opacity: 0.6
    }
})