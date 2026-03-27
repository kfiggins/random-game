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
        ];

        // Pick random colors for this puzzle
        const shuffled = Phaser.Utils.Array.Shuffle([...allColors]).slice(0, pairs);
        const leftOrder = Phaser.Utils.Array.Shuffle([...shuffled]);
        const rightOrder = Phaser.Utils.Array.Shuffle([...shuffled]);

        const circleRadius = 36;
        const spacing = 90;
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

        // 0 = path, 1 = wall
        // Hardcoded 7x7 maze with wide corridors and a clear solution path
        const maze = [
            [0, 0, 0, 1, 0, 0, 0],
            [1, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 0, 0],
        ];

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

        // Exit star at bottom-right (6,6)
        const exitX = offsetX + 6 * cellSize + cellSize / 2;
        const exitY = offsetY + 6 * cellSize + cellSize / 2;
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

    handleTimeUp() {
        const { width, height } = this.scale;

        if (this.colorMatchCleanup) this.colorMatchCleanup();

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
