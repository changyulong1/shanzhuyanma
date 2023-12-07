import s from './Welcome.module.scss'
export const Third = () => {
    return (
        <div class={s.wrapper}>
            <div class={s.code}>
                <svg>
                    <use xlinkHref='#cloud'></use>
                </svg>
                <h2>云备份<br />再也不怕数据丢失</h2>
            </div>
        </div>
    )
}

Third.displayName = 'Third'