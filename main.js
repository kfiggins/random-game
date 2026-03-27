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
    64: { type: 'sequence-logic', config: { sequenceLength: 10, numChoices: 6, interleaved: true, rules: 3 } },
    65: { type: 'reaction-time', config: { targets: 15, targetSize: 20, stayTime: 1200, timeLimit: 20, hasDecoys: true, moving: true, shrinking: true } },
    66: { type: 'pattern-complete', config: { patternLength: 16, numChoices: 8, is2D: true, fractal: true } },
    67: { type: 'word-scramble', config: { mode: 'crossword', words: 4 } },
    68: { type: 'math', config: { problems: 3, mode: 'equation-builder', timeLimit: 90 } },
    69: { type: 'color-chain', config: { gridSize: 10, colors: 12, fillBoard: true, timeLimit: 180 } },
    70: { type: 'multi-puzzle', config: { stages: 5, timeLimit: 180 } },
    71: { type: 'simon-says', config: { sequenceLength: 15, colors: 8, playbackSpeed: 300, replayAllowed: false, decoyFlash: true } },
    72: { type: 'sliding-puzzle', config: { size: 5, useImage: true, timeLimit: 180 } },
    73: { type: 'memory-cards', config: { rows: 6, cols: 8, timeLimit: 30, reshuffleAfter: 1, flipBackSpeed: 250, blackout: true, fakeCards: 4 } },
    74: { type: 'maze', config: { width: 31, height: 31, cellSize: 18, fogOfWar: true, viewRadius: 2, enemies: 7, traps: 8, timeLimit: 90, hasKeys: true, keys: 4, teleporters: 2 } },
    75: { type: 'light-toggle', config: { size: 8, randomize: true, lockedCells: 10, chainReaction: true } },
    76: { type: 'jigsaw', config: { rows: 6, cols: 6, canRotate: true, timeLimit: 120 } },
    77: { type: 'math', config: { problems: 4, mode: 'rate-of-change', timeLimit: 120 } },
    78: { type: 'word-scramble', config: { mode: 'anagram-chain', chainLength: 5, timeLimit: 90 } },
    79: { type: 'tower-of-hanoi', config: { discs: 8, timeLimit: 300 } },
    80: { type: 'multi-puzzle', config: { stages: 6, timeLimit: 200 } },
    81: { type: 'color-chain', config: { gridSize: 12, colors: 15, fillBoard: true, timeLimit: 240 } },
    82: { type: 'reaction-time', config: { targets: 20, targetSize: 15, stayTime: 800, timeLimit: 15, hasDecoys: true, moving: true, shrinking: true, decoyRatio: 2 } },
    83: { type: 'sequence-logic', config: { sequenceLength: 10, numChoices: 6, mode: 'recursive' } },
    84: { type: 'maze', config: { width: 35, height: 35, cellSize: 16, fogOfWar: true, viewRadius: 2, enemies: 8, traps: 10, timeLimit: 75, hasKeys: true, keys: 5, teleporters: 3, darkZones: true } },
    85: { type: 'pattern-complete', config: { patternLength: 25, numChoices: 10, is2D: true, illusion: true } },
    86: { type: 'sorting', config: { count: 16, maxValue: 500, mode: 'merge-sort', timeLimit: 120 } },
    87: { type: 'math', config: { problems: 3, mode: 'matrix', timeLimit: 120 } },
    88: { type: 'word-scramble', config: { mode: 'cipher', cipherType: 'substitution', messageLength: 20 } },
    89: { type: 'jigsaw', config: { rows: 7, cols: 7, canRotate: true, timeLimit: 150 } },
    90: { type: 'multi-puzzle', config: { stages: 8, timeLimit: 300 } },
    91: { type: 'simon-says', config: { sequenceLength: 20, colors: 8, playbackSpeed: 250, replayAllowed: false, decoyFlash: true, speedUp: true } },
    92: { type: 'memory-cards', config: { rows: 8, cols: 8, timeLimit: 25, reshuffleAfter: 1, flipBackSpeed: 200, blackout: true, fakeCards: 6, morphing: true } },
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
        const { rows, cols, timeLimit, reshuffleAfter, flipBackSpeed, blackout, fakeCards: numFakes, morphing } = config;
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
            { name: 'Scarlet', hex: 0xcc2222 },
            { name: 'Azure', hex: 0x3399ff },
            { name: 'Emerald', hex: 0x22cc66 },
            { name: 'Amber', hex: 0xffaa00 },
            { name: 'Violet', hex: 0x9944cc },
            { name: 'Peach', hex: 0xffbb99 },
            { name: 'Navy', hex: 0x334488 },
            { name: 'Crimson', hex: 0xdd3355 },
            { name: 'Sage', hex: 0x88bb88 },
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
                            if (morphTimer) morphTimer.remove();
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

        // Morphing: gradually shift the hue of unmatched card faces over time
        let morphTimer = null;
        if (morphing) {
            const hueShiftRate = 5; // degrees per tick
            let morphOffset = 0;
            morphTimer = this.time.addEvent({
                delay: 500,
                loop: true,
                callback: () => {
                    morphOffset += hueShiftRate;
                    cards.forEach(c => {
                        if (c.matched) return;
                        const origHex = c.face.fillColor;
                        const r = (origHex >> 16) & 0xff;
                        const g = (origHex >> 8) & 0xff;
                        const b = origHex & 0xff;
                        // Convert RGB to HSL, shift hue, convert back
                        const rn = r / 255, gn = g / 255, bn = b / 255;
                        const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
                        let h = 0, s = 0;
                        const l = (max + min) / 2;
                        if (max !== min) {
                            const d = max - min;
                            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                            if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
                            else if (max === gn) h = ((bn - rn) / d + 2) / 6;
                            else h = ((rn - gn) / d + 4) / 6;
                        }
                        // Shift hue
                        h = (h + hueShiftRate / 360) % 1;
                        // HSL to RGB
                        let nr, ng, nb;
                        if (s === 0) {
                            nr = ng = nb = l;
                        } else {
                            const hue2rgb = (p, q, t) => {
                                if (t < 0) t += 1;
                                if (t > 1) t -= 1;
                                if (t < 1 / 6) return p + (q - p) * 6 * t;
                                if (t < 1 / 2) return q;
                                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                                return p;
                            };
                            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                            const p = 2 * l - q;
                            nr = hue2rgb(p, q, h + 1 / 3);
                            ng = hue2rgb(p, q, h);
                            nb = hue2rgb(p, q, h - 1 / 3);
                        }
                        const newHex = (Math.round(nr * 255) << 16) | (Math.round(ng * 255) << 8) | Math.round(nb * 255);
                        c.face.setFillStyle(newHex);
                    });
                },
            });
        }
    }

    createSimonSaysPuzzle(config) {
        const { width, height } = this.scale;
        const { sequenceLength, colors: numColors, playbackSpeed, replayAllowed, decoyFlash, speedUp } = config;

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
        let currentPlaybackSpeed = playbackSpeed;

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
            if (speedUp) currentPlaybackSpeed = playbackSpeed;
            instructionText.setText('Watch the sequence!');
            progressText.setText('');

            let cumulativeDelay = 0;
            sequence.forEach((btnIndex, i) => {
                const stepSpeed = speedUp ? Math.max(50, playbackSpeed - i * 10) : currentPlaybackSpeed;
                cumulativeDelay += stepSpeed;
                const delay = cumulativeDelay;
                this.time.delayedCall(delay, () => {
                    lightUp(btnIndex, stepSpeed);
                });

                // Decoy flashes: briefly flash random non-sequence buttons during playback
                if (decoyFlash) {
                    this.time.delayedCall(delay + stepSpeed * 0.3, () => {
                        const candidates = [];
                        for (let c = 0; c < buttons.length; c++) {
                            if (c !== btnIndex) candidates.push(c);
                        }
                        const decoyIndex = candidates[Phaser.Math.Between(0, candidates.length - 1)];
                        const decoyBtn = buttons[decoyIndex];
                        decoyBtn.rect.setFillStyle(decoyBtn.colorDef.hex);
                        this.time.delayedCall(stepSpeed * 0.2, () => {
                            decoyBtn.rect.setFillStyle(decoyBtn.colorDef.dimHex);
                        });
                    });
                }
            });

            const lastStepSpeed = speedUp ? Math.max(50, playbackSpeed - (sequence.length - 1) * 10) : currentPlaybackSpeed;
            this.time.delayedCall(cumulativeDelay + lastStepSpeed, () => {
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
                    if (speedUp) {
                        currentPlaybackSpeed = Math.max(50, currentPlaybackSpeed - 10);
                    }

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

        if (config.mode === 'merge-sort') {
            return this.createMergeSortPuzzle(config);
        }

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

    createMergeSortPuzzle(config) {
        const { width, height } = this.scale;
        const { count, maxValue, timeLimit } = config;

        // Generate unique random numbers
        const allNumbers = [];
        while (allNumbers.length < count) {
            const n = Phaser.Math.Between(1, maxValue);
            if (!allNumbers.includes(n)) allNumbers.push(n);
        }

        // Split into 4 groups of 4 and sort each group
        const groupSize = Math.floor(count / 4);
        const groups = [];
        for (let g = 0; g < 4; g++) {
            const group = allNumbers.slice(g * groupSize, (g + 1) * groupSize).sort((a, b) => a - b);
            groups.push(group);
        }

        // The correct full sorted order
        const fullSorted = [].concat(...groups).slice().sort((a, b) => a - b);

        // Track which elements have been picked (merged) so far
        const merged = [];

        // Instructions
        this.add.text(width / 2, 50, 'Merge Sort! Pick the smallest front element from any group.', {
            fontSize: '16px',
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
                if (timeLeft <= 5) timerText.setColor('#ff4444');
                if (timeLeft <= 0) this.handleTimeUp();
            },
        });

        // Progress text
        const progressText = this.add.text(width / 2, height - 110, `Merged: 0/${count}`, {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#88ff88',
        }).setOrigin(0.5);

        // Layout: 4 groups displayed as columns
        const groupSpacing = 160;
        const totalGroupWidth = 3 * groupSpacing;
        const groupStartX = (width - totalGroupWidth) / 2;
        const groupStartY = 100;
        const cardW = 60;
        const cardH = 36;
        const cardPadding = 6;

        // Group labels
        const groupLabels = ['Group A', 'Group B', 'Group C', 'Group D'];

        // Store card objects per group
        const groupCards = [];

        // Merged result area at bottom
        const mergedStartY = height - 160;
        const mergedCardW = 42;
        const mergedPadding = 4;
        const mergedTotalW = count * mergedCardW + (count - 1) * mergedPadding;
        const mergedStartX = (width - mergedTotalW) / 2 + mergedCardW / 2;
        const mergedCards = [];

        this.add.text(width / 2, mergedStartY - 22, 'Merged Result:', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        // Draw empty merged slots
        for (let i = 0; i < count; i++) {
            const x = mergedStartX + i * (mergedCardW + mergedPadding);
            const slot = this.add.rectangle(x, mergedStartY, mergedCardW, 30, 0x2a2a4a)
                .setStrokeStyle(1, 0x555577);
            const label = this.add.text(x, mergedStartY, '', {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#44ff44',
            }).setOrigin(0.5);
            mergedCards.push({ slot, label });
        }

        const scene = this;

        // Render each group as a vertical column of cards
        for (let g = 0; g < 4; g++) {
            const gx = groupStartX + g * groupSpacing;
            const cards = [];

            this.add.text(gx, groupStartY - 10, groupLabels[g], {
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaacc',
            }).setOrigin(0.5);

            for (let i = 0; i < groups[g].length; i++) {
                const cy = groupStartY + 20 + i * (cardH + cardPadding);

                const bg = this.add.rectangle(gx, cy, cardW, cardH, 0x3a3a6a)
                    .setStrokeStyle(1, 0x5555aa);

                const label = this.add.text(gx, cy, `${groups[g][i]}`, {
                    fontSize: '20px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);

                // Only the front element (index 0) is interactive
                if (i === 0) {
                    bg.setInteractive({ useHandCursor: true });
                    bg.setFillStyle(0x4a4a8a);
                    bg.setStrokeStyle(2, 0x8888ff);

                    bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                    bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                    bg.on('pointerdown', () => {
                        const value = groups[g][0];
                        const expectedValue = fullSorted[merged.length];

                        if (value === expectedValue) {
                            // Correct pick
                            groups[g].shift();
                            merged.push(value);

                            // Update merged display
                            const mIdx = merged.length - 1;
                            mergedCards[mIdx].label.setText(`${value}`);
                            mergedCards[mIdx].slot.setFillStyle(0x336633);

                            // Rebuild all group columns
                            rebuildGroups();

                            progressText.setText(`Merged: ${merged.length}/${count}`);

                            if (merged.length === count) {
                                timerEvent.remove(false);
                                // Flash success
                                mergedCards.forEach(mc => mc.slot.setFillStyle(0x228822));
                                scene.time.delayedCall(600, () => {
                                    scene.scene.start('LevelCompleteScene', { level: scene.level });
                                });
                            }
                        } else {
                            // Wrong pick - flash red
                            bg.setFillStyle(0xaa2222);
                            label.setColor('#ff4444');
                            scene.time.delayedCall(400, () => {
                                bg.setFillStyle(0x4a4a8a);
                                label.setColor('#ffffff');
                            });
                        }
                    });
                }

                cards.push({ bg, label });
            }

            groupCards.push(cards);
        }

        const rebuildGroups = () => {
            // Destroy all existing group cards
            for (let g = 0; g < 4; g++) {
                groupCards[g].forEach(c => {
                    c.bg.destroy();
                    c.label.destroy();
                });
                groupCards[g] = [];
            }

            // Redraw
            for (let g = 0; g < 4; g++) {
                const gx = groupStartX + g * groupSpacing;
                const cards = [];

                for (let i = 0; i < groups[g].length; i++) {
                    const cy = groupStartY + 20 + i * (cardH + cardPadding);

                    const bg = scene.add.rectangle(gx, cy, cardW, cardH, 0x3a3a6a)
                        .setStrokeStyle(1, 0x5555aa);

                    const label = scene.add.text(gx, cy, `${groups[g][i]}`, {
                        fontSize: '20px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffffff',
                    }).setOrigin(0.5);

                    if (i === 0) {
                        bg.setInteractive({ useHandCursor: true });
                        bg.setFillStyle(0x4a4a8a);
                        bg.setStrokeStyle(2, 0x8888ff);

                        bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                        bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                        bg.on('pointerdown', () => {
                            const value = groups[g][0];
                            const expectedValue = fullSorted[merged.length];

                            if (value === expectedValue) {
                                groups[g].shift();
                                merged.push(value);

                                const mIdx = merged.length - 1;
                                mergedCards[mIdx].label.setText(`${value}`);
                                mergedCards[mIdx].slot.setFillStyle(0x336633);

                                rebuildGroups();

                                progressText.setText(`Merged: ${merged.length}/${count}`);

                                if (merged.length === count) {
                                    timerEvent.remove(false);
                                    mergedCards.forEach(mc => mc.slot.setFillStyle(0x228822));
                                    scene.time.delayedCall(600, () => {
                                        scene.scene.start('LevelCompleteScene', { level: scene.level });
                                    });
                                }
                            } else {
                                bg.setFillStyle(0xaa2222);
                                label.setColor('#ff4444');
                                scene.time.delayedCall(400, () => {
                                    bg.setFillStyle(0x4a4a8a);
                                    label.setColor('#ffffff');
                                });
                            }
                        });
                    }

                    cards.push({ bg, label });
                }

                groupCards[g] = cards;
            }
        };
    }

    createMazePuzzle(config) {
        const { width, height } = this.scale;
        const { width: mazeW, height: mazeH, cellSize, hasKeys, keys: numKeys, fogOfWar, viewRadius, enemies: numEnemies, traps: numTraps, timeLimit, teleporters: numTeleporters, darkZones } = config;

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
            { name: 'Green', hex: 0x44dd44, doorHex: 0x228822 },
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
        const instrText = (darkZones && numTeleporters) ? 'Nightmare maze! Dark zones, portals, keys, enemies & traps!' : (hasKeys && numEnemies && numTraps && numTeleporters) ? 'Everything! Keys, enemies, traps & portals! Reach the star!' : (hasKeys && numEnemies && numTraps && timeLimit) ? 'Keys, enemies, traps & timer! Reach the star!' : hasKeys ? 'Collect keys to unlock doors! Reach the star!' : (numEnemies && numTraps) ? 'Avoid enemies & hidden traps! Reach the star!' : numEnemies ? 'Avoid the enemies! Reach the star!' : numTraps ? 'Watch out for hidden traps! Reach the star!' : fogOfWar ? 'Navigate through the fog! Reach the star!' : 'Use arrow keys to reach the star!';
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

        // Dark zone map - cells where fog radius shrinks to 1
        const darkZoneMap = Array.from({ length: mazeH }, () => Array(mazeW).fill(false));
        if (darkZones && fogOfWar) {
            // Place dark zone clusters spread through the maze
            const dzCandidates = [];
            for (let r = 0; r < mazeH; r++) {
                for (let c = 0; c < mazeW; c++) {
                    if (maze[r][c] === 0 && !(r === 0 && c === 0) && !(r === mazeH - 1 && c === mazeW - 1)) {
                        dzCandidates.push({ r, c });
                    }
                }
            }
            // Shuffle and pick ~20% of path cells as dark zone seeds, then expand each into a cluster
            for (let i = dzCandidates.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [dzCandidates[i], dzCandidates[j]] = [dzCandidates[j], dzCandidates[i]];
            }
            const numSeeds = Math.floor(dzCandidates.length * 0.06);
            for (let s = 0; s < numSeeds && s < dzCandidates.length; s++) {
                const seed = dzCandidates[s];
                // Mark a cluster of cells around the seed
                for (let dr = -2; dr <= 2; dr++) {
                    for (let dc = -2; dc <= 2; dc++) {
                        const nr = seed.r + dr;
                        const nc = seed.c + dc;
                        if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0) {
                            darkZoneMap[nr][nc] = true;
                        }
                    }
                }
            }

            // Draw dark zone tint on path cells
            for (let row = 0; row < mazeH; row++) {
                for (let col = 0; col < mazeW; col++) {
                    if (darkZoneMap[row][col]) {
                        const x = offsetX + col * cellSize + cellSize / 2;
                        const y = offsetY + row * cellSize + cellSize / 2;
                        const tint = this.add.rectangle(x, y, cellSize - 2, cellSize - 2, 0x1a0a2e, 0.5);
                        tint.setDepth(5);
                    }
                }
            }
        }

        // Fog of war visibility update function
        const updateFog = () => {
            if (!fogOfWar) return;
            // Determine effective view radius - shrinks to 1 in dark zones
            const effectiveRadius = (darkZones && darkZoneMap[playerRow] && darkZoneMap[playerRow][playerCol]) ? 1 : viewRadius;
            for (let row = 0; row < mazeH; row++) {
                for (let col = 0; col < mazeW; col++) {
                    const dist = Math.abs(row - playerRow) + Math.abs(col - playerCol);
                    if (dist <= effectiveRadius) {
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
        let _updateTeleporterVis = null;
        const respawnPlayer = () => {
            playerCol = 0;
            playerRow = 0;
            player.setPosition(
                offsetX + cellSize / 2,
                offsetY + cellSize / 2
            );
            updateFog();
            updateEnemyVisibility();
            if (_updateTeleporterVis) _updateTeleporterVis();
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

        // Teleporter setup - pairs of linked portals
        const teleporterData = [];
        if (numTeleporters && numTeleporters > 0) {
            const teleCandidates = [];
            for (let r = 0; r < mazeH; r++) {
                for (let c = 0; c < mazeW; c++) {
                    if (maze[r][c] !== 0) continue;
                    if (r === 0 && c === 0) continue;
                    if (r === mazeH - 1 && c === mazeW - 1) continue;
                    const isKey = keyCells.some(kc => kc.r === r && kc.c === c);
                    const isDoor = doorCells.some(dc => dc.r === r && dc.c === c);
                    const isTrap = trapData.some(t => t.r === r && t.c === c);
                    if (isKey || isDoor || isTrap) continue;
                    teleCandidates.push({ r, c });
                }
            }

            // BFS distance for spreading teleporters
            const tpDist = Array.from({ length: mazeH }, () => Array(mazeW).fill(-1));
            tpDist[0][0] = 0;
            const tpq = [{ r: 0, c: 0 }];
            let tpqi = 0;
            while (tpqi < tpq.length) {
                const { r, c } = tpq[tpqi++];
                for (const [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0 && tpDist[nr][nc] === -1) {
                        tpDist[nr][nc] = tpDist[r][c] + 1;
                        tpq.push({ r: nr, c: nc });
                    }
                }
            }
            teleCandidates.sort((a, b) => tpDist[a.r][a.c] - tpDist[b.r][b.c]);

            const teleColors = [0x00ffcc, 0xff66ff, 0x66ccff, 0xffcc00];
            const usedCells = new Set();

            for (let tp = 0; tp < numTeleporters && teleCandidates.length >= 2; tp++) {
                const color = teleColors[tp % teleColors.length];

                // Place first portal in the first third, second in the last third
                const firstIdx = Math.floor(teleCandidates.length * (0.1 + tp * 0.15));
                let firstCell = null;
                for (let i = firstIdx; i < teleCandidates.length; i++) {
                    const c = teleCandidates[i];
                    if (!usedCells.has(`${c.r},${c.c}`)) {
                        firstCell = c;
                        break;
                    }
                }
                if (!firstCell) continue;
                usedCells.add(`${firstCell.r},${firstCell.c}`);

                const secondIdx = Math.floor(teleCandidates.length * (0.6 + tp * 0.15));
                let secondCell = null;
                for (let i = secondIdx; i < teleCandidates.length; i++) {
                    const c = teleCandidates[i];
                    if (!usedCells.has(`${c.r},${c.c}`)) {
                        secondCell = c;
                        break;
                    }
                }
                if (!secondCell) continue;
                usedCells.add(`${secondCell.r},${secondCell.c}`);

                // Create swirling circle sprites for both portals
                const createPortalSprite = (cell) => {
                    const px = offsetX + cell.c * cellSize + cellSize / 2;
                    const py = offsetY + cell.r * cellSize + cellSize / 2;
                    const radius = cellSize / 3;

                    // Outer ring
                    const outer = this.add.circle(px, py, radius, color, 0.3);
                    outer.setStrokeStyle(2, color);
                    if (fogOfWar) outer.setDepth(11);

                    // Inner swirl dot
                    const inner = this.add.circle(px, py, radius * 0.4, color, 0.8);
                    if (fogOfWar) inner.setDepth(11);

                    // Animate swirl - rotate the inner dot around the center
                    this.tweens.add({
                        targets: outer,
                        scaleX: { from: 0.8, to: 1.2 },
                        scaleY: { from: 0.8, to: 1.2 },
                        alpha: { from: 0.2, to: 0.5 },
                        duration: 800,
                        yoyo: true,
                        repeat: -1,
                        ease: 'Sine.easeInOut',
                    });
                    this.tweens.add({
                        targets: inner,
                        angle: 360,
                        duration: 1500,
                        repeat: -1,
                    });

                    return { outer, inner };
                };

                const sprite1 = createPortalSprite(firstCell);
                const sprite2 = createPortalSprite(secondCell);

                const portal1 = { r: firstCell.r, c: firstCell.c, linkedIdx: teleporterData.length + 1, sprites: sprite1 };
                const portal2 = { r: secondCell.r, c: secondCell.c, linkedIdx: teleporterData.length, sprites: sprite2 };
                teleporterData.push(portal1);
                teleporterData.push(portal2);
            }
        }

        // Update teleporter fog visibility
        const updateTeleporterVisibility = () => {
            if (!fogOfWar) return;
            for (const tp of teleporterData) {
                const dist = Math.abs(tp.r - playerRow) + Math.abs(tp.c - playerCol);
                const visible = dist <= viewRadius;
                tp.sprites.outer.setVisible(visible);
                tp.sprites.inner.setVisible(visible);
            }
        };
        _updateTeleporterVis = updateTeleporterVisibility;
        updateTeleporterVisibility();

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
            updateTeleporterVisibility();

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
                        updateTeleporterVisibility();
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

            // Check teleporter
            for (const tp of teleporterData) {
                if (playerRow === tp.r && playerCol === tp.c) {
                    const linked = teleporterData[tp.linkedIdx];
                    inputLocked = true;

                    // Brief flash effect then teleport
                    this.tweens.add({
                        targets: player,
                        alpha: 0,
                        duration: 200,
                        onComplete: () => {
                            playerCol = linked.c;
                            playerRow = linked.r;
                            player.setPosition(
                                offsetX + playerCol * cellSize + cellSize / 2,
                                offsetY + playerRow * cellSize + cellSize / 2
                            );
                            this.tweens.add({
                                targets: player,
                                alpha: 1,
                                duration: 200,
                                onComplete: () => {
                                    updateFog();
                                    updateEnemyVisibility();
                                    updateTeleporterVisibility();
                                    if (checkEnemyCollision()) {
                                        respawnPlayer();
                                    }
                                    inputLocked = false;
                                },
                            });
                        },
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

        if (is2D && config.illusion) {
            this.createPatternCompleteIllusion(config, shapeDefs);
            return;
        }

        if (is2D && config.fractal) {
            this.createPatternCompleteFractal(config, shapeDefs);
            return;
        }

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

    createPatternCompleteIllusion(config, baseShapeDefs) {
        const { width, height } = this.scale;
        const { numChoices } = config;
        const gridSize = 5;
        const numMissing = 5;

        // Illusion shape defs: similar colors and subtle shape differences
        // Each shape has a very close color variant to create visual confusion
        const shapeDefs = [
            { name: 'Circle', color: 0x2244aa, colorName: 'Navy', size: 1.0 },
            { name: 'Circle', color: 0x2a4cb8, colorName: 'Deep Blue', size: 0.92 },
            { name: 'Oval', color: 0x2244aa, colorName: 'Navy Oval', size: 1.0 },
            { name: 'Square', color: 0x3355bb, colorName: 'Blue', size: 1.0 },
            { name: 'Square', color: 0x3a5cc4, colorName: 'Slate Blue', size: 0.9 },
            { name: 'Diamond', color: 0x2244aa, colorName: 'Navy Dia', size: 1.0 },
            { name: 'Diamond', color: 0x2e4eb2, colorName: 'Indigo Dia', size: 0.93 },
            { name: 'Triangle', color: 0x3355bb, colorName: 'Blue Tri', size: 1.0 },
            { name: 'Triangle', color: 0x2a4cb8, colorName: 'Deep Tri', size: 0.91 },
            { name: 'Hexagon', color: 0x2244aa, colorName: 'Navy Hex', size: 1.0 },
        ];

        // Instructions
        this.add.text(width / 2, 30, 'Optical Illusion Pattern!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 50, 'Shapes look similar — watch the subtle differences!', {
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            color: '#777777',
        }).setOrigin(0.5);

        // Draw shape with illusion effects (subtle size/stretch differences)
        const drawIllusionShape = (x, y, shapeDef, baseSize) => {
            const s = baseSize * (shapeDef.size || 1.0);
            const color = shapeDef.color;
            const group = [];

            if (shapeDef.name === 'Circle') {
                group.push(this.add.circle(x, y, s / 2, color));
            } else if (shapeDef.name === 'Oval') {
                const oval = this.add.ellipse(x, y, s * 1.15, s * 0.8, color);
                group.push(oval);
            } else if (shapeDef.name === 'Square') {
                group.push(this.add.rectangle(x, y, s, s, color));
            } else if (shapeDef.name === 'Triangle') {
                group.push(this.add.triangle(x, y, 0, s, s / 2, 0, s, s, color));
            } else if (shapeDef.name === 'Diamond') {
                group.push(this.add.polygon(x, y, [
                    0, -s / 2, s / 2, 0, 0, s / 2, -s / 2, 0,
                ], color));
            } else if (shapeDef.name === 'Hexagon') {
                const pts = [];
                for (let i = 0; i < 6; i++) {
                    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 6;
                    pts.push(Math.cos(angle) * s / 2, Math.sin(angle) * s / 2);
                }
                group.push(this.add.polygon(x, y, pts, color));
            }

            // Add subtle visual noise — a faint ring to create optical illusion depth
            const ring = this.add.circle(x, y, s / 2 + 2).setStrokeStyle(1, color, 0.15).setFillStyle(0x000000, 0);
            group.push(ring);

            return group;
        };

        // Build 5x5 grid: pattern uses (r + c) mod 5 from shuffled shape pool
        const patternShapes = Phaser.Utils.Array.Shuffle([...shapeDefs]).slice(0, gridSize);
        const grid = [];
        for (let r = 0; r < gridSize; r++) {
            grid[r] = [];
            for (let c = 0; c < gridSize; c++) {
                grid[r][c] = patternShapes[(r + c) % gridSize];
            }
        }

        // Pick 5 missing cells spread across the grid
        const allCells = [];
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                allCells.push({ r, c });
            }
        }
        Phaser.Utils.Array.Shuffle(allCells);
        // Ensure spread: pick from different rows
        const missingCells = [];
        const usedRows = new Set();
        for (const cell of allCells) {
            if (missingCells.length >= numMissing) break;
            if (!usedRows.has(cell.r) || missingCells.length >= gridSize) {
                missingCells.push(cell);
                usedRows.add(cell.r);
            }
        }
        while (missingCells.length < numMissing) {
            const cell = allCells.find(c => !missingCells.some(m => m.r === c.r && m.c === c.c));
            if (cell) missingCells.push(cell);
            else break;
        }
        const missingSet = new Set(missingCells.map(m => `${m.r},${m.c}`));

        // Draw the grid
        const shapeSize = 46;
        const padding = 8;
        const totalGridW = gridSize * shapeSize + (gridSize - 1) * padding;
        const totalGridH = totalGridW;
        const gridStartX = (width - totalGridW) / 2 + shapeSize / 2;
        const gridStartY = 72 + shapeSize / 2;

        const getCellPos = (r, c) => ({
            x: gridStartX + c * (shapeSize + padding),
            y: gridStartY + r * (shapeSize + padding),
        });

        // Draw background pattern lines to create additional optical illusion
        for (let r = 0; r < gridSize; r++) {
            const { y } = getCellPos(r, 0);
            const { x: x0 } = getCellPos(r, 0);
            const { x: x4 } = getCellPos(r, gridSize - 1);
            this.add.line(0, 0, x0 - shapeSize / 2, y, x4 + shapeSize / 2, y, 0x222244, 0.3).setOrigin(0);
        }
        for (let c = 0; c < gridSize; c++) {
            const { x } = getCellPos(0, c);
            const { y: y0 } = getCellPos(0, c);
            const { y: y4 } = getCellPos(gridSize - 1, c);
            this.add.line(0, 0, x, y0 - shapeSize / 2, x, y4 + shapeSize / 2, 0x222244, 0.3).setOrigin(0);
        }

        const placeholders = {};
        const questionMarks = {};

        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const { x, y } = getCellPos(r, c);
                const key = `${r},${c}`;

                if (missingSet.has(key)) {
                    const ph = this.add.rectangle(x, y, shapeSize, shapeSize, 0x2a2a4a)
                        .setInteractive({ useHandCursor: true });
                    const qm = this.add.text(x, y, '?', {
                        fontSize: '24px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#555588',
                    }).setOrigin(0.5);
                    placeholders[key] = ph;
                    questionMarks[key] = qm;
                } else {
                    drawIllusionShape(x, y, grid[r][c], shapeSize - 6);
                }
            }
        }

        // State tracking
        let selectedCell = null;
        let solvedCount = 0;
        const solvedCells = new Set();
        let selectionOutline = null;

        const feedbackText = this.add.text(width / 2, height - 30, '', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        const progressText = this.add.text(width / 2, height - 50, `Filled: 0 / ${numMissing}`, {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Click handler for placeholder cells
        missingCells.forEach(({ r, c }) => {
            const key = `${r},${c}`;
            const ph = placeholders[key];

            ph.on('pointerdown', () => {
                if (solvedCells.has(key)) return;
                if (selectionOutline) selectionOutline.destroy();

                selectedCell = { r, c, key };
                const { x, y } = getCellPos(r, c);
                selectionOutline = this.add.rectangle(x, y, shapeSize + 4, shapeSize + 4)
                    .setStrokeStyle(2, 0xaaaaff)
                    .setFillStyle(0x000000, 0);

                feedbackText.setText(`Pick shape for row ${r + 1}, col ${c + 1}`).setColor('#8888aa');
                updateChoices();
            });
        });

        // Build choices area - two rows of 5 for 10 choices
        const choiceSize = 36;
        const choicePadding = 10;
        const choicesPerRow = 5;
        const choiceRows = Math.ceil(numChoices / choicesPerRow);
        const choiceRowW = choicesPerRow * choiceSize + (choicesPerRow - 1) * choicePadding;
        const choiceBaseY = gridStartY + gridSize * (shapeSize + padding) + 20;
        const choiceStartX = (width - choiceRowW) / 2 + choiceSize / 2;

        // Precompute choices for each missing cell
        const cellChoices = {};
        missingCells.forEach(({ r, c }) => {
            const key = `${r},${c}`;
            const correct = grid[r][c];
            // Pick confusing alternatives: shapes with similar colors/shapes
            const others = shapeDefs.filter(s => s.colorName !== correct.colorName);
            Phaser.Utils.Array.Shuffle(others);
            const choices = [correct, ...others.slice(0, numChoices - 1)];
            Phaser.Utils.Array.Shuffle(choices);
            cellChoices[key] = choices;
        });

        const choiceBgs = [];
        const choiceShapeObjs = [];
        const choiceLabels = [];

        for (let i = 0; i < numChoices; i++) {
            const row = Math.floor(i / choicesPerRow);
            const col = i % choicesPerRow;
            const cx = choiceStartX + col * (choiceSize + choicePadding);
            const cy = choiceBaseY + row * (choiceSize + 22);

            const bg = this.add.rectangle(cx, cy, choiceSize + 6, choiceSize + 6, 0x1a1a3a)
                .setInteractive({ useHandCursor: true });
            choiceBgs.push(bg);
            choiceShapeObjs.push(null);

            const label = this.add.text(cx, cy + choiceSize / 2 + 8, '', {
                fontSize: '8px',
                fontFamily: 'Arial, sans-serif',
                color: '#666688',
            }).setOrigin(0.5);
            choiceLabels.push(label);

            bg.on('pointerover', () => {
                if (selectedCell && !solvedCells.has(selectedCell.key)) bg.setFillStyle(0x3a3a5a);
            });
            bg.on('pointerout', () => {
                bg.setFillStyle(0x1a1a3a);
            });

            bg.on('pointerdown', () => {
                if (!selectedCell || solvedCells.has(selectedCell.key)) return;

                const key = selectedCell.key;
                const choices = cellChoices[key];
                if (i >= choices.length) return;
                const picked = choices[i];
                const correct = grid[selectedCell.r][selectedCell.c];

                if (picked.colorName === correct.colorName) {
                    solvedCells.add(key);
                    solvedCount++;
                    progressText.setText(`Filled: ${solvedCount} / ${numMissing}`);

                    const { x: sx, y: sy } = getCellPos(selectedCell.r, selectedCell.c);
                    placeholders[key].setVisible(false);
                    questionMarks[key].setVisible(false);
                    drawIllusionShape(sx, sy, correct, shapeSize - 6);

                    if (selectionOutline) {
                        selectionOutline.destroy();
                        selectionOutline = null;
                    }
                    selectedCell = null;

                    if (solvedCount >= numMissing) {
                        feedbackText.setText('All correct!').setColor('#44dd44');
                        this.time.delayedCall(600, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    } else {
                        feedbackText.setText('Correct! Pick the next gap.').setColor('#44dd44');
                        clearChoices();
                    }
                } else {
                    bg.setFillStyle(0xaa0000);
                    feedbackText.setText('Wrong! Look more carefully...').setColor('#ff4444');
                    this.time.delayedCall(400, () => {
                        bg.setFillStyle(0x1a1a3a);
                    });
                }
            });
        }

        const clearChoices = () => {
            for (let i = 0; i < numChoices; i++) {
                if (choiceShapeObjs[i]) {
                    if (Array.isArray(choiceShapeObjs[i])) {
                        choiceShapeObjs[i].forEach(o => o.destroy());
                    } else {
                        choiceShapeObjs[i].destroy();
                    }
                    choiceShapeObjs[i] = null;
                }
                choiceLabels[i].setText('');
            }
        };

        const updateChoices = () => {
            if (!selectedCell) return;
            const choices = cellChoices[selectedCell.key];

            for (let i = 0; i < numChoices; i++) {
                const row = Math.floor(i / choicesPerRow);
                const col = i % choicesPerRow;
                const cx = choiceStartX + col * (choiceSize + choicePadding);
                const cy = choiceBaseY + row * (choiceSize + 22);

                if (choiceShapeObjs[i]) {
                    if (Array.isArray(choiceShapeObjs[i])) {
                        choiceShapeObjs[i].forEach(o => o.destroy());
                    } else {
                        choiceShapeObjs[i].destroy();
                    }
                }
                if (i < choices.length) {
                    choiceShapeObjs[i] = drawIllusionShape(cx, cy, choices[i], choiceSize - 8);
                    choiceLabels[i].setText(choices[i].colorName);
                }
            }
        };

        feedbackText.setText('Click a "?" cell to select it.').setColor('#8888aa');
    }

    createPatternCompleteFractal(config, baseShapeDefs) {
        const { width, height } = this.scale;
        const { numChoices } = config;
        const gridSize = 4;
        const numMissing = 4;

        // Extended shape defs for 8 choices
        const shapeDefs = [
            ...baseShapeDefs,
            { name: 'Pentagon', color: 0xff8844, colorName: 'Orange' },
            { name: 'Hexagon', color: 0x44dddd, colorName: 'Cyan' },
            { name: 'Star', color: 0xff44aa, colorName: 'Pink' },
            { name: 'Cross', color: 0x88ff44, colorName: 'Lime' },
        ];

        // Instructions
        this.add.text(width / 2, 38, 'Complete the fractal pattern!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 58, 'Each 2x2 quadrant mirrors the whole grid\'s pattern.', {
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            color: '#777777',
        }).setOrigin(0.5);

        // Draw shape helper
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
            } else if (shapeDef.name === 'Pentagon') {
                const pts = [];
                for (let i = 0; i < 5; i++) {
                    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                    pts.push(Math.cos(angle) * size / 2, Math.sin(angle) * size / 2);
                }
                return this.add.polygon(x, y, pts, shapeDef.color);
            } else if (shapeDef.name === 'Hexagon') {
                const pts = [];
                for (let i = 0; i < 6; i++) {
                    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 6;
                    pts.push(Math.cos(angle) * size / 2, Math.sin(angle) * size / 2);
                }
                return this.add.polygon(x, y, pts, shapeDef.color);
            } else if (shapeDef.name === 'Star') {
                const pts = [];
                for (let i = 0; i < 10; i++) {
                    const angle = (Math.PI * 2 * i) / 10 - Math.PI / 2;
                    const r = i % 2 === 0 ? size / 2 : size / 4;
                    pts.push(Math.cos(angle) * r, Math.sin(angle) * r);
                }
                return this.add.polygon(x, y, pts, shapeDef.color);
            } else if (shapeDef.name === 'Cross') {
                const t = size / 4;
                const h = size / 2;
                const pts = [
                    -t, -h, t, -h, t, -t, h, -t, h, t, t, t,
                    t, h, -t, h, -t, t, -h, t, -h, -t, -t, -t,
                ];
                return this.add.polygon(x, y, pts, shapeDef.color);
            }
        };

        // Generate fractal pattern: pick 4 shapes for the 2x2 base pattern
        // The 4x4 grid is made of four 2x2 quadrants, each following the same
        // base pattern but with different shape sets that themselves follow the base pattern
        const basePattern = Phaser.Utils.Array.Shuffle([0, 1, 2, 3]); // positions in 2x2
        // Pick 4 distinct shapes for the "macro" level
        const macroShapes = Phaser.Utils.Array.Shuffle([...shapeDefs]).slice(0, 4);

        // Build the 4x4 grid with fractal self-similarity
        // The macro 2x2 determines which shape family each quadrant uses
        // Within each quadrant, the same 2x2 pattern determines the specific shape
        const grid = [];
        for (let r = 0; r < gridSize; r++) {
            grid[r] = [];
            for (let c = 0; c < gridSize; c++) {
                // Which quadrant (0-3)
                const qr = Math.floor(r / 2);
                const qc = Math.floor(c / 2);
                const quadIdx = basePattern[qr * 2 + qc];

                // Position within quadrant (0-3)
                const lr = r % 2;
                const lc = c % 2;
                const localIdx = basePattern[lr * 2 + lc];

                // Combine: use quadrant to pick a color family offset,
                // and local position to pick the specific shape
                const shapeIdx = (quadIdx + localIdx) % shapeDefs.length;
                grid[r][c] = shapeDefs[shapeIdx];
            }
        }

        // Pick missing cells — one from each quadrant for balance
        const missingCells = [];
        const quadrants = [[0,0], [0,1], [1,0], [1,1]];
        Phaser.Utils.Array.Shuffle(quadrants);
        for (let i = 0; i < numMissing; i++) {
            const [qr, qc] = quadrants[i % quadrants.length];
            const lr = Phaser.Math.Between(0, 1);
            const lc = Phaser.Math.Between(0, 1);
            const r = qr * 2 + lr;
            const c = qc * 2 + lc;
            // Avoid duplicates
            if (!missingCells.some(m => m.r === r && m.c === c)) {
                missingCells.push({ r, c });
            } else {
                // Use the other cell in the quadrant
                const altR = qr * 2 + (1 - lr);
                const altC = qc * 2 + (1 - lc);
                missingCells.push({ r: altR, c: altC });
            }
        }
        const missingSet = new Set(missingCells.map(m => `${m.r},${m.c}`));

        // Draw the grid
        const shapeSize = 55;
        const padding = 12;
        const quadPadding = 8; // extra gap between quadrants
        const totalGridW = gridSize * shapeSize + (gridSize - 1) * padding + quadPadding;
        const totalGridH = totalGridW;
        const gridStartX = (width - totalGridW) / 2 + shapeSize / 2;
        const gridStartY = 85 + shapeSize / 2;

        const getCellPos = (r, c) => {
            const extraX = c >= 2 ? quadPadding : 0;
            const extraY = r >= 2 ? quadPadding : 0;
            return {
                x: gridStartX + c * (shapeSize + padding) + extraX,
                y: gridStartY + r * (shapeSize + padding) + extraY,
            };
        };

        // Draw quadrant borders for visual clarity
        for (let qr = 0; qr < 2; qr++) {
            for (let qc = 0; qc < 2; qc++) {
                const topLeft = getCellPos(qr * 2, qc * 2);
                const botRight = getCellPos(qr * 2 + 1, qc * 2 + 1);
                const cx = (topLeft.x + botRight.x) / 2;
                const cy = (topLeft.y + botRight.y) / 2;
                const qw = botRight.x - topLeft.x + shapeSize + 8;
                const qh = botRight.y - topLeft.y + shapeSize + 8;
                this.add.rectangle(cx, cy, qw, qh)
                    .setStrokeStyle(1, 0x555577)
                    .setFillStyle(0x000000, 0);
            }
        }

        const placeholders = {};
        const questionMarks = {};

        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const { x, y } = getCellPos(r, c);
                const key = `${r},${c}`;

                if (missingSet.has(key)) {
                    const ph = this.add.rectangle(x, y, shapeSize, shapeSize, 0x3a3a6a)
                        .setInteractive({ useHandCursor: true });
                    const qm = this.add.text(x, y, '?', {
                        fontSize: '28px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#888888',
                    }).setOrigin(0.5);
                    placeholders[key] = ph;
                    questionMarks[key] = qm;
                } else {
                    drawShape(x, y, grid[r][c], shapeSize - 6);
                }
            }
        }

        // State tracking
        let selectedCell = null;
        let solvedCount = 0;
        const solvedCells = new Set();
        let selectionOutline = null;

        const feedbackText = this.add.text(width / 2, height - 38, '', {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        const progressText = this.add.text(width / 2, height - 60, `Filled: 0 / ${numMissing}`, {
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
                if (selectionOutline) selectionOutline.destroy();

                selectedCell = { r, c, key };
                const { x, y } = getCellPos(r, c);
                selectionOutline = this.add.rectangle(x, y, shapeSize + 6, shapeSize + 6)
                    .setStrokeStyle(3, 0xffffff)
                    .setFillStyle(0x000000, 0);

                feedbackText.setText(`Pick shape for row ${r + 1}, col ${c + 1}`).setColor('#aaaaaa');
                updateChoices();
            });
        });

        // Build choices area
        const choiceY = height - 100;
        const choiceSize = 42;
        const choicePadding = 14;
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

        const choiceBgs = [];
        const choiceShapeObjs = [];
        const choiceLabels = [];

        for (let i = 0; i < numChoices; i++) {
            const cx = choiceStartX + i * (choiceSize + choicePadding);
            const bg = this.add.rectangle(cx, choiceY, choiceSize + 8, choiceSize + 8, 0x2a2a4a)
                .setInteractive({ useHandCursor: true });
            choiceBgs.push(bg);
            choiceShapeObjs.push(null);

            const label = this.add.text(cx, choiceY + choiceSize / 2 + 10, '', {
                fontSize: '10px',
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
                    solvedCells.add(key);
                    solvedCount++;
                    progressText.setText(`Filled: ${solvedCount} / ${numMissing}`);

                    const { x: sx, y: sy } = getCellPos(selectedCell.r, selectedCell.c);
                    placeholders[key].setVisible(false);
                    questionMarks[key].setVisible(false);
                    drawShape(sx, sy, correct, shapeSize - 6);

                    if (selectionOutline) {
                        selectionOutline.destroy();
                        selectionOutline = null;
                    }
                    selectedCell = null;

                    if (solvedCount >= numMissing) {
                        feedbackText.setText('All correct!').setColor('#44dd44');
                        this.time.delayedCall(600, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    } else {
                        feedbackText.setText('Correct! Pick the next gap.').setColor('#44dd44');
                        clearChoices();
                    }
                } else {
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
                if (choiceShapeObjs[i]) {
                    choiceShapeObjs[i].destroy();
                    choiceShapeObjs[i] = null;
                }
                choiceLabels[i].setText('');
            }
        };

        const updateChoices = () => {
            if (!selectedCell) return;
            const choices = cellChoices[selectedCell.key];

            for (let i = 0; i < numChoices; i++) {
                const cx = choiceStartX + i * (choiceSize + choicePadding);
                if (choiceShapeObjs[i]) {
                    choiceShapeObjs[i].destroy();
                }
                choiceShapeObjs[i] = drawShape(cx, choiceY, choices[i], choiceSize - 10);
                choiceLabels[i].setText(choices[i].colorName);
            }
        };

        feedbackText.setText('Click a "?" cell to select it.').setColor('#aaaaaa');
    }

    createReactionTimePuzzle(config) {
        const { width, height } = this.scale;
        const { targets, targetSize, stayTime, timeLimit, hasDecoys, moving, shrinking, decoyRatio } = config;

        const targetColors = [0x44dd44, 0x4488ff, 0xffdd44, 0xff44ff, 0x44dddd];
        const requiredScore = decoyRatio ? 15 : (shrinking ? 10 : (moving ? 8 : (hasDecoys ? 5 : 3)));

        // Pre-determine decoy sequence when decoyRatio is set
        const numDecoys = decoyRatio ? targets * decoyRatio : 0;
        const totalItems = decoyRatio ? targets + numDecoys : targets;
        let decoySequence = null;
        if (decoyRatio) {
            decoySequence = [];
            for (let i = 0; i < targets; i++) decoySequence.push(false);
            for (let i = 0; i < numDecoys; i++) decoySequence.push(true);
            Phaser.Utils.Array.Shuffle(decoySequence);
        }

        // Instructions
        const instructions = shrinking
            ? 'Click the tiny shrinking targets! Avoid the red X decoys!'
            : moving
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

        const remainText = this.add.text(width / 2, height - 80, `Remaining: ${totalItems}`, {
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
                    if (targetsShown >= totalItems) {
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
            if (gameOver || targetsShown >= totalItems) return;

            const isDecoy = decoySequence ? decoySequence[targetsShown] : (hasDecoys && Math.random() < 0.35);
            const colorIndex = targetsShown % targetColors.length;
            const color = isDecoy ? 0xff4444 : targetColors[colorIndex];
            targetsShown++;
            remainText.setText(`Remaining: ${totalItems - targetsShown}`);

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

            // Shrinking targets: shrink from full size to half over stayTime
            if (shrinking) {
                this.tweens.add({
                    targets: decoyX ? [circle, decoyX] : circle,
                    scaleX: 0.5,
                    scaleY: 0.5,
                    duration: stayTime,
                    ease: 'Linear',
                });
            }

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

        if (config.mode === 'equation-builder') {
            return this.createEquationBuilderPuzzle(config);
        }

        if (config.mode === 'rate-of-change') {
            return this.createRateOfChangePuzzle(config);
        }

        if (config.mode === 'matrix') {
            return this.createMatrixMathPuzzle(config);
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

    createEquationBuilderPuzzle(config) {
        const { width, height } = this.scale;
        const { problems, timeLimit } = config;

        this.add.text(width / 2, 50, 'Build an equation that equals the target!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 75, 'Drag numbers and operators into the slots', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#666666',
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

        const progressText = this.add.text(width / 2 - 200, height - 80, `Round 1/${problems}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        let dynamicObjects = [];

        const clearDynamic = () => {
            dynamicObjects.forEach(obj => obj.destroy());
            dynamicObjects = [];
        };

        // Generate a solvable equation-builder problem
        const generateProblem = (round) => {
            // Increasing complexity per round
            // Round 0: target 10-50, small numbers
            // Round 1: target 20-100, medium numbers
            // Round 2: target 50-200, larger numbers
            const operators = ['+', '-', '×', '÷'];
            let target, numbers;

            if (round === 0) {
                // Simple: pick 2 numbers and an operator that produce a nice result
                const a = Phaser.Math.Between(2, 12);
                const b = Phaser.Math.Between(2, 12);
                const op = ['+', '×'][Phaser.Math.Between(0, 1)];
                target = op === '+' ? a + b : a * b;
                // Give 5 numbers including a and b, plus 3 distractors
                const extras = [];
                while (extras.length < 3) {
                    const e = Phaser.Math.Between(1, 15);
                    if (e !== a && e !== b && !extras.includes(e)) extras.push(e);
                }
                numbers = Phaser.Utils.Array.Shuffle([a, b, ...extras]);
            } else if (round === 1) {
                // Medium: a op1 b op2 c, two operations
                const a = Phaser.Math.Between(3, 15);
                const b = Phaser.Math.Between(2, 10);
                const c = Phaser.Math.Between(2, 10);
                // Use a * b + c or a + b * c for interesting targets
                const pattern = Phaser.Math.Between(0, 1);
                if (pattern === 0) {
                    target = a * b + c;
                } else {
                    target = a + b * c;
                }
                const extras = [];
                while (extras.length < 2) {
                    const e = Phaser.Math.Between(1, 20);
                    if (e !== a && e !== b && e !== c && !extras.includes(e)) extras.push(e);
                }
                numbers = Phaser.Utils.Array.Shuffle([a, b, c, ...extras]);
            } else {
                // Hard: larger numbers, a * b + c * d style
                const a = Phaser.Math.Between(5, 20);
                const b = Phaser.Math.Between(2, 12);
                const c = Phaser.Math.Between(2, 10);
                target = a * b + c;
                const extras = [];
                while (extras.length < 2) {
                    const e = Phaser.Math.Between(1, 25);
                    if (e !== a && e !== b && e !== c && !extras.includes(e)) extras.push(e);
                }
                numbers = Phaser.Utils.Array.Shuffle([a, b, c, ...extras]);
            }

            return { target, numbers, operators };
        };

        const showProblem = () => {
            clearDynamic();
            progressText.setText(`Round ${currentProblem + 1}/${problems}`);

            const { target, numbers, operators } = generateProblem(currentProblem);

            // Display target
            const targetLabel = this.add.text(width / 2, 115, `Target: ${target}`, {
                fontSize: '36px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffdd44',
            }).setOrigin(0.5);
            dynamicObjects.push(targetLabel);

            // Equation slots area
            const slotY = 220;
            const slotWidth = 60;
            const slotHeight = 50;
            const slotSpacing = 70;
            // Max expression: n op n op n op n op n = 5 numbers + 4 operators = 9 slots
            const maxSlots = 9;
            const slotsStartX = width / 2 - ((maxSlots - 1) * slotSpacing) / 2;

            const slots = [];
            for (let i = 0; i < maxSlots; i++) {
                const sx = slotsStartX + i * slotSpacing;
                const isOperatorSlot = i % 2 === 1;
                const slotBg = this.add.rectangle(sx, slotY, slotWidth, slotHeight, isOperatorSlot ? 0x3a5a3a : 0x3a3a5a)
                    .setStrokeStyle(2, 0x888888);
                const slotText = this.add.text(sx, slotY, '', {
                    fontSize: '24px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);

                const slotLabel = this.add.text(sx, slotY + 32, isOperatorSlot ? 'op' : 'num', {
                    fontSize: '10px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#555555',
                }).setOrigin(0.5);

                slots.push({ bg: slotBg, text: slotText, value: null, type: isOperatorSlot ? 'op' : 'num', sourceItem: null });
                dynamicObjects.push(slotBg, slotText, slotLabel);
            }

            // Number tiles (draggable)
            const numY = 330;
            const numSpacing = 80;
            const numStartX = width / 2 - ((numbers.length - 1) * numSpacing) / 2;
            const numberItems = [];

            numbers.forEach((num, i) => {
                const nx = numStartX + i * numSpacing;
                const bg = this.add.rectangle(nx, numY, 60, 50, 0x4a4a8a)
                    .setInteractive({ useHandCursor: true, draggable: true });
                const txt = this.add.text(nx, numY, `${num}`, {
                    fontSize: '26px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);
                txt.setInteractive({ useHandCursor: true, draggable: true });

                const item = { bg, text: txt, value: num, type: 'num', originX: nx, originY: numY, inSlot: null };
                numberItems.push(item);
                dynamicObjects.push(bg, txt);

                // Make draggable
                this.input.setDraggable(bg);
                this.input.setDraggable(txt);

                const dragHandler = (pointer, dragX, dragY) => {
                    bg.setPosition(dragX, dragY);
                    txt.setPosition(dragX, dragY);
                };

                bg.on('drag', dragHandler);
                txt.on('drag', dragHandler);

                const dropHandler = () => {
                    // Check if dropped on a number slot
                    let placed = false;
                    for (const slot of slots) {
                        if (slot.type !== 'num') continue;
                        const dist = Phaser.Math.Distance.Between(bg.x, bg.y, slot.bg.x, slot.bg.y);
                        if (dist < 40) {
                            // If slot already occupied, return old item
                            if (slot.sourceItem) {
                                const old = slot.sourceItem;
                                old.bg.setPosition(old.originX, old.originY);
                                old.text.setPosition(old.originX, old.originY);
                                old.bg.setAlpha(1);
                                old.text.setAlpha(1);
                                old.inSlot = null;
                            }
                            // If this item was in another slot, clear it
                            if (item.inSlot) {
                                item.inSlot.value = null;
                                item.inSlot.text.setText('');
                                item.inSlot.sourceItem = null;
                            }
                            slot.value = num;
                            slot.text.setText(`${num}`);
                            slot.sourceItem = item;
                            item.inSlot = slot;
                            bg.setPosition(slot.bg.x, slot.bg.y);
                            txt.setPosition(slot.bg.x, slot.bg.y);
                            bg.setAlpha(0.5);
                            txt.setAlpha(1);
                            placed = true;
                            break;
                        }
                    }
                    if (!placed) {
                        // Return to origin
                        if (item.inSlot) {
                            item.inSlot.value = null;
                            item.inSlot.text.setText('');
                            item.inSlot.sourceItem = null;
                            item.inSlot = null;
                        }
                        bg.setPosition(item.originX, item.originY);
                        txt.setPosition(item.originX, item.originY);
                        bg.setAlpha(1);
                        txt.setAlpha(1);
                    }
                };

                bg.on('dragend', dropHandler);
                txt.on('dragend', dropHandler);
            });

            // Operator tiles (draggable)
            const opY = 420;
            const opSpacing = 80;
            const opStartX = width / 2 - ((operators.length - 1) * opSpacing) / 2;

            operators.forEach((op, i) => {
                const ox = opStartX + i * opSpacing;
                const bg = this.add.rectangle(ox, opY, 50, 50, 0x5a3a5a)
                    .setInteractive({ useHandCursor: true, draggable: true });
                const txt = this.add.text(ox, opY, op === '×' ? '×' : op === '÷' ? '÷' : op, {
                    fontSize: '28px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffaaff',
                }).setOrigin(0.5);
                txt.setInteractive({ useHandCursor: true, draggable: true });

                const item = { bg, text: txt, value: op, type: 'op', originX: ox, originY: opY, inSlot: null };
                dynamicObjects.push(bg, txt);

                this.input.setDraggable(bg);
                this.input.setDraggable(txt);

                const dragHandler = (pointer, dragX, dragY) => {
                    bg.setPosition(dragX, dragY);
                    txt.setPosition(dragX, dragY);
                };

                bg.on('drag', dragHandler);
                txt.on('drag', dragHandler);

                const dropHandler = () => {
                    let placed = false;
                    for (const slot of slots) {
                        if (slot.type !== 'op') continue;
                        const dist = Phaser.Math.Distance.Between(bg.x, bg.y, slot.bg.x, slot.bg.y);
                        if (dist < 40) {
                            if (slot.sourceItem) {
                                const old = slot.sourceItem;
                                old.bg.setPosition(old.originX, old.originY);
                                old.text.setPosition(old.originX, old.originY);
                                old.bg.setAlpha(1);
                                old.text.setAlpha(1);
                                old.inSlot = null;
                            }
                            if (item.inSlot) {
                                item.inSlot.value = null;
                                item.inSlot.text.setText('');
                                item.inSlot.sourceItem = null;
                            }
                            slot.value = op;
                            slot.text.setText(op === '×' ? '×' : op === '÷' ? '÷' : op);
                            slot.sourceItem = item;
                            item.inSlot = slot;
                            bg.setPosition(slot.bg.x, slot.bg.y);
                            txt.setPosition(slot.bg.x, slot.bg.y);
                            bg.setAlpha(0.5);
                            txt.setAlpha(1);
                            placed = true;
                            break;
                        }
                    }
                    if (!placed) {
                        if (item.inSlot) {
                            item.inSlot.value = null;
                            item.inSlot.text.setText('');
                            item.inSlot.sourceItem = null;
                            item.inSlot = null;
                        }
                        bg.setPosition(item.originX, item.originY);
                        txt.setPosition(item.originX, item.originY);
                        bg.setAlpha(1);
                        txt.setAlpha(1);
                    }
                };

                bg.on('dragend', dropHandler);
                txt.on('dragend', dropHandler);
            });

            // Evaluate equation helper
            const evaluateSlots = () => {
                // Collect filled slots from left to right, stopping at first empty
                const tokens = [];
                for (let i = 0; i < maxSlots; i++) {
                    if (slots[i].value === null) break;
                    tokens.push(slots[i].value);
                }
                // Must have at least 3 tokens (num op num) and odd count
                if (tokens.length < 3 || tokens.length % 2 === 0) return null;

                // Evaluate with PEMDAS
                // First pass: handle × and ÷
                const reduced = [tokens[0]];
                for (let i = 1; i < tokens.length; i += 2) {
                    const op = tokens[i];
                    const val = tokens[i + 1];
                    if (val === undefined) return null;
                    if (op === '×') {
                        reduced[reduced.length - 1] = reduced[reduced.length - 1] * val;
                    } else if (op === '÷') {
                        if (val === 0) return null;
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

            // Feedback text
            let feedbackText = null;

            // Check button
            const checkBtn = this.add.rectangle(width / 2, 500, 160, 50, 0x4a8a4a)
                .setInteractive({ useHandCursor: true });
            const checkLabel = this.add.text(width / 2, 500, 'Check', {
                fontSize: '24px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            dynamicObjects.push(checkBtn, checkLabel);

            checkBtn.on('pointerover', () => checkBtn.setFillStyle(0x6aaa6a));
            checkBtn.on('pointerout', () => checkBtn.setFillStyle(0x4a8a4a));

            checkBtn.on('pointerdown', () => {
                const result = evaluateSlots();
                if (feedbackText) { feedbackText.destroy(); }

                if (result === null) {
                    feedbackText = this.add.text(width / 2, 545, 'Fill in at least: number op number', {
                        fontSize: '16px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffaa44',
                    }).setOrigin(0.5);
                    dynamicObjects.push(feedbackText);
                } else if (Math.abs(result - target) < 0.0001) {
                    feedbackText = this.add.text(width / 2, 545, 'Correct!', {
                        fontSize: '24px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#44dd44',
                    }).setOrigin(0.5);
                    dynamicObjects.push(feedbackText);

                    // Disable interactions
                    checkBtn.disableInteractive();

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
                    feedbackText = this.add.text(width / 2, 545, `= ${Number.isInteger(result) ? result : result.toFixed(2)}, not ${target}. Try again!`, {
                        fontSize: '18px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ff4444',
                    }).setOrigin(0.5);
                    dynamicObjects.push(feedbackText);
                }
            });

            // Clear button
            const clearBtn = this.add.rectangle(width / 2 + 120, 500, 100, 50, 0x8a4a4a)
                .setInteractive({ useHandCursor: true });
            const clearLabel = this.add.text(width / 2 + 120, 500, 'Clear', {
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            dynamicObjects.push(clearBtn, clearLabel);

            clearBtn.on('pointerover', () => clearBtn.setFillStyle(0xaa6a6a));
            clearBtn.on('pointerout', () => clearBtn.setFillStyle(0x8a4a4a));

            clearBtn.on('pointerdown', () => {
                // Return all items to origin
                slots.forEach(slot => {
                    if (slot.sourceItem) {
                        const item = slot.sourceItem;
                        item.bg.setPosition(item.originX, item.originY);
                        item.text.setPosition(item.originX, item.originY);
                        item.bg.setAlpha(1);
                        item.text.setAlpha(1);
                        item.inSlot = null;
                    }
                    slot.value = null;
                    slot.text.setText('');
                    slot.sourceItem = null;
                });
                if (feedbackText) { feedbackText.destroy(); feedbackText = null; }
            });
        };

        showProblem();
    }

    createRateOfChangePuzzle(config) {
        const { width, height } = this.scale;
        const { problems, timeLimit } = config;

        this.add.text(width / 2, 40, 'Read the graph and answer!', {
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

        const progressText = this.add.text(width / 2 - 200, height - 80, `Question 1/${problems}`, {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        let dynamicObjects = [];

        const clearDynamic = () => {
            dynamicObjects.forEach(obj => obj.destroy());
            dynamicObjects = [];
        };

        // Function generators that produce {fn, label, desc} where fn(x) returns y
        const functionGenerators = [
            // Quadratic: a*x^2 + b*x + c
            () => {
                const a = Phaser.Math.FloatBetween(0.05, 0.3) * (Phaser.Math.Between(0, 1) ? 1 : -1);
                const b = Phaser.Math.FloatBetween(-1, 2);
                const c = Phaser.Math.Between(1, 5);
                const fn = (x) => a * x * x + b * x + c;
                const aStr = a > 0 ? a.toFixed(2) : `(${a.toFixed(2)})`;
                return { fn, label: `f(x) = ${aStr}x² + ${b.toFixed(1)}x + ${c}`, a, b, c, type: 'quadratic' };
            },
            // Sine wave: a*sin(b*x) + c
            () => {
                const a = Phaser.Math.Between(2, 5);
                const b = Phaser.Math.FloatBetween(0.3, 0.8);
                const c = Phaser.Math.Between(3, 6);
                const fn = (x) => a * Math.sin(b * x) + c;
                return { fn, label: `f(x) = ${a}·sin(${b.toFixed(1)}x) + ${c}`, a, b, c, type: 'sine' };
            },
            // Linear with kink: different slopes in two halves
            () => {
                const m1 = Phaser.Math.FloatBetween(0.5, 2.0);
                const m2 = Phaser.Math.FloatBetween(-1.5, 0.5);
                const c = Phaser.Math.Between(1, 4);
                const kink = 5;
                const fn = (x) => x <= kink ? m1 * x + c : m1 * kink + c + m2 * (x - kink);
                return { fn, label: 'Piecewise linear', m1, m2, c, kink, type: 'piecewise' };
            },
            // Exponential growth: a * e^(b*x) + c
            () => {
                const a = Phaser.Math.FloatBetween(0.5, 1.5);
                const b = Phaser.Math.FloatBetween(0.15, 0.25);
                const c = Phaser.Math.Between(1, 3);
                const fn = (x) => a * Math.exp(b * x) + c;
                return { fn, label: `f(x) = ${a.toFixed(1)}·e^(${b.toFixed(2)}x) + ${c}`, type: 'exponential' };
            },
        ];

        // Question generators that produce {question, choices, correctIndex}
        // Each takes the function data and graph parameters
        const questionGenerators = [
            // "At what point is the value increasing fastest?"
            (funcData, xMin, xMax, step) => {
                // Sample rate of change at various x values
                const candidates = [];
                for (let x = xMin + step; x <= xMax - step; x += step) {
                    const rate = (funcData.fn(x + step) - funcData.fn(x - step)) / (2 * step);
                    candidates.push({ x: Math.round(x * 10) / 10, rate });
                }
                candidates.sort((a, b) => b.rate - a.rate);
                const best = candidates[0];
                // Pick 3 wrong answers from different parts
                const wrong = candidates.filter(c => Math.abs(c.x - best.x) > 1.5).slice(0, 3);
                while (wrong.length < 3) {
                    wrong.push({ x: Phaser.Math.FloatBetween(xMin + 1, xMax - 1), rate: 0 });
                }
                const choices = Phaser.Utils.Array.Shuffle([
                    { label: `x ≈ ${best.x}`, correct: true },
                    { label: `x ≈ ${wrong[0].x.toFixed ? wrong[0].x.toFixed(1) : wrong[0].x}`, correct: false },
                    { label: `x ≈ ${wrong[1].x.toFixed ? wrong[1].x.toFixed(1) : wrong[1].x}`, correct: false },
                    { label: `x ≈ ${wrong[2].x.toFixed ? wrong[2].x.toFixed(1) : wrong[2].x}`, correct: false },
                ]);
                const correctIndex = choices.findIndex(c => c.correct);
                return {
                    question: 'Where is the value increasing fastest?',
                    choices: choices.map(c => c.label),
                    correctIndex,
                };
            },
            // "What is the approximate value at x=N?"
            (funcData, xMin, xMax) => {
                const queryX = Phaser.Math.Between(Math.ceil(xMin) + 1, Math.floor(xMax) - 1);
                const actual = funcData.fn(queryX);
                const rounded = Math.round(actual * 10) / 10;
                // Generate wrong choices that are plausible
                const offsets = Phaser.Utils.Array.Shuffle([2, -2, 4, -3, 1.5, -1.5]);
                const wrongs = [];
                for (const off of offsets) {
                    const val = Math.round((rounded + off) * 10) / 10;
                    if (val !== rounded && !wrongs.includes(val)) wrongs.push(val);
                    if (wrongs.length >= 3) break;
                }
                const choices = Phaser.Utils.Array.Shuffle([
                    { label: `≈ ${rounded}`, correct: true },
                    { label: `≈ ${wrongs[0]}`, correct: false },
                    { label: `≈ ${wrongs[1]}`, correct: false },
                    { label: `≈ ${wrongs[2]}`, correct: false },
                ]);
                const correctIndex = choices.findIndex(c => c.correct);
                return {
                    question: `What is the approximate value at x = ${queryX}?`,
                    choices: choices.map(c => c.label),
                    correctIndex,
                };
            },
            // "Where is the function decreasing?"
            (funcData, xMin, xMax, step) => {
                // Find intervals where function is decreasing
                const intervals = [];
                let decStart = null;
                for (let x = xMin; x <= xMax - step; x += step) {
                    const slope = funcData.fn(x + step) - funcData.fn(x);
                    if (slope < -0.01) {
                        if (decStart === null) decStart = x;
                    } else {
                        if (decStart !== null) {
                            intervals.push({ start: Math.round(decStart * 10) / 10, end: Math.round(x * 10) / 10 });
                            decStart = null;
                        }
                    }
                }
                if (decStart !== null) {
                    intervals.push({ start: Math.round(decStart * 10) / 10, end: Math.round(xMax * 10) / 10 });
                }

                if (intervals.length === 0) {
                    // Fallback: ask value question instead
                    return questionGenerators[1](funcData, xMin, xMax, step);
                }

                const correctInterval = intervals[0];
                const correctLabel = `x = ${correctInterval.start} to ${correctInterval.end}`;

                // Generate wrong interval choices
                const wrongIntervals = [];
                for (let i = 0; i < 3; i++) {
                    const s = Phaser.Math.FloatBetween(xMin, xMax - 2);
                    const e = Math.round((s + Phaser.Math.FloatBetween(1, 3)) * 10) / 10;
                    wrongIntervals.push(`x = ${Math.round(s * 10) / 10} to ${Math.min(e, xMax)}`);
                }

                const choices = Phaser.Utils.Array.Shuffle([
                    { label: correctLabel, correct: true },
                    { label: wrongIntervals[0], correct: false },
                    { label: wrongIntervals[1], correct: false },
                    { label: wrongIntervals[2], correct: false },
                ]);
                const correctIndex = choices.findIndex(c => c.correct);
                return {
                    question: 'Over which interval is the function decreasing?',
                    choices: choices.map(c => c.label),
                    correctIndex,
                };
            },
            // "What is the approximate rate of change at x=N?"
            (funcData, xMin, xMax, step) => {
                const queryX = Phaser.Math.Between(Math.ceil(xMin) + 1, Math.floor(xMax) - 1);
                const rate = (funcData.fn(queryX + step) - funcData.fn(queryX - step)) / (2 * step);
                const rounded = Math.round(rate * 10) / 10;
                const offsets = Phaser.Utils.Array.Shuffle([1.5, -1.5, 3, -2, 0.8, -0.8]);
                const wrongs = [];
                for (const off of offsets) {
                    const val = Math.round((rounded + off) * 10) / 10;
                    if (val !== rounded && !wrongs.includes(val)) wrongs.push(val);
                    if (wrongs.length >= 3) break;
                }
                const choices = Phaser.Utils.Array.Shuffle([
                    { label: `≈ ${rounded}`, correct: true },
                    { label: `≈ ${wrongs[0]}`, correct: false },
                    { label: `≈ ${wrongs[1]}`, correct: false },
                    { label: `≈ ${wrongs[2]}`, correct: false },
                ]);
                const correctIndex = choices.findIndex(c => c.correct);
                return {
                    question: `What is the approximate rate of change at x = ${queryX}?`,
                    choices: choices.map(c => c.label),
                    correctIndex,
                };
            },
        ];

        const drawGraph = (funcData, graphX, graphY, graphW, graphH, xMin, xMax) => {
            const graphics = this.add.graphics();
            dynamicObjects.push(graphics);

            // Background
            graphics.fillStyle(0x1a1a2e, 1);
            graphics.fillRect(graphX, graphY, graphW, graphH);

            // Border
            graphics.lineStyle(2, 0x444466);
            graphics.strokeRect(graphX, graphY, graphW, graphH);

            // Compute y range from function
            const step = 0.5;
            let yMin = Infinity, yMax = -Infinity;
            const points = [];
            for (let x = xMin; x <= xMax; x += step) {
                const y = funcData.fn(x);
                if (y < yMin) yMin = y;
                if (y > yMax) yMax = y;
                points.push({ x, y });
            }
            // Add some padding to y range
            const yPad = (yMax - yMin) * 0.1 || 1;
            yMin -= yPad;
            yMax += yPad;

            const toScreenX = (x) => graphX + ((x - xMin) / (xMax - xMin)) * graphW;
            const toScreenY = (y) => graphY + graphH - ((y - yMin) / (yMax - yMin)) * graphH;

            // Grid lines and labels
            graphics.lineStyle(1, 0x333355);
            const xStep = Math.ceil((xMax - xMin) / 10);
            for (let x = Math.ceil(xMin); x <= xMax; x += xStep) {
                const sx = toScreenX(x);
                graphics.moveTo(sx, graphY);
                graphics.lineTo(sx, graphY + graphH);
                graphics.strokePath();
                const label = this.add.text(sx, graphY + graphH + 5, `${x}`, {
                    fontSize: '11px', fontFamily: 'Arial, sans-serif', color: '#888888',
                }).setOrigin(0.5, 0);
                dynamicObjects.push(label);
            }

            const yStepVal = (yMax - yMin) / 5;
            for (let i = 0; i <= 5; i++) {
                const yVal = yMin + i * yStepVal;
                const sy = toScreenY(yVal);
                graphics.moveTo(graphX, sy);
                graphics.lineTo(graphX + graphW, sy);
                graphics.strokePath();
                const label = this.add.text(graphX - 5, sy, `${yVal.toFixed(1)}`, {
                    fontSize: '10px', fontFamily: 'Arial, sans-serif', color: '#888888',
                }).setOrigin(1, 0.5);
                dynamicObjects.push(label);
            }

            // Draw x-axis if in range
            if (yMin <= 0 && yMax >= 0) {
                graphics.lineStyle(1, 0x666688);
                const zeroY = toScreenY(0);
                graphics.moveTo(graphX, zeroY);
                graphics.lineTo(graphX + graphW, zeroY);
                graphics.strokePath();
            }

            // Axis labels
            const xAxisLabel = this.add.text(graphX + graphW / 2, graphY + graphH + 22, 'x', {
                fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#aaaaaa',
            }).setOrigin(0.5);
            dynamicObjects.push(xAxisLabel);

            const yAxisLabel = this.add.text(graphX - 30, graphY + graphH / 2, 'f(x)', {
                fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#aaaaaa',
            }).setOrigin(0.5).setAngle(-90);
            dynamicObjects.push(yAxisLabel);

            // Plot the curve
            graphics.lineStyle(3, 0x44aaff);
            graphics.beginPath();
            for (let i = 0; i < points.length; i++) {
                const sx = toScreenX(points[i].x);
                const sy = toScreenY(points[i].y);
                if (i === 0) {
                    graphics.moveTo(sx, sy);
                } else {
                    graphics.lineTo(sx, sy);
                }
            }
            graphics.strokePath();

            // Plot dots at integer x values
            for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
                const y = funcData.fn(x);
                const sx = toScreenX(x);
                const sy = toScreenY(y);
                graphics.fillStyle(0x44aaff, 1);
                graphics.fillCircle(sx, sy, 4);
            }

            return { toScreenX, toScreenY, yMin, yMax };
        };

        const showProblem = () => {
            clearDynamic();
            progressText.setText(`Question ${currentProblem + 1}/${problems}`);

            // Pick a random function
            const funcData = functionGenerators[Phaser.Math.Between(0, functionGenerators.length - 1)]();
            const xMin = 0;
            const xMax = 10;
            const step = 0.5;

            // Graph area
            const graphX = 80;
            const graphY = 65;
            const graphW = width - 160;
            const graphH = 260;

            drawGraph(funcData, graphX, graphY, graphW, graphH, xMin, xMax);

            // Pick a question type, cycling through them
            const qGen = questionGenerators[currentProblem % questionGenerators.length];
            const qData = qGen(funcData, xMin, xMax, step);

            // Display question
            const questionText = this.add.text(width / 2, graphY + graphH + 50, qData.question, {
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
                wordWrap: { width: width - 80 },
            }).setOrigin(0.5);
            dynamicObjects.push(questionText);

            // Display choices as buttons
            const choiceStartY = graphY + graphH + 90;
            const choiceBtns = [];

            qData.choices.forEach((choice, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const btnX = width / 2 - 140 + col * 280;
                const btnY = choiceStartY + row * 55;

                const bg = this.add.rectangle(btnX, btnY, 250, 44, 0x4a4a8a)
                    .setInteractive({ useHandCursor: true });
                dynamicObjects.push(bg);

                const txt = this.add.text(btnX, btnY, choice, {
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);
                dynamicObjects.push(txt);

                bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                choiceBtns.push({ bg, txt, index: i });

                bg.on('pointerdown', () => {
                    // Disable all choice buttons
                    choiceBtns.forEach(b => {
                        b.bg.disableInteractive();
                        b.bg.off('pointerover');
                        b.bg.off('pointerout');
                    });

                    if (i === qData.correctIndex) {
                        bg.setFillStyle(0x44aa44);
                        const fb = this.add.text(width / 2, choiceStartY + 120, 'Correct!', {
                            fontSize: '22px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#44dd44',
                        }).setOrigin(0.5);
                        dynamicObjects.push(fb);

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
                        bg.setFillStyle(0xaa4444);
                        // Highlight correct answer
                        choiceBtns[qData.correctIndex].bg.setFillStyle(0x44aa44);
                        const fb = this.add.text(width / 2, choiceStartY + 120, 'Wrong! The correct answer is highlighted.', {
                            fontSize: '18px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#ff4444',
                        }).setOrigin(0.5);
                        dynamicObjects.push(fb);

                        // Still advance after showing the correct answer
                        currentProblem++;
                        if (currentProblem >= problems) {
                            timerEvent.remove(false);
                            this.mathCleanup = null;
                            this.time.delayedCall(1500, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        } else {
                            this.time.delayedCall(1500, () => {
                                showProblem();
                            });
                        }
                    }
                });
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

    createMatrixMathPuzzle(config) {
        const { width, height } = this.scale;
        const { problems, timeLimit } = config;

        this.add.text(width / 2, 30, 'Matrix Math', {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Timer
        let timeLeft = timeLimit;
        const timerText = this.add.text(width - 80, 30, `Time: ${timeLeft}s`, {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        const timerEvent = this.time.addEvent({
            delay: 1000,
            repeat: timeLimit - 1,
            callback: () => {
                timeLeft--;
                timerText.setText(`Time: ${timeLeft}s`);
                if (timeLeft <= 10) timerText.setColor('#ff4444');
                if (timeLeft <= 0) {
                    this.mathCleanup = null;
                    this.handleTimeUp();
                }
            },
        });

        this.mathCleanup = () => { timerEvent.remove(false); };

        const progressText = this.add.text(80, 30, `Problem 1/${problems}`, {
            fontSize: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        let currentProblem = 0;
        let dynamicObjects = [];

        const clearDynamic = () => {
            dynamicObjects.forEach(o => o.destroy());
            dynamicObjects = [];
        };

        const randMatrix = () => [
            [Phaser.Math.Between(-9, 9), Phaser.Math.Between(-9, 9)],
            [Phaser.Math.Between(-9, 9), Phaser.Math.Between(-9, 9)],
        ];

        const drawMatrix = (mat, cx, cy, label) => {
            const cellW = 52, cellH = 42, gap = 4;
            const totalW = cellW * 2 + gap;
            const totalH = cellH * 2 + gap;
            const sx = cx - totalW / 2;
            const sy = cy - totalH / 2;

            if (label) {
                const lt = this.add.text(cx, sy - 24, label, {
                    fontSize: '16px', fontFamily: 'Arial, sans-serif', color: '#888888',
                }).setOrigin(0.5);
                dynamicObjects.push(lt);
            }

            // Bracket lines
            const bracketColor = 0x888888;
            const lLeft = this.add.rectangle(sx - 6, cy, 3, totalH + 10, bracketColor);
            const lRight = this.add.rectangle(sx + totalW + 6, cy, 3, totalH + 10, bracketColor);
            dynamicObjects.push(lLeft, lRight);

            for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 2; c++) {
                    const x = sx + c * (cellW + gap) + cellW / 2;
                    const y = sy + r * (cellH + gap) + cellH / 2;
                    const bg = this.add.rectangle(x, y, cellW, cellH, 0x3a3a6a);
                    const txt = this.add.text(x, y, `${mat[r][c]}`, {
                        fontSize: '22px', fontFamily: 'Arial, sans-serif', color: '#ffffff',
                    }).setOrigin(0.5);
                    dynamicObjects.push(bg, txt);
                }
            }
        };

        const showProblem = () => {
            clearDynamic();
            progressText.setText(`Problem ${currentProblem + 1}/${problems}`);

            // Pick a random problem type
            const types = ['add', 'multiply-scalar', 'transpose'];
            const type = Phaser.Utils.Array.GetRandom(types);

            let answer; // 2x2 array
            let instructionStr = '';

            if (type === 'add') {
                const A = randMatrix();
                const B = randMatrix();
                answer = [
                    [A[0][0] + B[0][0], A[0][1] + B[0][1]],
                    [A[1][0] + B[1][0], A[1][1] + B[1][1]],
                ];
                instructionStr = 'Find A + B';
                drawMatrix(A, width / 2 - 100, height / 2 - 100, 'A');
                const plusText = this.add.text(width / 2, height / 2 - 100, '+', {
                    fontSize: '28px', fontFamily: 'Arial, sans-serif', color: '#ffffff',
                }).setOrigin(0.5);
                dynamicObjects.push(plusText);
                drawMatrix(B, width / 2 + 100, height / 2 - 100, 'B');
            } else if (type === 'multiply-scalar') {
                const A = randMatrix();
                const scalar = 2;
                answer = [
                    [A[0][0] * scalar, A[0][1] * scalar],
                    [A[1][0] * scalar, A[1][1] * scalar],
                ];
                instructionStr = 'Multiply all elements by 2';
                drawMatrix(A, width / 2, height / 2 - 100, 'A');
            } else {
                // transpose
                const A = randMatrix();
                answer = [
                    [A[0][0], A[1][0]],
                    [A[0][1], A[1][1]],
                ];
                instructionStr = 'Find the transpose of A';
                drawMatrix(A, width / 2, height / 2 - 100, 'A');
            }

            const instrText = this.add.text(width / 2, 60, instructionStr, {
                fontSize: '18px', fontFamily: 'Arial, sans-serif', color: '#44bbff',
            }).setOrigin(0.5);
            dynamicObjects.push(instrText);

            // Result grid - 2x2 input cells
            const cellW = 64, cellH = 50, gap = 6;
            const gridW = cellW * 2 + gap;
            const gridH = cellH * 2 + gap;
            const gridX = width / 2 - gridW / 2;
            const gridY = height / 2 + 40;

            const resultLabel = this.add.text(width / 2, gridY - 20, 'Enter result:', {
                fontSize: '16px', fontFamily: 'Arial, sans-serif', color: '#aaaaaa',
            }).setOrigin(0.5);
            dynamicObjects.push(resultLabel);

            const inputCells = [];
            let selectedCell = null;

            for (let r = 0; r < 2; r++) {
                inputCells[r] = [];
                for (let c = 0; c < 2; c++) {
                    const x = gridX + c * (cellW + gap) + cellW / 2;
                    const y = gridY + r * (cellH + gap) + cellH / 2;
                    const bg = this.add.rectangle(x, y, cellW, cellH, 0x2a2a4a)
                        .setStrokeStyle(2, 0x6a6aaa)
                        .setInteractive({ useHandCursor: true });
                    const valText = this.add.text(x, y, '', {
                        fontSize: '24px', fontFamily: 'Arial, sans-serif', color: '#ffffff',
                    }).setOrigin(0.5);
                    dynamicObjects.push(bg, valText);

                    const cell = { r, c, bg, valText, value: null };
                    inputCells[r][c] = cell;

                    bg.on('pointerdown', () => {
                        // Deselect previous
                        if (selectedCell) {
                            selectedCell.bg.setStrokeStyle(2, 0x6a6aaa);
                        }
                        selectedCell = cell;
                        bg.setStrokeStyle(3, 0x44ff44);
                    });
                }
            }

            // Select first cell by default
            selectedCell = inputCells[0][0];
            selectedCell.bg.setStrokeStyle(3, 0x44ff44);

            // Number pad: -9 to 9
            const padNumbers = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const padY = gridY + gridH + 30;
            const padBtnW = 38, padBtnH = 34, padGap = 4;
            const cols = 10;
            const padTotalW = cols * (padBtnW + padGap) - padGap;
            const padStartX = width / 2 - padTotalW / 2;

            padNumbers.forEach((num, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const px = padStartX + col * (padBtnW + padGap) + padBtnW / 2;
                const py = padY + row * (padBtnH + padGap) + padBtnH / 2;
                const bg = this.add.rectangle(px, py, padBtnW, padBtnH, 0x4a4a7a)
                    .setInteractive({ useHandCursor: true });
                const txt = this.add.text(px, py, `${num}`, {
                    fontSize: '16px', fontFamily: 'Arial, sans-serif', color: '#ffffff',
                }).setOrigin(0.5);
                dynamicObjects.push(bg, txt);

                bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                bg.on('pointerout', () => bg.setFillStyle(0x4a4a7a));
                bg.on('pointerdown', () => {
                    if (!selectedCell) return;
                    selectedCell.value = num;
                    selectedCell.valText.setText(`${num}`);
                    // Auto-advance to next empty cell
                    const order = [inputCells[0][0], inputCells[0][1], inputCells[1][0], inputCells[1][1]];
                    const curIdx = order.indexOf(selectedCell);
                    for (let k = 1; k <= 4; k++) {
                        const next = order[(curIdx + k) % 4];
                        if (next.value === null) {
                            selectedCell.bg.setStrokeStyle(2, 0x6a6aaa);
                            selectedCell = next;
                            next.bg.setStrokeStyle(3, 0x44ff44);
                            break;
                        }
                    }
                });
            });

            // Submit button
            const submitY = padY + Math.ceil(padNumbers.length / cols) * (padBtnH + padGap) + 20;
            const submitBg = this.add.rectangle(width / 2, submitY, 140, 44, 0x2a8a2a)
                .setInteractive({ useHandCursor: true });
            const submitTxt = this.add.text(width / 2, submitY, 'Submit', {
                fontSize: '20px', fontFamily: 'Arial, sans-serif', color: '#ffffff',
            }).setOrigin(0.5);
            dynamicObjects.push(submitBg, submitTxt);

            let feedbackText = null;

            submitBg.on('pointerover', () => submitBg.setFillStyle(0x3aaa3a));
            submitBg.on('pointerout', () => submitBg.setFillStyle(0x2a8a2a));
            submitBg.on('pointerdown', () => {
                // Check if all cells filled
                for (let r2 = 0; r2 < 2; r2++) {
                    for (let c2 = 0; c2 < 2; c2++) {
                        if (inputCells[r2][c2].value === null) {
                            if (feedbackText) feedbackText.destroy();
                            feedbackText = this.add.text(width / 2, submitY + 36, 'Fill all cells!', {
                                fontSize: '16px', fontFamily: 'Arial, sans-serif', color: '#ffaa00',
                            }).setOrigin(0.5);
                            dynamicObjects.push(feedbackText);
                            return;
                        }
                    }
                }

                // Check answer
                let correct = true;
                for (let r2 = 0; r2 < 2; r2++) {
                    for (let c2 = 0; c2 < 2; c2++) {
                        if (inputCells[r2][c2].value !== answer[r2][c2]) {
                            correct = false;
                            inputCells[r2][c2].bg.setFillStyle(0x8a2a2a);
                        } else {
                            inputCells[r2][c2].bg.setFillStyle(0x2a6a2a);
                        }
                    }
                }

                if (correct) {
                    if (feedbackText) feedbackText.destroy();
                    feedbackText = this.add.text(width / 2, submitY + 36, 'Correct!', {
                        fontSize: '20px', fontFamily: 'Arial, sans-serif', color: '#44dd44',
                    }).setOrigin(0.5);
                    dynamicObjects.push(feedbackText);

                    submitBg.disableInteractive();
                    currentProblem++;
                    if (currentProblem >= problems) {
                        timerEvent.remove(false);
                        this.mathCleanup = null;
                        this.time.delayedCall(1000, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    } else {
                        this.time.delayedCall(1000, () => showProblem());
                    }
                } else {
                    if (feedbackText) feedbackText.destroy();
                    feedbackText = this.add.text(width / 2, submitY + 36, 'Wrong! Fix the red cells.', {
                        fontSize: '16px', fontFamily: 'Arial, sans-serif', color: '#ff4444',
                    }).setOrigin(0.5);
                    dynamicObjects.push(feedbackText);

                    // Reset incorrect cells for retry
                    for (let r2 = 0; r2 < 2; r2++) {
                        for (let c2 = 0; c2 < 2; c2++) {
                            if (inputCells[r2][c2].value !== answer[r2][c2]) {
                                inputCells[r2][c2].value = null;
                                inputCells[r2][c2].valText.setText('');
                                this.time.delayedCall(600, () => {
                                    inputCells[r2][c2].bg.setFillStyle(0x2a2a4a);
                                });
                            }
                        }
                    }
                }
            });
        };

        showProblem();
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

        // ---- Level 70 Stage 1: 5x4 Memory Cards (10 pairs) ----
        const startL70Stage1 = () => {
            const rows = 4, cols = 5;
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
                { name: 'Lime', hex: 0xaaff44 },
                { name: 'Coral', hex: 0xff6666 },
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

        // ---- Level 70 Stage 2: Simon Says (8-step sequence) ----
        const startL70Stage2 = () => {
            const sequenceLength = 8;
            const numColors = 4;
            const playbackSpeed = 500;

            const allColorDefs = [
                { name: 'Red', hex: 0xff4444, dimHex: 0x882222 },
                { name: 'Blue', hex: 0x4488ff, dimHex: 0x224488 },
                { name: 'Green', hex: 0x44dd44, dimHex: 0x227722 },
                { name: 'Yellow', hex: 0xffdd44, dimHex: 0x887722 },
            ];

            const colorDefs = allColorDefs.slice(0, numColors);

            const instrText = this.add.text(width / 2, 70, 'Stage 2: Watch the sequence!', {
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

            const ssCols = 2;
            const ssRows = 2;
            const btnSize = 120;
            const gap = 20;
            const gridW = ssCols * btnSize + (ssCols - 1) * gap;
            const gridH = ssRows * btnSize + (ssRows - 1) * gap;
            const gridStartX = width / 2 - gridW / 2 + btnSize / 2;
            const gridStartY = height / 2 - gridH / 2 + btnSize / 2;

            const buttons = colorDefs.map((colorDef, i) => {
                const col = i % ssCols;
                const row = Math.floor(i / ssCols);
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
                instrText.setText('Stage 2: Watch the sequence!');
                progressText.setText('');

                sequence.forEach((btnIndex, i) => {
                    this.time.delayedCall(playbackSpeed * (i + 1), () => {
                        lightUp(btnIndex, playbackSpeed);
                    });
                });

                this.time.delayedCall(playbackSpeed * (sequence.length + 1), () => {
                    inputEnabled = true;
                    instrText.setText('Stage 2: Your turn! Repeat the sequence.');
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

        // ---- Level 70 Stage 3: Tower of Hanoi (4 discs) ----
        const startL70Stage3 = () => {
            const numDiscs = 4;

            const instrText = this.add.text(width / 2, 70, 'Stage 3: Solve the Tower of Hanoi!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const pegs = [[], [], []];
            for (let i = numDiscs; i >= 1; i--) {
                pegs[0].push(i);
            }

            const pegX = [width / 2 - 180, width / 2, width / 2 + 180];
            const baseY = height - 120;
            const pegHeight = 180;
            const discHeight = 28;
            const maxDiscWidth = 140;
            const minDiscWidth = 40;

            // Draw pegs
            for (let p = 0; p < 3; p++) {
                const pegBase = this.add.rectangle(pegX[p], baseY, 160, 6, 0x888888);
                const pegPole = this.add.rectangle(pegX[p], baseY - pegHeight / 2, 6, pegHeight, 0x888888);
                stageElements.push(pegBase, pegPole);

                // Peg labels
                const pegLabel = this.add.text(pegX[p], baseY + 16, `Peg ${p + 1}`, {
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#666666',
                }).setOrigin(0.5);
                stageElements.push(pegLabel);
            }

            const discColors = [0xff4444, 0x4488ff, 0x44dd44, 0xffdd44, 0xaa44ff, 0xff8844, 0x44dddd];
            let discElements = [];
            let selectedPeg = -1;
            let selectedHighlight = null;
            let moveCount = 0;

            const moveText = this.add.text(width / 2, height - 80, 'Moves: 0', {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(moveText);

            const renderDiscs = () => {
                discElements.forEach(el => {
                    el.bg.destroy();
                    el.label.destroy();
                    stageElements = stageElements.filter(e => e !== el.bg && e !== el.label);
                });
                discElements = [];

                for (let p = 0; p < 3; p++) {
                    for (let d = 0; d < pegs[p].length; d++) {
                        const discVal = pegs[p][d];
                        const discW = minDiscWidth + (discVal - 1) * ((maxDiscWidth - minDiscWidth) / (numDiscs - 1));
                        const x = pegX[p];
                        const y = baseY - 6 - d * discHeight - discHeight / 2;
                        const color = discColors[(discVal - 1) % discColors.length];

                        const bg = this.add.rectangle(x, y, discW, discHeight - 4, color)
                            .setInteractive({ useHandCursor: true });
                        const label = this.add.text(x, y, `${discVal}`, {
                            fontSize: '16px',
                            fontFamily: 'Arial, sans-serif',
                            fontStyle: 'bold',
                            color: '#ffffff',
                        }).setOrigin(0.5);
                        stageElements.push(bg, label);
                        discElements.push({ bg, label });
                    }
                }
            };

            const handlePegClick = (pegIndex) => {
                if (selectedPeg === -1) {
                    if (pegs[pegIndex].length === 0) return;
                    selectedPeg = pegIndex;
                    if (selectedHighlight) { selectedHighlight.destroy(); stageElements = stageElements.filter(e => e !== selectedHighlight); }
                    selectedHighlight = this.add.rectangle(pegX[pegIndex], baseY - pegHeight - 10, 160, 4, 0xffdd44);
                    stageElements.push(selectedHighlight);
                } else {
                    if (pegIndex !== selectedPeg) {
                        const topDisc = pegs[selectedPeg][pegs[selectedPeg].length - 1];
                        const targetTop = pegs[pegIndex].length > 0 ? pegs[pegIndex][pegs[pegIndex].length - 1] : Infinity;
                        if (topDisc < targetTop) {
                            pegs[pegIndex].push(pegs[selectedPeg].pop());
                            moveCount++;
                            moveText.setText(`Moves: ${moveCount}`);
                            renderDiscs();

                            if (pegs[2].length === numDiscs) {
                                this.time.delayedCall(500, () => advanceStage());
                            }
                        }
                    }
                    selectedPeg = -1;
                    if (selectedHighlight) { selectedHighlight.destroy(); stageElements = stageElements.filter(e => e !== selectedHighlight); selectedHighlight = null; }
                }
            };

            // Clickable zones for each peg
            for (let p = 0; p < 3; p++) {
                const zone = this.add.rectangle(pegX[p], baseY - pegHeight / 2, 160, pegHeight + 20, 0x000000, 0)
                    .setInteractive({ useHandCursor: true });
                stageElements.push(zone);
                const pegIdx = p;
                zone.on('pointerdown', () => handlePegClick(pegIdx));
            }

            renderDiscs();
        };

        // ---- Level 70 Stage 4: 6 Math Problems (all operations) ----
        const startL70Stage4 = () => {
            const problems = 6;
            const operations = ['add', 'subtract', 'multiply', 'divide'];
            const maxNum = 20;

            const instrText = this.add.text(width / 2, 70, 'Stage 4: Solve the math problems!', {
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
                } else if (op === 'divide') {
                    b_val = Phaser.Math.Between(2, Math.min(maxNum, 12));
                    answer = Phaser.Math.Between(2, Math.min(maxNum, 12));
                    a = b_val * answer;
                    symbol = '÷';
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

        // ---- Level 70 Stage 5: 11x11 Maze ----
        const startL70Stage5 = () => {
            const mazeW = 11, mazeH = 11, cellSize = 40;

            const instrText = this.add.text(width / 2, 70, 'Stage 5: Navigate the maze!', {
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
            const star = this.add.star(exitX, exitY, 5, 8, 18, 0xffdd44);
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

        // ---- Level 80 Stage 1: Light Toggle 4x4 ----
        const startL80Stage1 = () => {
            const size = 4;

            const instrText = this.add.text(width / 2, 70, 'Stage 1: Turn off all the lights!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const grid = [];
            for (let r = 0; r < size; r++) {
                grid[r] = [];
                for (let c = 0; c < size; c++) {
                    grid[r][c] = false;
                }
            }

            // Randomize by toggling random cells
            const toggleCount = Phaser.Math.Between(6, 10);
            for (let i = 0; i < toggleCount; i++) {
                const tr = Phaser.Math.Between(0, size - 1);
                const tc = Phaser.Math.Between(0, size - 1);
                grid[tr][tc] = !grid[tr][tc];
                if (tr > 0) grid[tr - 1][tc] = !grid[tr - 1][tc];
                if (tr < size - 1) grid[tr + 1][tc] = !grid[tr + 1][tc];
                if (tc > 0) grid[tr][tc - 1] = !grid[tr][tc - 1];
                if (tc < size - 1) grid[tr][tc + 1] = !grid[tr][tc + 1];
            }

            // Ensure not already solved
            let allOff = grid.every(row => row.every(cell => !cell));
            if (allOff) {
                const cr = Phaser.Math.Between(0, size - 1);
                const cc = Phaser.Math.Between(0, size - 1);
                grid[cr][cc] = !grid[cr][cc];
                if (cr > 0) grid[cr - 1][cc] = !grid[cr - 1][cc];
                if (cr < size - 1) grid[cr + 1][cc] = !grid[cr + 1][cc];
                if (cc > 0) grid[cr][cc - 1] = !grid[cr][cc - 1];
                if (cc < size - 1) grid[cr][cc + 1] = !grid[cr][cc + 1];
            }

            const cellSize = 80;
            const gap = 6;
            const totalW = size * cellSize + (size - 1) * gap;
            const totalH = size * cellSize + (size - 1) * gap;
            const gridStartX = (width - totalW) / 2 + cellSize / 2;
            const gridStartY = (height - totalH) / 2 + cellSize / 2;

            let cells = [];

            const renderGrid = () => {
                cells.forEach(c => {
                    c.bg.destroy();
                    stageElements = stageElements.filter(e => e !== c.bg);
                });
                cells = [];

                for (let r = 0; r < size; r++) {
                    for (let c = 0; c < size; c++) {
                        const x = gridStartX + c * (cellSize + gap);
                        const y = gridStartY + r * (cellSize + gap);
                        const isOn = grid[r][c];
                        const bg = this.add.rectangle(x, y, cellSize, cellSize, isOn ? 0xffdd44 : 0x2a2a4a)
                            .setInteractive({ useHandCursor: true });
                        stageElements.push(bg);
                        cells.push({ bg });

                        bg.on('pointerdown', () => {
                            grid[r][c] = !grid[r][c];
                            if (r > 0) grid[r - 1][c] = !grid[r - 1][c];
                            if (r < size - 1) grid[r + 1][c] = !grid[r + 1][c];
                            if (c > 0) grid[r][c - 1] = !grid[r][c - 1];
                            if (c < size - 1) grid[r][c + 1] = !grid[r][c + 1];
                            renderGrid();

                            const solved = grid.every(row => row.every(cell => !cell));
                            if (solved) {
                                this.time.delayedCall(500, () => advanceStage());
                            }
                        });
                    }
                }
            };

            renderGrid();
        };

        // ---- Level 80 Stage 2: 6x4 Memory Cards (blackout) ----
        const startL80Stage2 = () => {
            const rows = 4, cols = 6;
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
                { name: 'Lime', hex: 0xaaff44 },
                { name: 'Coral', hex: 0xff6666 },
                { name: 'Teal', hex: 0x22aa88 },
                { name: 'Sky', hex: 0x66bbff },
            ];

            const cardData = [];
            for (let i = 0; i < numPairs; i++) {
                cardData.push(cardColors[i], cardColors[i]);
            }
            Phaser.Utils.Array.Shuffle(cardData);

            const instrText = this.add.text(width / 2, 70, 'Stage 2: Memory Cards (blackout mode)!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const padding = 10;
            const availW = width - 40;
            const availH = height - 180;
            const cardW = Math.min(80, Math.floor((availW - (cols - 1) * padding) / cols));
            const cardH = Math.min(100, Math.floor((availH - (rows - 1) * padding) / rows));
            const gridW = cols * (cardW + padding) - padding;
            const gridH = rows * (cardH + padding) - padding;
            const startX = (width - gridW) / 2 + cardW / 2;
            const startY = (height - gridH) / 2 + 10;

            let firstCard = null;
            let secondCard = null;
            let lockBoard = false;
            let matchesFound = 0;

            // Blackout: show all cards briefly then hide
            const cards = [];
            const allBacks = [];
            const allQmarks = [];
            const allFaces = [];
            const allLabels = [];

            for (let i = 0; i < totalCards; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = startX + col * (cardW + padding);
                const y = startY + row * (cardH + padding);
                const color = cardData[i];

                const back = this.add.rectangle(x, y, cardW, cardH, 0x3a3a6a)
                    .setInteractive({ useHandCursor: true }).setVisible(false);
                const qmFontSize = Math.min(36, Math.floor(cardH * 0.3));
                const questionMark = this.add.text(x, y, '?', {
                    fontSize: `${qmFontSize}px`,
                    fontFamily: 'Arial, sans-serif',
                    color: '#888888',
                }).setOrigin(0.5).setVisible(false);

                const face = this.add.rectangle(x, y, cardW, cardH, color.hex).setVisible(true);
                const lblFontSize = Math.min(14, Math.floor(cardW * 0.16));
                const colorLabel = this.add.text(x, y, color.name, {
                    fontSize: `${lblFontSize}px`,
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5).setVisible(true);

                stageElements.push(back, questionMark, face, colorLabel);
                allBacks.push(back);
                allQmarks.push(questionMark);
                allFaces.push(face);
                allLabels.push(colorLabel);

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
                            this.time.delayedCall(600, () => {
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

            // Show all cards for 3 seconds, then flip them over (blackout)
            this.time.delayedCall(3000, () => {
                for (let i = 0; i < totalCards; i++) {
                    cards[i].flipped = false;
                    allBacks[i].setVisible(true);
                    allQmarks[i].setVisible(true);
                    allFaces[i].setVisible(false);
                    allLabels[i].setVisible(false);
                }
            });
        };

        // ---- Level 80 Stage 3: Simon Says (10-step) ----
        const startL80Stage3 = () => {
            const sequenceLength = 10;
            const numColors = 4;
            const playbackSpeed = 450;

            const allColorDefs = [
                { name: 'Red', hex: 0xff4444, dimHex: 0x882222 },
                { name: 'Blue', hex: 0x4488ff, dimHex: 0x224488 },
                { name: 'Green', hex: 0x44dd44, dimHex: 0x227722 },
                { name: 'Yellow', hex: 0xffdd44, dimHex: 0x887722 },
            ];

            const colorDefs = allColorDefs.slice(0, numColors);

            const instrText = this.add.text(width / 2, 70, 'Stage 3: Watch the sequence!', {
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

            const ssCols = 2;
            const ssRows = 2;
            const btnSize = 120;
            const gap = 20;
            const gridW = ssCols * btnSize + (ssCols - 1) * gap;
            const gridH = ssRows * btnSize + (ssRows - 1) * gap;
            const gridStartX = width / 2 - gridW / 2 + btnSize / 2;
            const gridStartY = height / 2 - gridH / 2 + btnSize / 2;

            const buttons = colorDefs.map((colorDef, i) => {
                const col = i % ssCols;
                const row = Math.floor(i / ssCols);
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
                instrText.setText('Stage 3: Watch the sequence!');
                progressText.setText('');

                sequence.forEach((btnIndex, i) => {
                    this.time.delayedCall(playbackSpeed * (i + 1), () => {
                        lightUp(btnIndex, playbackSpeed);
                    });
                });

                this.time.delayedCall(playbackSpeed * (sequence.length + 1), () => {
                    inputEnabled = true;
                    instrText.setText('Stage 3: Your turn! Repeat the sequence.');
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

        // ---- Level 80 Stage 4: Sliding Puzzle (4x4) ----
        const startL80Stage4 = () => {
            const size = 4;
            const tileSize = 80;
            const tileGap = 4;
            const totalSize = size * tileSize + (size - 1) * tileGap;
            const puzzleStartX = (width - totalSize) / 2 + tileSize / 2;
            const puzzleStartY = (height - totalSize) / 2 + tileSize / 2 - 10;

            const instrText = this.add.text(width / 2, 70, 'Stage 4: Solve the sliding puzzle!', {
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
            for (let i = 0; i < 300; i++) {
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
                            fontSize: '32px',
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

        // ---- Level 80 Stage 5: 8 Math Problems (equation builder) ----
        const startL80Stage5 = () => {
            const problems = 8;

            const instrText = this.add.text(width / 2, 70, 'Stage 5: Build the equations!', {
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

            let problemElements = [];
            let feedbackText = null;

            const showProblem = () => {
                problemElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                problemElements = [];
                if (feedbackText) { feedbackText.destroy(); stageElements = stageElements.filter(e => e !== feedbackText); feedbackText = null; }

                progressText.setText(`Problem ${currentProblem + 1}/${problems}`);

                // Generate equation: a OP b = result, player picks the operator
                const ops = ['+', '-', '×', '÷'];
                const opIndex = Phaser.Math.Between(0, 3);
                const correctOp = ops[opIndex];
                let a, b_val, result;

                if (correctOp === '+') {
                    a = Phaser.Math.Between(3, 30);
                    b_val = Phaser.Math.Between(3, 30);
                    result = a + b_val;
                } else if (correctOp === '-') {
                    a = Phaser.Math.Between(10, 50);
                    b_val = Phaser.Math.Between(2, a - 1);
                    result = a - b_val;
                } else if (correctOp === '×') {
                    a = Phaser.Math.Between(2, 12);
                    b_val = Phaser.Math.Between(2, 12);
                    result = a * b_val;
                } else {
                    b_val = Phaser.Math.Between(2, 12);
                    result = Phaser.Math.Between(2, 12);
                    a = b_val * result;
                }

                const eqText = this.add.text(width / 2, height / 2 - 80, `${a}  ?  ${b_val}  =  ${result}`, {
                    fontSize: '42px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5);
                stageElements.push(eqText);
                problemElements.push(eqText);

                const btnWidth = 80;
                const btnSpacing = 100;
                const bStartX = width / 2 - (btnSpacing * 1.5);
                const btnY = height / 2 + 30;

                ops.forEach((op, i) => {
                    const bx = bStartX + i * btnSpacing;
                    const bg = this.add.rectangle(bx, btnY, btnWidth, 56, 0x4a4a8a)
                        .setInteractive({ useHandCursor: true });
                    const txt = this.add.text(bx, btnY, op, {
                        fontSize: '32px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#ffffff',
                    }).setOrigin(0.5);
                    stageElements.push(bg, txt);
                    problemElements.push(bg, txt);

                    bg.on('pointerover', () => bg.setFillStyle(0x6a6aaa));
                    bg.on('pointerout', () => bg.setFillStyle(0x4a4a8a));

                    bg.on('pointerdown', () => {
                        if (op === correctOp) {
                            bg.setFillStyle(0x44dd44);
                            problemElements.forEach(el => { if (el.disableInteractive) el.disableInteractive(); });

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
                });
            };

            showProblem();
        };

        // ---- Level 80 Stage 6: 15x15 Maze with fog ----
        const startL80Stage6 = () => {
            const mazeW = 15, mazeH = 15, cellSize = 30;
            const viewRadius = 3;

            const instrText = this.add.text(width / 2, 70, 'Stage 6: Navigate the foggy maze!', {
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

            let cellElements = [];
            let fogElements = [];

            // Player
            let playerCol = 0;
            let playerRow = 0;
            let player = null;
            let starEl = null;

            const renderMaze = () => {
                cellElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                cellElements = [];
                fogElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                fogElements = [];
                if (player) { player.destroy(); stageElements = stageElements.filter(e => e !== player); }
                if (starEl) { starEl.destroy(); stageElements = stageElements.filter(e => e !== starEl); }

                // Draw maze cells
                for (let row = 0; row < mazeH; row++) {
                    for (let col = 0; col < mazeW; col++) {
                        const x = offsetX + col * cellSize + cellSize / 2;
                        const y = offsetY + row * cellSize + cellSize / 2;

                        const dist = Math.abs(row - playerRow) + Math.abs(col - playerCol);
                        const visible = dist <= viewRadius;

                        if (visible) {
                            if (maze[row][col] === 1) {
                                const wall = this.add.rectangle(x, y, cellSize - 1, cellSize - 1, 0x2a2a4a);
                                stageElements.push(wall);
                                cellElements.push(wall);
                            } else {
                                const path = this.add.rectangle(x, y, cellSize - 1, cellSize - 1, 0x4a4a6a);
                                stageElements.push(path);
                                cellElements.push(path);
                            }
                        } else {
                            const fog = this.add.rectangle(x, y, cellSize - 1, cellSize - 1, 0x111122);
                            stageElements.push(fog);
                            fogElements.push(fog);
                        }
                    }
                }

                // Exit star (always draw, visible or not)
                const exitDist = Math.abs((mazeH - 1) - playerRow) + Math.abs((mazeW - 1) - playerCol);
                if (exitDist <= viewRadius) {
                    const exitX = offsetX + (mazeW - 1) * cellSize + cellSize / 2;
                    const exitY = offsetY + (mazeH - 1) * cellSize + cellSize / 2;
                    starEl = this.add.star(exitX, exitY, 5, 6, 14, 0xffdd44);
                    stageElements.push(starEl);
                }

                // Player
                player = this.add.circle(
                    offsetX + playerCol * cellSize + cellSize / 2,
                    offsetY + playerRow * cellSize + cellSize / 2,
                    cellSize / 3, 0x44dd44
                );
                stageElements.push(player);
            };

            renderMaze();

            let inputLocked = false;

            const movePlayer = (dCol, dRow) => {
                const newCol = playerCol + dCol;
                const newRow = playerRow + dRow;
                if (newCol < 0 || newCol >= mazeW || newRow < 0 || newRow >= mazeH) return;
                if (maze[newRow][newCol] === 1) return;

                playerCol = newCol;
                playerRow = newRow;
                renderMaze();

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

        // ---- Level 90 Stage 1: Simon Says (12-step) ----
        const startL90Stage1 = () => {
            const sequenceLength = 12;
            const numColors = 4;
            const playbackSpeed = 400;

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

            const ssCols = 2;
            const ssRows = 2;
            const btnSize = 120;
            const gap = 20;
            const gridW = ssCols * btnSize + (ssCols - 1) * gap;
            const gridH = ssRows * btnSize + (ssRows - 1) * gap;
            const gridStartX = width / 2 - gridW / 2 + btnSize / 2;
            const gridStartY = height / 2 - gridH / 2 + btnSize / 2;

            const buttons = colorDefs.map((colorDef, i) => {
                const col = i % ssCols;
                const row = Math.floor(i / ssCols);
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

        // ---- Level 90 Stage 2: Light Toggle 5x5 ----
        const startL90Stage2 = () => {
            const size = 5;

            const instrText = this.add.text(width / 2, 70, 'Stage 2: Turn off all the lights!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const grid = [];
            for (let r = 0; r < size; r++) {
                grid[r] = [];
                for (let c = 0; c < size; c++) {
                    grid[r][c] = false;
                }
            }

            // Randomize by toggling random cells
            const toggleCount = Phaser.Math.Between(8, 14);
            for (let i = 0; i < toggleCount; i++) {
                const tr = Phaser.Math.Between(0, size - 1);
                const tc = Phaser.Math.Between(0, size - 1);
                grid[tr][tc] = !grid[tr][tc];
                if (tr > 0) grid[tr - 1][tc] = !grid[tr - 1][tc];
                if (tr < size - 1) grid[tr + 1][tc] = !grid[tr + 1][tc];
                if (tc > 0) grid[tr][tc - 1] = !grid[tr][tc - 1];
                if (tc < size - 1) grid[tr][tc + 1] = !grid[tr][tc + 1];
            }

            // Ensure not already solved
            let allOff = grid.every(row => row.every(cell => !cell));
            if (allOff) {
                const cr = Phaser.Math.Between(0, size - 1);
                const cc = Phaser.Math.Between(0, size - 1);
                grid[cr][cc] = !grid[cr][cc];
                if (cr > 0) grid[cr - 1][cc] = !grid[cr - 1][cc];
                if (cr < size - 1) grid[cr + 1][cc] = !grid[cr + 1][cc];
                if (cc > 0) grid[cr][cc - 1] = !grid[cr][cc - 1];
                if (cc < size - 1) grid[cr][cc + 1] = !grid[cr][cc + 1];
            }

            const cellSize = 70;
            const ltGap = 6;
            const totalW = size * cellSize + (size - 1) * ltGap;
            const totalH = size * cellSize + (size - 1) * ltGap;
            const gridStartX = (width - totalW) / 2 + cellSize / 2;
            const gridStartY = (height - totalH) / 2 + cellSize / 2;

            let cells = [];

            const renderGrid = () => {
                cells.forEach(c => {
                    c.bg.destroy();
                    stageElements = stageElements.filter(e => e !== c.bg);
                });
                cells = [];

                for (let r = 0; r < size; r++) {
                    for (let c = 0; c < size; c++) {
                        const x = gridStartX + c * (cellSize + ltGap);
                        const y = gridStartY + r * (cellSize + ltGap);
                        const isOn = grid[r][c];
                        const bg = this.add.rectangle(x, y, cellSize, cellSize, isOn ? 0xffdd44 : 0x2a2a4a)
                            .setInteractive({ useHandCursor: true });
                        stageElements.push(bg);
                        cells.push({ bg });

                        bg.on('pointerdown', () => {
                            grid[r][c] = !grid[r][c];
                            if (r > 0) grid[r - 1][c] = !grid[r - 1][c];
                            if (r < size - 1) grid[r + 1][c] = !grid[r + 1][c];
                            if (c > 0) grid[r][c - 1] = !grid[r][c - 1];
                            if (c < size - 1) grid[r][c + 1] = !grid[r][c + 1];
                            renderGrid();

                            const solved = grid.every(row => row.every(cell => !cell));
                            if (solved) {
                                this.time.delayedCall(500, () => advanceStage());
                            }
                        });
                    }
                }
            };

            renderGrid();
        };

        // ---- Level 90 Stage 3: 7x6 Memory Cards (21 pairs) ----
        const startL90Stage3 = () => {
            const rows = 6, cols = 7;
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
                { name: 'Lime', hex: 0xaaff44 },
                { name: 'Coral', hex: 0xff6666 },
                { name: 'Teal', hex: 0x44aaaa },
                { name: 'Gold', hex: 0xddaa44 },
                { name: 'Violet', hex: 0x8844dd },
                { name: 'Mint', hex: 0x44ffaa },
                { name: 'Rose', hex: 0xff88aa },
                { name: 'Sky', hex: 0x88bbff },
                { name: 'Peach', hex: 0xffbb88 },
                { name: 'Plum', hex: 0xaa44aa },
                { name: 'Slate', hex: 0x8899aa },
                { name: 'Olive', hex: 0x88aa44 },
                { name: 'Aqua', hex: 0x44ffdd },
            ];

            // 42 cards = 21 pairs, but we have an odd grid (7x6=42), so it works
            const cardData = [];
            for (let i = 0; i < numPairs; i++) {
                cardData.push(cardColors[i % cardColors.length], cardColors[i % cardColors.length]);
            }
            Phaser.Utils.Array.Shuffle(cardData);

            const instrText = this.add.text(width / 2, 70, 'Stage 3: Find all matching pairs!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const padding = 8;
            const availW = width - 40;
            const availH = height - 180;
            const cardW = Math.min(80, Math.floor((availW - (cols - 1) * padding) / cols));
            const cardH = Math.min(80, Math.floor((availH - (rows - 1) * padding) / rows));
            const gridW = cols * (cardW + padding) - padding;
            const gridH = rows * (cardH + padding) - padding;
            const startX = (width - gridW) / 2 + cardW / 2;
            const startY = (height - gridH) / 2 + 10;

            let firstCard = null;
            let secondCard = null;
            let lockBoard = false;
            let matchesFound = 0;

            for (let i = 0; i < totalCards; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = startX + col * (cardW + padding);
                const y = startY + row * (cardH + padding);
                const color = cardData[i];

                const back = this.add.rectangle(x, y, cardW, cardH, 0x3a3a6a)
                    .setInteractive({ useHandCursor: true });
                const qmFontSize = Math.min(28, Math.floor(cardH * 0.3));
                const questionMark = this.add.text(x, y, '?', {
                    fontSize: `${qmFontSize}px`,
                    fontFamily: 'Arial, sans-serif',
                    color: '#888888',
                }).setOrigin(0.5);

                const face = this.add.rectangle(x, y, cardW, cardH, color.hex).setVisible(false);
                const lblFontSize = Math.min(12, Math.floor(cardW * 0.14));
                const colorLabel = this.add.text(x, y, color.name, {
                    fontSize: `${lblFontSize}px`,
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                }).setOrigin(0.5).setVisible(false);

                stageElements.push(back, questionMark, face, colorLabel);

                const card = { back, questionMark, face, colorLabel, colorName: color.name, flipped: false, matched: false };

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

        // ---- Level 90 Stage 4: Sliding Puzzle (4x4) ----
        const startL90Stage4 = () => {
            const size = 4;
            const tileSize = 80;
            const tileGap = 4;
            const totalSize = size * tileSize + (size - 1) * tileGap;
            const puzzleStartX = (width - totalSize) / 2 + tileSize / 2;
            const puzzleStartY = (height - totalSize) / 2 + tileSize / 2 - 10;

            const instrText = this.add.text(width / 2, 70, 'Stage 4: Solve the sliding puzzle!', {
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
            for (let i = 0; i < 300; i++) {
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
                            fontSize: '32px',
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

        // ---- Level 90 Stage 5: 6 Algebra Problems ----
        const startL90Stage5 = () => {
            const problems = 6;

            const instrText = this.add.text(width / 2, 70, 'Stage 5: Solve for x!', {
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

                // Generate algebra problem: ax + b = c, solve for x
                const a = Phaser.Math.Between(2, 8);
                const x = Phaser.Math.Between(1, 15);
                const b = Phaser.Math.Between(-10, 20);
                const c = a * x + b;
                const answer = x;

                const bSign = b >= 0 ? '+' : '-';
                const bAbs = Math.abs(b);
                const questionStr = `${a}x ${bSign} ${bAbs} = ${c}`;

                problemText = this.add.text(width / 2, height / 2 - 80, `${questionStr}\nx = ?`, {
                    fontSize: '40px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                    align: 'center',
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
                const btnY = height / 2 + 60;

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

        // ---- Level 90 Stage 6: Tower of Hanoi (5 discs) ----
        const startL90Stage6 = () => {
            const numDiscs = 5;

            const instrText = this.add.text(width / 2, 70, 'Stage 6: Move all discs to the right peg!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            const pegs = [[], [], []];
            for (let i = numDiscs; i >= 1; i--) {
                pegs[0].push(i);
            }

            let moveCount = 0;
            const moveText = this.add.text(width / 2, height - 80, 'Moves: 0', {
                fontSize: '22px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(moveText);

            const pegX = [width / 2 - 180, width / 2, width / 2 + 180];
            const baseY = height / 2 + 100;
            const pegHeight = 160;
            const discMaxWidth = 120;
            const discHeight = 24;
            const discColors = [0xff4444, 0x4488ff, 0x44dd44, 0xffdd44, 0xaa44ff];

            let selectedPeg = null;
            let discElements = [];
            let pegElements = [];
            let selectedHighlight = null;

            const renderHanoi = () => {
                discElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                discElements = [];
                pegElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                pegElements = [];
                if (selectedHighlight) { selectedHighlight.destroy(); stageElements = stageElements.filter(e => e !== selectedHighlight); selectedHighlight = null; }

                // Draw pegs
                for (let p = 0; p < 3; p++) {
                    const pegBase = this.add.rectangle(pegX[p], baseY, 140, 8, 0x888888);
                    const pegPole = this.add.rectangle(pegX[p], baseY - pegHeight / 2, 8, pegHeight, 0x666666);
                    stageElements.push(pegBase, pegPole);
                    pegElements.push(pegBase, pegPole);

                    // Clickable area for each peg
                    const clickArea = this.add.rectangle(pegX[p], baseY - pegHeight / 2, 160, pegHeight + 20, 0x000000, 0)
                        .setInteractive({ useHandCursor: true });
                    stageElements.push(clickArea);
                    pegElements.push(clickArea);

                    clickArea.on('pointerdown', () => {
                        if (selectedPeg === null) {
                            if (pegs[p].length > 0) {
                                selectedPeg = p;
                                renderHanoi();
                            }
                        } else {
                            if (p !== selectedPeg) {
                                const fromDisc = pegs[selectedPeg][pegs[selectedPeg].length - 1];
                                const toDisc = pegs[p].length > 0 ? pegs[p][pegs[p].length - 1] : Infinity;
                                if (fromDisc < toDisc) {
                                    pegs[p].push(pegs[selectedPeg].pop());
                                    moveCount++;
                                    moveText.setText(`Moves: ${moveCount}`);
                                }
                            }
                            selectedPeg = null;
                            renderHanoi();

                            // Check win
                            if (pegs[2].length === numDiscs) {
                                this.time.delayedCall(500, () => advanceStage());
                            }
                        }
                    });
                }

                // Draw discs
                for (let p = 0; p < 3; p++) {
                    pegs[p].forEach((disc, idx) => {
                        const discWidth = 30 + (disc / numDiscs) * (discMaxWidth - 30);
                        const dx = pegX[p];
                        const dy = baseY - 8 - idx * (discHeight + 2) - discHeight / 2;
                        const discRect = this.add.rectangle(dx, dy, discWidth, discHeight, discColors[(disc - 1) % discColors.length])
                            .setStrokeStyle(1, 0xffffff, 0.3);
                        stageElements.push(discRect);
                        discElements.push(discRect);
                    });
                }

                // Highlight selected peg
                if (selectedPeg !== null) {
                    selectedHighlight = this.add.rectangle(pegX[selectedPeg], baseY - pegHeight / 2, 160, pegHeight + 20, 0xffdd44, 0.15);
                    stageElements.push(selectedHighlight);
                }
            };

            renderHanoi();
        };

        // ---- Level 90 Stage 7: Word Scramble Crossword (3 words) ----
        const startL90Stage7 = () => {
            const words = ['castle', 'bridge', 'forest'];
            const scrambledWords = words.map(w => {
                let scrambled = w.split('');
                let attempts = 0;
                do {
                    scrambled = Phaser.Utils.Array.Shuffle([...w.split('')]);
                    attempts++;
                } while (scrambled.join('') === w && attempts < 20);
                return scrambled.join('');
            });

            const instrText = this.add.text(width / 2, 70, 'Stage 7: Unscramble all 3 words!', {
                fontSize: '18px',
                fontFamily: 'Arial, sans-serif',
                color: '#aaaaaa',
            }).setOrigin(0.5);
            stageElements.push(instrText);

            let currentWordIdx = 0;
            let currentGuess = '';
            let wordElements = [];

            const wordProgressText = this.add.text(width / 2, 100, `Word 1/${words.length}`, {
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            stageElements.push(wordProgressText);

            let scrambleDisplay = null;
            let guessDisplay = null;
            let feedbackDisplay = null;

            const showWord = () => {
                wordElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                wordElements = [];
                if (scrambleDisplay) { scrambleDisplay.destroy(); stageElements = stageElements.filter(e => e !== scrambleDisplay); }
                if (guessDisplay) { guessDisplay.destroy(); stageElements = stageElements.filter(e => e !== guessDisplay); }
                if (feedbackDisplay) { feedbackDisplay.destroy(); stageElements = stageElements.filter(e => e !== feedbackDisplay); }

                currentGuess = '';
                wordProgressText.setText(`Word ${currentWordIdx + 1}/${words.length}`);

                const scrambled = scrambledWords[currentWordIdx];
                const letterSize = 50;
                const letterGap = 10;
                const totalW = scrambled.length * letterSize + (scrambled.length - 1) * letterGap;
                const letStartX = width / 2 - totalW / 2 + letterSize / 2;
                const letY = height / 2 - 80;

                scrambled.split('').forEach((letter, i) => {
                    const x = letStartX + i * (letterSize + letterGap);
                    const bg = this.add.rectangle(x, letY, letterSize, letterSize, 0x4a4a8a);
                    const txt = this.add.text(x, letY, letter.toUpperCase(), {
                        fontSize: '28px',
                        fontFamily: 'Arial, sans-serif',
                        fontStyle: 'bold',
                        color: '#ffffff',
                    }).setOrigin(0.5);
                    stageElements.push(bg, txt);
                    wordElements.push(bg, txt);
                });

                const targetWord = words[currentWordIdx];
                guessDisplay = this.add.text(width / 2, height / 2 + 10, '_ '.repeat(targetWord.length).trim(), {
                    fontSize: '36px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                    letterSpacing: 8,
                }).setOrigin(0.5);
                stageElements.push(guessDisplay);

                feedbackDisplay = this.add.text(width / 2, height / 2 + 60, '', {
                    fontSize: '20px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ff4444',
                }).setOrigin(0.5);
                stageElements.push(feedbackDisplay);
            };

            const updateGuessDisplay = () => {
                const targetWord = words[currentWordIdx];
                const display = [];
                for (let i = 0; i < targetWord.length; i++) {
                    display.push(i < currentGuess.length ? currentGuess[i].toUpperCase() : '_');
                }
                guessDisplay.setText(display.join(' '));
            };

            // Keyboard input
            this.input.keyboard.on('keydown', (event) => {
                const key = event.key.toLowerCase();
                const targetWord = words[currentWordIdx];
                if (key === 'backspace') {
                    currentGuess = currentGuess.slice(0, -1);
                    feedbackDisplay.setText('');
                    updateGuessDisplay();
                } else if (key === 'enter') {
                    if (currentGuess.length === targetWord.length) {
                        if (currentGuess === targetWord) {
                            feedbackDisplay.setColor('#44dd44');
                            feedbackDisplay.setText('Correct!');
                            currentWordIdx++;
                            if (currentWordIdx >= words.length) {
                                this.time.delayedCall(500, () => advanceStage());
                            } else {
                                this.time.delayedCall(500, () => showWord());
                            }
                        } else {
                            feedbackDisplay.setColor('#ff4444');
                            feedbackDisplay.setText('Wrong! Try again.');
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
            const kbStartY = height / 2 + 100;

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
                        const targetWord = words[currentWordIdx];
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
                feedbackDisplay.setText('');
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
                const targetWord = words[currentWordIdx];
                if (currentGuess.length === targetWord.length) {
                    if (currentGuess === targetWord) {
                        feedbackDisplay.setColor('#44dd44');
                        feedbackDisplay.setText('Correct!');
                        currentWordIdx++;
                        if (currentWordIdx >= words.length) {
                            this.time.delayedCall(500, () => advanceStage());
                        } else {
                            this.time.delayedCall(500, () => showWord());
                        }
                    } else {
                        feedbackDisplay.setColor('#ff4444');
                        feedbackDisplay.setText('Wrong! Try again.');
                        currentGuess = '';
                        updateGuessDisplay();
                    }
                }
            });

            showWord();
        };

        // ---- Level 90 Stage 8: 19x19 Maze with fog + enemies ----
        const startL90Stage8 = () => {
            const mazeW = 19, mazeH = 19, cellSize = 24;
            const viewRadius = 3;
            const numEnemies = 4;

            const instrText = this.add.text(width / 2, 70, 'Stage 8: Escape the foggy maze! Avoid enemies!', {
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

            // Place enemies on open cells away from start
            const enemies = [];
            const openCells = [];
            for (let r = 0; r < mazeH; r++) {
                for (let c = 0; c < mazeW; c++) {
                    if (maze[r][c] === 0 && (r + c) > 4) {
                        openCells.push({ r, c });
                    }
                }
            }
            Phaser.Utils.Array.Shuffle(openCells);
            for (let i = 0; i < numEnemies && i < openCells.length; i++) {
                enemies.push({ row: openCells[i].r, col: openCells[i].c });
            }

            const gridW = mazeW * cellSize;
            const gridH = mazeH * cellSize;
            const offsetX = (width - gridW) / 2;
            const offsetY = (height - gridH) / 2 + 10;

            let cellElements = [];
            let fogElements = [];
            let enemyElements = [];

            // Player
            let playerCol = 0;
            let playerRow = 0;
            let player = null;
            let starEl = null;

            const renderMaze = () => {
                cellElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                cellElements = [];
                fogElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                fogElements = [];
                enemyElements.forEach(el => { el.destroy(); stageElements = stageElements.filter(e => e !== el); });
                enemyElements = [];
                if (player) { player.destroy(); stageElements = stageElements.filter(e => e !== player); }
                if (starEl) { starEl.destroy(); stageElements = stageElements.filter(e => e !== starEl); }

                // Draw maze cells
                for (let row = 0; row < mazeH; row++) {
                    for (let col = 0; col < mazeW; col++) {
                        const x = offsetX + col * cellSize + cellSize / 2;
                        const y = offsetY + row * cellSize + cellSize / 2;

                        const dist = Math.abs(row - playerRow) + Math.abs(col - playerCol);
                        const visible = dist <= viewRadius;

                        if (visible) {
                            if (maze[row][col] === 1) {
                                const wall = this.add.rectangle(x, y, cellSize - 1, cellSize - 1, 0x2a2a4a);
                                stageElements.push(wall);
                                cellElements.push(wall);
                            } else {
                                const path = this.add.rectangle(x, y, cellSize - 1, cellSize - 1, 0x4a4a6a);
                                stageElements.push(path);
                                cellElements.push(path);
                            }
                        } else {
                            const fog = this.add.rectangle(x, y, cellSize - 1, cellSize - 1, 0x111122);
                            stageElements.push(fog);
                            fogElements.push(fog);
                        }
                    }
                }

                // Draw enemies (only visible ones)
                enemies.forEach(enemy => {
                    const dist = Math.abs(enemy.row - playerRow) + Math.abs(enemy.col - playerCol);
                    if (dist <= viewRadius) {
                        const ex = offsetX + enemy.col * cellSize + cellSize / 2;
                        const ey = offsetY + enemy.row * cellSize + cellSize / 2;
                        const enemyEl = this.add.circle(ex, ey, cellSize / 3, 0xff4444);
                        stageElements.push(enemyEl);
                        enemyElements.push(enemyEl);
                    }
                });

                // Exit star (only if visible)
                const exitDist = Math.abs((mazeH - 1) - playerRow) + Math.abs((mazeW - 1) - playerCol);
                if (exitDist <= viewRadius) {
                    const exitX = offsetX + (mazeW - 1) * cellSize + cellSize / 2;
                    const exitY = offsetY + (mazeH - 1) * cellSize + cellSize / 2;
                    starEl = this.add.star(exitX, exitY, 5, 5, 12, 0xffdd44);
                    stageElements.push(starEl);
                }

                // Player
                player = this.add.circle(
                    offsetX + playerCol * cellSize + cellSize / 2,
                    offsetY + playerRow * cellSize + cellSize / 2,
                    cellSize / 3, 0x44dd44
                );
                stageElements.push(player);
            };

            renderMaze();

            let inputLocked = false;

            const checkEnemyCollision = () => {
                for (const enemy of enemies) {
                    if (enemy.row === playerRow && enemy.col === playerCol) {
                        return true;
                    }
                }
                return false;
            };

            const moveEnemies = () => {
                enemies.forEach(enemy => {
                    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                    Phaser.Utils.Array.Shuffle(dirs);
                    for (const [dr, dc] of dirs) {
                        const nr = enemy.row + dr;
                        const nc = enemy.col + dc;
                        if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && maze[nr][nc] === 0) {
                            enemy.row = nr;
                            enemy.col = nc;
                            break;
                        }
                    }
                });
            };

            const movePlayer = (dCol, dRow) => {
                const newCol = playerCol + dCol;
                const newRow = playerRow + dRow;
                if (newCol < 0 || newCol >= mazeW || newRow < 0 || newRow >= mazeH) return;
                if (maze[newRow][newCol] === 1) return;

                playerCol = newCol;
                playerRow = newRow;

                // Move enemies every player step
                moveEnemies();

                renderMaze();

                if (checkEnemyCollision()) {
                    inputLocked = true;
                    // Reset to start
                    instrText.setText('Caught by enemy! Restarting...');
                    this.time.delayedCall(1000, () => {
                        playerCol = 0;
                        playerRow = 0;
                        inputLocked = false;
                        instrText.setText('Stage 8: Escape the foggy maze! Avoid enemies!');
                        renderMaze();
                    });
                    return;
                }

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

        // Build stage functions array based on level
        let stageFunctions;
        if (this.level === 90) {
            stageFunctions = [startL90Stage1, startL90Stage2, startL90Stage3, startL90Stage4, startL90Stage5, startL90Stage6, startL90Stage7, startL90Stage8];
        } else if (this.level === 80) {
            stageFunctions = [startL80Stage1, startL80Stage2, startL80Stage3, startL80Stage4, startL80Stage5, startL80Stage6];
        } else if (this.level === 70) {
            stageFunctions = [startL70Stage1, startL70Stage2, startL70Stage3, startL70Stage4, startL70Stage5];
        } else if (this.level === 60) {
            stageFunctions = [startL60Stage1, startL60Stage2, startL60Stage3, startL60Stage4];
        } else {
            stageFunctions = [startStage1, startStage2, startStage3];
        }

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

        if (config.mode === 'crossword') {
            this.createCrosswordPuzzle(config);
            return;
        }

        if (config.mode === 'anagram-chain') {
            this.createAnagramChainPuzzle(config);
            return;
        }

        if (config.mode === 'cipher') {
            this.createCipherPuzzle(config);
            return;
        }

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

    createAnagramChainPuzzle(config) {
        const { width, height } = this.scale;
        const { chainLength, timeLimit } = config;

        // Predefined anagram chains - each array is a chain of words that are all anagrams of each other
        const chains = [
            ['least', 'steal', 'tales', 'slate', 'tesla'],
            ['notes', 'stone', 'onset', 'tones', 'steno'],
            ['parts', 'strap', 'traps', 'tarps', 'prats'],
            ['timer', 'remit', 'merit', 'mitre', 'miter'],
            ['rates', 'stare', 'tears', 'aster', 'tares'],
            ['lapse', 'leaps', 'pales', 'sepal', 'pleas'],
            ['caret', 'trace', 'crate', 'react', 'carte'],
        ];

        const chain = Phaser.Utils.Array.GetRandom(chains).slice(0, chainLength);
        let currentStep = 0;

        // Instructions
        this.add.text(width / 2, 50, 'Anagram Chain', {
            fontSize: '24px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        this.add.text(width / 2, 80, 'Rearrange the letters to form a new word!', {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Progress display
        const progressText = this.add.text(width / 2, 110, `Chain: 0 / ${chainLength - 1}`, {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#88cc88',
        }).setOrigin(0.5);

        // Timer
        let timeLeft = timeLimit;
        const timerText = this.add.text(width / 2, height - 70, `Time: ${timeLeft}s`, {
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
                if (timeLeft <= 10) {
                    timerText.setColor('#ff4444');
                }
                if (timeLeft <= 0) {
                    this.handleTimeUp();
                }
            },
        });

        // Show completed words in the chain
        const chainDisplayY = 150;
        const chainWords = [];

        const updateChainDisplay = () => {
            chainWords.forEach(t => t.destroy());
            chainWords.length = 0;

            const completedWords = chain.slice(0, currentStep + 1);
            const displayStr = completedWords.map(w => w.toUpperCase()).join(' → ');
            const chainText = this.add.text(width / 2, chainDisplayY, displayStr, {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#66aaff',
                wordWrap: { width: width - 60 },
                align: 'center',
            }).setOrigin(0.5);
            chainWords.push(chainText);
        };

        // Current word display label
        this.add.text(width / 2, 195, 'Current letters:', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        const tileSize = 56;
        const tileSpacing = 70;
        const scrambleY = 240;
        const answerY = 340;

        // State
        let answer = [];
        let letterTiles = [];
        let answerSlots = [];
        let feedbackText = null;

        const setupStep = () => {
            // Clean up previous tiles
            letterTiles.forEach(t => { t.bg.destroy(); t.txt.destroy(); });
            answerSlots.forEach(s => { s.destroy(); if (s._txt) s._txt.destroy(); });
            letterTiles = [];
            answerSlots = [];
            answer = [];
            if (feedbackText) { feedbackText.destroy(); feedbackText = null; }

            const currentWord = chain[currentStep];
            const targetWord = chain[currentStep + 1];
            const letters = currentWord.split('');

            // Scramble current word's letters (but not into the current word or the target)
            let scrambled = [...letters];
            let attempts = 0;
            do {
                scrambled = Phaser.Utils.Array.Shuffle([...letters]);
                attempts++;
            } while ((scrambled.join('') === currentWord || scrambled.join('') === targetWord) && attempts < 50);

            const startX = width / 2 - (tileSpacing * (letters.length - 1)) / 2;

            progressText.setText(`Chain: ${currentStep} / ${chainLength - 1}`);
            updateChainDisplay();

            // Create answer slots
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
                    const slotIndex = answerSlots.indexOf(bg);
                    if (answer[slotIndex] !== null && answer[slotIndex] !== undefined) {
                        const removedEntry = answer[slotIndex];
                        answer[slotIndex] = null;
                        txt.setText('');
                        removedEntry.bg.setVisible(true);
                        removedEntry.txt.setVisible(true);
                        removedEntry.bg.setInteractive({ useHandCursor: true });
                    }
                });

                answerSlots.push(bg);
                bg._txt = txt;
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
                    let emptyIndex = -1;
                    for (let j = 0; j < answer.length; j++) {
                        if (answer[j] === null) { emptyIndex = j; break; }
                    }
                    if (emptyIndex === -1) {
                        emptyIndex = answer.length;
                    }
                    if (emptyIndex >= letters.length) return;

                    answer[emptyIndex] = tile;
                    answerSlots[emptyIndex]._txt.setText(tile.letter.toUpperCase());

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

                            currentStep++;

                            if (currentStep >= chainLength - 1) {
                                // Chain complete!
                                timerEvent.remove(false);
                                progressText.setText(`Chain: ${currentStep} / ${chainLength - 1}`);
                                updateChainDisplay();

                                feedbackText = this.add.text(width / 2, answerY + 60, 'Chain Complete!', {
                                    fontSize: '28px',
                                    fontFamily: 'Arial, sans-serif',
                                    color: '#44dd44',
                                }).setOrigin(0.5);

                                this.time.delayedCall(1000, () => {
                                    this.scene.start('LevelCompleteScene', { level: this.level });
                                });
                            } else {
                                // Next step in chain
                                feedbackText = this.add.text(width / 2, answerY + 60, 'Correct! Next word...', {
                                    fontSize: '20px',
                                    fontFamily: 'Arial, sans-serif',
                                    color: '#44dd44',
                                }).setOrigin(0.5);

                                this.time.delayedCall(800, () => {
                                    setupStep();
                                });
                            }
                        } else {
                            // Wrong answer - must be a valid anagram but not the target
                            answerSlots.forEach(slot => slot.setFillStyle(0xff4444));
                            feedbackText = this.add.text(width / 2, answerY + 60, 'Not the right word! Try again.', {
                                fontSize: '18px',
                                fontFamily: 'Arial, sans-serif',
                                color: '#ff6666',
                            }).setOrigin(0.5);

                            this.time.delayedCall(500, () => {
                                answerSlots.forEach(slot => slot.setFillStyle(0x3a3a5a));
                                if (feedbackText) { feedbackText.destroy(); feedbackText = null; }
                            });
                        }
                    }
                });
            }

            // Initialize answer array
            for (let i = 0; i < letters.length; i++) {
                answer.push(null);
            }
        };

        // Clear button
        this.createButton(width / 2, answerY + 120, 'Clear', () => {
            for (let i = 0; i < answer.length; i++) {
                if (answer[i] !== null) {
                    answer[i].bg.setVisible(true);
                    answer[i].txt.setVisible(true);
                    answer[i].bg.setInteractive({ useHandCursor: true });
                    answer[i] = null;
                    answerSlots[i]._txt.setText('');
                }
            }
            if (feedbackText) { feedbackText.destroy(); feedbackText = null; }
        });

        // Start the first step
        setupStep();
    }

    createCipherPuzzle(config) {
        const { width, height } = this.scale;

        const phrases = [
            'THE GAME IS ALMOST DONE',
            'PUZZLES ARE SO MUCH FUN',
            'KEEP GOING YOU GOT THIS',
            'CRACK THE SECRET CODE',
            'NEVER GIVE UP ON THIS',
            'PLAY HARD AND WIN BIG',
        ];

        const originalMessage = Phaser.Utils.Array.GetRandom(phrases);

        // Build substitution cipher: map each letter to a different letter
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const shuffled = Phaser.Utils.Array.Shuffle([...alphabet]);
        // Ensure no letter maps to itself
        for (let i = 0; i < 26; i++) {
            if (shuffled[i] === alphabet[i]) {
                const swapIdx = (i + 1) % 26;
                const tmp = shuffled[i];
                shuffled[i] = shuffled[swapIdx];
                shuffled[swapIdx] = tmp;
            }
        }
        const cipherMap = {};   // plain -> cipher
        const decipherMap = {}; // cipher -> plain
        for (let i = 0; i < 26; i++) {
            cipherMap[alphabet[i]] = shuffled[i];
            decipherMap[shuffled[i]] = alphabet[i];
        }

        // Encode the message
        const encodedMessage = originalMessage.split('').map(ch => {
            if (ch === ' ') return ' ';
            return cipherMap[ch] || ch;
        }).join('');

        // Pick 3-4 unique letters from the message as pre-revealed hints
        const uniqueLetters = [...new Set(originalMessage.split('').filter(ch => ch !== ' '))];
        const hintCount = Math.min(uniqueLetters.length, Phaser.Math.Between(3, 4));
        const hintLetters = Phaser.Utils.Array.Shuffle([...uniqueLetters]).slice(0, hintCount);

        // Player's current mapping: cipher letter -> guessed plain letter
        const playerMap = {};
        // Pre-fill hints
        hintLetters.forEach(plainLetter => {
            const cipherLetter = cipherMap[plainLetter];
            playerMap[cipherLetter] = plainLetter;
        });

        // Instructions
        this.add.text(width / 2, 40, 'Substitution Cipher', {
            fontSize: '24px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        this.add.text(width / 2, 68, 'Decode the message! Click a letter below to assign it.', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Display encoded message as clickable letter cells
        const cellSize = 28;
        const cellPadding = 4;
        const messageChars = encodedMessage.split('');
        const cells = [];

        // Break message into rows that fit the width
        const maxCellsPerRow = Math.floor((width - 40) / (cellSize + cellPadding));
        // Split by words to avoid breaking mid-word
        const words = encodedMessage.split(' ');
        const rows = [];
        let currentRow = [];
        let currentRowLen = 0;

        words.forEach(word => {
            const wordLen = word.length;
            const needed = currentRowLen === 0 ? wordLen : wordLen + 1; // +1 for space
            if (currentRowLen + needed > maxCellsPerRow && currentRow.length > 0) {
                rows.push(currentRow.join(' '));
                currentRow = [word];
                currentRowLen = wordLen;
            } else {
                currentRow.push(word);
                currentRowLen += needed;
            }
        });
        if (currentRow.length > 0) rows.push(currentRow.join(' '));

        const messageStartY = 100;
        const rowHeight = cellSize * 2 + cellPadding + 8;
        let selectedCipherLetter = null;
        let selectedCellHighlights = [];

        const updateAllCells = () => {
            cells.forEach(cell => {
                if (cell.cipherLetter === ' ') return;
                const guess = playerMap[cell.cipherLetter];
                cell.decodedText.setText(guess || '');
                const isHint = hintLetters.includes(decipherMap[cell.cipherLetter]);
                if (isHint) {
                    cell.decodedText.setColor('#88cc88');
                } else if (guess) {
                    cell.decodedText.setColor('#ffdd44');
                }
            });
        };

        const highlightSelected = (cipherLetter) => {
            // Reset all highlights
            cells.forEach(cell => {
                if (cell.cipherLetter === ' ') return;
                const isHint = hintLetters.includes(decipherMap[cell.cipherLetter]);
                cell.bg.setFillStyle(isHint ? 0x2a4a2a : 0x3a3a5a);
            });
            // Highlight cells matching selected cipher letter
            if (cipherLetter) {
                cells.forEach(cell => {
                    if (cell.cipherLetter === cipherLetter) {
                        cell.bg.setFillStyle(0x5a5a9a);
                    }
                });
            }
        };

        const checkWin = () => {
            // Check if all cipher letters in the message are correctly mapped
            for (const ch of encodedMessage) {
                if (ch === ' ') continue;
                const plainLetter = decipherMap[ch];
                if (playerMap[ch] !== plainLetter) return false;
            }
            return true;
        };

        rows.forEach((rowStr, rowIndex) => {
            const rowChars = rowStr.split('');
            const rowWidth = rowChars.length * (cellSize + cellPadding) - cellPadding;
            const rowStartX = (width - rowWidth) / 2 + cellSize / 2;
            const rowY = messageStartY + rowIndex * rowHeight;

            rowChars.forEach((ch, colIndex) => {
                const x = rowStartX + colIndex * (cellSize + cellPadding);

                if (ch === ' ') {
                    cells.push({ cipherLetter: ' ', bg: null, cipherText: null, decodedText: null });
                    return;
                }

                const isHint = hintLetters.includes(decipherMap[ch]);
                const bg = this.add.rectangle(x, rowY, cellSize, cellSize, isHint ? 0x2a4a2a : 0x3a3a5a)
                    .setStrokeStyle(1, 0x6a6aaa);

                // Cipher letter (encoded) on top
                const cipherText = this.add.text(x, rowY - 2, ch, {
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ff8866',
                }).setOrigin(0.5);

                // Decoded letter below
                const decodedText = this.add.text(x, rowY + cellSize + 4, '', {
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffdd44',
                }).setOrigin(0.5);

                const cell = { cipherLetter: ch, bg, cipherText, decodedText };
                cells.push(cell);

                if (!isHint) {
                    bg.setInteractive({ useHandCursor: true });
                    bg.on('pointerdown', () => {
                        selectedCipherLetter = ch;
                        highlightSelected(ch);
                    });
                }
            });
        });

        updateAllCells();

        // Decoder ring: A-Z buttons for the player to assign letters
        const ringY = messageStartY + rows.length * rowHeight + 20;
        const ringLabel = this.add.text(width / 2, ringY, 'Click an encoded letter above, then pick its decoded value:', {
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            color: '#888888',
        }).setOrigin(0.5);

        const btnSize = 30;
        const btnPadding = 4;
        const lettersPerRow = 13;
        const ringStartY = ringY + 25;

        // Find which plain letters are already used (to gray them out)
        const getUsedPlainLetters = () => {
            const used = new Set();
            Object.values(playerMap).forEach(v => { if (v) used.add(v); });
            return used;
        };

        const letterButtons = [];

        for (let i = 0; i < 26; i++) {
            const row = Math.floor(i / lettersPerRow);
            const col = i % lettersPerRow;
            const rowLetterCount = Math.min(lettersPerRow, 26 - row * lettersPerRow);
            const rowWidth = rowLetterCount * (btnSize + btnPadding) - btnPadding;
            const rowStartX = (width - rowWidth) / 2 + btnSize / 2;
            const x = rowStartX + col * (btnSize + btnPadding);
            const y = ringStartY + row * (btnSize + btnPadding + 2);
            const letter = alphabet[i];

            const bg = this.add.rectangle(x, y, btnSize, btnSize, 0x4a4a6a)
                .setInteractive({ useHandCursor: true })
                .setStrokeStyle(1, 0x6a6a8a);
            const txt = this.add.text(x, y, letter, {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            bg.on('pointerover', () => bg.setFillStyle(0x6a6a9a));
            bg.on('pointerout', () => {
                const used = getUsedPlainLetters();
                bg.setFillStyle(used.has(letter) ? 0x2a2a3a : 0x4a4a6a);
            });

            bg.on('pointerdown', () => {
                if (!selectedCipherLetter) return;
                const isHintCipher = hintLetters.includes(decipherMap[selectedCipherLetter]);
                if (isHintCipher) return;

                // Remove any existing mapping that uses this plain letter (avoid duplicates)
                Object.keys(playerMap).forEach(k => {
                    if (playerMap[k] === letter && !hintLetters.includes(decipherMap[k])) {
                        delete playerMap[k];
                    }
                });

                playerMap[selectedCipherLetter] = letter;
                updateAllCells();
                updateButtonColors();

                if (checkWin()) {
                    // Win!
                    cells.forEach(cell => {
                        if (cell.bg) cell.bg.setFillStyle(0x44dd44);
                    });
                    letterButtons.forEach(b => b.bg.disableInteractive());

                    this.add.text(width / 2, ringStartY + 90, 'Decoded!', {
                        fontSize: '28px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#44dd44',
                    }).setOrigin(0.5);

                    this.time.delayedCall(1000, () => {
                        this.scene.start('LevelCompleteScene', { level: this.level });
                    });
                }
            });

            letterButtons.push({ bg, txt, letter });
        }

        const updateButtonColors = () => {
            const used = getUsedPlainLetters();
            letterButtons.forEach(b => {
                b.bg.setFillStyle(used.has(b.letter) ? 0x2a2a3a : 0x4a4a6a);
                b.txt.setColor(used.has(b.letter) ? '#666666' : '#ffffff');
            });
        };

        updateButtonColors();

        // Clear mapping button (only clears non-hint mappings)
        this.createButton(width / 2, ringStartY + 70 + (Math.ceil(26 / lettersPerRow) - 1) * (btnSize + btnPadding), 'Clear Guesses', () => {
            Object.keys(playerMap).forEach(k => {
                if (!hintLetters.includes(decipherMap[k])) {
                    delete playerMap[k];
                }
            });
            selectedCipherLetter = null;
            highlightSelected(null);
            updateAllCells();
            updateButtonColors();
        });
    }

    createCrosswordPuzzle(config) {
        const { width, height } = this.scale;

        // Hardcoded crossword layouts: each has words with positions/directions and clues
        // Grid coordinates are (col, row), direction is 'across' or 'down'
        const layouts = [
            {
                words: [
                    { word: 'STAR', clue: 'Shines in the night sky', col: 0, row: 0, dir: 'across' },
                    { word: 'TREE', clue: 'Grows in a forest', col: 0, row: 0, dir: 'down' },
                    { word: 'RAIN', clue: 'Falls from clouds', col: 2, row: 0, dir: 'down' },
                    { word: 'NEST', clue: 'A bird\'s home', col: 0, row: 2, dir: 'across' },
                ],
            },
            {
                words: [
                    { word: 'FISH', clue: 'Swims in water', col: 0, row: 0, dir: 'across' },
                    { word: 'FIRE', clue: 'Hot and bright', col: 0, row: 0, dir: 'down' },
                    { word: 'HIDE', clue: 'Seek\'s partner', col: 2, row: 0, dir: 'down' },
                    { word: 'ROSE', clue: 'A red flower', col: 0, row: 2, dir: 'across' },
                ],
            },
            {
                words: [
                    { word: 'LAMP', clue: 'Provides light', col: 0, row: 0, dir: 'across' },
                    { word: 'LIME', clue: 'A green citrus fruit', col: 0, row: 0, dir: 'down' },
                    { word: 'MIST', clue: 'Thin fog', col: 2, row: 0, dir: 'down' },
                    { word: 'MAPS', clue: 'Help you navigate', col: 0, row: 2, dir: 'across' },
                ],
            },
        ];

        const layout = Phaser.Utils.Array.GetRandom(layouts);
        const words = layout.words;

        // Build the grid: find dimensions
        let maxCol = 0, maxRow = 0;
        const gridCells = {}; // key: "col,row" -> { letter, wordIndices }
        words.forEach((w, wi) => {
            for (let i = 0; i < w.word.length; i++) {
                const col = w.dir === 'across' ? w.col + i : w.col;
                const row = w.dir === 'down' ? w.row + i : w.row;
                const key = `${col},${row}`;
                if (!gridCells[key]) {
                    gridCells[key] = { letter: w.word[i], wordIndices: [], placed: null };
                }
                gridCells[key].wordIndices.push(wi);
                if (col > maxCol) maxCol = col;
                if (row > maxRow) maxRow = row;
            }
        });

        const gridW = maxCol + 1;
        const gridH = maxRow + 1;
        const cellSize = 52;
        const cellGap = 4;
        const gridPixelW = gridW * (cellSize + cellGap) - cellGap;
        const gridPixelH = gridH * (cellSize + cellGap) - cellGap;
        const gridStartX = width / 2 - gridPixelW / 2;
        const gridStartY = 120;

        // Instructions
        this.add.text(width / 2, 30, 'Crossword Puzzle', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        this.add.text(width / 2, 58, 'Place letters from the pool into the grid', {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Draw clues
        const clueStartY = gridStartY + gridPixelH + 20;
        const clueX = width / 2;
        const acrossClues = words.filter(w => w.dir === 'across');
        const downClues = words.filter(w => w.dir === 'down');

        let cy = clueStartY;
        this.add.text(clueX - 150, cy, 'Across:', {
            fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#88aacc',
        });
        this.add.text(clueX + 30, cy, 'Down:', {
            fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#cc88aa',
        });
        cy += 20;
        const maxClues = Math.max(acrossClues.length, downClues.length);
        for (let i = 0; i < maxClues; i++) {
            if (i < acrossClues.length) {
                this.add.text(clueX - 150, cy + i * 18, `${i + 1}. ${acrossClues[i].clue}`, {
                    fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#88aacc',
                });
            }
            if (i < downClues.length) {
                this.add.text(clueX + 30, cy + i * 18, `${i + 1}. ${downClues[i].clue}`, {
                    fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#cc88aa',
                });
            }
        }

        // Collect all unique letters for the pool
        const allLetters = [];
        Object.keys(gridCells).forEach(key => {
            allLetters.push(gridCells[key].letter);
        });
        let scrambled = Phaser.Utils.Array.Shuffle([...allLetters]);

        // State
        let selectedTile = null;
        const cellObjects = {}; // key -> { bg, txt }

        // Draw grid cells
        Object.keys(gridCells).forEach(key => {
            const [colStr, rowStr] = key.split(',');
            const col = parseInt(colStr);
            const row = parseInt(rowStr);
            const x = gridStartX + col * (cellSize + cellGap) + cellSize / 2;
            const y = gridStartY + row * (cellSize + cellGap) + cellSize / 2;

            const bg = this.add.rectangle(x, y, cellSize, cellSize, 0x3a3a5a)
                .setStrokeStyle(2, 0x6a6aaa)
                .setInteractive({ useHandCursor: true });
            const txt = this.add.text(x, y, '', {
                fontSize: '28px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            cellObjects[key] = { bg, txt };

            bg.on('pointerdown', () => {
                if (selectedTile) {
                    // Place the selected letter
                    const cell = gridCells[key];
                    if (cell.placed !== null) {
                        // Return existing letter to pool
                        const oldTile = cell.placed;
                        oldTile.bg.setVisible(true);
                        oldTile.txt.setVisible(true);
                        oldTile.bg.setInteractive({ useHandCursor: true });
                    }
                    cell.placed = selectedTile;
                    txt.setText(selectedTile.letter);
                    selectedTile.bg.setVisible(false);
                    selectedTile.txt.setVisible(false);
                    selectedTile.bg.disableInteractive();
                    selectedTile.outline.setVisible(false);
                    selectedTile = null;
                    bg.setFillStyle(0x3a3a5a);

                    // Check completion
                    this.checkCrosswordCompletion(gridCells, cellObjects, words);
                } else if (gridCells[key].placed !== null) {
                    // Remove letter from cell back to pool
                    const tile = gridCells[key].placed;
                    tile.bg.setVisible(true);
                    tile.txt.setVisible(true);
                    tile.bg.setInteractive({ useHandCursor: true });
                    gridCells[key].placed = null;
                    txt.setText('');
                }
            });
        });

        // Letter pool
        const poolY = clueStartY + maxClues * 18 + 30;
        const tileSize = 46;
        const tileSpacing = 54;
        const poolStartX = width / 2 - (tileSpacing * (scrambled.length - 1)) / 2;
        const letterTiles = [];

        for (let i = 0; i < scrambled.length; i++) {
            const x = poolStartX + i * tileSpacing;
            const bg = this.add.rectangle(x, poolY, tileSize, tileSize, 0x4a4a8a)
                .setInteractive({ useHandCursor: true });
            const txt = this.add.text(x, poolY, scrambled[i], {
                fontSize: '26px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);
            const outline = this.add.rectangle(x, poolY, tileSize + 4, tileSize + 4)
                .setStrokeStyle(3, 0xffdd44)
                .setFillStyle()
                .setVisible(false);

            const tile = { bg, txt, letter: scrambled[i], outline };
            letterTiles.push(tile);

            bg.on('pointerover', () => { if (bg.visible) bg.setFillStyle(0x6a6aaa); });
            bg.on('pointerout', () => { if (bg.visible) bg.setFillStyle(0x4a4a8a); });

            bg.on('pointerdown', () => {
                // Deselect previous
                if (selectedTile && selectedTile !== tile) {
                    selectedTile.outline.setVisible(false);
                }
                if (selectedTile === tile) {
                    selectedTile.outline.setVisible(false);
                    selectedTile = null;
                } else {
                    selectedTile = tile;
                    tile.outline.setVisible(true);
                }
            });
        }

        // Clear button
        this.createButton(width / 2, poolY + 60, 'Clear All', () => {
            Object.keys(gridCells).forEach(key => {
                const cell = gridCells[key];
                if (cell.placed !== null) {
                    cell.placed.bg.setVisible(true);
                    cell.placed.txt.setVisible(true);
                    cell.placed.bg.setInteractive({ useHandCursor: true });
                    cell.placed = null;
                    cellObjects[key].txt.setText('');
                    cellObjects[key].bg.setFillStyle(0x3a3a5a);
                }
            });
            if (selectedTile) {
                selectedTile.outline.setVisible(false);
                selectedTile = null;
            }
        });
    }

    checkCrosswordCompletion(gridCells, cellObjects, words) {
        // Check if all cells are filled
        const allFilled = Object.keys(gridCells).every(key => gridCells[key].placed !== null);
        if (!allFilled) return;

        // Check each word
        let allCorrect = true;
        for (const w of words) {
            for (let i = 0; i < w.word.length; i++) {
                const col = w.dir === 'across' ? w.col + i : w.col;
                const row = w.dir === 'down' ? w.row + i : w.row;
                const key = `${col},${row}`;
                if (gridCells[key].placed.letter !== w.word[i]) {
                    allCorrect = false;
                    break;
                }
            }
            if (!allCorrect) break;
        }

        if (allCorrect) {
            Object.keys(cellObjects).forEach(key => {
                cellObjects[key].bg.setFillStyle(0x44dd44);
                cellObjects[key].bg.disableInteractive();
            });

            const { width } = this.scale;
            this.add.text(width / 2, 90, 'Correct!', {
                fontSize: '28px',
                fontFamily: 'Arial, sans-serif',
                color: '#44dd44',
            }).setOrigin(0.5);

            this.time.delayedCall(800, () => {
                this.scene.start('LevelCompleteScene', { level: this.level });
            });
        } else {
            // Flash red
            Object.keys(cellObjects).forEach(key => {
                cellObjects[key].bg.setFillStyle(0xff4444);
            });
            this.time.delayedCall(500, () => {
                Object.keys(cellObjects).forEach(key => {
                    cellObjects[key].bg.setFillStyle(0x3a3a5a);
                });
            });
        }
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

        // Timer support for timed sliding puzzles
        let timerEvent = null;
        if (config.timeLimit) {
            let timeLeft = config.timeLimit;
            const timerText = this.add.text(width / 2, useImage ? 114 : 94, `Time: ${timeLeft}s`, {
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            timerEvent = this.time.addEvent({
                delay: 1000,
                repeat: config.timeLimit - 1,
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
                                if (timerEvent) timerEvent.remove(false);
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
        const { sequenceLength, numChoices, interleaved, mode } = config;

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

        if (mode === 'recursive') {
            this.createRecursiveSequenceLogic(config);
            return;
        }

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
        const { sequenceLength, numChoices, rules: numRules } = config;
        const ruleCount = numRules || 2;

        if (ruleCount === 3) {
            this.createTripleInterleavedSequenceLogic(config, sequenceDefs);
            return;
        }

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

    createTripleInterleavedSequenceLogic(config, sequenceDefs) {
        const { width, height } = this.scale;
        const { sequenceLength, numChoices } = config;

        // Instructions
        this.add.text(width / 2, 40, 'THREE rules are interleaved! What comes next?', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 65, 'Positions 1,4,7,... / 2,5,8,... / 3,6,9,... each follow a different rule.', {
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            color: '#666666',
        }).setOrigin(0.5);

        // Pick three different sequence definitions
        const shuffled = Phaser.Utils.Array.Shuffle([...sequenceDefs]);
        const seqDefs = [shuffled[0], shuffled[1], shuffled[2]];

        // Calculate how many terms each sub-sequence needs
        // Total positions = sequenceLength + 1 (displayed + answer)
        const totalPositions = sequenceLength + 1;
        const counts = [0, 0, 0];
        for (let i = 0; i < totalPositions; i++) {
            counts[i % 3]++;
        }

        // Generate each sub-sequence
        const subSeqs = seqDefs.map((def, r) => def.gen(counts[r] - 1));

        // Interleave the three sequences
        const fullInterleaved = [];
        const subIndices = [0, 0, 0];
        for (let i = 0; i < totalPositions; i++) {
            const r = i % 3;
            fullInterleaved.push(subSeqs[r][subIndices[r]++]);
        }

        const displayed = fullInterleaved.slice(0, sequenceLength);
        const correctAnswer = fullInterleaved[sequenceLength];

        // Display the sequence with a '?' at the end
        const seqY = height / 2 - 70;
        const items = [...displayed.map(String), '?'];
        const itemSpacing = Math.min(60, (width - 60) / items.length);
        const totalW = items.length * itemSpacing;
        const startX = (width - totalW) / 2 + itemSpacing / 2;
        const boxSize = Math.min(48, itemSpacing - 8);

        // Three distinct colors for the three rules
        const ruleColors = [
            { bg: 0x2a3a5a, border: 0x4a6a8a, label: '#4a6a8a' },  // blue - Rule A
            { bg: 0x3a2a4a, border: 0x6a4a7a, label: '#6a4a7a' },  // purple - Rule B
            { bg: 0x2a4a3a, border: 0x4a8a6a, label: '#4a8a6a' },  // green - Rule C
        ];

        items.forEach((item, i) => {
            const x = startX + i * itemSpacing;
            const isQuestion = item === '?';
            const ruleIdx = i % 3;

            const bgColor = isQuestion ? 0x3a3a6a : ruleColors[ruleIdx].bg;
            const borderColor = isQuestion ? 0x6a6aaa : ruleColors[ruleIdx].border;

            this.add.rectangle(x, seqY, boxSize, boxSize, bgColor)
                .setStrokeStyle(2, borderColor);

            const fontSize = item.length > 3 ? '16px' : (isQuestion ? '26px' : '20px');
            this.add.text(x, seqY, item, {
                fontSize: fontSize,
                fontFamily: 'Arial, sans-serif',
                color: isQuestion ? '#888888' : '#ffffff',
            }).setOrigin(0.5);
        });

        // Legend for the three rules
        const legendY = seqY + 42;
        const legendLabels = ['Rule A', 'Rule B', 'Rule C'];
        const legendStartX = width / 2 - 120;
        legendLabels.forEach((label, r) => {
            const lx = legendStartX + r * 90;
            this.add.rectangle(lx, legendY, 12, 12, ruleColors[r].bg).setStrokeStyle(1, ruleColors[r].border);
            this.add.text(lx + 10, legendY, label, {
                fontSize: '11px', fontFamily: 'Arial, sans-serif', color: ruleColors[r].label,
            }).setOrigin(0, 0.5);
        });

        // Generate wrong answers - use values from other sub-sequences to make it tricky
        const wrongAnswers = new Set();
        // Add nearby values from the correct answer's sub-sequence
        const answerRule = sequenceLength % 3;
        const answerSubSeq = subSeqs[answerRule];
        const answerSubIdx = subIndices[answerRule] - 1;
        // Add the next values from the OTHER two sub-sequences as distractors
        for (let r = 0; r < 3; r++) {
            if (r !== answerRule && subSeqs[r].length > subIndices[r]) {
                const nextInOther = subSeqs[r][subIndices[r]];
                if (nextInOther !== correctAnswer && nextInOther > 0) {
                    wrongAnswers.add(nextInOther);
                }
            }
        }
        // Fill remaining with offsets from correct answer
        const offsets = [-3, -2, -1, 1, 2, 3, 5, -5, 4, -4, 6, -6, 8, -8, 10, -10];
        let oi = 0;
        while (wrongAnswers.size < numChoices - 1 && oi < offsets.length) {
            const wrong = correctAnswer + offsets[oi];
            if (wrong !== correctAnswer && wrong > 0 && !wrongAnswers.has(wrong)) {
                wrongAnswers.add(wrong);
            }
            oi++;
        }

        const choices = [correctAnswer, ...[...wrongAnswers].slice(0, numChoices - 1)];
        Phaser.Utils.Array.Shuffle(choices);

        // Draw choice buttons - use two rows for 6 choices
        const choiceY = height / 2 + 40;
        const choicesPerRow = 3;
        const choiceW = 80;
        const choicePadding = 20;
        const rowSpacing = 60;

        const feedbackText = this.add.text(width / 2, choiceY + rowSpacing + 50, '', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        let solved = false;

        choices.forEach((value, i) => {
            const row = Math.floor(i / choicesPerRow);
            const col = i % choicesPerRow;
            const rowTotalW = choicesPerRow * choiceW + (choicesPerRow - 1) * choicePadding;
            const rowStartX = (width - rowTotalW) / 2 + choiceW / 2;
            const cx = rowStartX + col * (choiceW + choicePadding);
            const cy = choiceY + row * rowSpacing;

            const bg = this.add.rectangle(cx, cy, choiceW, 46, 0x2a2a4a)
                .setStrokeStyle(2, 0x4a4a6a)
                .setInteractive({ useHandCursor: true });

            this.add.text(cx, cy, String(value), {
                fontSize: '22px',
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
                        fontSize: '20px',
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

    createRecursiveSequenceLogic(config) {
        const { width, height } = this.scale;
        const { sequenceLength, numChoices } = config;

        // Recursive sequence definitions where each term depends on multiple previous terms
        const recursiveDefs = [
            // Fibonacci: a(n) = a(n-1) + a(n-2)
            { rule: 'sum of last 2', seeds: [1, 1], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(s[i - 1] + s[i - 2]); return s; } },
            // Tribonacci: a(n) = a(n-1) + a(n-2) + a(n-3)
            { rule: 'sum of last 3', seeds: [1, 1, 2], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(s[i - 1] + s[i - 2] + s[i - 3]); return s; } },
            // Padovan-like: a(n) = a(n-2) + a(n-3)
            { rule: 'sum of 2nd and 3rd prev', seeds: [1, 1, 1], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(s[i - 2] + s[i - 3]); return s; } },
            // Alternating add/multiply: a(n) = a(n-1) + a(n-2) when n is even, a(n) = a(n-1) * 2 when n is odd
            { rule: 'alternating add/double', seeds: [1, 2], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) { if (i % 2 === 0) s.push(s[i - 1] + s[i - 2]); else s.push(s[i - 1] * 2); } return s; } },
            // Sum of all previous: a(n) = sum of a(0)..a(n-1)
            { rule: 'sum of all previous', seeds: [1], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) { let sum = 0; for (let j = 0; j < i; j++) sum += s[j]; s.push(sum); } return s; } },
            // Fibonacci variant with multiplication: a(n) = a(n-1) + a(n-2) * 2
            { rule: 'prev + 2×(2nd prev)', seeds: [1, 1], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(s[i - 1] + s[i - 2] * 2); return s; } },
            // a(n) = a(n-1) * 2 - a(n-2)  (constant difference, but looks recursive)
            { rule: '2×prev - 2nd prev', seeds: [2, 5], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(s[i - 1] * 2 - s[i - 2]); return s; } },
            // a(n) = a(n-1) + a(n-2) + 1
            { rule: 'sum of last 2 plus 1', seeds: [1, 1], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(s[i - 1] + s[i - 2] + 1); return s; } },
            // Pell-like: a(n) = 2*a(n-1) + a(n-2)
            { rule: '2×prev + 2nd prev', seeds: [1, 2], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(2 * s[i - 1] + s[i - 2]); return s; } },
            // a(n) = a(n-1) + n (adds index)
            { rule: 'prev + position', seeds: [1], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(s[i - 1] + i + 1); return s; } },
            // a(n) = |a(n-1) - a(n-2)| + a(n-3)
            { rule: '|diff of last 2| + 3rd prev', seeds: [3, 7, 2], gen: (seeds, n) => { const s = [...seeds]; for (let i = s.length; i < n; i++) s.push(Math.abs(s[i - 1] - s[i - 2]) + s[i - 3]); return s; } },
        ];

        // Pick a random recursive definition
        const def = Phaser.Utils.Array.GetRandom(recursiveDefs);
        const totalNeeded = sequenceLength + 1; // displayed terms + answer
        const fullSequence = def.gen(def.seeds, totalNeeded);
        const displayed = fullSequence.slice(0, sequenceLength);
        const correctAnswer = fullSequence[sequenceLength];

        // Instructions
        this.add.text(width / 2, 40, 'Recursive Sequence! Find the pattern.', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        this.add.text(width / 2, 65, 'Each term depends on previous terms. What is the missing last term?', {
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            color: '#666666',
        }).setOrigin(0.5);

        // Display the sequence with last term as '?'
        const seqY = height / 2 - 70;
        const items = [...displayed.map(String), '?'];
        const itemSpacing = Math.min(65, (width - 80) / items.length);
        const totalW = items.length * itemSpacing;
        const startX = (width - totalW) / 2 + itemSpacing / 2;
        const boxSize = Math.min(52, itemSpacing - 8);

        items.forEach((item, i) => {
            const x = startX + i * itemSpacing;
            const isQuestion = item === '?';

            const bgColor = isQuestion ? 0x3a3a6a : 0x2a2a4a;
            const borderColor = isQuestion ? 0x6a6aaa : 0x4a4a6a;

            this.add.rectangle(x, seqY, boxSize, boxSize, bgColor)
                .setStrokeStyle(2, borderColor);

            const fontSize = item.length > 4 ? '14px' : item.length > 3 ? '16px' : (isQuestion ? '28px' : '20px');
            this.add.text(x, seqY, item, {
                fontSize: fontSize,
                fontFamily: 'Arial, sans-serif',
                color: isQuestion ? '#888888' : '#ffffff',
            }).setOrigin(0.5);
        });

        // Generate wrong answers - make them tricky by using plausible recursive results
        const wrongAnswers = new Set();
        // Try applying wrong recursive rules to generate plausible distractors
        const lastTwo = displayed.slice(-2);
        const lastThree = displayed.slice(-3);
        const plausibleWrong = [
            lastTwo[0] + lastTwo[1],             // simple fibonacci on last 2
            lastTwo[1] * 2,                       // double last
            lastTwo[1] + lastTwo[0] * 2,          // weighted sum
            lastThree[0] + lastThree[1] + lastThree[2], // sum of last 3
            lastTwo[1] * 2 - lastTwo[0],          // linear extrapolation
            lastTwo[1] + lastTwo[1] - lastTwo[0] + 1, // off-by-one linear
            correctAnswer + 1,
            correctAnswer - 1,
            correctAnswer + 2,
            correctAnswer - 2,
            Math.abs(lastTwo[1] - lastTwo[0]) + lastThree[0],
        ];
        for (const w of plausibleWrong) {
            if (w !== correctAnswer && w > 0 && Number.isInteger(w)) {
                wrongAnswers.add(w);
            }
            if (wrongAnswers.size >= numChoices - 1) break;
        }
        // Fill remaining with offsets
        const offsets = [-5, -3, 3, 5, -7, 7, -4, 4, -6, 6];
        let oi = 0;
        while (wrongAnswers.size < numChoices - 1 && oi < offsets.length) {
            const wrong = correctAnswer + offsets[oi];
            if (wrong !== correctAnswer && wrong > 0 && !wrongAnswers.has(wrong)) {
                wrongAnswers.add(wrong);
            }
            oi++;
        }

        const choices = [correctAnswer, ...[...wrongAnswers].slice(0, numChoices - 1)];
        Phaser.Utils.Array.Shuffle(choices);

        // Draw choice buttons in two rows of 3
        const choiceY = height / 2 + 40;
        const choicesPerRow = 3;
        const choiceW = 80;
        const choicePadding = 20;
        const rowSpacing = 60;

        const feedbackText = this.add.text(width / 2, choiceY + rowSpacing + 50, '', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4444',
        }).setOrigin(0.5);

        let solved = false;

        choices.forEach((value, i) => {
            const row = Math.floor(i / choicesPerRow);
            const col = i % choicesPerRow;
            const rowTotalW = choicesPerRow * choiceW + (choicesPerRow - 1) * choicePadding;
            const rowStartX = (width - rowTotalW) / 2 + choiceW / 2;
            const cx = rowStartX + col * (choiceW + choicePadding);
            const cy = choiceY + row * rowSpacing;

            const bg = this.add.rectangle(cx, cy, choiceW, 46, 0x2a2a4a)
                .setStrokeStyle(2, 0x4a4a6a)
                .setInteractive({ useHandCursor: true });

            this.add.text(cx, cy, String(value), {
                fontSize: '22px',
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
                        fontSize: '20px',
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
        const { size, lockedCells: numLocked, chainReaction } = config;

        // Instructions
        this.add.text(width / 2, 70, 'Turn ALL lights ON!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        const instrDetail = chainReaction
            ? 'Toggles cascade! If a neighbor was ON before toggling, it cascades further.'
            : numLocked
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

        // Helper: simulate a click at (cr, cc) on the grid (used for setup and chain reaction)
        const simulateClick = (cr, cc) => {
            const toggles = [[cr, cc], [cr - 1, cc], [cr + 1, cc], [cr, cc - 1], [cr, cc + 1]];
            if (chainReaction) {
                const visited = new Set();
                const queue = [...toggles];
                while (queue.length > 0) {
                    const [tr, tc] = queue.shift();
                    if (tr < 0 || tr >= size || tc < 0 || tc >= size) continue;
                    const key = `${tr},${tc}`;
                    if (visited.has(key)) continue;
                    visited.add(key);
                    const wasOn = grid[tr][tc];
                    grid[tr][tc] = !grid[tr][tc];
                    if (wasOn && !(tr === cr && tc === cc)) {
                        const neighbors = [[tr - 1, tc], [tr + 1, tc], [tr, tc - 1], [tr, tc + 1]];
                        neighbors.forEach(([nr, nc]) => {
                            if (nr >= 0 && nr < size && nc >= 0 && nc < size && !visited.has(`${nr},${nc}`)) {
                                queue.push([nr, nc]);
                            }
                        });
                    }
                }
            } else {
                toggles.forEach(([tr, tc]) => {
                    if (tr >= 0 && tr < size && tc >= 0 && tc < size) {
                        grid[tr][tc] = !grid[tr][tc];
                    }
                });
            }
        };

        const numToggles = Phaser.Math.Between(3, clickable.length);
        for (let t = 0; t < numToggles; t++) {
            const idx = Phaser.Math.Between(0, clickable.length - 1);
            const [tr, tc] = clickable[idx];
            simulateClick(tr, tc);
        }

        // If all are already on after randomization, do one more toggle
        const allOn = () => grid.every(row => row.every(cell => cell));
        if (allOn()) {
            const idx = Phaser.Math.Between(0, clickable.length - 1);
            const [mr, mc] = clickable[idx];
            simulateClick(mr, mc);
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
                        if (chainReaction) {
                            // Chain reaction: track which cells to process
                            const visited = new Set();
                            const queue = [...toggles];
                            while (queue.length > 0) {
                                const [tr, tc] = queue.shift();
                                if (tr < 0 || tr >= size || tc < 0 || tc >= size) continue;
                                const key = `${tr},${tc}`;
                                if (visited.has(key)) continue;
                                visited.add(key);
                                const wasOn = grid[tr][tc];
                                grid[tr][tc] = !grid[tr][tc];
                                updateCell(tr, tc);
                                // If this neighbor was ON (target state) before being toggled,
                                // cascade to its neighbors
                                if (wasOn && !(tr === r && tc === c)) {
                                    const neighbors = [[tr - 1, tc], [tr + 1, tc], [tr, tc - 1], [tr, tc + 1]];
                                    neighbors.forEach(([nr, nc]) => {
                                        if (nr >= 0 && nr < size && nc >= 0 && nc < size && !visited.has(`${nr},${nc}`)) {
                                            queue.push([nr, nc]);
                                        }
                                    });
                                }
                            }
                        } else {
                            toggles.forEach(([tr, tc]) => {
                                if (tr >= 0 && tr < size && tc >= 0 && tc < size) {
                                    grid[tr][tc] = !grid[tr][tc];
                                    updateCell(tr, tc);
                                }
                            });
                        }

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
        const { gridSize, colors, fillBoard, timeLimit } = config;

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

        const allColorValues = [0xff4444, 0x44dd44, 0x4488ff, 0xffdd44, 0xaa44ff, 0xff8844, 0x44dddd, 0xff44aa, 0x88ff44, 0xffd700, 0xff6b6b, 0x5555ff, 0xaa8844, 0x44ffaa, 0xe84393];
        let colorValues, endpoints;

        if (gridSize === 12 && colors === 15 && fillBoard) {
            // Hardcoded solvable 12x12 puzzle with 15 color pairs that fills all 144 cells
            // Serpentine paths winding across the grid:
            // Path 0  (red):     (0,0)→(0,1)→(0,2)→(0,3)→(0,4)→(0,5)→(0,6)→(0,7)→(0,8)→(0,9)
            // Path 1  (green):   (0,10)→(0,11)→(1,11)→(1,10)→(1,9)→(1,8)→(1,7)→(1,6)→(1,5)
            // Path 2  (blue):    (1,4)→(1,3)→(1,2)→(1,1)→(1,0)→(2,0)→(2,1)→(2,2)→(2,3)→(2,4)
            // Path 3  (yellow):  (2,5)→(2,6)→(2,7)→(2,8)→(2,9)→(2,10)→(2,11)→(3,11)→(3,10)→(3,9)
            // Path 4  (purple):  (3,8)→(3,7)→(3,6)→(3,5)→(3,4)→(3,3)→(3,2)→(3,1)→(3,0)→(4,0)
            // Path 5  (orange):  (4,1)→(4,2)→(4,3)→(4,4)→(4,5)→(4,6)→(4,7)→(4,8)→(4,9)
            // Path 6  (cyan):    (4,10)→(4,11)→(5,11)→(5,10)→(5,9)→(5,8)→(5,7)→(5,6)→(5,5)
            // Path 7  (pink):    (5,4)→(5,3)→(5,2)→(5,1)→(5,0)→(6,0)→(6,1)→(6,2)→(6,3)→(6,4)
            // Path 8  (lime):    (6,5)→(6,6)→(6,7)→(6,8)→(6,9)→(6,10)→(6,11)→(7,11)→(7,10)→(7,9)
            // Path 9  (gold):    (7,8)→(7,7)→(7,6)→(7,5)→(7,4)→(7,3)→(7,2)→(7,1)→(7,0)→(8,0)
            // Path 10 (coral):   (8,1)→(8,2)→(8,3)→(8,4)→(8,5)→(8,6)→(8,7)→(8,8)→(8,9)
            // Path 11 (indigo):  (8,10)→(8,11)→(9,11)→(9,10)→(9,9)→(9,8)→(9,7)→(9,6)→(9,5)
            // Path 12 (brown):   (9,4)→(9,3)→(9,2)→(9,1)→(9,0)→(10,0)→(10,1)→(10,2)→(10,3)→(10,4)
            // Path 13 (mint):    (10,5)→(10,6)→(10,7)→(10,8)→(10,9)→(10,10)→(10,11)→(11,11)→(11,10)→(11,9)
            // Path 14 (rose):    (11,8)→(11,7)→(11,6)→(11,5)→(11,4)→(11,3)→(11,2)→(11,1)→(11,0)
            colorValues = allColorValues.slice(0, 15);
            endpoints = [
                { color: 0,  start: { r: 0, c: 0 },   end: { r: 0, c: 9 } },
                { color: 1,  start: { r: 0, c: 10 },  end: { r: 1, c: 5 } },
                { color: 2,  start: { r: 1, c: 4 },   end: { r: 2, c: 4 } },
                { color: 3,  start: { r: 2, c: 5 },   end: { r: 3, c: 9 } },
                { color: 4,  start: { r: 3, c: 8 },   end: { r: 4, c: 0 } },
                { color: 5,  start: { r: 4, c: 1 },   end: { r: 4, c: 9 } },
                { color: 6,  start: { r: 4, c: 10 },  end: { r: 5, c: 5 } },
                { color: 7,  start: { r: 5, c: 4 },   end: { r: 6, c: 4 } },
                { color: 8,  start: { r: 6, c: 5 },   end: { r: 7, c: 9 } },
                { color: 9,  start: { r: 7, c: 8 },   end: { r: 8, c: 0 } },
                { color: 10, start: { r: 8, c: 1 },   end: { r: 8, c: 9 } },
                { color: 11, start: { r: 8, c: 10 },  end: { r: 9, c: 5 } },
                { color: 12, start: { r: 9, c: 4 },   end: { r: 10, c: 4 } },
                { color: 13, start: { r: 10, c: 5 },  end: { r: 11, c: 9 } },
                { color: 14, start: { r: 11, c: 8 },  end: { r: 11, c: 0 } },
            ];
        } else if (gridSize === 10 && colors === 12 && fillBoard) {
            // Hardcoded solvable 10x10 puzzle with 12 color pairs that fills all 100 cells
            // Path 0  (red):    (0,0)→(0,1)→(0,2)→(0,3)→(0,4)→(0,5)→(0,6)→(0,7)→(0,8)→(0,9)
            // Path 1  (green):  (1,9)→(1,8)→(1,7)→(1,6)→(1,5)→(1,4)→(1,3)→(1,2)
            // Path 2  (blue):   (1,1)→(1,0)→(2,0)→(2,1)→(2,2)→(2,3)→(2,4)→(2,5)
            // Path 3  (yellow): (2,6)→(2,7)→(2,8)→(2,9)→(3,9)→(3,8)→(3,7)→(3,6)
            // Path 4  (purple): (3,5)→(3,4)→(3,3)→(3,2)→(3,1)→(3,0)→(4,0)→(4,1)
            // Path 5  (orange): (4,2)→(4,3)→(4,4)→(4,5)→(4,6)→(4,7)→(4,8)→(4,9)
            // Path 6  (cyan):   (5,9)→(5,8)→(5,7)→(5,6)→(5,5)→(5,4)→(5,3)→(5,2)
            // Path 7  (pink):   (5,1)→(5,0)→(6,0)→(6,1)→(6,2)→(6,3)→(6,4)→(6,5)
            // Path 8  (lime):   (6,6)→(6,7)→(6,8)→(6,9)→(7,9)→(7,8)→(7,7)→(7,6)
            // Path 9  (gold):   (7,5)→(7,4)→(7,3)→(7,2)→(7,1)→(7,0)→(8,0)→(8,1)
            // Path 10 (coral):  (8,2)→(8,3)→(8,4)→(8,5)→(8,6)→(8,7)→(8,8)→(8,9)
            // Path 11 (indigo): (9,9)→(9,8)→(9,7)→(9,6)→(9,5)→(9,4)→(9,3)→(9,2)→(9,1)→(9,0)
            colorValues = allColorValues.slice(0, 12);
            endpoints = [
                { color: 0,  start: { r: 0, c: 0 }, end: { r: 0, c: 9 } },
                { color: 1,  start: { r: 1, c: 9 }, end: { r: 1, c: 2 } },
                { color: 2,  start: { r: 1, c: 1 }, end: { r: 2, c: 5 } },
                { color: 3,  start: { r: 2, c: 6 }, end: { r: 3, c: 6 } },
                { color: 4,  start: { r: 3, c: 5 }, end: { r: 4, c: 1 } },
                { color: 5,  start: { r: 4, c: 2 }, end: { r: 4, c: 9 } },
                { color: 6,  start: { r: 5, c: 9 }, end: { r: 5, c: 2 } },
                { color: 7,  start: { r: 5, c: 1 }, end: { r: 6, c: 5 } },
                { color: 8,  start: { r: 6, c: 6 }, end: { r: 7, c: 6 } },
                { color: 9,  start: { r: 7, c: 5 }, end: { r: 8, c: 1 } },
                { color: 10, start: { r: 8, c: 2 }, end: { r: 8, c: 9 } },
                { color: 11, start: { r: 9, c: 9 }, end: { r: 9, c: 0 } },
            ];
        } else if (gridSize === 9 && colors === 10 && fillBoard) {
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
        const cellSize = gridSize <= 5 ? 70 : gridSize <= 7 ? 58 : gridSize <= 10 ? 44 : 34;
        const gap = 4;
        const totalSize = gridSize * cellSize + (gridSize - 1) * gap;
        const startX = (width - totalSize) / 2 + cellSize / 2;
        const startY = (gridSize <= 7 ? 140 : gridSize <= 10 ? 115 : 108) + cellSize / 2;

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

        // Timer (if timeLimit is set)
        let timerEvent = null;
        if (timeLimit) {
            let timeLeft = timeLimit;
            const timerY = infoBase + infoGap * (fillBoard ? 3 : 2);
            const timerText = this.add.text(width / 2, timerY, `Time: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`, {
                fontSize: gridSize <= 7 ? '16px' : '14px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            timerEvent = this.time.addEvent({
                delay: 1000,
                repeat: timeLimit - 1,
                callback: () => {
                    timeLeft--;
                    timerText.setText(`Time: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`);
                    if (timeLeft <= 10) {
                        timerText.setColor('#ff4444');
                    }
                    if (timeLeft <= 0) {
                        this.handleTimeUp();
                    }
                },
            });
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
                    const dotRadius = gridSize <= 7 ? 18 : gridSize <= 10 ? 14 : 10;
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
                                if (timerEvent) timerEvent.remove(false);
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
        const { rows, cols, canRotate, timeLimit } = config;
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

        // Timer (if timeLimit is set)
        let jigsawTimerEvent = null;
        if (timeLimit) {
            let timeLeft = timeLimit;
            const timerText = this.add.text(width / 2, height - 65, `Time: ${timeLeft}s`, {
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            jigsawTimerEvent = this.time.addEvent({
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
                            if (jigsawTimerEvent) jigsawTimerEvent.remove(false);
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
        const { discs, timeLimit } = config;
        const minMoves = Math.pow(2, discs) - 1;

        // Instructions
        this.add.text(width / 2, 70, 'Move all discs to the right peg!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Timer (if timeLimit is set)
        let timerEvent = null;
        if (timeLimit) {
            let timeLeft = timeLimit;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const timerText = this.add.text(width / 2, 95, `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`, {
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5);

            timerEvent = this.time.addEvent({
                delay: 1000,
                repeat: timeLimit - 1,
                callback: () => {
                    timeLeft--;
                    const m = Math.floor(timeLeft / 60);
                    const s = timeLeft % 60;
                    timerText.setText(`Time: ${m}:${s.toString().padStart(2, '0')}`);
                    if (timeLeft <= 10) {
                        timerText.setColor('#ff4444');
                    }
                    if (timeLeft <= 0) {
                        this.handleTimeUp();
                    }
                },
            });
        }

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
        const discHeight = Math.min(30, Math.floor(pegHeight / discs) - 2);
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
                        if (timerEvent) timerEvent.remove(false);
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
