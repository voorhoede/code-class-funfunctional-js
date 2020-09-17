import {
  pipe,
  split,
  map,
  match,
  head,
  applySpec,
  addIndex,
  last,
  add,
} from 'ramda';
import * as Tone from 'tone';

const { Time } = Tone;

const parseName = pipe(
  match(/^[A-G](b|#)?/),
  head,
);

const parseOctave = pipe(
  match(/\d*(?=@)/),
  Number,
);

const parseDuration = pipe(
  split('@'),
  last,
);

const parseTime = (note, index, notes) => notes
  .slice(0, index)
  // map over the values with `parseDuration` and then `Time`
  // bonus, log the output before calling reduce with Ramda's `tap`
  .reduce(add, 0);

const arrayMap = addIndex(map);

const parseShorthand = pipe(
  split(/[ ,]+/),
  arrayMap(
    applySpec({
      name: parseName,
      octave: parseOctave,
      length: parseDuration,
      time: parseTime,
    })
  ),
);

document.querySelector('[data-play-tunes]').addEventListener('click', async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();

    const tunes = parseShorthand(
        `E5@16n E5@8n E5@8n C5@16n E5@8n G5@4n G4@4n
        C5@8n. G4@8n. E4@8n. A4@8n B4@8n Bb4@16n A4@8n
        G4@8t E5@8t G5@8t A5@8n F5@16n G5@8n
        E5@8n C5@16n D5@16n B4@8n.
        C5@8n. G4@8n. E4@8n. A4@8n B4@8n Bb4@16n A4@8n
        G4@8t E5@8t G5@8t A5@8n F5@16n G5@8n
        E5@8n C5@16n D5@16n B4@8n.`
    );

    tunes.forEach((note) => {
        synth.triggerAttackRelease(
            `${note.name}${note.octave}`, '16n', `+${note.time}`
        );
    });
});
