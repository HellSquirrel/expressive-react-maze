import { forwardRef } from "react";
import styles from './Dog.module.css'

export const Dog =forwardRef<HTMLDivElement>((_, ref) => <div className={styles.dog} ref={ref}>🐶</div>);