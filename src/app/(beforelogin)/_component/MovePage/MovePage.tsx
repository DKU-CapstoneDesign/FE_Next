import Link from 'next/link';

export function MovePage({href}: {href:string}) {
    return (
        <Link href={'/'+href}>
            <p>
                {'--->'} go to {href}
            </p>
        </Link>
    )
}