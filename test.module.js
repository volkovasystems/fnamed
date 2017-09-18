"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "fnamed",
			"path": "fnamed/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/fnamed.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"fnamed": "fnamed"
		}
	@end-include
*/

const assert = require( "should/as-function" );
//: @server:
const fnamed = require( "./fnamed.js" );
//: @end-server

//: @client:
const fnamed = require( "./fnamed.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "fnamed", ( ) => {

	describe( "`fnamed( function test( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( fnamed( function test( ){ } ), true );
		} );
	} );

	describe( "`fnamed( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( fnamed( Error ), true );
		} );
	} );

	describe( "`fnamed( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( function( ){ } ), false );
		} );
	} );

	describe( "`fnamed( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( ( ) => { } ), false );
		} );
	} );

	describe( "`fnamed( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( ( entity ) => ( typeof entity == "string" ) ), false );
		} );
	} );

	describe( "`fnamed( 'function hello( ){ }' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( "function hello( ){ }" ), false );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "fnamed", ( ) => {

	describe( "`fnamed( function test( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( fnamed( function test( ){ } ), true );
		} );
	} );

	describe( "`fnamed( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( fnamed( Error ), true );
		} );
	} );

	describe( "`fnamed( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( function( ){ } ), false );
		} );
	} );

	describe( "`fnamed( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( ( ) => { } ), false );
		} );
	} );

	describe( "`fnamed( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( ( entity ) => ( typeof entity == "string" ) ), false );
		} );
	} );

	describe( "`fnamed( 'function hello( ){ }' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( fnamed( "function hello( ){ }" ), false );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "fnamed", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`fnamed( function test( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return fnamed( function test( ){ } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`fnamed( Error )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return fnamed( Error );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`fnamed( function( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return fnamed( function( ){ } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`fnamed( ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return fnamed( ( ) => { } );
				}

			).value;
			//: @end-ignore

			assert.equal( result, false );

		} );
	} );

	describe( "`fnamed( ( entity ) => ( typeof entity == 'string' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return fnamed( ( entity ) => ( typeof entity == "string" ) );
				}

			).value;
			//: @end-ignore

			assert.equal( result, false );

		} );
	} );

	describe( "`fnamed( 'function hello( ){ }' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return fnamed( "function hello( ){ }" );
				}

			).value;

			assert.equal( result, false );
			
		} );
	} );

} );
//: @end-bridge
