import { StyleSheet } from "react-native"
import { goldenColor } from "../../constants"

export default StyleSheet.create({
    buttonLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: goldenColor
    },

    buttonDisabled: {
        opacity: 0.6
    }
})