# A React Map component with Leaflet.js

## Introduction

The main goal of this project is to build a library for `React` front-end developers who intend to build a map web application using `leaflet.js` and create a modern way to construct your codes.

Compared to the traditional way, such as native javascript or jQuery, the modern way, combines the MVVM programming concept, including Vue, React and Angular etc, and could help you to build a robust web app. But unfortunately, map frameworks like Leaflet or Openlayers have their life cycles and are not compatible with the MVVM framework.

> - React is a JavaScript library for building user interfaces.
>   - https://reactjs.org/

# How to use

## 1. Download the `leaflet` and include it

First, You could download the leaflet through the link below and get a zip file. Then, make a directory named `libs` with the same level as your `index.html` file and unzip the zip file into it.

> - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.
>   - https://leafletjs.com/

Include the `CSS` and `JavaScript` in the head section of your `HTML`.

```html
<link rel="stylesheet" type="text/css" href="libs/leaflet.css" />
<script type="text/javascript" charset="utf-8" src="libs/leaflet.js"></script>
```

## 2. Add `map-on-react` to your project

https://www.npmjs.com/package/map-on-react

```bash
# npm
npm install map-on-react

# yarn
yarn add map-on-react
```

I recommend you manage the project's dependencies by using the `Yarn` tool.

## 3. Add `Map` component in your `App`

```javascript
import { LMap, LTileLayer } from "map-on-react";

const osmUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LMap mapId={"LMapDemo"} configs={{ zoom: 5 }}>
          <LTileLayer url={osmUrl} options={{ maxZoom: 19 }} />
        </LMap>
      </div>
    );
  }
}
```

## 4. Add `UI` over your map

If you need to put some `UI` components over the `Map`, we had snacks for you. First, import the `LMapOver` and `LMapOverItem` from our lib. Then, put it behind the Map or inside the Map as the codes below. Moreover, the `LMapOverItem` has 4 options (e.g. top, bottom, right, left) to help you position and extend your UI component.

```javascript
import { LMapOver, LMapOverItem } from "map-on-react";

render() {
  return (
    <div className="App">
      <LMap mapId={"LMapDemo"}>
        <LTileLayer url={osmUrl} options={{ maxZoom: 19 }} />
      </LMap>
      <LMapOver>
        <LMapOverItem bottom={15} right={15}>
          <span>Hello UI over the map!</span>
        </LMapOverItem>
      </LMapOver>
    </div>
  );
}
```

## Npm

https://www.npmjs.com/package/map-on-react

## Furthermore

You could try your layers this way, and if you have any questions. It would be regardful for me to recieve your comments, or if you want to join us, there is no more delay!
