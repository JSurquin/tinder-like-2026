# Love First ❤️

Application de rencontre type Tinder, construite avec **Expo** (React Native), **NativeWind** (Tailwind CSS) et une bibliothèque de composants UI type **shadcn** pour React Native.

## Stack

- **Expo** (SDK 52) — développement cross-platform (iOS, Android, Web)
- **Expo Router** — routage fichier-based et navigation (Stack, Tabs)
- **NativeWind** (Tailwind CSS) — styles avec utilitaires Tailwind
- **Zustand** — état global (auth)
- **TanStack Query** — requêtes asynchrones (préparé pour l’app)
- **Composants UI** — shadcn-style (rn-primitives, Lucide, etc.)
- **expo-linear-gradient** — dégradés sur les écrans d’auth
- **react-native-deck-swiper** — cartes à swiper sur l’écran d’accueil

## Structure des écrans

| Écran | Route | Description |
|-------|--------|-------------|
| **Connexion** | `(auth)/login` | Formulaire email / mot de passe, lien vers inscription |
| **Inscription** | `(auth)/register` | Formulaire nom, email, mot de passe, confirmation |
| **Accueil** | `(tabs)/index` | Cartes profils à swiper (gauche = non, droite = oui), boutons Like / Dislike |
| **Messages** | `(tabs)/chat` | Liste de conversations (mock), avatars et derniers messages |
| **Profil** | `(tabs)/profil` | Profil utilisateur (avatar, bio, centres d’intérêt) |
| **Paramètres** | `(tabs)/settings` | Notifications, déconnexion |

L’app utilise un **guard d’auth** : si l’utilisateur n’est pas connecté, il voit uniquement login/register ; une fois connecté, il accède aux onglets (Accueil, Messages, Profil, Paramètres).

## Démarrage

1. **Installer les dépendances**

   ```bash
   pnpm install
   ```

2. **Lancer l’app**

   ```bash
   pnpm start
   # ou
   npx expo start
   ```

   Ensuite : ouvrir dans le simulateur iOS, l’émulateur Android ou Expo Go. Le build web utilise `metro` (config dans `app.json`).

## Fichiers importants

- `app/_layout.tsx` — layout racine, `QueryClientProvider`, garde d’auth, `PortalHost`
- `app/(auth)/login.tsx` & `register.tsx` — écrans de connexion / inscription (style Tinder)
- `app/(tabs)/index.tsx` — écran d’accueil avec swiper de cartes
- `app/(tabs)/chat.tsx` — liste des conversations
- `app/(tabs)/profil.tsx` — profil utilisateur
- `app/(tabs)/settings.tsx` — paramètres et déconnexion
- `stores/auth.store.ts` — état d’authentification (Zustand)
- `services/user.service.ts` — persistance utilisateur (get/set/delete)
- `components/ui/*` — composants UI réutilisables (boutons, cartes, inputs, etc.)
- `global.css` + `tailwind.config.js` — thème et variables Tailwind

## Travail réalisé (résumé pour les élèves)

- **Config** : Expo + NativeWind + Tailwind + shadcn (components.json, babel, metro, tsconfig).
- **Auth** : écrans login/register, store Zustand, service user, garde dans le layout pour rediriger selon `isLoggedIn`.
- **Onglets** : Accueil (swiper), Messages, Profil, Paramètres ; suppression de l’onglet Explore.
- **UI** : bibliothèque de composants (Button, Card, Input, Avatar, Switch, etc.) et styles globaux (global.css, thème).
- **Web** : entrées `(web)/index` et `index.web` (placeholders).

Pour le détail fichier par fichier et écran par écran, voir le message du commit initial (conventional commit en anglais).

## Ressources

- [Expo](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [NativeWind](https://www.nativewind.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
