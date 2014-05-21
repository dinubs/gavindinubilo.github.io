(function () {

  var
    AUDIO_FILE = document.getElementById('1'),
    i = 0,
    waveform = document.getElementById( 'waveform' ),
    ctx = waveform.getContext( '2d' ),
    dancer, kick;
    ctx.canvas.width  = window.innerWidth;
    // ctx.canvas.height = window.innerHeight;
  /*
   * Dancer.js magic
   */
  var songs = ['Level Up - Childish Gambino',
               'Do or Die (feat. Childish Gambino) - Flux Pavillion',
               'Monster (Meg & Dia) - DotEXE',
               'All is fair in love and brostep - Skrillex'
              ];
  var colors = ['#123456',
                '#bada55',
                '#00FFFF',
                '#FFFF00',
                '#00FF00',
                '#FF007C',
                '#fff',
                '#C534FF',
                '#FF3C32',
                '#29FF3C'
                ];
  Dancer.setOptions({
    flashSWF : 'lib/soundmanager2.swf',
    flashJS  : 'lib/soundmanager2.js'
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }

  dancer = new Dancer();
  kick = dancer.createKick({
    onKick: function() {
      // ctx.strokeStyle= getRandomColor();
      ctx.strokeStyle = '#fff';
    },
    offKick: function() {
      dancer.waveform.spacing = dancer.getFrequency(400, 800);
      // ctx.strokeStyle= getRandomColor();
      ctx.strokeStyle = '#123456';
    }
  }).on();

  dancer
    .waveform( waveform, { strokeStyle: '#666', strokeWidth: 3 });

  Dancer.isSupported() || loaded();
  !dancer.isLoaded() ? dancer.bind( 'loaded', loaded ) : loaded();

  /*
   * Loading
   */
   function nextSong () {
    dancer.pause();
    dancer.audio.currentTime = dancer.audio.duration;
    i = i + 1;
    document.getElementById('song').innerText = songs[i];
    console.log(i);
    dancer.load( document.getElementsByTagName('audio')[i] );
    window.dancer = dancer;
    length = dancer.audio.duration;
    console.log(length);
    dancer.onceAt(length - 0.1, function() {
          nextSong();
        });
    dancer.play();
  }

  function loaded () {
    var
      loading = document.getElementById( 'loading' ),
      pause = document.getElementById( 'pause' ),
      next = document.getElementById('next'),
      nAnchor = document.createElement('A'),
      hide = document.getElementById('hide'),
      pAnchor  = document.createElement('A'),
      anchor  = document.createElement('A'),
      supported = Dancer.isSupported(),
      p;

    anchor.appendChild( document.createTextNode( supported ? 'Play!' : 'Close' ) );
    anchor.setAttribute( 'href', '#' );
    pAnchor.appendChild( document.createTextNode('Pause' ) );
    pAnchor.setAttribute( 'href', '#' );
    nAnchor.appendChild(document.createTextNode('Next'));
    nAnchor.setAttribute('href', '#');
    pause.innerHTML = '';
    pause.appendChild( pAnchor );
    loading.innerHTML = '';
    loading.appendChild( anchor );
    next.innerHTML = '';
    next.appendChild(nAnchor);

    if ( !supported ) {
      p = document.createElement('P');
      p.appendChild( document.createTextNode( 'Your browser does not currently support either Web Audio API or Audio Data API. The audio may play, but the visualizers will not move to the music; check out the latest Chrome or Firefox browsers!' ) );
      loading.appendChild( p );
    }
    var pause = true;
    pAnchor.addEventListener( 'click', function () {
      if (pause) {dancer.pause();pause = false; pAnchor.innerText = 'Play';}else {dancer.play(); pause = true;pAnchor.innerText = 'Pause';};
      
    });
    var hidden = false;
    hide.addEventListener('click', function() {
      if(hidden) {document.getElementById('info').style.display = 'block';hidden=false; hide.innerText = 'Hide Info';} 
      else {document.getElementById('info').style.display = 'none';hidden=true; hide.innerText = 'Show Info';}
    });
    anchor.addEventListener( 'click', function () {
      dancer.play();
      document.getElementById('loading').style.display = 'none';
      document.getElementById('song').style.display = 'inline-block';
      document.getElementById('pause').style.display = 'inline-block';
      document.getElementById('next').style.display = 'inline-block';
      document.getElementById('hideInfo').style.display = 'block';
    });
  
    nAnchor.addEventListener('click', function() {
      nextSong();
    });
  }
  
  dancer.load(AUDIO_FILE);
  var length = dancer.audio.duration;
  console.log(length);
  document.getElementById('song').innerText = songs[i];
  dancer.onceAt(12, function() {
    kick.offKick = function() {
      
      dancer.waveform.spacing = dancer.getFrequency(400, 800);
      // ctx.strokeStyle= getRandomColor();
      ctx.strokeStyle = '#ff007c';
    };
  console.log("15s");

  }).onceAt(24, function() {
    kick.offKick = function() {
      ctx.strokeStyle= getRandomColor();
    };
  }).onceAt(length - 1, function() {
      nextSong();
  });
  window.dancer = dancer;

})();
