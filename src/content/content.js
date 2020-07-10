const MESSAGES = {
  LINKS: {
    GANTRI: 'https://www.gantri.com/',
    EMAIL: 'mailto:rego.elton@gmail.com'
  },
  LANDING: {
    LEAD_IN: "Hi there! I'm",
    TITLE: "Elton Christopher Rego,",
    SUB_TITLE: "a Front-End Engineer ",
    COMPANY_LINK: "@Gantri",
    DESC: "I'm based in Oakland, California and specialize in developing, implementing, and occasionally designing exceptional User Interface designs on the Web.",
    CTA_BUTTON: "Let's get in touch!",
    IMG: "/img/succ.jpg",
    IMG_ALT_TEXT: "a succulent",
  },
  ABOUT: {
    TITLE: "Do you know Elty?",
    DESC: "\"Of course I know him, he is me.\"",
    DESC_2: "Elty is a nickname from when I was in school. I don't know why I like it, but I do.",
    DESC_3: "I graduated from the University of California, Santa Cruz in 2018 with degrees in Computer Science and Business Management Economics as well as honors in the major. Out of college, I joined Veeva and worked to help build the industry cloud for life sciences.",
  },
  RESUME: {
    TITLE: "Where I've Worked",
  },
  FOOTER: {
    PREFIX: "Made with Vanilla React.js",
    COPY: "2020 Elton Christopher Rego. All Rights Reserved."
  },
  DEFAULTS: {
    BUTTON_TEXT: 'do the thing!',
  }
};

export const MUSIC_MESSAGES = {
  LANDING: {
    TITLE: 'Music',
    DESC: "I write music in my bedroom as an extension of my journal. Below is a list of links to my songs."
  },
  SONG_LINKS: [
    {
      title: 'Forever (Demo)',
      to: '/forever-demo',
    },
    {
      title: 'Lose a Friend',
      to: '/lose-a-friend',
    }
  ],
  SONG_INFO: {
    '/forever-demo': {
      TITLE: 'Forever (Demo)',
      DESC: 'I wrote this song with my best friend about a serious relationship that had ended recently.'
    },
    '/lose-a-friend': {
      TITLE: 'Lose a Friend',
      DESC: 'Available everywhere July 17th, 2020.'
    },
  },
  PATH_TO_TREES: {
    '/forever-demo': [
      {
        title: 'Spotify',
        href: 'https://open.spotify.com/track/5LyscQjrwgDnxKjATb7tLC?si=Szofh0jMSnqj5NERtSbHXw',
      },
      {
        title: 'Apple Music',
        href: 'https://music.apple.com/us/album/forever-single/1517965180?uo=4&app=music&at=1001lry3&ct=dashboard',
      },
      {
        title: 'YouTube',
        href: 'https://www.youtube.com/watch?v=3iKpOG69yeI',
      },
      {
        title: 'Amazon Music',
        href: 'https://www.amazon.com/gp/product/B08B2SCYG9/?tag=distrokid06-20',
      },
      {
        title: 'Google Play',
        href: 'https://play.google.com/store/music/album/Elty_Forever?id=Brurrnnd5lhr4aky3ggarrw5hre',
      },
      {
        title: 'iHeartRadio',
        href: 'https://www.iheart.com/artist/elty-33932252/albums/forever-104397643/',
      },
      {
        title: 'Napster',
        href: 'https://us.napster.com/artist/elty/album/forever-486546730',
      }
    ],
    '/lose-a-friend': [
      {
        title: 'Pre-Save',
        href: 'https://distrokid.com/hyperfollow/elty1/lose-a-friend-3',
      },
    ],
  }
}

export default MESSAGES;