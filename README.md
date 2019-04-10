A round-based, fighting-memory game about recognizing and memorizing patterns [WIP].
Made with React, using Redux and Saga.

Player can choose risky or safe actions to negate their enemy's actions.
The player can defeat enemies by filling up their posture damage bar or emptying their health bar.
When posture damage bar is filled, the character's posture becomes broken, open for a deathblow.
Each enemy has varying posture regeneration, lowering their health modifies this rate.
When the health bar runs empty, the next successful attack or counter will instantly fill their posture damage bar.

ACTIONS:
The player can deflect in three directions, block, dodge and jump.
The enemy can use normal (three directions), impaling and sweep attacks.
Blocking normal attacks fill the players posture damage meter, but is effective for normal attacks from all directions.
Jumping counters sweep attacks, dealing high posture damage to the enemy.
Dodging counters impaling attacks, dealing high posture damage to the enemy.
Deflecting attacks deal moderate posture damage to the enemy and let the player to instanly counterattack, damaging the enemy's health and effectively slowing their posture regeneration.

TBA:
After deathblows, new action groups can enter the cycle.
Each map can contain a variety of common enemies and maximum 1 boss.
Different enemies require different amount of deathblows.
Deathblows regenerate X% health.
Enemy moves consist of action groups in which the order of attacks is fixed, but the order of the groups is random.
Sometimes items drop after bosses that modify ability effectiveness.
Between sequences the player has 15 seconds to decide their next move, during sequences it's only 5 seconds.
Flurry: the player has to choose more than 1 action at once, countering all of the enemy's following attacks.

-------------------

The gameplay is heavily inspired by Sekiro: Shadows Die Twice.

-------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
