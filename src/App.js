import { saveAs } from 'file-saver';
import { useState } from 'react';

const App = () => {
  const [memeTemplate, setMemeTemplate] = useState('buzz');
  const [topText, setTopText] = useState(' ');
  const [bottomText, setBottomText] = useState(' ');

  return (
    <div
      style={{
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>The Meme Generator</h1>
      <label htmlFor="topText">
        Top text
        <input
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
          className="topText"
          placeholder="Top Text"
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
          className="memeTemplate"
          placeholder="Meme Template"
        />
      </label>
      <br />
      <br />
      <label htmlFor="bottomText">
        Bottom text
        <input
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
          className="bottomText"
          placeholder="Bottom Text"
        />
      </label>
      <br />
      <br />
      <br />
      <img
        style={{ width: '300px' }}
        src={`https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}`}
        alt="meme"
        data-test-id="meme-image"
      />
      <br />
      <br />
      <button
        onClick={() => {
          saveAs(
            `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}`,
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
