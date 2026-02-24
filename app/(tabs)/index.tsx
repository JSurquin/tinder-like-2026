import { Button } from '@/components/ui/button';
import { Heart, MapPin, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Platform, Text, useWindowDimensions, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface User {
  id: string;
  name: string;
  distance: number;
  age: number;
  occupation: string;
  bio: string;
  images: string[];
}

interface ProfileCardProps {
  user: User;
}

const users = [{
  id: '1',
  name: 'John Doe',
  distance: 10,
  age: 20,
  occupation: 'Software Engineer',
  bio: 'I am a software engineer',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
}, {
  id: '2',
  name: 'Jane Smith',
  distance: 10,
  age: 20,
  occupation: 'Software Engineer',
  bio: 'I am a software engineer',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
}, {
  id: '3',
  name: 'Alice Johnson',
  distance: 10,
  age: 20,
  occupation: 'Software Engineer',
  bio: 'I am a software engineer',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
}];

function ProfileCard({ user }: ProfileCardProps) {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const height = width * 1.5; // Ratio 2:3

  return (
    <View
      className="overflow-hidden rounded-3xl bg-white shadow-2xl"
      style={{
        width: isWeb ? width - 64 : width, // Padding de 16 de chaque côté
        height: isWeb ? height - 100 : height - 32,
      }}
    >
      <Image
        source={{ uri: user.images[0] }}
        className="absolute h-full w-full"
        resizeMode="cover"
      />

      {/* Gradient overlay */}
      <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
        <View className="flex-row items-center gap-2">
          <Text className="text-3xl font-bold text-white">
            {user.name}, {user.age}
          </Text>
        </View>

        <View className="mt-2 flex-row items-center">
          <MapPin size={20} color="white" />
          <Text className="ml-1 text-white">À {user.distance} km</Text>
        </View>

        <Text className="mt-2 text-base text-white">{user.occupation}</Text>

        <Text className="mt-2 text-sm text-white/90">{user.bio}</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const [cards, setCards] = useState<User[]>([]);
  const [cardIndex, setCardIndex] = useState(0);
  const { width, height } = useWindowDimensions();

  // const { data: users, isLoading, error } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json()),
  // });

  const swiperRef = React.useRef<Swiper<User>>(null);
  const handleLike = (cardIndex: number) => {
    console.log(`Liked ${users[cardIndex].name}`);
  };

  const handleDislike = (cardIndex: number) => {
    console.log(`Disliked ${users[cardIndex].name}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-4">
        <View className="flex-1 pt-4">
          <Swiper
            cards={users}
            renderCard={(card: any) =>
              card ? <ProfileCard user={card} /> : null
            }
            onSwipedLeft={handleDislike}
            onSwipedRight={handleLike}
            cardIndex={0}
            backgroundColor="transparent"
            stackSize={10}
            stackScale={10}
            stackSeparation={14}
            animateOverlayLabelsOpacity
            animateCardOpacity
            disableTopSwipe
            disableBottomSwipe
            overlayLabels={{
              left: {
                title: "NON",
                style: {
                  label: {
                    backgroundColor: "red",
                    color: "white",
                    fontSize: 24,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: "OUI",
                style: {
                  label: {
                    backgroundColor: "#4DED30",
                    color: "white",
                    fontSize: 24,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
            }}
          />
        </View>

        <View className="flex-row items-center justify-center gap-4 pb-24">
          <Button
            variant="outline"
            size="icon"
            className="h-16 w-16 rounded-full border-2 border-red-500 bg-white"
            onPress={() => {
              if (swiperRef.current) {
                swiperRef.current.swipeLeft();
              }
            }}
          >
            <X className="h-8 w-8 text-red-500" />
          </Button>

          <Button
            size="icon"
            className="h-16 w-16 rounded-full bg-primary"
            onPress={() => {
              if (swiperRef.current) {
                swiperRef.current.swipeRight();
              }
            }}
          >
            <Heart className="h-8 w-8 text-white" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );

}