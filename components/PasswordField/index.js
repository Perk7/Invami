import { TextInput } from 'react-native';
import { useState } from 'react';
import styles from '../globalStyles';

import InputField from '../../ui/InputLabel';
import HideSwitchBtn from '../../ui/HideSwitchBtn';

export default function PasswordField({label, onChange, value, disabled}) {
    const [passVisibility, changePassVisibility] = useState(true)

    return (
        <InputField label={label}>
            <TextInput
                secureTextEntry={!passVisibility}
                editable={!disabled}
                style={[styles.inputField, disabled && styles.inputDisabled]}
                onChangeText={onChange}
                value={value}
                maxLength={20}
            />
            <HideSwitchBtn 
                visibility={passVisibility} 
                action={() => changePassVisibility(state => !state)} 
            />
        </InputField>
    )
}