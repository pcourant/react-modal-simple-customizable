var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire43b0;e.register("fpVPL",(function(n,a){var i=e("949g8"),r=e("2jpWm");function o(e){e.register(i),e.register(r),function(e){e.languages.erb=e.languages.extend("ruby",{}),e.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"erb")}))}(e)}n.exports=o,o.displayName="erb",o.aliases=[]}));
//# sourceMappingURL=erb.ba1cebcb.js.map
