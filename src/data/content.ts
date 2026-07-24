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
  champs: [
    { name: 'Wilder', photo: '/players/wilder-v3.webp' },
    { name: 'William', photo: '/champs/william-v2.webp' },
    { name: 'Michael', photo: '/champs/michael.webp' },
    { name: 'Carlos', photo: '/champs/carlos-v2.webp' },
  ],
  note: 'Undefeated. Unbothered. In lederhosen.',
}

// ---------- PLAYERS ----------
// Synced from sheet "Players 2026" (updated 7/21/26): handicaps + A–E group
// reshuffle, Jordy Coffee added. Groups are stored but not rendered yet
// (Teams stay under wraps until the reveal).
// - nickname: the sheet's Nickname column, verbatim
// - handle: short name used by the money ledger / beds
// - portrait: Gemini share link; portraitImg: local image once uploaded

export interface Player {
  name: string
  handle?: string
  nickname?: string
  portrait?: string
  portraitImg?: string
  portraitPos?: string // CSS object-position override for the roster card crop
  handicap: number | null
  group: string | null
  house: boolean
}

export const players: Player[] = [
  { name: 'Nick Cantelmi', nickname: 'Lowest handicap in the sty', portraitImg: '/players/nick.webp', portrait: 'https://share.gemini.google/ejmtO2IiN633', handicap: 6.5, group: 'A', house: true },
  { name: "Dustin O'Reilly", handle: 'Dirty', nickname: 'Founding pig energy', portraitImg: '/players/dustin.webp', portrait: 'https://share.gemini.google/Dfa4Kl2vTzc4', handicap: 9, group: 'A', house: true },
  { name: 'Brian Wagner', handle: 'Wagner', nickname: 'Porsche Licker', portraitImg: '/players/wagner.webp', portrait: 'https://share.gemini.google/vocXccj0qnli', handicap: 22, group: 'C', house: true },
  { name: 'Tony Savino', nickname: 'Jerome', portraitImg: '/players/tony.webp', portrait: 'https://share.gemini.google/QL1CGHOYLgus', handicap: 25, group: 'A', house: true },
  { name: 'Ryan', nickname: 'Bovine-in-law', handicap: 7, group: 'E', house: false },
  { name: 'Wilder Heuga', nickname: 'Reigning champion', portraitImg: '/players/wilder-v3.webp', portrait: 'https://share.gemini.google/qJqFDAJdh4cR', handicap: 12, group: 'C', house: true },
  { name: 'Hunter Snyder', handle: 'Hunter', nickname: 'Long ball bargin hunter', portraitImg: '/players/hunter.webp', portrait: 'https://share.gemini.google/bhP9zTkHkqXr', handicap: 22, group: 'B', house: true },
  { name: 'William Scheffler', handle: 'Billy', nickname: 'Reigning champion', portraitImg: '/players/william.webp', handicap: 12, group: 'C', house: true },
  { name: 'Derek Vanwagner', handle: 'DVW', nickname: 'The Bananaman', portraitImg: '/players/derek.webp', portrait: 'https://share.gemini.google/1oPPO6VXB1vS', handicap: 18, group: 'A', house: true },
  { name: 'Matt Wilson', handle: 'Wilson', nickname: 'Hide the sausage', portraitImg: '/players/wilson.webp', handicap: 12.5, group: 'E', house: true },
  { name: 'Taylor Telling', portraitImg: '/players/taylor.webp', portrait: 'https://share.gemini.google/ABPPqaDdFcnp', handicap: 6.2, group: 'B', house: false },
  { name: 'Daniel Wiechert', nickname: 'High on the hog', portraitImg: '/players/daniel.webp', handicap: 14, group: 'C', house: true },
  { name: 'Matt Dillon', handle: 'Matty Dood', nickname: 'His Doodness', portraitImg: '/players/matty-dood.webp', portraitPos: 'center 20%', portrait: 'https://share.gemini.google/KwPQLGolYUc9', handicap: 18, group: 'B', house: false },
  { name: 'Harvy', nickname: 'Wallbanger', handicap: 23, group: 'E', house: true },
  { name: 'Franco', nickname: 'Franco', portraitImg: '/players/franco.webp', portrait: 'https://share.gemini.google/Z2NIqiPMKtNq', handicap: 15, group: 'D', house: false },
  { name: 'Jordy Coffee', portraitImg: '/players/jordy.webp', handicap: 15, group: 'D', house: false },
  { name: 'Matt Albrecht', handle: 'Albright', nickname: 'The Brechtest wizard of her age', portraitImg: '/players/albrecht.webp', handicap: 17, group: 'E', house: true },
  { name: 'Dylan Hall', nickname: 'Lon', portraitImg: '/players/dylan.webp', portrait: 'https://share.gemini.google/pHr0sw8Y76c8', handicap: 20, group: 'D', house: false },
  { name: 'Zach Adamson', nickname: 'Lyle', portraitImg: '/players/zach.webp', portrait: 'https://share.gemini.google/S8KnqfhXMyHN', handicap: 20, group: 'B', house: false },
]

