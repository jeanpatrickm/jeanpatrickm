~~~aura width=860 height=260
(function() {
  var languages = (github && github.languages && github.languages.length > 0)
    ? github.languages.slice(0, 4).map(function(language) { return language.name; })
    : ['JavaScript', 'TypeScript', 'React', 'Python'];

  return (
    <div style={{
      width: '100%', height: '100%', background: '#08080d',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter', position: 'relative', overflow: 'hidden',
      borderRadius: 18, border: '1px solid rgba(185,167,232,0.22)',
    }}>
      <svg width="860" height="260" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="rgba(185,167,232,0.055)" strokeWidth="1" />
          </pattern>
          <radialGradient id="hero-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(154,126,216,0.42)" />
            <stop offset="52%" stopColor="rgba(117,88,181,0.15)" />
            <stop offset="100%" stopColor="rgba(117,88,181,0)" />
          </radialGradient>
          <radialGradient id="hero-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(91,132,180,0.18)" />
            <stop offset="100%" stopColor="rgba(91,132,180,0)" />
          </radialGradient>
        </defs>
        <rect width="860" height="260" fill="url(#hero-grid)" />
        <ellipse cx="160" cy="225" rx="260" ry="170" fill="url(#hero-purple)">
          <animate attributeName="opacity" values="0.45;0.78;0.45" dur="9s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0;90 0;0 0" dur="10s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="750" cy="65" rx="220" ry="150" fill="url(#hero-blue)">
          <animate attributeName="opacity" values="0.35;0.62;0.35" dur="11s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0;-80 0;0 0" dur="12s" repeatCount="indefinite" />
        </ellipse>
        <path d="M25 55V27H53" fill="none" stroke="rgba(198,181,240,0.58)" strokeWidth="2" />
        <path d="M807 233H835V205" fill="none" stroke="rgba(198,181,240,0.58)" strokeWidth="2" />
        <circle cx="86" cy="83" r="2" fill="rgba(198,181,240,0.55)" />
        <circle cx="766" cy="177" r="2" fill="rgba(198,181,240,0.42)" />
        <circle cx="718" cy="54" r="1.5" fill="rgba(255,255,255,0.45)" />
      </svg>

      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', position: 'relative',
      }}>
        <span style={{
          display: 'flex', color: '#b9a7e8', fontSize: 13, fontWeight: 700,
          letterSpacing: 7, marginBottom: 13,
        }}>JEAN PATRICK</span>
        <span style={{
          display: 'flex', color: '#f8f6fc', fontSize: 42, fontWeight: 800,
          letterSpacing: 4, lineHeight: 1,
        }}>SOFTWARE ENGINEER</span>
        <span style={{
          display: 'flex', color: 'rgba(213,204,230,0.62)', fontSize: 11,
          fontWeight: 500, letterSpacing: 4, marginTop: 17,
        }}>COMPUTER ENGINEERING STUDENT</span>
        <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
          {languages.map(function(language) {
            return (
              <span key={language} style={{
                display: 'flex', padding: '4px 11px', borderRadius: 20,
                background: 'rgba(185,167,232,0.08)',
                border: '1px solid rgba(185,167,232,0.24)',
                color: 'rgba(232,226,243,0.78)', fontSize: 10, fontWeight: 600,
              }}>{language}</span>
            );
          })}
        </div>
      </div>
    </div>
  );
})()
~~~

