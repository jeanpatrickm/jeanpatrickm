~~~aura width=860 height=980
(function() {
  var bannerLanguages = ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js'];
  var stackColors = ['#89b4fa', '#f9e2af', '#a6e3a1', '#f5c2e7', '#fab387', '#cba6f7'];
  var stats = [
    { label: 'Repos', value: String((github && github.stats && github.stats.totalRepos) || 0) },
    { label: 'Stars', value: String((github && github.stats && github.stats.totalStars) || 0) },
    { label: 'Forks', value: String((github && github.stats && github.stats.totalForks) || 0) },
    { label: 'Commits', value: String((github && github.stats && github.stats.totalCommits) || 0) },
  ];
  var languages = (github && github.languages && github.languages.length > 0)
    ? github.languages.slice(0, 6)
    : [
        { name: 'TypeScript', percentage: 38 },
        { name: 'JavaScript', percentage: 28 },
        { name: 'Python', percentage: 15 },
        { name: 'CSS', percentage: 10 },
        { name: 'HTML', percentage: 6 },
        { name: 'Other', percentage: 3 },
      ];
  function contactButton(icon, text, href, width) {
    return (
      <a href={href} style={{ display: 'flex', width: width, height: 40 }}>
        <SocialMediaButton
          icon={icon}
          text={text}
          backgroundColor="#181825"
          textColor="#cdd6f4"
          borderColor="#cba6f7"
          width={width}
          height={40}
          iconSize="18"
          gradientStops={[
            { offset: '0%', color: '#45475a' },
            { offset: '30%', color: '#89b4fa' },
            { offset: '55%', color: '#b4befe' },
            { offset: '78%', color: '#cba6f7' },
            { offset: '100%', color: '#45475a' },
          ]}
        />
      </a>
    );
  }

  return (
    <div style={{
      width: '100%', height: '100%', background: '#11111b',
      display: 'flex', flexDirection: 'column', fontFamily: 'Inter',
      padding: '24px 38px', boxSizing: 'border-box',
      position: 'relative', overflow: 'hidden', borderRadius: 18,
      border: '1px solid rgba(203,166,247,0.22)',
    }}>
      <style>{`
        @keyframes aura-drift-left {
          0%, 100% { transform: translateX(0px); opacity: 0.62; }
          50% { transform: translateX(150px); opacity: 0.92; }
        }
        @keyframes aura-drift-right {
          0%, 100% { transform: translateX(0px); opacity: 0.46; }
          50% { transform: translateX(-180px); opacity: 0.78; }
        }
        @keyframes aura-drift-center {
          0%, 100% { transform: translateX(0px); opacity: 0.30; }
          50% { transform: translateX(110px); opacity: 0.62; }
        }
        @keyframes aura-pulse {
          0%, 100% { transform: scale(1); opacity: 0.34; }
          50% { transform: scale(1.18); opacity: 0.58; }
        }
        #aura-glow-1 { animation: aura-drift-left 9s ease-in-out infinite; }
        #aura-glow-2 { animation: aura-drift-right 12s ease-in-out infinite; }
        #aura-glow-3 { animation: aura-drift-center 8s ease-in-out infinite; }
        #aura-glow-4 { animation: aura-drift-left 13s ease-in-out infinite reverse; }
        #aura-glow-5 { animation: aura-pulse 7s ease-in-out infinite; }
      `}</style>

      <svg width="860" height="980" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <pattern id="aura-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="rgba(180,190,254,0.045)" strokeWidth="1" />
          </pattern>
          <radialGradient id="aura-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(203,166,247,0.38)" />
            <stop offset="55%" stopColor="rgba(203,166,247,0.13)" />
            <stop offset="100%" stopColor="rgba(203,166,247,0)" />
          </radialGradient>
          <radialGradient id="aura-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(137,180,250,0.2)" />
            <stop offset="100%" stopColor="rgba(137,180,250,0)" />
          </radialGradient>
        </defs>
        <rect width="860" height="980" fill="url(#aura-grid)" />
        <ellipse id="aura-glow-1" cx="160" cy="280" rx="330" ry="240" fill="url(#aura-purple)" />
        <ellipse id="aura-glow-2" cx="730" cy="130" rx="280" ry="220" fill="url(#aura-blue)" />
        <ellipse id="aura-glow-3" cx="430" cy="370" rx="260" ry="180" fill="url(#aura-blue)" opacity="0.36" />
        <ellipse id="aura-glow-4" cx="560" cy="760" rx="320" ry="220" fill="url(#aura-purple)" opacity="0.22" />
        <ellipse id="aura-glow-5" cx="220" cy="790" rx="210" ry="160" fill="url(#aura-purple)" opacity="0.28" />
        <path d="M25 55V27H53" fill="none" stroke="rgba(180,190,254,0.58)" strokeWidth="2" />
        <path d="M807 925H835V897" fill="none" stroke="rgba(180,190,254,0.58)" strokeWidth="2" />
        <circle cx="86" cy="83" r="2" fill="rgba(180,190,254,0.55)" />
        <circle cx="766" cy="177" r="2" fill="rgba(180,190,254,0.45)" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 205, position: 'relative' }}>
        <span style={{ display: 'flex', color: '#cdd6f4', fontSize: 38, fontWeight: 800, letterSpacing: 2, lineHeight: 1 }}>Jean Patrick</span>
        <span style={{ display: 'flex', color: '#cba6f7', fontSize: 12, fontWeight: 500, letterSpacing: 0.5, marginTop: 13 }}>{bannerLanguages.join(' · ')}</span>
        <span style={{ display: 'flex', color: 'rgba(186,194,222,0.64)', fontSize: 10, fontWeight: 500, letterSpacing: 2.5, marginTop: 13 }}>SOFTWARE ENGINEER · COMPUTER ENGINEERING STUDENT</span>
        <div style={{ display: 'flex', gap: 8, marginTop: 19 }}>
          {bannerLanguages.map(function(language) { return <span key={language} style={{ display: 'flex', padding: '4px 11px', borderRadius: 20, background: 'rgba(203,166,247,0.1)', border: '1px solid rgba(203,166,247,0.3)', color: '#cdd6f4', fontSize: 10, fontWeight: 600 }}>{language}</span>; })}
        </div>
      </div>

      <div style={{ display: 'flex', height: 90, alignItems: 'center', position: 'relative' }}>
        {stats.map(function(stat) { return <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}><span style={{ display: 'flex', color: '#b4befe', fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{stat.value}</span><span style={{ display: 'flex', color: 'rgba(166,173,200,0.62)', fontSize: 9, fontWeight: 700, letterSpacing: 3, marginTop: 8 }}>{stat.label.toUpperCase()}</span></div>; })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', height: 145, paddingTop: 10, boxSizing: 'border-box', position: 'relative' }}>
        <span style={{ display: 'flex', color: 'rgba(203,166,247,0.78)', fontSize: 10, fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>STACK ANALYTICS</span>
        <div style={{ display: 'flex', width: '100%', height: 8, borderRadius: 5, overflow: 'hidden', background: 'rgba(205,214,244,0.06)' }}>
          {languages.map(function(language, index) { return <div key={language.name} style={{ display: 'flex', width: String(language.percentage) + '%', height: '100%', background: stackColors[index] || '#cba6f7' }} />; })}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', marginTop: 18 }}>
          {languages.map(function(language, index) { return <div key={language.name} style={{ display: 'flex', alignItems: 'center', gap: 7, width: 112 }}><span style={{ display: 'flex', width: 7, height: 7, borderRadius: 4, background: stackColors[index] || '#cba6f7' }} /><span style={{ display: 'flex', color: 'rgba(205,214,244,0.72)', fontSize: 10, fontWeight: 600 }}>{language.name}</span><span style={{ display: 'flex', color: 'rgba(180,190,254,0.58)', fontSize: 10, marginLeft: 'auto' }}>{String(language.percentage) + '%'}</span></div>; })}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', height: 150, paddingTop: 10, boxSizing: 'border-box', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', color: 'rgba(203,166,247,0.78)', fontSize: 10, fontWeight: 700, letterSpacing: 4 }}>ACTIVITY PULSE</span>
          <span style={{ display: 'flex', color: 'rgba(166,173,200,0.52)', fontSize: 9, letterSpacing: 1 }}>LAST 12 MONTHS</span>
        </div>
        <img src=".github/assets/activity-pulse.svg" width={780} height={120} style={{ marginTop: 8 }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', height: 200, paddingTop: 10, boxSizing: 'border-box', position: 'relative' }}>
        <span style={{ display: 'flex', color: 'rgba(203,166,247,0.78)', fontSize: 10, fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>PRIMARY DEPLOYMENTS</span>
        <div style={{ display: 'flex', gap: 14, flex: 1 }}>
          {[
            { name: 'Morzen', description: 'Primary project', language: 'Project', accent: '#89b4fa' },
            { name: 'portfolio', description: 'Personal portfolio', language: 'Web', accent: '#cba6f7' },
            { name: 'start_page', description: 'Start page', language: 'Web', accent: '#b4befe' },
          ].map(function(repository) {
            return <div key={repository.name} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '15px 16px', borderRadius: 12, background: 'rgba(203,166,247,0.045)', border: '1px solid rgba(203,166,247,0.2)' }}><span style={{ display: 'flex', color: '#cdd6f4', fontSize: 14, fontWeight: 700, marginBottom: 9 }}>{repository.name}</span><span style={{ display: 'flex', color: 'rgba(166,173,200,0.68)', fontSize: 10, lineHeight: 1.45 }}>{repository.description}</span><div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', paddingTop: 12, gap: 7 }}><span style={{ display: 'flex', width: 7, height: 7, borderRadius: 4, background: repository.accent }} /><span style={{ display: 'flex', color: 'rgba(205,214,244,0.76)', fontSize: 10, fontWeight: 600 }}>{repository.language}</span><span style={{ display: 'flex', color: 'rgba(166,173,200,0.54)', fontSize: 10, marginLeft: 'auto' }}>OPEN ↗</span></div></div>;
          })}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', height: 120, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ display: 'flex', color: 'rgba(203,166,247,0.7)', fontSize: 9, fontWeight: 700, letterSpacing: 4, marginBottom: 14 }}>LET'S CONNECT</span>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {contactButton('https://img.icons8.com/ios-filled/50/ffffff/linkedin.png', 'LinkedIn', 'https://www.linkedin.com/in/jeanpatrickm/', 145)}
          {contactButton('https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png', 'Instagram', 'https://www.instagram.com/jeanpatrickm_/', 145)}
          {contactButton('https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png', 'YouTube', 'https://www.youtube.com/@jeanpatrickm01', 135)}
          {contactButton('https://img.icons8.com/ios-filled/50/ffffff/new-post.png', 'Email', 'mailto:jean_patrick115@hotmail.com', 125)}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 20, position: 'relative' }}>
        <span style={{ display: 'flex', color: 'rgba(180,190,254,0.38)', fontSize: 9, letterSpacing: 3 }}>BUILD · LEARN · SHARE</span>
      </div>
    </div>
  );
})()
~~~
