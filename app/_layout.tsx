import { useColorScheme } from '@/hooks/use-color-scheme';
import useAuthStore from '@/stores/auth.store';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text } from 'react-native';
import 'react-native-reanimated';
import "../global.css";

const queryClient = new QueryClient()

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const isWeb = Platform.OS === 'web';

  const { isLoggedIn, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  // if (isWeb) {
  //   return (
  //     <Stack screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="(web)/index" />
  //   </Stack>
  //   )
  // }

  if (isLoggedIn === null) {
    return <LinearGradient colors={['#FF4458', '#FF6B7A']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-white text-2xl font-bold pulse">Loading</Text>
    </LinearGradient>;
  }

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack.Protected>
        </Stack>
        <StatusBar style="auto" />
        <PortalHost />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
