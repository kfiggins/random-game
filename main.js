// ============================================================
// Level Registry
// Each level maps to a puzzle type and config.
// To add a new level, register it here and implement the
// puzzle type logic in GameScene.
// ============================================================
const LevelRegistry = {
    // Example:
    // 1: { type: 'click-target', config: { targets: 3, timeLimit: 10 } },
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

        if (levelData) {
            // Future: dispatch to puzzle type handler based on levelData.type
            this.add.text(width / 2, height / 2, `Puzzle: ${levelData.type}`, {
                fontSize: '24px',
                fontFamily: 'Arial, sans-serif',
                color: '#cccccc',
            }).setOrigin(0.5);
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
        }

        // Complete Level button (placeholder for testing flow)
        this.createButton(width / 2, height - 100, 'Complete Level', () => {
            this.scene.start('LevelCompleteScene', { level: this.level });
        });

        // Back to Menu button
        this.createButton(width / 2, height - 40, 'Back to Menu', () => {
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
