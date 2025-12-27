export interface TimelineItemType {
  text: string;
  date: string;
  category: { tag: string; color?: string; bgColor: string };
  link?: { url: string; text: string };
  position: 1 | 2; 
}


export const timelineData: TimelineItemType[] = [
  {
    text: 'Published my article site build with Gatsbyjs',
    date: 'May 26, 2024',
    category: { tag: 'project', bgColor: '#FEE1D3' },
    link: { url: '#', text: 'Check it out' },
    position: 1,
  },
  {
    text: 'Finished first MVP of passion project Project Name',
    date: 'February 04, 2024',
    category: { tag: 'project', bgColor: '#EBE8F2' },
    link: { url: '#', text: 'Check it out' },
    position: 2,
  },
  {
    text: 'Acquired a desk in workspace to start my own setup',
    date: 'November 04, 2023',
    category: { tag: 'Office', bgColor: '#DFF4D9' },
    position: 1,
  },
  {
    text: 'Awarded Top 7 badge for having at least one post featured in the weekly "must-reads" from Dev.to',
    date: 'March 17, 2021',
    category: { tag: 'award', bgColor: '#FFFAD1' },
    link: { url: 'https://dev.to/abdulbasit313', text: 'Profile link' },
    position: 1,
  },
]