import { render, h } from 'preact';
import { useState } from 'preact/hooks';
import { html } from 'htm/preact';

const { pipe, match, map, fromMaybe } = window.sanctuary;

const tap = f => v => {};

// taken from https://github.com/voorhoede/vuepress-paper/blob/c89f41b05b2d111c1f683b3d07b526106394b624/src/url-matchers.js#L5
const getYoutubeUrlId = pipe([
  match(/^https:\/\/w*\.*youtube\.com\/watch\?v=(\w{11})/),
  map(match => match.groups[0]),
  tap(console.log),
]);

const getYoutubeThumbnail = pipe([
    getYoutubeUrlId,
    map((id) => html`<img src="https://img.youtube.com/vi/${id}/0.jpg" />`),
]);

const app = () => {
    const [input, setInput] = useState('https://www.youtube.com/watch?v=UFnXm6cjGwU');

    return html`
        <label>
            YouTube URL
            <br/>
            <input type="text" value="${input}" onInput=${event => setInput(event.target.value)} />
        </label>
        ${
            fromMaybe
                (html`<p>Is this a YouTube URL?</p>`)
                (getYoutubeThumbnail(input))
        }
    `;
}

render(h(app), document.body);
