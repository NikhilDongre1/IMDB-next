import Card from "@/components/Card";

const api_key = process.env.API_KEY;
export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string };
}) {

  const genre = await searchParams?.genre || 'fetchTrending';

  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();
  const results = data.results;

  // const results = [
  //   {
  //     "backdrop_path": "/iFsWkmAcu1QcMJ2LhqN8bU0Oj7.jpg",
  //     "id": 539972,
  //     "title": "Kraven the Hunter",
  //     "original_title": "Kraven the Hunter",
  //     "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
  //     "poster_path": "/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       28,
  //       12,
  //       53
  //     ],
  //     "popularity": 2355.174,
  //     "release_date": "2024-12-11",
  //     "video": false,
  //     "vote_average": 6.3,
  //     "vote_count": 497
  //   },
  //   {
  //     "backdrop_path": "/px0YfXxWKclI0PVM79fOV6Kh2As.jpg",
  //     "id": 993710,
  //     "title": "Back in Action",
  //     "original_title": "Back in Action",
  //     "overview": "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
  //     "poster_path": "/mLxIlIf2Gopht23v5VFNpQZ2Rue.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       28,
  //       35
  //     ],
  //     "popularity": 302.432,
  //     "release_date": "2025-01-17",
  //     "video": false,
  //     "vote_average": 6.5,
  //     "vote_count": 71
  //   },
  //   {
  //     "backdrop_path": "/5OsiT39OiZNdD0v2LiAcI2TpSYj.jpg",
  //     "id": 95396,
  //     "name": "Severance",
  //     "original_name": "Severance",
  //     "overview": "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
  //     "poster_path": "/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       18,
  //       9648,
  //       10765
  //     ],
  //     "popularity": 497.444,
  //     "first_air_date": "2022-02-17",
  //     "vote_average": 8.4,
  //     "vote_count": 1412,
  //     "origin_country": [
  //       "US"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/87mebbBtoWzHV0kILgV6M7yIfun.jpg",
  //     "id": 93405,
  //     "name": "Squid Game",
  //     "original_name": "오징어 게임",
  //     "overview": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
  //     "poster_path": "/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "ko",
  //     "genre_ids": [
  //       10759,
  //       9648,
  //       18
  //     ],
  //     "popularity": 4965.829,
  //     "first_air_date": "2021-09-17",
  //     "vote_average": 7.851,
  //     "vote_count": 15050,
  //     "origin_country": [
  //       "KR"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/fQGrzO0Iwo7CO4b2zVdJLkcnhwK.jpg",
  //     "id": 125988,
  //     "name": "Silo",
  //     "original_name": "Silo",
  //     "overview": "In a ruined and toxic future, thousands live in a giant silo deep underground. After its sheriff breaks a cardinal rule and residents die mysteriously, engineer Juliette starts to uncover shocking secrets and the truth about the silo.",
  //     "poster_path": "/tlliQuCupf8fpTH7RAor3aKMGy.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       10765,
  //       18
  //     ],
  //     "popularity": 1438.948,
  //     "first_air_date": "2023-05-04",
  //     "vote_average": 8.2,
  //     "vote_count": 1273,
  //     "origin_country": [
  //       "US"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/uKb22E0nlzr914bA9KyA5CVCOlV.jpg",
  //     "id": 402431,
  //     "title": "Wicked",
  //     "original_title": "Wicked",
  //     "overview": "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
  //     "poster_path": "/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       18,
  //       10749,
  //       14
  //     ],
  //     "popularity": 1268.681,
  //     "release_date": "2024-11-20",
  //     "video": false,
  //     "vote_average": 7.1,
  //     "vote_count": 1322
  //   },
  //   {
  //     "backdrop_path": "/j67Wi1mzPxPVVybjmaIsvzsqFDH.jpg",
  //     "id": 240411,
  //     "name": "Dan Da Dan",
  //     "original_name": "ダンダダン",
  //     "overview": "In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!",
  //     "poster_path": "/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "ja",
  //     "genre_ids": [
  //       16,
  //       10759,
  //       35,
  //       10765
  //     ],
  //     "popularity": 236.361,
  //     "first_air_date": "2024-10-04",
  //     "vote_average": 8.8,
  //     "vote_count": 362,
  //     "origin_country": [
  //       "JP"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/1FxG2lmDYsCM1svJf7H79HNNwu2.jpg",
  //     "id": 215866,
  //     "name": "American Primeval",
  //     "original_name": "American Primeval",
  //     "overview": "A mother and son fleeing from their past form a found family while confronting a harsh landscape of freedom and cruelty in the American West.",
  //     "poster_path": "/ff0s9OHGNSZL6cVteIb7LNvTnJD.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       37,
  //       18,
  //       10759
  //     ],
  //     "popularity": 567.056,
  //     "first_air_date": "2025-01-09",
  //     "vote_average": 7.624,
  //     "vote_count": 97,
  //     "origin_country": [
  //       "US"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/uWOJbarUXfVf6B4o0368dh138eR.jpg",
  //     "id": 426063,
  //     "title": "Nosferatu",
  //     "original_title": "Nosferatu",
  //     "overview": "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
  //     "poster_path": "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       18,
  //       14,
  //       27
  //     ],
  //     "popularity": 482.671,
  //     "release_date": "2024-12-25",
  //     "video": false,
  //     "vote_average": 6.7,
  //     "vote_count": 1057
  //   },
  //   {
  //     "backdrop_path": "/dMloNvayweggmvv0UD0iOJIkkbH.jpg",
  //     "id": 1261501,
  //     "title": "Ad Vitam",
  //     "original_title": "Ad Vitam",
  //     "overview": "When he and his pregnant wife are attacked in their home, a former elite agent becomes trapped in a deadly manhunt tied to his own painful past.",
  //     "poster_path": "/8qJfjFhNwpTONNAoE6gUSx2yGpg.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "fr",
  //     "genre_ids": [
  //       53,
  //       18,
  //       80,
  //       28
  //     ],
  //     "popularity": 607.993,
  //     "release_date": "2025-01-09",
  //     "video": false,
  //     "vote_average": 6.4,
  //     "vote_count": 146
  //   },
  //   {
  //     "backdrop_path": "/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg",
  //     "id": 823219,
  //     "title": "Flow",
  //     "original_title": "Straume",
  //     "overview": "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
  //     "poster_path": "/imKSymKBK7o73sajciEmndJoVkR.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "lv",
  //     "genre_ids": [
  //       16,
  //       14,
  //       12
  //     ],
  //     "popularity": 643.907,
  //     "release_date": "2024-08-29",
  //     "video": false,
  //     "vote_average": 8.4,
  //     "vote_count": 789
  //   },
  //   {
  //     "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
  //     "id": 933260,
  //     "title": "The Substance",
  //     "original_title": "The Substance",
  //     "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
  //     "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       27,
  //       878
  //     ],
  //     "popularity": 724.732,
  //     "release_date": "2024-09-07",
  //     "video": false,
  //     "vote_average": 7.1,
  //     "vote_count": 3298
  //   },
  //   {
  //     "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
  //     "id": 939243,
  //     "title": "Sonic the Hedgehog 3",
  //     "original_title": "Sonic the Hedgehog 3",
  //     "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
  //     "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       28,
  //       878,
  //       35,
  //       10751
  //     ],
  //     "popularity": 2596.305,
  //     "release_date": "2024-12-19",
  //     "video": false,
  //     "vote_average": 7.574,
  //     "vote_count": 639
  //   },
  //   {
  //     "backdrop_path": "/6E0hbesJfpekAqL2AeHYukkHcbD.jpg",
  //     "id": 202879,
  //     "name": "Star Wars: Skeleton Crew",
  //     "original_name": "Star Wars: Skeleton Crew",
  //     "overview": "Four ordinary kids search for their home planet after getting lost in the Star Wars galaxy.",
  //     "poster_path": "/srQbJhLRKoAwRrNN5ga7webPHbC.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       10759,
  //       10765
  //     ],
  //     "popularity": 507.411,
  //     "first_air_date": "2024-12-02",
  //     "vote_average": 7.2,
  //     "vote_count": 180,
  //     "origin_country": [
  //       "US"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/wwARk7hRIfHfh2n2ubN6N7lvTne.jpg",
  //     "id": 710295,
  //     "title": "Wolf Man",
  //     "original_title": "Wolf Man",
  //     "overview": "With his marriage fraying, Blake persuades his wife Charlotte to take a break from the city and visit his remote childhood home in rural Oregon. As they arrive at the farmhouse in the dead of night, they're attacked by an unseen animal and barricade themselves inside the home as the creature prowls the perimeter. But as the night stretches on, Blake begins to behave strangely, transforming into something unrecognizable.",
  //     "poster_path": "/mQhUOaFTKzzxHCxr94bujYJcabf.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       27,
  //       53
  //     ],
  //     "popularity": 372.621,
  //     "release_date": "2025-01-15",
  //     "video": false,
  //     "vote_average": 7.016,
  //     "vote_count": 31
  //   },
  //   {
  //     "backdrop_path": "/haX32ZQxOgDWcJO5sTiTUEE1Ulr.jpg",
  //     "id": 1388694,
  //     "title": "The Calendar Killer",
  //     "original_title": "Sebastian Fitzeks Der Heimweg",
  //     "overview": "Klara is going to die today unless she kills her husband instead. The Calendar Killer has given her that impossible choice. When Jules starts his night shift at a telephone safety helpline for lonely women on their way home, Klara's call reaches him. He soon becomes her last hope for survival and races against time to save her.",
  //     "poster_path": "/bnciRmZZSdyqp7HcrAwNG0mObaP.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "de",
  //     "genre_ids": [
  //       80,
  //       53
  //     ],
  //     "popularity": 64.306,
  //     "release_date": "2025-01-15",
  //     "video": false,
  //     "vote_average": 6.5,
  //     "vote_count": 28
  //   },
  //   {
  //     "backdrop_path": "/seMRyWVwIVBWbC9xaMzDMZJ8fUH.jpg",
  //     "id": 131041,
  //     "name": "BLUE LOCK",
  //     "original_name": "ブルーロック",
  //     "overview": "After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to the win. The Japan Football Union is hell-bent on creating a striker who hungers for goals and thirsts for victory, and who can be the decisive instrument in turning around a losing match...and to do so, they've gathered 300 of Japan's best and brightest youth players. Who will emerge to lead the team...and will they be able to out-muscle and out-ego everyone who stands in their way?",
  //     "poster_path": "/fT9W86KFA9Khy2hIbkfClI8IYDH.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "ja",
  //     "genre_ids": [
  //       16,
  //       10759,
  //       18
  //     ],
  //     "popularity": 321.31,
  //     "first_air_date": "2022-10-09",
  //     "vote_average": 8.183,
  //     "vote_count": 387,
  //     "origin_country": [
  //       "JP"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/nxZDr6UZIhgYJev4yUzWTPZXQ3G.jpg",
  //     "id": 1101448,
  //     "title": "Unstoppable",
  //     "original_title": "Unstoppable",
  //     "overview": "With the unwavering love and support of his devoted mother Judy and the encouragement of his coaches, Anthony Robles fights through adversity to earn a spot on the Arizona State Wrestling team. But it will demand everything he has, physically and mentally, to achieve his ultimate quest to become an NCAA Champion.",
  //     "poster_path": "/xanYKxuFkDPrMngvm1NSHVGOEjS.jpg",
  //     "media_type": "movie",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       18
  //     ],
  //     "popularity": 29.127,
  //     "release_date": "2024-12-06",
  //     "video": false,
  //     "vote_average": 4.5,
  //     "vote_count": 25
  //   },
  //   {
  //     "backdrop_path": "/mh2UczqEXJJVgqohbyZbHTuxwhL.jpg",
  //     "id": 157741,
  //     "name": "Landman",
  //     "original_name": "Landman",
  //     "overview": "Set in the proverbial boomtowns of West-Texas and a modern-day tale of fortune-seeking in the world of oil rigs, the series is an upstairs/downstairs story of roughnecks and wildcat billionaires that are fueling a boom so big it’s reshaping our climate, our economy and our geopolitics.",
  //     "poster_path": "/rxWtATtTdwx0ERQjQ7BtVOMyq5r.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       18
  //     ],
  //     "popularity": 324.027,
  //     "first_air_date": "2024-11-17",
  //     "vote_average": 8,
  //     "vote_count": 106,
  //     "origin_country": [
  //       "US"
  //     ]
  //   },
  //   {
  //     "backdrop_path": "/j45FEq8BPUJDVm3cGIQye0tqPpL.jpg",
  //     "id": 157004,
  //     "name": "Goosebumps",
  //     "original_name": "Goosebumps",
  //     "overview": "A group of five high schoolers embark on a shadowy and twisted journey to investigate the tragic passing three decades earlier of a teen named Harold Biddle – while also unearthing dark secrets from their parents' past.",
  //     "poster_path": "/pMrMPlEJAGAKBUWJzeacIwjRU2C.jpg",
  //     "media_type": "tv",
  //     "adult": false,
  //     "original_language": "en",
  //     "genre_ids": [
  //       10759,
  //       10765,
  //       35
  //     ],
  //     "popularity": 122.453,
  //     "first_air_date": "2023-10-13",
  //     "vote_average": 7.2,
  //     "vote_count": 167,
  //     "origin_country": [
  //       "US"
  //     ]
  //   }
  // ]
  console.log(results);
  return (
    <>
      <Card results={results} />
    </>
  );
}
