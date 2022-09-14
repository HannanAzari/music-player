import React from "react";


const SongListItem = ({song, setCurrentSong, songs, setSongs}) => {
    
    const songSelect = () => {
        const selectedSong = songs.filter((item) => item.id === song.id);
        setCurrentSong(selectedSong[0]);

        const newSongs = songs.map((item) => {
            if(item.id === song.id) {
                return {
                    ...item,
                    active: true
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }

        });

        setSongs(newSongs);
    }
    
    
    return (
        <div onClick={songSelect} className={`song-item ${song.active  ? 'selected' : "" }`} >
            <img src={song.cover} alt='/'></img>
            <div className="song-description">
                 <h3>{song.name}</h3>
                 <h5>{song.artist}</h5>
            </div>
            
            
        </div>
    );
};

export default SongListItem;