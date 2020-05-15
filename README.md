# leny/animalese

> A small "vocoder" in Animalese (Animal Crossing), made with React

* * *

TODO

### Infos

Command used to generate the audio assets (on macOS):

```
say -v "Amelie" -o a.aiff a && ffmpeg -i a.aiff -af atempo=3.00,asetrate=44100\*0.75,aresample=44100 a.mp3 && rm a.aiff
```

* * *
2020, [leny](https://leny.me)