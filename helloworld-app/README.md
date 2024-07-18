# Hello World - HTML Only
If you have VS Code with the Live Server extension installed go to the index.html file.

Right click in the editor and select Open with Live Server.

It should open in your web browser at http://127.0.0.1:5500/index.html. You should see a single page that says "Hello World!".

To close the Live Server right click in the editor and select Stop Live Server.

# Hello World - With React using CDNs

Open index-react.html in the editor.
It is the most basic React app possible. It has JavaScript scripts that import the react and react-dom packages via a Content Delivery Network instead of creating a node project.

It also has a script that gets @babel/standalone. 
@babel/standalone provides a standalone build of Babel for use in browsers and other non-Node.js environments. It is used for prototyping, and is not meant for use in production.

The only HTML element in the body is an empty div element with id="root"
```html
<div id="root"></div>
```

The final script:
``` js
<script type="text/jsx">
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(<h1>Hello World!</h1>);
</script>
```

What this does is set the div with id "root" as the React root element.
Then renders a single React element that displays "Hello World!"

To view this app in the browser, right click in the editor and select Open with Live Server.

It should open in your web browser at http://127.0.0.1:5500/index-react.html. You should see a single page that says "Hello World".

To close the Live Server right click in the editor and select Stop Live Server.
