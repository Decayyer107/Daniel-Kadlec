import { useLanguage } from '@/utils/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';
import {useEffect} from 'react';
import Link from "next/link";

interface NavLinksProps{
    className?: string;
    onLinkClick?: () => void;
}

export default function NavLinks({className, onLinkClick}: NavLinksProps) {
    const { dict } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();

    const goHome = (hash?: string, e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === '/') {
            if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push(hash ? `/#${hash}` : '/');
        }
        onLinkClick?.();
    };

    const goPortfolio = (e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === '/portfolio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/portfolio');
        }
        onLinkClick?.();
    };

    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const id = window.location.hash.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pathname]);

    return (
        <ul className={`gap-[clamp(_15px,_2vw,_48px)] font-secondary font-bold text-md hidden md:flex text ${className}`}>
            <li><Link className={'text'} href="/" onClick={(e) => goHome(undefined, e)}>{dict.nav.Home}</Link></li>
            <li><Link className={'text'} href="/#about" onClick={(e) => goHome('about', e)}>{dict.nav.About}</Link></li>
            <li><Link className={'text'} href="/portfolio" onClick={(e) => goHome('portfolio', e)}>{dict.nav.Portfolio}</Link></li>
            <li><Link className={'text'} href="/#contact" onClick={(e) => goHome('contact', e)}>{dict.nav.Contact}</Link></li>
        </ul>
    );
}
