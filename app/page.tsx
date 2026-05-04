export default function Home() {
  const faqs = [
    {
      q: "How does timezone detection work?",
      a: "StandupSync reads each team member's calendar timezone and finds the best overlap window automatically — no manual configuration needed."
    },
    {
      q: "Do team members need to record at the same time?",
      a: "No. Each person records their update within their own optimal window. StandupSync notifies everyone when all updates are ready to view."
    },
    {
      q: "What calendar integrations are supported?",
      a: "Google Calendar and Outlook are supported. More integrations are on the roadmap based on user demand."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart scheduling for async standups{" "}
          <span className="text-[#58a6ff]">across timezones</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          StandupSync analyzes your distributed team&apos;s timezones, finds optimal async standup windows, and sends smart notifications — so no one is stuck in a 2am meeting again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-2xl w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🌍", title: "Timezone Analysis", desc: "Auto-detects every member's local hours" },
          { icon: "📅", title: "Calendar Sync", desc: "Reads availability from Google & Outlook" },
          { icon: "🔔", title: "Smart Alerts", desc: "Notifies at the right time for each person" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · unlimited team members</div>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited team members",
              "Google & Outlook calendar sync",
              "Timezone overlap detection",
              "Smart recording notifications",
              "Async video standup links",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-xs text-[#484f58] text-center">
        &copy; {new Date().getFullYear()} StandupSync. All rights reserved.
      </footer>
    </main>
  );
}
