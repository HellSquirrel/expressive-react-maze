import { fieldSize, maxWallLength, minWallLength } from './contstatns'
import { parrotsToPixels } from './units'
import { useCallback, useState } from 'react'
import styles from './Maze.module.css'
import { Dog } from './Dog'

type Wall = {
    left: number
    width: number
}

const randomInt = (minVal: number, maxVal: number) =>
    Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal

const generateNewWall = (): Wall => {
    const width = randomInt(minWallLength, maxWallLength)
    const alignLeft = Math.random() > 0.5

    return {
        left: alignLeft ? 0 : fieldSize - width,
        width,
    }
}

export const Maze = () => {
    const size = parrotsToPixels(fieldSize)
    const [walls, setWalls] = useState<Wall[]>(
        Array.from({ length: fieldSize }, () => ({
            left: 0,
            width: 0,
        }))
    )

    const toggleWall = useCallback((mazeRow: number) => {
        setWalls((walls) =>
            walls.map((wall, i) => {
                if (i === mazeRow) {
                    if (wall.width === 0) {
                        return generateNewWall()
                    } else {
                        return {
                            left: 0,
                            width: 0,
                        }
                    }
                }
                return wall
            })
        )
    }, [])

    return (
        <>
            <Dog /> {/* 🐶 */}
            <div
                style={{
                    width: size,
                    height: size,
                }}
                className={styles.maze}
            >
                {Array.from({ length: fieldSize }, (_, i) => (
                    <button
                        key={i}
                        style={{ height: parrotsToPixels(1) }}
                        className={styles.button}
                        onClick={() => toggleWall(i)}
                    >
                        <span
                            key={`${i}`}
                            className={styles.wall}
                            style={{
                                width: parrotsToPixels(walls[i].width),
                                left: parrotsToPixels(walls[i].left),
                            }}
                        />
                    </button>
                ))}
            </div>
        </>
    )
}
