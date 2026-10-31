var isAnagram = function(s, t) {
  if(s.length !== t.length) {return false};

  const trackBox = new Map();

  for(let i = 0; i < s.length ; i ++){
    if(trackBox.get(s[i])){
        trackBox.set(s[i], trackBox.get(s[i]) + 1);
    }else{trackBox.set(s[i], 1)}
  }

    for(let j = 0; j < t.length ; j ++){
    if(trackBox.get(t[j])){
        trackBox.set(t[j], trackBox.get(t[j]) - 1);
    }
  }

  const sumOfTrackBox = Array.from(trackBox.values()).reduce((previousValue = 0, currentValue) => previousValue + currentValue)
  if(sumOfTrackBox){
    return false
  }
  return true
};