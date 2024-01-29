import { TextInput } from 'react-native';
import styles from '../globalStyles';

import InputField from '../../ui/InputLabel';

export default function TextField({label, onChange, value, disabled}) {
    return (
        <InputField label={label}>
            <TextInput
                editable={!disabled}
                style={[styles.inputField, disabled && styles.inputDisabled]}
                onChangeText={onChange}
                value={value}
                maxLength={20}
            />
        </InputField>
    )
}