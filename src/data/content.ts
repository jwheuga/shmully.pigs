// ============================================================
// SHMULLY 2026 — ALL EDITABLE CONTENT LIVES IN THIS ONE FILE.
// Update roster, beds, agenda, arrivals, money, etc. here —
// no component changes needed.
// ============================================================

// ---------- CONFIG ----------

export const config = {
  // Publish the Google Sheet scores tab to the web as CSV
  // (File → Share → Publish to web → pick the scores tab → CSV)
  // and paste the URL here. Leave '' to use the built-in sample data.
  SCORES_CSV_URL: '',
  POLL_INTERVAL_MS: 60_000,
  // First tee, Round 1 at Vail Golf Club (Mountain Time)
  FIRST_TEE_ISO: '2026-07-31T11:20:00-06:00',
  TRIP_END_ISO: '2026-08-02T23:59:00-06:00',
  SHEET_URL: 'https://drive.google.com/file/d/1gHz9tqSaWjEaleFBJJyjxYzS8_a90__J/view',
}

/*
CSV FORMAT the scoreboard expects (one header row, then data rows):

  Type,Day,Name,H1,H2,...,H18,Total

  - Type=TEAM  → Day 1 or 2, Name = team name, H1..H18 = team score per
    hole (blank = not played yet). Total is ignored (computed client-side).
  - Type=TALLY → Name = player, Total = shmully count. Day/holes ignored.
*/

// ---------- TRIP BASICS ----------

export const trip = {
  year: 2026,
  location: 'Vail, CO',
  elevation: 'ELEV 11,500 FT',
  dates: 'Thursday July 30 – Sunday August 2, 2026',
  explainer:
    'A "Shmully" is a shotgun mulligan: call it, shotgun an entire beer, and immediately hit your do-over. It is also the name of this entire glorious weekend.',
}

export const reigningChampions = {
  names: ['Carlos', 'Michael', 'Wilder', 'William'],
  note: 'Photos coming from Wilder',
}

// ---------- PLAYERS ----------
// Synced from sheet "Players 2026" (updated 7/18/26): 2026 handicaps are in,
// groups are A–E (5 teams of 4).

export interface Player {
  name: string
  nickname?: string
  handicap: number | null
  group: string | null
  house: boolean
  stat?: string
}

export const players: Player[] = [
  { name: 'Nick Cantelmi', handicap: 5, group: 'A', house: true, stat: 'Lowest handicap in the sty' },
  { name: 'Dustin Oreilly', nickname: 'Dirty', handicap: 9, group: 'A', house: true, stat: 'Founding pig energy' },
  { name: 'Wagner', handicap: 22, group: 'A', house: true },
  { name: 'Tony Savino', handicap: 25, group: 'A', house: true },
  { name: 'Ryan', handicap: 7, group: 'B', house: false },
  { name: 'Wilder Heuga', handicap: 12, group: 'B', house: true, stat: 'Reigning champion' },
  { name: 'Hunter', handicap: 22, group: 'B', house: true },
  { name: 'William Scheffler', nickname: 'Billy', handicap: 8, group: 'C', house: true, stat: 'Reigning champion' },
  { name: 'Derek Vanwagner', nickname: 'DVW', handicap: 18, group: 'C', house: true, stat: 'Co-holder, Shmully Tally record' },
  { name: 'Matt Wilson', nickname: 'Wilson', handicap: 20, group: 'C', house: true },
  { name: 'Taylor Telling', handicap: 6.2, group: 'D', house: false, stat: 'Not staying at the house' },
  { name: 'Daniel Wiechert', handicap: 14, group: 'D', house: true, stat: 'Keeper of the Sheet' },
  { name: 'Matty Dood', handicap: 18, group: 'D', house: false },
  { name: 'Harvy', handicap: 23, group: 'D', house: true },
  { name: 'Franco', handicap: 9, group: 'E', house: false },
  { name: 'Matt Albrecht', nickname: 'Albright', handicap: 13, group: 'E', house: true },
  { name: 'Dylan Hall', handicap: 20, group: 'E', house: false },
  { name: 'Zach Adamson', handicap: 20, group: 'E', house: false },
]

