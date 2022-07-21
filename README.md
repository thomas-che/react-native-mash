<h1 align="center"> Cours React Native</h1>

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width="400"></a></p>

Prise de notes en suivant la formation de Programming with Mash [PlayList YouTube](https://www.youtube.com/playlist?list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ).


Table des matières.
> * [Utilisation](#Utilisation)
> * [1 - Installation](#1---Installation)
> * [2 - Configuration VS Code](#2---Configuration-VS-Code)
> * [3 - Structure & Basic Components in Our First App](#3---Structure-&-Basic-Components-in-Our-First-App)
> * [4 - Using the State Hook](#4---Using-the-State-Hook)
> * [5 - Styles & Style Sheet](#5---Styles-&-Style-Sheet)
> * [6 - Responsive UI with Flexbox](#6---Responsive-UI-with-Flexbox)
> * [7 - Responsive UI with Flexbox](#7---List,-ScrollView-&-RefreshControl)


&nbsp;
## Utilisation

Lancer Android Studio, et lancer notre device.  

Puis ouvrir le projet et lancer :
```bash
npx react-native start

# Et dans un autre terminal
npx react-native run-android
```


&nbsp;
## 1 - Installation
---
Explication avantage React Native https://youtu.be/LWs6dY92_MU  
Creation de l'application : https://youtu.be/p1Csi_0rh5I  
Conversion de l'app en React Native CLI : https://youtu.be/p1Csi_0rh5I  


Install de Node JS https://nodejs.org/en/download/  

Install de Android Studio Emulator [tuto](https://developer.android.com/studio#downloads) et lien install https://docs.expo.dev/workflow/android-studio-emulator/

Une fois dans Android Studio, on va dans la fenêtre virtual device manager.  
On crée un nouveau device, Pixel 2 et avec Android 11 x86 et dans les option on décoche la casse Device Frame pour ne pas avoir le bord du téléphone dans la fenêtre.  
On fait un Wripe Data pour cette appareil puis on le lance.  

On retourne sur notre app et on la lance.  
```bash
# Affiche les devices Android dispo
A
# Sélectionne emulator
# Puis lance la connection au device Android
a
# (Télécharge Expo Go sur le device) puis s'y connecte
```

Install du cli de React https://reactnative.dev/docs/environment-setup
```bash
npm install -g expo-cli
```

Crée le projet.
```bash
expo init mash-tuto
npm start
```

Eject le projet pour être en React Native Cli [video](https://youtu.be/LiHkAGyNSJU) ou le [tuto off](https://reactnative.dev/docs/environment-setup) dans l'onglet React Native CLI Quickstart.  

Install le package de Chocolatey https://chocolatey.org/install 
```bash
# dans un powershell en tant qu'admin
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

choco install -y nodejs-lts openjdk11
```

Crée 2 variable d’environnement :  
ANDROID_HOME : C:\Users\thomasc\AppData\Local\Android\Sdk  
ANDROID_PTOOLS : C:\Users\thomasc\AppData\Local\Android\Sdk\platform-tools  

Puis eject pour faire du react-native
```bash
npm run eject
# nom du package : lci.meteor

# lance le Metro 
npx react-native start

# dans un autre terminal on lance l'app
npx react-native run-android
```


&nbsp;
## 2 - Configuration VS Code
---
Video : https://youtu.be/btxP4dY6Pgc

Install de l'extention Vs Code [Android iOS Emulator](https://marketplace.visualstudio.com/items?itemName=DiemasMichiels.emulate) et config les emulator Path.  
Install [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)  
Install [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)  
Install [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)  


&nbsp;
## 3 - Structure & Basic Components in Our First App
---
Video : https://youtu.be/1lg_IXtjles

Écrit le code de notre appli dans App.js  
> Penser à faire les imports des composants


&nbsp;
## 4 - Using the State Hook
---
Video : https://youtu.be/9ACpqQR3lQg

On crée une constante object (State Hook) que l'on peut modifier par la suite


&nbsp;
## 5 - Styles & Style Sheet
---
Video : https://youtu.be/FgMuqQkGw9Q
Doc : https://reactnative.dev/docs/view

Affect le style à un élément avec `style={styles.text}` et le style est écrit dans un objet `StyleSheet`.


&nbsp;
## 6 - Responsive UI with Flexbox
---
Video : https://youtu.be/_t21GTZ4pf8
doc : https://reactnative.dev/docs/flexbox  

Utilise des flexbox pour placer les composants.  


&nbsp;
## 7 - List, ScrollView & RefreshControl
---
Video : https://youtu.be/Hy3HudbaU68

Pour que la page soit scrollable alors on ajoute l’élément `ScrollView`.  
Et pour recharger la page on peut ajouter l’élément `RefreshControl` et utiliser ses attributs pour modifier le refresh.
```js
const [refreshing, setRefreshing] = useState(false)
const onRefresh = () => {
    setRefreshing(true);
    steItems([...items, {key:100, item: 'Item 100'}]);
    setRefreshing(false);
}
<RefreshControl 
    refreshing={refreshing} 
    onRefresh={onRefresh}
    colors={['#ff0000']}
/> 
```