import { TextInput } from 'react-native';
import { useState } from 'react';

import InputField from '../../ui/InputLabel';
import styles from './styles.js';
import CellBlock from '../../ui/CellBlock/index.js';

export default function CodeField({label, onChange, value, disabled, submitFunction}) {
    const [localValue, setLocalValue] = useState(' '.repeat(6).split(''));
    const [focused, setFocus] = useState(false)

    function onTypeCode(val) {
        onChange(val)
        if (val.length === 6) submitFunction(val)
        
        const newValue = val + ' '.repeat(6 - val.length)
        setLocalValue(newValue.split(''));
    }

    return (
        <InputField label={label} unborder>
            <CellBlock value={value} cellItems={localValue} focused={focused} disabled={disabled} />
            <TextInput style={styles.inputField} 
                onFocus={() => setFocus(true)} 
                onBlur={() => setFocus(false)} 
                maxLength={6} 
                onChangeText={onTypeCode} 
                keyboardType='numeric'
                contextMenuHidden
                value={value} 
                editable={!disabled}
            />
        </InputField>
    )
}