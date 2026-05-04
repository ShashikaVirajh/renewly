import { Link } from 'expo-router'
import { View } from 'react-native'

const SignUp = () => {
  return (
    <View>
      <Link href="/(auth)/sign-in">Sign In</Link>
    </View>
  )
}

export default SignUp