function writeCards( names, action ) {
    let thankYou = []
    for ( let i = 0; i < names.length; i++ ) {
      thankYou.push( `Thank you, ${names[i]}, for the wonderful ${action} gift!` );
    }
    return thankYou;
  }

  function countDown(number) {
    while (number > 0 ) {
      console.log(number);
      number -= 1;
    }
    console.log(number);
  }