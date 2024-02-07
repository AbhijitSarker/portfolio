import React, { useState, useEffect, useRef } from 'react';

const numRows = 20;
const numCols = 20;

const Direction = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
};

const initialSnake = [
    { row: 10, col: 10 },
    { row: 10, col: 9 },
];

const initialApple = { row: 5, col: 5 };

const SnakeGame = () => {
    const [snake, setSnake] = useState(initialSnake);
    const [apple, setApple] = useState(initialApple);
    const [direction, setDirection] = useState(Direction.RIGHT);
    const [gameOver, setGameOver] = useState(false);

    const gameRef = useRef();

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    setDirection(Direction.UP);
                    break;
                case 'ArrowDown':
                    setDirection(Direction.DOWN);
                    break;
                case 'ArrowLeft':
                    setDirection(Direction.LEFT);
                    break;
                case 'ArrowRight':
                    setDirection(Direction.RIGHT);
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        if (!gameOver) {
            const handle = setInterval(() => {
                moveSnake();
            }, 100);

            return () => clearInterval(handle);
        }
    }, [snake, gameOver]);

    const moveSnake = () => {
        const head = { ...snake[0] };

        switch (direction) {
            case Direction.UP:
                head.row -= 1;
                break;
            case Direction.DOWN:
                head.row += 1;
                break;
            case Direction.LEFT:
                head.col -= 1;
                break;
            case Direction.RIGHT:
                head.col += 1;
                break;
            default:
                break;
        }

        const newSnake = [head, ...snake.slice(0, -1)];

        if (isCollision(newSnake)) {
            setGameOver(true);
            return;
        }

        if (head.row === apple.row && head.col === apple.col) {
            setApple(generateRandomPosition());
            newSnake.push(snake[snake.length - 1]);
        }

        setSnake(newSnake);
    };

    const isCollision = (snake) => {
        const head = snake[0];
        return (
            head.row < 0 ||
            head.col < 0 ||
            head.row >= numRows ||
            head.col >= numCols ||
            snake.slice(1).some((segment) => segment.row === head.row && segment.col === head.col)
        );
    };

    const generateRandomPosition = () => {
        return {
            row: Math.floor(Math.random() * numRows),
            col: Math.floor(Math.random() * numCols),
        };
    };

    const renderGrid = () => {
        const grid = [];

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const isSnake = snake.some((segment) => segment.row === i && segment.col === j);
                const isApple = apple.row === i && apple.col === j;

                grid.push(
                    <div
                        key={`${i}-${j}`}
                        className={`w-4 h-4 border ${isSnake ? 'bg-green-500' : isApple ? 'bg-red-500' : 'bg-gray-200'
                            }`}
                    />
                );
            }
        }

        return grid;
    };

    return (
        <div className="flex justify-center">
            <div
                ref={gameRef}
                className="grid grid-cols-20 gap-1 border border-gray-500"
                style={{ width: '400px', backgroundColor: '#f0f0f0' }}
            >
                {renderGrid()}
            </div>
            {gameOver && <div className="text-red-500 font-bold">Game Over!</div>}
        </div>
    );
};

export default SnakeGame;
