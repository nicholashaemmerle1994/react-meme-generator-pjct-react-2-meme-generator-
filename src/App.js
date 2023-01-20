import './appStyles.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { useState } from 'react';

const App = () => {
  const [memeTemplate, setMemeTemplate] = useState('buzz');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeSelect, setMemeSelect] = useState([]);
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
  axios
    .get('https://api.memegen.link/templates')
    .then(function (response) {
      setMemeSelect(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="flexbox-container">
      <div className="flexbox-item item1">
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
        <select
          className="item3"
          value={memeTemplate}
          onChange={(event) => {
            setMemeTemplate(event.currentTarget.value);
          }}
        >
          {memeSelect.map((meme) => (
            <option key={meme.id} value={meme.id}>
              {meme.id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
