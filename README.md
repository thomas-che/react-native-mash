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
> * [8 - FlatList & SectionList with Nested Array](#8---FlatList-&-SectionList-with-Nested-Array)
> * [9 - Text Input & Keyboard](#9---Text-Input-&-Keyboard)
> * [10 - Button, Touchables & Pressable](#10---Button,-Touchables-&-Pressable)
> * [11 - Alert & Toast Message](#11---Alert-&-Toast-Message)
> * [12 - Modal & How to Create Custom Alert with it](#12---Modal-&-How-to-Create-Custom-Alert-with-it)
> * [13 - Image & ImageBackground](#13---Image-&-ImageBackground)
> * [14 - Custom Components & Props](#14---Custom-Components-&-Props)
> * [15 - React Navigation V5 - Stack Navigator](#15---React-Navigation-V5---Stack-Navigator)
> * [16 - React Navigation V5 - Tab Navigator - Material Tab at Bottom &Top](#16---React-Navigation-V5---Tab-Navigator---Material-Tab-at-Bottom-&Top)
> * [17 - React Navigation V5 - Drawer Navigation - Side Menu](#17---React-Navigation-V5---Drawer-Navigation---Side-Menu)
> * [18 - React Navigation V5 - Passing Data Between Screens](#18---React-Navigation-V5---Passing-Data-Between-Screens)
> * [19 - Custom Fonts in React Native CLI & Expo Projects](#19---Custom-Fonts-in-React-Native-CLI-&-Expo-Projects)
> * [20 - Global Styles & How to Use Custom Fonts Globally in Project](#20---Global-Styles-&-How-to-Use-Custom-Fonts-Globally-in-Project)
> * [21 - AsyncStorage - How to make an Offline Login with Async Storage](#21---AsyncStorage---How-to-make-an-Offline-Login-with-Async-Storage)
> * [22 - SQLite Database - How to make an Offline Login with SQLite](#22---SQLite-Database---How-to-make-an-Offline-Login-with-SQLite)
> * [23 - Redux - State Management](#23---Redux---State-Management)


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


&nbsp;
## 8 - FlatList & SectionList with Nested Array
---
Video : https://youtu.be/Otp4cCts7oo  

Deux autre possibilité d'afficher des listes.  
FlatList est mieux pour les grandes liste, car il ne charge pas toute la liste contrairement a ScrollView, il ne charge que ce qui est affiché.  


&nbsp;
## 9 - Text Input & Keyboard
---
Video : https://youtu.be/wZkGaDw1Ydg  
Video retirer le clavier lorsque l'on quitte la saisie : https://youtu.be/CwnIVdleLkU  

On peut changer le type de clavier avec `keyboardType` et `secureTextEntry` pour les input password.  


&nbsp;
## 10 - Button, Touchables & Pressable
---
Video : https://youtu.be/_eaJlRYjFdo  
Doc TouchableOpacity : https://reactnative.dev/docs/touchableopacity  
Doc Pressable : https://reactnative.dev/docs/pressable  

On peut faire un bouton avec `<Button>` mais le problème c'est que l'on ne peut pas y ajouter du style.  
On peut imiter un bouton avec un `<TouchableOpacity>` et en lui ajoutant du style. Il y a aussi le `<TouchableHighlight>` pour ajoute une couleur quand on click.  
Il y a `<TouchableWithoutFeedback>` qui est un élément cliquable mais sans misse en forme possible. Si on veut mettre du style alors on met une View à l’intérieur.  
Il existe un bouton `<Pressable>` qui détecte quand on clique dessus et pendant combien de temps. On peut ajouter un espace dans le quel le bouton est cliquable avec le paramètre `hitSlop`, et un effet sur les Androids `android_ripple`.  


&nbsp;
## 11 - Alert & Toast Message
---
Video : https://youtu.be/XsPesUur5R4  
Doc alert : https://reactnative.dev/docs/alert  

Afficher une log dans Expo : 
```js 
console.warn('OK presed')
```

Une Alert à un titre, un message et des boutons, 3 boutons max pour les Android. On peut rendre l'alert rejeter si on ajoute l'option `cancelable` et si c'est le cas, on peut exécuter un callback.
```js
Alert.alert('Attention', 'message', [
    {text: 'OK', onPress: () => <...> }
], {cancelable: true, onDismiss: () => <...> })
```

Message Toast permet d'afficher un petit message court.
```js
ToastAndroid.show('message', ToastAndroid.SHORT)
```

> **Warning**  
> Toast Message disponible que sur Android. Utiliser une autre méthode pour IOS


&nbsp;
## 12 - Modal & How to Create Custom Alert with it
---
Video : https://youtu.be/dw7xnbxhBUk  
Doc modal : https://reactnative.dev/docs/modal  

Possible de crée une alert customisé avec un modal.  


&nbsp;
## 13 - Image & ImageBackground
---
Video : https://youtu.be/Gb-GTDPFAZE  

Pour Afficher une image on utilise un composant `<Image>`. Et si l'on veux que l'image soit en arrière plan alors on prend un composant `<ImageBackground>`.


&nbsp;
## 14 - Custom Components & Props
---
Video : https://youtu.be/6euMQsGt7Qs  

Comment crée des composants réutilisable et avec de paramètre, les `props`.


&nbsp;
## 15 - React Navigation V5 - Stack Navigator
---
Video : https://youtu.be/2ouN6xeF6Hk  
Doc navigation prop : https://reactnavigation.org/docs/navigation-prop

Install [React Navigation](https://reactnavigation.org/docs/getting-started)
```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```

Puis le module [stack](https://reactnavigation.org/docs/stack-navigator)
```bash
npm install @react-navigation/stack
```

Correction de bug :  
https://stackoverflow.com/questions/55358811/error-unable-to-resolve-module-react-native-gesture-handler
```bash
npm install react-native-gesture-handler
```

On cree la navigation avec `<NavigationContainer>` et la navigation entre les page avec un objet `Stack`.  
On definit les pages dans notre `App.js` qui seront en réalité des composants avec un nom.  
On passe en `prop` dans les composants des pages la `navigation` pour changer de page selon l'action.  


&nbsp;
## 16 - React Navigation V5 - Tab Navigator - Material Tab at Bottom &Top
---
Video : https://youtu.be/_031dsQNy88  
Doc tab navigation : https://reactnavigation.org/docs/tab-based-navigation/  
Doc vect icon : https://github.com/oblador/react-native-vector-icons  
Doc material bottom tab : https://reactnavigation.org/docs/material-bottom-tab-navigator   

Install Tab navigation
```bash
npm install @react-navigation/bottom-tabs
```

Install d'une lib de vector icon
```bash
npm install --save react-native-vector-icons
```

Puis dans `./android/app/build.gradle` on ajoute la ligne au debut
```bash
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Et enfin
```bash
cd android/
./gradlew clean
```

On a 3 facons de cree une une bar de naviagetion. Simple ou avec material.

Install de Material bottom tab navigator
```bash
npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
```

Install de Material top tab naviagtor
```bash
npm install @react-navigation/material-top-tabs react-native-tab-view
npm install react-native-pager-view
```


&nbsp;
## 17 - React Navigation V5 - Drawer Navigation - Side Menu
---
Video : https://youtu.be/M4WNSjTWFDo  
Doc drawer : https://reactnavigation.org/docs/drawer-navigator  

Install Drawer
```bash
npm install @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated
npm install react-native-reanimated

```

Impossible de faire fonctionner...


&nbsp;
## 18 - React Navigation V5 - Passing Data Between Screens
---
Video : https://youtu.be/D4dDN4nXSns  

On rajoute un objet `route` dans notre composant, on l'envoi dans notre autre écran en le passant en paramètre lors de notre appel de la vue puis on le récupère avec `route.params`.  


&nbsp;
## 19 - Custom Fonts in React Native CLI & Expo Projects
---
Video : https://youtu.be/ER83EI-b4Xk  

On télécharge nos polices, et on les importe apres.
```bash
npx react-native link
```

Mais ne fonctionne pas...


&nbsp;
## 20 - Global Styles & How to Use Custom Fonts Globally in Project
---
Video : https://youtu.be/sM5Rx4LvjyQ  

On crée un fichier JS dans le quel on définira notre style. Ensuite on l'importera dans les vues.  


&nbsp;
## 21 - AsyncStorage - How to make an Offline Login with Async Storage 
---
Video : https://youtu.be/CmQIMrGnBDs  
Doc AsyncStorage : https://react-native-async-storage.github.io/async-storage/docs/api

On utilise AsyncStorage pour stocké des information en local.  
Pour charger une fonction on peut utiliser un `useEffect` et appeler notre fonction.   


&nbsp;
## 22 - SQLite Database - How to make an Offline Login with SQLite
---
Video : https://youtu.be/wAyizHBFQEs  

Install module pour utiliser [SQLite dans react-native](https://github.com/andpor/react-native-sqlite-storage).  
```bash
npm install --save react-native-sqlite-storage
```

On utilise un object qui nous fait des transactions ou l'on écrit du sql.  


&nbsp;
## 23 - Redux - State Management
---
Video : https://youtu.be/BtJoy4G3N8U  

Installer le module Redux :
```bash
npm install redux
npm install react-redux
npm install redux-thunk
```

La redux structure :
- action.js fichier pour les operations sur les states
- reducer.js pour executer les operations definit par les constantes d'actions
- store.js qui fait la liaison entre les composants et App.js

Pour utiliser les Hooks on passe par un dispatch :
```js
const dispatch = useDispatch();
onChangeText={(value)=>dispatch(setName(value))}
```