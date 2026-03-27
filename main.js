// ============================================================
// Level Registry
// Each level maps to a puzzle type and config.
// To add a new level, register it here and implement the
// puzzle type logic in GameScene.
// ============================================================
const LevelRegistry = {
    1: { type: 'color-match', config: { pairs: 3, colors: 4, timeLimit: 30 } },
    2: { type: 'memory-cards', config: { rows: 2, cols: 4, timeLimit: 0 } },
    3: { type: 'simon-says', config: { sequenceLength: 3, colors: 4, playbackSpeed: 800 } },
    4: { type: 'sorting', config: { count: 5, maxValue: 20 } },
    5: { type: 'maze', config: { width: 7, height: 7, cellSize: 60 } },
    6: { type: 'pattern-complete', config: { patternLength: 6, numChoices: 4 } },
    7: { type: 'reaction-time', config: { targets: 5, targetSize: 50, stayTime: 2500, timeLimit: 15 } },
    8: { type: 'math', config: { problems: 3, operations: ['add'], maxNum: 10, timeLimit: 30 } },
    9: { type: 'word-scramble', config: { wordLength: 4, showHint: true } },
    10: { type: 'spot-difference', config: { differences: 2, gridSize: 5 } },
    11: { type: 'color-match', config: { pairs: 5, colors: 6, timeLimit: 30 } },
    12: { type: 'memory-cards', config: { rows: 3, cols: 4, timeLimit: 0 } },
    13: { type: 'simon-says', config: { sequenceLength: 5, colors: 4, playbackSpeed: 600 } },
    14: { type: 'sliding-puzzle', config: { size: 3 } },
    15: { type: 'maze', config: { width: 11, height: 11, cellSize: 45 } },
    16: { type: 'sequence-logic', config: { sequenceLength: 5, numChoices: 4 } },
    17: { type: 'reaction-time', config: { targets: 8, targetSize: 40, stayTime: 2000, timeLimit: 20, hasDecoys: true } },
    18: { type: 'math', config: { problems: 5, operations: ['add', 'subtract'], maxNum: 20, timeLimit: 45 } },
    19: { type: 'word-scramble', config: { wordLength: 6, showHint: false } },
    20: { type: 'light-toggle', config: { size: 3, randomize: true } },
    21: { type: 'memory-cards', config: { rows: 4, cols: 4, timeLimit: 45 } },
    22: { type: 'color-chain', config: { gridSize: 5, colors: 3 } },
    23: { type: 'simon-says', config: { sequenceLength: 7, colors: 4, playbackSpeed: 500 } },
    24: { type: 'sorting', config: { count: 8, maxValue: 50, maxSwaps: 15 } },
    25: { type: 'sliding-puzzle', config: { size: 4 } },
    26: { type: 'pattern-complete', config: { patternLength: 9, numChoices: 4, is2D: true } },
    27: { type: 'maze', config: { width: 15, height: 15, cellSize: 35, hasKeys: true, keys: 2 } },
    28: { type: 'math', config: { problems: 6, operations: ['multiply', 'divide'], maxNum: 12, timeLimit: 40 } },
    29: { type: 'tower-of-hanoi', config: { discs: 4 } },
    30: { type: 'jigsaw', config: { rows: 3, cols: 3 } },
    31: { type: 'memory-cards', config: { rows: 4, cols: 5, timeLimit: 60, reshuffleAfter: 3 } },
    32: { type: 'color-chain', config: { gridSize: 6, colors: 5, fillBoard: true } },
    33: { type: 'light-toggle', config: { size: 5, randomize: true } },
    34: { type: 'reaction-time', config: { targets: 12, targetSize: 35, stayTime: 1800, timeLimit: 25, hasDecoys: true, moving: true } },
    35: { type: 'sequence-logic', config: { sequenceLength: 8, numChoices: 4, interleaved: true } },
    36: { type: 'maze', config: { width: 19, height: 19, cellSize: 28, fogOfWar: true, viewRadius: 3 } },
    37: { type: 'sliding-puzzle', config: { size: 4, useImage: true } },
    38: { type: 'word-scramble', config: { wordLength: 7, showHint: false, multiWord: true, wordCount: 2 } },
    39: { type: 'math', config: { problems: 4, mode: 'fill-operators', timeLimit: 60 } },
    40: { type: 'tower-of-hanoi', config: { discs: 5 } },
    41: { type: 'simon-says', config: { sequenceLength: 10, colors: 6, playbackSpeed: 400, replayAllowed: false } },
    42: { type: 'color-chain', config: { gridSize: 7, colors: 8, fillBoard: true } },
    43: { type: 'memory-cards', config: { rows: 5, cols: 6, timeLimit: 35, reshuffleAfter: 3, flipBackSpeed: 500 } },
    44: { type: 'jigsaw', config: { rows: 4, cols: 4, canRotate: true } },
    45: { type: 'maze', config: { width: 23, height: 23, cellSize: 24, fogOfWar: true, viewRadius: 3, enemies: 3 } },
    46: { type: 'pattern-complete', config: { patternLength: 12, numChoices: 6, is2D: true, perspective: true } },
    47: { type: 'sorting', config: { count: 12, maxValue: 100, adjacentOnly: true, maxSwaps: 30 } },
    48: { type: 'math', config: { problems: 3, mode: 'algebra', timeLimit: 90 } },
    49: { type: 'light-toggle', config: { size: 6, randomize: true, lockedCells: 4 } },
    50: { type: 'multi-puzzle', config: { stages: 3, timeLimit: 120 } },
    51: { type: 'memory-cards', config: { rows: 6, cols: 6, timeLimit: 40, reshuffleAfter: 2, flipBackSpeed: 400, blackout: true } },
    52: { type: 'maze', config: { width: 25, height: 25, cellSize: 22, fogOfWar: true, viewRadius: 2, enemies: 4, traps: 5 } },
    53: { type: 'simon-says', config: { sequenceLength: 12, colors: 8, playbackSpeed: 350, replayAllowed: false } },
    54: { type: 'sliding-puzzle', config: { size: 5 } },
    55: { type: 'math', config: { problems: 5, mode: 'chain', timeLimit: 60 } },
    56: { type: 'color-chain', config: { gridSize: 9, colors: 10, fillBoard: true } },
    57: { type: 'jigsaw', config: { rows: 5, cols: 5, canRotate: true } },
    58: { type: 'tower-of-hanoi', config: { discs: 7 } },
    59: { type: 'light-toggle', config: { size: 7, randomize: true, lockedCells: 8 } },
    60: { type: 'multi-puzzle', config: { stages: 4, timeLimit: 150 } },
    61: { type: 'memory-cards', config: { rows: 6, cols: 7, timeLimit: 35, reshuffleAfter: 2, flipBackSpeed: 300, blackout: true, fakeCards: 2 } },
    62: { type: 'sorting', config: { count: 10, maxValue: 200, adjacentOnly: true, maxSwaps: 25, blind: true } },
    63: { type: 'maze', config: { width: 27, height: 27, cellSize: 20, fogOfWar: true, viewRadius: 2, enemies: 5, traps: 6, timeLimit: 120, hasKeys: true, keys: 3 } },
};

// ============================================================
// BootScene - Loading screen
// ============================================================
class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    create() {
        const { width, height } = this.scale;

        this.add.text(width / 2, height / 2 - 40, 'Random Game', {
            fontSize: '48px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const loadingText = this.add.text(width / 2, height / 2 + 30, 'Loading...', {
            fontSize: '24px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Simulate a brief loading delay then go to menu
        this.time.delayedCall(800, () => {
            this.scene.start('MenuScene');
        });
    }
}

// ============================================================
// MenuScene - Main menu with Start Game and Level Select
// ============================================================
class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        const { width, height } = this.scale;

        this.add.text(width / 2, 120, 'Random Game', {
            fontSize: '52px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        this.add.text(width / 2, 180, '100 Levels of Random Puzzles', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        this.createButton(width / 2, 300, 'Start Game', () => {
            this.scene.start('GameScene', { level: 1 });
        });

        this.createButton(width / 2, 380, 'Level Select', () => {
            this.scene.start('LevelSelectScene');
        });
    }

    createButton(x, y, label, callback) {
        const bg = this.add.rectangle(x, y, 240, 56, 0x4a4a8a)
            .setInteractive({ useHandCursor: true });

        const text = this.add.text(x, y, label, {
            fontSize: '24px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
        bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));
        bg.on('pointerdown', callback);

        return { bg, text };
    }
}

// ============================================================
// LevelSelectScene - 10x10 grid of level buttons
// ============================================================
class LevelSelectScene extends Phaser.Scene {
    constructor() {
        super('LevelSelectScene');
    }

