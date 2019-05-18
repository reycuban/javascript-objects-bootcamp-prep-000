var playlist = {
<<<<<<< HEAD
  emimen: "GOd Rap"

};

//function updatePlaylist(playlist, artisName, songTitles) {
  //Object.assign({}, playlist{ elB: "cubalibre"});//
  //playlist[] = "sometimes";
  //return playlist;
  playlist[artisName] = songTitles;
  //playlist['My Bloody Valentine'] = 'Sometimes';
 // return playlist;
//}

//function removeFromPlaylist(playlist, artisName) {
  //delete playlist.artisName;
  //return playlist;
//}



 function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

 function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
=======
  drake: "Nonstop",
  JayZ: "Lucifer",
  eminem: "God Rap",
  lilwayne: "Milli"
};

function updatePlaylist(playlist, elB, cubalibre) {
  //Object.assign({}, playlist{ elB: "cubalibre"});//
  playlist[elB] = "cubalibre";
  return playlist;
}

function removeFromPlaylist(playlist, drake) {
  delete playlist.drake;
>>>>>>> f8c44a941ee83a6fe16931be673aaa2622adafc1
  return playlist;
}