# A demo, create the React Map component with Leaflet.js

## Introduction

This is a really simple demo, create the Map and the Layer component with Leaflet.js and the React Framework. The project structure is created by the 'create-react-app', which is a tool recommended by the React official website.

> - React is a JavaScript library for building user interfaces.
>   - https://reactjs.org/
> - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.
>   - https://leafletjs.com/

## Main goal

The main goal of this project is to help beginners, maybe some GIS developers, to build an interactive web map. Compared to the traditional way, such as native javascript or jQuery, the modern way, combines the MVVM programming concept, including Vue, React and Angular etc, and could help you to build a robust web app. But unfortunately, map frameworks like Leaflet or Openlayers have their life cycles and are not compatible with the MVVM framework.

Therefore, we created two components for this demo, the LMap and the LTileLayer, and you could type your codes like the codes below. Magically, the LTileLayer insert into the LMap label as a slot, and you could see your OpenStreetMap on your browser. Just enjoy it!

```javascript
import { LMap, LTileLayer } from "./components/LMap";

const osmUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LMap mapId={"LMapDemo"}>
          <LTileLayer url={osmUrl} options={{ maxZoom: 19 }} />
        </LMap>
      </div>
    );
  }
}
```

If you need to put some `UI` over the `Map`, we had snacks for you.

## How to use

We recommend you manage the project's dependencies by using the `Yarn` tool.

```bash
yarn
yarn start

-------------------

Compiled successfully!

You can now view map-on-react in the browser.
  Local:            http://localhost:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully

```

And you would see the result on your broswer.

## Furthermore

You could try your layers this way, and if you have any questions. It would be regardful for me to recieve your comments.
