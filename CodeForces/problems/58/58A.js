let input = require('fs').readFileSync(0,'utf8').trim();

if( /h.*e.*l.*l.*o/.test( input ) ){
  console.log( "YES" );
}else{
  console.log("NO");
}
