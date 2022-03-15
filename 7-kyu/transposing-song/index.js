function transpose(song, interval) {
  const sharps = 'A, A#, B, C, C#, D, D#, E, F, F#, G, G#'.split(', '),
    flats = 'A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab'.split(', ');

  //    console.log(sharps)
  let notes = song.map((n) => (n[1] == 'b' ? flats : sharps).indexOf(n));
  //   console.log(notes)

  return notes.map((n) => sharps[(n + 12 + interval) % 12]);
}
