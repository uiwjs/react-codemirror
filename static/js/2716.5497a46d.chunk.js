(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[2716],{32716:function(e,r,i){!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(r){var i=r.string.search(/[\t ]+?$/);if(!r.sol()||0===i)return r.skipToEnd(),("error "+(e[r.string.charAt(0)]||"")).replace(/ $/,"");var n=e[r.peek()]||r.skipToEnd();return-1===i?r.skipToEnd():r.pos=i,n}}})),e.defineMIME("text/x-diff","diff")}(i(2742))}}]);
//# sourceMappingURL=2716.5497a46d.chunk.js.map