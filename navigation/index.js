import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Explore from '../screens/Explore';
import Settings from '../screens/Settings';
import Browse from '../screens/Browse';

import {theme} from '../constants';

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Product,
    Explore,
    Settings,
    Browse,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  },
);

export default createAppContainer(screens);
