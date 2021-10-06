import React from "react";
import * as documents from "url:/documents/*.{html,pdf}";

const App = () => (
    <div>
      <h1>Document URLs imported with Parcel Globs</h1>
      <pre>{JSON.stringify(documents, null, 3)}</pre>
    </div>
  );


export default App;
