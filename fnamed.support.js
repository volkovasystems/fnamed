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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"fname": "fname",
              			"protype": "protype",
              			"truly": "truly"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var fname = require("fname");
var protype = require("protype");
var truly = require("truly");

var fnamed = function fnamed(method, name) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"method:required": [
                                            				"function",
                                            				"string"
                                            			],
                                            			"name": "string"
                                            		}
                                            	@end-meta-configuration
                                            */

	if (falzy(method) || !protype(method, FUNCTION + STRING)) {
		return false;
	}

	if (falzy(name) && truly(fname(method))) {
		return true;
	}

	if (falzy(name) || (typeof name === "undefined" ? "undefined" : (0, _typeof3.default)(name)) != STRING) {
		return false;
	}

	return fname(method) == name;
};

module.exports = fnamed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuYW1lZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsImZuYW1lIiwicHJvdHlwZSIsInRydWx5IiwiZm5hbWVkIiwibWV0aG9kIiwibmFtZSIsIkZVTkNUSU9OIiwiU1RSSU5HIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxJQUF6QixFQUErQjtBQUM3Qzs7Ozs7Ozs7Ozs7O0FBWUEsS0FBSVAsTUFBT00sTUFBUCxLQUFtQixDQUFDSCxRQUFTRyxNQUFULEVBQWlCRSxXQUFXQyxNQUE1QixDQUF4QixFQUE4RDtBQUM3RCxTQUFPLEtBQVA7QUFDQTs7QUFFRCxLQUFJVCxNQUFPTyxJQUFQLEtBQWlCSCxNQUFPRixNQUFPSSxNQUFQLENBQVAsQ0FBckIsRUFBK0M7QUFDOUMsU0FBTyxJQUFQO0FBQ0E7O0FBRUQsS0FBSU4sTUFBT08sSUFBUCxLQUFpQixRQUFPQSxJQUFQLHVEQUFPQSxJQUFQLE1BQWVFLE1BQXBDLEVBQTRDO0FBQzNDLFNBQU8sS0FBUDtBQUNBOztBQUVELFFBQVNQLE1BQU9JLE1BQVAsS0FBbUJDLElBQTVCO0FBQ0EsQ0ExQkQ7O0FBNEJBRyxPQUFPQyxPQUFQLEdBQWlCTixNQUFqQiIsImZpbGUiOiJmbmFtZWQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJmbmFtZWRcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZm5hbWVkL2ZuYW1lZC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJmbmFtZWQuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJmbmFtZWRcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZm5hbWVkLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJmbmFtZWQtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRDaGVja3MgaWYgbWV0aG9kIGhhcyB0aGUgZ2l2ZW4gbmFtZS5cclxuXHJcblx0XHRJZiB0aGUgbWV0aG9kIGhhcyBubyBuYW1lLCBidXQgdGhlIGZ1bmN0aW9uIHN0cnVjdHVyZSBoYXMgdGhlblxyXG5cdFx0XHRpdCB3aWxsIHN0aWxsIHJldHVybiB0cnVlIGJhc2VkIG9uIHRoZSBnaXZlbiBuYW1lLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIixcclxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcblxyXG5jb25zdCBmbmFtZWQgPSBmdW5jdGlvbiBmbmFtZWQoIG1ldGhvZCwgbmFtZSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwic3RyaW5nXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcInN0cmluZ1wiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBtZXRob2QgKSB8fCAhcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiArIFNUUklORyApICl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIG5hbWUgKSAmJiB0cnVseSggZm5hbWUoIG1ldGhvZCApICkgKXtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCBuYW1lICkgfHwgdHlwZW9mIG5hbWUgIT0gU1RSSU5HICl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKCBmbmFtZSggbWV0aG9kICkgPT0gbmFtZSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmbmFtZWQ7XHJcbiJdfQ==
//# sourceMappingURL=fnamed.support.js.map
