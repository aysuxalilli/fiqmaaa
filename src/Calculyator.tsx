import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res.toString());
  };

  const subtract = () => {
    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res.toString());
  };

  const multiply = () => {
    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res.toString());
  };

  const divide = () => {
    const res = parseFloat(num1) / parseFloat(num2);
    setResult(res.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={num1}
        onChangeText={setNum1}
        placeholder="birinci ededi daxil edin"
      />
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={num2}
        onChangeText={setNum2}
        placeholder='ikinci ededi daxil edin'

      />
      <View style={styles.buttons}>
        <Button title="+" onPress={add} />
        <Button title="-" onPress={subtract} />
        <Button title="*" onPress={multiply} />
        <Button title="/" onPress={divide} />
      </View>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    height: 46,
    width: '90%',
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'normal',
  },
});