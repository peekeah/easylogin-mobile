import { Button, Text, TextInput, View } from 'react-native';

const Login = () => {
    return (
        <View className="mt-10 m">
            <Text className="p-3 w-full text-center text-3xl bg-red-300">Login</Text>
            <View className="p-5 space-y-5">
                <View>
                    <Text className="mb-2">Email <Text className="text-red-700">*</Text></Text>
                    <TextInput className="border border-black px-2" placeholder="Email" />
                </View>
                <View>
                    <Text className="mb-2">Password <Text className="text-red-700">*</Text></Text>
                    <TextInput className="border border-black px-2" placeholder="Email" />
                </View>
            </View>
            <View>
                <Button 
                    title="Login"
                    className="bg-purple-300"
                />
            </View>


        </View>
    )
}

export default Login;