// Unconfirmed (FALSE in the sheet) — label exactly "TBD Pigs" on the site.
// They're penciled into groups, so they carry a group + handicap.
export const tbdPigs = [
  { name: 'Alex Chay', handicap: 20, group: 'B' },
  { name: 'Wogan', handicap: 15, group: 'C' },
]

// ---------- TEAMS ----------

export const teams = {
  structureNote:
    '5 groups of 4 (A–E), straight from the sheet. Averages include the TBD pigs penciled into their groups.',
  groups: ['A', 'B', 'C', 'D', 'E'],
  // Sheet-computed average handicaps (include unconfirmed pigs)
  avgHandicaps: { A: 15.25, B: 15.25, C: 15.25, D: 15.3, E: 15.5 },
  pastTeamNames: ['Good Luck Cucks', 'Hog Fockers', 'Milk Bag Boys', 'Hog Fathers'],
}

// ---------- BEDS ----------
// Inventory: 6 bunk beds, 2 queens, 2 kings.

export const beds = [
  { room: 'Bunk Room', type: 'bunk', icon: '🛏️', capacity: 6, sleepers: ['Harvy', 'Albright', 'Derek', 'Dirty', 'Tony', 'Wilson'], note: 'Shared thermostat with the room at the end of the hall — it’s on the wall behind the bunk beds.' },
  { room: 'King Bed 1', type: 'king', icon: '👑', capacity: 2, sleepers: ['Cantelmi', 'Daniel'] },
  { room: 'King Bed 2', type: 'king', icon: '👑', capacity: 2, sleepers: ['Wagner', 'Billy'] },
  { room: 'Queen Bed 3', type: 'queen', icon: '🛌', capacity: 1, sleepers: ['Hunter'] },
  { room: 'Queen Bed 4', type: 'queen', icon: '🛌', capacity: 1, sleepers: ['Wilder'] },
]

// ---------- AGENDA ----------

export const agenda = [
  {
    day: 'Thursday',
    date: 'July 30',
    emoji: '🍺',
    items: [
      { time: 'Evening', what: 'Opening Ceremony — welcomes, thank-yous, and every new pig competitor shotguns a beer' },
      { time: '', what: 'Pairings, formats & rules announced' },
      { time: '', what: 'Dinner' },
    ],
  },
  {
    day: 'Friday',
    date: 'July 31',
    emoji: '⛳',
    items: [
      { time: '11:20a–12:00p', what: 'Round 1 — Vail Golf Club (Shamble, best 2 balls, stroke play)' },
      { time: 'After golf', what: 'Pool party' },
      { time: 'Evening', what: 'Day 2 pairings, formats & scores announced' },
      { time: 'Night', what: 'Party' },
    ],
  },
  {
    day: 'Saturday',
    date: 'August 1',
    emoji: '🏆',
    items: [
      { time: '11:30a', what: 'Shuttle departs the house for Red Sky (shuttle runs Day 2 only)' },
      { time: '1:10p–1:50p', what: 'Round 2 — Red Sky (Adjusted Individual Stroke: drop the worst, add the best three)' },
      { time: '6:00p', what: 'Shuttle pickup at Red Sky' },
      { time: 'Evening', what: 'Tally scores · announce winners · Closing Ceremony' },
      { time: 'Night', what: 'Party' },
    ],
  },
  {
    day: 'Sunday',
    date: 'August 2',
    emoji: '👋',
    items: [{ time: '', what: 'Depart. Log out of the TVs. Turn off the fireplace. Go home a champion or go home in shame.' }],
  },
]

