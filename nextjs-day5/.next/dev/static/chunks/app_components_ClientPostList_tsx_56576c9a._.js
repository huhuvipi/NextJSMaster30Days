(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/ClientPostList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientPostList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClientPostList() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientPostList.useEffect": ()=>{
            let mounted = true;
            fetch("https://jsonplaceholder.typicode.com/posts").then({
                "ClientPostList.useEffect": (res)=>{
                    if (!res.ok) throw new Error("Network response was not ok");
                    return res.json();
                }
            }["ClientPostList.useEffect"]).then({
                "ClientPostList.useEffect": (data)=>{
                    if (mounted) setPosts(data.slice(0, 5));
                }
            }["ClientPostList.useEffect"]).catch({
                "ClientPostList.useEffect": (err)=>{
                    if (mounted) setError(err.message);
                }
            }["ClientPostList.useEffect"]).finally({
                "ClientPostList.useEffect": ()=>{
                    if (mounted) setLoading(false);
                }
            }["ClientPostList.useEffect"]);
            return ({
                "ClientPostList.useEffect": ()=>{
                    mounted = false;
                }
            })["ClientPostList.useEffect"];
        }
    }["ClientPostList.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading client posts…"
    }, void 0, false, {
        fileName: "[project]/app/components/ClientPostList.tsx",
        lineNumber: 40,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            color: "red"
        },
        children: [
            "Error: ",
            error
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ClientPostList.tsx",
        lineNumber: 41,
        columnNumber: 21
    }, this);
    if (!posts || posts.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "No posts found"
    }, void 0, false, {
        fileName: "[project]/app/components/ClientPostList.tsx",
        lineNumber: 42,
        columnNumber: 44
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        children: posts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            display: "block"
                        },
                        children: p.title
                    }, void 0, false, {
                        fileName: "[project]/app/components/ClientPostList.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: p.body
                    }, void 0, false, {
                        fileName: "[project]/app/components/ClientPostList.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, p.id, true, {
                fileName: "[project]/app/components/ClientPostList.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/ClientPostList.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ClientPostList, "XyCEMaGMVRZ3aPEWrN/h9oqwqNo=");
_c = ClientPostList;
var _c;
__turbopack_context__.k.register(_c, "ClientPostList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_ClientPostList_tsx_56576c9a._.js.map