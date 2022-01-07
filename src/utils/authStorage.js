import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(`${this.namespace}:token`);
  }

  async setAccessToken(token) {
    await AsyncStorage.setItem(`${this.namespace}:token`, token);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;