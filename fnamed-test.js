
const assert = require( "assert" );
const fnamed = require( "./fnamed.js" );

assert.equal( fnamed( function( ){ } ), false, "should be false" );
assert.equal( fnamed( ( ) => { } ), false, "should be false" );
assert.equal( fnamed( "123" ), false, "should be false" );
assert.equal( fnamed( "function hello( ){ }" ), false, "should return false" );
assert.equal( fnamed( function test( ){ } ), true, "should be true" );
assert.equal( fnamed( "hello" ), true, "should be true" );
assert.equal( fnamed( function hello( ){ }, "hello" ), true, "should return true" );

console.log( "ok" );
