"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "fnamed",
			"path": "fnamed/fnamed.js",
			"file": "fnamed.js",
			"module": "fnamed",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/fnamed.git",
			"test": "fnamed-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Checks if method has the given name.

		If the method has no name, but the function structure has then
			it will still return true based on the given name.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"protype": "protype",
			"stringe": "stringe",
			"truly": "truly"
		}
	@end-include
*/

const falzy = require( "falzy" );
const protype = require( "protype" );
const stringe = require( "stringe" );
const truly = require( "truly" );

const FUNCTION_NAME_PATTERN = /^function\s*([a-zA-Z_][a-zA-Z0-9_]*)?\s*\(.*?\)\s*\{.*?\}$/m;

const fnamed = function fnamed( method, name ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"name": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( method ) || !protype( method, FUNCTION ) ){
		return false;
	}

	if( falzy( name ) && truly( method.name ) && protype( method.name, STRING ) ){
		return true;
	}

	if( falzy( name ) && truly( name = stringe( method ).match( FUNCTION_NAME_PATTERN )[ 1 ] ) ){
		return true;
	}

	if( falzy( name ) || !protype( name, STRING ) ){
		return false;
	}

	if( falzy( method.name ) || !protype( method.name, STRING ) ){
		return false;
	}

	if( method.name == name ){
		return true;
	}

	if( method.name != name ){
		return false;
	}

	if( stringe( method ).match( FUNCTION_NAME_PATTERN )[ 1 ] == name ){
		return true;
	}

	return false;
};

module.exports = fnamed;
