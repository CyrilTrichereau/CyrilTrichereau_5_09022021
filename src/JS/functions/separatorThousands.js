// -------
// MAIN FUNCTION
// -------

function separatorThousands(numberSource, b,) {
    numberSource = '' + numberSource;
    b = b || ' ';
    var c = '',
        d = 0;
    while (numberSource.match(/^0[0-9]/)) {
        numberSource = numberSource.substr(1);
    }
    for (var i = numberSource.length-1; i >= 0; i--) {
      c = (d != 0 && d % 3 == 0) ? numberSource[i] + b + c : numberSource[i] + c;
      d++;
    }
    return c;
  }


// -------
// EXPORTS
// -------
export default separatorThousands;
