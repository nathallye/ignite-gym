# Ignite Gym

## Criando uma aplicação React Native

Para iniciar um novo projeto com o React Native CLI, vamos utilizar o comando `npx react-native init myapp`.

> Podemos adicionar flags para especificar a linguagem, ex.: `npx react-native init myapp --template react-native-template-typescript`.

## Executando aplicação

Agora, para executar uma aplicação React Native CLI, basta seguirmos os seguintes passos:

- Acessar a pasta do projeto pelo terminal;
- Executar o comando `npm start`;
- Executar o comando `npm run android`.

## Configurando fontes em um projeto React Native CLI

- Depois de baixarmos as fontes desejadas, vamos criar um diretório de fontes em assets. O caminho deve ser assim: `PROJECT-DIRECTORY/src/assets/fonts`.

- Se ainda não tiver sido criado, devemos criar um arquivo de configuração na raiz do projeto chamado `react-native.config.js`. Vamos adicionar o seguinte código dentro:

```
module.exports = {
  project: {
    ios: {},
    android: {}
  },
  assets: ['./src/assets/fonts/'],
};
```

- Após a conclusão das etapas acima, podemos simplesmente executar um comando para vincular as fontes que acabamos de adicionar:

```
> npx react-native-asset
```

> Podemos verificar se realmente foram atualizadas no iOS abrindo o `ios/nome_projeto/Info.plist` no editor de texto e procurar pela key “ UIAppFonts”;

> No Android procurando pela pasta `android/app/src/main/assets/fonts` e verificando se os arquivos estão lá.

## Babel plugin - Path Mapping

Essa estratégia facilita bastante a importação dos arquivos no código ao trabalharmos com o `@` em vez de vários `../`.

- Vamos usar a biblioteca `Babel plugin`, para instalar esse plugin iremos rodar o comando seguinte:

```
> npm install --save-dev babel-plugin-module-resolver
```

> https://github.com/tleunen/babel-plugin-module-resolver

Em seguida, vamos realizar as configurações necessárias.

- babel.config.js:

``` JS
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@dtos': './src/dtos',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@contexts': './src/contexts',
          '@routes': './src/routes'
        }
      }
    ]
  ]
};
```

- tsconfig.json:

``` JSON
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@dtos/*": [
        "src/dtos/*"
      ],
      "@assets/*": [
        "./src/assets/*"
      ],
      "@components/*": [
        "./src/components/*"
      ],
      "@screens/*": [
        "./src/screens/*"
      ],
      "@storage/*": [
        "./src/storage/*"
      ],
      "@utils/*": [
        "./src/utils/*"
      ],
      "@services/*": [
        "./src/services/*"
      ],
      "@hooks/*": [
        "./src/hooks/*"
      ],
      "@contexts/*": [
        "./src/contexts/*"
      ],
      "@routes/*": [
        "./src/routes/*"
      ]
    }
  }
}
```

## Instalação Component Library NativeBase

### Novo Projeto

Criar um novo projeto usando React Native CLI com TypeScript e modelo Native Base:

```
> npx react-native init MyApp --template @native-base/react-native-template-typescript
```

### Projeto Existente

1- Instalar o Native Base:

```
> npm install native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2
```

2- Rodar a instalação do pod:

```
> cd ios/
> pod install
```

### Utilizando:

- Colocar o código abaixo no App.tsx:

``` TSX
import React from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}
```

## Tipos de Navegação

- Stack Navigator
Uma das estratégias mais utilizadas; Navegação em pilha.

- Tab Navigator
Menu na parte de baixo da tela.

- Drawer Navigator
Barra lateral esquerda oculta.

### Instalando Stack Navigator

- Vamos instalar pacote React Navagation seguindo a [documentação](https://reactnavigation.org/docs/getting-started/), primeiramente iremos rodar o comando seguinte:

```
> npm install @react-navigation/native
```

- Em seguida para instalar as dependências vamos executar o comando seguinte:

```
> npm install react-native-screens react-native-safe-area-context
```

A partir do React Native 0.60 e superior, a vinculação é automática . Então não precisamos rodar o `react-native link`.

- Se estivermos em um Mac e desenvolvendo para iOS, precisaremos instalar os pods (via Cocoapods) para concluir a vinculação:

```
> npx pod-install ios
```

O pacote `react-native-screens` requer uma etapa de configuração adicional para funcionar corretamente em dispositivos Android. Editaremos o arquivo `MainActivity.java` que está localizado em `android/app/src/main/java`.

Vamos adicionar o código destacado ao corpo da classe `MainActivity`:

``` JAVA
public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```

Nos certificando de adicionar a seguinte instrução de importação no topo deste arquivo, abaixo da instrução do pacote:

``` JAVA
import android.os.Bundle;
```

- Agora, iremos instalar o pacote Native Stack Navigator em si, rodando o comando seguinte:

```
npm install @react-navigation/native-stack
```

### Criando uma navegação com Stack Navigator

- Primeiramente, dentro de `src` vamos criar o arquivo `routes/auth.routes.tsx`(rota de autenticação) e adicionar as configurações de rotas dentro dele:

``` TSX
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="signIn"
        component={SignIn}
      />

      <Screen
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  );
};
```

### Compreendendo o Prop Drilling

- É quando passamos uma props, de um pai, para um filho, o filho passa para o filho dele e assim por diante.

<div align="center">
  <img width="600" src="https://github.com/nathallye/ignite-teams/assets/86172286/13256133-c7f7-4136-9eab-ba054b8e8dc3">
</div>

- Resolvendo:

<div align="center">
  <img width="600" src="https://github.com/nathallye/ignite-teams/assets/86172286/893397ff-7fd5-4729-a3be-79d1e99eecfc">
</div>

### Entendendo o Async Storage

- Async Storege é um sistema de armazenamento de chave-valor, assíncrono e persistente.

<div align="center">
  <img width="600" src="https://github.com/nathallye/ignite-teams/assets/86172286/a7a95480-9001-499c-b9c5-1bf0e2a2b414">
</div>

- Armazenando um objeto no Async Storege - convertendo tudo para string:

<div align="center">
  <img width="600" src="https://github.com/nathallye/ignite-teams/assets/86172286/41315b09-d12a-4029-a307-23c5ab789900">
</div>

- Recuperando os dados - convertendo a string de volta para objeto:

<div align="center">
  <img width="600" src="https://github.com/nathallye/ignite-teams/assets/86172286/31099564-187e-42fb-bd75-4aa1b8084399">
</div>

### Adicionando Async Storage

- Para instalar o Async Storage em um projeto React Native CLI, vamos rodar o comando seguinte:

```
> npm install @react-native-async-storage/async-storage
```
