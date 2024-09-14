import type { NotesOptions, NoteItem } from 'vuepress-theme-plume';

const icons = {
  current: 'mdi:university-outline',
  overview: 'material-symbols:overview-key-outline-rounded',
  lecture: 'mdi:lecture',
  tutorial: 'streamline:group-meeting-call',
  project: 'fluent-mdl2:assessment-group',
  lab: 'icomoon-free:lab',
  ed: 'mdi:book-open'
}


const COMP9444: NoteItem = {
  dir: 'COMP9444',
  link: '/COMP9444/',
  sidebar: [
    {
      text: 'COMP9444',
      icon: icons.current,
      collapsed: false,
      items: [
        {
          text: 'Overview',
          dir: '',
          link: '/COMP9444/',
        },
        {
          text: 'Lecture',
          dir: 'Lecture',
          link: '/COMP9444/Lecture/',
        },
        {
          text: 'Tutorial',
          dir: 'Tutorial',
          link: '/COMP9444/Tutorial/',
        },
        {
          text: 'Ed Lessons',
          dir: 'Ed',
          link: '/COMP9444/Ed/',
          items: []
        },
      ]
    }
  ]
}

const ELEC2134: NoteItem = {
  dir: 'ELEC2134',
  link: '/ELEC2134/',
  sidebar: 'auto'
}

const COMP3222: NoteItem = {
  dir: 'COMP3222',
  link: '/COMP3222/',
  sidebar: 'auto'
}

const Help: NoteItem = {
  dir: 'Help',
  link: '/help/',
  sidebar: [
    {
      text: 'Help Center',
      collapsed: false,
      items: [
        '/help/useful',
        '/help/cseLabs'
      ]
    },
    {
      text: 'Terms',
      collapsed: false,
      items: [
        '/help/terms/about',
        '/help/terms/copyright'
      ]
    }

  ]
}


export const notes: NotesOptions = {
  dir: '/',
  link: '/',
  notes: [
    ELEC2134,
    COMP3222,
    COMP9444,
    Help,
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
    }
  ]
};