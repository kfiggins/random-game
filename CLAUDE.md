# Random Game

A puzzle game with 100 levels, each featuring a different random puzzle. Built with Phaser 3.

## How to Run

Open `index.html` in a browser, or serve via a local HTTP server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Project Structure

- `index.html` — Entry point, loads Phaser 3 from CDN and main.js
- `main.js` — Game config, all scenes, and the level registry
- `style.css` — Centers the canvas with a dark background

## Scenes

- **BootScene** — Loading screen, transitions to MenuScene
- **MenuScene** — Start Game (level 1) or Level Select
- **LevelSelectScene** — 10x10 grid of 100 level buttons
- **GameScene** — Displays the level, looks up puzzle from LevelRegistry
- **LevelCompleteScene** — Shows completion, Next Level / Back to Menu

## Adding a Level

Register the level in the `LevelRegistry` object in `main.js`:

```js
const LevelRegistry = {
    1: { type: 'click-target', config: { targets: 3, timeLimit: 10 } },
};
```

Then add the puzzle logic for that type in `GameScene.create()` by checking `levelData.type`.
