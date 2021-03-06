import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings173253Navigator from '../features/Settings173253/navigator';
import UserProfile173246Navigator from '../features/UserProfile173246/navigator';
import Settings173245Navigator from '../features/Settings173245/navigator';
import Settings173243Navigator from '../features/Settings173243/navigator';
import SignIn2173241Navigator from '../features/SignIn2173241/navigator';
import BlankScreen1173239Navigator from '../features/BlankScreen1173239/navigator';
import BlankScreen0173238Navigator from '../features/BlankScreen0173238/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings173253: { screen: Settings173253Navigator },
UserProfile173246: { screen: UserProfile173246Navigator },
Settings173245: { screen: Settings173245Navigator },
Settings173243: { screen: Settings173243Navigator },
SignIn2173241: { screen: SignIn2173241Navigator },
BlankScreen1173239: { screen: BlankScreen1173239Navigator },
BlankScreen0173238: { screen: BlankScreen0173238Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
