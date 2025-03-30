import React from 'react';
import { Badge } from '@/components/ui/Badge';

interface ContactLinkProps {
  href: string;
  label: string;
}

const contactLinks: ContactLinkProps[] = [
  {
    href: 'https://www.linkedin.com/in/dharmendrasarswat',
    label: 'via LinkedIn',
  },
  {
    href: 'mailto:dharmasarswat001@gmail.com',
    label: 'Mail',
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 pt-8">
        <div className="space-y-3">
          <Badge>Contact</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let&apos;s connect! Feel free to reach out{' '}
            {contactLinks.map(({ href, label }, index) => (
              <React.Fragment key={href}>
                <a
                  className="underline dark:text-white text-black dark:hover:text-white/90 hover:text-gray-700"
                  href={href}
                >
                  {label}
                </a>
                {index === 0 && ' or '}
              </React.Fragment>
            ))}{' '}
            and I&apos;ll get back to you as soon as I can.
          </p>
        </div>
      </div>
    </section>
  );
}
