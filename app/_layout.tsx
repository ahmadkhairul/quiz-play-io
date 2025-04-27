import '../global.css';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerLeft: ({ canGoBack }) =>
          canGoBack && (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="chevron-back" size={24} color="#333" />
              <Text style={{ marginLeft: 5, fontSize: 16, color: '#333' }}>Kembali</Text>
            </TouchableOpacity>
          ),
      }}>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: '',
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="quiz/[id]"
        options={{
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="quiz/preview/[id]"
        options={{
          headerTitle: '',
        }}
      />
    </Stack>
  );
}
