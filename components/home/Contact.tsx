import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 pt-8">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let&apos;s connect! Feel free to reach out{' '}
            <a
              className="underline dark:text-white text-black dark:hover:text-white/90 hover:text-gray-700"
              href="https://www.linkedin.com/in/dharmendrasarswat"
            >
              via LinkedIn
            </a>{' '}
            or{' '}
            <a
              className="underline dark:text-white text-black dark:hover:text-white/90 hover:text-gray-700"
              href="mailto:dharmasarswat001@gmail.com"
            >
              Mail
            </a>{' '}
            and I&apos;ll get back to you as soon as I can.
          </p>
        </div>
      </div>
    </section>
  );
}
