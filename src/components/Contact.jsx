import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheck,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meqbedgp';

const contactLinks = [
  {
    Icon: FaEnvelope,
    label: 'Email',
    value: 'anshitakoshta28@gmail.com',
    href: 'mailto:anshitakoshta28@gmail.com',
  },
  {
    Icon: FaPhoneAlt,
    label: 'Phone',
    value: '+91 95896 86360',
    href: 'tel:+919589686360',
  },
  {
    Icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Bengaluru, India',
    href: 'https://maps.google.com/?q=Bengaluru,India',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/anshitakoshta',
    href: 'https://www.linkedin.com/in/anshitakoshta/',
  },
  {
    Icon: FaGithub,
    label: 'GitHub',
    value: '@Riyaa-k',
    href: 'https://github.com/Riyaa-k',
  },
];

const FIELD_CLASS = `w-full px-4 pt-6 pb-2 bg-white/[0.04] text-gray-100 rounded-xl
  border border-white/10 focus:border-[#19a7ce] focus:ring-2 focus:ring-[#19a7ce]/25
  outline-none transition-all duration-300 peer placeholder-transparent`;

const LABEL_CLASS = `absolute left-4 top-4 text-gray-400 text-base transition-all duration-200
  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#19a7ce]
  peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs`;

const Contact = () => {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact-us" className="pt-24 pb-24 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 80% 100%, rgba(99,102,241,0.15), transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading eyebrow="Say hello" title="Contact Me" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Contact details */}
          <Reveal stagger direction="right" className="w-full md:w-1/3 grid gap-4 content-start">
            {contactLinks.map((link) => (
              <Reveal.Item key={link.label} direction="right">
                <motion.a
                  href={link.href}
                  target={/^(mailto|tel):/.test(link.href) ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/10
                    bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#19a7ce]/40
                    transition-colors duration-300 group"
                >
                  <span
                    className="w-11 h-11 shrink-0 grid place-items-center rounded-xl
                      bg-[#19a7ce]/10 text-[#19a7ce] text-lg
                      group-hover:bg-[#19a7ce] group-hover:text-black transition-colors"
                  >
                    <link.Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-white text-sm font-medium">{link.label}</span>
                    <span className="block text-gray-400 text-sm truncate group-hover:text-[#19a7ce] transition-colors">
                      {link.value}
                    </span>
                  </span>
                </motion.a>
              </Reveal.Item>
            ))}
          </Reveal>

          {/* Form */}
          <Reveal direction="left" className="w-full md:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="grid gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                    className={`${FIELD_CLASS} h-14`}
                  />
                  <label htmlFor="name" className={LABEL_CLASS}>
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    className={`${FIELD_CLASS} h-14`}
                  />
                  <label htmlFor="email" className={LABEL_CLASS}>
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    required
                    className={`${FIELD_CLASS} h-36 resize-none`}
                  />
                  <label htmlFor="message" className={LABEL_CLASS}>
                    Your Message
                  </label>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  whileHover={status === 'idle' ? { scale: 1.04 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.96 } : {}}
                  className="inline-flex items-center gap-2 bg-[#19a7ce] text-black px-8 py-3
                    rounded-full font-medium shadow-lg shadow-[#19a7ce]/25
                    hover:bg-yellow-400 hover:shadow-yellow-400/25
                    disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === 'sending' ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                        Sending…
                      </motion.span>
                    ) : status === 'sent' ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <FaCheck /> Sent
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <FaPaperPlane /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <AnimatePresence>
                  {status === 'sent' && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="status"
                      className="text-sm text-green-400"
                    >
                      Thanks — I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="alert"
                      className="text-sm text-red-400"
                    >
                      Something went wrong. Email me directly instead?
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
