// components/banner.tsx
import React from 'react';
import { Banner, Icon } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface CustomBannerProps {
  visible: boolean;
  isValid: boolean;
  message: string;
  onDismiss: () => void;
}

const CustomBanner = ({ visible, isValid, message, onDismiss }: CustomBannerProps) => (
  <Banner
    visible={visible}
    actions={[{ label: 'OK', onPress: onDismiss }]}
    icon={({ size }) => (
      <Icon 
        source={isValid ? 'check-circle' : 'alert-circle'} 
        size={size} 
        color={isValid ? '#4CAF50' : '#F44336'} 
      />
    )}
    style={styles.banner}>
    {message}
  </Banner>
);

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default CustomBanner;
