import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--nav-height)'
        }}>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
                opacity: 0.5,
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Laboratory of <br />
                        <span className="text-gradient">Medical Imaging</span> and <br />
                        <span className="text-gradient">Computation</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px'
                    }}>
                        Advancing medical diagnostics through machine learning and computational imaging.
                    </p>

                    {/* Director Info - Simple */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>Synho Do, M.S., Ph.D.</h3>
                        <p style={{ color: 'var(--color-primary)', fontWeight: 500, marginBottom: '0.75rem' }}>
                            Director
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                            Massachusetts General Hospital, Department of Radiology<br />
                            Harvard Medical School, Assistant Professor<br />
                            Kempner Institute, Affiliate Faculty
                        </p>
                    </div>

                    {/* Contact Links */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem' }}>
                        <a href="mailto:sdo@mgh.harvard.edu" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
                            <Mail size={16} /> sdo@mgh.harvard.edu
                        </a>
                        <a href="https://researchers.mgh.harvard.edu/profile/1509094/Synho-Do" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
                            <ExternalLink size={16} /> Harvard Profile
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
