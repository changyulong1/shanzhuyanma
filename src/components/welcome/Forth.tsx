import s from './Welcome.module.scss'
export const Forth = () => {
    return (
        <div class={s.wrapper}>
            <div class={s.code}>
                <svg>
                    <use xlinkHref='#clock'></use>
                </svg>
                <h2>会挣钱<br />还要会省钱</h2>
            </div>
        </div>
    )
}

Forth.displayName = 'Forth'