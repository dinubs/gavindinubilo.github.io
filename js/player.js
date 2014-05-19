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
  var songs = [{'title': 'The Longest Text Message', 'src': '1.mp3', 'duration': 5},
               {'title': 'Crawl', 'src': '2.mp3', 'duration': 209},
               {'title': 'Worldstar', 'src': '3.mp3', 'duration': 244},
               {'title': 'Dial Up', 'src': '4.mp4', 'duration': 45}
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
      ctx.strokeStyle= getRandomColor();
        // dancer
    // .waveform( waveform, { strokeStyle: '#666', strokeWidth: 10});
    },
    offKick: function() {
      // ctx.strokeStyle = getRandomColor();
      // console.log(dancer.getFrequency(400));
      dancer.waveform.spacing = dancer.getFrequency(400, 800);
      // ctx.strokeStyle = "#123456";
      ctx.strokeStyle= getRandomColor();
    //       dancer
    // .waveform( waveform, { strokeStyle: '#666', strokeWidth: 10});
    }
  }).on();

  dancer
    .waveform( waveform, { strokeStyle: '#666', strokeWidth: 10 });

  Dancer.isSupported() || loaded();
  !dancer.isLoaded() ? dancer.bind( 'loaded', loaded ) : loaded();

  /*
   * Loading
   */
   function nextSong () {
    dancer.pause();
    dancer.audio.currentTime = dancer.audio.duration;
        // document.getElementsByTagName('audio')[i].src = '';
        i = i + 1;
        console.log(i);
        dancer.load( document.getElementsByTagName('audio')[i] );
        window.dancer = dancer;
        length = dancer.audio.duration;
        console.log(length);
    dancer.onceAt(length - 0.1, function() {
      // Let's set up some things once at 10 seconds
          nextSong();
        });
    dancer.play();
  }
  function prevSong () {
        dancer.pause();
        // dancer.audio.currentTime = 0;
        // document.getElementsByTagName('audio')[i].src = '';
        i = i - 1;
        console.log(i);
        dancer.load( document.getElementsByTagName('audio')[i] );
        window.dancer = dancer;
        length = dancer.audio.duration;
        console.log(length);
    dancer.onceAt(length - 1, function() {
      // Let's set up some things once at 10 seconds
          nextSong();
        });
    dancer.play();
  }

  function loaded () {
    var
      loading = document.getElementById( 'loading' ),
      pause = document.getElementById( 'pause' ),
      prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      prAnchor = document.createElement('A'),
      nAnchor = document.createElement('A'),
      pAnchor  = document.createElement('A'),
      anchor  = document.createElement('A'),
      supported = Dancer.isSupported(),
      p;

    anchor.appendChild( document.createTextNode( supported ? 'Play!' : 'Close' ) );
    anchor.setAttribute( 'href', '#' );
    pAnchor.appendChild( document.createTextNode('Pause' ) );
    pAnchor.setAttribute( 'href', '#' );
    nAnchor.appendChild(document.createTextNode('Next'));
    prAnchor.appendChild(document.createTextNode('Prev'));
    nAnchor.setAttribute('href', '#');
    prAnchor.setAttribute('href', '#');
    pause.innerHTML = '';
    pause.appendChild( pAnchor );
    loading.innerHTML = '';
    loading.appendChild( anchor );
    prev.innerHTML = '';
    next.innerHTML = '';
    prev.appendChild(prAnchor);
    next.appendChild(nAnchor);

    if ( !supported ) {
      p = document.createElement('P');
      p.appendChild( document.createTextNode( 'Your browser does not currently support either Web Audio API or Audio Data API. The audio may play, but the visualizers will not move to the music; check out the latest Chrome or Firefox browsers!' ) );
      loading.appendChild( p );
    }
    var pause = true;
    pAnchor.addEventListener( 'click', function () {
      if (pause) {dancer.pause();pause = false}else {dancer.play(); pause = true;};
    });
    anchor.addEventListener( 'click', function () {
      dancer.play();
      document.getElementById('loading').style.display = 'none';
      document.getElementById('prev').style.display = 'inline-block';
      document.getElementById('pause').style.display = 'inline-block';
      document.getElementById('next').style.display = 'inline-block';
    });
    prAnchor.addEventListener('click', function() {
      prevSong();
    });
    nAnchor.addEventListener('click', function() {
      nextSong();
    });
  }
  
  dancer.load(AUDIO_FILE);
  var length = dancer.audio.duration;
  console.log(length);
  dancer.onceAt(length - 1, function() {
      nextSong();
  });
  window.dancer = dancer;

})();
