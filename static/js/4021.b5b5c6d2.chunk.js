(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[4021],{54021:function(_,I,n){!function(_){"use strict";_.defineMode("ntriples",(function(){var _={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function I(I,n){var e,R=I.location;e=R==_.PRE_SUBJECT&&"<"==n?_.WRITING_SUB_URI:R==_.PRE_SUBJECT&&"_"==n?_.WRITING_BNODE_URI:R==_.PRE_PRED&&"<"==n?_.WRITING_PRED_URI:R==_.PRE_OBJ&&"<"==n?_.WRITING_OBJ_URI:R==_.PRE_OBJ&&"_"==n?_.WRITING_OBJ_BNODE:R==_.PRE_OBJ&&'"'==n?_.WRITING_OBJ_LITERAL:R==_.WRITING_SUB_URI&&">"==n||R==_.WRITING_BNODE_URI&&" "==n?_.PRE_PRED:R==_.WRITING_PRED_URI&&">"==n?_.PRE_OBJ:R==_.WRITING_OBJ_URI&&">"==n||R==_.WRITING_OBJ_BNODE&&" "==n||R==_.WRITING_OBJ_LITERAL&&'"'==n||R==_.WRITING_LIT_LANG&&" "==n||R==_.WRITING_LIT_TYPE&&">"==n?_.POST_OBJ:R==_.WRITING_OBJ_LITERAL&&"@"==n?_.WRITING_LIT_LANG:R==_.WRITING_OBJ_LITERAL&&"^"==n?_.WRITING_LIT_TYPE:" "!=n||R!=_.PRE_SUBJECT&&R!=_.PRE_PRED&&R!=_.PRE_OBJ&&R!=_.POST_OBJ?R==_.POST_OBJ&&"."==n?_.PRE_SUBJECT:_.ERROR:R,I.location=e}return{startState:function(){return{location:_.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(_,n){var e=_.next();if("<"==e){I(n,e);var R="";return _.eatWhile((function(_){return"#"!=_&&">"!=_&&(R+=_,!0)})),n.uris.push(R),_.match("#",!1)||(_.next(),I(n,">")),"variable"}if("#"==e){var t="";return _.eatWhile((function(_){return">"!=_&&" "!=_&&(t+=_,!0)})),n.anchors.push(t),"variable-2"}if(">"==e)return I(n,">"),"variable";if("_"==e){I(n,e);var r="";return _.eatWhile((function(_){return" "!=_&&(r+=_,!0)})),n.bnodes.push(r),_.next(),I(n," "),"builtin"}if('"'==e)return I(n,e),_.eatWhile((function(_){return'"'!=_})),_.next(),"@"!=_.peek()&&"^"!=_.peek()&&I(n,'"'),"string";if("@"==e){I(n,"@");var i="";return _.eatWhile((function(_){return" "!=_&&(i+=_,!0)})),n.langs.push(i),_.next(),I(n," "),"string-2"}if("^"==e){_.next(),I(n,"^");var T="";return _.eatWhile((function(_){return">"!=_&&(T+=_,!0)})),n.types.push(T),_.next(),I(n,">"),"variable"}" "==e&&I(n,e),"."==e&&I(n,e)}}})),_.defineMIME("application/n-triples","ntriples"),_.defineMIME("application/n-quads","ntriples"),_.defineMIME("text/n-triples","ntriples")}(n(2742))}}]);
//# sourceMappingURL=4021.b5b5c6d2.chunk.js.map