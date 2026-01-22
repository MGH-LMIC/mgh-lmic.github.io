import React, { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Research', href: '#research' },
        { name: 'People', href: '#people' },
        { name: 'Publications', href: '#publications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            transition: 'background 0.3s, backdrop-filter 0.3s',
            background: scrolled ? 'var(--color-surface-glass)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <Microscope color="var(--color-primary)" size={32} />
                    <span>LMIC</span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} style={{ fontWeight: 500, fontSize: '1rem' }}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
