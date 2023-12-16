import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUp = ({ toggleScreens }) => {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }

    const [data, setData] = useState(initialValues);

    const handleChange = (newValue, field) => {
        setData(prev => ({ ...prev, [field]: newValue }));
    }

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
            <View className="mt-8">
                <Text className="text-3xl font-bold text-center">Let's get started!</Text>
                <Text className="text-center text-gray-300 text-lg pt-1">Create an account</Text>
            </View>
            <View className="space-y-5 pt-8">
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Name"
                    onChangeText={(newVal) => handleChange(newVal, 'name')}
                    defaultValue={data.name}
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Email"
                    onChangeText={(newVal) => handleChange(newVal, 'email')}
                    defaultValue={data.email}
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Phone No"
                    onChangeText={(newVal) => handleChange(newVal, 'phone')}
                    defaultValue={data.phone}
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Password"
                    secureTextEntry={true}
                    onChangeText={(newVal) => handleChange(newVal, 'password')}
                    defaultValue={data.password}
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={(newVal) => handleChange(newVal, 'confirmPassword')}
                    defaultValue={data.confirmPassword}
                />
                <TouchableOpacity onPress={handleSubmit}>
                    <View className="p-3 rounded-2xl bg-green justify-center">
                        <Text className="text-white text-lg text-center">Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <View className='flex flex-row justify-center'>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={toggleScreens}>
                        <Text className="text-green p-0 m-0">Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUp;