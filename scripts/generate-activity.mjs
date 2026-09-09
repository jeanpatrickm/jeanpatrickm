import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const output = getOption('--output') || '.github/assets/activity-pulse.svg';
const username = process.env.GITHUB_USER || process.env.GITHUB_REPOSITORY_OWNER || 'jeanpatrickm';
const token = process.env.GITHUB_TOKEN;

const COLORS = ['#1e1e2e', '#45475a', '#7f849c', '#b4befe', '#cba6f7'];

function getOption(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function mockCalendar() {
  const days = [];
  for (let week = 0; week < 53; week += 1) {
    for (let day = 0; day < 7; day += 1) {
      const value = (week * 17 + day * 11 + 7) % 19;
      days.push({ contributionCount: value < 7 ? 0 : value < 11 ? 1 : value < 15 ? 2 : value < 18 ? 4 : 7 });
    }
  }
  return { totalContributions: days.reduce((sum, day) => sum + day.contributionCount, 0), days };
}

async function fetchCalendar() {
  if (!token) {
    console.warn('GITHUB_TOKEN is not set; generating a local preview calendar.');
    return mockCalendar();
  }

  const query = `
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'jeanpatrickm-profile-readme',
    },
    body: JSON.stringify({ query, variables: { login: username } }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join(', '));
  }

  const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error(`No contribution calendar returned for ${username}`);
  }

  return {
    totalContributions: calendar.totalContributions,
    days: calendar.weeks.flatMap((week) => week.contributionDays).slice(-53 * 7),
  };
}

function levelFor(count, maximum) {
  if (count <= 0) return 0;
  const ratio = count / Math.max(maximum, 1);
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

function renderCalendar(calendar) {
  const width = 780;
  const height = 120;
  const columns = 53;
  const rows = 7;
  const cell = 9;
  const gap = 4;
  const gridWidth = columns * (cell + gap) - gap;
  const left = Math.round((width - gridWidth) / 2);
  const top = 24;
  const maximum = Math.max(...calendar.days.map((day) => day.contributionCount), 1);
  const cells = [];

  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      const day = calendar.days[column * rows + row] || { contributionCount: 0 };
      const x = left + column * (cell + gap);
      const y = top + row * (cell + gap);
      cells.push(`<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" fill="${COLORS[levelFor(day.contributionCount, maximum)]}"/>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <text x="${width - 2}" y="11" text-anchor="end" fill="#b4befe" font-family="Arial, sans-serif" font-size="9" letter-spacing="1">${escapeXml(calendar.totalContributions)} CONTRIBUTIONS</text>
  ${cells.join('\n  ')}
</svg>
`;
}

try {
  const calendar = await fetchCalendar();
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, renderCalendar(calendar), 'utf8');
  console.log(`Activity calendar written to ${output} (${calendar.totalContributions} contributions).`);
} catch (error) {
  console.error(`Could not fetch GitHub activity: ${error.message}`);
  process.exitCode = 1;
}
