import { StyleSheet } from "react-native"
import { buttonColor } from "../../constants"

export default StyleSheet.create({
    btnSubmit: {
        backgroundColor: buttonColor,
        marginTop: 20, 
        marginBottom: 20,
        width: '70%',
        alignSelf: 'center',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    btnText: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Outfit',
    },

    btnDisabled: {
        opacity: 0.6
    }
})