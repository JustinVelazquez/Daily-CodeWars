// code here
class Song {
    constructor(title, artist){
    this.title = title,
    this.artist = artist,
    this.listeners = new Set()
   }
    
    howMany(people){
      let oldSize = this.listeners.size
      people.map(p => this.listeners.add(p.toLowerCase()))
      return this.listeners.size - oldSize
    }
  }