// ---------- TEAMS ----------
// Groupings are under wraps until the reveal — player group fields stay in
// the data above but are not rendered anywhere.

export const teams = {
  revealNote: 'Pairings are locked in a vault in the Alps.',
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
      { time: '7:30p', what: 'Welcome Drinks at El Segundo Vail', link: 'https://www.google.com/maps/search/?api=1&query=El+Segundo+Vail+CO', linkLabel: 'Map' },
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
  { player: 'Nick Cantelmi', arrive: 'Thu 7/30 · DIA 1:45p', depart: 'Sun 8/2 · DIA 4:00p' },
  { player: 'Daniel Wiechert', arrive: 'Thu 7/30 · DIA 1:45p', depart: 'Sun 8/2 · DIA 4:00p' },
  { player: 'Wilder Heuga', arrive: 'Thu 7/30 · DIA 11:30a', depart: 'N/A' },
  { player: 'Brian Wagner', arrive: 'Thu 7/30 · DIA 11:30a', depart: 'Sun 8/2 · DIA 6:45p' },
  { player: 'Matt Albrecht', arrive: 'Mon 7/27 · Eagle', depart: 'TBD' },
  { player: 'Hunter', arrive: 'Thu 7/30 · Eagle 6:50p', depart: 'Sun 8/2 · Eagle' },
  { player: 'Tony', arrive: 'Thu 7/30 · DIA 1:30p', depart: 'Sun 8/2 · DIA 5:35p' },
  { player: 'Dustin', arrive: 'Thu 7/30 · DIA 2:20p', depart: 'TBD' },
  { player: 'William', arrive: 'Thu 7/30 · DIA 11:28a', depart: 'Sun 8/2 · DIA 7:57p' },
  { player: 'Wilson', arrive: 'Thu 7/30 · DIA 11:47a', depart: 'Sun 8/2 · DIA 5:35p' },
]

// ---------- FORMAT / RULES / AWARDS ----------

export const format = {
  name: '4v4v4v4 Tournament Format 1',
  rounds: [
    { label: 'Round 1 — Vail GC', detail: 'Groups A/B/C/D/E each play Shamble, best 2 balls, stroke play.' },
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
    text: 'No putt can be "good." No gimmies. All putts must be finished in the cup on both days. Even 2-footers.',
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

// Per-person math assumes: 11 pigs at the house, 20 pigs golfing,
// $500 groceries split by the 11 at the house.
export const money = {
  assumptions: 'Assumes 11 at the house, 20 golfing, $500 of groceries split by the house.',
  lineItems: [
    { item: 'Airbnb (4842 Meadow Lane)', amount: '$5,059.71', perPerson: '$459.97' },
    { item: 'Vail Golf Club', amount: '$3,280 for 20', perPerson: '$164.00' },
    { item: 'Red Sky Golf Club', amount: '$5,700 for 20', perPerson: '$285.00' },
    { item: 'Transportation (shuttle)', amount: '$700 for 12', perPerson: '$58.33' },
    { item: 'Groceries (est.)', amount: '$500', perPerson: '$45.45' },
  ],
  totals: [
    { label: 'House pig, golfing both rounds', amount: '$1,012.75' },
    { label: 'Off-site pig, golfing both rounds', amount: '$507.33' },
  ],
  // Payments not yet logged in the sheet — flip paid:true as money lands.
  payments: players.map((p) => ({ name: p.handle || p.name, paid: false })),
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
  // Cleared for 2026 — previous years' counts don't carry over.
  tally: [],
}
