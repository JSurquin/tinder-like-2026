import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TINDER_PINK = '#FE3C72';
const TINDER_CORAL = '#FF6B7A';

const inputClass = 'border-0 bg-white py-3.5 text-base text-gray-900';
const inputStyle = { borderRadius: 28 };

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    // TODO: appeler le service d'inscription
    console.log(form);
  };

  return (
    <LinearGradient
      colors={[TINDER_PINK, TINDER_CORAL]}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1" edges={['top', 'bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            className="flex-1 px-6"
          >
            {/* Logo / Titre */}
            <View className="items-center pt-12 pb-8">
              <View className="mb-2 h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Text className="text-4xl">❤️</Text>
              </View>
              <Text className="text-center text-3xl font-bold text-white">
                Love First
              </Text>
            </View>

            {/* Accroche */}
            <Text className="mb-8 text-center text-xl font-semibold text-white">
              Rejoins-nous
            </Text>

            {/* Formulaire */}
            <View className="gap-4">
              <Input
                placeholder="Prénom"
                placeholderTextColor="#9CA3AF"
                value={form.name}
                onChangeText={(text) => setForm({ ...form, name: text })}
                autoCapitalize="words"
                autoComplete="name-given"
                className={inputClass}
                style={inputStyle}
              />
              <Input
                placeholder="Email"
                placeholderTextColor="#9CA3AF"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                className={inputClass}
                style={inputStyle}
              />
              <Input
                placeholder="Mot de passe"
                placeholderTextColor="#9CA3AF"
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="new-password"
                className={inputClass}
                style={inputStyle}
              />
              <Input
                placeholder="Confirmer le mot de passe"
                placeholderTextColor="#9CA3AF"
                value={form.confirmPassword}
                onChangeText={(text) =>
                  setForm({ ...form, confirmPassword: text })
                }
                secureTextEntry
                autoCapitalize="none"
                autoComplete="new-password"
                className={inputClass}
                style={inputStyle}
              />
            </View>

            {/* Bouton Inscription */}
            <Pressable
              onPress={handleRegister}
              className="mt-8 overflow-hidden rounded-full bg-white py-4 shadow-lg active:opacity-90"
            >
              <Text className="text-center text-lg font-bold text-[#FE3C72]">
                S'inscrire
              </Text>
            </Pressable>

            {/* Lien connexion */}
            <View className="mt-8 flex-row flex-wrap justify-center gap-1">
              <Text className="text-center text-white">
                Déjà un compte ?{' '}
              </Text>
              <Link href="/(auth)/login" asChild>
                <Pressable>
                  <Text className="font-semibold text-white underline">
                    Se connecter
                  </Text>
                </Pressable>
              </Link>
            </View>

            {/* Conditions (style Tinder) */}
            <Text className="mt-auto pt-12 text-center text-xs text-white/80">
              En t'inscrivant, tu acceptes nos{' '}
              <Text className="underline">Conditions d'utilisation</Text>
              {' '}et notre{' '}
              <Text className="underline">Politique de confidentialité</Text>.
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
