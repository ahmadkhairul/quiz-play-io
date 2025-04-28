# 📚 QuizPlayIO

QuizPlayIO adalah aplikasi mobile berbasis React Native + Expo untuk **belajar sambil bermain kuis**.  
Pengguna bisa membuat kuis sendiri dan berlatih menjawab pertanyaan berbentuk definisi dan istilah, mirip konsep seperti Quizlet.

---

## ✨ Fitur Utama

- ✅ **Home**: 
  - Melihat daftar kuis yang tersedia
  - Mulai bermain kuis
- ✅ **Quiz Play**:
  - Soal berbentuk definisi
  - User harus mengetik istilah yang tepat
  - Menampilkan skor jawaban setelah selesai

---


## ✨ Upcoming Feature

-
- ✅ **Login & Register**: Login manual (username, password) dan Google Sign-In
- ✅ **Home**: 
  - Menambah kuis baru (hanya jika sudah login)
- ✅ **Quiz Play**:
  - Custom bentuk quiz (Gamify atau Animation)
  
---

## 📦 Instalasi & Jalankan Lokal

1. **Clone repo ini**:
   ```bash
   git clone https://github.com/yourusername/quiz-play-io.git
   cd quiz-play-io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan aplikasi di emulator / device**:
   ```bash
   npx expo start
   ```

4. **Scan QR code** di Expo Go App, atau jalankan langsung di emulator Android/iOS.

---

## 📱 Install APK Langsung

Jika ingin langsung mencoba tanpa build manual, tersedia file APK:

- [📥 Download sample.apk](./sample.apk)

> **Note:**  
> `sample.apk` adalah build **preview**, hanya untuk keperluan testing internal.  
> Jika ingin versi production-ready, disarankan untuk membuild sendiri.

---

## ⚙️ Build Sendiri

Jika ingin build APK baru:

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Configure EAS** (jika belum):
   ```bash
   eas build:configure
   ```

3. **Build APK**:
   ```bash
   eas build -p android --profile preview
   ```

File APK akan tersedia setelah build selesai di link Expo Build yang diberikan.

---

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [EAS Build](https://docs.expo.dev/eas/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Lottie](https://lottiefiles.com/) (untuk animasi onboarding)
- [React Navigation](https://reactnavigation.org/)

---

## ✨ Future Improvement Ideas

- Menambahkan Google Sign-In dengan backend
- Leaderboard pengguna
- Quiz multiplayer (versus teman)
- Upload kuis ke cloud
- Tema gelap (Dark Mode)

---

## 📄 License

This project is licensed under the MIT License — feel free to use and modify!

---

# 🚀 Enjoy QuizPlayIO! 🎉  
Belajar sambil bermain kuis lebih seru di mana saja!
