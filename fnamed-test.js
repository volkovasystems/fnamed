
const fnamed = require( "./fnamed.js" );

console.log( fnamed( function( ){ } ) );
console.log( fnamed( function hello( ){ } ) );
console.log( fnamed( function hello( ){ }, "yeah" ) );
console.log( fnamed( function hello( ){ }, "hello" ) );
