import React from 'react';
import './App.scss';
import { applyTheme } from './utils/theme.utils';

const DEFAULT_FONT_SIZE = 16;

function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(DEFAULT_FONT_SIZE);

  React.useEffect(() => {
    applyTheme(isDark, fontSize);
  }, [isDark, fontSize]);

  return (
    <div className="app">
      <div className="app__row">
        <button onClick={() => setIsDark(false)}>light</button>
        <button onClick={() => setIsDark(true)}>dark</button>
      </div>
      <div className="app__row">
        <button className="small" onClick={() => setFontSize((prev) => prev - 1)}>
          - font
        </button>
        <button onClick={() => setFontSize(DEFAULT_FONT_SIZE)}>reset font</button>
        <button className="large" onClick={() => setFontSize((prev) => prev + 1)}>
          + font
        </button>
      </div>
    </div>
  );
}

export default App;
