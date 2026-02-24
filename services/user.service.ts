import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export const getUser = async () => {
    if (!isWeb) {
        const user = await SecureStore.getItemAsync('token');
        if (user)
            return { success: true, user: user };
        else
            return { success: false };
    }
    else {
        const user = localStorage.getItem('token');
        if (user)
            return { success: true, user: user };
        else
            return { success: false };
    }
};

export const setUser = async (email: string, password: string) => {
    //const response = await fetch('https://api.example.com/login', {
    //    method: 'POST',
    //    body: JSON.stringify({ email: user }),
    //});
    //const result = await response.json();
    // const token = result.token

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';

    if (!isWeb) {
        await SecureStore.setItemAsync('token', token);
    }
    else {
        localStorage.setItem('token', token);
    }
    return { success: true };
};

export const deleteUser = async () => {
    await SecureStore.deleteItemAsync('user');
};