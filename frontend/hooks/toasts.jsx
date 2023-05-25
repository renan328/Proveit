import React from 'react';
import Toast from 'react-native-toast-message';

export default function showToast(title, message, type) {
    Toast.show({
        type: type,
        text1: title,
        text2: message
    });
}