    create() {
        const { width, height } = this.scale;

        this.add.text(width / 2, 30, 'Select a Level', {
            fontSize: '32px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const cols = 10;
        const rows = 10;
        const btnSize = 52;
        const padding = 6;
        const gridWidth = cols * (btnSize + padding) - padding;
        const gridHeight = rows * (btnSize + padding) - padding;
        const startX = (width - gridWidth) / 2 + btnSize / 2;
        const startY = 75;

        for (let i = 0; i < 100; i++) {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = startX + col * (btnSize + padding);
            const y = startY + row * (btnSize + padding);
            const levelNum = i + 1;

            const bg = this.add.rectangle(x, y, btnSize, btnSize, 0x3a3a6a)
                .setInteractive({ useHandCursor: true });

            this.add.text(x, y, `${levelNum}`, {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerover', () => bg.setFillStyle(0x5a5a9a));
            bg.on('pointerout', () => bg.setFillStyle(0x3a3a6a));
            bg.on('pointerdown', () => {
                this.scene.start('GameScene', { level: levelNum });
            });
        }

        // Back button
        const backBg = this.add.rectangle(70, height - 30, 120, 36, 0x4a4a8a)
            .setInteractive({ useHandCursor: true });
        this.add.text(70, height - 30, 'Back', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);
        backBg.on('pointerover', () => backBg.setFillStyle(0x6a6aaa));
        backBg.on('pointerout', () => backBg.setFillStyle(0x4a4a8a));
        backBg.on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

// ============================================================
// GameScene - Displays a level with placeholder puzzle content
// ============================================================
class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    init(data) {
        this.level = data.level || 1;
    }

    create() {
        const { width, height } = this.scale;

        this.add.text(width / 2, 30, `Level ${this.level}`, {
            fontSize: '32px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Look up level in registry
        const levelData = LevelRegistry[this.level];

        if (levelData && levelData.type === 'color-match') {
            this.createColorMatchPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'memory-cards') {
            this.createMemoryCardsPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'simon-says') {
            this.createSimonSaysPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'sorting') {
            this.createSortingPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'maze') {
            this.createMazePuzzle(levelData.config);
        } else if (levelData && levelData.type === 'pattern-complete') {
            this.createPatternCompletePuzzle(levelData.config);
        } else if (levelData && levelData.type === 'reaction-time') {
            this.createReactionTimePuzzle(levelData.config);
        } else if (levelData && levelData.type === 'math') {
            this.createMathPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'word-scramble') {
            this.createWordScramblePuzzle(levelData.config);
        } else if (levelData && levelData.type === 'spot-difference') {
            this.createSpotDifferencePuzzle(levelData.config);
        } else if (levelData && levelData.type === 'sliding-puzzle') {
            this.createSlidingPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'sequence-logic') {
            this.createSequenceLogicPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'light-toggle') {
            this.createLightTogglePuzzle(levelData.config);
        } else if (levelData && levelData.type === 'color-chain') {
            this.createColorChainPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'tower-of-hanoi') {
            this.createTowerOfHanoiPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'jigsaw') {
            this.createJigsawPuzzle(levelData.config);
        } else if (levelData && levelData.type === 'multi-puzzle') {
            this.createMultiPuzzleBoss(levelData.config);
        } else if (levelData) {
            this.add.text(width / 2, height / 2, `Puzzle: ${levelData.type}`, {
                fontSize: '24px',
                fontFamily: 'Arial, sans-serif',
                color: '#cccccc',
            }).setOrigin(0.5);

            this.createButton(width / 2, height - 100, 'Complete Level', () => {
                this.scene.start('LevelCompleteScene', { level: this.level });
            });
        } else {
            this.add.text(width / 2, height / 2 - 20, 'Puzzle Coming Soon!', {
                fontSize: '28px',
                fontFamily: 'Arial, sans-serif',
                color: '#cccccc',
            }).setOrigin(0.5);

            this.add.text(width / 2, height / 2 + 20, 'Click "Complete" to continue', {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#888888',
            }).setOrigin(0.5);

            this.createButton(width / 2, height - 100, 'Complete Level', () => {
                this.scene.start('LevelCompleteScene', { level: this.level });
            });
        }

        // Back to Menu button
        this.createButton(width / 2, height - 40, 'Back to Menu', () => {
            this.scene.start('MenuScene');
        }, 0x5a3a3a, 0x7a5a5a);
    }

    createColorMatchPuzzle(config) {
        const { width, height } = this.scale;
        const { pairs, colors: numColors, timeLimit } = config;

        const allColors = [
            { name: 'Red', hex: 0xff4444 },
            { name: 'Blue', hex: 0x4488ff },
            { name: 'Green', hex: 0x44dd44 },
            { name: 'Yellow', hex: 0xffdd44 },
            { name: 'Purple', hex: 0xaa44ff },
            { name: 'Orange', hex: 0xff8844 },
            { name: 'Cyan', hex: 0x44dddd },
            { name: 'Pink', hex: 0xff44aa },
        ];

        // Pick random colors for this puzzle
        const available = Phaser.Utils.Array.Shuffle([...allColors]).slice(0, numColors);
        const shuffled = Phaser.Utils.Array.Shuffle([...available]).slice(0, pairs);
        const leftOrder = Phaser.Utils.Array.Shuffle([...shuffled]);
        const rightOrder = Phaser.Utils.Array.Shuffle([...shuffled]);

        const circleRadius = pairs <= 4 ? 36 : 28;
        const availableHeight = height - 240;
        const spacing = Math.min(90, availableHeight / pairs);
        const startY = 120;
        const leftX = width / 2 - 140;
        const rightX = width / 2 + 140;

        // Instructions
        this.add.text(width / 2, 70, 'Match the colors! Click left, then right.', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Timer
        let timeLeft = timeLimit;
        const timerText = this.add.text(width / 2, height - 80, `Time: ${timeLeft}s`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const timerEvent = this.time.addEvent({
            delay: 1000,
            repeat: timeLimit - 1,
            callback: () => {
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 5) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    this.handleTimeUp();
                }
            },
        });

        let matchesRemaining = pairs;
        let selectedLeft = null;

        // Column labels
        this.add.text(leftX, startY - 40, 'Pick', {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        this.add.text(rightX, startY - 40, 'Match', {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        // Create left circles
        const leftCircles = leftOrder.map((colorData, i) => {
            const y = startY + i * spacing;
            const circle = this.add.circle(leftX, y, circleRadius, colorData.hex)
                .setInteractive({ useHandCursor: true });
            circle.colorName = colorData.name;
            circle.matched = false;

            // Selection outline
            const outline = this.add.circle(leftX, y, circleRadius + 4)
                .setStrokeStyle(3, 0xffffff)
                .setVisible(false);
            circle.outline = outline;

            circle.on('pointerdown', () => {
                if (circle.matched) return;

                // Deselect previous
                if (selectedLeft && selectedLeft !== circle) {
                    selectedLeft.outline.setVisible(false);
                }

                selectedLeft = circle;
                circle.outline.setVisible(true);
            });

            return circle;
        });

        // Create right circles
        const rightCircles = rightOrder.map((colorData, i) => {
            const y = startY + i * spacing;
            const circle = this.add.circle(rightX, y, circleRadius, colorData.hex)
                .setInteractive({ useHandCursor: true });
            circle.colorName = colorData.name;
            circle.matched = false;

            circle.on('pointerdown', () => {
                if (circle.matched || !selectedLeft) return;

                if (selectedLeft.colorName === circle.colorName) {
                    // Correct match
                    selectedLeft.setFillStyle(0x228822);
                    circle.setFillStyle(0x228822);
                    selectedLeft.outline.setVisible(false);
                    selectedLeft.matched = true;
                    circle.matched = true;
                    selectedLeft.disableInteractive();
                    circle.disableInteractive();
                    selectedLeft = null;
                    matchesRemaining--;

                    if (matchesRemaining <= 0) {
                        timerEvent.remove(false);
                        this.time.delayedCall(500, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    }
                } else {
                    // Wrong match - flash red
                    const origLeft = selectedLeft.fillColor;
                    const origRight = circle.fillColor;
                    selectedLeft.setFillStyle(0xaa0000);
                    circle.setFillStyle(0xaa0000);
                    selectedLeft.outline.setVisible(false);

                    const prevLeft = selectedLeft;
                    selectedLeft = null;

                    this.time.delayedCall(300, () => {
                        if (!prevLeft.matched) prevLeft.setFillStyle(origLeft);
                        if (!circle.matched) circle.setFillStyle(origRight);
                    });
                }
            });

            return circle;
        });

        this.colorMatchCleanup = () => {
            timerEvent.remove(false);
        };
    }

    createMemoryCardsPuzzle(config) {
        const { width, height } = this.scale;
        const { rows, cols, timeLimit, reshuffleAfter, flipBackSpeed, blackout, fakeCards: numFakes } = config;
        const totalCards = rows * cols;
        const numPairs = (totalCards - (numFakes || 0)) / 2;

        const cardColors = [
            { name: 'Red', hex: 0xff4444 },
            { name: 'Blue', hex: 0x4488ff },
            { name: 'Green', hex: 0x44dd44 },
            { name: 'Purple', hex: 0xaa44ff },
            { name: 'Orange', hex: 0xff8844 },
            { name: 'Cyan', hex: 0x44dddd },
            { name: 'Yellow', hex: 0xffdd44 },
            { name: 'Pink', hex: 0xff44aa },
            { name: 'Lime', hex: 0x88ff44 },
            { name: 'Teal', hex: 0x22aa88 },
            { name: 'Coral', hex: 0xff6b6b },
            { name: 'Indigo', hex: 0x5555ff },
            { name: 'Gold', hex: 0xffd700 },
            { name: 'Maroon', hex: 0xaa3344 },
            { name: 'Mint', hex: 0x44ffaa },
            { name: 'Slate', hex: 0x6688aa },
            { name: 'Rose', hex: 0xe84393 },
            { name: 'Olive', hex: 0x88aa44 },
            { name: 'Sky', hex: 0x66bbee },
            { name: 'Plum', hex: 0x884488 },
        ];

        // Create pairs and shuffle
        const cardData = [];
        for (let i = 0; i < numPairs; i++) {
            cardData.push(cardColors[i], cardColors[i]);
        }
        // Add fake cards that visually resemble real colors but have unique names so they never match
        if (numFakes) {
            for (let i = 0; i < numFakes; i++) {
                const sourceColor = cardColors[i % numPairs];
                cardData.push({ name: `Fake_${i}_${sourceColor.name}`, hex: sourceColor.hex, isFake: true });
            }
        }
        Phaser.Utils.Array.Shuffle(cardData);

        // Instructions
        this.add.text(width / 2, 70, 'Find all matching pairs!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Attempts counter
        let attempts = 0;
        const attemptsText = this.add.text(width / 2, height - 80, 'Attempts: 0', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Timer (if timeLimit > 0)
        let timerEvent = null;
        let timerText = null;
        if (timeLimit > 0) {
            let timeLeft = timeLimit;
            timerText = this.add.text(width / 2, height - 110, `Time: ${timeLeft}s`, {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            timerEvent = this.time.addEvent({
                delay: 1000,
                repeat: timeLimit - 1,
                callback: () => {
                    timeLeft--;
                    timerText.setText(`Time: ${timeLeft}s`);
                    if (timeLeft <= 5) {
                        timerText.setColor('#ff4444');
                    }
                    if (timeLeft <= 0) {
                        this.handleTimeUp();
                    }
                },
            });
        }

        // Card dimensions and layout - scale to fit the available area
        const padding = 12;
        const availW = width - 40;
        const availH = height - 180;
        const cardW = Math.min(100, Math.floor((availW - (cols - 1) * padding) / cols));
        const cardH = Math.min(120, Math.floor((availH - (rows - 1) * padding) / rows));
        const gridW = cols * (cardW + padding) - padding;
        const gridH = rows * (cardH + padding) - padding;
        const startX = (width - gridW) / 2 + cardW / 2;
        const startY = (height - gridH) / 2 + 10;

        let firstCard = null;
        let secondCard = null;
        let lockBoard = false;
        let matchesFound = 0;
        let consecutiveMisses = 0;

        const cards = [];

        for (let i = 0; i < totalCards; i++) {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = startX + col * (cardW + padding);
            const y = startY + row * (cardH + padding);
            const color = cardData[i];

            // Face-down card back
            const back = this.add.rectangle(x, y, cardW, cardH, 0x3a3a6a)
                .setInteractive({ useHandCursor: true });
            const qmFontSize = Math.min(36, Math.floor(cardH * 0.3));
            const questionMark = this.add.text(x, y, '?', {
                fontSize: `${qmFontSize}px`,
                fontFamily: 'Arial, sans-serif',
                color: '#888888',
            }).setOrigin(0.5);

            // Face-up card (hidden initially)
            const face = this.add.rectangle(x, y, cardW, cardH, color.hex)
                .setVisible(false);
            const lblFontSize = Math.min(16, Math.floor(cardW * 0.16));
            const colorLabel = this.add.text(x, y, color.name, {
                fontSize: `${lblFontSize}px`,
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5).setVisible(false);

            // Display name hides fake identity; colorName is unique for matching logic
            const displayName = color.isFake ? color.name.split('_').pop() : color.name;
            colorLabel.setText(displayName);
            const card = { back, questionMark, face, colorLabel, colorName: color.name, isFake: !!color.isFake, flipped: false, matched: false, x, y };
            cards.push(card);

            back.on('pointerover', () => {
                if (!card.flipped && !card.matched) back.setFillStyle(0x5a5a9a);
            });
            back.on('pointerout', () => {
                if (!card.flipped && !card.matched) back.setFillStyle(0x3a3a6a);
            });

            back.on('pointerdown', () => {
                if (lockBoard || card.flipped || card.matched) return;

                // Flip card face-up
                card.flipped = true;
                back.setVisible(false);
                questionMark.setVisible(false);
                face.setVisible(true);
                colorLabel.setVisible(true);

                if (!firstCard) {
                    firstCard = card;
                } else {
                    secondCard = card;
                    attempts++;
                    attemptsText.setText(`Attempts: ${attempts}`);
                    lockBoard = true;

                    if (firstCard.colorName === secondCard.colorName) {
                        // Match found
                        consecutiveMisses = 0;
                        firstCard.matched = true;
                        secondCard.matched = true;
                        if (blackout) {
                            // Blackout mode: matched pairs disappear entirely
                            firstCard.face.setVisible(false);
                            firstCard.colorLabel.setVisible(false);
                            secondCard.face.setVisible(false);
                            secondCard.colorLabel.setVisible(false);
                        } else {
                            firstCard.face.setAlpha(0.6);
                            secondCard.face.setAlpha(0.6);
                            firstCard.colorLabel.setAlpha(0.6);
                            secondCard.colorLabel.setAlpha(0.6);
                        }
                        firstCard = null;
                        secondCard = null;
                        lockBoard = false;
                        matchesFound++;

                        if (matchesFound >= numPairs) {
                            if (timerEvent) timerEvent.remove();
                            this.time.delayedCall(500, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        }
                    } else {
                        // No match - flip back
                        consecutiveMisses++;
                        const fc = firstCard;
                        const sc = secondCard;
                        const shouldReshuffle = reshuffleAfter && consecutiveMisses >= reshuffleAfter;
                        this.time.delayedCall(flipBackSpeed || 1000, () => {
                            fc.flipped = false;
                            fc.back.setVisible(true);
                            fc.questionMark.setVisible(true);
                            fc.face.setVisible(false);
                            fc.colorLabel.setVisible(false);
                            sc.flipped = false;
                            sc.back.setVisible(true);
                            sc.questionMark.setVisible(true);
                            sc.face.setVisible(false);
                            sc.colorLabel.setVisible(false);
                            firstCard = null;
                            secondCard = null;

                            if (shouldReshuffle) {
                                consecutiveMisses = 0;
                                // Collect unmatched cards and reshuffle their color assignments
                                const unmatched = cards.filter(c => !c.matched);
                                const unmatchedColors = unmatched.map(c => ({ name: c.colorName, hex: c.face.fillColor, isFake: c.isFake }));
                                Phaser.Utils.Array.Shuffle(unmatchedColors);
                                unmatched.forEach((c, idx) => {
                                    c.colorName = unmatchedColors[idx].name;
                                    c.isFake = unmatchedColors[idx].isFake;
                                    c.face.setFillStyle(unmatchedColors[idx].hex);
                                    const dispName = c.isFake ? c.colorName.split('_').pop() : c.colorName;
                                    c.colorLabel.setText(dispName);
                                });

                                // Flash a warning
                                const reshuffleWarning = this.add.text(width / 2, height / 2, 'Reshuffled!', {
                                    fontSize: '32px',
                                    fontFamily: 'Arial, sans-serif',
                                    color: '#ff4444',
                                    fontStyle: 'bold',
                                }).setOrigin(0.5).setDepth(100);
                                this.time.delayedCall(800, () => {
                                    reshuffleWarning.destroy();
                                    lockBoard = false;
                                });
                            } else {
                                lockBoard = false;
                            }
                        });
                    }
                }
            });
        }
    }

    createSimonSaysPuzzle(config) {
        const { width, height } = this.scale;
        const { sequenceLength, colors: numColors, playbackSpeed, replayAllowed } = config;

        const allColorDefs = [
            { name: 'Red', hex: 0xff4444, dimHex: 0x882222 },
            { name: 'Blue', hex: 0x4488ff, dimHex: 0x224488 },
            { name: 'Green', hex: 0x44dd44, dimHex: 0x227722 },
            { name: 'Yellow', hex: 0xffdd44, dimHex: 0x887722 },
            { name: 'Orange', hex: 0xff8844, dimHex: 0x884422 },
            { name: 'Purple', hex: 0xaa44ff, dimHex: 0x552288 },
            { name: 'Pink', hex: 0xff44aa, dimHex: 0x882255 },
            { name: 'Cyan', hex: 0x44dddd, dimHex: 0x227777 },
        ];

        const colorDefs = allColorDefs.slice(0, numColors || 4);
        const canReplay = replayAllowed !== false;

        // Instructions
        const instructionText = this.add.text(width / 2, 70, 'Watch the sequence!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Progress text
        const progressText = this.add.text(width / 2, height - 80, '', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Determine grid layout based on number of colors
        const cols = colorDefs.length <= 4 ? 2 : colorDefs.length <= 6 ? 3 : 4;
        const rows = Math.ceil(colorDefs.length / cols);
        const btnSize = colorDefs.length <= 4 ? 120 : colorDefs.length <= 6 ? 100 : 85;
        const gap = 20;
        const gridW = cols * btnSize + (cols - 1) * gap;
        const gridH = rows * btnSize + (rows - 1) * gap;
        const gridStartX = width / 2 - gridW / 2 + btnSize / 2;
        const gridStartY = height / 2 - gridH / 2 + btnSize / 2;

        const buttons = colorDefs.map((colorDef, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = gridStartX + col * (btnSize + gap);
            const y = gridStartY + row * (btnSize + gap);

            const rect = this.add.rectangle(x, y, btnSize, btnSize, colorDef.dimHex)
                .setInteractive({ useHandCursor: true });

            this.add.text(x, y, colorDef.name, {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            return { rect, colorDef, x, y };
        });

        // Generate random sequence
        const sequence = [];
        for (let i = 0; i < sequenceLength; i++) {
            sequence.push(Phaser.Math.Between(0, colorDefs.length - 1));
        }

        let playerIndex = 0;
        let inputEnabled = false;

        const lightUp = (btnIndex, duration) => {
            const btn = buttons[btnIndex];
            btn.rect.setFillStyle(btn.colorDef.hex);
            this.time.delayedCall(duration * 0.6, () => {
                btn.rect.setFillStyle(btn.colorDef.dimHex);
            });
        };

        const playSequence = () => {
            inputEnabled = false;
            playerIndex = 0;
            instructionText.setText('Watch the sequence!');
            progressText.setText('');

            sequence.forEach((btnIndex, i) => {
                this.time.delayedCall(playbackSpeed * (i + 1), () => {
                    lightUp(btnIndex, playbackSpeed);
                });
            });

            this.time.delayedCall(playbackSpeed * (sequence.length + 1), () => {
                inputEnabled = true;
                instructionText.setText('Your turn! Repeat the sequence.');
                progressText.setText(`0/${sequenceLength}`);
            });
        };

        // Button click handlers
        buttons.forEach((btn, btnIndex) => {
            btn.rect.on('pointerdown', () => {
                if (!inputEnabled) return;

                // Flash the button
                btn.rect.setFillStyle(btn.colorDef.hex);
                this.time.delayedCall(200, () => {
                    btn.rect.setFillStyle(btn.colorDef.dimHex);
                });

                if (sequence[playerIndex] === btnIndex) {
                    playerIndex++;
                    progressText.setText(`${playerIndex}/${sequenceLength}`);

                    if (playerIndex >= sequenceLength) {
                        inputEnabled = false;
                        instructionText.setText('Correct!');
                        this.time.delayedCall(500, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    }
                } else {
                    // Wrong
                    inputEnabled = false;
                    if (canReplay) {
                        instructionText.setText('Wrong! Watch again...');
                        progressText.setText('');
                        this.time.delayedCall(1000, () => {
                            playSequence();
                        });
                    } else {
                        instructionText.setText('Wrong! Restarting...');
                        progressText.setText('');
                        this.time.delayedCall(1000, () => {
                            this.scene.restart();
                        });
                    }
                }
            });
        });

        // Start the first playback
        playSequence();
    }

    createSortingPuzzle(config) {
        const { width, height } = this.scale;
        const { count, maxValue, maxSwaps, adjacentOnly, blind } = config;

        // Generate unique random numbers
        const numbers = [];
        while (numbers.length < count) {
            const n = Phaser.Math.Between(1, maxValue);
            if (!numbers.includes(n)) numbers.push(n);
        }

        // Ensure not already sorted
        const sorted = [...numbers].sort((a, b) => a - b);
        if (numbers.every((v, i) => v === sorted[i])) {
            // Swap first two to unsort
            const tmp = numbers[0];
            numbers[0] = numbers[1];
            numbers[1] = tmp;
        }

        // Instructions
        const instrText = blind
            ? 'Blind sort! Use arrows to deduce order. Adjacent swaps only!'
            : adjacentOnly
            ? 'Click two ADJACENT numbers to swap. Sort ascending!'
            : 'Click two numbers to swap. Sort ascending!';
        this.add.text(width / 2, 70, instrText, {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Swap counter
        let swapCount = 0;
        const swapLabel = maxSwaps ? `Swaps: 0/${maxSwaps}` : 'Swaps: 0';
        const swapText = this.add.text(width / 2, height - 80, swapLabel, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Card layout - scale down for many cards
        const cardW = count <= 8 ? 80 : Math.min(80, Math.floor((width - 60) / count - 8));
        const cardH = count <= 8 ? 100 : Math.min(100, cardW + 20);
        const padding = count <= 8 ? 20 : 8;
        const totalW = count * cardW + (count - 1) * padding;
        const startX = (width - totalW) / 2 + cardW / 2;
        const cardY = height / 2;

        let selectedIndex = null;
        const cards = [];

        const createCard = (index) => {
            const x = startX + index * (cardW + padding);

            const bg = this.add.rectangle(x, cardY, cardW, cardH, 0x3a3a6a)
                .setInteractive({ useHandCursor: true });

            const label = this.add.text(x, cardY, blind ? '?' : `${numbers[index]}`, {
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: blind ? '#888888' : '#ffffff',
            }).setOrigin(0.5);

            const outline = this.add.rectangle(x, cardY, cardW + 6, cardH + 6)
                .setStrokeStyle(3, 0xffdd44)
                .setVisible(false);

            bg.on('pointerover', () => {
                if (selectedIndex !== index) bg.setFillStyle(0x5a5a9a);
            });
            bg.on('pointerout', () => {
                if (selectedIndex !== index) bg.setFillStyle(0x3a3a6a);
            });

            bg.on('pointerdown', () => {
                if (selectedIndex === null) {
                    // First selection
                    selectedIndex = index;
                    outline.setVisible(true);
                    bg.setFillStyle(0x5a5a9a);
                } else if (selectedIndex === index) {
                    // Deselect
                    selectedIndex = null;
                    outline.setVisible(false);
                    bg.setFillStyle(0x3a3a6a);
                } else {
                    // Check adjacency constraint
                    if (adjacentOnly && Math.abs(selectedIndex - index) !== 1) {
                        // Flash error for non-adjacent swap attempt
                        const errorText = this.add.text(width / 2, height - 120, 'Adjacent swaps only!', {
                            fontSize: '18px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#ff4444',
                        }).setOrigin(0.5);
                        this.time.delayedCall(800, () => errorText.destroy());
                        return;
                    }

                    // Swap
                    const otherIndex = selectedIndex;
                    cards[otherIndex].outline.setVisible(false);
                    cards[otherIndex].bg.setFillStyle(0x3a3a6a);

                    const tmp = numbers[otherIndex];
                    numbers[otherIndex] = numbers[index];
                    numbers[index] = tmp;

                    if (!blind) {
                        cards[otherIndex].label.setText(`${numbers[otherIndex]}`);
                        label.setText(`${numbers[index]}`);
                    }

                    selectedIndex = null;
                    swapCount++;
                    swapText.setText(maxSwaps ? `Swaps: ${swapCount}/${maxSwaps}` : `Swaps: ${swapCount}`);

                    // Update blind mode arrows after swap
                    if (blind && this._blindUpdateArrows) {
                        this._blindUpdateArrows();
                    }

                    // Check if sorted
                    let isSorted = true;
                    for (let i = 0; i < numbers.length - 1; i++) {
                        if (numbers[i] > numbers[i + 1]) {
                            isSorted = false;
                            break;
                        }
                    }

                    if (isSorted) {
                        // Flash all cards green and reveal numbers in blind mode
                        cards.forEach((c, ci) => {
                            c.bg.setFillStyle(0x228822);
                            if (blind) {
                                c.label.setText(`${numbers[ci]}`);
                                c.label.setColor('#ffffff');
                            }
                        });
                        this.time.delayedCall(500, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    } else if (maxSwaps && swapCount >= maxSwaps) {
                        // Out of moves
                        this.children.list.forEach(child => {
                            if (child.input) child.disableInteractive();
                        });

                        const overlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7);

                        this.add.text(width / 2, height / 2 - 40, 'Out of moves!', {
                            fontSize: '40px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#ff4444',
                        }).setOrigin(0.5);

                        this.createButton(width / 2, height / 2 + 30, 'Retry', () => {
                            this.scene.start('GameScene', { level: this.level });
                        });

                        this.createButton(width / 2, height / 2 + 90, 'Back to Menu', () => {
                            this.scene.start('MenuScene');
                        }, 0x5a3a3a, 0x7a5a5a);
                    }
                }
            });

            return { bg, label, outline };
        };

        for (let i = 0; i < count; i++) {
            cards.push(createCard(i));
        }

        // Blind mode: show comparison arrows between adjacent pairs
        const arrows = [];
        if (blind) {
            const arrowY = cardY + cardH / 2 + 18;
            const updateArrows = () => {
                arrows.forEach(a => a.destroy());
                arrows.length = 0;
                for (let i = 0; i < count - 1; i++) {
                    const x1 = startX + i * (cardW + padding);
                    const x2 = startX + (i + 1) * (cardW + padding);
                    const midX = (x1 + x2) / 2;
                    const symbol = numbers[i] > numbers[i + 1] ? '>' : numbers[i] < numbers[i + 1] ? '<' : '=';
                    const color = numbers[i] <= numbers[i + 1] ? '#44dd44' : '#ff6644';
                    const arrow = this.add.text(midX, arrowY, symbol, {
                        fontSize: '22px',
                        fontFamily: 'Arial, sans-serif',
                        color: color,
                    }).setOrigin(0.5);
                    arrows.push(arrow);
                }
            };
            updateArrows();
            this._blindUpdateArrows = updateArrows;
        }
    }

    createMazePuzzle(config) {
        const { width, height } = this.scale;
        const { width: mazeW, height: mazeH, cellSize, hasKeys, keys: numKeys, fogOfWar, viewRadius, enemies: numEnemies, traps: numTraps, timeLimit } = config;

        // Generate maze using recursive backtracker algorithm
        // 0 = path, 1 = wall, 2+ = door (blocked until key collected)
        const maze = Array.from({ length: mazeH }, () => Array(mazeW).fill(1));

        const carveMaze = (r, c) => {
            maze[r][c] = 0;
            const dirs = [[0, 2], [0, -2], [2, 0], [-2, 0]];
            // Shuffle directions
            for (let i = dirs.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [dirs[i], dirs[j]] = [dirs[j], dirs[i]];
            }
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 1) {
                    maze[r + dr / 2][c + dc / 2] = 0;
                    carveMaze(nr, nc);
                }
            }
        };
        carveMaze(0, 0);
        // Ensure exit cell is open
        maze[mazeH - 1][mazeW - 1] = 0;

        // Key/door colors
        const keyColors = [
            { name: 'Red', hex: 0xff4444, doorHex: 0x882222 },
            { name: 'Blue', hex: 0x4488ff, doorHex: 0x224488 },
            { name: 'Yellow', hex: 0xffdd44, doorHex: 0x887722 },
            { name: 'Purple', hex: 0xcc44ff, doorHex: 0x662288 },
        ];

        // Keys and doors state
        const collectedKeys = [];
        const keySprites = [];
        const doorSprites = [];
        const doorCells = [];
        const keyCells = [];

        if (hasKeys && numKeys > 0) {
            // Collect all path cells for placing keys and doors
            const pathCells = [];
            for (let r = 0; r < mazeH; r++) {
                for (let c = 0; c < mazeW; c++) {
                    if (maze[r][c] === 0 && !(r === 0 && c === 0) && !(r === mazeH - 1 && c === mazeW - 1)) {
                        pathCells.push({ r, c });
                    }
                }
            }

            // Use BFS to find distance from start for each path cell
            const dist = Array.from({ length: mazeH }, () => Array(mazeW).fill(-1));
            dist[0][0] = 0;
            const queue = [{ r: 0, c: 0 }];
            let qi = 0;
            while (qi < queue.length) {
                const { r, c } = queue[qi++];
                for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0 && dist[nr][nc] === -1) {
                        dist[nr][nc] = dist[r][c] + 1;
                        queue.push({ r: nr, c: nc });
                    }
                }
            }

            // Sort path cells by distance from start
            pathCells.sort((a, b) => dist[a.r][a.c] - dist[b.r][b.c]);

            // Find corridor cells (path cells with exactly 2 path neighbors) for door placement
            const corridorCells = [];
            for (const cell of pathCells) {
                let pathNeighbors = 0;
                for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                    const nr = cell.r + dr;
                    const nc = cell.c + dc;
                    if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0) {
                        pathNeighbors++;
                    }
                }
                if (pathNeighbors === 2) {
                    corridorCells.push(cell);
                }
            }
            corridorCells.sort((a, b) => dist[a.r][a.c] - dist[b.r][b.c]);

            const keyCount = Math.min(numKeys, keyColors.length);

            for (let i = 0; i < keyCount; i++) {
                // Place door in mid-to-far section of corridors
                const doorStart = Math.floor(corridorCells.length * (0.3 + i * 0.25));
                const doorEnd = Math.min(corridorCells.length, doorStart + Math.floor(corridorCells.length * 0.2));
                let doorCell = null;
                for (let d = doorStart; d < doorEnd; d++) {
                    const candidate = corridorCells[d];
                    const tooClose = doorCells.some(dc => Math.abs(dc.r - candidate.r) + Math.abs(dc.c - candidate.c) < 4);
                    if (!tooClose) {
                        doorCell = candidate;
                        break;
                    }
                }
                if (!doorCell && corridorCells.length > 0) {
                    doorCell = corridorCells[Math.floor(corridorCells.length * (0.4 + i * 0.2))];
                }
                if (!doorCell) continue;

                doorCells.push(doorCell);
                // Mark door in maze: 2 + key index
                maze[doorCell.r][doorCell.c] = 2 + i;

                // Place key before the door (closer to start)
                const doorDist = dist[doorCell.r][doorCell.c];
                const keyCandidates = pathCells.filter(pc => {
                    if (dist[pc.r][pc.c] >= doorDist) return false;
                    if (dist[pc.r][pc.c] < 2) return false;
                    const tooCloseToOther = keyCells.some(kc => Math.abs(kc.r - pc.r) + Math.abs(kc.c - pc.c) < 3);
                    const tooCloseToDoor = doorCells.some(dc => dc.r === pc.r && dc.c === pc.c);
                    return !tooCloseToOther && !tooCloseToDoor;
                });

                let keyCell;
                if (keyCandidates.length > 0) {
                    // Place key roughly midway between start and door
                    const targetIdx = Math.floor(keyCandidates.length * 0.5);
                    keyCell = keyCandidates[targetIdx];
                } else {
                    // Fallback: any path cell before the door
                    const fallback = pathCells.filter(pc => dist[pc.r][pc.c] < doorDist && dist[pc.r][pc.c] > 0);
                    keyCell = fallback.length > 0 ? fallback[Math.floor(fallback.length / 2)] : pathCells[Math.floor(pathCells.length * 0.2)];
                }

                keyCells.push(keyCell);
                collectedKeys.push(false);
            }
        }

        // Instructions
        const instrText = (hasKeys && numEnemies && numTraps && timeLimit) ? 'Keys, enemies, traps & timer! Reach the star!' : hasKeys ? 'Collect keys to unlock doors! Reach the star!' : (numEnemies && numTraps) ? 'Avoid enemies & hidden traps! Reach the star!' : numEnemies ? 'Avoid the enemies! Reach the star!' : numTraps ? 'Watch out for hidden traps! Reach the star!' : fogOfWar ? 'Navigate through the fog! Reach the star!' : 'Use arrow keys to reach the star!';
        this.add.text(width / 2, 30, instrText, {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Move counter
        let moveCount = 0;
        const moveText = this.add.text(width / 2, height - 80, 'Moves: 0', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Timer (if timeLimit > 0)
        let mazeTimerEvent = null;
        if (timeLimit && timeLimit > 0) {
            let timeLeft = timeLimit;
            const timerText = this.add.text(width / 2, height - 105, `Time: ${timeLeft}s`, {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            mazeTimerEvent = this.time.addEvent({
                delay: 1000,
                repeat: timeLimit - 1,
                callback: () => {
                    timeLeft--;
                    timerText.setText(`Time: ${timeLeft}s`);
                    if (timeLeft <= 10) {
                        timerText.setColor('#ff4444');
                    }
                    if (timeLeft <= 0) {
                        this.handleTimeUp();
                    }
                },
            });
        }

        // Key inventory display
        const keyDisplayTexts = [];
        if (hasKeys && keyCells.length > 0) {
            for (let i = 0; i < keyCells.length; i++) {
                const kx = width / 2 - (keyCells.length - 1) * 60 + i * 120;
                const colorDef = keyColors[i];
                const hexStr = '#' + colorDef.hex.toString(16).padStart(6, '0');
                const txt = this.add.text(kx, height - 50, `${colorDef.name} Key: ✗`, {
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    color: hexStr,
                }).setOrigin(0.5);
                keyDisplayTexts.push(txt);
            }
        }

        // Calculate grid offset to center the maze
        const gridW = mazeW * cellSize;
        const gridH = mazeH * cellSize;
        const offsetX = (width - gridW) / 2;
        const offsetY = (height - gridH) / 2 + 10;

        // Draw the maze
        const fogOverlays = [];
        for (let row = 0; row < mazeH; row++) {
            for (let col = 0; col < mazeW; col++) {
                const x = offsetX + col * cellSize + cellSize / 2;
                const y = offsetY + row * cellSize + cellSize / 2;
                const cellVal = maze[row][col];
                if (cellVal === 1) {
                    this.add.rectangle(x, y, cellSize - 2, cellSize - 2, 0x2a2a4a);
                } else if (cellVal >= 2) {
                    // Door cell - draw path underneath, door on top
                    this.add.rectangle(x, y, cellSize - 2, cellSize - 2, 0x4a4a6a);
                    const doorIdx = cellVal - 2;
                    const doorColor = keyColors[doorIdx].doorHex;
                    const doorSprite = this.add.rectangle(x, y, cellSize - 2, cellSize - 2, doorColor);
                    doorSprite.setStrokeStyle(2, keyColors[doorIdx].hex);
                    doorSprites.push({ sprite: doorSprite, idx: doorIdx, row, col });
                } else {
                    this.add.rectangle(x, y, cellSize - 2, cellSize - 2, 0x4a4a6a);
                }
            }
        }

        // Draw keys on the maze
        for (let i = 0; i < keyCells.length; i++) {
            const kc = keyCells[i];
            const kx = offsetX + kc.c * cellSize + cellSize / 2;
            const ky = offsetY + kc.r * cellSize + cellSize / 2;
            const keySprite = this.add.star(kx, ky, 4, 5, cellSize / 3, keyColors[i].hex);
            keySprites.push(keySprite);
        }

        // Exit star at bottom-right
        const exitX = offsetX + (mazeW - 1) * cellSize + cellSize / 2;
        const exitY = offsetY + (mazeH - 1) * cellSize + cellSize / 2;
        const star = this.add.star(exitX, exitY, 5, 10, 22, 0xffdd44);

        // Fog of war overlay - dark rectangles on top of everything except the player
        if (fogOfWar) {
            for (let row = 0; row < mazeH; row++) {
                const rowOverlays = [];
                for (let col = 0; col < mazeW; col++) {
                    const x = offsetX + col * cellSize + cellSize / 2;
                    const y = offsetY + row * cellSize + cellSize / 2;
                    const fog = this.add.rectangle(x, y, cellSize, cellSize, 0x111111);
                    fog.setDepth(10);
                    rowOverlays.push(fog);
                }
                fogOverlays.push(rowOverlays);
            }
        }

        // Player circle at top-left (0,0)
        let playerCol = 0;
        let playerRow = 0;
        const playerX = offsetX + playerCol * cellSize + cellSize / 2;
        const playerY = offsetY + playerRow * cellSize + cellSize / 2;
        const player = this.add.circle(playerX, playerY, cellSize / 3, 0x44dd44);
        if (fogOfWar) player.setDepth(20);

        // Fog of war visibility update function
        const updateFog = () => {
            if (!fogOfWar) return;
            for (let row = 0; row < mazeH; row++) {
                for (let col = 0; col < mazeW; col++) {
                    const dist = Math.abs(row - playerRow) + Math.abs(col - playerCol);
                    if (dist <= viewRadius) {
                        fogOverlays[row][col].setVisible(false);
                    } else {
                        fogOverlays[row][col].setVisible(true);
                    }
                }
            }
        };
        updateFog();

        // Enemy setup - patrolling red dots
        const enemyData = [];
        if (numEnemies && numEnemies > 0) {
            // Collect corridor cells (path cells with exactly 2 path neighbors) for patrol routes
            const patrolCandidates = [];
            for (let r = 0; r < mazeH; r++) {
                for (let c = 0; c < mazeW; c++) {
                    if (maze[r][c] !== 0) continue;
                    if (r === 0 && c === 0) continue; // skip start
                    if (r === mazeH - 1 && c === mazeW - 1) continue; // skip exit
                    patrolCandidates.push({ r, c });
                }
            }

            // Use BFS distance from start to spread enemies throughout the maze
            const eDist = Array.from({ length: mazeH }, () => Array(mazeW).fill(-1));
            eDist[0][0] = 0;
            const eq = [{ r: 0, c: 0 }];
            let eqi = 0;
            while (eqi < eq.length) {
                const { r, c } = eq[eqi++];
                for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0 && eDist[nr][nc] === -1) {
                        eDist[nr][nc] = eDist[r][c] + 1;
                        eq.push({ r: nr, c: nc });
                    }
                }
            }

            patrolCandidates.sort((a, b) => eDist[a.r][a.c] - eDist[b.r][b.c]);

            // Place enemies spread across the maze, each with a patrol path
            for (let e = 0; e < numEnemies; e++) {
                // Pick a starting cell spread evenly through the sorted candidates
                const startIdx = Math.floor(patrolCandidates.length * (0.3 + e * 0.2));
                const startCell = patrolCandidates[Math.min(startIdx, patrolCandidates.length - 1)];
                if (!startCell) continue;

                // Build patrol path: walk along corridor from start cell
                const patrolPath = [{ r: startCell.r, c: startCell.c }];
                const visited = new Set();
                visited.add(`${startCell.r},${startCell.c}`);
                let cur = { r: startCell.r, c: startCell.c };
                const patrolLen = 4 + Math.floor(Math.random() * 4); // 4-7 cells long

                for (let step = 0; step < patrolLen; step++) {
                    const neighbors = [];
                    for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                        const nr = cur.r + dr;
                        const nc = cur.c + dc;
                        if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0 && !visited.has(`${nr},${nc}`)) {
                            // Don't patrol through start or exit
                            if (nr === 0 && nc === 0) continue;
                            if (nr === mazeH - 1 && nc === mazeW - 1) continue;
                            neighbors.push({ r: nr, c: nc });
                        }
                    }
                    if (neighbors.length === 0) break;
                    const next = neighbors[Math.floor(Math.random() * neighbors.length)];
                    patrolPath.push(next);
                    visited.add(`${next.r},${next.c}`);
                    cur = next;
                }

                if (patrolPath.length < 2) continue; // need at least 2 cells for patrol

                const ex = offsetX + startCell.c * cellSize + cellSize / 2;
                const ey = offsetY + startCell.r * cellSize + cellSize / 2;
                const enemySprite = this.add.circle(ex, ey, cellSize / 3, 0xff2222);
                if (fogOfWar) enemySprite.setDepth(15);

                enemyData.push({
                    sprite: enemySprite,
                    path: patrolPath,
                    pathIndex: 0,
                    direction: 1, // 1 = forward, -1 = backward along path
                    row: startCell.r,
                    col: startCell.c,
                });
            }
        }

        // Update enemy fog visibility
        const updateEnemyVisibility = () => {
            if (!fogOfWar) return;
            for (const enemy of enemyData) {
                const dist = Math.abs(enemy.row - playerRow) + Math.abs(enemy.col - playerCol);
                enemy.sprite.setVisible(dist <= viewRadius);
            }
        };
        updateEnemyVisibility();

        // Check if any enemy is on the player's cell
        const checkEnemyCollision = () => {
            for (const enemy of enemyData) {
                if (enemy.row === playerRow && enemy.col === playerCol) {
                    return true;
                }
            }
            return false;
        };

        // Respawn player at start (don't reset keys)
        const respawnPlayer = () => {
            playerCol = 0;
            playerRow = 0;
            player.setPosition(
                offsetX + cellSize / 2,
                offsetY + cellSize / 2
            );
            updateFog();
            updateEnemyVisibility();
        };

        // Trap setup - hidden cells that teleport player to a random position
        const trapData = [];
        if (numTraps && numTraps > 0) {
            // Collect path cells for trap placement (exclude start, exit, key/door cells)
            const trapCandidates = [];
            for (let r = 0; r < mazeH; r++) {
                for (let c = 0; c < mazeW; c++) {
                    if (maze[r][c] !== 0) continue;
                    if (r === 0 && c === 0) continue;
                    if (r === mazeH - 1 && c === mazeW - 1) continue;
                    const isKey = keyCells.some(kc => kc.r === r && kc.c === c);
                    const isDoor = doorCells.some(dc => dc.r === r && dc.c === c);
                    if (isKey || isDoor) continue;
                    trapCandidates.push({ r, c });
                }
            }

            // Spread traps evenly throughout the maze using BFS distance
            const tDist = Array.from({ length: mazeH }, () => Array(mazeW).fill(-1));
            tDist[0][0] = 0;
            const tq = [{ r: 0, c: 0 }];
            let tqi = 0;
            while (tqi < tq.length) {
                const { r, c } = tq[tqi++];
                for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0 && tDist[nr][nc] === -1) {
                        tDist[nr][nc] = tDist[r][c] + 1;
                        tq.push({ r: nr, c: nc });
                    }
                }
            }
            trapCandidates.sort((a, b) => tDist[a.r][a.c] - tDist[b.r][b.c]);

            // Place traps spread across the maze, avoiding cells too close to start
            for (let t = 0; t < numTraps && trapCandidates.length > 0; t++) {
                const idx = Math.floor(trapCandidates.length * (0.2 + t * (0.6 / numTraps)));
                const cell = trapCandidates[Math.min(idx, trapCandidates.length - 1)];
                // Create a hidden trap sprite (invisible until triggered)
                const tx = offsetX + cell.c * cellSize + cellSize / 2;
                const ty = offsetY + cell.r * cellSize + cellSize / 2;
                const trapSprite = this.add.rectangle(tx, ty, cellSize - 4, cellSize - 4, 0xff6600, 0.8);
                trapSprite.setStrokeStyle(2, 0xff3300);
                trapSprite.setVisible(false);
                if (fogOfWar) trapSprite.setDepth(12);
                trapData.push({ r: cell.r, c: cell.c, sprite: trapSprite, triggered: false });
            }
        }

        // Get a random path cell for trap teleport destination
        const getRandomPathCell = () => {
            const candidates = [];
            for (let r = 0; r < mazeH; r++) {
                for (let c = 0; c < mazeW; c++) {
                    if (maze[r][c] !== 0) continue;
                    if (r === 0 && c === 0) continue;
                    if (r === mazeH - 1 && c === mazeW - 1) continue;
                    // Avoid teleporting onto an enemy
                    const hasEnemy = enemyData.some(e => e.row === r && e.col === c);
                    if (hasEnemy) continue;
                    candidates.push({ r, c });
                }
            }
            return candidates[Math.floor(Math.random() * candidates.length)];
        };

        // Enemy patrol timer
        if (enemyData.length > 0) {
            this.time.addEvent({
                delay: 500,
                loop: true,
                callback: () => {
                    if (inputLocked) return;
                    for (const enemy of enemyData) {
                        // Move to next cell in patrol path
                        const nextIndex = enemy.pathIndex + enemy.direction;
                        if (nextIndex >= enemy.path.length || nextIndex < 0) {
                            enemy.direction *= -1; // reverse direction
                        }
                        enemy.pathIndex = Math.max(0, Math.min(enemy.path.length - 1, enemy.pathIndex + enemy.direction));
                        const cell = enemy.path[enemy.pathIndex];
                        enemy.row = cell.r;
                        enemy.col = cell.c;
                        enemy.sprite.setPosition(
                            offsetX + cell.c * cellSize + cellSize / 2,
                            offsetY + cell.r * cellSize + cellSize / 2
                        );
                    }
                    updateEnemyVisibility();
                    // Check if enemy moved onto player
                    if (checkEnemyCollision()) {
                        respawnPlayer();
                    }
                },
            });
        }

        // Arrow key input
        const cursors = this.input.keyboard.createCursorKeys();
        let inputLocked = false;

        const movePlayer = (dCol, dRow) => {
            const newCol = playerCol + dCol;
            const newRow = playerRow + dRow;

            // Bounds check
            if (newCol < 0 || newCol >= mazeW || newRow < 0 || newRow >= mazeH) return;
            // Wall check
            if (maze[newRow][newCol] === 1) return;
            // Door check - blocked if key not collected
            if (maze[newRow][newCol] >= 2) {
                const doorIdx = maze[newRow][newCol] - 2;
                if (!collectedKeys[doorIdx]) return;
            }

            playerCol = newCol;
            playerRow = newRow;
            player.setPosition(
                offsetX + playerCol * cellSize + cellSize / 2,
                offsetY + playerRow * cellSize + cellSize / 2
            );

            moveCount++;
            moveText.setText(`Moves: ${moveCount}`);

            // Update fog of war
            updateFog();
            updateEnemyVisibility();

            // Check enemy collision after player moves
            if (checkEnemyCollision()) {
                respawnPlayer();
                return;
            }

            // Check key pickup
            for (let i = 0; i < keyCells.length; i++) {
                if (!collectedKeys[i] && playerRow === keyCells[i].r && playerCol === keyCells[i].c) {
                    collectedKeys[i] = true;
                    keySprites[i].setVisible(false);
                    keyDisplayTexts[i].setText(`${keyColors[i].name} Key: ✓`);

                    // Open matching doors
                    for (const door of doorSprites) {
                        if (door.idx === i) {
                            door.sprite.setVisible(false);
                            maze[door.row][door.col] = 0;
                        }
                    }
                }
            }

            // Check trap collision
            for (const trap of trapData) {
                if (!trap.triggered && playerRow === trap.r && playerCol === trap.c) {
                    trap.triggered = true;
                    // Show the trap briefly
                    trap.sprite.setVisible(true);
                    inputLocked = true;

                    // Flash the trap, then teleport player
                    this.time.delayedCall(400, () => {
                        const dest = getRandomPathCell();
                        if (dest) {
                            playerCol = dest.c;
                            playerRow = dest.r;
                            player.setPosition(
                                offsetX + playerCol * cellSize + cellSize / 2,
                                offsetY + playerRow * cellSize + cellSize / 2
                            );
                        }
                        updateFog();
                        updateEnemyVisibility();
                        // Check if teleported onto enemy
                        if (checkEnemyCollision()) {
                            respawnPlayer();
                        }
                        inputLocked = false;
                    });

                    // Hide trap sprite after showing it
                    this.time.delayedCall(800, () => {
                        trap.sprite.setVisible(false);
                    });
                    return;
                }
            }

            // Check win
            if (playerCol === mazeW - 1 && playerRow === mazeH - 1) {
                inputLocked = true;
                if (mazeTimerEvent) mazeTimerEvent.remove(false);
                player.setFillStyle(0xffdd44);
                this.time.delayedCall(500, () => {
                    this.scene.start('LevelCompleteScene', { level: this.level });
                });
            }
        };

        this.input.keyboard.on('keydown-LEFT', () => { if (!inputLocked) movePlayer(-1, 0); });
        this.input.keyboard.on('keydown-RIGHT', () => { if (!inputLocked) movePlayer(1, 0); });
        this.input.keyboard.on('keydown-UP', () => { if (!inputLocked) movePlayer(0, -1); });
        this.input.keyboard.on('keydown-DOWN', () => { if (!inputLocked) movePlayer(0, 1); });
    }

    createPatternCompletePuzzle(config) {
        const { width, height } = this.scale;
        const { patternLength, numChoices, is2D } = config;

        const shapeDefs = [
            { name: 'Circle', color: 0xff4444, colorName: 'Red' },
            { name: 'Square', color: 0x4488ff, colorName: 'Blue' },
            { name: 'Triangle', color: 0x44dd44, colorName: 'Green' },
            { name: 'Diamond', color: 0xffdd44, colorName: 'Yellow' },
        ];

        if (is2D && config.perspective) {
            this.createPatternComplete3D(config, shapeDefs);
            return;
        }

        if (is2D) {
            this.createPatternComplete2D(config, shapeDefs);
            return;
        }

        // Instructions
        this.add.text(width / 2, 70, 'Complete the pattern! Pick the missing shape.', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Generate a repeating AB or ABC pattern
        const patternTypes = [2, 3]; // AB or ABC
        const patternLen = Phaser.Utils.Array.GetRandom(patternTypes);
        const shuffledShapes = Phaser.Utils.Array.Shuffle([...shapeDefs]);
        const patternShapes = shuffledShapes.slice(0, patternLen);

        // Build the full sequence of patternLength items
        const sequence = [];
        for (let i = 0; i < patternLength; i++) {
            sequence.push(patternShapes[i % patternLen]);
        }

        // The last one is the answer
        const correctAnswer = sequence[patternLength - 1];

        // Draw the pattern shapes
        const shapeSize = 50;
        const padding = 20;
        const totalW = patternLength * shapeSize + (patternLength - 1) * padding;
        const startX = (width - totalW) / 2 + shapeSize / 2;
        const seqY = height / 2 - 60;

        const drawShape = (x, y, shapeDef, size) => {
            if (shapeDef.name === 'Circle') {
                return this.add.circle(x, y, size / 2, shapeDef.color);
            } else if (shapeDef.name === 'Square') {
                return this.add.rectangle(x, y, size, size, shapeDef.color);
            } else if (shapeDef.name === 'Triangle') {
                const tri = this.add.triangle(x, y, 0, size, size / 2, 0, size, size, shapeDef.color);
                return tri;
            } else if (shapeDef.name === 'Diamond') {
                const diamond = this.add.polygon(x, y, [
                    0, -size / 2,
                    size / 2, 0,
                    0, size / 2,
                    -size / 2, 0,
                ], shapeDef.color);
                return diamond;
            }
        };

        // Draw sequence shapes (all but last)
        for (let i = 0; i < patternLength - 1; i++) {
            const x = startX + i * (shapeSize + padding);
            drawShape(x, seqY, sequence[i], shapeSize);
        }

        // Draw the '?' placeholder for the last position
        const lastX = startX + (patternLength - 1) * (shapeSize + padding);
        const placeholder = this.add.rectangle(lastX, seqY, shapeSize, shapeSize, 0x3a3a6a);
        const questionMark = this.add.text(lastX, seqY, '?', {
            fontSize: '36px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        // Draw choice buttons below
        const choiceY = height / 2 + 60;
        const choiceSize = 60;
        const choicePadding = 30;
        const choiceTotalW = numChoices * choiceSize + (numChoices - 1) * choicePadding;
        const choiceStartX = (width - choiceTotalW) / 2 + choiceSize / 2;

        // Build choices: correct answer + random others
        const otherShapes = shapeDefs.filter(s => s.name !== correctAnswer.name);
        Phaser.Utils.Array.Shuffle(otherShapes);
        const choices = [correctAnswer, ...otherShapes.slice(0, numChoices - 1)];
        Phaser.Utils.Array.Shuffle(choices);

        const feedbackText = this.add.text(width / 2, choiceY + 70, '', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        let solved = false;

        choices.forEach((shapeDef, i) => {
            const cx = choiceStartX + i * (choiceSize + choicePadding);

            // Clickable background
            const bg = this.add.rectangle(cx, choiceY, choiceSize + 10, choiceSize + 10, 0x2a2a4a)
                .setInteractive({ useHandCursor: true });

            drawShape(cx, choiceY, shapeDef, choiceSize - 10);

            // Label below
            this.add.text(cx, choiceY + choiceSize / 2 + 12, shapeDef.colorName, {
                fontSize: '12px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);

            bg.on('pointerover', () => {
                if (!solved) bg.setFillStyle(0x4a4a6a);
            });
            bg.on('pointerout', () => {
                if (!solved) bg.setFillStyle(0x2a2a4a);
            });

            bg.on('pointerdown', () => {
                if (solved) return;

                if (shapeDef.name === correctAnswer.name) {
                    // Correct
                    solved = true;
                    placeholder.setVisible(false);
                    questionMark.setVisible(false);
                    drawShape(lastX, seqY, correctAnswer, shapeSize);
                    feedbackText.setText('Correct!').setColor('#44dd44');
                    this.time.delayedCall(500, () => {
                        this.scene.start('LevelCompleteScene', { level: this.level });
                    });
                } else {
                    // Wrong - flash red
                    bg.setFillStyle(0xaa0000);
                    feedbackText.setText('Wrong! Try again.');
                    this.time.delayedCall(400, () => {
                        bg.setFillStyle(0x2a2a4a);
                    });
                }
            });
        });
    }

    createPatternComplete2D(config, shapeDefs) {
        const { width, height } = this.scale;
        const { numChoices } = config;
        const gridSize = 3;

        // Instructions
        this.add.text(width / 2, 50, 'Complete the 2D pattern! Pick the missing shape.', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 75, 'The pattern repeats in both rows and columns.', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#777777',
        }).setOrigin(0.5);

        const drawShape = (x, y, shapeDef, size) => {
            if (shapeDef.name === 'Circle') {
                return this.add.circle(x, y, size / 2, shapeDef.color);
            } else if (shapeDef.name === 'Square') {
                return this.add.rectangle(x, y, size, size, shapeDef.color);
            } else if (shapeDef.name === 'Triangle') {
                return this.add.triangle(x, y, 0, size, size / 2, 0, size, size, shapeDef.color);
            } else if (shapeDef.name === 'Diamond') {
                return this.add.polygon(x, y, [
                    0, -size / 2, size / 2, 0, 0, size / 2, -size / 2, 0,
                ], shapeDef.color);
            }
        };

        // Build a 3x3 grid where each row and column uses a repeating pattern
        // Assign a unique shape to each row and column intersection
        const shuffled = Phaser.Utils.Array.Shuffle([...shapeDefs]);
        const rowShapes = shuffled.slice(0, gridSize);
        const colShapes = Phaser.Utils.Array.Shuffle([...shapeDefs]).slice(0, gridSize);

        // Grid[r][c] = shape determined by (r + c) mod 3 from a shuffled set
        const patternShapes = Phaser.Utils.Array.Shuffle([...shapeDefs]).slice(0, gridSize);
        const grid = [];
        for (let r = 0; r < gridSize; r++) {
            grid[r] = [];
            for (let c = 0; c < gridSize; c++) {
                grid[r][c] = patternShapes[(r + c) % gridSize];
            }
        }

        // The missing cell is bottom-right
        const missingR = gridSize - 1;
        const missingC = gridSize - 1;
        const correctAnswer = grid[missingR][missingC];

        // Draw the grid
        const shapeSize = 60;
        const padding = 20;
        const totalGridW = gridSize * shapeSize + (gridSize - 1) * padding;
        const totalGridH = totalGridW;
        const gridStartX = (width - totalGridW) / 2 + shapeSize / 2;
        const gridStartY = (height - totalGridH) / 2 - 40 + shapeSize / 2;

        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const x = gridStartX + c * (shapeSize + padding);
                const y = gridStartY + r * (shapeSize + padding);

                if (r === missingR && c === missingC) {
                    // Draw placeholder
                    this.add.rectangle(x, y, shapeSize, shapeSize, 0x3a3a6a);
                    this.add.text(x, y, '?', {
                        fontSize: '36px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#888888',
                    }).setOrigin(0.5);
                } else {
                    drawShape(x, y, grid[r][c], shapeSize);
                }
            }
        }

        // Draw choice buttons below the grid
        const choiceY = gridStartY + gridSize * (shapeSize + padding) + 30;
        const choiceSize = 60;
        const choicePadding = 30;
        const choiceTotalW = numChoices * choiceSize + (numChoices - 1) * choicePadding;
        const choiceStartX = (width - choiceTotalW) / 2 + choiceSize / 2;

        // Build choices: correct answer + wrong ones
        const otherShapes = shapeDefs.filter(s => s.name !== correctAnswer.name);
        Phaser.Utils.Array.Shuffle(otherShapes);
        const choices = [correctAnswer, ...otherShapes.slice(0, numChoices - 1)];
        Phaser.Utils.Array.Shuffle(choices);

        const feedbackText = this.add.text(width / 2, choiceY + 70, '', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        let solved = false;

        // Store references for revealing the answer
        const missingX = gridStartX + missingC * (shapeSize + padding);
        const missingY = gridStartY + missingR * (shapeSize + padding);

        choices.forEach((shapeDef, i) => {
            const cx = choiceStartX + i * (choiceSize + choicePadding);

            const bg = this.add.rectangle(cx, choiceY, choiceSize + 10, choiceSize + 10, 0x2a2a4a)
                .setInteractive({ useHandCursor: true });

            drawShape(cx, choiceY, shapeDef, choiceSize - 10);

            this.add.text(cx, choiceY + choiceSize / 2 + 12, shapeDef.colorName, {
                fontSize: '12px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);

            bg.on('pointerover', () => {
                if (!solved) bg.setFillStyle(0x4a4a6a);
            });
            bg.on('pointerout', () => {
                if (!solved) bg.setFillStyle(0x2a2a4a);
            });

            bg.on('pointerdown', () => {
                if (solved) return;

                if (shapeDef.name === correctAnswer.name) {
                    solved = true;
                    drawShape(missingX, missingY, correctAnswer, shapeSize);
                    feedbackText.setText('Correct!').setColor('#44dd44');
                    this.time.delayedCall(500, () => {
                        this.scene.start('LevelCompleteScene', { level: this.level });
                    });
                } else {
                    bg.setFillStyle(0xaa0000);
                    feedbackText.setText('Wrong! Try again.');
                    this.time.delayedCall(400, () => {
                        bg.setFillStyle(0x2a2a4a);
                    });
                }
            });
        });
    }

    createPatternComplete3D(config, baseShapeDefs) {
        const { width, height } = this.scale;
        const { numChoices } = config;
        const cols = 4;
        const rows = 3;

        // Extended shape defs for 6 choices
        const shapeDefs = [
            ...baseShapeDefs,
            { name: 'Pentagon', color: 0xff8844, colorName: 'Orange' },
            { name: 'Hexagon', color: 0x44dddd, colorName: 'Cyan' },
        ];

        // Instructions
        this.add.text(width / 2, 38, 'Fill the missing pieces in the 3D grid!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 58, 'Click a gap, then pick its shape from the choices below.', {
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            color: '#777777',
        }).setOrigin(0.5);

        // Draw shape with perspective (isometric-style depth cues)
        const drawShape3D = (x, y, shapeDef, size, alpha) => {
            const group = [];
            const shadowOff = size * 0.15;
            const shadowAlpha = 0.25;

            // Shadow / depth layer
            if (shapeDef.name === 'Circle') {
                group.push(this.add.circle(x + shadowOff, y + shadowOff, size / 2, 0x000000).setAlpha(shadowAlpha));
                group.push(this.add.circle(x, y, size / 2, shapeDef.color).setAlpha(alpha || 1));
                // Highlight for 3D effect
                group.push(this.add.circle(x - size * 0.15, y - size * 0.15, size * 0.2, 0xffffff).setAlpha(0.25));
            } else if (shapeDef.name === 'Square') {
                group.push(this.add.rectangle(x + shadowOff, y + shadowOff, size, size, 0x000000).setAlpha(shadowAlpha));
                group.push(this.add.rectangle(x, y, size, size, shapeDef.color).setAlpha(alpha || 1));
                group.push(this.add.rectangle(x - size * 0.12, y - size * 0.12, size * 0.3, size * 0.3, 0xffffff).setAlpha(0.2));
            } else if (shapeDef.name === 'Triangle') {
                group.push(this.add.triangle(x + shadowOff, y + shadowOff, 0, size, size / 2, 0, size, size, 0x000000).setAlpha(shadowAlpha));
                group.push(this.add.triangle(x, y, 0, size, size / 2, 0, size, size, shapeDef.color).setAlpha(alpha || 1));
            } else if (shapeDef.name === 'Diamond') {
                const pts = [0, -size / 2, size / 2, 0, 0, size / 2, -size / 2, 0];
                group.push(this.add.polygon(x + shadowOff, y + shadowOff, pts, 0x000000).setAlpha(shadowAlpha));
                group.push(this.add.polygon(x, y, pts, shapeDef.color).setAlpha(alpha || 1));
            } else if (shapeDef.name === 'Pentagon') {
                const pts = [];
                for (let i = 0; i < 5; i++) {
                    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                    pts.push(Math.cos(angle) * size / 2, Math.sin(angle) * size / 2);
                }
                group.push(this.add.polygon(x + shadowOff, y + shadowOff, pts, 0x000000).setAlpha(shadowAlpha));
                group.push(this.add.polygon(x, y, pts, shapeDef.color).setAlpha(alpha || 1));
            } else if (shapeDef.name === 'Hexagon') {
                const pts = [];
                for (let i = 0; i < 6; i++) {
                    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 6;
                    pts.push(Math.cos(angle) * size / 2, Math.sin(angle) * size / 2);
                }
                group.push(this.add.polygon(x + shadowOff, y + shadowOff, pts, 0x000000).setAlpha(shadowAlpha));
                group.push(this.add.polygon(x, y, pts, shapeDef.color).setAlpha(alpha || 1));
            }
            return group;
        };

        // Build a 4x3 grid pattern: each cell determined by (r + c) % numPatternShapes
        const numPatternShapes = Math.min(4, shapeDefs.length);
        const patternShapes = Phaser.Utils.Array.Shuffle([...shapeDefs]).slice(0, numPatternShapes);
        const grid = [];
        for (let r = 0; r < rows; r++) {
            grid[r] = [];
            for (let c = 0; c < cols; c++) {
                grid[r][c] = patternShapes[(r * cols + c) % numPatternShapes];
            }
        }

        // Pick 3 random missing cells
        const allCells = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                allCells.push({ r, c });
            }
        }
        Phaser.Utils.Array.Shuffle(allCells);
        const missingCells = allCells.slice(0, 3);
        const missingSet = new Set(missingCells.map(m => `${m.r},${m.c}`));

        // Isometric perspective parameters
        const baseSize = 52;
        const paddingX = 18;
        const paddingY = 14;
        // Size scales with row (back rows smaller)
        const getScale = (r) => 0.7 + 0.15 * r;
        // Isometric offset: back rows shifted up and slightly right
        const getIsoX = (c, r) => {
            const scale = getScale(r);
            const size = baseSize * scale;
            const totalW = cols * size + (cols - 1) * paddingX * scale;
            const startX = (width - totalW) / 2 + size / 2;
            return startX + c * (size + paddingX * scale);
        };
        const getIsoY = (r) => {
            // Rows go from top (back) to bottom (front)
            const baseY = 95;
            let y = baseY;
            for (let i = 0; i < r; i++) {
                const scale = getScale(i);
                y += baseSize * scale + paddingY;
            }
            return y + (baseSize * getScale(r)) / 2;
        };

        // Draw the grid with perspective
        const placeholders = {};
        const questionMarks = {};

        for (let r = 0; r < rows; r++) {
            const scale = getScale(r);
            const size = baseSize * scale;
            for (let c = 0; c < cols; c++) {
                const x = getIsoX(c, r);
                const y = getIsoY(r);

                if (missingSet.has(`${r},${c}`)) {
                    // Draw placeholder with depth shadow
                    const shadowOff = size * 0.15;
                    this.add.rectangle(x + shadowOff, y + shadowOff, size, size, 0x000000).setAlpha(0.2);
                    const ph = this.add.rectangle(x, y, size, size, 0x3a3a6a)
                        .setInteractive({ useHandCursor: true });
                    const qm = this.add.text(x, y, '?', {
                        fontSize: `${Math.round(28 * scale)}px`,
                        fontFamily: 'Arial, sans-serif',
                        color: '#888888',
                    }).setOrigin(0.5);
                    placeholders[`${r},${c}`] = ph;
                    questionMarks[`${r},${c}`] = qm;
                } else {
                    drawShape3D(x, y, grid[r][c], size, 1);
                }
            }
        }

        // State tracking
        let selectedCell = null;
        let solvedCount = 0;
        const solvedCells = new Set();
        let selectionOutline = null;

        // Feedback text
        const feedbackText = this.add.text(width / 2, height - 40, '', {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        // Progress text
        const progressText = this.add.text(width / 2, height - 62, `Filled: 0 / 3`, {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Click handler for placeholder cells
        missingCells.forEach(({ r, c }) => {
            const key = `${r},${c}`;
            const ph = placeholders[key];

            ph.on('pointerdown', () => {
                if (solvedCells.has(key)) return;

                // Deselect previous
                if (selectionOutline) selectionOutline.destroy();

                selectedCell = { r, c, key };

                // Draw selection outline
                const scale = getScale(r);
                const size = baseSize * scale;
                const x = getIsoX(c, r);
                const y = getIsoY(r);
                selectionOutline = this.add.rectangle(x, y, size + 6, size + 6)
                    .setStrokeStyle(3, 0xffffff)
                    .setFillStyle(0x000000, 0);

                feedbackText.setText(`Pick the shape for row ${r + 1}, col ${c + 1}`).setColor('#aaaaaa');

                // Update choice highlights
                updateChoices();
            });
        });

        // Build choices area - for each missing cell, the correct answer + distractors
        // We show a single set of 6 choices that changes based on which cell is selected
        const choiceY = height - 115;
        const choiceSize = 48;
        const choicePadding = 22;
        const choiceTotalW = numChoices * choiceSize + (numChoices - 1) * choicePadding;
        const choiceStartX = (width - choiceTotalW) / 2 + choiceSize / 2;

        // Precompute choices for each missing cell
        const cellChoices = {};
        missingCells.forEach(({ r, c }) => {
            const key = `${r},${c}`;
            const correct = grid[r][c];
            const others = shapeDefs.filter(s => s.name !== correct.name);
            Phaser.Utils.Array.Shuffle(others);
            const choices = [correct, ...others.slice(0, numChoices - 1)];
            Phaser.Utils.Array.Shuffle(choices);
            cellChoices[key] = choices;
        });

        // Choice display objects
        const choiceBgs = [];
        const choiceShapeGroups = [];
        const choiceLabels = [];

        for (let i = 0; i < numChoices; i++) {
            const cx = choiceStartX + i * (choiceSize + choicePadding);
            const bg = this.add.rectangle(cx, choiceY, choiceSize + 10, choiceSize + 10, 0x2a2a4a)
                .setInteractive({ useHandCursor: true });
            choiceBgs.push(bg);
            choiceShapeGroups.push([]);

            const label = this.add.text(cx, choiceY + choiceSize / 2 + 12, '', {
                fontSize: '11px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            choiceLabels.push(label);

            bg.on('pointerover', () => {
                if (selectedCell && !solvedCells.has(selectedCell.key)) bg.setFillStyle(0x4a4a6a);
            });
            bg.on('pointerout', () => {
                bg.setFillStyle(0x2a2a4a);
            });

            bg.on('pointerdown', () => {
                if (!selectedCell || solvedCells.has(selectedCell.key)) return;

                const key = selectedCell.key;
                const choices = cellChoices[key];
                const picked = choices[i];
                const correct = grid[selectedCell.r][selectedCell.c];

                if (picked.name === correct.name) {
                    // Correct!
                    solvedCells.add(key);
                    solvedCount++;
                    progressText.setText(`Filled: ${solvedCount} / 3`);

                    // Reveal the shape in the grid
                    const scale = getScale(selectedCell.r);
                    const size = baseSize * scale;
                    const sx = getIsoX(selectedCell.c, selectedCell.r);
                    const sy = getIsoY(selectedCell.r);
                    placeholders[key].setVisible(false);
                    questionMarks[key].setVisible(false);
                    drawShape3D(sx, sy, correct, size, 1);

                    if (selectionOutline) {
                        selectionOutline.destroy();
                        selectionOutline = null;
                    }
                    selectedCell = null;

                    if (solvedCount >= 3) {
                        feedbackText.setText('All correct!').setColor('#44dd44');
                        this.time.delayedCall(600, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    } else {
                        feedbackText.setText('Correct! Pick the next gap.').setColor('#44dd44');
                        clearChoices();
                    }
                } else {
                    // Wrong
                    bg.setFillStyle(0xaa0000);
                    feedbackText.setText('Wrong! Try again.').setColor('#ff4444');
                    this.time.delayedCall(400, () => {
                        bg.setFillStyle(0x2a2a4a);
                    });
                }
            });
        }

        const clearChoices = () => {
            for (let i = 0; i < numChoices; i++) {
                choiceShapeGroups[i].forEach(obj => obj.destroy());
                choiceShapeGroups[i] = [];
                choiceLabels[i].setText('');
            }
        };

        const updateChoices = () => {
            if (!selectedCell) return;
            const choices = cellChoices[selectedCell.key];

            for (let i = 0; i < numChoices; i++) {
                const cx = choiceStartX + i * (choiceSize + choicePadding);
                // Clear old shapes
                choiceShapeGroups[i].forEach(obj => obj.destroy());
                choiceShapeGroups[i] = drawShape3D(cx, choiceY, choices[i], choiceSize - 12, 1);
                choiceLabels[i].setText(choices[i].colorName);
            }
        };

        // Initial hint
        feedbackText.setText('Click a "?" cell to select it.').setColor('#aaaaaa');
    }

    createReactionTimePuzzle(config) {
        const { width, height } = this.scale;
        const { targets, targetSize, stayTime, timeLimit, hasDecoys, moving } = config;

        const targetColors = [0x44dd44, 0x4488ff, 0xffdd44, 0xff44ff, 0x44dddd];
        const requiredScore = moving ? 8 : (hasDecoys ? 5 : 3);

        // Instructions
        const instructions = moving
            ? 'Click the moving targets! Avoid the red X decoys!'
            : hasDecoys
            ? 'Click the colored circles! Avoid the red X decoys!'
            : 'Click the targets before they disappear!';
        this.add.text(width / 2, 70, instructions, {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // HUD
        let score = 0;
        let targetsShown = 0;
        let timeLeft = timeLimit;
        let gameOver = false;

        const scoreText = this.add.text(width / 2 - 140, height - 80, `Score: ${score}/${targets}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const remainText = this.add.text(width / 2, height - 80, `Remaining: ${targets}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const timerText = this.add.text(width / 2 + 140, height - 80, `Time: ${timeLeft}s`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Timer countdown
        const timerEvent = this.time.addEvent({
            delay: 1000,
            repeat: timeLimit - 1,
            callback: () => {
                if (gameOver) return;
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 5) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    gameOver = true;
                    timerEvent.remove(false);
                    this.handleReactionTimeEnd(score, targets, requiredScore);
                }
            },
        });

        const advanceAfterTarget = () => {
            if (!gameOver) {
                this.time.delayedCall(400, () => {
                    if (targetsShown >= targets) {
                        gameOver = true;
                        timerEvent.remove(false);
                        this.handleReactionTimeEnd(score, targets, requiredScore);
                    } else {
                        showTarget();
                    }
                });
            }
        };

        const showTarget = () => {
            if (gameOver || targetsShown >= targets) return;

            const isDecoy = hasDecoys && Math.random() < 0.35;
            const colorIndex = targetsShown % targetColors.length;
            const color = isDecoy ? 0xff4444 : targetColors[colorIndex];
            targetsShown++;
            remainText.setText(`Remaining: ${targets - targetsShown}`);

            // Random position within play area (avoid edges and HUD)
            const margin = targetSize + 20;
            const tx = Phaser.Math.Between(margin, width - margin);
            const ty = Phaser.Math.Between(100, height - 120);

            const circle = this.add.circle(tx, ty, targetSize, color)
                .setInteractive({ useHandCursor: true })
                .setAlpha(0);

            // Draw an X on decoys
            let decoyX = null;
            if (isDecoy) {
                const lineLen = targetSize * 0.6;
                decoyX = this.add.graphics().setAlpha(0);
                decoyX.lineStyle(4, 0xffffff);
                decoyX.beginPath();
                decoyX.moveTo(tx - lineLen, ty - lineLen);
                decoyX.lineTo(tx + lineLen, ty + lineLen);
                decoyX.moveTo(tx + lineLen, ty - lineLen);
                decoyX.lineTo(tx - lineLen, ty + lineLen);
                decoyX.strokePath();
            }

            // Moving targets: assign velocity and update loop
            let moveTimer = null;
            if (moving) {
                const speed = 1.5;
                const angle = Math.random() * Math.PI * 2;
                let vx = Math.cos(angle) * speed;
                let vy = Math.sin(angle) * speed;
                const minX = margin;
                const maxX = width - margin;
                const minY = 100;
                const maxY = height - 120;

                moveTimer = this.time.addEvent({
                    delay: 16,
                    loop: true,
                    callback: () => {
                        if (!circle.active) { moveTimer.remove(false); return; }
                        let nx = circle.x + vx;
                        let ny = circle.y + vy;
                        if (nx <= minX || nx >= maxX) { vx = -vx; nx = Phaser.Math.Clamp(nx, minX, maxX); }
                        if (ny <= minY || ny >= maxY) { vy = -vy; ny = Phaser.Math.Clamp(ny, minY, maxY); }
                        circle.x = nx;
                        circle.y = ny;
                        if (decoyX) {
                            // Redraw decoy X at new position
                            decoyX.clear();
                            const lineLen = targetSize * 0.6;
                            decoyX.lineStyle(4, 0xffffff);
                            decoyX.beginPath();
                            decoyX.moveTo(nx - lineLen, ny - lineLen);
                            decoyX.lineTo(nx + lineLen, ny + lineLen);
                            decoyX.moveTo(nx + lineLen, ny - lineLen);
                            decoyX.lineTo(nx - lineLen, ny + lineLen);
                            decoyX.strokePath();
                        }
                    },
                });
            }

            // Fade in
            this.tweens.add({
                targets: decoyX ? [circle, decoyX] : circle,
                alpha: 1,
                duration: 150,
                ease: 'Power2',
            });

            let clicked = false;

            // Click handler
            circle.on('pointerdown', () => {
                if (clicked || gameOver) return;
                clicked = true;
                circle.disableInteractive();
                if (moveTimer) moveTimer.remove(false);

                if (isDecoy) {
                    score = Math.max(0, score - 1);
                } else {
                    score++;
                }
                scoreText.setText(`Score: ${score}/${targets}`);

                // Pop animation
                this.tweens.add({
                    targets: decoyX ? [circle, decoyX] : circle,
                    scaleX: 1.5,
                    scaleY: 1.5,
                    alpha: 0,
                    duration: 200,
                    ease: 'Power2',
                    onComplete: () => {
                        circle.destroy();
                        if (decoyX) decoyX.destroy();
                        advanceAfterTarget();
                    },
                });
            });

            // Disappear after stayTime if not clicked
            this.time.delayedCall(stayTime, () => {
                if (clicked || gameOver) return;
                clicked = true;
                circle.disableInteractive();
                if (moveTimer) moveTimer.remove(false);

                // Fade out
                this.tweens.add({
                    targets: decoyX ? [circle, decoyX] : circle,
                    alpha: 0,
                    duration: 200,
                    ease: 'Power2',
                    onComplete: () => {
                        circle.destroy();
                        if (decoyX) decoyX.destroy();
                        advanceAfterTarget();
                    },
                });
            });
        };

        // Start the first target after a short delay
        this.time.delayedCall(1000, () => {
            showTarget();
        });

        this.reactionTimeCleanup = () => {
            timerEvent.remove(false);
        };
    }

    createMathPuzzle(config) {
        const { width, height } = this.scale;

        if (config.mode === 'fill-operators') {
            return this.createFillOperatorsPuzzle(config);
        }

        if (config.mode === 'algebra') {
            return this.createAlgebraPuzzle(config);
        }

        if (config.mode === 'chain') {
            return this.createChainMathPuzzle(config);
        }

        const { problems, operations, maxNum, timeLimit } = config;

        // Instructions
        this.add.text(width / 2, 70, 'Solve the math problems!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Timer
        let timeLeft = timeLimit;
        const timerText = this.add.text(width / 2 + 200, height - 80, `Time: ${timeLeft}s`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const timerEvent = this.time.addEvent({
            delay: 1000,
            repeat: timeLimit - 1,
            callback: () => {
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 5) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    this.mathCleanup = null;
                    this.handleTimeUp();
                }
            },
        });

        this.mathCleanup = () => {
            timerEvent.remove(false);
        };

        let currentProblem = 0;

        // Progress text
        const progressText = this.add.text(width / 2 - 200, height - 80, `Problem 1/${problems}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Containers for dynamic elements
        let problemText = null;
        let choiceButtons = [];
        let feedbackText = null;

        const showProblem = () => {
            // Clean up previous
            if (problemText) problemText.destroy();
            choiceButtons.forEach(b => { b.bg.destroy(); b.text.destroy(); });
            choiceButtons = [];
            if (feedbackText) { feedbackText.destroy(); feedbackText = null; }

            progressText.setText(`Problem ${currentProblem + 1}/${problems}`);

            // Generate two random numbers
            const op = Phaser.Utils.Array.GetRandom(operations);
            let a, b_val, answer, symbol;

            if (op === 'subtract') {
                a = Phaser.Math.Between(2, maxNum);
                b_val = Phaser.Math.Between(1, a - 1);
                answer = a - b_val;
                symbol = '-';
            } else if (op === 'multiply') {
                a = Phaser.Math.Between(2, maxNum);
                b_val = Phaser.Math.Between(2, maxNum);
                answer = a * b_val;
                symbol = '×';
            } else if (op === 'divide') {
                b_val = Phaser.Math.Between(2, maxNum);
                answer = Phaser.Math.Between(1, maxNum);
                a = b_val * answer;
                symbol = '÷';
            } else {
                a = Phaser.Math.Between(1, maxNum - 1);
                b_val = Phaser.Math.Between(1, maxNum - a);
                answer = a + b_val;
                symbol = '+';
            }

            // Display problem
            problemText = this.add.text(width / 2, height / 2 - 80, `${a} ${symbol} ${b_val} = ?`, {
                fontSize: '48px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            // Generate wrong answers within +/-5 of correct, all unique and > 0
            const wrongSet = new Set();
            while (wrongSet.size < 3) {
                const offset = Phaser.Math.Between(-5, 5);
                const wrong = answer + offset;
                if (wrong !== answer && wrong > 0) {
                    wrongSet.add(wrong);
                }
            }

            const choices = Phaser.Utils.Array.Shuffle([answer, ...wrongSet]);

            // Create 4 choice buttons in a row
            const btnWidth = 120;
            const btnSpacing = 140;
            const startX = width / 2 - (btnSpacing * 1.5);
            const btnY = height / 2 + 40;

            choices.forEach((choice, i) => {
                const bx = startX + i * btnSpacing;
                const bg = this.add.rectangle(bx, btnY, btnWidth, 56, 0x4a4a8a)
                    .setInteractive({ useHandCursor: true });
                const txt = this.add.text(bx, btnY, `${choice}`, {
                    fontSize: '28px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);

                bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                bg.on('pointerdown', () => {
                    if (choice === answer) {
                        // Correct - green flash
                        bg.setFillStyle(0x44dd44);
                        // Disable all buttons
                        choiceButtons.forEach(b => b.bg.disableInteractive());

                        if (feedbackText) feedbackText.destroy();
                        feedbackText = this.add.text(width / 2, btnY + 60, 'Correct!', {
                            fontSize: '24px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#44dd44',
                        }).setOrigin(0.5);

                        currentProblem++;
                        if (currentProblem >= problems) {
                            // All done
                            timerEvent.remove(false);
                            this.mathCleanup = null;
                            this.time.delayedCall(800, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        } else {
                            this.time.delayedCall(800, () => {
                                showProblem();
                            });
                        }
                    } else {
                        // Wrong - red flash, try again
                        bg.setFillStyle(0xff4444);
                        bg.disableInteractive();

                        if (feedbackText) feedbackText.destroy();
                        feedbackText = this.add.text(width / 2, btnY + 60, 'Wrong! Try again.', {
                            fontSize: '24px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#ff4444',
                        }).setOrigin(0.5);
                    }
                });

                choiceButtons.push({ bg, text: txt });
            });
        };

        showProblem();
    }

    createFillOperatorsPuzzle(config) {
        const { width, height } = this.scale;
        const { problems, timeLimit } = config;

        // Instructions
        this.add.text(width / 2, 70, 'Pick the correct operator!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Timer
        let timeLeft = timeLimit;
        const timerText = this.add.text(width / 2 + 200, height - 80, `Time: ${timeLeft}s`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const timerEvent = this.time.addEvent({
            delay: 1000,
            repeat: timeLimit - 1,
            callback: () => {
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 5) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    this.mathCleanup = null;
                    this.handleTimeUp();
                }
            },
        });

        this.mathCleanup = () => {
            timerEvent.remove(false);
        };

        let currentProblem = 0;

        // Progress text
        const progressText = this.add.text(width / 2 - 200, height - 80, `Problem 1/${problems}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Containers for dynamic elements
        let problemText = null;
        let choiceButtons = [];
        let feedbackText = null;

        const generateProblem = (difficulty) => {
            // Difficulty 0-3: progressively harder
            const operators = [
                { symbol: '+', fn: (a, b) => a + b },
                { symbol: '-', fn: (a, b) => a - b },
                { symbol: '×', fn: (a, b) => a * b },
                { symbol: '÷', fn: (a, b) => a / b },
            ];

            const op = operators[Phaser.Math.Between(0, 3)];
            let a, b;

            if (difficulty === 0) {
                // Easy: small numbers, result is obvious
                if (op.symbol === '÷') {
                    b = Phaser.Math.Between(2, 5);
                    a = b * Phaser.Math.Between(1, 5);
                } else if (op.symbol === '×') {
                    a = Phaser.Math.Between(2, 5);
                    b = Phaser.Math.Between(2, 5);
                } else if (op.symbol === '-') {
                    a = Phaser.Math.Between(3, 10);
                    b = Phaser.Math.Between(1, a - 1);
                } else {
                    a = Phaser.Math.Between(1, 8);
                    b = Phaser.Math.Between(1, 8);
                }
            } else if (difficulty === 1) {
                if (op.symbol === '÷') {
                    b = Phaser.Math.Between(2, 8);
                    a = b * Phaser.Math.Between(2, 8);
                } else if (op.symbol === '×') {
                    a = Phaser.Math.Between(3, 9);
                    b = Phaser.Math.Between(3, 9);
                } else if (op.symbol === '-') {
                    a = Phaser.Math.Between(10, 30);
                    b = Phaser.Math.Between(3, a - 1);
                } else {
                    a = Phaser.Math.Between(5, 20);
                    b = Phaser.Math.Between(5, 20);
                }
            } else if (difficulty === 2) {
                if (op.symbol === '÷') {
                    b = Phaser.Math.Between(3, 12);
                    a = b * Phaser.Math.Between(3, 12);
                } else if (op.symbol === '×') {
                    a = Phaser.Math.Between(4, 12);
                    b = Phaser.Math.Between(4, 12);
                } else if (op.symbol === '-') {
                    a = Phaser.Math.Between(20, 60);
                    b = Phaser.Math.Between(5, a - 1);
                } else {
                    a = Phaser.Math.Between(15, 50);
                    b = Phaser.Math.Between(15, 50);
                }
            } else {
                // Hardest: larger numbers, tricky operators
                if (op.symbol === '÷') {
                    b = Phaser.Math.Between(4, 15);
                    a = b * Phaser.Math.Between(4, 15);
                } else if (op.symbol === '×') {
                    a = Phaser.Math.Between(6, 15);
                    b = Phaser.Math.Between(6, 15);
                } else if (op.symbol === '-') {
                    a = Phaser.Math.Between(30, 99);
                    b = Phaser.Math.Between(10, a - 1);
                } else {
                    a = Phaser.Math.Between(25, 75);
                    b = Phaser.Math.Between(25, 75);
                }
            }

            const result = op.fn(a, b);
            return { a, b, result, correctSymbol: op.symbol };
        };

        const showProblem = () => {
            // Clean up previous
            if (problemText) problemText.destroy();
            choiceButtons.forEach(b => { b.bg.destroy(); b.text.destroy(); });
            choiceButtons = [];
            if (feedbackText) { feedbackText.destroy(); feedbackText = null; }

            progressText.setText(`Problem ${currentProblem + 1}/${problems}`);

            const { a, b, result, correctSymbol } = generateProblem(currentProblem);

            // Display equation with blank operator
            problemText = this.add.text(width / 2, height / 2 - 80, `${a}  _  ${b}  =  ${result}`, {
                fontSize: '48px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            // Create 4 operator buttons
            const operatorChoices = ['+', '-', '×', '÷'];
            const btnWidth = 100;
            const btnSpacing = 130;
            const startX = width / 2 - (btnSpacing * 1.5);
            const btnY = height / 2 + 40;

            operatorChoices.forEach((op, i) => {
                const bx = startX + i * btnSpacing;
                const bg = this.add.rectangle(bx, btnY, btnWidth, 56, 0x4a4a8a)
                    .setInteractive({ useHandCursor: true });
                const txt = this.add.text(bx, btnY, op, {
                    fontSize: '32px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);

                bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                bg.on('pointerdown', () => {
                    if (op === correctSymbol) {
                        // Correct
                        bg.setFillStyle(0x44dd44);
                        choiceButtons.forEach(b => b.bg.disableInteractive());

                        if (feedbackText) feedbackText.destroy();
                        feedbackText = this.add.text(width / 2, btnY + 60, 'Correct!', {
                            fontSize: '24px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#44dd44',
                        }).setOrigin(0.5);

                        currentProblem++;
                        if (currentProblem >= problems) {
                            timerEvent.remove(false);
                            this.mathCleanup = null;
                            this.time.delayedCall(800, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        } else {
                            this.time.delayedCall(800, () => {
                                showProblem();
                            });
                        }
                    } else {
                        // Wrong
                        bg.setFillStyle(0xff4444);
                        bg.disableInteractive();

                        if (feedbackText) feedbackText.destroy();
                        feedbackText = this.add.text(width / 2, btnY + 60, 'Wrong! Try again.', {
                            fontSize: '24px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#ff4444',
                        }).setOrigin(0.5);
                    }
                });

                choiceButtons.push({ bg, text: txt });
            });
        };

        showProblem();
    }

    createAlgebraPuzzle(config) {
        const { width, height } = this.scale;
        const { problems, timeLimit } = config;

        this.add.text(width / 2, 70, 'Solve for x and y!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Timer
        let timeLeft = timeLimit;
        const timerText = this.add.text(width / 2 + 200, height - 80, `Time: ${timeLeft}s`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const timerEvent = this.time.addEvent({
            delay: 1000,
            repeat: timeLimit - 1,
            callback: () => {
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 5) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    this.mathCleanup = null;
                    this.handleTimeUp();
                }
            },
        });

        this.mathCleanup = () => {
            timerEvent.remove(false);
        };

        let currentProblem = 0;

        const progressText = this.add.text(width / 2 - 200, height - 80, `Problem 1/${problems}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        let dynamicElements = [];

        const destroyDynamic = () => {
            dynamicElements.forEach(el => el.destroy());
            dynamicElements = [];
        };

        const generateEquations = () => {
            // Generate x and y with values 0-20
            const x = Phaser.Math.Between(1, 15);
            const y = Phaser.Math.Between(1, 15);

            // Pick equation templates
            const templates = [
                // x + a = b
                () => {
                    const a = Phaser.Math.Between(1, 10);
                    return { eq: `x + ${a} = ${x + a}`, desc: 'x' };
                },
                // x - a = b
                () => {
                    const a = Phaser.Math.Between(1, Math.min(x - 1, 10));
                    if (a < 1) return null;
                    return { eq: `x - ${a} = ${x - a}`, desc: 'x' };
                },
                // a * x = b (small multiplier)
                () => {
                    const a = Phaser.Math.Between(2, 4);
                    return { eq: `${a} × x = ${a * x}`, desc: 'x' };
                },
                // y + a = b
                () => {
                    const a = Phaser.Math.Between(1, 10);
                    return { eq: `y + ${a} = ${y + a}`, desc: 'y' };
                },
                // y - x = b
                () => {
                    if (y >= x) return { eq: `y - x = ${y - x}`, desc: 'xy' };
                    return { eq: `x - y = ${x - y}`, desc: 'xy' };
                },
                // x + y = b
                () => {
                    return { eq: `x + y = ${x + y}`, desc: 'xy' };
                },
                // y - a = b
                () => {
                    const a = Phaser.Math.Between(1, Math.min(y - 1, 10));
                    if (a < 1) return null;
                    return { eq: `y - ${a} = ${y - a}`, desc: 'y' };
                },
                // a * y = b
                () => {
                    const a = Phaser.Math.Between(2, 4);
                    return { eq: `${a} × y = ${a * y}`, desc: 'y' };
                },
            ];

            // We need 2 equations that together let us solve for both x and y
            // Pick one equation involving only x, and one involving y (or both)
            let eq1 = null, eq2 = null;
            const shuffled = Phaser.Utils.Array.Shuffle([...templates]);

            for (const tmpl of shuffled) {
                const result = tmpl();
                if (!result) continue;
                if (!eq1) {
                    eq1 = result;
                } else if (!eq2) {
                    // Make sure the two equations together cover both x and y
                    const covers = eq1.desc + result.desc;
                    if (covers.includes('x') && covers.includes('y')) {
                        eq2 = result;
                        break;
                    }
                }
            }

            // Fallback
            if (!eq1 || !eq2) {
                const a = Phaser.Math.Between(1, 10);
                eq1 = { eq: `x + ${a} = ${x + a}` };
                eq2 = { eq: `x + y = ${x + y}` };
            }

            return { x, y, eq1: eq1.eq, eq2: eq2.eq };
        };

        const showProblem = () => {
            destroyDynamic();
            progressText.setText(`Problem ${currentProblem + 1}/${problems}`);

            const { x: answerX, y: answerY, eq1, eq2 } = generateEquations();

            // Display equations
            const eq1Text = this.add.text(width / 2, 130, eq1, {
                fontSize: '36px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            dynamicElements.push(eq1Text);

            const eq2Text = this.add.text(width / 2, 180, eq2, {
                fontSize: '36px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            dynamicElements.push(eq2Text);

            // Input state
            let selectedVar = 'x';
            let inputX = '';
            let inputY = '';

            // Variable labels and input displays
            const xLabel = this.add.text(width / 2 - 120, 240, 'x =', {
                fontSize: '28px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffff44',
            }).setOrigin(0.5);
            dynamicElements.push(xLabel);

            const xInputBg = this.add.rectangle(width / 2 - 40, 240, 80, 40, 0x6a6aaa)
                .setInteractive({ useHandCursor: true });
            dynamicElements.push(xInputBg);

            const xInputText = this.add.text(width / 2 - 40, 240, '_', {
                fontSize: '28px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            dynamicElements.push(xInputText);

            const yLabel = this.add.text(width / 2 + 60, 240, 'y =', {
                fontSize: '28px',
                fontFamily: 'Arial, sans-serif',
                color: '#44ffff',
            }).setOrigin(0.5);
            dynamicElements.push(yLabel);

            const yInputBg = this.add.rectangle(width / 2 + 140, 240, 80, 40, 0x4a4a6a)
                .setInteractive({ useHandCursor: true });
            dynamicElements.push(yInputBg);

            const yInputText = this.add.text(width / 2 + 140, 240, '_', {
                fontSize: '28px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            dynamicElements.push(yInputText);

            const updateSelection = () => {
                xInputBg.setFillStyle(selectedVar === 'x' ? 0x6a6aaa : 0x4a4a6a);
                yInputBg.setFillStyle(selectedVar === 'y' ? 0x6a6aaa : 0x4a4a6a);
                xLabel.setColor(selectedVar === 'x' ? '#ffff44' : '#888888');
                yLabel.setColor(selectedVar === 'y' ? '#44ffff' : '#888888');
            };

            xInputBg.on('pointerdown', () => { selectedVar = 'x'; updateSelection(); });
            yInputBg.on('pointerdown', () => { selectedVar = 'y'; updateSelection(); });

            const updateInputDisplay = () => {
                xInputText.setText(inputX || '_');
                yInputText.setText(inputY || '_');
            };

            // Number buttons 0-20
            const numCols = 7;
            const btnSize = 52;
            const btnGap = 8;
            const numStartX = width / 2 - ((numCols - 1) * (btnSize + btnGap)) / 2;
            const numStartY = 300;

            for (let n = 0; n <= 20; n++) {
                const col = n % numCols;
                const row = Math.floor(n / numCols);
                const bx = numStartX + col * (btnSize + btnGap);
                const by = numStartY + row * (btnSize + btnGap);

                const bg = this.add.rectangle(bx, by, btnSize, btnSize, 0x4a4a8a)
                    .setInteractive({ useHandCursor: true });
                dynamicElements.push(bg);

                const txt = this.add.text(bx, by, `${n}`, {
                    fontSize: '22px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);
                dynamicElements.push(txt);

                bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                bg.on('pointerdown', () => {
                    if (selectedVar === 'x') {
                        inputX = `${n}`;
                        selectedVar = 'y';
                    } else {
                        inputY = `${n}`;
                    }
                    updateInputDisplay();
                    updateSelection();
                });
            }

            // Submit button
            const submitY = numStartY + Math.ceil(21 / numCols) * (btnSize + btnGap) + 20;
            const submitBg = this.add.rectangle(width / 2, submitY, 160, 50, 0x44aa44)
                .setInteractive({ useHandCursor: true });
            dynamicElements.push(submitBg);

            const submitText = this.add.text(width / 2, submitY, 'Submit', {
                fontSize: '24px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            dynamicElements.push(submitText);

            submitBg.on('pointerover', () => submitBg.setFillStyle(0x55cc55));
            submitBg.on('pointerout', () => submitBg.setFillStyle(0x44aa44));

            let feedbackText = null;

            submitBg.on('pointerdown', () => {
                if (inputX === '' || inputY === '') {
                    if (feedbackText) feedbackText.destroy();
                    feedbackText = this.add.text(width / 2, submitY + 50, 'Enter both x and y!', {
                        fontSize: '20px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffaa44',
                    }).setOrigin(0.5);
                    dynamicElements.push(feedbackText);
                    return;
                }

                const userX = parseInt(inputX, 10);
                const userY = parseInt(inputY, 10);

                if (userX === answerX && userY === answerY) {
                    submitBg.setFillStyle(0x44dd44);
                    submitBg.disableInteractive();

                    if (feedbackText) feedbackText.destroy();
                    feedbackText = this.add.text(width / 2, submitY + 50, `Correct! x=${answerX}, y=${answerY}`, {
                        fontSize: '22px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#44dd44',
                    }).setOrigin(0.5);
                    dynamicElements.push(feedbackText);

                    currentProblem++;
                    if (currentProblem >= problems) {
                        timerEvent.remove(false);
                        this.mathCleanup = null;
                        this.time.delayedCall(800, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    } else {
                        this.time.delayedCall(800, () => {
                            showProblem();
                        });
                    }
                } else {
                    if (feedbackText) feedbackText.destroy();
                    feedbackText = this.add.text(width / 2, submitY + 50, 'Wrong! Try again.', {
                        fontSize: '22px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ff4444',
                    }).setOrigin(0.5);
                    dynamicElements.push(feedbackText);

                    // Reset inputs
                    inputX = '';
                    inputY = '';
                    selectedVar = 'x';
                    updateInputDisplay();
                    updateSelection();
                }
            });
        };

        showProblem();
    }

    createChainMathPuzzle(config) {
        const { width, height } = this.scale;
        const { problems, timeLimit } = config;

        this.add.text(width / 2, 70, 'Find the starting number! (PEMDAS applies)', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Timer
        let timeLeft = timeLimit;
        const timerText = this.add.text(width / 2 + 200, height - 80, `Time: ${timeLeft}s`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const timerEvent = this.time.addEvent({
            delay: 1000,
            repeat: timeLimit - 1,
            callback: () => {
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 5) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    this.mathCleanup = null;
                    this.handleTimeUp();
                }
            },
        });

        this.mathCleanup = () => {
            timerEvent.remove(false);
        };

        let currentProblem = 0;

        const progressText = this.add.text(width / 2 - 200, height - 80, `Problem 1/${problems}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        let problemText = null;
        let choiceButtons = [];
        let feedbackText = null;

        const generateChainProblem = (difficulty) => {
            // Number of operations increases with difficulty: 2, 2, 3, 3, 4
            const numOps = difficulty < 2 ? 2 : difficulty < 4 ? 3 : 4;
            const ops = ['+', '-', '×', '÷'];
            const opSymbols = { '+': '+', '-': '-', '×': '×', '÷': '÷' };

            // Pick the starting number (the answer the player must find)
            let answer;
            if (difficulty < 2) {
                answer = Phaser.Math.Between(1, 10);
            } else if (difficulty < 4) {
                answer = Phaser.Math.Between(2, 15);
            } else {
                answer = Phaser.Math.Between(3, 20);
            }

            // Build a chain of operations and operands
            const chain = []; // each entry: { op, operand }
            let current = answer;

            for (let i = 0; i < numOps; i++) {
                const op = ops[Phaser.Math.Between(0, 3)];
                let operand;

                if (op === '+') {
                    operand = Phaser.Math.Between(1, difficulty < 2 ? 10 : 20);
                    chain.push({ op: '+', operand });
                } else if (op === '-') {
                    operand = Phaser.Math.Between(1, difficulty < 2 ? 10 : 20);
                    chain.push({ op: '-', operand });
                } else if (op === '×') {
                    operand = Phaser.Math.Between(2, difficulty < 2 ? 5 : 8);
                    chain.push({ op: '×', operand });
                } else {
                    // Division: pick a divisor that divides evenly at eval time
                    // We'll use small divisors and adjust
                    operand = Phaser.Math.Between(2, difficulty < 2 ? 4 : 6);
                    chain.push({ op: '÷', operand });
                }
            }

            // Evaluate with PEMDAS: ? op1 a op2 b op3 c ...
            // Build the expression tokens: [answer, op1, a, op2, b, ...]
            // Then evaluate using PEMDAS
            const evaluateChain = (startVal) => {
                const tokens = [startVal];
                for (const step of chain) {
                    tokens.push(step.op);
                    tokens.push(step.operand);
                }

                // First pass: handle × and ÷
                const reduced = [tokens[0]];
                for (let i = 1; i < tokens.length; i += 2) {
                    const op = tokens[i];
                    const val = tokens[i + 1];
                    if (op === '×') {
                        reduced[reduced.length - 1] = reduced[reduced.length - 1] * val;
                    } else if (op === '÷') {
                        reduced[reduced.length - 1] = reduced[reduced.length - 1] / val;
                    } else {
                        reduced.push(op);
                        reduced.push(val);
                    }
                }

                // Second pass: handle + and -
                let result = reduced[0];
                for (let i = 1; i < reduced.length; i += 2) {
                    const op = reduced[i];
                    const val = reduced[i + 1];
                    if (op === '+') result += val;
                    else if (op === '-') result -= val;
                }
                return result;
            };

            // Compute the result
            let result = evaluateChain(answer);

            // Ensure result is a nice integer; if not, regenerate with simpler ops
            // Try a few times, then fallback to addition-only
            let attempts = 0;
            while ((!Number.isInteger(result) || result < -50 || result > 200) && attempts < 10) {
                // Regenerate chain with safer operations
                chain.length = 0;
                for (let i = 0; i < numOps; i++) {
                    const safeOps = ['+', '-', '×'];
                    const op = safeOps[Phaser.Math.Between(0, 2)];
                    let operand;
                    if (op === '×') {
                        operand = Phaser.Math.Between(2, 4);
                    } else {
                        operand = Phaser.Math.Between(1, 10);
                    }
                    chain.push({ op, operand });
                }
                result = evaluateChain(answer);
                attempts++;
            }

            // Final fallback: just use addition
            if (!Number.isInteger(result) || result < -50 || result > 200) {
                chain.length = 0;
                for (let i = 0; i < numOps; i++) {
                    chain.push({ op: '+', operand: Phaser.Math.Between(1, 10) });
                }
                result = evaluateChain(answer);
            }

            // Build display string
            let equation = '?';
            for (const step of chain) {
                equation += ` ${step.op} ${step.operand}`;
            }
            equation += ` = ${result}`;

            return { equation, answer };
        };

        const showProblem = () => {
            if (problemText) problemText.destroy();
            choiceButtons.forEach(b => { b.bg.destroy(); b.text.destroy(); });
            choiceButtons = [];
            if (feedbackText) { feedbackText.destroy(); feedbackText = null; }

            progressText.setText(`Problem ${currentProblem + 1}/${problems}`);

            const { equation, answer } = generateChainProblem(currentProblem);

            problemText = this.add.text(width / 2, height / 2 - 80, equation, {
                fontSize: '36px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            // Generate 3 unique wrong answers
            const wrongSet = new Set();
            while (wrongSet.size < 3) {
                const offset = Phaser.Math.Between(-5, 5);
                const wrong = answer + offset;
                if (wrong !== answer && wrong > 0) {
                    wrongSet.add(wrong);
                }
            }

            const choices = Phaser.Utils.Array.Shuffle([answer, ...wrongSet]);

            const btnWidth = 120;
            const btnSpacing = 140;
            const startX = width / 2 - (btnSpacing * 1.5);
            const btnY = height / 2 + 40;

            choices.forEach((choice, i) => {
                const bx = startX + i * btnSpacing;
                const bg = this.add.rectangle(bx, btnY, btnWidth, 56, 0x4a4a8a)
                    .setInteractive({ useHandCursor: true });
                const txt = this.add.text(bx, btnY, `${choice}`, {
                    fontSize: '28px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);

                bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                bg.on('pointerdown', () => {
                    if (choice === answer) {
                        bg.setFillStyle(0x44dd44);
                        choiceButtons.forEach(b => b.bg.disableInteractive());

                        if (feedbackText) feedbackText.destroy();
                        feedbackText = this.add.text(width / 2, btnY + 60, 'Correct!', {
                            fontSize: '24px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#44dd44',
                        }).setOrigin(0.5);

                        currentProblem++;
                        if (currentProblem >= problems) {
                            timerEvent.remove(false);
                            this.mathCleanup = null;
                            this.time.delayedCall(800, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        } else {
                            this.time.delayedCall(800, () => {
                                showProblem();
                            });
                        }
                    } else {
                        bg.setFillStyle(0xff4444);
                        bg.disableInteractive();

                        if (feedbackText) feedbackText.destroy();
                        feedbackText = this.add.text(width / 2, btnY + 60, 'Wrong! Try again.', {
                            fontSize: '24px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#ff4444',
                        }).setOrigin(0.5);
                    }
                });

                choiceButtons.push({ bg, text: txt });
            });
        };

        showProblem();
    }

    handleReactionTimeEnd(score, totalTargets, requiredScore = 3) {
        const { width, height } = this.scale;

        // Disable all interactive objects
        this.children.list.forEach(child => {
            if (child.input) child.disableInteractive();
        });

        // Overlay
        this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7);

        const passed = score >= requiredScore;

        this.add.text(width / 2, height / 2 - 60, passed ? 'Nice Reflexes!' : 'Too Slow!', {
            fontSize: '40px',
            fontFamily: 'Arial, sans-serif',
            color: passed ? '#44dd44' : '#ff4444',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 2 - 10, `You hit ${score} of ${totalTargets} targets (need ${requiredScore})`, {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#cccccc',
        }).setOrigin(0.5);

        if (passed) {
            this.createButton(width / 2, height / 2 + 50, 'Continue', () => {
                this.scene.start('LevelCompleteScene', { level: this.level });
            });
        } else {
            this.createButton(width / 2, height / 2 + 50, 'Retry', () => {
                this.scene.start('GameScene', { level: this.level });
            });
        }

        this.createButton(width / 2, height / 2 + 110, 'Back to Menu', () => {
            this.scene.start('MenuScene');
        }, 0x5a3a3a, 0x7a5a5a);
    }

    createMultiPuzzleBoss(config) {
        const { width, height } = this.scale;
        const { stages, timeLimit } = config;

        // Shared timer across all stages
        let timeLeft = timeLimit;
        const timerText = this.add.text(width - 20, 30, `Time: ${timeLeft}s`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(1, 0.5);

        const stageText = this.add.text(20, 30, `Stage 1/${stages}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#44dd44',
        }).setOrigin(0, 0.5);

        this.add.text(width / 2, 30, 'BOSS LEVEL', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffdd44',
        }).setOrigin(0.5);

        const timerEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 10) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    timerEvent.remove(false);
                    this.multiPuzzleCleanup = null;
                    this.handleTimeUp();
                }
            },
        });

        this.multiPuzzleCleanup = () => {
            timerEvent.remove(false);
        };

        let currentStage = 0;
        // Track dynamic elements per stage for cleanup
        let stageElements = [];

        const clearStage = () => {
            stageElements.forEach(el => {
                if (el && el.destroy) el.destroy();
            });
            stageElements = [];
            // Remove keyboard listeners from maze stage
            this.input.keyboard.removeAllListeners();
        };

        const advanceStage = () => {
            currentStage++;
            if (currentStage >= stages) {
                // All stages complete!
                timerEvent.remove(false);
                this.multiPuzzleCleanup = null;
                this.time.delayedCall(500, () => {
                    this.scene.start('LevelCompleteScene', { level: this.level });
                });
                return;
            }
            clearStage();
            stageText.setText(`Stage ${currentStage + 1}/${stages}`);
            stageFunctions[currentStage]();
        };

        // ---- Stage 1: 4x4 Memory Card Game (8 pairs) ----
        const startStage1 = () => {
            const rows = 4, cols = 4;
            const totalCards = rows * cols;
            const numPairs = totalCards / 2;

            const cardColors = [
                { name: 'Red', hex: 0xff4444 },
                { name: 'Blue', hex: 0x4488ff },
                { name: 'Green', hex: 0x44dd44 },
                { name: 'Purple', hex: 0xaa44ff },
                { name: 'Orange', hex: 0xff8844 },
                { name: 'Cyan', hex: 0x44dddd },
                { name: 'Yellow', hex: 0xffdd44 },
                { name: 'Pink', hex: 0xff44aa },
            ];

            const cardData = [];
            for (let i = 0; i < numPairs; i++) {
                cardData.push(cardColors[i], cardColors[i]);
            }
            Phaser.Utils.Array.Shuffle(cardData);

            const instrText = this.add.text(width / 2, 70, 'Stage 1: Find all matching pairs!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const padding = 12;
            const availW = width - 40;
            const availH = height - 180;
            const cardW = Math.min(100, Math.floor((availW - (cols - 1) * padding) / cols));
            const cardH = Math.min(120, Math.floor((availH - (rows - 1) * padding) / rows));
            const gridW = cols * (cardW + padding) - padding;
            const gridH = rows * (cardH + padding) - padding;
            const startX = (width - gridW) / 2 + cardW / 2;
            const startY = (height - gridH) / 2 + 10;

            let firstCard = null;
            let secondCard = null;
            let lockBoard = false;
            let matchesFound = 0;

            const cards = [];

            for (let i = 0; i < totalCards; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = startX + col * (cardW + padding);
                const y = startY + row * (cardH + padding);
                const color = cardData[i];

                const back = this.add.rectangle(x, y, cardW, cardH, 0x3a3a6a)
                    .setInteractive({ useHandCursor: true });
                const qmFontSize = Math.min(36, Math.floor(cardH * 0.3));
                const questionMark = this.add.text(x, y, '?', {
                    fontSize: `${qmFontSize}px`,
                    fontFamily: 'Arial, sans-serif',
                    color: '#888888',
                }).setOrigin(0.5);

                const face = this.add.rectangle(x, y, cardW, cardH, color.hex).setVisible(false);
                const lblFontSize = Math.min(16, Math.floor(cardW * 0.16));
                const colorLabel = this.add.text(x, y, color.name, {
                    fontSize: `${lblFontSize}px`,
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5).setVisible(false);

                stageElements.push(back, questionMark, face, colorLabel);

                const card = { back, questionMark, face, colorLabel, colorName: color.name, flipped: false, matched: false };
                cards.push(card);

                back.on('pointerover', () => { if (!card.flipped && !card.matched) back.setFillStyle(0x5a5a9a); });
                back.on('pointerout', () => { if (!card.flipped && !card.matched) back.setFillStyle(0x3a3a6a); });

                back.on('pointerdown', () => {
                    if (lockBoard || card.flipped || card.matched) return;

                    card.flipped = true;
                    back.setVisible(false);
                    questionMark.setVisible(false);
                    face.setVisible(true);
                    colorLabel.setVisible(true);

                    if (!firstCard) {
                        firstCard = card;
                    } else {
                        secondCard = card;
                        lockBoard = true;

                        if (firstCard.colorName === secondCard.colorName) {
                            firstCard.matched = true;
                            secondCard.matched = true;
                            firstCard.face.setAlpha(0.6);
                            secondCard.face.setAlpha(0.6);
                            firstCard.colorLabel.setAlpha(0.6);
                            secondCard.colorLabel.setAlpha(0.6);
                            firstCard = null;
                            secondCard = null;
                            lockBoard = false;
                            matchesFound++;

                            if (matchesFound >= numPairs) {
                                this.time.delayedCall(500, () => advanceStage());
                            }
                        } else {
                            const fc = firstCard;
                            const sc = secondCard;
                            this.time.delayedCall(800, () => {
                                fc.flipped = false;
                                fc.back.setVisible(true);
                                fc.questionMark.setVisible(true);
                                fc.face.setVisible(false);
                                fc.colorLabel.setVisible(false);
                                sc.flipped = false;
                                sc.back.setVisible(true);
                                sc.questionMark.setVisible(true);
                                sc.face.setVisible(false);
                                sc.colorLabel.setVisible(false);
                                firstCard = null;
                                secondCard = null;
                                lockBoard = false;
                            });
                        }
                    }
                });
            }
        };

        // ---- Stage 2: 4 Math Problems (mixed add/subtract/multiply, up to 30) ----
        const startStage2 = () => {
            const problems = 4;
            const operations = ['add', 'subtract', 'multiply'];
            const maxNum = 30;

            const instrText = this.add.text(width / 2, 70, 'Stage 2: Solve the math problems!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            let currentProblem = 0;

            const progressText = this.add.text(width / 2, height - 80, `Problem 1/${problems}`, {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(progressText);

            let problemText = null;
            let choiceButtons = [];
            let feedbackText = null;

            const showProblem = () => {
                if (problemText) { problemText.destroy(); stageElements = stageElements.filter(e => e !== problemText); }
                choiceButtons.forEach(b => { b.bg.destroy(); b.text.destroy(); stageElements = stageElements.filter(e => e !== b.bg && e !== b.text); });
                choiceButtons = [];
                if (feedbackText) { feedbackText.destroy(); stageElements = stageElements.filter(e => e !== feedbackText); feedbackText = null; }

                progressText.setText(`Problem ${currentProblem + 1}/${problems}`);

                const op = Phaser.Utils.Array.GetRandom(operations);
                let a, b_val, answer, symbol;

                if (op === 'subtract') {
                    a = Phaser.Math.Between(2, maxNum);
                    b_val = Phaser.Math.Between(1, a - 1);
                    answer = a - b_val;
                    symbol = '-';
                } else if (op === 'multiply') {
                    a = Phaser.Math.Between(2, Math.min(maxNum, 12));
                    b_val = Phaser.Math.Between(2, Math.min(maxNum, 12));
                    answer = a * b_val;
                    symbol = '×';
                } else {
                    a = Phaser.Math.Between(1, maxNum - 1);
                    b_val = Phaser.Math.Between(1, maxNum - a);
                    answer = a + b_val;
                    symbol = '+';
                }

                problemText = this.add.text(width / 2, height / 2 - 80, `${a} ${symbol} ${b_val} = ?`, {
                    fontSize: '48px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);
                stageElements.push(problemText);

                const wrongSet = new Set();
                while (wrongSet.size < 3) {
                    const offset = Phaser.Math.Between(-5, 5);
                    const wrong = answer + offset;
                    if (wrong !== answer && wrong > 0) {
                        wrongSet.add(wrong);
                    }
                }

                const choices = Phaser.Utils.Array.Shuffle([answer, ...wrongSet]);
                const btnWidth = 120;
                const btnSpacing = 140;
                const bStartX = width / 2 - (btnSpacing * 1.5);
                const btnY = height / 2 + 40;

                choices.forEach((choice, i) => {
                    const bx = bStartX + i * btnSpacing;
                    const bg = this.add.rectangle(bx, btnY, btnWidth, 56, 0x4a4a8a)
                        .setInteractive({ useHandCursor: true });
                    const txt = this.add.text(bx, btnY, `${choice}`, {
                        fontSize: '28px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffffff',
                    }).setOrigin(0.5);
                    stageElements.push(bg, txt);

                    bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                    bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                    bg.on('pointerdown', () => {
                        if (choice === answer) {
                            bg.setFillStyle(0x44dd44);
                            choiceButtons.forEach(b => b.bg.disableInteractive());

                            if (feedbackText) { feedbackText.destroy(); stageElements = stageElements.filter(e => e !== feedbackText); }
                            feedbackText = this.add.text(width / 2, btnY + 60, 'Correct!', {
                                fontSize: '24px',
                                fontFamily: 'Arial, sans-serif',
                                color: '#44dd44',
                            }).setOrigin(0.5);
                            stageElements.push(feedbackText);

                            currentProblem++;
                            if (currentProblem >= problems) {
                                this.time.delayedCall(800, () => advanceStage());
                            } else {
                                this.time.delayedCall(800, () => showProblem());
                            }
                        } else {
                            bg.setFillStyle(0xff4444);
                            bg.disableInteractive();
                            if (feedbackText) { feedbackText.destroy(); stageElements = stageElements.filter(e => e !== feedbackText); }
                            feedbackText = this.add.text(width / 2, btnY + 60, 'Wrong! Try again.', {
                                fontSize: '24px',
                                fontFamily: 'Arial, sans-serif',
                                color: '#ff4444',
                            }).setOrigin(0.5);
                            stageElements.push(feedbackText);
                        }
                    });

                    choiceButtons.push({ bg, text: txt });
                });
            };

            showProblem();
        };

        // ---- Stage 3: 9x9 Maze ----
        const startStage3 = () => {
            const mazeW = 9, mazeH = 9, cellSize = 45;

            const instrText = this.add.text(width / 2, 70, 'Stage 3: Navigate the maze!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            // Generate maze using recursive backtracker
            const maze = Array.from({ length: mazeH }, () => Array(mazeW).fill(1));

            const carveMaze = (r, c) => {
                maze[r][c] = 0;
                const dirs = [[0, 2], [0, -2], [2, 0], [-2, 0]];
                for (let i = dirs.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [dirs[i], dirs[j]] = [dirs[j], dirs[i]];
                }
                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 1) {
                        maze[r + dr / 2][c + dc / 2] = 0;
                        carveMaze(nr, nc);
                    }
                }
            };
            carveMaze(0, 0);
            maze[mazeH - 1][mazeW - 1] = 0;

            const gridW = mazeW * cellSize;
            const gridH = mazeH * cellSize;
            const offsetX = (width - gridW) / 2;
            const offsetY = (height - gridH) / 2 + 10;

            // Draw maze
            for (let row = 0; row < mazeH; row++) {
                for (let col = 0; col < mazeW; col++) {
                    const x = offsetX + col * cellSize + cellSize / 2;
                    const y = offsetY + row * cellSize + cellSize / 2;
                    if (maze[row][col] === 1) {
                        const wall = this.add.rectangle(x, y, cellSize - 2, cellSize - 2, 0x2a2a4a);
                        stageElements.push(wall);
                    } else {
                        const path = this.add.rectangle(x, y, cellSize - 2, cellSize - 2, 0x4a4a6a);
                        stageElements.push(path);
                    }
                }
            }

            // Exit star
            const exitX = offsetX + (mazeW - 1) * cellSize + cellSize / 2;
            const exitY = offsetY + (mazeH - 1) * cellSize + cellSize / 2;
            const star = this.add.star(exitX, exitY, 5, 10, 22, 0xffdd44);
            stageElements.push(star);

            // Player
            let playerCol = 0;
            let playerRow = 0;
            const player = this.add.circle(
                offsetX + cellSize / 2,
                offsetY + cellSize / 2,
                cellSize / 3, 0x44dd44
            );
            stageElements.push(player);

            let inputLocked = false;

            const movePlayer = (dCol, dRow) => {
                const newCol = playerCol + dCol;
                const newRow = playerRow + dRow;
                if (newCol < 0 || newCol >= mazeW || newRow < 0 || newRow >= mazeH) return;
                if (maze[newRow][newCol] === 1) return;

                playerCol = newCol;
                playerRow = newRow;
                player.setPosition(
                    offsetX + playerCol * cellSize + cellSize / 2,
                    offsetY + playerRow * cellSize + cellSize / 2
                );

                if (playerCol === mazeW - 1 && playerRow === mazeH - 1) {
                    inputLocked = true;
                    player.setFillStyle(0xffdd44);
                    this.time.delayedCall(500, () => advanceStage());
                }
            };

            this.input.keyboard.on('keydown-LEFT', () => { if (!inputLocked) movePlayer(-1, 0); });
            this.input.keyboard.on('keydown-RIGHT', () => { if (!inputLocked) movePlayer(1, 0); });
            this.input.keyboard.on('keydown-UP', () => { if (!inputLocked) movePlayer(0, -1); });
            this.input.keyboard.on('keydown-DOWN', () => { if (!inputLocked) movePlayer(0, 1); });
        };

        // ---- Level 60 Stage 1: Simon Says (6-step sequence) ----
        const startL60Stage1 = () => {
            const sequenceLength = 6;
            const numColors = 4;
            const playbackSpeed = 600;

            const allColorDefs = [
                { name: 'Red', hex: 0xff4444, dimHex: 0x882222 },
                { name: 'Blue', hex: 0x4488ff, dimHex: 0x224488 },
                { name: 'Green', hex: 0x44dd44, dimHex: 0x227722 },
                { name: 'Yellow', hex: 0xffdd44, dimHex: 0x887722 },
            ];

            const colorDefs = allColorDefs.slice(0, numColors);

            const instrText = this.add.text(width / 2, 70, 'Stage 1: Watch the sequence!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const progressText = this.add.text(width / 2, height - 80, '', {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(progressText);

            const cols = 2;
            const rows = 2;
            const btnSize = 120;
            const gap = 20;
            const gridW = cols * btnSize + (cols - 1) * gap;
            const gridH = rows * btnSize + (rows - 1) * gap;
            const gridStartX = width / 2 - gridW / 2 + btnSize / 2;
            const gridStartY = height / 2 - gridH / 2 + btnSize / 2;

            const buttons = colorDefs.map((colorDef, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = gridStartX + col * (btnSize + gap);
                const y = gridStartY + row * (btnSize + gap);

                const rect = this.add.rectangle(x, y, btnSize, btnSize, colorDef.dimHex)
                    .setInteractive({ useHandCursor: true });
                const label = this.add.text(x, y, colorDef.name, {
                    fontSize: '18px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);
                stageElements.push(rect, label);

                return { rect, colorDef };
            });

            const sequence = [];
            for (let i = 0; i < sequenceLength; i++) {
                sequence.push(Phaser.Math.Between(0, colorDefs.length - 1));
            }

            let playerIndex = 0;
            let inputEnabled = false;

            const lightUp = (btnIndex, duration) => {
                const btn = buttons[btnIndex];
                btn.rect.setFillStyle(btn.colorDef.hex);
                this.time.delayedCall(duration * 0.6, () => {
                    btn.rect.setFillStyle(btn.colorDef.dimHex);
                });
            };

            const playSequence = () => {
                inputEnabled = false;
                playerIndex = 0;
                instrText.setText('Stage 1: Watch the sequence!');
                progressText.setText('');

                sequence.forEach((btnIndex, i) => {
                    this.time.delayedCall(playbackSpeed * (i + 1), () => {
                        lightUp(btnIndex, playbackSpeed);
                    });
                });

                this.time.delayedCall(playbackSpeed * (sequence.length + 1), () => {
                    inputEnabled = true;
                    instrText.setText('Stage 1: Your turn! Repeat the sequence.');
                    progressText.setText(`0/${sequenceLength}`);
                });
            };

            buttons.forEach((btn, btnIndex) => {
                btn.rect.on('pointerdown', () => {
                    if (!inputEnabled) return;

                    btn.rect.setFillStyle(btn.colorDef.hex);
                    this.time.delayedCall(200, () => {
                        btn.rect.setFillStyle(btn.colorDef.dimHex);
                    });

                    if (sequence[playerIndex] === btnIndex) {
                        playerIndex++;
                        progressText.setText(`${playerIndex}/${sequenceLength}`);

                        if (playerIndex >= sequenceLength) {
                            inputEnabled = false;
                            instrText.setText('Correct!');
                            this.time.delayedCall(500, () => advanceStage());
                        }
                    } else {
                        inputEnabled = false;
                        instrText.setText('Wrong! Watch again...');
                        progressText.setText('');
                        this.time.delayedCall(1000, () => {
                            playSequence();
                        });
                    }
                });
            });

            playSequence();
        };

        // ---- Level 60 Stage 2: Sliding Puzzle (3x3) ----
        const startL60Stage2 = () => {
            const size = 3;
            const tileSize = 90;
            const tileGap = 4;
            const totalSize = size * tileSize + (size - 1) * tileGap;
            const puzzleStartX = (width - totalSize) / 2 + tileSize / 2;
            const puzzleStartY = (height - totalSize) / 2 + tileSize / 2 - 10;

            const instrText = this.add.text(width / 2, 70, 'Stage 2: Solve the sliding puzzle!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const board = [];
            for (let r = 0; r < size; r++) {
                board[r] = [];
                for (let c = 0; c < size; c++) {
                    const val = r * size + c + 1;
                    board[r][c] = val === size * size ? 0 : val;
                }
            }

            let emptyR = size - 1;
            let emptyC = size - 1;

            const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            for (let i = 0; i < 200; i++) {
                const validMoves = [];
                for (const [dr, dc] of dirs) {
                    const nr = emptyR + dr;
                    const nc = emptyC + dc;
                    if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
                        validMoves.push([nr, nc]);
                    }
                }
                const [mr, mc] = validMoves[Math.floor(Math.random() * validMoves.length)];
                board[emptyR][emptyC] = board[mr][mc];
                board[mr][mc] = 0;
                emptyR = mr;
                emptyC = mc;
            }

            let moveCount = 0;
            const moveText = this.add.text(width / 2, height - 80, 'Moves: 0', {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(moveText);

            let tiles = [];

            const renderBoard = () => {
                tiles.forEach(t => {
                    if (t.bg) t.bg.destroy();
                    if (t.label) t.label.destroy();
                    stageElements = stageElements.filter(e => e !== t.bg && e !== t.label);
                });
                tiles = [];

                for (let r = 0; r < size; r++) {
                    for (let c = 0; c < size; c++) {
                        const val = board[r][c];
                        if (val === 0) continue;

                        const x = puzzleStartX + c * (tileSize + tileGap);
                        const y = puzzleStartY + r * (tileSize + tileGap);

                        const bg = this.add.rectangle(x, y, tileSize, tileSize, 0x4a6a9a)
                            .setInteractive({ useHandCursor: true });
                        const label = this.add.text(x, y, `${val}`, {
                            fontSize: '36px',
                            fontFamily: 'Arial, sans-serif',
                            fontStyle: 'bold',
                            color: '#ffffff',
                        }).setOrigin(0.5);
                        stageElements.push(bg, label);

                        bg.on('pointerdown', () => {
                            const dr = Math.abs(r - emptyR);
                            const dc = Math.abs(c - emptyC);
                            if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
                                board[emptyR][emptyC] = board[r][c];
                                board[r][c] = 0;
                                emptyR = r;
                                emptyC = c;
                                moveCount++;
                                moveText.setText(`Moves: ${moveCount}`);
                                renderBoard();

                                if (this.checkSlidingPuzzleSolved(board, size)) {
                                    this.time.delayedCall(300, () => advanceStage());
                                }
                            }
                        });

                        bg.on('pointerover', () => {
                            const dr = Math.abs(r - emptyR);
                            const dc = Math.abs(c - emptyC);
                            if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
                                bg.setFillStyle(0x6a8aba);
                            }
                        });
                        bg.on('pointerout', () => bg.setFillStyle(0x4a6a9a));

                        tiles.push({ bg, label });
                    }
                }
            };

            renderBoard();
        };

        // ---- Level 60 Stage 3: 5 Math Problems (multiply/divide) ----
        const startL60Stage3 = () => {
            const problems = 5;
            const operations = ['multiply', 'divide'];
            const maxNum = 12;

            const instrText = this.add.text(width / 2, 70, 'Stage 3: Solve the math problems!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            let currentProblem = 0;

            const progressMathText = this.add.text(width / 2, height - 80, `Problem 1/${problems}`, {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(progressMathText);

            let problemText = null;
            let choiceButtons = [];
            let feedbackText = null;

            const showProblem = () => {
                if (problemText) { problemText.destroy(); stageElements = stageElements.filter(e => e !== problemText); }
                choiceButtons.forEach(b => { b.bg.destroy(); b.text.destroy(); stageElements = stageElements.filter(e => e !== b.bg && e !== b.text); });
                choiceButtons = [];
                if (feedbackText) { feedbackText.destroy(); stageElements = stageElements.filter(e => e !== feedbackText); feedbackText = null; }

                progressMathText.setText(`Problem ${currentProblem + 1}/${problems}`);

                const op = Phaser.Utils.Array.GetRandom(operations);
                let a, b_val, answer, symbol;

                if (op === 'divide') {
                    b_val = Phaser.Math.Between(2, maxNum);
                    answer = Phaser.Math.Between(2, maxNum);
                    a = b_val * answer;
                    symbol = '÷';
                } else {
                    a = Phaser.Math.Between(2, maxNum);
                    b_val = Phaser.Math.Between(2, maxNum);
                    answer = a * b_val;
                    symbol = '×';
                }

                problemText = this.add.text(width / 2, height / 2 - 80, `${a} ${symbol} ${b_val} = ?`, {
                    fontSize: '48px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);
                stageElements.push(problemText);

                const wrongSet = new Set();
                while (wrongSet.size < 3) {
                    const offset = Phaser.Math.Between(-5, 5);
                    const wrong = answer + offset;
                    if (wrong !== answer && wrong > 0) {
                        wrongSet.add(wrong);
                    }
                }

                const choices = Phaser.Utils.Array.Shuffle([answer, ...wrongSet]);
                const btnWidth = 120;
                const btnSpacing = 140;
                const bStartX = width / 2 - (btnSpacing * 1.5);
                const btnY = height / 2 + 40;

                choices.forEach((choice, i) => {
                    const bx = bStartX + i * btnSpacing;
                    const bg = this.add.rectangle(bx, btnY, btnWidth, 56, 0x4a4a8a)
                        .setInteractive({ useHandCursor: true });
                    const txt = this.add.text(bx, btnY, `${choice}`, {
                        fontSize: '28px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffffff',
                    }).setOrigin(0.5);
                    stageElements.push(bg, txt);

                    bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                    bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                    bg.on('pointerdown', () => {
                        if (choice === answer) {
                            bg.setFillStyle(0x44dd44);
                            choiceButtons.forEach(b => b.bg.disableInteractive());

                            if (feedbackText) { feedbackText.destroy(); stageElements = stageElements.filter(e => e !== feedbackText); }
                            feedbackText = this.add.text(width / 2, btnY + 60, 'Correct!', {
                                fontSize: '24px',
                                fontFamily: 'Arial, sans-serif',
                                color: '#44dd44',
                            }).setOrigin(0.5);
                            stageElements.push(feedbackText);

                            currentProblem++;
                            if (currentProblem >= problems) {
                                this.time.delayedCall(800, () => advanceStage());
                            } else {
                                this.time.delayedCall(800, () => showProblem());
                            }
                        } else {
                            bg.setFillStyle(0xff4444);
                            bg.disableInteractive();
                            if (feedbackText) { feedbackText.destroy(); stageElements = stageElements.filter(e => e !== feedbackText); }
                            feedbackText = this.add.text(width / 2, btnY + 60, 'Wrong! Try again.', {
                                fontSize: '24px',
                                fontFamily: 'Arial, sans-serif',
                                color: '#ff4444',
                            }).setOrigin(0.5);
                            stageElements.push(feedbackText);
                        }
                    });

                    choiceButtons.push({ bg, text: txt });
                });
            };

            showProblem();
        };

        // ---- Level 60 Stage 4: Word Scramble (6-letter word, no hint) ----
        const startL60Stage4 = () => {
            const wordsByLength6 = ['puzzle', 'knight', 'bridge', 'castle', 'forest', 'garden', 'rocket', 'planet', 'silver', 'frozen'];
            const targetWord = Phaser.Utils.Array.GetRandom(wordsByLength6);
            const letters = targetWord.split('');

            let scrambled = [...letters];
            let scrambleAttempts = 0;
            do {
                scrambled = Phaser.Utils.Array.Shuffle([...letters]);
                scrambleAttempts++;
            } while (scrambled.join('') === targetWord && scrambleAttempts < 20);

            const instrText = this.add.text(width / 2, 70, 'Stage 4: Unscramble the word!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const letterSize = 50;
            const letterGap = 10;
            const totalW = scrambled.length * letterSize + (scrambled.length - 1) * letterGap;
            const letStartX = width / 2 - totalW / 2 + letterSize / 2;
            const letY = height / 2 - 60;

            scrambled.forEach((letter, i) => {
                const x = letStartX + i * (letterSize + letterGap);
                const bg = this.add.rectangle(x, letY, letterSize, letterSize, 0x4a4a8a);
                const txt = this.add.text(x, letY, letter.toUpperCase(), {
                    fontSize: '28px',
                    fontFamily: 'Arial, sans-serif',
                    fontStyle: 'bold',
                    color: '#ffffff',
                }).setOrigin(0.5);
                stageElements.push(bg, txt);
            });

            let currentGuess = '';
            const guessText = this.add.text(width / 2, height / 2 + 30, '_ '.repeat(targetWord.length).trim(), {
                fontSize: '36px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
                letterSpacing: 8,
            }).setOrigin(0.5);
            stageElements.push(guessText);

            const feedbackWordText = this.add.text(width / 2, height / 2 + 80, '', {
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#ff4444',
            }).setOrigin(0.5);
            stageElements.push(feedbackWordText);

            const updateGuessDisplay = () => {
                const display = [];
                for (let i = 0; i < targetWord.length; i++) {
                    display.push(i < currentGuess.length ? currentGuess[i].toUpperCase() : '_');
                }
                guessText.setText(display.join(' '));
            };

            // Keyboard input
            this.input.keyboard.on('keydown', (event) => {
                const key = event.key.toLowerCase();
                if (key === 'backspace') {
                    currentGuess = currentGuess.slice(0, -1);
                    feedbackWordText.setText('');
                    updateGuessDisplay();
                } else if (key === 'enter') {
                    if (currentGuess.length === targetWord.length) {
                        if (currentGuess === targetWord) {
                            feedbackWordText.setColor('#44dd44');
                            feedbackWordText.setText('Correct!');
                            this.time.delayedCall(500, () => advanceStage());
                        } else {
                            feedbackWordText.setColor('#ff4444');
                            feedbackWordText.setText('Wrong! Try again.');
                            currentGuess = '';
                            updateGuessDisplay();
                        }
                    }
                } else if (/^[a-z]$/.test(key) && currentGuess.length < targetWord.length) {
                    currentGuess += key;
                    updateGuessDisplay();
                }
            });

            // On-screen keyboard for touch support
            const kbKeys = 'qwertyuiopasdfghjklzxcvbnm'.split('');
            const kbRows = [
                kbKeys.slice(0, 10),
                kbKeys.slice(10, 19),
                kbKeys.slice(19, 26),
            ];
            const kbKeySize = 32;
            const kbGap = 4;
            const kbStartY = height / 2 + 120;

            kbRows.forEach((row, ri) => {
                const rowW = row.length * kbKeySize + (row.length - 1) * kbGap;
                const rowStartX = width / 2 - rowW / 2 + kbKeySize / 2;
                const ry = kbStartY + ri * (kbKeySize + kbGap);

                row.forEach((k, ki) => {
                    const kx = rowStartX + ki * (kbKeySize + kbGap);
                    const kbg = this.add.rectangle(kx, ry, kbKeySize, kbKeySize, 0x3a3a6a)
                        .setInteractive({ useHandCursor: true });
                    const ktxt = this.add.text(kx, ry, k.toUpperCase(), {
                        fontSize: '16px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffffff',
                    }).setOrigin(0.5);
                    stageElements.push(kbg, ktxt);

                    kbg.on('pointerover', () => kbg.setFillStyle(0x5a5a8a));
                    kbg.on('pointerout', () => kbg.setFillStyle(0x3a3a6a));
                    kbg.on('pointerdown', () => {
                        if (currentGuess.length < targetWord.length) {
                            currentGuess += k;
                            updateGuessDisplay();
                        }
                    });
                });
            });

            // Backspace and Enter buttons
            const actionY = kbStartY + 3 * (kbKeySize + kbGap);
            const delBg = this.add.rectangle(width / 2 - 70, actionY, 100, 36, 0x5a3a3a)
                .setInteractive({ useHandCursor: true });
            const delTxt = this.add.text(width / 2 - 70, actionY, 'DELETE', {
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(delBg, delTxt);
            delBg.on('pointerover', () => delBg.setFillStyle(0x7a5a5a));
            delBg.on('pointerout', () => delBg.setFillStyle(0x5a3a3a));
            delBg.on('pointerdown', () => {
                currentGuess = currentGuess.slice(0, -1);
                feedbackWordText.setText('');
                updateGuessDisplay();
            });

            const enterBg = this.add.rectangle(width / 2 + 70, actionY, 100, 36, 0x3a5a3a)
                .setInteractive({ useHandCursor: true });
            const enterTxt = this.add.text(width / 2 + 70, actionY, 'ENTER', {
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(enterBg, enterTxt);
            enterBg.on('pointerover', () => enterBg.setFillStyle(0x5a7a5a));
            enterBg.on('pointerout', () => enterBg.setFillStyle(0x3a5a3a));
            enterBg.on('pointerdown', () => {
                if (currentGuess.length === targetWord.length) {
                    if (currentGuess === targetWord) {
                        feedbackWordText.setColor('#44dd44');
                        feedbackWordText.setText('Correct!');
                        this.time.delayedCall(500, () => advanceStage());
                    } else {
                        feedbackWordText.setColor('#ff4444');
                        feedbackWordText.setText('Wrong! Try again.');
                        currentGuess = '';
                        updateGuessDisplay();
                    }
                }
            });
        };

        // Build stage functions array based on level
        const stageFunctions = this.level === 60
            ? [startL60Stage1, startL60Stage2, startL60Stage3, startL60Stage4]
            : [startStage1, startStage2, startStage3];

        // Start with stage 1
        stageFunctions[0]();
    }

    handleTimeUp() {
        const { width, height } = this.scale;

        if (this.colorMatchCleanup) this.colorMatchCleanup();
        if (this.reactionTimeCleanup) this.reactionTimeCleanup();
        if (this.mathCleanup) this.mathCleanup();
        if (this.multiPuzzleCleanup) this.multiPuzzleCleanup();

        // Disable all interactive objects
        this.children.list.forEach(child => {
            if (child.input) child.disableInteractive();
        });

        // Overlay
        const overlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.7);

        this.add.text(width / 2, height / 2 - 40, 'Time Up!', {
            fontSize: '40px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        this.createButton(width / 2, height / 2 + 30, 'Retry', () => {
            this.scene.start('GameScene', { level: this.level });
        });

        this.createButton(width / 2, height / 2 + 90, 'Back to Menu', () => {
            this.scene.start('MenuScene');
        }, 0x5a3a3a, 0x7a5a5a);
    }

    createWordScramblePuzzle(config) {
        const { width, height } = this.scale;
        const { wordLength, showHint, multiWord, wordCount } = config;

        if (multiWord && wordCount === 2) {
            this.createMultiWordScramblePuzzle(config);
            return;
        }

        const wordsByLength = {
            4: ['game', 'play', 'code', 'fish', 'star', 'moon', 'tree', 'bird', 'cake', 'lion'],
            6: ['puzzle', 'knight', 'bridge', 'castle', 'forest', 'garden', 'rocket', 'planet', 'silver', 'frozen'],
        };
        const words = wordsByLength[wordLength] || wordsByLength[4];
        const targetWord = Phaser.Utils.Array.GetRandom(words);
        const letters = targetWord.split('');

        // Scramble letters (ensure they're actually scrambled)
        let scrambled = [...letters];
        let attempts = 0;
        do {
            scrambled = Phaser.Utils.Array.Shuffle([...letters]);
            attempts++;
        } while (scrambled.join('') === targetWord && attempts < 20);

        // Instructions
        this.add.text(width / 2, 70, 'Unscramble the word!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Hint
        if (showHint) {
            this.add.text(width / 2, 100, `Hint: starts with "${targetWord[0].toUpperCase()}"`, {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#88aa88',
            }).setOrigin(0.5);
        }

        const tileSize = 64;
        const tileSpacing = 80;
        const startX = width / 2 - (tileSpacing * (letters.length - 1)) / 2;
        const scrambleY = height / 2 - 60;
        const answerY = height / 2 + 60;

        // State
        const answer = [];
        const letterTiles = [];
        const answerSlots = [];

        // Create answer slots (empty boxes)
        for (let i = 0; i < letters.length; i++) {
            const x = startX + i * tileSpacing;
            const bg = this.add.rectangle(x, answerY, tileSize, tileSize, 0x3a3a5a)
                .setStrokeStyle(2, 0x6a6aaa)
                .setInteractive({ useHandCursor: true });
            const txt = this.add.text(x, answerY, '', {
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerdown', () => {
                // Remove letter from this slot
                const slotIndex = answerSlots.indexOf(bg);
                if (answer[slotIndex] !== null && answer[slotIndex] !== undefined) {
                    const removedEntry = answer[slotIndex];
                    answer[slotIndex] = null;
                    txt.setText('');
                    // Show the letter tile again
                    removedEntry.bg.setVisible(true);
                    removedEntry.txt.setVisible(true);
                    removedEntry.bg.setInteractive({ useHandCursor: true });
                }
            });

            answerSlots.push(bg);
            answerSlots[i]._txt = txt;
        }

        // Create scrambled letter tiles
        for (let i = 0; i < scrambled.length; i++) {
            const x = startX + i * tileSpacing;
            const bg = this.add.rectangle(x, scrambleY, tileSize, tileSize, 0x4a4a8a)
                .setInteractive({ useHandCursor: true });
            const txt = this.add.text(x, scrambleY, scrambled[i].toUpperCase(), {
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerover', () => { if (bg.visible) bg.setFillStyle(0x6a6aaa); });
            bg.on('pointerout', () => { if (bg.visible) bg.setFillStyle(0x4a4a8a); });

            const tile = { bg, txt, letter: scrambled[i] };
            letterTiles.push(tile);

            bg.on('pointerdown', () => {
                // Find first empty answer slot
                let emptyIndex = -1;
                for (let j = 0; j < answer.length; j++) {
                    if (answer[j] === null) { emptyIndex = j; break; }
                }
                if (emptyIndex === -1) {
                    emptyIndex = answer.length;
                }
                if (emptyIndex >= letters.length) return;

                // Place letter in answer
                answer[emptyIndex] = tile;
                answerSlots[emptyIndex]._txt.setText(scrambled[i].toUpperCase());

                // Hide the tile
                bg.setVisible(false);
                txt.setVisible(false);
                bg.disableInteractive();

                // Check if answer is complete
                const currentAnswer = answer.map(entry => entry ? entry.letter : '').join('');
                if (currentAnswer.length === letters.length && !answer.includes(null)) {
                    if (currentAnswer === targetWord) {
                        // Correct!
                        answerSlots.forEach(slot => {
                            slot.setFillStyle(0x44dd44);
                            slot.disableInteractive();
                        });
                        letterTiles.forEach(t => t.bg.disableInteractive());

                        this.add.text(width / 2, answerY + 70, 'Correct!', {
                            fontSize: '28px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#44dd44',
                        }).setOrigin(0.5);

                        this.time.delayedCall(800, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    } else {
                        // Wrong - flash red briefly
                        answerSlots.forEach(slot => slot.setFillStyle(0xff4444));
                        this.time.delayedCall(500, () => {
                            answerSlots.forEach(slot => slot.setFillStyle(0x3a3a5a));
                        });
                    }
                }
            });
        }

        // Initialize answer array with nulls
        for (let i = 0; i < letters.length; i++) {
            answer.push(null);
        }

        // Clear button
        this.createButton(width / 2, answerY + 130, 'Clear', () => {
            // Return all letters to scramble row
            for (let i = 0; i < answer.length; i++) {
                if (answer[i] !== null) {
                    answer[i].bg.setVisible(true);
                    answer[i].txt.setVisible(true);
                    answer[i].bg.setInteractive({ useHandCursor: true });
                    answer[i] = null;
                    answerSlots[i]._txt.setText('');
                }
            }
        });
    }

    createMultiWordScramblePuzzle(config) {
        const { width, height } = this.scale;

        const wordPairs = [
            ['fire', 'cold'],
            ['dark', 'glow'],
            ['fish', 'pond'],
            ['wind', 'calm'],
        ];
        const pair = Phaser.Utils.Array.GetRandom(wordPairs);
        const targetWord1 = pair[0];
        const targetWord2 = pair[1];
        const allLetters = (targetWord1 + targetWord2).split('');

        // Scramble all letters together
        let scrambled = [...allLetters];
        let attempts = 0;
        do {
            scrambled = Phaser.Utils.Array.Shuffle([...allLetters]);
            attempts++;
        } while (scrambled.join('') === allLetters.join('') && attempts < 20);

        // Instructions
        this.add.text(width / 2, 60, 'Unscramble TWO words!', {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 88, 'Form two 4-letter words from the scrambled letters', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#777777',
        }).setOrigin(0.5);

        const tileSize = 56;
        const tileSpacing = 70;
        const scrambleY = 160;
        const scrambleStartX = width / 2 - (tileSpacing * (scrambled.length - 1)) / 2;

        const wordLen = 4;
        const answer1StartX = width / 2 - (tileSpacing * (wordLen - 1)) / 2;
        const answer1Y = 280;
        const answer2Y = 380;

        // State for both answer rows
        const answer1 = [null, null, null, null];
        const answer2 = [null, null, null, null];
        const answerSlots1 = [];
        const answerSlots2 = [];
        const letterTiles = [];
        let activeRow = 1; // Which row is currently receiving letters

        // Row labels
        this.add.text(answer1StartX - 50, answer1Y, 'Word 1:', {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#88aacc',
        }).setOrigin(1, 0.5);

        this.add.text(answer1StartX - 50, answer2Y, 'Word 2:', {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#cc88aa',
        }).setOrigin(1, 0.5);

        // Row selection indicators
        const row1Indicator = this.add.rectangle(answer1StartX - 70, answer1Y, 10, tileSize, 0x88aacc);
        const row2Indicator = this.add.rectangle(answer1StartX - 70, answer2Y, 10, tileSize, 0x333333);

        const updateRowIndicators = () => {
            row1Indicator.setFillStyle(activeRow === 1 ? 0x88aacc : 0x333333);
            row2Indicator.setFillStyle(activeRow === 2 ? 0xcc88aa : 0x333333);
        };

        const returnTileToScramble = (tile) => {
            tile.bg.setVisible(true);
            tile.txt.setVisible(true);
            tile.bg.setInteractive({ useHandCursor: true });
        };

        const getActiveAnswer = () => activeRow === 1 ? answer1 : answer2;
        const getActiveSlots = () => activeRow === 1 ? answerSlots1 : answerSlots2;

        const checkCompletion = () => {
            const word1 = answer1.map(entry => entry ? entry.letter : '').join('');
            const word2 = answer2.map(entry => entry ? entry.letter : '').join('');
            if (word1.length !== wordLen || word2.length !== wordLen) return;
            if (answer1.includes(null) || answer2.includes(null)) return;

            // Check both orderings
            const correct = (word1 === targetWord1 && word2 === targetWord2) ||
                            (word1 === targetWord2 && word2 === targetWord1);

            if (correct) {
                answerSlots1.forEach(slot => { slot.setFillStyle(0x44dd44); slot.disableInteractive(); });
                answerSlots2.forEach(slot => { slot.setFillStyle(0x44dd44); slot.disableInteractive(); });
                letterTiles.forEach(t => t.bg.disableInteractive());

                this.add.text(width / 2, answer2Y + 70, 'Correct!', {
                    fontSize: '28px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#44dd44',
                }).setOrigin(0.5);

                this.time.delayedCall(800, () => {
                    this.scene.start('LevelCompleteScene', { level: this.level });
                });
            } else {
                // Wrong - flash red briefly
                answerSlots1.forEach(slot => slot.setFillStyle(0xff4444));
                answerSlots2.forEach(slot => slot.setFillStyle(0xff4444));
                this.time.delayedCall(500, () => {
                    answerSlots1.forEach(slot => slot.setFillStyle(0x3a3a5a));
                    answerSlots2.forEach(slot => slot.setFillStyle(0x3a3a5a));
                });
            }
        };

        // Create answer slots for word 1
        for (let i = 0; i < wordLen; i++) {
            const x = answer1StartX + i * tileSpacing;
            const bg = this.add.rectangle(x, answer1Y, tileSize, tileSize, 0x3a3a5a)
                .setStrokeStyle(2, 0x6a8aaa)
                .setInteractive({ useHandCursor: true });
            const txt = this.add.text(x, answer1Y, '', {
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerdown', () => {
                if (answer1[i] !== null) {
                    returnTileToScramble(answer1[i]);
                    answer1[i] = null;
                    txt.setText('');
                } else {
                    activeRow = 1;
                    updateRowIndicators();
                }
            });

            answerSlots1.push(bg);
            answerSlots1[i]._txt = txt;
        }

        // Create answer slots for word 2
        for (let i = 0; i < wordLen; i++) {
            const x = answer1StartX + i * tileSpacing;
            const bg = this.add.rectangle(x, answer2Y, tileSize, tileSize, 0x3a3a5a)
                .setStrokeStyle(2, 0xaa6a8a)
                .setInteractive({ useHandCursor: true });
            const txt = this.add.text(x, answer2Y, '', {
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerdown', () => {
                if (answer2[i] !== null) {
                    returnTileToScramble(answer2[i]);
                    answer2[i] = null;
                    txt.setText('');
                } else {
                    activeRow = 2;
                    updateRowIndicators();
                }
            });

            answerSlots2.push(bg);
            answerSlots2[i]._txt = txt;
        }

        // Create scrambled letter tiles
        for (let i = 0; i < scrambled.length; i++) {
            const x = scrambleStartX + i * tileSpacing;
            const bg = this.add.rectangle(x, scrambleY, tileSize, tileSize, 0x4a4a8a)
                .setInteractive({ useHandCursor: true });
            const txt = this.add.text(x, scrambleY, scrambled[i].toUpperCase(), {
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerover', () => { if (bg.visible) bg.setFillStyle(0x6a6aaa); });
            bg.on('pointerout', () => { if (bg.visible) bg.setFillStyle(0x4a4a8a); });

            const tile = { bg, txt, letter: scrambled[i] };
            letterTiles.push(tile);

            bg.on('pointerdown', () => {
                const answer = getActiveAnswer();
                const slots = getActiveSlots();

                // Find first empty slot in active row
                let emptyIndex = -1;
                for (let j = 0; j < wordLen; j++) {
                    if (answer[j] === null) { emptyIndex = j; break; }
                }
                if (emptyIndex === -1) return;

                // Place letter
                answer[emptyIndex] = tile;
                slots[emptyIndex]._txt.setText(scrambled[i].toUpperCase());

                // Hide the tile
                bg.setVisible(false);
                txt.setVisible(false);
                bg.disableInteractive();

                // Auto-switch to other row if current row is full
                const currentFull = !answer.includes(null);
                if (currentFull) {
                    const otherAnswer = activeRow === 1 ? answer2 : answer1;
                    if (otherAnswer.includes(null)) {
                        activeRow = activeRow === 1 ? 2 : 1;
                        updateRowIndicators();
                    }
                }

                // Check if both rows are full
                if (!answer1.includes(null) && !answer2.includes(null)) {
                    checkCompletion();
                }
            });
        }

        // Clear button
        this.createButton(width / 2, answer2Y + 120, 'Clear All', () => {
            for (let i = 0; i < wordLen; i++) {
                if (answer1[i] !== null) {
                    returnTileToScramble(answer1[i]);
                    answer1[i] = null;
                    answerSlots1[i]._txt.setText('');
                }
                if (answer2[i] !== null) {
                    returnTileToScramble(answer2[i]);
                    answer2[i] = null;
                    answerSlots2[i]._txt.setText('');
                }
            }
            activeRow = 1;
            updateRowIndicators();
        });
    }

    createSpotDifferencePuzzle(config) {
        const { width, height } = this.scale;
        const { differences, gridSize } = config;

        const cellSize = 44;
        const cellGap = 4;
        const gridPixels = gridSize * (cellSize + cellGap) - cellGap;
        const gap = 60;
        const leftGridX = width / 2 - gap / 2 - gridPixels;
        const rightGridX = width / 2 + gap / 2;
        const gridY = 130;

        // Instructions
        this.add.text(width / 2, 70, 'Spot the differences! Click them in the right grid.', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Grid labels
        this.add.text(leftGridX + gridPixels / 2, gridY - 20, 'Original', {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#88aacc',
        }).setOrigin(0.5);

        this.add.text(rightGridX + gridPixels / 2, gridY - 20, 'Modified', {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#88aacc',
        }).setOrigin(0.5);

        // Found counter
        let found = 0;
        const foundText = this.add.text(width / 2, 100, `Found: 0/${differences}`, {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Generate base grid colors
        const palette = [0xff4444, 0x4488ff, 0x44dd44, 0xffdd44, 0xff88cc, 0x88ddff, 0xffaa44, 0xaa66ff];
        const baseColors = [];
        for (let r = 0; r < gridSize; r++) {
            baseColors[r] = [];
            for (let c = 0; c < gridSize; c++) {
                baseColors[r][c] = Phaser.Utils.Array.GetRandom(palette);
            }
        }

        // Pick difference positions
        const allPositions = [];
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                allPositions.push({ r, c });
            }
        }
        const diffPositions = Phaser.Utils.Array.Shuffle(allPositions).slice(0, differences);
        const diffSet = new Set(diffPositions.map(p => `${p.r},${p.c}`));

        // Build modified colors
        const modifiedColors = baseColors.map(row => [...row]);
        for (const pos of diffPositions) {
            let newColor;
            do {
                newColor = Phaser.Utils.Array.GetRandom(palette);
            } while (newColor === baseColors[pos.r][pos.c]);
            modifiedColors[pos.r][pos.c] = newColor;
        }

        // Draw left (original) grid
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const x = leftGridX + c * (cellSize + cellGap) + cellSize / 2;
                const y = gridY + r * (cellSize + cellGap) + cellSize / 2;
                this.add.rectangle(x, y, cellSize, cellSize, baseColors[r][c]);
            }
        }

        // Draw right (modified) grid with interactive cells
        const foundSet = new Set();
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const x = rightGridX + c * (cellSize + cellGap) + cellSize / 2;
                const y = gridY + r * (cellSize + cellGap) + cellSize / 2;
                const cell = this.add.rectangle(x, y, cellSize, cellSize, modifiedColors[r][c])
                    .setInteractive({ useHandCursor: true });

                const key = `${r},${c}`;

                cell.on('pointerdown', () => {
                    if (diffSet.has(key) && !foundSet.has(key)) {
                        // Correct - green ring
                        foundSet.add(key);
                        cell.setStrokeStyle(3, 0x44dd44);
                        cell.disableInteractive();
                        found++;
                        foundText.setText(`Found: ${found}/${differences}`);

                        if (found >= differences) {
                            foundText.setColor('#44dd44');
                            this.add.text(width / 2, gridY + gridPixels + 30, 'All differences found!', {
                                fontSize: '24px',
                                fontFamily: 'Arial, sans-serif',
                                color: '#44dd44',
                            }).setOrigin(0.5);

                            this.time.delayedCall(1000, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        }
                    } else if (!foundSet.has(key)) {
                        // Wrong - brief red flash
                        const originalColor = modifiedColors[r][c];
                        cell.setStrokeStyle(3, 0xff4444);
                        this.time.delayedCall(400, () => {
                            cell.setStrokeStyle(0);
                        });
                    }
                });
            }
        }
    }

    createSlidingPuzzle(config) {
        const { width, height } = this.scale;
        const size = config.size;
        const useImage = config.useImage || false;
        const tileSize = size <= 3 ? 90 : size <= 4 ? 70 : 56;
        const gap = 4;
        const totalSize = size * tileSize + (size - 1) * gap;
        const startX = (width - totalSize) / 2 + tileSize / 2;
        const startY = (height - totalSize) / 2 + tileSize / 2 - 10;

        // Generate tile color map for useImage mode
        // Each tile value (1..size*size-1) maps to its solved (row, col) position
        // The color is a unique gradient blend based on that position
        let tileTextures = null;
        if (useImage) {
            tileTextures = {};
            for (let val = 1; val < size * size; val++) {
                const solvedR = Math.floor((val - 1) / size);
                const solvedC = (val - 1) % size;
                // Generate a texture for this tile using geometric pattern
                const key = `slide_tile_${val}`;
                if (this.textures.exists(key)) this.textures.remove(key);
                const gfx = this.add.graphics();
                const halfTile = tileSize / 2;

                // Base color: blend from top-left (red/yellow) to bottom-right (blue/green)
                const rFrac = solvedR / (size - 1);
                const cFrac = solvedC / (size - 1);
                const baseR = Math.floor(220 * (1 - rFrac) + 40 * rFrac);
                const baseG = Math.floor(60 * (1 - cFrac) + 220 * cFrac);
                const baseB = Math.floor(80 * (1 - rFrac) * (1 - cFrac) + 220 * rFrac * cFrac);
                const baseColor = (baseR << 16) | (baseG << 8) | baseB;

                // Fill background
                gfx.fillStyle(baseColor, 1);
                gfx.fillRect(0, 0, tileSize, tileSize);

                // Draw geometric pattern: diagonal stripes
                const stripeColor = ((Math.min(255, baseR + 40)) << 16) |
                    ((Math.min(255, baseG + 40)) << 8) |
                    Math.min(255, baseB + 40);
                gfx.fillStyle(stripeColor, 0.4);
                const stripeW = tileSize / 5;
                for (let s = -tileSize; s < tileSize * 2; s += stripeW * 2) {
                    gfx.fillTriangle(
                        s, 0,
                        s + stripeW, 0,
                        s + tileSize + stripeW, tileSize
                    );
                    gfx.fillTriangle(
                        s + stripeW, 0,
                        s + tileSize + stripeW, tileSize,
                        s + tileSize, tileSize
                    );
                }

                // Draw a circle accent in the center
                const accentR = Math.floor(255 * cFrac);
                const accentG = Math.floor(255 * (1 - rFrac));
                const accentB = Math.floor(200 * rFrac);
                const accentColor = (accentR << 16) | (accentG << 8) | accentB;
                gfx.fillStyle(accentColor, 0.5);
                gfx.fillCircle(halfTile, halfTile, tileSize / 4);

                // Small diamond in corner based on position
                gfx.fillStyle(0xffffff, 0.3);
                const dx = 12 + (solvedC * 6);
                const dy = 12 + (solvedR * 6);
                gfx.fillTriangle(dx, dy - 5, dx + 5, dy, dx, dy + 5);
                gfx.fillTriangle(dx, dy - 5, dx - 5, dy, dx, dy + 5);

                gfx.generateTexture(key, tileSize, tileSize);
                gfx.destroy();
                tileTextures[val] = key;
            }
        }

        // Initialize solved board: 1..N*N-1, 0 = empty
        const board = [];
        for (let r = 0; r < size; r++) {
            board[r] = [];
            for (let c = 0; c < size; c++) {
                const val = r * size + c + 1;
                board[r][c] = val === size * size ? 0 : val;
            }
        }

        // Track empty position
        let emptyR = size - 1;
        let emptyC = size - 1;

        // Shuffle by making random valid moves from solved state (ensures solvability)
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const shuffleMoves = size <= 3 ? 200 : size <= 4 ? 500 : 1000;
        for (let i = 0; i < shuffleMoves; i++) {
            const validMoves = [];
            for (const [dr, dc] of dirs) {
                const nr = emptyR + dr;
                const nc = emptyC + dc;
                if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
                    validMoves.push([nr, nc]);
                }
            }
            const [mr, mc] = validMoves[Math.floor(Math.random() * validMoves.length)];
            board[emptyR][emptyC] = board[mr][mc];
            board[mr][mc] = 0;
            emptyR = mr;
            emptyC = mc;
        }

        let moveCount = 0;
        const instructionMsg = useImage ? 'Reassemble the pattern! No numbers — use colors as your guide.' : 'Moves: 0';
        const moveText = this.add.text(width / 2, 70, instructionMsg, {
            fontSize: useImage ? '16px' : '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        const moveCountText = useImage ? this.add.text(width / 2, 92, 'Moves: 0', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5) : null;

        const tiles = [];

        const renderBoard = () => {
            // Clear old tiles
            tiles.forEach(t => {
                if (t.bg) t.bg.destroy();
                if (t.label) t.label.destroy();
                if (t.img) t.img.destroy();
            });
            tiles.length = 0;

            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    const val = board[r][c];
                    if (val === 0) continue;

                    const x = startX + c * (tileSize + gap);
                    const y = startY + r * (tileSize + gap);

                    let bg, label = null, img = null;

                    if (useImage && tileTextures[val]) {
                        img = this.add.image(x, y, tileTextures[val])
                            .setDisplaySize(tileSize, tileSize)
                            .setInteractive({ useHandCursor: true });

                        // Use a dummy label/bg for consistent cleanup
                        bg = img;
                    } else {
                        bg = this.add.rectangle(x, y, tileSize, tileSize, 0x4a6a9a)
                            .setInteractive({ useHandCursor: true });

                        label = this.add.text(x, y, `${val}`, {
                            fontSize: size <= 3 ? '36px' : size <= 4 ? '28px' : '22px',
                            fontFamily: 'Arial, sans-serif',
                            fontStyle: 'bold',
                            color: '#ffffff',
                        }).setOrigin(0.5);
                    }

                    const tileObj = bg;
                    tileObj.on('pointerdown', () => {
                        // Check if adjacent to empty
                        const dr = Math.abs(r - emptyR);
                        const dc = Math.abs(c - emptyC);
                        if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
                            // Slide tile
                            board[emptyR][emptyC] = board[r][c];
                            board[r][c] = 0;
                            emptyR = r;
                            emptyC = c;
                            moveCount++;
                            if (useImage) {
                                moveCountText.setText(`Moves: ${moveCount}`);
                            } else {
                                moveText.setText(`Moves: ${moveCount}`);
                            }
                            renderBoard();

                            // Check win
                            if (this.checkSlidingPuzzleSolved(board, size)) {
                                this.time.delayedCall(300, () => {
                                    this.scene.start('LevelCompleteScene', { level: this.level });
                                });
                            }
                        }
                    });

                    if (!useImage) {
                        tileObj.on('pointerover', () => {
                            const dr = Math.abs(r - emptyR);
                            const dc = Math.abs(c - emptyC);
                            if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
                                bg.setFillStyle(0x6a8aba);
                            }
                        });
                        tileObj.on('pointerout', () => bg.setFillStyle(0x4a6a9a));
                    }

                    tiles.push({ bg: useImage ? null : bg, label, img });
                }
            }
        };

        renderBoard();
    }

    checkSlidingPuzzleSolved(board, size) {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const expected = r * size + c + 1;
                if (r === size - 1 && c === size - 1) {
                    if (board[r][c] !== 0) return false;
                } else {
                    if (board[r][c] !== expected) return false;
                }
            }
        }
        return true;
    }

    createButton(x, y, label, callback, color = 0x4a4a8a, hoverColor = 0x6a6aaa) {
        const bg = this.add.rectangle(x, y, 220, 44, color)
            .setInteractive({ useHandCursor: true });

        this.add.text(x, y, label, {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        bg.on('pointerover', () => bg.setFillStyle(hoverColor));
        bg.on('pointerout', () => bg.setFillStyle(color));
        bg.on('pointerdown', callback);

        return bg;
    }

    createSequenceLogicPuzzle(config) {
        const { width, height } = this.scale;
        const { sequenceLength, numChoices, interleaved } = config;

        // Predefined sequences with clear single rules
        const sequenceDefs = [
            // Add constant
            { rule: 'add 2', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 2 + i * 2) },
            { rule: 'add 3', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 3 + i * 3) },
            { rule: 'add 5', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 5 + i * 5) },
            { rule: 'add 4', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 1 + i * 4) },
            { rule: 'add 7', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 7 + i * 7) },
            { rule: 'add 6', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 3 + i * 6) },
            // Multiply by constant
            { rule: 'multiply 2', gen: (n) => Array.from({ length: n + 1 }, (_, i) => Math.pow(2, i + 1)) },
            { rule: 'multiply 3', gen: (n) => Array.from({ length: n + 1 }, (_, i) => Math.pow(3, i)) },
            // Simple arithmetic sequences
            { rule: 'squares', gen: (n) => Array.from({ length: n + 1 }, (_, i) => (i + 1) * (i + 1)) },
            { rule: 'triangular', gen: (n) => Array.from({ length: n + 1 }, (_, i) => ((i + 1) * (i + 2)) / 2) },
            { rule: 'odd numbers', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 1 + i * 2) },
            { rule: 'even numbers', gen: (n) => Array.from({ length: n + 1 }, (_, i) => 2 + i * 2) },
            { rule: 'add increasing', gen: (n) => { const s = [1]; for (let i = 1; i <= n; i++) s.push(s[i - 1] + i + 1); return s; } },
        ];

        if (interleaved) {
            this.createInterleavedSequenceLogic(config, sequenceDefs);
            return;
        }

        // Instructions
        this.add.text(width / 2, 70, 'Find the rule! What comes next?', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Pick a random sequence
        const seqDef = Phaser.Utils.Array.GetRandom(sequenceDefs);
        const fullSequence = seqDef.gen(sequenceLength);
        const displayed = fullSequence.slice(0, sequenceLength);
        const correctAnswer = fullSequence[sequenceLength];

        // Display the sequence with a '?' at the end
        const seqY = height / 2 - 60;
        const items = [...displayed.map(String), '?'];
        const itemSpacing = 80;
        const totalW = items.length * itemSpacing;
        const startX = (width - totalW) / 2 + itemSpacing / 2;

        items.forEach((item, i) => {
            const x = startX + i * itemSpacing;
            const isQuestion = item === '?';

            // Background box
            this.add.rectangle(x, seqY, 60, 60, isQuestion ? 0x3a3a6a : 0x2a2a4a)
                .setStrokeStyle(2, isQuestion ? 0x6a6aaa : 0x4a4a6a);

            this.add.text(x, seqY, item, {
                fontSize: isQuestion ? '32px' : '24px',
                fontFamily: 'Arial, sans-serif',
                color: isQuestion ? '#888888' : '#ffffff',
            }).setOrigin(0.5);
        });

        // Generate wrong answers that are distinct from correct answer
        const wrongAnswers = new Set();
        const offsets = [-3, -2, -1, 1, 2, 3, 5, -5, 4, -4];
        let oi = 0;
        while (wrongAnswers.size < numChoices - 1 && oi < offsets.length) {
            const wrong = correctAnswer + offsets[oi];
            if (wrong !== correctAnswer && wrong > 0) {
                wrongAnswers.add(wrong);
            }
            oi++;
        }

        const choices = [correctAnswer, ...wrongAnswers];
        Phaser.Utils.Array.Shuffle(choices);

        // Draw choice buttons
        const choiceY = height / 2 + 60;
        const choicePadding = 30;
        const choiceW = 80;
        const choiceTotalW = numChoices * choiceW + (numChoices - 1) * choicePadding;
        const choiceStartX = (width - choiceTotalW) / 2 + choiceW / 2;

        const feedbackText = this.add.text(width / 2, choiceY + 70, '', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        let solved = false;

        choices.forEach((value, i) => {
            const cx = choiceStartX + i * (choiceW + choicePadding);

            const bg = this.add.rectangle(cx, choiceY, choiceW, 50, 0x2a2a4a)
                .setStrokeStyle(2, 0x4a4a6a)
                .setInteractive({ useHandCursor: true });

            this.add.text(cx, choiceY, String(value), {
                fontSize: '24px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerover', () => {
                if (!solved) bg.setFillStyle(0x4a4a6a);
            });
            bg.on('pointerout', () => {
                if (!solved) bg.setFillStyle(0x2a2a4a);
            });

            bg.on('pointerdown', () => {
                if (solved) return;

                if (value === correctAnswer) {
                    solved = true;
                    feedbackText.setText('Correct!').setColor('#44dd44');

                    // Replace the '?' with the correct answer
                    const lastX = startX + (items.length - 1) * itemSpacing;
                    this.add.rectangle(lastX, seqY, 60, 60, 0x2a6a2a)
                        .setStrokeStyle(2, 0x44dd44);
                    this.add.text(lastX, seqY, String(correctAnswer), {
                        fontSize: '24px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#44dd44',
                    }).setOrigin(0.5);

                    this.time.delayedCall(500, () => {
                        this.scene.start('LevelCompleteScene', { level: this.level });
                    });
                } else {
                    // Wrong - flash red
                    bg.setFillStyle(0xaa0000);
                    feedbackText.setText('Wrong! Try again.');
                    this.time.delayedCall(400, () => {
                        bg.setFillStyle(0x2a2a4a);
                    });
                }
            });
        });
    }

    createInterleavedSequenceLogic(config, sequenceDefs) {
        const { width, height } = this.scale;
        const { sequenceLength, numChoices } = config;

        // Instructions
        this.add.text(width / 2, 50, 'Two rules are interleaved! What comes next?', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 75, 'Odd positions follow one rule, even positions follow another.', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#666666',
        }).setOrigin(0.5);

        // Pick two different sequence definitions
        const shuffled = Phaser.Utils.Array.Shuffle([...sequenceDefs]);
        const seqDefA = shuffled[0]; // odd positions (1st, 3rd, 5th, ...)
        const seqDefB = shuffled[1]; // even positions (2nd, 4th, 6th, ...)

        // Calculate how many terms each sub-sequence needs
        // sequenceLength items displayed + 1 answer
        // Odd positions: indices 0, 2, 4, ... -> ceil((sequenceLength+1)/2) terms
        // Even positions: indices 1, 3, 5, ... -> floor((sequenceLength+1)/2) terms
        const oddCount = Math.ceil((sequenceLength + 1) / 2);
        const evenCount = Math.floor((sequenceLength + 1) / 2);
        const seqA = seqDefA.gen(oddCount - 1);  // gen(n) produces n+1 elements
        const seqB = seqDefB.gen(evenCount - 1);

        // Interleave the two sequences
        const fullInterleaved = [];
        let ai = 0, bi = 0;
        for (let i = 0; i < sequenceLength + 1; i++) {
            if (i % 2 === 0) {
                fullInterleaved.push(seqA[ai++]);
            } else {
                fullInterleaved.push(seqB[bi++]);
            }
        }

        const displayed = fullInterleaved.slice(0, sequenceLength);
        const correctAnswer = fullInterleaved[sequenceLength];

        // Display the sequence with a '?' at the end
        // Use smaller spacing for longer sequences
        const seqY = height / 2 - 60;
        const items = [...displayed.map(String), '?'];
        const itemSpacing = Math.min(70, (width - 80) / items.length);
        const totalW = items.length * itemSpacing;
        const startX = (width - totalW) / 2 + itemSpacing / 2;
        const boxSize = Math.min(55, itemSpacing - 10);

        // Color odd/even positions differently to hint at the two rules
        const oddColor = 0x2a3a5a;   // blue tint for odd positions
        const evenColor = 0x3a2a4a;  // purple tint for even positions
        const oddBorder = 0x4a6a8a;
        const evenBorder = 0x6a4a7a;

        items.forEach((item, i) => {
            const x = startX + i * itemSpacing;
            const isQuestion = item === '?';
            const isOdd = i % 2 === 0; // 0-indexed, so index 0 = position 1 (odd)

            const bgColor = isQuestion ? 0x3a3a6a : (isOdd ? oddColor : evenColor);
            const borderColor = isQuestion ? 0x6a6aaa : (isOdd ? oddBorder : evenBorder);

            this.add.rectangle(x, seqY, boxSize, boxSize, bgColor)
                .setStrokeStyle(2, borderColor);

            const fontSize = item.length > 3 ? '18px' : (isQuestion ? '28px' : '22px');
            this.add.text(x, seqY, item, {
                fontSize: fontSize,
                fontFamily: 'Arial, sans-serif',
                color: isQuestion ? '#888888' : '#ffffff',
            }).setOrigin(0.5);
        });

        // Legend for colors
        this.add.rectangle(width / 2 - 80, seqY + 45, 14, 14, oddColor).setStrokeStyle(1, oddBorder);
        this.add.text(width / 2 - 68, seqY + 45, 'Rule A', {
            fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#4a6a8a',
        }).setOrigin(0, 0.5);

        this.add.rectangle(width / 2 + 30, seqY + 45, 14, 14, evenColor).setStrokeStyle(1, evenBorder);
        this.add.text(width / 2 + 42, seqY + 45, 'Rule B', {
            fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#6a4a7a',
        }).setOrigin(0, 0.5);

        // Generate wrong answers
        const wrongAnswers = new Set();
        const offsets = [-3, -2, -1, 1, 2, 3, 5, -5, 4, -4, 6, -6, 8, -8];
        let oi = 0;
        while (wrongAnswers.size < numChoices - 1 && oi < offsets.length) {
            const wrong = correctAnswer + offsets[oi];
            if (wrong !== correctAnswer && wrong > 0) {
                wrongAnswers.add(wrong);
            }
            oi++;
        }

        const choices = [correctAnswer, ...wrongAnswers];
        Phaser.Utils.Array.Shuffle(choices);

        // Draw choice buttons
        const choiceY = height / 2 + 70;
        const choicePadding = 30;
        const choiceW = 80;
        const choiceTotalW = numChoices * choiceW + (numChoices - 1) * choicePadding;
        const choiceStartX = (width - choiceTotalW) / 2 + choiceW / 2;

        const feedbackText = this.add.text(width / 2, choiceY + 70, '', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        let solved = false;

        choices.forEach((value, i) => {
            const cx = choiceStartX + i * (choiceW + choicePadding);

            const bg = this.add.rectangle(cx, choiceY, choiceW, 50, 0x2a2a4a)
                .setStrokeStyle(2, 0x4a4a6a)
                .setInteractive({ useHandCursor: true });

            this.add.text(cx, choiceY, String(value), {
                fontSize: '24px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerover', () => {
                if (!solved) bg.setFillStyle(0x4a4a6a);
            });
            bg.on('pointerout', () => {
                if (!solved) bg.setFillStyle(0x2a2a4a);
            });

            bg.on('pointerdown', () => {
                if (solved) return;

                if (value === correctAnswer) {
                    solved = true;
                    feedbackText.setText('Correct!').setColor('#44dd44');

                    // Replace the '?' with the correct answer
                    const lastX = startX + (items.length - 1) * itemSpacing;
                    this.add.rectangle(lastX, seqY, boxSize, boxSize, 0x2a6a2a)
                        .setStrokeStyle(2, 0x44dd44);
                    this.add.text(lastX, seqY, String(correctAnswer), {
                        fontSize: '24px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#44dd44',
                    }).setOrigin(0.5);

                    this.time.delayedCall(500, () => {
                        this.scene.start('LevelCompleteScene', { level: this.level });
                    });
                } else {
                    bg.setFillStyle(0xaa0000);
                    feedbackText.setText('Wrong! Try again.');
                    this.time.delayedCall(400, () => {
                        bg.setFillStyle(0x2a2a4a);
                    });
                }
            });
        });
    }

    createLightTogglePuzzle(config) {
        const { width, height } = this.scale;
        const { size, lockedCells: numLocked } = config;

        // Instructions
        this.add.text(width / 2, 70, 'Turn ALL lights ON!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        const instrDetail = numLocked
            ? 'Clicking a cell toggles it and its neighbors. Locked cells cannot be clicked.'
            : 'Clicking a cell toggles it and its neighbors';
        this.add.text(width / 2, 95, instrDetail, {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#666666',
        }).setOrigin(0.5);

        // Determine locked cell positions
        const locked = [];
        if (numLocked && numLocked > 0) {
            const allPositions = [];
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    allPositions.push([r, c]);
                }
            }
            const shuffled = Phaser.Utils.Array.Shuffle(allPositions);
            for (let i = 0; i < numLocked; i++) {
                locked.push(shuffled[i]);
            }
        }
        const isLocked = (r, c) => locked.some(([lr, lc]) => lr === r && lc === c);

        // Grid state: true = lit, false = dark
        const grid = [];
        for (let r = 0; r < size; r++) {
            grid[r] = [];
            for (let c = 0; c < size; c++) {
                grid[r][c] = true; // start all on
            }
        }

        // Apply random toggles from all-on state to guarantee solvability
        // Only toggle from non-locked positions so the puzzle is solvable
        const clickable = [];
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (!isLocked(r, c)) clickable.push([r, c]);
            }
        }
        const numToggles = Phaser.Math.Between(3, clickable.length);
        for (let t = 0; t < numToggles; t++) {
            const idx = Phaser.Math.Between(0, clickable.length - 1);
            const [tr, tc] = clickable[idx];
            // Toggle cell and neighbors
            grid[tr][tc] = !grid[tr][tc];
            if (tr > 0) grid[tr - 1][tc] = !grid[tr - 1][tc];
            if (tr < size - 1) grid[tr + 1][tc] = !grid[tr + 1][tc];
            if (tc > 0) grid[tr][tc - 1] = !grid[tr][tc - 1];
            if (tc < size - 1) grid[tr][tc + 1] = !grid[tr][tc + 1];
        }

        // If all are already on after randomization, do one more toggle
        const allOn = () => grid.every(row => row.every(cell => cell));
        if (allOn()) {
            const idx = Phaser.Math.Between(0, clickable.length - 1);
            const [mr, mc] = clickable[idx];
            grid[mr][mc] = !grid[mr][mc];
            if (mr > 0) grid[mr - 1][mc] = !grid[mr - 1][mc];
            if (mr < size - 1) grid[mr + 1][mc] = !grid[mr + 1][mc];
            if (mc > 0) grid[mr][mc - 1] = !grid[mr][mc - 1];
            if (mc < size - 1) grid[mr][mc + 1] = !grid[mr][mc + 1];
        }

        let moves = 0;
        let solved = false;

        // Move counter
        const moveText = this.add.text(width / 2, 130, 'Moves: 0', {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Draw the grid
        const cellSize = numLocked ? Math.min(80, Math.floor((Math.min(width, height) - 200) / size)) : 80;
        const gap = 6;
        const totalSize = size * cellSize + (size - 1) * gap;
        const startX = (width - totalSize) / 2 + cellSize / 2;
        const startY = (height - totalSize) / 2 + cellSize / 2 + 30;

        const cellGraphics = [];

        const litColor = 0xffdd44;
        const darkColor = 0x444444;
        const lockedLitColor = 0xccaa22;
        const lockedDarkColor = 0x333333;

        const updateCell = (r, c) => {
            if (isLocked(r, c)) {
                cellGraphics[r][c].setFillStyle(grid[r][c] ? lockedLitColor : lockedDarkColor);
            } else {
                cellGraphics[r][c].setFillStyle(grid[r][c] ? litColor : darkColor);
            }
        };

        for (let r = 0; r < size; r++) {
            cellGraphics[r] = [];
            for (let c = 0; c < size; c++) {
                const x = startX + c * (cellSize + gap);
                const y = startY + r * (cellSize + gap);
                const cellIsLocked = isLocked(r, c);
                const color = cellIsLocked
                    ? (grid[r][c] ? lockedLitColor : lockedDarkColor)
                    : (grid[r][c] ? litColor : darkColor);

                const cell = this.add.rectangle(x, y, cellSize, cellSize, color)
                    .setStrokeStyle(2, cellIsLocked ? 0xaa6600 : 0x888888);

                cellGraphics[r][c] = cell;

                if (cellIsLocked) {
                    // Draw lock icon on locked cells
                    const lockSize = Math.floor(cellSize * 0.35);
                    this.add.text(x, y, '\u{1F512}', {
                        fontSize: `${lockSize}px`,
                        fontFamily: 'Arial, sans-serif',
                    }).setOrigin(0.5);
                } else {
                    cell.setInteractive({ useHandCursor: true });

                    cell.on('pointerdown', () => {
                        if (solved) return;

                        // Toggle this cell and orthogonal neighbors
                        const toggles = [[r, c], [r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
                        toggles.forEach(([tr, tc]) => {
                            if (tr >= 0 && tr < size && tc >= 0 && tc < size) {
                                grid[tr][tc] = !grid[tr][tc];
                                updateCell(tr, tc);
                            }
                        });

                        moves++;
                        moveText.setText(`Moves: ${moves}`);

                        // Check win
                        if (allOn()) {
                            solved = true;
                            moveText.setText(`Solved in ${moves} moves!`).setColor('#44dd44');
                            this.time.delayedCall(800, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        }
                    });
                }
            }
        }
    }

    createColorChainPuzzle(config) {
        const { width, height } = this.scale;
        const { gridSize, colors, fillBoard } = config;

        // Instructions
        const instrText = fillBoard
            ? 'Connect matching dots — fill every cell!'
            : 'Connect matching colored dots!';
        this.add.text(width / 2, 70, instrText, {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 95, 'Click a dot to start, then click adjacent cells. Click a path to clear it.', {
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            color: '#666666',
        }).setOrigin(0.5);

        const allColorValues = [0xff4444, 0x44dd44, 0x4488ff, 0xffdd44, 0xaa44ff, 0xff8844, 0x44dddd, 0xff44aa, 0x88ff44, 0xffd700];
        let colorValues, endpoints;

        if (gridSize === 9 && colors === 10 && fillBoard) {
            // Hardcoded solvable 9x9 puzzle with 10 color pairs that fills all 81 cells
            // Path 0 (red):    (0,0)→(1,0)→(2,0)→(2,1)→(1,1)→(0,1)→(0,2)→(0,3)
            // Path 1 (green):  (1,2)→(1,3)→(1,4)→(0,4)→(0,5)→(0,6)→(1,6)→(1,5)
            // Path 2 (blue):   (0,7)→(0,8)→(1,8)→(1,7)→(2,7)→(2,8)→(3,8)→(3,7)
            // Path 3 (yellow): (2,2)→(2,3)→(2,4)→(2,5)→(2,6)→(3,6)→(3,5)→(3,4)→(3,3)
            // Path 4 (purple): (3,0)→(3,1)→(3,2)→(4,2)→(4,1)→(4,0)→(5,0)→(5,1)→(5,2)
            // Path 5 (orange): (4,3)→(4,4)→(4,5)→(4,6)→(4,7)→(4,8)→(5,8)→(5,7)
            // Path 6 (cyan):   (5,3)→(5,4)→(5,5)→(5,6)→(6,6)→(6,5)→(6,4)→(6,3)
            // Path 7 (pink):   (6,7)→(6,8)→(7,8)→(7,7)→(7,6)→(8,6)→(8,7)→(8,8)
            // Path 8 (lime):   (6,0)→(6,1)→(6,2)→(7,2)→(7,1)→(7,0)→(8,0)→(8,1)→(8,2)
            // Path 9 (gold):   (7,3)→(7,4)→(7,5)→(8,5)→(8,4)→(8,3)
            colorValues = allColorValues.slice(0, 10);
            endpoints = [
                { color: 0, start: { r: 0, c: 0 }, end: { r: 0, c: 3 } },
                { color: 1, start: { r: 1, c: 2 }, end: { r: 1, c: 5 } },
                { color: 2, start: { r: 0, c: 7 }, end: { r: 3, c: 7 } },
                { color: 3, start: { r: 2, c: 2 }, end: { r: 3, c: 3 } },
                { color: 4, start: { r: 3, c: 0 }, end: { r: 5, c: 2 } },
                { color: 5, start: { r: 4, c: 3 }, end: { r: 5, c: 7 } },
                { color: 6, start: { r: 5, c: 3 }, end: { r: 6, c: 3 } },
                { color: 7, start: { r: 6, c: 7 }, end: { r: 8, c: 8 } },
                { color: 8, start: { r: 6, c: 0 }, end: { r: 8, c: 2 } },
                { color: 9, start: { r: 7, c: 3 }, end: { r: 8, c: 3 } },
            ];
        } else if (gridSize === 7 && colors === 8 && fillBoard) {
            // Hardcoded solvable 7x7 puzzle with 8 color pairs that fills all 49 cells
            // Path 0 (red):    (0,0)→(0,1)→(1,1)→(1,0)→(2,0)→(3,0)
            // Path 1 (green):  (0,2)→(0,3)→(0,4)→(1,4)→(1,3)→(1,2)→(2,2)
            // Path 2 (blue):   (0,5)→(0,6)→(1,6)→(1,5)→(2,5)→(2,6)
            // Path 3 (yellow): (2,1)→(3,1)→(3,2)→(3,3)→(2,3)→(2,4)
            // Path 4 (purple): (3,4)→(3,5)→(3,6)→(4,6)→(4,5)→(4,4)
            // Path 5 (orange): (4,0)→(4,1)→(4,2)→(4,3)→(5,3)→(5,2)
            // Path 6 (cyan):   (5,4)→(5,5)→(5,6)→(6,6)→(6,5)→(6,4)
            // Path 7 (pink):   (5,1)→(5,0)→(6,0)→(6,1)→(6,2)→(6,3)
            colorValues = allColorValues.slice(0, 8);
            endpoints = [
                { color: 0, start: { r: 0, c: 0 }, end: { r: 3, c: 0 } },
                { color: 1, start: { r: 0, c: 2 }, end: { r: 2, c: 2 } },
                { color: 2, start: { r: 0, c: 5 }, end: { r: 2, c: 6 } },
                { color: 3, start: { r: 2, c: 1 }, end: { r: 2, c: 4 } },
                { color: 4, start: { r: 3, c: 4 }, end: { r: 4, c: 4 } },
                { color: 5, start: { r: 4, c: 0 }, end: { r: 5, c: 2 } },
                { color: 6, start: { r: 5, c: 4 }, end: { r: 6, c: 4 } },
                { color: 7, start: { r: 5, c: 1 }, end: { r: 6, c: 3 } },
            ];
        } else if (gridSize === 6 && colors === 5 && fillBoard) {
            // Hardcoded solvable 6x6 puzzle with 5 color pairs that fills all 36 cells
            // Path A (red):    (0,0)→(0,1)→(0,2)→(1,2)→(1,1)→(1,0)→(2,0)
            // Path B (green):  (0,3)→(0,4)→(0,5)→(1,5)→(1,4)→(1,3)→(2,3)
            // Path C (blue):   (2,1)→(2,2)→(3,2)→(3,1)→(3,0)→(4,0)→(4,1)→(4,2)
            // Path D (yellow): (2,4)→(2,5)→(3,5)→(3,4)→(3,3)→(4,3)→(4,4)
            // Path E (purple): (4,5)→(5,5)→(5,4)→(5,3)→(5,2)→(5,1)→(5,0)
            colorValues = allColorValues.slice(0, 5);
            endpoints = [
                { color: 0, start: { r: 0, c: 0 }, end: { r: 2, c: 0 } },
                { color: 1, start: { r: 0, c: 3 }, end: { r: 2, c: 3 } },
                { color: 2, start: { r: 2, c: 1 }, end: { r: 4, c: 2 } },
                { color: 3, start: { r: 2, c: 4 }, end: { r: 4, c: 4 } },
                { color: 4, start: { r: 4, c: 5 }, end: { r: 5, c: 0 } },
            ];
        } else {
            // Default 5x5 with 3 color pairs
            // Color 0 (red): (0,0) -> (2,2)
            // Color 1 (green): (0,4) -> (4,0)
            // Color 2 (blue): (4,4) -> (2,0)
            colorValues = allColorValues.slice(0, 3);
            endpoints = [
                { color: 0, start: { r: 0, c: 0 }, end: { r: 2, c: 2 } },
                { color: 1, start: { r: 0, c: 4 }, end: { r: 4, c: 0 } },
                { color: 2, start: { r: 4, c: 4 }, end: { r: 2, c: 0 } },
            ];
        }

        // Build endpoint lookup: grid[r][c] -> color index, or -1
        const endpointMap = [];
        for (let r = 0; r < gridSize; r++) {
            endpointMap[r] = [];
            for (let c = 0; c < gridSize; c++) {
                endpointMap[r][c] = -1;
            }
        }
        endpoints.forEach(ep => {
            endpointMap[ep.start.r][ep.start.c] = ep.color;
            endpointMap[ep.end.r][ep.end.c] = ep.color;
        });

        // Paths: paths[colorIndex] = [{r, c}, ...]
        const paths = [];
        for (let i = 0; i < colors; i++) {
            paths[i] = [];
        }

        // Track which color occupies each cell: -1 = empty
        const cellOwner = [];
        for (let r = 0; r < gridSize; r++) {
            cellOwner[r] = [];
            for (let c = 0; c < gridSize; c++) {
                cellOwner[r][c] = -1;
            }
        }

        let activeColor = -1; // Currently drawing color
        let solved = false;

        // Drawing
        const cellSize = gridSize <= 5 ? 70 : gridSize <= 7 ? 58 : 44;
        const gap = 4;
        const totalSize = gridSize * cellSize + (gridSize - 1) * gap;
        const startX = (width - totalSize) / 2 + cellSize / 2;
        const startY = (gridSize <= 7 ? 140 : 115) + cellSize / 2;

        const cellGraphics = [];
        const dotGraphics = [];
        const pathGraphicsGroup = this.add.group();

        // Status text
        const infoGap = gridSize <= 7 ? 25 : 16;
        const infoBase = startY + totalSize + (gridSize <= 7 ? 20 : 6);
        const statusText = this.add.text(width / 2, infoBase, '', {
            fontSize: gridSize <= 7 ? '16px' : '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const pairsText = this.add.text(width / 2, infoBase + infoGap, 'Pairs connected: 0 / ' + colors, {
            fontSize: gridSize <= 7 ? '16px' : '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Unfilled cells counter (only shown when fillBoard is enabled)
        const totalCells = gridSize * gridSize;
        let unfilledText = null;
        if (fillBoard) {
            unfilledText = this.add.text(width / 2, infoBase + infoGap * 2, 'Unfilled cells: ' + totalCells, {
                fontSize: gridSize <= 7 ? '16px' : '14px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffdd44',
            }).setOrigin(0.5);
        }

        const isAdjacent = (r1, c1, r2, c2) => {
            return (Math.abs(r1 - r2) + Math.abs(c1 - c2)) === 1;
        };

        const countConnected = () => {
            let count = 0;
            endpoints.forEach(ep => {
                const path = paths[ep.color];
                if (path.length >= 2) {
                    const first = path[0];
                    const last = path[path.length - 1];
                    const startsAtEndpoint = (first.r === ep.start.r && first.c === ep.start.c) || (first.r === ep.end.r && first.c === ep.end.c);
                    const endsAtEndpoint = (last.r === ep.start.r && last.c === ep.start.c) || (last.r === ep.end.r && last.c === ep.end.c);
                    if (startsAtEndpoint && endsAtEndpoint && !(first.r === last.r && first.c === last.c)) {
                        count++;
                    }
                }
            });
            return count;
        };

        const clearPath = (colorIdx) => {
            paths[colorIdx].forEach(p => {
                if (endpointMap[p.r][p.c] === -1) {
                    cellOwner[p.r][p.c] = -1;
                }
            });
            // Keep endpoints owned
            paths[colorIdx] = [];
            // Clear endpoint ownership too
            endpoints[colorIdx] && (() => {
                const ep = endpoints[colorIdx];
                cellOwner[ep.start.r][ep.start.c] = -1;
                cellOwner[ep.end.r][ep.end.c] = -1;
            })();
        };

        const redrawGrid = () => {
            // Clear path graphics
            pathGraphicsGroup.clear(true, true);

            // Reset cell backgrounds
            for (let r = 0; r < gridSize; r++) {
                for (let c = 0; c < gridSize; c++) {
                    if (cellOwner[r][c] >= 0 && endpointMap[r][c] === -1) {
                        cellGraphics[r][c].setFillStyle(Phaser.Display.Color.GetColor(
                            (colorValues[cellOwner[r][c]] >> 16) & 0xff,
                            (colorValues[cellOwner[r][c]] >> 8) & 0xff,
                            colorValues[cellOwner[r][c]] & 0xff
                        ), 0.3);
                    } else if (endpointMap[r][c] === -1) {
                        cellGraphics[r][c].setFillStyle(0x2a2a4a);
                    }
                }
            }

            // Draw path lines
            for (let ci = 0; ci < colors; ci++) {
                const path = paths[ci];
                if (path.length >= 2) {
                    for (let i = 0; i < path.length - 1; i++) {
                        const x1 = startX + path[i].c * (cellSize + gap);
                        const y1 = startY + path[i].r * (cellSize + gap);
                        const x2 = startX + path[i + 1].c * (cellSize + gap);
                        const y2 = startY + path[i + 1].r * (cellSize + gap);

                        const line = this.add.rectangle(
                            (x1 + x2) / 2, (y1 + y2) / 2,
                            x1 === x2 ? 8 : Math.abs(x2 - x1) + 8,
                            y1 === y2 ? 8 : Math.abs(y2 - y1) + 8,
                            colorValues[ci]
                        ).setAlpha(0.7);
                        pathGraphicsGroup.add(line);
                    }
                }
            }

            const connected = countConnected();
            pairsText.setText('Pairs connected: ' + connected + ' / ' + colors);

            if (fillBoard && unfilledText) {
                let filledCount = 0;
                for (let r = 0; r < gridSize; r++) {
                    for (let c = 0; c < gridSize; c++) {
                        if (cellOwner[r][c] >= 0) filledCount++;
                    }
                }
                const unfilled = totalCells - filledCount;
                unfilledText.setText('Unfilled cells: ' + unfilled);
                unfilledText.setColor(unfilled === 0 ? '#44dd44' : '#ffdd44');
            }
        };

        // Create grid cells
        for (let r = 0; r < gridSize; r++) {
            cellGraphics[r] = [];
            dotGraphics[r] = [];
            for (let c = 0; c < gridSize; c++) {
                const x = startX + c * (cellSize + gap);
                const y = startY + r * (cellSize + gap);

                const cell = this.add.rectangle(x, y, cellSize, cellSize, 0x2a2a4a)
                    .setStrokeStyle(1, 0x444466)
                    .setInteractive({ useHandCursor: true });

                cellGraphics[r][c] = cell;

                // Draw endpoint dots
                if (endpointMap[r][c] >= 0) {
                    const dotRadius = gridSize <= 7 ? 18 : 14;
                    const dot = this.add.circle(x, y, dotRadius, colorValues[endpointMap[r][c]])
                        .setStrokeStyle(2, 0xffffff);
                    dotGraphics[r][c] = dot;
                }

                cell.on('pointerdown', () => {
                    if (solved) return;

                    const ep = endpointMap[r][c];
                    const owner = cellOwner[r][c];

                    // If clicking on a cell that has a path through it, clear that path
                    if (activeColor === -1 && owner >= 0 && ep === -1) {
                        clearPath(owner);
                        redrawGrid();
                        statusText.setText('Path cleared. Click a dot to start.');
                        return;
                    }

                    // If clicking an endpoint with an existing path, clear it to restart
                    if (activeColor === -1 && ep >= 0 && paths[ep].length > 0) {
                        clearPath(ep);
                        redrawGrid();
                        // Start new path from this endpoint
                        activeColor = ep;
                        paths[ep] = [{ r, c }];
                        cellOwner[r][c] = ep;
                        statusText.setText('Drawing... click adjacent cells.');
                        return;
                    }

                    // If no active color and clicking an endpoint, start drawing
                    if (activeColor === -1 && ep >= 0) {
                        activeColor = ep;
                        paths[ep] = [{ r, c }];
                        cellOwner[r][c] = ep;
                        statusText.setText('Drawing... click adjacent cells.');
                        return;
                    }

                    // If active and clicking...
                    if (activeColor >= 0) {
                        const path = paths[activeColor];
                        const last = path[path.length - 1];

                        // Must be adjacent
                        if (!isAdjacent(last.r, last.c, r, c)) {
                            statusText.setText('Must click an adjacent cell!');
                            return;
                        }

                        // If clicking the previous cell in path, undo last step
                        if (path.length >= 2 && path[path.length - 2].r === r && path[path.length - 2].c === c) {
                            const removed = path.pop();
                            if (endpointMap[removed.r][removed.c] === -1) {
                                cellOwner[removed.r][removed.c] = -1;
                            }
                            redrawGrid();
                            return;
                        }

                        // Can't cross other paths or revisit own path
                        if (cellOwner[r][c] >= 0 && !(endpointMap[r][c] === activeColor && path.length >= 1)) {
                            statusText.setText('Paths cannot cross!');
                            return;
                        }

                        // If it's already in our own path (not the matching endpoint), block
                        if (cellOwner[r][c] === activeColor && endpointMap[r][c] !== activeColor) {
                            statusText.setText('Cannot revisit own path!');
                            return;
                        }

                        // If reaching the other endpoint of the same color, complete this path
                        if (endpointMap[r][c] === activeColor) {
                            path.push({ r, c });
                            cellOwner[r][c] = activeColor;
                            activeColor = -1;
                            statusText.setText('Path connected!');
                            redrawGrid();

                            // Check win
                            if (countConnected() === colors) {
                                // If fillBoard, also require all cells filled
                                if (fillBoard) {
                                    let allFilled = true;
                                    for (let cr = 0; cr < gridSize && allFilled; cr++) {
                                        for (let cc = 0; cc < gridSize && allFilled; cc++) {
                                            if (cellOwner[cr][cc] < 0) allFilled = false;
                                        }
                                    }
                                    if (!allFilled) {
                                        statusText.setText('All pairs connected, but fill every cell!').setColor('#ffdd44');
                                        return;
                                    }
                                }
                                solved = true;
                                statusText.setText(fillBoard ? 'Board filled — all connected!' : 'All pairs connected!').setColor('#44dd44');
                                this.time.delayedCall(1000, () => {
                                    this.scene.start('LevelCompleteScene', { level: this.level });
                                });
                            }
                            return;
                        }

                        // Normal empty cell
                        path.push({ r, c });
                        cellOwner[r][c] = activeColor;
                        redrawGrid();
                    }
                });
            }
        }
    }
    createJigsawPuzzle(config) {
        const { width, height } = this.scale;
        const { rows, cols, canRotate } = config;
        const totalPieces = rows * cols;

        // Instructions
        const instrText = canRotate
            ? 'Click a piece, then click a grid slot to place it!\nRight-click or double-click a selected piece to rotate it.'
            : 'Click a piece, then click a grid slot to place it!';
        this.add.text(width / 2, 70, instrText, {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
            align: 'center',
        }).setOrigin(0.5);

        // Pieces placed counter
        let placedCount = 0;
        const countText = this.add.text(width / 2, height - 40, `Pieces placed: 0 / ${totalPieces}`, {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Grid dimensions — scale piece size down for larger grids
        const maxGridWidth = width - 40;
        const maxGridHeight = (height - 200) * 0.55;
        const pieceSize = Math.min(80, Math.floor(maxGridWidth / cols), Math.floor(maxGridHeight / rows));
        const gridW = cols * pieceSize;
        const gridH = rows * pieceSize;
        const gridX = width / 2 - gridW / 2;
        const gridY = canRotate ? 110 : 140;

        // Generate colors for any grid size
        const allColors = [
            0xe74c3c, 0xf39c12, 0xf1c40f, 0x2ecc71,
            0x3498db, 0x9b59b6, 0x1abc9c, 0xe67e22,
            0xc0392b, 0x16a085, 0x2980b9, 0x8e44ad,
            0xd35400, 0x27ae60, 0x2c3e50, 0xf06292,
        ];

        // Complex pattern mode for large grids (5x5+)
        const useComplexPattern = totalPieces >= 25;
        // Additional palette for sub-patterns
        const patternColors = [
            0xc0392b, 0xe74c3c, 0xd35400, 0xe67e22, 0xf39c12,
            0xf1c40f, 0x27ae60, 0x2ecc71, 0x16a085, 0x1abc9c,
            0x2980b9, 0x3498db, 0x8e44ad, 0x9b59b6, 0xf06292,
            0x2c3e50, 0x7f8c8d, 0xbdc3c7, 0xd4a574, 0x6c5ce7,
        ];
        // Generate unique quadrant color patterns per piece using hash-like mixing
        const getQuadrantColors = (r, c) => {
            const seed = r * 7 + c * 13 + r * c * 3;
            return [
                patternColors[(seed + r * 3) % patternColors.length],
                patternColors[(seed + c * 5 + 7) % patternColors.length],
                patternColors[(seed + r + c * 4 + 11) % patternColors.length],
                patternColors[(seed + r * 2 + c + 3) % patternColors.length],
            ];
        };

        // Draw target grid outlines
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = gridX + c * pieceSize;
                const y = gridY + r * pieceSize;
                this.add.rectangle(x + pieceSize / 2, y + pieceSize / 2, pieceSize, pieceSize, 0x333333)
                    .setStrokeStyle(2, 0x666666);
            }
        }

        // Grid label
        this.add.text(width / 2, gridY + gridH + 15, 'Target Grid', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#666666',
        }).setOrigin(0.5);

        // Track placed pieces on the grid
        const grid = Array.from({ length: rows }, () => Array(cols).fill(null));

        // Selection state
        let selectedPiece = null;
        let selectionHighlight = null;

        // Helper to update selection highlight position
        const updateHighlight = (piece) => {
            if (selectionHighlight) {
                selectionHighlight.destroy();
                selectionHighlight = null;
            }
            selectionHighlight = this.add.rectangle(
                piece.rect.x, piece.rect.y,
                pieceSize + 4, pieceSize + 4
            ).setStrokeStyle(3, 0xffff00).setFillStyle(0xffff00, 0.15)
                .setAngle(piece.rotation || 0);
        };

        // Rotate function for canRotate mode
        const rotatePiece = (piece) => {
            if (!piece || piece.placed) return;
            piece.rotation = ((piece.rotation || 0) + 90) % 360;
            piece.rect.setAngle(piece.rotation);
            piece.label.setAngle(piece.rotation);
            if (piece.rotIndicator) piece.rotIndicator.setAngle(piece.rotation);
            if (selectedPiece === piece) {
                updateHighlight(piece);
            }
        };

        // Create the scattered pieces
        const pieces = [];
        const scatterMinX = 60;
        const scatterMaxX = width - 60;
        const scatterMinY = gridY + gridH + 40;
        const scatterMaxY = height - 70;

        // Disable default context menu for rotation support
        if (canRotate) {
            this.input.mouse.disableContextMenu();
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const colorIdx = (r * cols + c) % allColors.length;
                const color = allColors[colorIdx];
                const sx = Phaser.Math.Between(scatterMinX, scatterMaxX);
                const sy = Phaser.Math.Between(scatterMinY, scatterMaxY);

                let pieceRect;
                if (useComplexPattern) {
                    // Draw a complex multi-colored pattern as a single Graphics object
                    const gfx = this.add.graphics();
                    const half = (pieceSize - 4) / 2;
                    const qColors = getQuadrantColors(r, c);
                    // Four colored quadrants
                    gfx.fillStyle(qColors[0], 1); gfx.fillRect(-half, -half, half, half);
                    gfx.fillStyle(qColors[1], 1); gfx.fillRect(0, -half, half, half);
                    gfx.fillStyle(qColors[2], 1); gfx.fillRect(-half, 0, half, half);
                    gfx.fillStyle(qColors[3], 1); gfx.fillRect(0, 0, half, half);
                    // Center diamond
                    const ds = half * 0.35;
                    gfx.fillStyle(color, 1);
                    gfx.fillPoints([
                        { x: 0, y: -ds }, { x: ds, y: 0 },
                        { x: 0, y: ds }, { x: -ds, y: 0 },
                    ], true);
                    // Thin cross lines for visual noise
                    gfx.lineStyle(1, 0xffffff, 0.3);
                    gfx.lineBetween(-half, 0, half, 0);
                    gfx.lineBetween(0, -half, 0, half);
                    // Border
                    gfx.lineStyle(2, 0xffffff, 0.5);
                    gfx.strokeRect(-half, -half, pieceSize - 4, pieceSize - 4);
                    gfx.setPosition(sx, sy);
                    // Make interactive with a hit area
                    gfx.setInteractive(
                        new Phaser.Geom.Rectangle(-half, -half, pieceSize - 4, pieceSize - 4),
                        Phaser.Geom.Rectangle.Contains
                    );
                    gfx.input.cursor = 'pointer';
                    pieceRect = gfx;
                } else {
                    pieceRect = this.add.rectangle(sx, sy, pieceSize - 4, pieceSize - 4, color)
                        .setStrokeStyle(2, 0xffffff, 0.5)
                        .setInteractive({ useHandCursor: true });
                }

                // Draw a small label on the piece showing its number
                const label = this.add.text(sx, sy, `${r * cols + c + 1}`, {
                    fontSize: pieceSize > 60 ? '20px' : '14px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                    fontStyle: 'bold',
                }).setOrigin(0.5);

                const piece = {
                    row: r,
                    col: c,
                    rect: pieceRect,
                    label: label,
                    placed: false,
                    origX: sx,
                    origY: sy,
                    rotation: 0,
                    rotIndicator: null,
                };

                // Add a small triangle indicator for rotation orientation
                if (canRotate) {
                    // Randomize initial rotation
                    const startRot = [0, 90, 180, 270][Phaser.Math.Between(0, 3)];
                    piece.rotation = startRot;
                    pieceRect.setAngle(startRot);
                    label.setAngle(startRot);
                    // Small arrow indicator at top of piece
                    const indicator = this.add.triangle(
                        sx, sy - pieceSize / 2 + 10,
                        0, 8, -5, 0, 5, 0,
                        0xffffff, 0.7
                    );
                    indicator.setAngle(startRot);
                    piece.rotIndicator = indicator;
                }

                pieces.push(piece);

                pieceRect.on('pointerdown', (pointer) => {
                    if (piece.placed) return;

                    // Right-click rotates selected piece
                    if (canRotate && pointer.rightButtonDown()) {
                        if (selectedPiece === piece) {
                            rotatePiece(piece);
                        }
                        return;
                    }

                    // If clicking the already-selected piece (double-click style), rotate it
                    if (canRotate && selectedPiece === piece) {
                        rotatePiece(piece);
                        return;
                    }

                    // Clear previous selection
                    if (selectionHighlight) {
                        selectionHighlight.destroy();
                        selectionHighlight = null;
                    }

                    selectedPiece = piece;
                    updateHighlight(piece);
                });
            }
        }

        // Create clickable zones on the grid slots
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = gridX + c * pieceSize + pieceSize / 2;
                const y = gridY + r * pieceSize + pieceSize / 2;

                const slot = this.add.rectangle(x, y, pieceSize, pieceSize, 0xffffff, 0)
                    .setInteractive({ useHandCursor: true });

                slot.on('pointerdown', () => {
                    if (!selectedPiece) return;
                    if (grid[r][c] !== null) return;

                    const piece = selectedPiece;

                    // Clear selection highlight
                    if (selectionHighlight) {
                        selectionHighlight.destroy();
                        selectionHighlight = null;
                    }
                    selectedPiece = null;

                    // Check if correct position (and rotation if canRotate)
                    const posCorrect = piece.row === r && piece.col === c;
                    const rotCorrect = !canRotate || piece.rotation === 0;

                    if (posCorrect && rotCorrect) {
                        // Correct — snap piece into grid
                        piece.rect.setPosition(x, y);
                        piece.rect.setAngle(0);
                        piece.label.setPosition(x, y);
                        piece.label.setAngle(0);
                        if (useComplexPattern) {
                            // Add a green border overlay for placed complex pieces
                            this.add.rectangle(x, y, pieceSize - 2, pieceSize - 2)
                                .setStrokeStyle(2, 0x00ff00, 0.8).setFillStyle(0x000000, 0);
                        } else {
                            piece.rect.setStrokeStyle(2, 0x00ff00, 0.8);
                        }
                        piece.placed = true;
                        piece.rect.disableInteractive();
                        grid[r][c] = piece;
                        if (piece.rotIndicator) {
                            piece.rotIndicator.setPosition(x, y - pieceSize / 2 + 10);
                            piece.rotIndicator.setAngle(0);
                        }

                        placedCount++;
                        countText.setText(`Pieces placed: ${placedCount} / ${totalPieces}`);

                        // Check win
                        if (placedCount === totalPieces) {
                            this.time.delayedCall(500, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        }
                    } else {
                        // Wrong — flash red and return to scattered position
                        let flashRect = null;
                        if (useComplexPattern) {
                            flashRect = this.add.rectangle(piece.rect.x, piece.rect.y, pieceSize - 2, pieceSize - 2)
                                .setStrokeStyle(3, 0xff0000, 1).setFillStyle(0xff0000, 0.2)
                                .setAngle(piece.rotation);
                        } else {
                            piece.rect.setStrokeStyle(3, 0xff0000, 1);
                        }
                        this.time.delayedCall(300, () => {
                            if (flashRect) flashRect.destroy();
                            if (!useComplexPattern) piece.rect.setStrokeStyle(2, 0xffffff, 0.5);
                            // Return to original scattered position
                            piece.rect.setPosition(piece.origX, piece.origY);
                            piece.label.setPosition(piece.origX, piece.origY);
                            if (piece.rotIndicator) {
                                piece.rotIndicator.setPosition(piece.origX, piece.origY - pieceSize / 2 + 10);
                            }
                        });
                    }
                });
            }
        }
    }

    createTowerOfHanoiPuzzle(config) {
        const { width, height } = this.scale;
        const { discs } = config;
        const minMoves = Math.pow(2, discs) - 1;

        // Instructions
        this.add.text(width / 2, 70, 'Move all discs to the right peg!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Move counter
        let moveCount = 0;
        const moveText = this.add.text(width / 2 - 150, height - 50, `Moves: 0`, {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const minText = this.add.text(width / 2 + 150, height - 50, `Minimum: ${minMoves}`, {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        // Peg positions
        const pegX = [width / 2 - 200, width / 2, width / 2 + 200];
        const baseY = height - 100;
        const pegHeight = 200;
        const pegWidth = 8;
        const baseWidth = 180;
        const discHeight = 30;
        const maxDiscWidth = 150;
        const minDiscWidth = 50;

        // Draw base and pegs
        this.add.rectangle(width / 2, baseY + 5, 620, 10, 0x8b7355);
        for (let i = 0; i < 3; i++) {
            this.add.rectangle(pegX[i], baseY - pegHeight / 2, pegWidth, pegHeight, 0x8b7355);
        }

        // Peg labels
        const pegLabels = ['A', 'B', 'C'];
        for (let i = 0; i < 3; i++) {
            this.add.text(pegX[i], baseY + 25, pegLabels[i], {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#666666',
            }).setOrigin(0.5);
        }

        // Disc colors
        const discColors = [0xe74c3c, 0x3498db, 0x2ecc71, 0xf39c12, 0x9b59b6, 0x1abc9c];

        // State: array of 3 pegs, each an array of disc sizes (smaller number = smaller disc)
        const pegs = [[], [], []];
        const discGraphics = [];

        // Initialize: all discs on left peg, largest first
        for (let i = discs; i >= 1; i--) {
            pegs[0].push(i);
        }

        // Create disc graphics
        const drawDiscs = () => {
            // Clear old disc graphics
            discGraphics.forEach(g => g.destroy());
            discGraphics.length = 0;

            for (let p = 0; p < 3; p++) {
                for (let d = 0; d < pegs[p].length; d++) {
                    const discSize = pegs[p][d];
                    const discWidth = minDiscWidth + (discSize - 1) * ((maxDiscWidth - minDiscWidth) / (discs - 1));
                    const x = pegX[p];
                    const y = baseY - (d * discHeight) - discHeight / 2;
                    const color = discColors[(discSize - 1) % discColors.length];

                    const rect = this.add.rectangle(x, y, discWidth, discHeight - 4, color)
                        .setStrokeStyle(2, 0xffffff, 0.3);
                    discGraphics.push(rect);

                    const label = this.add.text(x, y, `${discSize}`, {
                        fontSize: '16px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffffff',
                    }).setOrigin(0.5);
                    discGraphics.push(label);
                }
            }
        };

        drawDiscs();

        // Selection state
        let selectedPeg = -1;
        let selectionIndicator = null;

        // Error flash
        const showError = (message) => {
            const errorText = this.add.text(width / 2, 110, message, {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#ff4444',
            }).setOrigin(0.5);

            this.tweens.add({
                targets: errorText,
                alpha: 0,
                duration: 1000,
                onComplete: () => errorText.destroy(),
            });
        };

        // Create clickable zones for each peg
        for (let i = 0; i < 3; i++) {
            const zone = this.add.rectangle(pegX[i], baseY - pegHeight / 2, baseWidth, pegHeight + 20, 0xffffff, 0)
                .setInteractive({ useHandCursor: true });

            zone.on('pointerdown', () => {
                if (selectedPeg === -1) {
                    // Pick up from this peg
                    if (pegs[i].length === 0) {
                        showError('No discs on this peg!');
                        return;
                    }
                    selectedPeg = i;

                    // Show selection indicator
                    const topDisc = pegs[i][pegs[i].length - 1];
                    const discWidth = minDiscWidth + (topDisc - 1) * ((maxDiscWidth - minDiscWidth) / (discs - 1));
                    if (selectionIndicator) selectionIndicator.destroy();
                    selectionIndicator = this.add.rectangle(
                        pegX[i], baseY - pegHeight - 20,
                        discWidth, discHeight - 4,
                        discColors[(topDisc - 1) % discColors.length]
                    ).setStrokeStyle(3, 0xffff00, 0.8);
                    discGraphics.push(selectionIndicator);
                } else if (selectedPeg === i) {
                    // Deselect
                    selectedPeg = -1;
                    if (selectionIndicator) {
                        selectionIndicator.destroy();
                        selectionIndicator = null;
                    }
                } else {
                    // Try to place on this peg
                    const movingDisc = pegs[selectedPeg][pegs[selectedPeg].length - 1];
                    const topDisc = pegs[i].length > 0 ? pegs[i][pegs[i].length - 1] : Infinity;

                    if (movingDisc > topDisc) {
                        showError('Cannot place larger disc on smaller!');
                        selectedPeg = -1;
                        if (selectionIndicator) {
                            selectionIndicator.destroy();
                            selectionIndicator = null;
                        }
                        return;
                    }

                    // Valid move
                    pegs[selectedPeg].pop();
                    pegs[i].push(movingDisc);
                    moveCount++;
                    moveText.setText(`Moves: ${moveCount}`);

                    selectedPeg = -1;
                    if (selectionIndicator) {
                        selectionIndicator.destroy();
                        selectionIndicator = null;
                    }

                    drawDiscs();

                    // Check win: all discs on right peg
                    if (pegs[2].length === discs) {
                        this.time.delayedCall(500, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    }
                }
            });
        }
    }
}

// ============================================================
// LevelCompleteScene - Shown after completing a level
// ============================================================
class LevelCompleteScene extends Phaser.Scene {
    constructor() {
        super('LevelCompleteScene');
    }

    init(data) {
        this.level = data.level || 1;
    }

    create() {
        const { width, height } = this.scale;

        this.add.text(width / 2, height / 2 - 80, `Level ${this.level} Complete!`, {
            fontSize: '40px',
            fontFamily: 'Arial, sans-serif',
            color: '#44dd44',
        }).setOrigin(0.5);

        // Next Level button (only if not the last level)
        if (this.level < 100) {
            this.createButton(width / 2, height / 2 + 20, 'Next Level', () => {
                this.scene.start('GameScene', { level: this.level + 1 });
            });
        }

        this.createButton(width / 2, height / 2 + 80, 'Back to Menu', () => {
            this.scene.start('MenuScene');
        }, 0x5a3a3a, 0x7a5a5a);
    }

    createButton(x, y, label, callback, color = 0x4a4a8a, hoverColor = 0x6a6aaa) {
        const bg = this.add.rectangle(x, y, 240, 50, color)
            .setInteractive({ useHandCursor: true });

        this.add.text(x, y, label, {
            fontSize: '24px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        bg.on('pointerover', () => bg.setFillStyle(hoverColor));
        bg.on('pointerout', () => bg.setFillStyle(color));
        bg.on('pointerdown', callback);

        return bg;
    }
}

// ============================================================
// Game Configuration
// ============================================================
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#16213e',
    scene: [BootScene, MenuScene, LevelSelectScene, GameScene, LevelCompleteScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

const game = new Phaser.Game(config);
