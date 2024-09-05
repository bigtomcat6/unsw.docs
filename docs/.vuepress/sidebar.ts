import type { NotesOptions, NoteItem } from 'vuepress-theme-plume';

const COMP9444: NoteItem = {
  dir: 'COMP9444',
  link: '/COMP9444/',
  sidebar: 'auto'
}


export const notes: NotesOptions = {
  dir: '/',
  link: '/',
  notes: [
    COMP9444,
    {
      dir: 'DESN2000',
      link: '/DESN2000/',
      sidebar: [
        {
          text: 'DESN2000',
          collapsed: false,
          items: [
            {
              text: 'Overview',
              dir: '',
              link: '/DESN2000/',
              items: []
            },
            {
              text: 'Design',
              dir: 'Design',
              link: '/DESN2000/Design/',
              items: []
            },
            {
              text: 'Technical (COMP)',
              dir: 'COMP',
              link: '/DESN2000/COMP/',
              items: ['/DESN2000/COMP/Lecture/', '/DESN2000/COMP/Lab/', '/DESN2000/COMP/Project/']
            }
          ]
        }
      ]
    },
    {
      dir: 'MATH2099',
      link: '/MATH2099/',
      sidebar: [
        {
          text: 'MATH2099',
          collapsed: false,
          items: [
            {
              text: 'Overview',
              dir: '',
              link: '/MATH2099/',
              items: []
            },
            {
              text: 'Linear Algebra',
              dir: 'Algebra',
              link: '/MATH2099/Algebra/',
              items: ['index', 'Lecture/index', 'Tutorial']
            },
            {
              text: 'Statistics',
              dir: 'Statistics',
              link: '/MATH2099/Statistics/',
              items: ['index', 'Lecture/index','mobius/index']
            },
          ]
        }
      ]
    },
    {
      dir: 'COMP2511',
      link: '/COMP2511/',
      sidebar: [
        {
          text: 'COMP2511',
          collapsed: false,
          items: [
            {
              text: 'Note',
              dir: 'Note',
              link: '/COMP2511/',
              items: []
            },
            {
              text: 'Lecture',
              dir: 'Lecture',
              link: '/COMP2511/Lecture/',
              items: []
            },
            {
              text: 'Tutorial',
              dir: 'Tutorial',
              link: '/COMP2511/Tutorial/'
            }
          ]
        }
      ]
    },
    {
      dir: 'help',
      link: '/help/',
      sidebar: 'auto'
    }
  ]
};