export const courses = [
  {
    name: 'Vail Golf Club',
    round: 'Round 1 — Friday 7/31, tee times 11:20a–12:00p',
    address: '1775 Sunburst Dr, Vail, CO 81657',
    phone: '(970) 479-2260',
    site: 'https://www.vailgolfclub.net',
    map: 'https://maps.google.com/?q=Vail+Golf+Club,+1775+Sunburst+Dr,+Vail,+CO+81657',
    cost: '~$164 / player',
  },
  {
    name: 'Red Sky Golf Club',
    round: 'Round 2 — Saturday 8/1, tee times 1:10p–1:50p',
    address: '376 Red Sky Rd, Wolcott, CO 81655',
    phone: '(970) 754-8425',
    site: 'https://www.redskygolfclub.com',
    map: 'https://maps.google.com/?q=Red+Sky+Golf+Club,+376+Red+Sky+Rd,+Wolcott,+CO+81655',
    cost: '$285 / player',
  },
]

// ---------- ARRIVALS / DEPARTURES ----------
// Add a row per pig as they book flights.

export const arrivals = [
  { player: 'DVW', arrive: 'Thu 7/30 · DIA 1:20p', depart: 'Sun 8/2 · DIA 5:15p' },
]

// ---------- FORMAT / RULES / AWARDS ----------

export const format = {
  name: '4v4v4v4 Tournament Format 1',
  rounds: [
    { label: 'Round 1 — Vail GC', detail: 'Groups A/B/C/D each play Shamble, best 2 balls, stroke play.' },
    { label: 'Round 2 — Red Sky', detail: 'Combined pairings (AB, AC, BD, CD) play Adjusted Individual Stroke — drop the worst score each hole, add the best three.' },
  ],
  rejected: 'Match play was considered and rejected.',
}

// Verbatim from the sheet's "Rules + Awards" tab — this wording is the
// personality of the site. Do not sanitize.
export const rules = [
  {
    name: 'Shotgun Mulligan: "Shmully"',
    text: 'You have unlimited shotgun mulligans. If you call "shmully", you must shotgun an entire beer and IMMEDIATELY hit your mulligan. Shmullies are not permitted on the greens.',
    highlight: true,
  },
  { name: 'Scorecards', text: 'Do not lose your fucking score cards.' },
  {
    name: 'Pace of Play — 4.5 hours/round',
    text: "No six-hour rounds. These are nice courses we're playing. Last year was a shitshow and half of the group almost got in a brawl after the group behind them hit up on them.",
  },
  {
    name: 'Provisional',
    text: 'Pursuant to Rule 18.3 of the USGA rules: When playing a provisional, you must say "provisional". After taking your provisional shot, if you end up finding your first ball, you can play your first ball without penalty. You have 3 minutes to try to find your first ball in the area. If you cannot find your first shot, you must play your provisional, whereby you will be assessed by stroke and penalty, meaning your provisional shot off the tee would be your third shot.',
  },
  { name: 'Lateral Rules', text: 'Hit OB, option to take distance, drop, add a stroke, hit.' },
  {
    name: 'Scramble/Shamble Drives',
    text: '4-man formats: each group must use at least 1 drive from each of their players during the round. 2-man formats: at least 2 drives from each player.',
  },
  {
    name: 'Putting',
    text: 'Match play: opposing teams can agree putts are "good" to halve the hole ("good good"). Stroke play: no gimmies. All putts must be finished in the cup. Even 2-footers.',
  },
  {
    name: 'Triple Bogey (DAY 2 ONLY)',
    text: "Players who get a triple bogey play from the lady's tees (in shame) on the next hole.",
  },
]

export const awards = [
  { name: 'Shmully Cup', desc: 'Winners', icon: '🏆' },
  { name: 'Best Pairing', desc: '2-some with the lowest score', icon: '🤝' },
  { name: 'Worst Pairing', desc: '2-some with the highest score', icon: '🤡' },
  { name: 'Most Shmullies', desc: 'Individual with the most shotgun mulligans', icon: '🐷' },
  { name: 'Best Player', desc: 'Lowest individual combined score over both days', icon: '⛳' },
]

