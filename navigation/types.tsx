import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type BottomTabParamList = {
    Home: { itemName: string };
    Details: undefined;
};

export type RootStackParamList = {
    MainNav: NavigatorScreenParams<BottomTabParamList>;
    Auth: undefined;
    //AddItem: { value: number};
    AddItem: undefined;
    //AddItem: { onAdd: (el: number) => void };
    NotFound: undefined;
};

export type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
}
