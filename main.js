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
        const { rows, cols } = config;
        const totalCards = rows * cols;
        const numPairs = totalCards / 2;

        const cardColors = [
            { name: 'Red', hex: 0xff4444 },
            { name: 'Blue', hex: 0x4488ff },
            { name: 'Green', hex: 0x44dd44 },
            { name: 'Purple', hex: 0xaa44ff },
            { name: 'Orange', hex: 0xff8844 },
            { name: 'Cyan', hex: 0x44dddd },
        ];

        // Create pairs and shuffle
        const cardData = [];
        for (let i = 0; i < numPairs; i++) {
            cardData.push(cardColors[i], cardColors[i]);
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

        // Card dimensions and layout
        const cardW = 100;
        const cardH = 120;
        const padding = 16;
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

            // Face-down card back
            const back = this.add.rectangle(x, y, cardW, cardH, 0x3a3a6a)
                .setInteractive({ useHandCursor: true });
            const questionMark = this.add.text(x, y, '?', {
                fontSize: '36px',
                fontFamily: 'Arial, sans-serif',
                color: '#888888',
            }).setOrigin(0.5);

            // Face-up card (hidden initially)
            const face = this.add.rectangle(x, y, cardW, cardH, color.hex)
                .setVisible(false);
            const colorLabel = this.add.text(x, y, color.name, {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
            }).setOrigin(0.5).setVisible(false);

            const card = { back, questionMark, face, colorLabel, colorName: color.name, flipped: false, matched: false, x, y };
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
                            this.time.delayedCall(500, () => {
                                this.scene.start('LevelCompleteScene', { level: this.level });
                            });
                        }
                    } else {
                        // No match - flip back after 1 second
                        const fc = firstCard;
                        const sc = secondCard;
                        this.time.delayedCall(1000, () => {
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
    }

    createSimonSaysPuzzle(config) {
        const { width, height } = this.scale;
        const { sequenceLength, playbackSpeed } = config;

        const colorDefs = [
            { name: 'Red', hex: 0xff4444, dimHex: 0x882222 },
            { name: 'Blue', hex: 0x4488ff, dimHex: 0x224488 },
            { name: 'Green', hex: 0x44dd44, dimHex: 0x227722 },
            { name: 'Yellow', hex: 0xffdd44, dimHex: 0x887722 },
        ];

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

        // Create 2x2 grid of buttons
        const btnSize = 120;
        const gap = 20;
        const gridStartX = width / 2 - btnSize / 2 - gap / 2;
        const gridStartY = height / 2 - btnSize / 2 - gap / 2;

        const buttons = colorDefs.map((colorDef, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
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
            sequence.push(Phaser.Math.Between(0, 3));
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
                    instructionText.setText('Wrong! Watch again...');
                    progressText.setText('');
                    this.time.delayedCall(1000, () => {
                        playSequence();
                    });
                }
            });
        });

        // Start the first playback
        playSequence();
    }

    createSortingPuzzle(config) {
        const { width, height } = this.scale;
        const { count, maxValue } = config;

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
        this.add.text(width / 2, 70, 'Click two numbers to swap. Sort ascending!', {
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        // Swap counter
        let swapCount = 0;
        const swapText = this.add.text(width / 2, height - 80, 'Swaps: 0', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Card layout
        const cardW = 80;
        const cardH = 100;
        const padding = 20;
        const totalW = count * cardW + (count - 1) * padding;
        const startX = (width - totalW) / 2 + cardW / 2;
        const cardY = height / 2;

        let selectedIndex = null;
        const cards = [];

        const createCard = (index) => {
            const x = startX + index * (cardW + padding);

            const bg = this.add.rectangle(x, cardY, cardW, cardH, 0x3a3a6a)
                .setInteractive({ useHandCursor: true });

            const label = this.add.text(x, cardY, `${numbers[index]}`, {
                fontSize: '32px',
                fontFamily: 'Arial, sans-serif',
                color: '#ffffff',
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
                    // Swap
                    const otherIndex = selectedIndex;
                    cards[otherIndex].outline.setVisible(false);
                    cards[otherIndex].bg.setFillStyle(0x3a3a6a);

                    const tmp = numbers[otherIndex];
                    numbers[otherIndex] = numbers[index];
                    numbers[index] = tmp;

                    cards[otherIndex].label.setText(`${numbers[otherIndex]}`);
                    label.setText(`${numbers[index]}`);

                    selectedIndex = null;
                    swapCount++;
                    swapText.setText(`Swaps: ${swapCount}`);

                    // Check if sorted
                    let isSorted = true;
                    for (let i = 0; i < numbers.length - 1; i++) {
                        if (numbers[i] > numbers[i + 1]) {
                            isSorted = false;
                            break;
                        }
                    }

                    if (isSorted) {
                        // Flash all cards green
                        cards.forEach(c => c.bg.setFillStyle(0x228822));
                        this.time.delayedCall(500, () => {
                            this.scene.start('LevelCompleteScene', { level: this.level });
                        });
                    }
                }
            });

            return { bg, label, outline };
        };

        for (let i = 0; i < count; i++) {
            cards.push(createCard(i));
        }
    }

    createMazePuzzle(config) {
        const { width, height } = this.scale;
        const { width: mazeW, height: mazeH, cellSize } = config;

        // Generate maze using recursive backtracker algorithm
        // 0 = path, 1 = wall
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

        // Instructions
        this.add.text(width / 2, 30, 'Use arrow keys to reach the star!', {
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

        // Calculate grid offset to center the maze
        const gridW = mazeW * cellSize;
        const gridH = mazeH * cellSize;
        const offsetX = (width - gridW) / 2;
        const offsetY = (height - gridH) / 2 + 10;

        // Draw the maze
        for (let row = 0; row < mazeH; row++) {
            for (let col = 0; col < mazeW; col++) {
                const x = offsetX + col * cellSize + cellSize / 2;
                const y = offsetY + row * cellSize + cellSize / 2;
                const isWall = maze[row][col] === 1;
                this.add.rectangle(x, y, cellSize - 2, cellSize - 2, isWall ? 0x2a2a4a : 0x4a4a6a);
            }
        }

        // Exit star at bottom-right
        const exitX = offsetX + (mazeW - 1) * cellSize + cellSize / 2;
        const exitY = offsetY + (mazeH - 1) * cellSize + cellSize / 2;
        const star = this.add.star(exitX, exitY, 5, 10, 22, 0xffdd44);

        // Player circle at top-left (0,0)
        let playerCol = 0;
        let playerRow = 0;
        const playerX = offsetX + playerCol * cellSize + cellSize / 2;
        const playerY = offsetY + playerRow * cellSize + cellSize / 2;
        const player = this.add.circle(playerX, playerY, cellSize / 3, 0x44dd44);

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

            playerCol = newCol;
            playerRow = newRow;
            player.setPosition(
                offsetX + playerCol * cellSize + cellSize / 2,
                offsetY + playerRow * cellSize + cellSize / 2
            );

            moveCount++;
            moveText.setText(`Moves: ${moveCount}`);

            // Check win
            if (playerCol === mazeW - 1 && playerRow === mazeH - 1) {
                inputLocked = true;
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
        const { patternLength, numChoices } = config;

        const shapeDefs = [
            { name: 'Circle', color: 0xff4444, colorName: 'Red' },
            { name: 'Square', color: 0x4488ff, colorName: 'Blue' },
            { name: 'Triangle', color: 0x44dd44, colorName: 'Green' },
            { name: 'Diamond', color: 0xffdd44, colorName: 'Yellow' },
        ];

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

    createReactionTimePuzzle(config) {
        const { width, height } = this.scale;
        const { targets, targetSize, stayTime, timeLimit } = config;

        const targetColors = [0xff4444, 0x44dd44, 0x4488ff, 0xffdd44, 0xff44ff];

        // Instructions
        this.add.text(width / 2, 70, 'Click the targets before they disappear!', {
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
                    this.handleReactionTimeEnd(score, targets);
                }
            },
        });

        const showTarget = () => {
            if (gameOver || targetsShown >= targets) return;

            const colorIndex = targetsShown % targetColors.length;
            const color = targetColors[colorIndex];
            targetsShown++;
            remainText.setText(`Remaining: ${targets - targetsShown}`);

            // Random position within play area (avoid edges and HUD)
            const margin = targetSize + 20;
            const tx = Phaser.Math.Between(margin, width - margin);
            const ty = Phaser.Math.Between(100, height - 120);

            const circle = this.add.circle(tx, ty, targetSize, color)
                .setInteractive({ useHandCursor: true })
                .setAlpha(0);

            // Fade in
            this.tweens.add({
                targets: circle,
                alpha: 1,
                duration: 150,
                ease: 'Power2',
            });

            let clicked = false;

            // Click handler - pop animation and score
            circle.on('pointerdown', () => {
                if (clicked || gameOver) return;
                clicked = true;
                circle.disableInteractive();
                score++;
                scoreText.setText(`Score: ${score}/${targets}`);

                // Pop animation
                this.tweens.add({
                    targets: circle,
                    scaleX: 1.5,
                    scaleY: 1.5,
                    alpha: 0,
                    duration: 200,
                    ease: 'Power2',
                    onComplete: () => {
                        circle.destroy();
                        // Brief delay then next target
                        if (!gameOver) {
                            this.time.delayedCall(400, () => {
                                if (targetsShown >= targets) {
                                    gameOver = true;
                                    timerEvent.remove(false);
                                    this.handleReactionTimeEnd(score, targets);
                                } else {
                                    showTarget();
                                }
                            });
                        }
                    },
                });
            });

            // Disappear after stayTime if not clicked
            this.time.delayedCall(stayTime, () => {
                if (clicked || gameOver) return;
                clicked = true;
                circle.disableInteractive();

                // Fade out
                this.tweens.add({
                    targets: circle,
                    alpha: 0,
                    duration: 200,
                    ease: 'Power2',
                    onComplete: () => {
                        circle.destroy();
                        if (!gameOver) {
                            this.time.delayedCall(400, () => {
                                if (targetsShown >= targets) {
                                    gameOver = true;
                                    timerEvent.remove(false);
                                    this.handleReactionTimeEnd(score, targets);
                                } else {
                                    showTarget();
                                }
                            });
                        }
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
            const a = Phaser.Math.Between(1, maxNum - 1);
            const b_val = Phaser.Math.Between(1, maxNum - a);
            const op = Phaser.Utils.Array.GetRandom(operations);

            let answer;
            let symbol;
            if (op === 'add') {
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

    handleReactionTimeEnd(score, totalTargets) {
        const { width, height } = this.scale;
        const requiredScore = 3;

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

    handleTimeUp() {
        const { width, height } = this.scale;

        if (this.colorMatchCleanup) this.colorMatchCleanup();
        if (this.reactionTimeCleanup) this.reactionTimeCleanup();
        if (this.mathCleanup) this.mathCleanup();

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
        const { showHint } = config;

        const words = ['game', 'play', 'code', 'fish', 'star', 'moon', 'tree', 'bird', 'cake', 'lion'];
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
        const tileSize = 90;
        const gap = 4;
        const totalSize = size * tileSize + (size - 1) * gap;
        const startX = (width - totalSize) / 2 + tileSize / 2;
        const startY = (height - totalSize) / 2 + tileSize / 2 - 10;

        // Initialize solved board: 1..8, 0 = empty
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
        const moveText = this.add.text(width / 2, 70, 'Moves: 0', {
            fontSize: '22px',
            fontFamily: 'Arial, sans-serif',
            color: '#aaaaaa',
        }).setOrigin(0.5);

        const tiles = [];

        const renderBoard = () => {
            // Clear old tiles
            tiles.forEach(t => { t.bg.destroy(); t.label.destroy(); });
            tiles.length = 0;

            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    const val = board[r][c];
                    if (val === 0) continue;

                    const x = startX + c * (tileSize + gap);
                    const y = startY + r * (tileSize + gap);

                    const bg = this.add.rectangle(x, y, tileSize, tileSize, 0x4a6a9a)
                        .setInteractive({ useHandCursor: true });

                    const label = this.add.text(x, y, `${val}`, {
                        fontSize: '36px',
                        fontFamily: 'Arial, sans-serif',
                        fontStyle: 'bold',
                        color: '#ffffff',
                    }).setOrigin(0.5);

                    bg.on('pointerdown', () => {
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
                            moveText.setText(`Moves: ${moveCount}`);
                            renderBoard();

                            // Check win
                            if (this.checkSlidingPuzzleSolved(board, size)) {
                                this.time.delayedCall(300, () => {
                                    this.scene.start('LevelCompleteScene', { level: this.level });
                                });
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
