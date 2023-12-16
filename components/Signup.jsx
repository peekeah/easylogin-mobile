import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUp = ({ toggleScreens }) => {
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
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Email"
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Phone No"
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Your Password"
                    secureTextEntry={true}
                />
                <TextInput
                    className="border border-black p-3 rounded-2xl"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => {/* do this */ }}>
                    <View className="p-3 rounded-2xl bg-green justify-center">
                        <Text className="text-white text-lg text-center">Log In</Text>
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