import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './styles.js';

import TextButton from '../../ui/TextButton';

const timerDuration = 120

export default function RepeatBtnBlock({blured, action}) {

    const [disabled, setDisabled] = useState(true)
    const [seconds, setSeconds] = useState(timerDuration)
    const [idInterval, setIdInterval] = useState(null)

    useEffect(() => {
        clearInterval(idInterval)
        if (blured) {
            setDisabled(true)
            const interval = setInterval(() => setSeconds(sec => sec - 1), 1000)
            setIdInterval(interval)
        }
        return () => clearInterval(idInterval)
    }, [blured])

    useEffect(() => {
        if (idInterval && seconds <= 0) {
            clearInterval(idInterval)
            setIdInterval(null)
            setDisabled(false)
            setSeconds(timerDuration)
        }
    }, [seconds])

    return (
        <View style={styles.repeatSendBtn}>
          <TextButton disabled={disabled} label='Отправить код повторно' action={action} />
          <Text style={styles.repeatBtnLabel}>{disabled && ` через ${seconds}с.`}</Text>
        </View>
    )
}