import { ReactNode } from 'react'
import styles from './Rectangle.module.css'

type Props = {
  children: ReactNode
}

export const Rectangle = ({ children }: Props) => (
  <div className={styles.rect}>{children}</div>
)