export const rejectedAwards = 'Closest-to-pin and Longest Drive were considered and rejected.'

// ---------- HOUSE ----------

export const house = {
  address: '4842 Meadow Lane, Vail, CO',
  airbnb: 'https://www.airbnb.com/rooms/1323353776394486676',
  guidebook: 'https://guide.ruebarue.com/guestbook/3402732359092041',
  map: 'https://maps.google.com/?q=4842+Meadow+Lane,+Vail,+CO',
  sections: [
    {
      title: 'Getting Around / Bus',
      icon: '🚌',
      body: 'Nearest Town of Vail bus stops: Meadow Lane (2-min walk, ~450 ft) and Bighorn Park (4-min walk, ~0.2 mi). Bus schedule on the Town of Vail website.',
    },
    { title: 'Parking', icon: '🚗', body: '2 cars in the garage plus a couple on the driveway.' },
    {
      title: 'Elevator',
      icon: '🛗',
      body: 'Elevator to all floors — the inner door MUST be closed for it to work. Luggage elevator is straight through the garage. Jumping can make it stop working. Do not test this.',
    },
    {
      title: 'Kitchen',
      icon: '🍳',
      body: 'Fully stocked — appliances, dishes, glassware, cookware. Gas 6-burner Wolf cooktop. Hood fan: pull out the front panel; the fan must be pulled out for the light to work. Pot filler over the range.',
    },
    {
      title: 'Coffee',
      icon: '☕',
      body: 'Combo standard drip + Keurig. K-cups are NOT provided — add them to the grocery list.',
    },
    { title: 'Grill', icon: '🔥', body: 'Gas grill on the front deck.' },
    {
      title: 'Laundry',
      icon: '🧺',
      body: 'Main level behind the kitchen. Starter set of laundry pods in the small gray baskets.',
    },
    {
      title: 'Fireplace',
      icon: '🪵',
      body: 'Gas, remote-controlled. Turn it off when not in the unit and on departure.',
    },
    {
      title: 'Heat / Thermostats',
      icon: '🌡️',
      body: 'Radiant in-floor heating, set per room. The second-floor bunk room shares a thermostat with the room at the end of the hallway (right side) — it’s on the wall behind the bunk beds.',
    },
    { title: 'TVs', icon: '📺', body: 'All Smart TVs with YouTube TV. Log out of personal accounts on departure.' },
    {
      title: 'Trash & Recycling',
      icon: '🗑️',
      body: 'Bins in the garage. Recycle: glass, cans, cardboard — NO pizza boxes, NO plastic bags, NO food remains. Trash: everything else. Trash day is Monday; shed-service pickup, nothing to do.',
    },
    {
      title: "What's Stocked",
      icon: '🧴',
      body: 'Ready-made beds, bath/hand towels, washcloths. Kitchen: glasses, dishes, utensils, basic cookware plus a starter kit (hand soap, sponge, dish soap, dishwasher gel, paper towels, kitchen trash bags). Each bathroom: hotel-style bath soap, shampoo, conditioner, toilet paper. Laundry pod starter set. Kits cover you until a store run — inventory before shopping.',
    },
    {
      title: 'Humidifiers',
      icon: '💧',
      body: 'NOT provided (hygiene policy). Rentable from a local vendor (mention rentVAIL in the comments for delivery access) or buy at grocery stores — worth it at 8,000+ ft.',
    },
    {
      title: 'Bikes',
      icon: '🚲',
      body: 'Venture Sports is the go-to rental (mountain, road, cruisers; multiple locations).',
    },
  ],
}

// ---------- MONEY ----------