~~~aura width=860 height=130
(function() {
  var stats = [
    { label: 'Repos', value: String((github && github.stats && github.stats.totalRepos) || 0), color: '#b9a7e8' },
    { label: 'Stars', value: String((github && github.stats && github.stats.totalStars) || 0), color: '#9f8bd2' },
    { label: 'Forks', value: String((github && github.stats && github.stats.totalForks) || 0), color: '#c6b5f0' },
    { label: 'Commits', value: String((github && github.stats && github.stats.totalCommits) || 0), color: '#8e76bd' },
  ];

  return (
    <div style={{
      width: '100%', height: '100%', background: '#08080d',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter', borderRadius: 18,
      border: '1px solid rgba(185,167,232,0.18)',
    }}>
      {stats.map(function(stat, index) {
        return (
          <div key={stat.label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', flex: 1, height: '72%',
            borderRight: index < stats.length - 1
              ? '1px solid rgba(185,167,232,0.10)' : 'none',
          }}>
            <span style={{
              display: 'flex', color: stat.color, fontSize: 30,
              fontWeight: 800, lineHeight: 1,
            }}>{stat.value}</span>
            <span style={{
              display: 'flex', color: 'rgba(205,195,225,0.52)',
              fontSize: 10, fontWeight: 700, letterSpacing: 3, marginTop: 9,
            }}>{stat.label.toUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
})()
~~~

~~~aura width=860 height=190
(function() {
  var languages = (github && github.languages && github.languages.length > 0)
    ? github.languages.slice(0, 6)
    : [
        { name: 'JavaScript', percentage: 34, color: '#b9a7e8' },
        { name: 'TypeScript', percentage: 24, color: '#9f8bd2' },
        { name: 'Python', percentage: 18, color: '#8e76bd' },
        { name: 'React', percentage: 12, color: '#c6b5f0' },
        { name: 'HTML', percentage: 7, color: '#7961a9' },
        { name: 'CSS', percentage: 5, color: '#66508f' },
      ];

  return (
    <div style={{
      width: '100%', height: '100%', background: '#08080d',
      display: 'flex', flexDirection: 'column', fontFamily: 'Inter',
      padding: '20px 34px', boxSizing: 'border-box', borderRadius: 18,
      border: '1px solid rgba(185,167,232,0.18)',
    }}>
      <span style={{
        display: 'flex', color: 'rgba(185,167,232,0.72)', fontSize: 10,
        fontWeight: 700, letterSpacing: 4, marginBottom: 17,
      }}>STACK ANALYTICS</span>

      <div style={{
        display: 'flex', width: '100%', height: 9, borderRadius: 5,
        overflow: 'hidden', background: 'rgba(255,255,255,0.04)',
      }}>
        {languages.map(function(language) {
          return (
            <div key={language.name} style={{
              display: 'flex', width: String(language.percentage) + '%',
              height: '100%', background: language.color,
            }} />
          );
        })}
      </div>

      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '12px 26px',
        marginTop: 19, width: '100%',
      }}>
        {languages.map(function(language) {
          return (
            <div key={language.name} style={{
              display: 'flex', alignItems: 'center', gap: 7, width: 112,
            }}>
              <span style={{
                display: 'flex', width: 7, height: 7, borderRadius: 4,
                background: language.color,
              }} />
              <span style={{
                display: 'flex', color: 'rgba(225,220,235,0.72)',
                fontSize: 10, fontWeight: 600,
              }}>{language.name}</span>
              <span style={{
                display: 'flex', color: 'rgba(185,167,232,0.52)',
                fontSize: 10, marginLeft: 'auto',
              }}>{String(language.percentage) + '%'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
})()
~~~

~~~aura width=860 height=165
(function() {
  var cells = [];
  var seed = (github && github.stats && github.stats.totalCommits) || 17;
  var rows = 5;
  var columns = 52;

  for (var i = 0; i < rows * columns; i++) {
    var value = (i * 17 + seed * 13 + (i % 7) * 11) % 19;
    cells.push(value < 7 ? 0 : value < 11 ? 1 : value < 15 ? 2 : value < 18 ? 3 : 4);
  }

  var colors = [
    'rgba(185,167,232,0.06)',
    'rgba(126,99,177,0.24)',
    'rgba(154,126,216,0.42)',
    'rgba(185,167,232,0.66)',
    'rgba(221,210,247,0.92)',
  ];

  return (
    <div style={{
      width: '100%', height: '100%', background: '#08080d',
      display: 'flex', flexDirection: 'column', fontFamily: 'Inter',
      padding: '20px 34px', boxSizing: 'border-box', borderRadius: 18,
      border: '1px solid rgba(185,167,232,0.18)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{
          display: 'flex', color: 'rgba(185,167,232,0.72)', fontSize: 10,
          fontWeight: 700, letterSpacing: 4,
        }}>ACTIVITY PULSE</span>
        <span style={{
          display: 'flex', color: 'rgba(205,195,225,0.46)',
          fontSize: 10, letterSpacing: 1,
        }}>{String(seed) + ' commits recorded'}</span>
      </div>

      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 4, width: 680,
        marginTop: 24, alignContent: 'flex-start',
      }}>
        {cells.map(function(value, index) {
          return (
            <span key={index} style={{
              display: 'flex', width: 10, height: 10, borderRadius: 2,
              background: colors[value],
            }} />
          );
        })}
      </div>
    </div>
  );
})()
~~~

~~~aura width=860 height=230
(function() {
  var repositories = (github && github.repos && github.repos.length > 0)
    ? github.repos.slice(0, 3)
    : [
        { name: 'Featured project', description: 'A project built with curiosity and code.', stars: 0, forks: 0, language: 'JavaScript' },
        { name: 'Open source', description: 'Learning, experimenting and sharing.', stars: 0, forks: 0, language: 'TypeScript' },
        { name: 'Latest build', description: 'Turning ideas into useful software.', stars: 0, forks: 0, language: 'Python' },
      ];

  return (
    <div style={{
      width: '100%', height: '100%', background: '#08080d',
      display: 'flex', flexDirection: 'column', fontFamily: 'Inter',
      padding: '20px 34px', boxSizing: 'border-box', borderRadius: 18,
      border: '1px solid rgba(185,167,232,0.18)',
    }}>
      <span style={{
        display: 'flex', color: 'rgba(185,167,232,0.72)', fontSize: 10,
        fontWeight: 700, letterSpacing: 4, marginBottom: 18,
      }}>PRIMARY DEPLOYMENTS</span>

      <div style={{ display: 'flex', gap: 14, flex: 1 }}>
        {repositories.map(function(repository, index) {
          var accent = ['#b9a7e8', '#9f8bd2', '#c6b5f0'][index] || '#8e76bd';
          return (
            <div key={repository.name} style={{
              display: 'flex', flexDirection: 'column', flex: 1,
              padding: '15px 16px', borderRadius: 12,
              background: 'rgba(185,167,232,0.035)',
              border: '1px solid rgba(185,167,232,0.2)',
            }}>
              <span style={{
                display: 'flex', color: '#f4f0fb', fontSize: 14,
                fontWeight: 700, marginBottom: 9,
              }}>{repository.name}</span>
              <span style={{
                display: 'flex', color: 'rgba(205,195,225,0.54)',
                fontSize: 10, lineHeight: 1.45,
              }}>{repository.description || 'Open-source project'}</span>
              <div style={{
                display: 'flex', alignItems: 'center', marginTop: 'auto',
                paddingTop: 12, gap: 7,
              }}>
                <span style={{
                  display: 'flex', width: 7, height: 7, borderRadius: 4,
                  background: accent,
                }} />
                <span style={{
                  display: 'flex', color: 'rgba(225,220,235,0.72)',
                  fontSize: 10, fontWeight: 600,
                }}>{repository.language || 'Project'}</span>
                <span style={{
                  display: 'flex', color: 'rgba(205,195,225,0.42)',
                  fontSize: 10, marginLeft: 'auto',
                }}>{'★ ' + String(repository.stars || 0) + ' ⑂ ' + String(repository.forks || 0)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
})()
~~~

<br />

<p align="center"><sub>LET'S CONNECT</sub></p>

~~~aura width=150 height=44 link="https://www.linkedin.com/in/jeanpatrickm/" inline align=center
<SocialMediaButton
  icon="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
  text="LinkedIn"
  backgroundColor="#171320"
  textColor="#f5f1fc"
  borderColor="#8f79bd"
  width={150}
  height={44}
  iconSize="20"
  gradientStops={[
    { offset: '0%', color: '#5f4b87' },
    { offset: '30%', color: '#b9a7e8' },
    { offset: '55%', color: '#7961a9' },
    { offset: '78%', color: '#d2c5f0' },
    { offset: '100%', color: '#5f4b87' },
  ]}
/>
~~~

~~~aura width=150 height=44 link="https://www.instagram.com/jeanpatrickm_/" inline align=center
<SocialMediaButton
  icon="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
  text="Instagram"
  backgroundColor="#171320"
  textColor="#f5f1fc"
  borderColor="#8f79bd"
  width={150}
  height={44}
  iconSize="20"
  gradientStops={[
    { offset: '0%', color: '#5f4b87' },
    { offset: '30%', color: '#b9a7e8' },
    { offset: '55%', color: '#7961a9' },
    { offset: '78%', color: '#d2c5f0' },
    { offset: '100%', color: '#5f4b87' },
  ]}
/>
~~~

~~~aura width=140 height=44 link="https://www.youtube.com/@jeanpatrickm01" inline align=center
<SocialMediaButton
  icon="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
  text="YouTube"
  backgroundColor="#171320"
  textColor="#f5f1fc"
  borderColor="#8f79bd"
  width={140}
  height={44}
  iconSize="20"
  gradientStops={[
    { offset: '0%', color: '#5f4b87' },
    { offset: '30%', color: '#b9a7e8' },
    { offset: '55%', color: '#7961a9' },
    { offset: '78%', color: '#d2c5f0' },
    { offset: '100%', color: '#5f4b87' },
  ]}
/>
~~~

~~~aura width=130 height=44 link="mailto:jean_patrick115@hotmail.com" inline align=center
<SocialMediaButton
  icon="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
  text="Email"
  backgroundColor="#171320"
  textColor="#f5f1fc"
  borderColor="#8f79bd"
  width={130}
  height={44}
  iconSize="20"
  gradientStops={[
    { offset: '0%', color: '#5f4b87' },
    { offset: '30%', color: '#b9a7e8' },
    { offset: '55%', color: '#7961a9' },
    { offset: '78%', color: '#d2c5f0' },
    { offset: '100%', color: '#5f4b87' },
  ]}
/>
~~~

<br />

<p align="center">
  <sub>Powered by <a href="https://github.com/collectioneur/readme-aura">readme-aura</a></sub>
</p>
