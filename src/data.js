import { v4 as uuidv4 } from 'uuid';
import Music1 from './asset/1.mp3'
import Music2 from './asset/2.mp3'
import Music3 from './asset/3.mp3'
import Music4 from './asset/4.mp3'
import Music5 from './asset/5.mp3'
import Music6 from './asset/6.mp3'
import Music7 from './asset/7.mp3'
import Music8 from './asset/8.mp3'
import Music9 from './asset/9.mp3'
import Music10 from './asset/10.mp3'
import Music11 from './asset/11.mp3'
import Img1 from './asset/images/1.jpeg'
import Img2 from './asset/images/2.jpeg'
import Img3 from './asset/images/3.jpeg'
import Img4 from './asset/images/4.jpeg'
import Img5 from './asset/images/5.jpeg'
import Img6 from './asset/images/6.jpeg'
import Img7 from './asset/images/7.jpeg'
import Img8 from './asset/images/8.jpeg'
import Img9 from './asset/images/9.jpeg'
import Img10 from './asset/images/10.jpeg'
import Img11 from './asset/images/11.jpeg'

export default function musicData(){
    return [
        {
            name: 'Desire',
            cover: Img1,
            artist: 'Psalm Trees, Guiaume Muschalle',
            audio: Music1,
            color: ['FCF8EE', 'CE2E2B'],
            id: uuidv4(),
            active: true,
        },
        {
            name: 'Highs and Lows',
            cover: Img2,
            artist: 'Kissamile',
            audio: Music2,
            color: ['65383A', 'D0906D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Home Court',
            cover: Img3,
            artist: 'blue wednesday, shopan',
            audio: Music3,
            color: ['351715', 'FBA04D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Close To You',
            cover: Img4,
            artist: 'PYC Music',
            audio: Music4,
            color: ['FCF8EE', 'CE2E2B'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Sundown',
            cover: Img5,
            artist: 'Schematist',
            audio: Music5,
            color: ['65383A', 'D0906D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Upbeat',
            cover: Img6,
            artist: '2TECH',
            audio: Music6,
            color: ['351715', 'FBA04D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Tropical Love',
            cover: Img7,
            artist: 'Mixaund',
            audio: Music7,
            color: ['FCF8EE', 'CE2E2B'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Evening Nights',
            cover: Img8,
            artist: 'Mehul Sharma',
            audio: Music8,
            color: ['65383A', 'D0906D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Seashells',
            cover: Img9,
            artist: 'Purrple Cat',
            audio: Music9,
            color: ['351715', 'FBA04D'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Please Do Not Forget Me',
            cover: Img10,
            artist: 'FSM Team feat Jazzy',
            audio: Music10,
            color: ['FCF8EE', 'CE2E2B'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Lost In Thought',
            cover: Img11,
            artist: 'Ghostrifter Official',
            audio: Music11,
            color: ['65383A', 'D0906D'],
            id: uuidv4(),
            active: false,
        },
        
       
    ]
}
