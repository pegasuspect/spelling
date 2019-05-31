# spelling
A simple speller for people having difficulty finding words.

[![asciicast](https://asciinema.org/a/249458.svg)](https://asciinema.org/a/249458)

## Dependencies
Expected installed programs are GIT, NPM, nodeJS.

### Intended use
This code is intended to be used in terminal/command line/bash in unix systems.

## Installation
Enter these commands in Terminal:
```bash
# Clone the repository
git clone https://github.com/pegasuspect/spelling.git
cd spelling
npm install
echo 'test' | node index.js
echo 'Philanthropy' | node index.js
echo 'Name Lastname' | node index.js
```

You may also define a bash method, like an alias to call from. Such as:
```bash
spell () 
{ 
    echo $* | node /FIND_YOUR_FULL_PATH_TO_THIS_FOLDER/index.js
}
```
You should change **FIND_YOUR_FULL_PATH_TO_THIS_FOLDER** with your own full_path. 
Mine was something like `/Users/username/spelling`
For that `pwd` command is useful.
```bash
pwd
```

