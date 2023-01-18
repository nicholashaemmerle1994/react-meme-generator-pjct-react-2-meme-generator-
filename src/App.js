import { saveAs } from 'file-saver';
import { useState } from 'react';

const App = () => {
  const [memeTemplate, setMemeTemplate] = useState('buzz');
  const [topText, setTopText] = useState(' ');
  const [bottomText, setBottomText] = useState(' ');
  const memeUrl = (memes, top, bottom) => {
    if (!top && !bottom) {
      return `https://api.memegen.link/images/${memes}.png`;
    } else if (!bottom) {
      return `https://api.memegen.link/images/${memes}/${top}.png`;
    } else if (!top) {
      return `https://api.memegen.link/images/${memes}/_/${bottom}.png`;
    } else {
      return `https://api.memegen.link/images/${memes}/${top}/${bottom}.png`;
    }
  };
  return (
    <div
      style={{
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>The Meme Generator</h1>
      <br />
      <br />
      <label>
        Top text
        <input
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <label>
        Bottom text
        <input
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <label>
        Meme template
        <input
          onChange={(event) => {
            setMemeTemplate(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <br />
      <img
        style={{ width: '300px' }}
        src={memeUrl(memeTemplate, topText, bottomText)}
        alt="meme"
        data-test-id="meme-image"
      />
      <br />
      <br />

      <button
        onClick={() => {
          saveAs(
            memeUrl(memeTemplate, topText, bottomText),
            `${memeTemplate}.jpg`,
          );
        }}
      >
        Download
      </button>
    </div>
  );
};

export default App;
