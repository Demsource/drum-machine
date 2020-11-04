const drumPad = [
    {
        key: 'Q',
        audio: './audio/bonang_gamelan_hit_soft.mp3',
        id: 'bonang_gamelan_hit_soft',
        text: 'Bonang Gamelan Hit Soft'
    },
    {   key: 'W',
        audio: './audio/gong_gamelan_hit_soft.mp3',
        id: 'audio/gong_gamelan_hit_soft',
        text: 'Gong Gamelan Hit Soft'
    },
    {
        key: 'E',
        audio: './audio/gong_small_gamelan_hit_soft.mp3',
        id: 'gong_small_gamelan_hit_soft',
        text: 'Gong Small Gamelan Hit Soft'
    },
    {   key: 'A',
        audio: './audio/drum_tom_plastic.mp3',
        id: 'drum_tom_plastic',
        text: 'Drum Tom Plastic'
    },
    {
        key: 'S',
        audio: './audio/cymbal_crash_tap.mp3',
        id: 'cymbal_crash_tap',
        text: 'Cymbal Crash Tap'
    },
    {   key: 'D',
        audio: './audio/waterphone_hit_condenser.mp3',
        id: 'waterphone_hit_condenser',
        text: 'Waterphone Hit Condenser'
    },
    {
        key: 'Z',
        audio: './audio/toy_drum_hit.mp3',
        id: 'toy_drum_hit',
        text: 'Toy Drum Hit'
    },
    {   key: 'X',
        audio: './audio/plastic_hit_single_strike.mp3',
        id: 'plastic_hit_single_strike',
        text: 'Plastic Hit Single Strike'
    },
    {
        key: 'C',
        audio: './audio/open_hi_hat.mp3',
        id: 'open_hi_hat',
        text: 'Open Hi Hat'
    }    
]
// “Sound effects obtained from https://www.zapsplat.com “
    
let drum = document.getElementById('drum');

drumPad.map(flatPad => {
    let display = document.getElementById('display');
    let button = document.createElement('button');
    let audio = document.createElement('audio');

    button.setAttribute('class', 'drum-pad btn btn-block btn-info');
    button.setAttribute('id', flatPad.id);
    button.innerText = flatPad.key;

    audio.setAttribute('class', 'clip');
    audio.setAttribute('id', flatPad.key);
    audio.setAttribute('src', flatPad.audio);

    button.appendChild(audio);
    drum.appendChild(button);

    let getButton = document.getElementById(flatPad.id);
    let getAudio = document.getElementById(flatPad.key);

    function play(e) {
        e.preventDefault();
        getAudio.currentTime = 0;
        getAudio.play();
        display.innerText = flatPad.text;
    }

    getButton.addEventListener('click', event => play(event));
    document.addEventListener('keyup', event => {
        if(event.code == 'Key' + flatPad.key) {
            play(event);
        }
    })
})