# Drum Machine

A fully functional Drum Machine built with React, HTML, CSS, and JavaScript. This project fulfills all user stories outlined by FreeCodeCamp for the Frontend Libraries certification.

## Features

- **Interactive UI**: Clickable drum pads and keyboard support for sound triggering.
- **Real-Time Display**: Shows the name of the triggered sound.
- **Responsive Design**: Mobile and desktop-friendly layout.
- **Test Compatible**: Passes all FCC tests for the Drum Machine project.

## User Stories

1. The app includes an outer container with `id="drum-machine"` that contains all elements.
2. A `#display` element shows the name of the currently triggered sound.
3. The app includes 9 clickable drum pads with:
   - Class name `drum-pad`.
   - Unique `id` describing the audio clip.
   - Inner text corresponding to keyboard keys `Q, W, E, A, S, D, Z, X, C`.
4. Each `.drum-pad` contains an HTML5 `<audio>` element with:
   - `src` pointing to the audio file.
   - Class name `clip`.
   - `id` matching the parent `.drum-pad`'s text (e.g., `id="Q"`).
5. Clicking a `.drum-pad` triggers the corresponding audio clip.
6. Pressing the associated keyboard key triggers the same audio clip.
7. Triggering a `.drum-pad` updates the `#display` with the sound's name.

## Audio Samples

The drum machine includes the following sounds:

- Heater 1
- Heater 2
- Heater 3
- Heater 4
- Clap
- Open-HH
- Kick-n'-Hat
- Kick
- Closed-HH

## How to Run the Project

### Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/drum-machine.git
   cd drum-machine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling.
- **JavaScript**: For interactivity.
- **FreeCodeCamp Test Suite**: To ensure compatibility with project requirements.


