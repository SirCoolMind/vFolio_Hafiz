import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const LAST_UPDATED = "31 October 2026";

const linkClass = "underline underline-offset-4 hover:text-white transition-colors";

const EmailLink: React.FC = () => (
  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className={linkClass}>
    {PORTFOLIO_DATA.personal.email}
  </a>
);

const LegalPage: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-black text-white min-h-screen">
    <CustomCursor />
    <Navbar activeSection="legal" />
    <main className="pt-28 md:pt-32 px-2 sm:px-4 max-w-[1500px] mx-auto">
      <article className="section-panel text-white px-6 md:px-12 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif italic">{title}</h1>
          <p className="mt-3 text-xs font-mono text-white/60">Last updated {LAST_UPDATED}</p>
          <div className="mt-10 space-y-8">{children}</div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

const LegalSection: React.FC<{ heading: string; children: React.ReactNode }> = ({ heading, children }) => (
  <section>
    <h2 className="text-lg md:text-xl font-semibold">{heading}</h2>
    <div className="mt-3 space-y-3 text-sm md:text-base leading-relaxed text-white/75">{children}</div>
  </section>
);

const LegalList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-5 space-y-2">{children}</ul>
);

export const PrivacyView: React.FC = () => (
  <LegalPage title="Privacy Policy">
    <LegalSection heading="About this site">
      <p>
        This is the personal portfolio of Muhammad Hafiz Ruslan, based in Malaysia. This page explains what the site
        collects when you visit and what I do with it.
      </p>
    </LegalSection>

    <LegalSection heading="What I collect">
      <LegalList>
        <li>
          <strong>Contact form:</strong> your name, email address, subject, message and your answer to the anti-spam
          question.
        </li>
        <li>
          <strong>Visit logs:</strong> your IP address, browser, device, operating system and language, the page you
          opened, the page that sent you here, and the request headers your browser sent.
        </li>
        <li>
          <strong>Cookies and browser storage:</strong> session and security cookies that keep the contact form working,
          and your light or dark theme choice.
        </li>
      </LegalList>
    </LegalSection>

    <LegalSection heading="Services that handle your information">
      <LegalList>
        <li>
          <strong>Microsoft Clarity</strong> records how visitors use the site, including clicks, scrolling and session
          recordings, and sets its own cookies. See the{" "}
          <a href="https://privacy.microsoft.com/privacystatement" className={linkClass}>
            Microsoft Privacy Statement
          </a>
          .
        </li>
        <li>
          <strong>Google Fonts</strong> serves the site's fonts, so Google receives your IP address when they load.
        </li>
        <li>
          <strong>Gmail</strong> delivers contact form messages to my inbox. See the{" "}
          <a href="https://policies.google.com/privacy" className={linkClass}>
            Google Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>DigitalOcean</strong> hosts the site and its database.
        </li>
      </LegalList>
      <p>These providers may process information outside Malaysia.</p>
    </LegalSection>

    <LegalSection heading="How I use it">
      <p>
        I use this information to reply to your message, understand how the site is used, improve it, and block spam and
        abuse. I don't sell your information or use it for marketing.
      </p>
    </LegalSection>

    <LegalSection heading="Google access">
      <p>
        You never sign in with Google on this site. Its only Google access is permission to send email from my own Gmail
        account, so it can't read that inbox or see any visitor's Google data.
      </p>
    </LegalSection>

    <LegalSection heading="How long I keep it">
      <p>
        There's no fixed deletion schedule, so contact messages and visit logs stay until I remove them. You can ask me
        to delete yours at any time.
      </p>
    </LegalSection>

    <LegalSection heading="Your choices">
      <p>
        Email <EmailLink /> to ask what I hold about you, or to have it corrected or deleted. You can also block cookies
        in your browser, although the contact form may stop working.
      </p>
    </LegalSection>

    <LegalSection heading="Changes">
      <p>If this policy changes, I'll update this page and the date at the top.</p>
    </LegalSection>
  </LegalPage>
);

export const TermsView: React.FC = () => (
  <LegalPage title="Terms of Service">
    <LegalSection heading="Using this site">
      <p>
        These terms apply to vfolio.hafizr.com, the personal portfolio of Muhammad Hafiz Ruslan. By using the site, you
        agree to them.
      </p>
    </LegalSection>

    <LegalSection heading="My content">
      <p>
        The text, images, design and resume on this site are mine unless stated otherwise. You're welcome to view them
        and share links, but please ask before reusing them. Other companies' names and logos belong to their owners.
      </p>
    </LegalSection>

    <LegalSection heading="Contact form">
      <p>
        Please use the contact form for genuine messages only. Don't send spam or anything unlawful or abusive. I may
        ignore or delete messages that break this rule.
      </p>
    </LegalSection>

    <LegalSection heading="No guarantees">
      <p>
        This site is provided as is. I try to keep it accurate and available, but I can't promise it always will be.
        Nothing here is an offer of work, a contract or professional advice.
      </p>
    </LegalSection>

    <LegalSection heading="External links">
      <p>
        Links to other sites, such as GitHub, LinkedIn and my side projects, are provided for convenience. Those sites
        have their own terms, and I'm not responsible for their content.
      </p>
    </LegalSection>

    <LegalSection heading="Liability">
      <p>To the extent the law allows, I'm not liable for any loss that comes from using this site.</p>
    </LegalSection>

    <LegalSection heading="Governing law">
      <p>These terms are governed by the laws of Malaysia.</p>
    </LegalSection>

    <LegalSection heading="Changes and contact">
      <p>
        If these terms change, I'll update this page and the date at the top. Questions are welcome at <EmailLink />.
      </p>
    </LegalSection>
  </LegalPage>
);
