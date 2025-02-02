// components/banner.tsx
import React from 'react';
import { Banner, ButtonProps } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';

interface CustomBannerProps {
  visible: boolean;
  status: 'success' | 'error';
  message: string;
  onDismiss: () => void;
}

const CustomBanner: React.FC<CustomBannerProps> = ({
  visible,
  status,
  message,
  onDismiss,
}) => {
  const iconSource = status === 'success' ? 'check-circle' : 'alert-circle';
  const iconColor = status === 'success' ? '#4CAF50' : '#F44336';

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Dismiss',
          onPress: onDismiss,
          textColor: iconColor,
        } as ButtonProps,
      ]}
      icon={({ size }) => (
        <Icon source={iconSource} size={size} color={iconColor} />
      )}
      style={styles.banner}>
      {message}
    </Banner>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default CustomBanner;
