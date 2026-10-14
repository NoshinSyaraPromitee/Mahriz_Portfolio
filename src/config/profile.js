export const loader = {
  src: '/car.riv',
  duration: 4500,
  stateMachine: undefined, // e.g. 'State Machine 1'
}

export const driver = {
  first: 'Mahriz',
  last: 'Hossain',
  fullName: 'Mohammad Mahriz Mashir Hossain',
  photo: '/mahriz.png',
  email: 'mahriz.hossain@gmail.com',
  tagline:
    'Mechanical Engineering student at IUT, motorsport writer and sim racer chasing one dream - a seat in Formula racing.',
}

export const cvs = [
  {
    label: 'Racer + Engineer',
    note: 'Motorsport and engineering profile',
    file: '/MahrizHossain_RacerEngineer.pdf',
    name: 'MahrizHossain_RacerEngineer.pdf',
  },
  {
    label: 'Content Writer',
    note: 'Writing and publications profile',
    file: '/MahrizHossain_ContentWriter.pdf',
    name: 'MahrizHossain_ContentWriter.pdf',
  },
]

export const channels = [
  { id: 'email', label: 'Email', value: 'mahriz.hossain@gmail.com', href: 'mailto:mahriz.hossain@gmail.com' },
  { id: 'whatsapp', label: 'WhatsApp', value: '+880 1743 826896', href: 'https://wa.me/8801743826896' },
  { id: 'phone', label: 'Phone', value: '+880 1743 826896', href: 'tel:+8801743826896' },
  { id: 'linkedin', label: 'LinkedIn', value: 'Mahriz Hossain', href: '#' }, // <- paste LinkedIn URL
  { id: 'facebook', label: 'Facebook', value: 'mahriz.hossain.2025', href: 'https://www.facebook.com/mahriz.hossain.2025' },
]

// tier 1: always in the bar | tier 2: bar on tablet, "More" on phone | tier 3: "More" on mobile
export const nav = [
  { label: 'Driver', href: '#about', tier: 1 },
  { label: 'Results', href: '#results', tier: 1 },
  { label: 'Journey', href: '#journey', tier: 2 },
  { label: 'Experience', href: '#experience', tier: 3 },
  { label: 'Publications', href: '#publications', tier: 3 },
  { label: 'Contact', href: '#contact', tier: 3 },
]

export const about = [
  'Mohammad Mahriz Mashir Hossain is a Mechanical Engineering student at the Islamic University of Technology (IUT), Batch 22, with one goal locked in - racing in Formula motorsport one day.',
  'He is the Fastest Iutian of SimSurge at Automech 2.0, competed in the All-University Sim Racing Competition in London, and has won car quiz championships multiple times.',
  'Off the track he writes about the machines he loves - from wind-powered cars to the ground-effect revolution of the Lotus 78 - for the ASME e-magazine and Engine Insider.',
]

export const info = [
  ['Institution', 'IUT'],
  ['Programme', 'B.Sc Mechanical Engineering'],
  ['Batch', '22 Â· Class of 2027'],
  ['Base', 'Dhaka, Bangladesh'],
  ['Target', 'Formula Racing Seat'],
]

export const stats = [
  { value: 8.5, decimals: 1, label: 'IELTS Band Score', c: 'var(--purple)' },
  { text: 'P1', label: 'Fastest Iutian Â· SimSurge', c: 'var(--green)' },
  { text: 'A/A*', label: 'Daily Star Award Â· A-levels', c: 'var(--red)' },
  { value: 2, decimals: 0, label: 'Published Articles', c: 'var(--yellow)' },
]

export const licence = {
  fields: [
    ['Name', 'MAHRIZ HOSSAIN', true],
    ['Discipline', 'MECHANICAL ENGINEERING', true],
    ['Class', 'FORMULA Â· SIM'],
    ['Institution', 'IUT Â· BATCH 22'],
  ],
  footer: 'VALID TILL THE CHEQUERED FLAG',
}