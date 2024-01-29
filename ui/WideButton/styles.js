import { StyleSheet } from "react-native"
import { buttonColor } from "../../constants"

export default StyleSheet.create({
    btnSubmit: {
        backgroundColor: buttonColor,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Outfit',
    },
    
    btnDisabled: {
        opacity: 0.6
    }
})