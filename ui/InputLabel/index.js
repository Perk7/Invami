import { View } from 'react-native';
import styles from './styles.js'

import Label from '../Label';

export default function InputField({label, children, unborder}) {
    return (
        <View style={styles.inputBlock}>
            <Label propStyles={styles.inputLabel} content={label} />
            <View style={[styles.inputFieldBlock, !unborder && styles.inputFieldBorder]}>
                {children}
            </View>
        </View>   
    )
}