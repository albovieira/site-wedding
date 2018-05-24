export default {
  enviroment: 'dev',
  weddingAPI: {
    url: 'http://localhost:3000/',
    endpoints: {
      guests: 'guests',
      wall_messages: 'wall-messages',
      wished_musics: 'wished-musics'
    }
  },
  uber: {
    endpoint: 'https://api.uber.com/v1.2/estimates/price',
    token: 'EiSC1gcBMNpsmN4PC5GlEkQ6WjQuU0amxa7HLRC_'
  },
  spotify: {
    token:
      'BQD3-GI_lXZStXWgBBidWJdxPXOWOaQWzw41yzGnMLKTedTQlum5X5dmgCgKAKtMmbFyCrBDvxSQwGMc7ZpaVsMdBy_yMaBp99oKXk9dLPMOtFmO3VZwr_wY3X28uBaYtBTh4fwt4qtgYyvvSqVaAHJZQE4TCeRMlVU_283oqOSsfqrdHzUYsw'
  },
  google: {
    maps: 'https://maps.googleapis.com/maps/api/',
    key: 'AIzaSyBtvGy-VKFY8WR4D6O5OmWY02InfLtFOuI'
  }
};
