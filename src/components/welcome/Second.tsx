import s from './Welcome.module.scss'
export const Second = () => {
    return (
        <div class={s.wrapper}>
            <div class={s.code}>
                <svg>
                    <use xlinkHref='#chart'></use>
                </svg>
                <h2>数据可视化<br />收支一目了然</h2>
            </div>
        </div>
    )
}
Second.displayName = 'Second'