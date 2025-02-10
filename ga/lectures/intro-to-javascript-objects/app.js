const music = {
    currentTrack: 'Just Ken',
    trackIdx: 0,
    currentPlaylist : [
        {
          title: 'Just Ken',
          artist: 'Ryan Gosling',
          album: 'Barbie The Album',
          length: '3:43',
        }, {
          title: 'Hey Blondie',
          artist: 'Dominic Fike',
          album: 'Barbie The Album',
          length: '2:21',
        }, {
          title: 'What Was I Made For',
          artist: 'Billie Eilish',
          album: 'Barbie The Album',
          length: '3:42',
        }, {
          title: 'Dance The Night',
          artist: 'Dua Lipa',
          album: 'Barbie The Album',
          length: '2:56',
        }
      ],
          volume: 70,
    mute() {
      music.volume = 0;
    },
    unMute(){music.volume=70},
    next() {
      music.trackIdx += 1;
      music.currentTrack=music.currentPlaylist[music.trackIdx];
    },
  };
 
  music.volume = 60;
//music.mute();
//music.unMute()
music.next();
music.next();
console.log(music);
console.log(music.currentPlaylist[music.trackIdx]);
//console.log(music.currentPlaylist[music.currentPlaylist.find('What Was I Made For')]);



//music object > playlist array > song object


for (let i = 0; i<music.currentPlaylist.length;i++){
 music.currentPlaylist[i].length===('3:42') && (music.currentPlaylist[i].length = ('3:54') );
}
console.log(music.currentPlaylist);
// console.log(music.currentPlaylist.forEach(obj=>(obj.forEach(newObj=>newObj === '3:42' && (newObj.length = '3:54')))));
// numArrays.forEach(numArray => numArray.forEach(numArr => numArr === 66 && (num= numArr)))
//console.log(music.currentPlaylist)

