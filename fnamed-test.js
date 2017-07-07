
const assert = require( "assert" );
const fnamed = require( "./fnamed.js" );

assert.equal( fnamed( function test( ){ } ), true, "should be true" );

assert.equal( fnamed( Error ), true, "should be true" );

assert.equal( fnamed( function( ){ } ), false, "should be false" );

assert.equal( fnamed( ( ) => { } ), false, "should be false" );

assert.equal( fnamed( ( entity ) => ( typeof entity == "string" ) ), false, "should be false" );

assert.equal( fnamed( "function hello( ){ }" ), false, "should be false" );

console.log( "ok" );
