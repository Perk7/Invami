import { Text } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import styles from '../globalStyles';

import InputField from '../../ui/InputLabel';

export default function PhoneField({label, onChange, disabled}) {
    return (
        <InputField label={label}>
            <Text style={styles.inputFieldBefore}>+7</Text>
            <MaskedTextInput
                editable={!disabled}
                mask="(999) 999-99-99"
                onChangeText={onChange}
                placeholder='(999) 999-99-99'
                placeholderTextColor='#AAA'
                style={[styles.inputField, disabled && styles.inputDisabled]}
                keyboardType="numeric"
                inputMode='tel'
                autoComplete='tel'
            />
        </InputField>
    )
}