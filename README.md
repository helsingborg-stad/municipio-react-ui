# <p align="center"><img src="logo192.png"> </br> Municipio **React** UI</p>

Library of accessible & reusable [React](https://reactjs.org/) UI components for developing interactive module/plugins on [helsingborg.se](https://helsingborg.se/) and other websites built with [Municipio (Open Source Theme for Wordpress)](https://github.com/helsingborg-stad/Municipio).

- UI Components depends on CSS styles from [helsingborg-stad/styleguide](https://github.com/helsingborg-stad/styleguide)
- UI Components are written in [TypeScript](https://www.typescriptlang.org/)
- Library can be used without Wordpress just as long the [styleguide](helsingborg-stad/styleguide) CSS is included

## 📦 Installation

    # using npm
    npm install @helsingborg-stad/municipio-react-ui

    # using yarn
    yarn add @helsingborg-stad/municipio-react-ui

## 🎨 Styleguide

Include the latest [styleguide](https://github.com/helsingborg-stad/styleguide) and fonts in your app:

```html
<!-- styleguide css -->
<link
  rel="stylesheet"
  id="styleguide-css"
  type="text/css"
  href="http://v2.styleguide.helsingborg.se/assets/dist/css/styleguide-css.min.css"
  media="all"
/>

<!-- roboto font -->
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500&amp;display=swap"
  rel="stylesheet"
/>

<!-- material icons -->
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Stylesheet can also be built & imported as a ES6 module but it requires your build pipeline to support [SASS](https://sass-lang.com/).

## 🔧 Usage

```typescript
import { Button, Icon } from '@helsingborg-stad/municipio-react-ui'

const App = () => (
  <>
    <Icon name="phone">
    <Button>Example button</Button>
  </>
);
```

## 📚 Documentation

- [Storybook](https://helsingborg-stad.github.io/municipio-react-ui)
- [Styleguide](http://v2.styleguide.helsingborg.se/)
- [Icons](http://v2.styleguide.helsingborg.se/icons)

## 🛠 Development

#### **Clone & run locally**

```bash
git clone helsingborg-stad/municipio-react-ui
cd municipio-react-ui
yarn
yarn start
```

Open your browser and visit <http://localhost:6006>.

#### **Lint code**

```bash
yarn lint
```

#### **Format code**

```bash
yarn format
```

#### **Run tests**

```bash
yarn test
```

## 🤝 Contributing

You can submit any ideas as pull requests or as GitHub issues.

## 📝 Changelog

The [CHANGELOG.md](CHANGELOG.md) is regularly updated to reflect what's changed in each new release.

## 🔗 Links

- [helsingborg-stad/styleguide](https://github.com/helsingborg-stad/styleguide)
- [helsingborg-stad/Municipio](https://github.com/helsingborg-stad/Municipio)
- [helsingborg-stad/component-lib](https://github.com/helsingborg-stad/component-lib)
- [helsingborg-stad/modularity](https://github.com/helsingborg-stad/modularity)

## License

[MIT](LICENSE.md)
