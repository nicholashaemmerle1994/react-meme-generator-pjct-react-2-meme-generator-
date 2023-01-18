import { saveAs } from 'file-saver';
import { useState } from 'react';

const App = () => {
  const [memeTemplate, setMemeTemplate] = useState('buzz');
  const [topText, setTopText] = useState(' ');
  const [bottomText, setBottomText] = useState(' ');
  const memeUrl = (memeTemplate, topText, bottomText) => {
    if (!topText && bottomText) {
      return `https://api.memegen.link/images/${memeTemplate}.png`;
    } else if (!bottomText) {
      return `https://api.memegen.link/images/${memeTemplate}/${topText}.png`;
    } else if (!topText) {
      return `https://api.memegen.link/images/${memeTemplate}/_/${bottomText}.png`;
    } else {
      return `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;
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
