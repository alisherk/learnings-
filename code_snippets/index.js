const count = 2; 
const limitBy = 10; 

[...Array(Math.ceil(count / limitBy)).keys()].map((item, index) => {
   
})

const episodesForDisplay = recentEpisodes?.map((episode) =>
(({
  air_date: airDate,
  color,
  episode_number: episodeNumber,
  season_number: seasonNumber,
  showId,
  showName,
}) => ({
  color,
  date: airDate,
  extendedProps: {
    showId,
  },
  title: `${showName} S${seasonNumber} E${episodeNumber}`,
}))(episode)
);
    
