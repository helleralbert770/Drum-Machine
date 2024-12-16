import React, { useState, useEffect } from "react";

const drumSounds = [
  { key: "Q", id: "Heater 1", url: "url_to_audio_1" },
  { key: "W", id: "Heater 2", url: "url_to_audio_2" },
  { key: "E", id: "Heater 3", url: "url_to_audio_3" },
  { key: "A", id: "Heater 4", url: "url_to_audio_4" },
  { key: "S", id: "Clap", url: "url_to_audio_5" },
  { key: "D", id: "Open-HH", url: "url_to_audio_6" },
  { key: "Z", id: "Kick-n'-Hat", url: "url_to_audio_7" },
  { key: "X", id: "Kick", url: "url_to_audio_8" },
  { key: "C", id: "Closed-HH", url: "url_to_audio_9" },
];

function App() {
  const [display, setDisplay] = useState("");

  const playSound = (key, id) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0; // Reset playback to start
      audio.play();
      setDisplay(id);
    }
  };

  const handleKeyPress = (e) => {
    const drumPad = drumSounds.find((d) => d.key === e.key.toUpperCase());
    if (drumPad) {
      playSound(drumPad.key, drumPad.id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {drumSounds.map((sound) => (
          <button
            key={sound.key}
            className="drum-pad"
            id={sound.id}
            onClick={() => playSound(sound.key, sound.id)}
          >
            {sound.key}
            <audio className="clip" id={sound.key} src={sound.url}></audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
