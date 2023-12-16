import { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Person from '../assets/person.png';

const Login = ({ toggleScreens }) => {

    const initialValues = {
        email: '',
        password: ''
    }

    const [data, setData] = useState(initialValues)

    const handleSubmit = () => {
        console.log(data);

        Alert.alert(
            'Submitted!',
            'Form Submitted Successfully!',
            [ { text: 'Close' } ],
            { cancelable: false }
        );

        setData(initialValues);

    }

    return (
        <View className="mt-[25%] p-5 space-y-5">
            <View className="flex justify-center items-center w-full my-10">
                <Image source={Person} />
            </View>
            <Text className="text-center text-3xl">Welcome Back!</Text>
            <Text className="text-center text-lg my-3">Please Log into your existing account</Text>
            <View className="space-y-5">
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Email"
                    onChangeText={newText => setData(prev => ({ ...prev, ['email']: newText }))}
                    defaultValue={data.email}
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Password"
                    secureTextEntry={true}
                    onChangeText={newText => setData(prev => ({ ...prev, ['password']: newText }))}
                    defaultValue={data.password}
                />
            </View>
            <TouchableOpacity onPress={handleSubmit}>
                <View className="p-3 rounded-2xl bg-green justify-center">
                    <Text className="text-white text-lg text-center">Log In</Text>
                </View>
            </TouchableOpacity>
            <View className='flex flex-row justify-center'>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={toggleScreens}>
                    <Text className="text-green p-0 m-0">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;