export const money = {
  lineItems: [
    { item: 'Airbnb (4842 Meadow Lane)', amount: '$11,359.24 out the door', perPerson: '$459.06 at 11 · $504.97 at 10' },
    { item: 'Vail Golf Club', amount: '$2,624 for 16 · $3,280 for 20', perPerson: '$164 pp' },
    { item: 'Red Sky Golf Club', amount: '$5,700 for 20', perPerson: '$285 pp' },
    { item: 'Transportation (shuttle)', amount: '$700 for 12', perPerson: '$58.33 pp' },
    { item: 'Groceries', amount: 'TBD', perPerson: 'TBD' },
  ],
  context2023:
    '2023 ran ~$738 pp — plus a ~$600 Costco run and a ~$600 DoorDash night that got split informally. The per-person ledger below exists so that chaos never happens again.',
  // Payments not yet logged in the sheet — flip paid:true as money lands.
  payments: players.map((p) => ({ name: p.nickname || p.name, paid: false })),
}

// ---------- HALL OF FAME ----------

export const hallOfFame = {
  finals2023: [
    { team: 'Milk Bag Boys', score: 401, champion: true },
    { team: 'Hog Fockers', score: 404 },
    { team: 'Good Luck Cucks', score: 408 },
    { team: 'Hog Fathers', score: 435 },
  ],
  tallyChamps2023: [
    { name: 'Carlos', count: 10 },
    { name: 'Derek', count: 10 },
  ],
}

// ---------- GLOSSARY (New Pig Orientation) ----------

export const glossary = [
  {
    term: 'Shmully',
    def: 'The shotgun mulligan. Call "shmully," shotgun an entire beer, IMMEDIATELY hit your mulligan. Unlimited per round. No shmullies on the greens. Also: the name of the entire weekend. Yes, both.',
  },
  {
    term: 'New Pig',
    def: 'A first-timer. At the Opening Ceremony, every new pig competitor shotguns a beer in front of the group. This is non-negotiable and it is an honor.',
  },
  {
    term: 'Shmully Tally',
    def: 'The official running count of shmullies per player, kept all weekend. Decides the "Most Shmullies" award. The 2023 record is 10 (Carlos and Derek, co-champions, legends).',
  },
  {
    term: 'Triple Bogey Shame Rule',
    def: 'Day 2 only: card a triple and you play the next hole from the forward tees, in shame. Everyone will watch.',
  },
  {
    term: 'Shamble',
    def: 'Everyone tees off, the team picks the best drive, then everyone plays their own ball from there. Round 1 counts the best 2 balls per hole.',
  },
  {
    term: 'Adjusted Individual Stroke',
    def: 'Round 2 scoring: all four play their own ball; each hole you drop the worst score and add the best three.',
  },
  {
    term: 'The Shmully Cup',
    def: 'What the winning team lifts at the Closing Ceremony. Reigning champions: Carlos, Michael, Wilder, and William.',
  },
]

// ---------- SCOREBOARD FALLBACK ----------
// Used until SCORES_CSV_URL is set. Shaped exactly like parsed CSV data.
// Mirrors the sheet's current state (7/18/26): five teams A–E, boards
// cleared for 2026, tally as entered in the sheet.

const emptyHoles = () => Array(18).fill(null)

export const scoreboardFallback = {
  isSample: true,
  day1: [
    { team: 'Team A', holes: emptyHoles() },
    { team: 'Team B', holes: emptyHoles() },
    { team: 'Team C', holes: emptyHoles() },
    { team: 'Team D', holes: emptyHoles() },
    { team: 'Team E', holes: emptyHoles() },
  ],
  day2: [
    { team: 'Team A', holes: emptyHoles() },
    { team: 'Team B', holes: emptyHoles() },
    { team: 'Team C', holes: emptyHoles() },
    { team: 'Team D', holes: emptyHoles() },
    { team: 'Team E', holes: emptyHoles() },
  ],
  tally: [
    { name: 'Derek', count: 32 },
    { name: 'Carlos', count: 0 },
  ],
}
