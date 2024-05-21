import styles from './AuthStylingComponents.module.css';
import Link from 'next/link';

export function DashedButton() {
    return <button className={styles.submit}>submit</button>
}

export function ArrowLink({hrefLink, pageName}: {hrefLink:string; pageName:string;}) {
    return (
        <Link href={hrefLink}>
            <p>
                {'--->'} go to {pageName}
            </p>
        </Link>
    )
}