function letterFinder(word, match){
    for(var i=0;i<=word.length;i++){
        if(word[i] == match){
            console.log('FOund the', match, 'at', i);
        }else{
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test",'t');