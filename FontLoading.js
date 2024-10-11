// src/FontLoading.js

import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const loadFonts = async () => {
  await Font.loadAsync({
    'CustomFont': require('../assets/fonts/CustomFont.ttf'), // Schimbă calea dacă este necesar
  });
};

const FontLoading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFonts().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

  return children;
};

export default FontLoading;
