(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BulkAddTasks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkAddTasks",
    ()=>BulkAddTasks,
    "parseBulkTaskLines",
    ()=>parseBulkTaskLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const today = new Date().toISOString().slice(0, 10);
function parseBulkTaskLines(value) {
    return value.split(/\r?\n/).map((line)=>line.trim()).filter(Boolean);
}
function BulkAddTasks(param) {
    let { phases, defaultPhaseId, onClose, onCreate } = param;
    _s();
    const [rawText, setRawText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phaseId, setPhaseId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultPhaseId);
    const [deadline, setDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("available");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [createdCount, setCreatedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [isSubmitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const parsedTitles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BulkAddTasks.useMemo[parsedTitles]": ()=>parseBulkTaskLines(rawText)
    }["BulkAddTasks.useMemo[parsedTitles]"], [
        rawText
    ]);
    var _phases_find;
    const selectedPhase = (_phases_find = phases.find((phase)=>phase.id === phaseId)) !== null && _phases_find !== void 0 ? _phases_find : phases[0];
    const submit = (event)=>{
        event.preventDefault();
        if (isSubmitting) return;
        if (!parsedTitles.length) {
            setError("Paste at least one non-empty line.");
            return;
        }
        const confirmed = window.confirm("Add ".concat(parsedTitles.length, ' tasks to "').concat(selectedPhase.title, '"? Existing tasks will be kept.'));
        if (!confirmed) return;
        setSubmitting(true);
        setError(undefined);
        onCreate(selectedPhase.id, parsedTitles.map((title)=>({
                title,
                deadline,
                status
            })));
        setCreatedCount(parsedTitles.length);
        setRawText("");
        window.setTimeout(()=>{
            setSubmitting(false);
            onClose();
        }, 650);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-40 grid place-items-end bg-black/20 p-3 backdrop-blur-sm sm:place-items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            onSubmit: submit,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.16,
                ease: "easeOut"
            },
            className: "max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-black/10 bg-paper shadow-soft",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4 border-b border-black/8 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.22em] text-black/40",
                                    children: "Bulk add"
                                }, void 0, false, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-2xl font-semibold",
                                    children: "Paste task list"
                                }, void 0, false, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-black/52",
                                    children: "Each non-empty line becomes one task. Commas stay inside the title."
                                }, void 0, false, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BulkAddTasks.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/BulkAddTasks.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/BulkAddTasks.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BulkAddTasks.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid max-h-[calc(92vh-8rem)] gap-4 overflow-y-auto p-4 lg:grid-cols-[1fr_0.8fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: rawText,
                                    onChange: (event)=>{
                                        setRawText(event.target.value);
                                        setError(undefined);
                                    },
                                    placeholder: "국제학생증\n한국 관련 서비스 해지하기\nFinal luggage optimization",
                                    rows: 12,
                                    className: "min-h-64 w-full resize-y rounded-2xl border border-black/10 bg-white p-4 text-base leading-7 outline-none transition focus:border-accent"
                                }, void 0, false, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: phaseId,
                                            onChange: (event)=>setPhaseId(event.target.value),
                                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent sm:col-span-1",
                                            children: phases.map((phase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: phase.id,
                                                    children: phase.title
                                                }, phase.id, false, {
                                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/BulkAddTasks.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: deadline,
                                            onChange: (event)=>setDeadline(event.target.value),
                                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BulkAddTasks.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: status,
                                            onChange: (event)=>setStatus(event.target.value),
                                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "available",
                                                    children: "Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "in_progress",
                                                    children: "In progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "completed",
                                                    children: "Completed"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BulkAddTasks.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 118,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BulkAddTasks.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "rounded-2xl border border-black/10 bg-white p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold uppercase tracking-[0.18em] text-black/35",
                                                    children: "Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold",
                                                    children: [
                                                        parsedTitles.length,
                                                        " tasks"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BulkAddTasks.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                            className: "h-5 w-5 text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BulkAddTasks.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                parsedTitles.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "max-h-72 space-y-2 overflow-y-auto pr-1",
                                    children: parsedTitles.map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "rounded-xl border border-black/8 bg-paper/60 px-3 py-2 text-sm leading-5",
                                            children: title
                                        }, "".concat(title, "-").concat(index), false, {
                                            fileName: "[project]/components/BulkAddTasks.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-dashed border-black/12 bg-paper/50 p-5 text-sm leading-6 text-black/45",
                                    children: "Paste a list to preview tasks before creating them."
                                }, void 0, false, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                createdCount !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/8 px-3 py-2 text-sm font-semibold text-accent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BulkAddTasks.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        "Added ",
                                        createdCount,
                                        " tasks"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BulkAddTasks.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BulkAddTasks.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BulkAddTasks.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-2 border-t border-black/8 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/BulkAddTasks.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: isSubmitting || !parsedTitles.length,
                            className: "h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent disabled:bg-black/20",
                            children: [
                                "Add ",
                                parsedTitles.length || "",
                                " tasks"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BulkAddTasks.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BulkAddTasks.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/BulkAddTasks.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BulkAddTasks.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(BulkAddTasks, "FNmmbItAqMZUQFALwD+hZlvnZnI=");
_c = BulkAddTasks;
var _c;
__turbopack_context__.k.register(_c, "BulkAddTasks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedInventoryCategories",
    ()=>seedInventoryCategories,
    "seedInventoryItems",
    ()=>seedInventoryItems,
    "seedPackingContainers",
    ()=>seedPackingContainers,
    "seedPhases",
    ()=>seedPhases
]);
const seedPhases = [
    {
        id: "before-departure",
        title: "Before Departure",
        description: "Leave Seoul with the essentials handled and fewer unknowns in your carry-on.",
        startDate: "2026-06-01",
        endDate: "2026-06-30",
        tasks: [
            {
                id: "print-documents",
                title: "Print important documents",
                note: "Visa, passport copies, insurance certificate, booking confirmations, and emergency contacts.",
                deadline: "2026-06-07",
                status: "completed"
            },
            {
                id: "prepare-insurance",
                title: "Prepare insurance",
                note: "Confirm coverage starts before the flight and keep the policy PDF offline.",
                deadline: "2026-06-10",
                status: "in_progress"
            },
            {
                id: "buy-adapter",
                title: "Buy adapter",
                note: "Korea to EU plug adapter plus one small power strip.",
                deadline: "2026-06-18",
                status: "available"
            },
            {
                id: "backup-laptop",
                title: "Backup laptop",
                note: "Create one cloud backup and one encrypted external backup before packing.",
                deadline: "2026-06-22",
                status: "available"
            }
        ]
    },
    {
        id: "arrival-survival",
        title: "Arrival Survival",
        description: "Get signal, movement, food, and a first rhythm in Berlin without over-planning.",
        startDate: "2026-07-01",
        endDate: "2026-07-14",
        tasks: [
            {
                id: "prepare-esim",
                title: "Prepare SIM/eSIM",
                note: "Install before departure and test activation instructions while still on Wi-Fi.",
                deadline: "2026-07-01",
                status: "available",
                dependsOn: [
                    "print-documents"
                ]
            },
            {
                id: "public-transport",
                title: "Set up public transport",
                note: "Install BVG/VBB app and decide whether a Deutschlandticket makes sense.",
                deadline: "2026-07-03",
                status: "available",
                dependsOn: [
                    "prepare-esim"
                ]
            },
            {
                id: "grocery-route",
                title: "Find a repeatable grocery route",
                note: "Choose one easy supermarket, one backup, and one nearby late option.",
                deadline: "2026-07-08",
                status: "available",
                dependsOn: [
                    "public-transport"
                ]
            }
        ]
    },
    {
        id: "airbnb-period",
        title: "Airbnb Period",
        description: "Use the temporary stay as a quiet launchpad for housing and registration.",
        startDate: "2026-07-15",
        endDate: "2026-08-31",
        tasks: [
            {
                id: "search-wg",
                title: "Search WG rooms",
                note: "Prepare a short intro message and save a few search filters.",
                deadline: "2026-07-18",
                status: "available"
            },
            {
                id: "anmeldung-docs",
                title: "Prepare Anmeldung documents",
                note: "Passport, form, Wohnungsgeberbestätigung, and appointment confirmation.",
                deadline: "2026-07-25",
                status: "available",
                dependsOn: [
                    "search-wg"
                ]
            },
            {
                id: "open-bank",
                title: "Open bank account",
                note: "Pick a bank that works with your address and identity documents.",
                deadline: "2026-08-05",
                status: "available",
                dependsOn: [
                    "anmeldung-docs"
                ]
            }
        ]
    },
    {
        id: "long-term-settlement",
        title: "Long-Term Settlement",
        description: "Shift from landing mode into a sustainable Berlin routine and career track.",
        startDate: "2026-09-01",
        endDate: "2026-10-31",
        tasks: [
            {
                id: "update-cv",
                title: "Update CV",
                note: "Create a Berlin-ready developer CV and matching LinkedIn summary.",
                deadline: "2026-09-08",
                status: "available",
                dependsOn: [
                    "open-bank"
                ]
            },
            {
                id: "apply-dev-jobs",
                title: "Apply to developer jobs",
                note: "Start with a small batch of focused applications and track responses.",
                deadline: "2026-09-20",
                status: "available",
                dependsOn: [
                    "update-cv"
                ]
            },
            {
                id: "settlement-ritual",
                title: "Choose a weekly settling ritual",
                note: "A walk, market visit, quiet cafe hour, or call home that makes the week feel anchored.",
                deadline: "2026-09-30",
                status: "available"
            }
        ]
    }
];
const seedInventoryCategories = [
    {
        id: "misc",
        name: "Misc"
    },
    {
        id: "kitchen",
        name: "Kitchen"
    },
    {
        id: "clothing",
        name: "Clothing"
    },
    {
        id: "desk",
        name: "Desk"
    },
    {
        id: "cosmetics",
        name: "Cosmetics"
    },
    {
        id: "bathroom",
        name: "Bathroom"
    },
    {
        id: "bedding",
        name: "Bedding"
    },
    {
        id: "important-items",
        name: "Important Items"
    },
    {
        id: "exercise",
        name: "Exercise"
    }
];
const seedPackingContainers = [
    {
        id: "suitcase-26",
        name: "26-inch suitcase"
    },
    {
        id: "suitcase-20",
        name: "20-inch suitcase"
    },
    {
        id: "backpack",
        name: "Backpack"
    },
    {
        id: "hip-bag",
        name: "Hip bag"
    },
    {
        id: "future-korea-shipment",
        name: "Future Korea shipment"
    }
];
const item = function(id, name, categoryId) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var _options_quantity, _options_status, _options_buyLocation, _options_priority, _options_packed;
    return {
        id,
        name,
        categoryId,
        topic: options.topic,
        quantity: (_options_quantity = options.quantity) !== null && _options_quantity !== void 0 ? _options_quantity : "1",
        status: (_options_status = options.status) !== null && _options_status !== void 0 ? _options_status : "already_have",
        buyLocation: (_options_buyLocation = options.buyLocation) !== null && _options_buyLocation !== void 0 ? _options_buyLocation : "none",
        priority: (_options_priority = options.priority) !== null && _options_priority !== void 0 ? _options_priority : "medium",
        notes: options.notes,
        containerId: options.containerId,
        packed: (_options_packed = options.packed) !== null && _options_packed !== void 0 ? _options_packed : false
    };
};
const seedInventoryItems = [
    item("rice-cooker", "rice cooker", "kitchen", {
        priority: "high",
        containerId: "future-korea-shipment"
    }),
    item("portable-cutlery", "portable cutlery", "kitchen", {
        containerId: "backpack"
    }),
    item("extra-chopsticks", "extra chopsticks", "kitchen", {
        quantity: "2 sets"
    }),
    item("tumbler", "tumbler", "kitchen", {
        containerId: "backpack"
    }),
    item("salt", "salt", "kitchen"),
    item("kitchen-scissors", "scissors", "kitchen"),
    item("microwave-rice-container", "microwave rice container", "kitchen", {
        status: "need_to_buy",
        buyLocation: "germany"
    }),
    item("brita-water-filter", "Brita water filter", "kitchen", {
        status: "need_to_buy",
        buyLocation: "germany"
    }),
    item("rubber-gloves", "rubber gloves", "kitchen", {
        status: "need_to_buy",
        buyLocation: "germany"
    }),
    item("towels", "towels", "clothing", {
        quantity: "2-3"
    }),
    item("underwear", "underwear", "clothing", {
        quantity: "7 sets"
    }),
    item("socks", "socks", "clothing", {
        quantity: "10"
    }),
    item("t-shirts", "t-shirts", "clothing", {
        quantity: "7"
    }),
    item("pants", "pants", "clothing", {
        quantity: "3"
    }),
    item("shorts", "shorts", "clothing", {
        quantity: "2"
    }),
    item("cardigan", "cardigan", "clothing"),
    item("hoodie", "hoodie", "clothing"),
    item("windbreakers", "windbreakers", "clothing", {
        quantity: "2"
    }),
    item("crossbody-bags", "crossbody bags", "clothing", {
        quantity: "2-3"
    }),
    item("shoes", "shoes", "clothing", {
        quantity: "3"
    }),
    item("hangers", "hangers", "clothing"),
    item("laundry-detergent", "laundry detergent", "clothing", {
        status: "need_to_buy",
        buyLocation: "germany"
    }),
    item("swimsuit", "swimsuit", "clothing", {
        status: "optional"
    }),
    item("beach-towel", "beach towel", "clothing", {
        status: "optional"
    }),
    item("german-book", "German book", "desk", {
        containerId: "backpack"
    }),
    item("pencil-case", "pencil case", "desk"),
    item("stationery", "stationery", "desk"),
    item("desk-scissors", "scissors", "desk"),
    item("measuring-tape", "measuring tape", "desk"),
    item("tape", "tape", "desk"),
    item("alcohol-wipes", "alcohol wipes", "desk"),
    item("toner-pads", "toner pads", "cosmetics"),
    item("fixer", "fixer", "cosmetics"),
    item("cushion-foundation", "cushion foundation", "cosmetics"),
    item("sunscreen", "sunscreen", "cosmetics", {
        priority: "high"
    }),
    item("physiogel", "physiogel", "cosmetics"),
    item("cleansing-water", "cleansing water", "cosmetics"),
    item("cotton-pads", "cotton pads", "cosmetics"),
    item("eyebrow-razor", "eyebrow razor", "cosmetics"),
    item("eyeliner", "eyeliner", "cosmetics"),
    item("soap", "soap", "bathroom"),
    item("toothpaste-toothbrush", "toothpaste/toothbrush", "bathroom", {
        priority: "high"
    }),
    item("toothbrush-holder", "toothbrush holder", "bathroom"),
    item("pads", "one month of pads", "bathroom", {
        priority: "high"
    }),
    item("hair-dryer", "hair dryer", "bathroom"),
    item("mini-hair-straightener", "mini hair straightener", "bathroom"),
    item("bathroom-slippers", "bathroom slippers", "bathroom", {
        status: "need_to_buy",
        buyLocation: "germany"
    }),
    item("pillow", "pillow if possible", "bedding", {
        status: "optional"
    }),
    item("electric-blanket", "electric blanket", "bedding"),
    item("documents", "documents", "important-items", {
        status: "important",
        priority: "high",
        containerId: "backpack"
    }),
    item("laptop", "laptop", "important-items", {
        status: "important",
        priority: "high",
        containerId: "backpack"
    }),
    item("laptop-stand", "laptop stand", "important-items"),
    item("chargers", "chargers", "important-items", {
        status: "important",
        priority: "high",
        containerId: "backpack"
    }),
    item("airpods", "AirPods", "important-items", {
        containerId: "hip-bag"
    }),
    item("keyboard", "keyboard", "important-items"),
    item("power-strip", "power strip", "important-items"),
    item("mouse", "mouse", "important-items"),
    item("mouse-pad", "mouse pad", "important-items"),
    item("ipad", "iPad", "important-items", {
        containerId: "backpack"
    }),
    item("spare-phone-case", "spare phone case", "important-items"),
    item("spare-screen-protector", "spare screen protector", "important-items"),
    item("medicine", "medicine", "important-items", {
        status: "important",
        priority: "high",
        containerId: "hip-bag"
    }),
    item("sunglasses", "sunglasses", "important-items"),
    item("keyring", "keyring", "important-items"),
    item("massager", "massager", "exercise"),
    item("gua-sha", "gua sha", "exercise"),
    item("peanut-ball", "peanut ball", "exercise"),
    item("dumbbells", "dumbbells", "exercise", {
        status: "need_to_buy",
        buyLocation: "germany"
    }),
    item("helmet", "helmet", "misc"),
    item("folding-umbrella", "folding umbrella", "misc"),
    item("slippers", "slippers", "misc"),
    item("cleaning-supplies", "cleaning supplies", "misc", {
        status: "need_to_buy",
        buyLocation: "germany"
    })
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/persistence.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORAGE_KEY",
    ()=>STORAGE_KEY,
    "STORAGE_VERSION",
    ()=>STORAGE_VERSION,
    "createSeedStorageData",
    ()=>createSeedStorageData,
    "exportData",
    ()=>exportData,
    "flattenData",
    ()=>flattenData,
    "flattenPhases",
    ()=>flattenPhases,
    "hydratePhases",
    ()=>hydratePhases,
    "importData",
    ()=>importData,
    "loadData",
    ()=>loadData,
    "saveData",
    ()=>saveData,
    "validateData",
    ()=>validateData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seed.ts [app-client] (ecmascript)");
;
const STORAGE_KEY = "relocation-quest-data-v1";
const LEGACY_STORAGE_KEY = "relocation-quest-state-v2";
const STORAGE_VERSION = 2;
const validStatuses = [
    "available",
    "in_progress",
    "completed"
];
const validInventoryStatuses = [
    "already_have",
    "need_to_buy",
    "bought",
    "optional",
    "important"
];
const validBuyLocations = [
    "none",
    "korea",
    "germany"
];
const validInventoryPriorities = [
    "low",
    "medium",
    "high"
];
const isRecord = (value)=>Boolean(value && typeof value === "object" && !Array.isArray(value));
const isString = (value)=>typeof value === "string";
const flattenData = function(phases) {
    let inventoryCategories = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedInventoryCategories"], inventoryItems = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedInventoryItems"], packingContainers = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedPackingContainers"];
    return {
        version: STORAGE_VERSION,
        phases: phases.map((param)=>{
            let { tasks, ...phase } = param;
            return phase;
        }),
        tasks: phases.flatMap((phase)=>phase.tasks.map((task, index)=>{
                var _task_order;
                return {
                    ...task,
                    order: (_task_order = task.order) !== null && _task_order !== void 0 ? _task_order : index,
                    phaseId: phase.id
                };
            })),
        inventoryCategories,
        inventoryItems: inventoryItems.map((item, index)=>{
            var _item_packingOrder;
            return {
                ...item,
                packingOrder: (_item_packingOrder = item.packingOrder) !== null && _item_packingOrder !== void 0 ? _item_packingOrder : index
            };
        }),
        packingContainers,
        updatedAt: new Date().toISOString()
    };
};
const flattenPhases = flattenData;
const hydratePhases = (data)=>data.phases.map((phase)=>{
        const phaseTasks = data.tasks.filter((task)=>task.phaseId === phase.id).map((param, index)=>{
            let { phaseId, ...task } = param;
            var _task_order;
            return {
                ...task,
                order: (_task_order = task.order) !== null && _task_order !== void 0 ? _task_order : index
            };
        }).sort((a, b)=>{
            var _a_order, _b_order;
            return ((_a_order = a.order) !== null && _a_order !== void 0 ? _a_order : 0) - ((_b_order = b.order) !== null && _b_order !== void 0 ? _b_order : 0);
        });
        return {
            ...phase,
            tasks: phaseTasks
        };
    });
const seedData = ()=>flattenData(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedPhases"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedInventoryCategories"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedInventoryItems"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedPackingContainers"]);
const validatePhase = (phase)=>{
    if (!isRecord(phase)) return false;
    return isString(phase.id) && isString(phase.title) && isString(phase.description) && isString(phase.startDate) && isString(phase.endDate);
};
const validateTask = (task, phaseIds)=>{
    if (!isRecord(task)) return false;
    const dependsOn = task.dependsOn;
    return isString(task.id) && isString(task.phaseId) && phaseIds.has(task.phaseId) && isString(task.title) && isString(task.deadline) && isString(task.status) && validStatuses.includes(task.status) && (task.note === undefined || isString(task.note)) && (task.createdAt === undefined || isString(task.createdAt)) && (task.order === undefined || typeof task.order === "number") && (dependsOn === undefined || Array.isArray(dependsOn) && dependsOn.every(isString));
};
const validateInventoryCategory = (category)=>isRecord(category) && isString(category.id) && isString(category.name);
const validatePackingContainer = (container)=>isRecord(container) && isString(container.id) && isString(container.name);
const validateInventoryItem = (item, categoryIds, containerIds)=>{
    if (!isRecord(item)) return false;
    return isString(item.id) && isString(item.name) && isString(item.categoryId) && categoryIds.has(item.categoryId) && isString(item.quantity) && isString(item.status) && validInventoryStatuses.includes(item.status) && isString(item.buyLocation) && validBuyLocations.includes(item.buyLocation) && isString(item.priority) && validInventoryPriorities.includes(item.priority) && (item.topic === undefined || isString(item.topic)) && (item.notes === undefined || isString(item.notes)) && (item.containerId === undefined || isString(item.containerId) && containerIds.has(item.containerId)) && (item.packed === undefined || typeof item.packed === "boolean") && (item.packingOrder === undefined || typeof item.packingOrder === "number");
};
const emptyData = ()=>({
        version: STORAGE_VERSION,
        phases: [],
        tasks: [],
        inventoryCategories: [],
        inventoryItems: [],
        packingContainers: [],
        updatedAt: new Date().toISOString()
    });
const withStoredOrder = (data)=>({
        ...data,
        tasks: data.tasks.map((task, index)=>{
            var _task_order;
            return {
                ...task,
                order: (_task_order = task.order) !== null && _task_order !== void 0 ? _task_order : index
            };
        }),
        inventoryItems: data.inventoryItems.map((item, index)=>{
            var _item_packingOrder;
            return {
                ...item,
                packingOrder: (_item_packingOrder = item.packingOrder) !== null && _item_packingOrder !== void 0 ? _item_packingOrder : index
            };
        })
    });
const migrateV1Data = (value)=>{
    if (value.version !== 1 || !Array.isArray(value.phases) || !Array.isArray(value.tasks) || !isString(value.updatedAt)) return null;
    const phaseIds = new Set(value.phases.map((phase)=>phase.id));
    if (!value.phases.every(validatePhase)) return null;
    if (!value.tasks.every((task)=>validateTask(task, phaseIds))) return null;
    return {
        version: STORAGE_VERSION,
        phases: value.phases,
        tasks: value.tasks.map((task, index)=>{
            var _task_order;
            return {
                ...task,
                order: (_task_order = task.order) !== null && _task_order !== void 0 ? _task_order : index
            };
        }),
        inventoryCategories: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedInventoryCategories"],
        inventoryItems: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedInventoryItems"].map((item, index)=>{
            var _item_packingOrder;
            return {
                ...item,
                packingOrder: (_item_packingOrder = item.packingOrder) !== null && _item_packingOrder !== void 0 ? _item_packingOrder : index
            };
        }),
        packingContainers: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedPackingContainers"],
        updatedAt: new Date().toISOString()
    };
};
const validateData = (value)=>{
    if (!isRecord(value)) return {
        ok: false,
        error: "Backup is not a JSON object."
    };
    if (value.version !== STORAGE_VERSION) {
        const migrated = migrateV1Data(value);
        if (migrated) return {
            ok: true,
            data: migrated
        };
        return {
            ok: false,
            error: "Unsupported backup version. Expected version ".concat(STORAGE_VERSION, ".")
        };
    }
    if (!Array.isArray(value.phases)) return {
        ok: false,
        error: "Backup is missing a phases array."
    };
    if (!Array.isArray(value.tasks)) return {
        ok: false,
        error: "Backup is missing a tasks array."
    };
    if (!Array.isArray(value.inventoryCategories)) return {
        ok: false,
        error: "Backup is missing an inventoryCategories array."
    };
    if (!Array.isArray(value.inventoryItems)) return {
        ok: false,
        error: "Backup is missing an inventoryItems array."
    };
    if (!Array.isArray(value.packingContainers)) return {
        ok: false,
        error: "Backup is missing a packingContainers array."
    };
    if (!isString(value.updatedAt)) return {
        ok: false,
        error: "Backup is missing updatedAt."
    };
    if (!value.phases.every(validatePhase)) return {
        ok: false,
        error: "One or more phases are invalid."
    };
    const phaseIds = new Set(value.phases.map((phase)=>phase.id));
    if (phaseIds.size !== value.phases.length) return {
        ok: false,
        error: "Phase IDs must be unique."
    };
    if (!value.tasks.every((task)=>validateTask(task, phaseIds))) return {
        ok: false,
        error: "One or more tasks are invalid."
    };
    const taskIds = new Set(value.tasks.map((task)=>task.id));
    if (taskIds.size !== value.tasks.length) return {
        ok: false,
        error: "Task IDs must be unique."
    };
    for (const task of value.tasks){
        var _task_dependsOn;
        for (const dependencyId of (_task_dependsOn = task.dependsOn) !== null && _task_dependsOn !== void 0 ? _task_dependsOn : []){
            if (!taskIds.has(dependencyId)) return {
                ok: false,
                error: 'Task "'.concat(task.title, '" depends on a task that does not exist.')
            };
            if (dependencyId === task.id) return {
                ok: false,
                error: 'Task "'.concat(task.title, '" cannot depend on itself.')
            };
        }
    }
    if (!value.inventoryCategories.every(validateInventoryCategory)) return {
        ok: false,
        error: "One or more inventory categories are invalid."
    };
    if (!value.packingContainers.every(validatePackingContainer)) return {
        ok: false,
        error: "One or more packing containers are invalid."
    };
    const categoryIds = new Set(value.inventoryCategories.map((category)=>category.id));
    const containerIds = new Set(value.packingContainers.map((container)=>container.id));
    if (categoryIds.size !== value.inventoryCategories.length) return {
        ok: false,
        error: "Inventory category IDs must be unique."
    };
    if (containerIds.size !== value.packingContainers.length) return {
        ok: false,
        error: "Packing container IDs must be unique."
    };
    if (!value.inventoryItems.every((item)=>validateInventoryItem(item, categoryIds, containerIds))) return {
        ok: false,
        error: "One or more inventory items are invalid."
    };
    const inventoryItemIds = new Set(value.inventoryItems.map((item)=>item.id));
    if (inventoryItemIds.size !== value.inventoryItems.length) return {
        ok: false,
        error: "Inventory item IDs must be unique."
    };
    return {
        ok: true,
        data: value
    };
};
const readLocalStorage = (key)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.localStorage.getItem(key);
};
const writeLocalStorage = (key, value)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(key, value);
};
const migrateLegacyData = ()=>{
    const raw = readLocalStorage(LEGACY_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!isRecord(parsed) || !isRecord(parsed.state) || !Array.isArray(parsed.state.phases)) return null;
    const phases = parsed.state.phases;
    const migrated = flattenPhases(phases);
    saveData(migrated);
    return migrated;
};
const loadData = ()=>{
    try {
        const raw = readLocalStorage(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            const validated = validateData(parsed);
            if (validated.ok) {
                const normalized = withStoredOrder(validated.data);
                if (isRecord(parsed) && (parsed.version !== STORAGE_VERSION || normalized.tasks.some((task, index)=>{
                    var _validated_data_tasks_index;
                    return task.order !== ((_validated_data_tasks_index = validated.data.tasks[index]) === null || _validated_data_tasks_index === void 0 ? void 0 : _validated_data_tasks_index.order);
                }) || normalized.inventoryItems.some((item, index)=>{
                    var _validated_data_inventoryItems_index;
                    return item.packingOrder !== ((_validated_data_inventoryItems_index = validated.data.inventoryItems[index]) === null || _validated_data_inventoryItems_index === void 0 ? void 0 : _validated_data_inventoryItems_index.packingOrder);
                }))) saveData(normalized);
                return {
                    status: "loaded",
                    data: normalized
                };
            }
            return {
                status: "error",
                data: emptyData(),
                error: validated.error
            };
        }
        const migrated = migrateLegacyData();
        if (migrated) return {
            status: "loaded",
            data: migrated
        };
        const seeded = seedData();
        saveData(seeded);
        return {
            status: "seeded",
            data: seeded
        };
    } catch (error) {
        return {
            status: "error",
            data: emptyData(),
            error: error instanceof Error ? error.message : "Saved relocation data could not be read."
        };
    }
};
const saveData = (data)=>{
    const validated = validateData(data);
    if (!validated.ok) throw new Error(validated.error);
    writeLocalStorage(STORAGE_KEY, JSON.stringify({
        ...validated.data,
        updatedAt: new Date().toISOString()
    }));
};
const exportData = (phases, inventoryCategories, inventoryItems, packingContainers)=>JSON.stringify(flattenData(phases, inventoryCategories, inventoryItems, packingContainers), null, 2);
const importData = (json)=>{
    try {
        const parsed = JSON.parse(json);
        return validateData(parsed);
    } catch (e) {
        return {
            ok: false,
            error: "Backup file is not valid JSON."
        };
    }
};
const createSeedStorageData = seedData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DataSafetyPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataSafetyPanel",
    ()=>DataSafetyPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/persistence.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const formatSavedAt = (value)=>value.replace("T", " ").slice(0, 19);
function DataSafetyPanel(param) {
    let { phases, inventoryCategories, inventoryItems, packingContainers, error, lastSavedAt, onRestore, onReset } = param;
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [importError, setImportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const downloadBackup = ()=>{
        const blob = new Blob([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportData"])(phases, inventoryCategories, inventoryItems, packingContainers)
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "relocation-quest-backup-".concat(new Date().toISOString().slice(0, 10), ".json");
        link.click();
        URL.revokeObjectURL(url);
    };
    const restoreBackup = async (event)=>{
        var _event_target_files;
        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        event.target.value = "";
        if (!file) return;
        const text = await file.text();
        const imported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importData"])(text);
        if (!imported.ok) {
            setImportError(imported.error);
            return;
        }
        const confirmed = window.confirm("Restore this backup? Your current local quest data will be replaced.");
        if (!confirmed) return;
        setImportError(undefined);
        onRestore((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydratePhases"])(imported.data), imported.data.inventoryCategories, imported.data.inventoryItems, imported.data.packingContainers);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[1.35rem] border border-black/10 bg-white/82 p-5 shadow-soft backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-black/38",
                                children: "Data safety"
                            }, void 0, false, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 text-lg font-semibold",
                                children: "Local backup"
                            }, void 0, false, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-6 text-black/52",
                                children: "Saved in this browser. Keep a JSON backup before major changes."
                            }, void 0, false, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            lastSavedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs font-medium text-black/40",
                                children: [
                                    "Last saved ",
                                    formatSavedAt(lastSavedAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 68,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DataSafetyPanel.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: downloadBackup,
                                className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-accent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DataSafetyPanel.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    "Download backup"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    var _inputRef_current;
                                    return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();
                                },
                                className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60 transition hover:border-accent hover:text-accent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DataSafetyPanel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    "Restore from backup"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "file",
                                accept: "application/json,.json",
                                onChange: restoreBackup,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DataSafetyPanel.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DataSafetyPanel.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            (error || importError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 flex items-center gap-2 font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/DataSafetyPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            "Storage needs attention"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DataSafetyPanel.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: importError !== null && importError !== void 0 ? importError : error
                    }, void 0, false, {
                        fileName: "[project]/components/DataSafetyPanel.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-red-700/75",
                        children: "Your saved data was not silently deleted. Use Restore from backup when you have a valid JSON backup file."
                    }, void 0, false, {
                        fileName: "[project]/components/DataSafetyPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DataSafetyPanel.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-red-200 bg-white p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-red-500",
                                    children: "Danger zone"
                                }, void 0, false, {
                                    fileName: "[project]/components/DataSafetyPanel.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-black/55",
                                    children: "Reset replaces local data with the sample quest."
                                }, void 0, false, {
                                    fileName: "[project]/components/DataSafetyPanel.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DataSafetyPanel.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (window.confirm("Reset Relocation Quest to sample data? This replaces current local data. Download a backup first if you need it.")) onReset();
                            },
                            className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/DataSafetyPanel.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                "Reset to sample data"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DataSafetyPanel.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DataSafetyPanel.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DataSafetyPanel.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DataSafetyPanel.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(DataSafetyPanel, "bCCMxPZYqcNyE+g4znsQAHs51FI=");
_c = DataSafetyPanel;
var _c;
__turbopack_context__.k.register(_c, "DataSafetyPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PhaseModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhaseModal",
    ()=>PhaseModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const today = new Date().toISOString().slice(0, 10);
function PhaseModal(param) {
    let { phase, onClose, onSubmit } = param;
    _s();
    var _phase_title, _phase_description, _phase_startDate, _phase_endDate;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: (_phase_title = phase === null || phase === void 0 ? void 0 : phase.title) !== null && _phase_title !== void 0 ? _phase_title : "",
        description: (_phase_description = phase === null || phase === void 0 ? void 0 : phase.description) !== null && _phase_description !== void 0 ? _phase_description : "",
        startDate: (_phase_startDate = phase === null || phase === void 0 ? void 0 : phase.startDate) !== null && _phase_startDate !== void 0 ? _phase_startDate : today,
        endDate: (_phase_endDate = phase === null || phase === void 0 ? void 0 : phase.endDate) !== null && _phase_endDate !== void 0 ? _phase_endDate : today
    });
    const submit = (event)=>{
        event.preventDefault();
        onSubmit(form);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-40 grid place-items-end bg-black/20 p-3 backdrop-blur-sm sm:place-items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            onSubmit: submit,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.16,
                ease: "easeOut"
            },
            className: "w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.24em] text-black/40",
                                    children: phase ? "Edit stage" : "New stage"
                                }, void 0, false, {
                                    fileName: "[project]/components/PhaseModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-2xl font-semibold",
                                    children: phase ? phase.title : "Add phase"
                                }, void 0, false, {
                                    fileName: "[project]/components/PhaseModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PhaseModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/PhaseModal.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PhaseModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PhaseModal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.title,
                            onChange: (event)=>setForm((draft)=>({
                                        ...draft,
                                        title: event.target.value
                                    })),
                            placeholder: "Phase title",
                            className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
                        }, void 0, false, {
                            fileName: "[project]/components/PhaseModal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: form.description,
                            onChange: (event)=>setForm((draft)=>({
                                        ...draft,
                                        description: event.target.value
                                    })),
                            placeholder: "Phase description",
                            rows: 3,
                            className: "resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent"
                        }, void 0, false, {
                            fileName: "[project]/components/PhaseModal.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: form.startDate,
                                    onChange: (event)=>setForm((draft)=>({
                                                ...draft,
                                                startDate: event.target.value
                                            })),
                                    className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
                                }, void 0, false, {
                                    fileName: "[project]/components/PhaseModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: form.endDate,
                                    onChange: (event)=>setForm((draft)=>({
                                                ...draft,
                                                endDate: event.target.value
                                            })),
                                    className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
                                }, void 0, false, {
                                    fileName: "[project]/components/PhaseModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PhaseModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PhaseModal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/PhaseModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent",
                            children: phase ? "Save phase" : "Add phase"
                        }, void 0, false, {
                            fileName: "[project]/components/PhaseModal.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PhaseModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PhaseModal.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PhaseModal.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(PhaseModal, "ayKd7GdzWALhHY1YpgjHXbKwKck=");
_c = PhaseModal;
var _c;
__turbopack_context__.k.register(_c, "PhaseModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProgressBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressBar",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function ProgressBar(param) {
    let { value, className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-2.5 overflow-hidden rounded-full bg-black/8 ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "h-full rounded-full bg-accent",
            initial: false,
            animate: {
                width: "".concat(Math.max(0, Math.min(100, value)), "%")
            },
            transition: {
                duration: 0.18,
                ease: "easeOut"
            }
        }, void 0, false, {
            fileName: "[project]/components/ProgressBar.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProgressBar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllTasks",
    ()=>getAllTasks,
    "getEffectiveTaskStatus",
    ()=>getEffectiveTaskStatus,
    "getPhaseProgress",
    ()=>getPhaseProgress,
    "isTaskUnlocked",
    ()=>isTaskUnlocked,
    "useRelocationStore",
    ()=>useRelocationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/persistence.ts [app-client] (ecmascript)");
"use client";
;
;
const makeId = (prefix)=>"".concat(prefix, "-").concat(Date.now().toString(36), "-").concat(Math.random().toString(36).slice(2, 7));
const getAllTasks = (phases)=>phases.flatMap((phase)=>phase.tasks.map((task)=>({
                ...task,
                phaseId: phase.id,
                phaseTitle: phase.title
            })));
const getPhaseProgress = (phase)=>{
    if (!phase.tasks.length) return 0;
    return Math.round(phase.tasks.filter((task)=>task.status === "completed").length / phase.tasks.length * 100);
};
const isTaskUnlocked = (task, phases)=>{
    var _task_dependsOn;
    if (!((_task_dependsOn = task.dependsOn) === null || _task_dependsOn === void 0 ? void 0 : _task_dependsOn.length)) return true;
    const allTasks = getAllTasks(phases);
    return task.dependsOn.every((id)=>{
        var _allTasks_find;
        return ((_allTasks_find = allTasks.find((item)=>item.id === id)) === null || _allTasks_find === void 0 ? void 0 : _allTasks_find.status) === "completed";
    });
};
const getEffectiveTaskStatus = (task, phases)=>{
    if (!isTaskUnlocked(task, phases)) return "locked";
    return task.status;
};
const sanitizeTask = (task)=>{
    var _task_note, _task_dependsOn;
    var _task_id, _task_status, _task_createdAt, _task_order;
    return {
        id: (_task_id = task.id) !== null && _task_id !== void 0 ? _task_id : makeId("task"),
        title: task.title.trim() || "Untitled checkpoint",
        note: (_task_note = task.note) === null || _task_note === void 0 ? void 0 : _task_note.trim(),
        deadline: task.deadline,
        status: (_task_status = task.status) !== null && _task_status !== void 0 ? _task_status : "available",
        dependsOn: (_task_dependsOn = task.dependsOn) === null || _task_dependsOn === void 0 ? void 0 : _task_dependsOn.filter(Boolean),
        createdAt: (_task_createdAt = task.createdAt) !== null && _task_createdAt !== void 0 ? _task_createdAt : new Date().toISOString(),
        order: (_task_order = task.order) !== null && _task_order !== void 0 ? _task_order : 0
    };
};
const getNextTaskOrder = (tasks, deadline)=>Math.max(-1, ...tasks.filter((task)=>task.deadline === deadline).map((task)=>{
        var _task_order;
        return (_task_order = task.order) !== null && _task_order !== void 0 ? _task_order : 0;
    })) + 1;
const sanitizeInventoryItem = (item)=>{
    var _item_topic, _item_notes;
    var _item_id, _item_packed, _item_packingOrder;
    return {
        id: (_item_id = item.id) !== null && _item_id !== void 0 ? _item_id : makeId("item"),
        name: item.name.trim() || "Untitled item",
        categoryId: item.categoryId,
        topic: ((_item_topic = item.topic) === null || _item_topic === void 0 ? void 0 : _item_topic.trim()) || undefined,
        quantity: item.quantity.trim() || "1",
        status: item.status,
        buyLocation: item.buyLocation,
        priority: item.priority,
        notes: (_item_notes = item.notes) === null || _item_notes === void 0 ? void 0 : _item_notes.trim(),
        containerId: item.containerId || undefined,
        packed: (_item_packed = item.packed) !== null && _item_packed !== void 0 ? _item_packed : false,
        packingOrder: (_item_packingOrder = item.packingOrder) !== null && _item_packingOrder !== void 0 ? _item_packingOrder : 0
    };
};
const getNextPackingOrder = (items)=>Math.max(-1, ...items.filter((item)=>!item.containerId).map((item)=>{
        var _item_packingOrder;
        return (_item_packingOrder = item.packingOrder) !== null && _item_packingOrder !== void 0 ? _item_packingOrder : 0;
    })) + 1;
const persistData = (phases, inventoryCategories, inventoryItems, packingContainers)=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenData"])(phases, inventoryCategories, inventoryItems, packingContainers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveData"])(data);
    return data.updatedAt;
};
const useRelocationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set, get)=>{
    var _createSeedStorageData_phases_;
    var _createSeedStorageData_phases__id;
    return {
        phases: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeedStorageData"])().phases.map((phase)=>({
                ...phase,
                tasks: []
            })),
        inventoryCategories: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeedStorageData"])().inventoryCategories,
        inventoryItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeedStorageData"])().inventoryItems,
        packingContainers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeedStorageData"])().packingContainers,
        selectedPhaseId: (_createSeedStorageData_phases__id = (_createSeedStorageData_phases_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeedStorageData"])().phases[0]) === null || _createSeedStorageData_phases_ === void 0 ? void 0 : _createSeedStorageData_phases_.id) !== null && _createSeedStorageData_phases__id !== void 0 ? _createSeedStorageData_phases__id : "",
        hasHydrated: false,
        clearPersistenceError: ()=>set({
                persistenceError: undefined
            }),
        selectPhase: (phaseId)=>set({
                selectedPhaseId: phaseId
            }),
        hydrateData: ()=>{
            var _phases_;
            const loaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadData"])();
            const phases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydratePhases"])(loaded.data);
            var _phases__id;
            set({
                phases,
                inventoryCategories: loaded.data.inventoryCategories,
                inventoryItems: loaded.data.inventoryItems,
                packingContainers: loaded.data.packingContainers,
                selectedPhaseId: (_phases__id = (_phases_ = phases[0]) === null || _phases_ === void 0 ? void 0 : _phases_.id) !== null && _phases__id !== void 0 ? _phases__id : "",
                persistenceError: loaded.error,
                lastSavedAt: loaded.status === "error" ? undefined : loaded.data.updatedAt,
                hasHydrated: true
            });
        },
        addPhase: (phase)=>set((state)=>{
                const id = makeId("phase");
                const phases = [
                    ...state.phases,
                    {
                        id,
                        title: phase.title.trim() || "New Phase",
                        description: phase.description.trim() || "Describe this stage of the journey.",
                        startDate: phase.startDate,
                        endDate: phase.endDate,
                        tasks: []
                    }
                ];
                try {
                    return {
                        phases,
                        selectedPhaseId: id,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        selectedPhaseId: id,
                        persistenceError: error instanceof Error ? error.message : "Could not save phase."
                    };
                }
            }),
        updatePhase: (phaseId, patch)=>set((state)=>{
                const phases = state.phases.map((phase)=>phase.id === phaseId ? {
                        ...phase,
                        ...patch
                    } : phase);
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not save phase."
                    };
                }
            }),
        deletePhase: (phaseId)=>set((state)=>{
                var _state_phases_find;
                if (state.phases.length <= 1) return state;
                var _state_phases_find_tasks_map;
                const deletedTaskIds = (_state_phases_find_tasks_map = (_state_phases_find = state.phases.find((phase)=>phase.id === phaseId)) === null || _state_phases_find === void 0 ? void 0 : _state_phases_find.tasks.map((task)=>task.id)) !== null && _state_phases_find_tasks_map !== void 0 ? _state_phases_find_tasks_map : [];
                const phases = state.phases.filter((phase)=>phase.id !== phaseId).map((phase)=>({
                        ...phase,
                        tasks: phase.tasks.map((task)=>{
                            var _task_dependsOn;
                            return {
                                ...task,
                                dependsOn: (_task_dependsOn = task.dependsOn) === null || _task_dependsOn === void 0 ? void 0 : _task_dependsOn.filter((id)=>!deletedTaskIds.includes(id))
                            };
                        })
                    }));
                try {
                    var _phases_;
                    var _phases__id;
                    return {
                        phases,
                        selectedPhaseId: (_phases__id = (_phases_ = phases[0]) === null || _phases_ === void 0 ? void 0 : _phases_.id) !== null && _phases__id !== void 0 ? _phases__id : "",
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    var _phases_1;
                    var _phases__id1;
                    return {
                        phases,
                        selectedPhaseId: (_phases__id1 = (_phases_1 = phases[0]) === null || _phases_1 === void 0 ? void 0 : _phases_1.id) !== null && _phases__id1 !== void 0 ? _phases__id1 : "",
                        persistenceError: error instanceof Error ? error.message : "Could not delete phase."
                    };
                }
            }),
        addTask: (phaseId, task)=>set((state)=>{
                const phases = state.phases.map((phase)=>phase.id === phaseId ? {
                        ...phase,
                        tasks: [
                            ...phase.tasks,
                            sanitizeTask({
                                ...task,
                                order: getNextTaskOrder(phase.tasks, task.deadline)
                            })
                        ]
                    } : phase);
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not save task."
                    };
                }
            }),
        addTasks: (phaseId, tasks)=>set((state)=>{
                const phases = state.phases.map((phase)=>{
                    if (phase.id !== phaseId) return phase;
                    const nextOrders = new Map();
                    const sanitizedTasks = tasks.map((task)=>{
                        var _nextOrders_get;
                        const nextOrder = (_nextOrders_get = nextOrders.get(task.deadline)) !== null && _nextOrders_get !== void 0 ? _nextOrders_get : getNextTaskOrder(phase.tasks, task.deadline);
                        nextOrders.set(task.deadline, nextOrder + 1);
                        return sanitizeTask({
                            ...task,
                            order: nextOrder
                        });
                    });
                    return {
                        ...phase,
                        tasks: [
                            ...phase.tasks,
                            ...sanitizedTasks
                        ]
                    };
                });
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not save tasks."
                    };
                }
            }),
        updateTask: (phaseId, taskId, patch)=>set((state)=>{
                const phases = state.phases.map((phase)=>{
                    if (phase.id !== phaseId) return phase;
                    return {
                        ...phase,
                        tasks: phase.tasks.map((task)=>{
                            var _patch_title;
                            if (task.id !== taskId) return task;
                            const deadlineChanged = typeof patch.deadline === "string" && patch.deadline !== task.deadline && patch.order === undefined;
                            var _patch_order;
                            return {
                                ...task,
                                ...patch,
                                order: deadlineChanged ? getNextTaskOrder(phase.tasks, patch.deadline) : (_patch_order = patch.order) !== null && _patch_order !== void 0 ? _patch_order : task.order,
                                title: ((_patch_title = patch.title) === null || _patch_title === void 0 ? void 0 : _patch_title.trim()) || task.title
                            };
                        })
                    };
                });
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not save task."
                    };
                }
            }),
        reorderTasks: (phaseId, orderedTaskIds)=>set((state)=>{
                const orderedSet = new Set(orderedTaskIds);
                const phases = state.phases.map((phase)=>{
                    if (phase.id !== phaseId) return phase;
                    const orderedTasks = orderedTaskIds.map((id)=>phase.tasks.find((task)=>task.id === id)).filter((task)=>Boolean(task));
                    let index = 0;
                    return {
                        ...phase,
                        tasks: phase.tasks.map((task)=>orderedSet.has(task.id) ? {
                                ...orderedTasks[index],
                                order: index++
                            } : task)
                    };
                });
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not save task order."
                    };
                }
            }),
        deleteTask: (phaseId, taskId)=>set((state)=>{
                const phases = state.phases.map((phase)=>({
                        ...phase,
                        tasks: phase.id === phaseId ? phase.tasks.filter((task)=>task.id !== taskId).map((task)=>{
                            var _task_dependsOn;
                            return {
                                ...task,
                                dependsOn: (_task_dependsOn = task.dependsOn) === null || _task_dependsOn === void 0 ? void 0 : _task_dependsOn.filter((id)=>id !== taskId)
                            };
                        }) : phase.tasks.map((task)=>{
                            var _task_dependsOn;
                            return {
                                ...task,
                                dependsOn: (_task_dependsOn = task.dependsOn) === null || _task_dependsOn === void 0 ? void 0 : _task_dependsOn.filter((id)=>id !== taskId)
                            };
                        })
                    }));
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not delete task."
                    };
                }
            }),
        deleteTasks: (taskIds)=>set((state)=>{
                const deletedIds = new Set(taskIds);
                if (!deletedIds.size) return state;
                const phases = state.phases.map((phase)=>({
                        ...phase,
                        tasks: phase.tasks.filter((task)=>!deletedIds.has(task.id)).map((task)=>{
                            var _task_dependsOn;
                            return {
                                ...task,
                                dependsOn: (_task_dependsOn = task.dependsOn) === null || _task_dependsOn === void 0 ? void 0 : _task_dependsOn.filter((id)=>!deletedIds.has(id))
                            };
                        })
                    }));
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not delete selected tasks."
                    };
                }
            }),
        setTaskStatus: (phaseId, taskId, status)=>set((state)=>{
                const phases = state.phases.map((phase)=>phase.id === phaseId ? {
                        ...phase,
                        tasks: phase.tasks.map((task)=>task.id === taskId && (status !== "completed" || isTaskUnlocked(task, state.phases)) ? {
                                ...task,
                                status
                            } : task)
                    } : phase);
                try {
                    return {
                        phases,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not save task status."
                    };
                }
            }),
        completeTask: (phaseId, taskId)=>{
            var _beforePhases_find;
            const beforePhases = get().phases;
            const task = (_beforePhases_find = beforePhases.find((phase)=>phase.id === phaseId)) === null || _beforePhases_find === void 0 ? void 0 : _beforePhases_find.tasks.find((item)=>item.id === taskId);
            if (!task || !isTaskUnlocked(task, beforePhases)) return;
            var _beforePhases_find1;
            const wasPhaseComplete = getPhaseProgress((_beforePhases_find1 = beforePhases.find((phase)=>phase.id === phaseId)) !== null && _beforePhases_find1 !== void 0 ? _beforePhases_find1 : beforePhases[0]) === 100;
            const beforeUnlocked = getAllTasks(beforePhases).filter((item)=>isTaskUnlocked(item, beforePhases)).map((item)=>item.id);
            set((state)=>{
                const phases = state.phases.map((phase)=>phase.id === phaseId ? {
                        ...phase,
                        tasks: phase.tasks.map((item)=>item.id === taskId ? {
                                ...item,
                                status: item.status === "completed" ? "available" : "completed"
                            } : item)
                    } : phase);
                try {
                    return {
                        phases,
                        lastCompletedTaskId: task.status === "completed" ? undefined : taskId,
                        lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        phases,
                        persistenceError: error instanceof Error ? error.message : "Could not save task completion."
                    };
                }
            });
            const afterPhases = get().phases;
            const unlocked = getAllTasks(afterPhases).find((item)=>!beforeUnlocked.includes(item.id) && isTaskUnlocked(item, afterPhases));
            const afterPhase = afterPhases.find((phase)=>phase.id === phaseId);
            if (unlocked) set({
                lastUnlockedTaskId: unlocked.id
            });
            if (!wasPhaseComplete && afterPhase && getPhaseProgress(afterPhase) === 100) set({
                lastCompletedPhaseId: phaseId
            });
        },
        addInventoryItem: (item)=>set((state)=>{
                var _item_packingOrder;
                const inventoryItems = [
                    ...state.inventoryItems,
                    sanitizeInventoryItem({
                        ...item,
                        packingOrder: (_item_packingOrder = item.packingOrder) !== null && _item_packingOrder !== void 0 ? _item_packingOrder : getNextPackingOrder(state.inventoryItems)
                    })
                ];
                try {
                    return {
                        inventoryItems,
                        lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        inventoryItems,
                        persistenceError: error instanceof Error ? error.message : "Could not save inventory item."
                    };
                }
            }),
        updateInventoryItem: (itemId, patch)=>set((state)=>{
                const inventoryItems = state.inventoryItems.map((item)=>item.id === itemId ? sanitizeInventoryItem({
                        ...item,
                        ...patch,
                        id: item.id
                    }) : item);
                try {
                    return {
                        inventoryItems,
                        lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        inventoryItems,
                        persistenceError: error instanceof Error ? error.message : "Could not update inventory item."
                    };
                }
            }),
        deleteInventoryItem: (itemId)=>set((state)=>{
                const inventoryItems = state.inventoryItems.filter((item)=>item.id !== itemId);
                try {
                    return {
                        inventoryItems,
                        lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        inventoryItems,
                        persistenceError: error instanceof Error ? error.message : "Could not delete inventory item."
                    };
                }
            }),
        deleteInventoryItems: (itemIds)=>set((state)=>{
                const deletedIds = new Set(itemIds);
                if (!deletedIds.size) return state;
                const inventoryItems = state.inventoryItems.filter((item)=>!deletedIds.has(item.id));
                try {
                    return {
                        inventoryItems,
                        lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        inventoryItems,
                        persistenceError: error instanceof Error ? error.message : "Could not delete selected inventory items."
                    };
                }
            }),
        assignInventoryItem: (itemId, containerId)=>set((state)=>{
                const inventoryItems = state.inventoryItems.map((item)=>item.id === itemId ? {
                        ...item,
                        containerId: containerId || undefined,
                        packed: Boolean(containerId),
                        packingOrder: containerId ? item.packingOrder : getNextPackingOrder(state.inventoryItems.filter((candidate)=>candidate.id !== itemId))
                    } : item);
                try {
                    return {
                        inventoryItems,
                        lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        inventoryItems,
                        persistenceError: error instanceof Error ? error.message : "Could not assign inventory item."
                    };
                }
            }),
        reorderUnassignedItems: (orderedItemIds)=>set((state)=>{
                const orderedSet = new Set(orderedItemIds);
                const inventoryItems = state.inventoryItems.map((item)=>orderedSet.has(item.id) ? {
                        ...item,
                        packingOrder: orderedItemIds.indexOf(item.id)
                    } : item);
                try {
                    return {
                        inventoryItems,
                        lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        inventoryItems,
                        persistenceError: error instanceof Error ? error.message : "Could not save packing order."
                    };
                }
            }),
        toggleInventoryPacked: (itemId)=>set((state)=>{
                const inventoryItems = state.inventoryItems.map((item)=>item.id === itemId ? {
                        ...item,
                        packed: !item.packed
                    } : item);
                try {
                    return {
                        inventoryItems,
                        lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers),
                        persistenceError: undefined
                    };
                } catch (error) {
                    return {
                        inventoryItems,
                        persistenceError: error instanceof Error ? error.message : "Could not update packed status."
                    };
                }
            }),
        replaceData: (phases, inventoryCategories, inventoryItems, packingContainers)=>{
            var _phases_;
            var _phases__id;
            const selectedPhaseId = (_phases__id = (_phases_ = phases[0]) === null || _phases_ === void 0 ? void 0 : _phases_.id) !== null && _phases__id !== void 0 ? _phases__id : "";
            try {
                set((state)=>{
                    const nextCategories = inventoryCategories !== null && inventoryCategories !== void 0 ? inventoryCategories : state.inventoryCategories;
                    const nextItems = inventoryItems !== null && inventoryItems !== void 0 ? inventoryItems : state.inventoryItems;
                    const nextContainers = packingContainers !== null && packingContainers !== void 0 ? packingContainers : state.packingContainers;
                    return {
                        phases,
                        inventoryCategories: nextCategories,
                        inventoryItems: nextItems,
                        packingContainers: nextContainers,
                        selectedPhaseId,
                        lastSavedAt: persistData(phases, nextCategories, nextItems, nextContainers),
                        persistenceError: undefined
                    };
                });
            } catch (error) {
                set({
                    persistenceError: error instanceof Error ? error.message : "Could not restore backup."
                });
            }
        },
        resetToSampleData: ()=>{
            const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSeedStorageData"])();
            const phases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydratePhases"])(data);
            try {
                var _phases_;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$persistence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveData"])(data);
                var _phases__id;
                set({
                    phases,
                    inventoryCategories: data.inventoryCategories,
                    inventoryItems: data.inventoryItems,
                    packingContainers: data.packingContainers,
                    selectedPhaseId: (_phases__id = (_phases_ = phases[0]) === null || _phases_ === void 0 ? void 0 : _phases_.id) !== null && _phases__id !== void 0 ? _phases__id : "",
                    lastSavedAt: data.updatedAt,
                    persistenceError: undefined
                });
            } catch (error) {
                set({
                    persistenceError: error instanceof Error ? error.message : "Could not reset sample data."
                });
            }
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TaskModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskModal",
    ()=>TaskModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const today = new Date().toISOString().slice(0, 10);
function TaskModal(param) {
    let { phase, phases, task, onClose, onSubmit } = param;
    var _task_dependsOn;
    _s();
    var _task_title, _task_note, _task_deadline, _task_status, _task_dependsOn_;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: (_task_title = task === null || task === void 0 ? void 0 : task.title) !== null && _task_title !== void 0 ? _task_title : "",
        note: (_task_note = task === null || task === void 0 ? void 0 : task.note) !== null && _task_note !== void 0 ? _task_note : "",
        deadline: (_task_deadline = task === null || task === void 0 ? void 0 : task.deadline) !== null && _task_deadline !== void 0 ? _task_deadline : today,
        status: (_task_status = task === null || task === void 0 ? void 0 : task.status) !== null && _task_status !== void 0 ? _task_status : "available",
        dependency: (_task_dependsOn_ = task === null || task === void 0 ? void 0 : (_task_dependsOn = task.dependsOn) === null || _task_dependsOn === void 0 ? void 0 : _task_dependsOn[0]) !== null && _task_dependsOn_ !== void 0 ? _task_dependsOn_ : ""
    });
    const dependencyOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TaskModal.useMemo[dependencyOptions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllTasks"])(phases).filter({
                "TaskModal.useMemo[dependencyOptions]": (item)=>item.id !== (task === null || task === void 0 ? void 0 : task.id)
            }["TaskModal.useMemo[dependencyOptions]"])
    }["TaskModal.useMemo[dependencyOptions]"], [
        phases,
        task === null || task === void 0 ? void 0 : task.id
    ]);
    const submit = (event)=>{
        event.preventDefault();
        onSubmit({
            id: task === null || task === void 0 ? void 0 : task.id,
            title: form.title,
            note: form.note,
            deadline: form.deadline,
            status: form.status,
            dependsOn: form.dependency ? [
                form.dependency
            ] : undefined
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-40 grid place-items-end bg-black/20 p-3 backdrop-blur-sm sm:place-items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            onSubmit: submit,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.16,
                ease: "easeOut"
            },
            className: "w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.24em] text-black/40",
                                    children: task ? "Edit checkpoint" : "New checkpoint"
                                }, void 0, false, {
                                    fileName: "[project]/components/TaskModal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-2xl font-semibold",
                                    children: phase.title
                                }, void 0, false, {
                                    fileName: "[project]/components/TaskModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                            "aria-label": "Close task editor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/TaskModal.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TaskModal.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.title,
                            onChange: (event)=>setForm((draft)=>({
                                        ...draft,
                                        title: event.target.value
                                    })),
                            placeholder: "Checkpoint title",
                            className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
                        }, void 0, false, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: form.note,
                            onChange: (event)=>setForm((draft)=>({
                                        ...draft,
                                        note: event.target.value
                                    })),
                            placeholder: "Optional note",
                            rows: 3,
                            className: "resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent"
                        }, void 0, false, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: form.deadline,
                                    onChange: (event)=>setForm((draft)=>({
                                                ...draft,
                                                deadline: event.target.value
                                            })),
                                    className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
                                }, void 0, false, {
                                    fileName: "[project]/components/TaskModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: form.status,
                                    onChange: (event)=>setForm((draft)=>({
                                                ...draft,
                                                status: event.target.value
                                            })),
                                    className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "available",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TaskModal.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "in_progress",
                                            children: "In progress"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TaskModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "completed",
                                            children: "Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TaskModal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TaskModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: form.dependency,
                            onChange: (event)=>setForm((draft)=>({
                                        ...draft,
                                        dependency: event.target.value
                                    })),
                            className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "No dependency"
                                }, void 0, false, {
                                    fileName: "[project]/components/TaskModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                dependencyOptions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: item.id,
                                        children: [
                                            "After ",
                                            item.phaseTitle,
                                            ": ",
                                            item.title
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/components/TaskModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TaskModal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent",
                            children: task ? "Save checkpoint" : "Add checkpoint"
                        }, void 0, false, {
                            fileName: "[project]/components/TaskModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TaskModal.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TaskModal.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TaskModal.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(TaskModal, "1260slmxBopv/l3IA2jOBpvEdQ8=");
_c = TaskModal;
var _c;
__turbopack_context__.k.register(_c, "TaskModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TaskTextModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskTextModal",
    ()=>TaskTextModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TaskTextModal(param) {
    let { phase, task, onClose, onSubmit } = param;
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(task.title);
    var _task_note;
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_task_note = task.note) !== null && _task_note !== void 0 ? _task_note : "");
    const submit = (event)=>{
        event.preventDefault();
        const cleanTitle = title.trim();
        if (!cleanTitle) return;
        onSubmit({
            title: cleanTitle,
            note: note.trim()
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-40 grid place-items-end bg-black/20 p-3 backdrop-blur-sm sm:place-items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            onSubmit: submit,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.16,
                ease: "easeOut"
            },
            className: "w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.24em] text-black/40",
                                    children: "Edit text"
                                }, void 0, false, {
                                    fileName: "[project]/components/TaskTextModal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-2xl font-semibold",
                                    children: phase.title
                                }, void 0, false, {
                                    fileName: "[project]/components/TaskTextModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TaskTextModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                            "aria-label": "Close text editor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/TaskTextModal.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TaskTextModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TaskTextModal.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: title,
                            onChange: (event)=>setTitle(event.target.value),
                            placeholder: "Checkpoint title",
                            className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/components/TaskTextModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: note,
                            onChange: (event)=>setNote(event.target.value),
                            placeholder: "Optional note",
                            rows: 4,
                            className: "resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent"
                        }, void 0, false, {
                            fileName: "[project]/components/TaskTextModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TaskTextModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/TaskTextModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: !title.trim(),
                            className: "h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent disabled:bg-black/20",
                            children: "Save text"
                        }, void 0, false, {
                            fileName: "[project]/components/TaskTextModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TaskTextModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TaskTextModal.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TaskTextModal.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(TaskTextModal, "F3xBSArm7BEcWdqrR7bJkWGcU5c=");
_c = TaskTextModal;
var _c;
__turbopack_context__.k.register(_c, "TaskTextModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/date.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDateRange",
    ()=>formatDateRange,
    "formatShortDate",
    ()=>formatShortDate,
    "getDaysAway",
    ()=>getDaysAway,
    "isOverdue",
    ()=>isOverdue
]);
const formatShortDate = (value)=>new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric"
    }).format(new Date("".concat(value, "T00:00:00")));
const formatDateRange = (startDate, endDate)=>"".concat(formatShortDate(startDate), " - ").concat(formatShortDate(endDate));
const getDaysAway = (date)=>{
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date("".concat(date, "T00:00:00"));
    const diff = Math.ceil((due.getTime() - today.getTime()) / 86_400_000);
    if (diff < 0) return "".concat(Math.abs(diff), "d late");
    if (diff === 0) return "today";
    return "".concat(diff, "d");
};
const isOverdue = (date, completed)=>{
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date("".concat(date, "T00:00:00")) < today && !completed;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <export * as Reorder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/backpack.js [app-client] (ecmascript) <export default as Backpack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$luggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Luggage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/luggage.js [app-client] (ecmascript) <export default as Luggage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BulkAddTasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BulkAddTasks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataSafetyPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DataSafetyPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PhaseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PhaseModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TaskModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TaskTextModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TaskTextModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const navItems = [
    {
        id: "timeline",
        label: "Progress",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 40,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "categories",
        label: "Categories",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 41,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "packing",
        label: "Packing",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 42,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "tasks",
        label: "All Tasks",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 43,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "archive",
        label: "Archive",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 44,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Home() {
    var _phases_;
    _s();
    const { phases, inventoryCategories, inventoryItems, packingContainers, selectedPhaseId, persistenceError, lastSavedAt, lastCompletedTaskId, lastUnlockedTaskId, lastCompletedPhaseId, selectPhase, addPhase, updatePhase, deletePhase, addTask, addTasks, updateTask, reorderTasks, deleteTask, deleteTasks, setTaskStatus, completeTask, addInventoryItem, updateInventoryItem, deleteInventoryItem, deleteInventoryItems, assignInventoryItem, reorderUnassignedItems, replaceData, resetToSampleData, hydrateData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRelocationStore"])();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("timeline");
    const [taskFilter, setTaskFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [phaseEditor, setPhaseEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [taskEditor, setTaskEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBulkAddOpen, setBulkAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSettingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            hydrateData();
        }
    }["Home.useEffect"], [
        hydrateData
    ]);
    var _phases_find;
    const selectedPhase = (_phases_find = phases.find((phase)=>phase.id === selectedPhaseId)) !== null && _phases_find !== void 0 ? _phases_find : phases[0];
    const allTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[allTasks]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllTasks"])(phases)
    }["Home.useMemo[allTasks]"], [
        phases
    ]);
    const completedTasks = allTasks.filter((task)=>task.status === "completed");
    const activeTasks = allTasks.filter((task)=>task.status !== "completed");
    const overallProgress = allTasks.length ? Math.round(completedTasks.length / allTasks.length * 100) : 0;
    const dependencyTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[dependencyTitle]": ()=>new globalThis.Map(allTasks.map({
                "Home.useMemo[dependencyTitle]": (task)=>[
                        task.id,
                        task.title
                    ]
            }["Home.useMemo[dependencyTitle]"]))
    }["Home.useMemo[dependencyTitle]"], [
        allTasks
    ]);
    const recentCompleted = completedTasks.slice(-3).reverse();
    const taskPhase = taskEditor ? phases.find((phase)=>phase.id === taskEditor.phaseId) : undefined;
    const hasQuestData = phases.length > 0;
    var _selectedPhase_tasks_map;
    const phaseTasks = (_selectedPhase_tasks_map = selectedPhase === null || selectedPhase === void 0 ? void 0 : selectedPhase.tasks.map((task)=>({
            ...task,
            phaseId: selectedPhase.id,
            phaseTitle: selectedPhase.title
        }))) !== null && _selectedPhase_tasks_map !== void 0 ? _selectedPhase_tasks_map : [];
    const visiblePhaseTasks = phaseTasks.filter((task)=>taskFilter === "all" || task.status === taskFilter);
    const openTaskEditor = function(phaseId, task) {
        let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "full";
        return setTaskEditor({
            phaseId,
            task,
            mode
        });
    };
    const confirmDeleteTask = (phaseId, taskId)=>{
        if (window.confirm("Delete this task? This cannot be undone unless you restore a backup.")) deleteTask(phaseId, taskId);
    };
    const confirmDeletePhase = (phaseId)=>{
        if (window.confirm("Delete this phase and its tasks? This cannot be undone unless you restore a backup.")) deletePhase(phaseId);
    };
    var _selectedPhase_id, _ref;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#f7f6f2] text-ink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid min-h-screen w-full max-w-[1480px] gap-4 px-3 py-3 md:px-4 lg:grid-cols-[238px_minmax(0,1fr)_260px] lg:py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sidebar, {
                        phases: phases,
                        selectedPhaseId: selectedPhaseId,
                        viewMode: viewMode,
                        onViewChange: setViewMode,
                        onPhaseSelect: (id)=>{
                            selectPhase(id);
                            setViewMode("timeline");
                        },
                        onAddPhase: ()=>setPhaseEditor("new"),
                        onOpenSettings: ()=>setSettingsOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "order-1 min-w-0 lg:order-2 lg:py-1",
                        children: !hasQuestData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyRecovery, {
                            error: persistenceError,
                            phases: phases,
                            inventoryCategories: inventoryCategories,
                            inventoryItems: inventoryItems,
                            packingContainers: packingContainers,
                            lastSavedAt: lastSavedAt,
                            onRestore: replaceData,
                            onReset: resetToSampleData
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "sync",
                            children: [
                                viewMode === "timeline" && selectedPhase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.12,
                                        ease: "easeOut"
                                    },
                                    className: "space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhaseHero, {
                                            phase: selectedPhase,
                                            phases: phases,
                                            progress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhaseProgress"])(selectedPhase),
                                            onPhaseSelect: selectPhase,
                                            onEdit: ()=>setPhaseEditor(selectedPhase),
                                            onDelete: ()=>confirmDeletePhase(selectedPhase.id)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        lastCompletedPhaseId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.16
                                            },
                                            className: "rounded-2xl border border-accent/20 bg-accent/8 px-4 py-3 text-sm font-medium text-ink",
                                            children: "Phase cleared. The route ahead is a little lighter now."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskWorkspace, {
                                            title: "Tasks",
                                            tasks: visiblePhaseTasks,
                                            phases: phases,
                                            dependencyTitle: dependencyTitle,
                                            filter: taskFilter,
                                            onFilterChange: setTaskFilter,
                                            lastCompletedTaskId: lastCompletedTaskId,
                                            lastUnlockedTaskId: lastUnlockedTaskId,
                                            onAddTask: ()=>openTaskEditor(selectedPhase.id),
                                            onBulkAdd: ()=>setBulkAddOpen(true),
                                            onEditTask: openTaskEditor,
                                            onEditDate: (phaseId, taskId, deadline)=>updateTask(phaseId, taskId, {
                                                    deadline
                                                }),
                                            onDeleteTask: confirmDeleteTask,
                                            onDeleteTasks: deleteTasks,
                                            onComplete: completeTask,
                                            onStatusChange: setTaskStatus,
                                            onReorderTasks: reorderTasks
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, "phase-workspace", true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this),
                                viewMode === "categories" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.12,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoriesView, {
                                        categories: inventoryCategories,
                                        items: inventoryItems,
                                        onAddItem: addInventoryItem,
                                        onUpdateItem: updateInventoryItem,
                                        onDeleteItem: deleteInventoryItem,
                                        onDeleteItems: deleteInventoryItems
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 19
                                    }, this)
                                }, "categories", false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this),
                                viewMode === "packing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.12,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackingView, {
                                        categories: inventoryCategories,
                                        items: inventoryItems,
                                        containers: packingContainers,
                                        onAssign: assignInventoryItem,
                                        onDeleteItem: deleteInventoryItem,
                                        onReorderUnassigned: reorderUnassignedItems
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 19
                                    }, this)
                                }, "packing", false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this),
                                viewMode === "tasks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.12,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskWorkspace, {
                                        title: "All open checkpoints",
                                        tasks: activeTasks,
                                        phases: phases,
                                        dependencyTitle: dependencyTitle,
                                        filter: "all",
                                        onFilterChange: ()=>undefined,
                                        lastCompletedTaskId: lastCompletedTaskId,
                                        lastUnlockedTaskId: lastUnlockedTaskId,
                                        onAddTask: ()=>openTaskEditor(selectedPhase.id),
                                        onBulkAdd: ()=>setBulkAddOpen(true),
                                        onEditTask: openTaskEditor,
                                        onEditDate: (phaseId, taskId, deadline)=>updateTask(phaseId, taskId, {
                                                deadline
                                            }),
                                        onDeleteTask: confirmDeleteTask,
                                        onDeleteTasks: deleteTasks,
                                        onComplete: completeTask,
                                        onStatusChange: setTaskStatus
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 19
                                    }, this)
                                }, "tasks", false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this),
                                viewMode === "archive" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.12,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskWorkspace, {
                                        title: "Completed archive",
                                        tasks: completedTasks,
                                        phases: phases,
                                        dependencyTitle: dependencyTitle,
                                        filter: "completed",
                                        onFilterChange: ()=>undefined,
                                        lastCompletedTaskId: lastCompletedTaskId,
                                        lastUnlockedTaskId: lastUnlockedTaskId,
                                        onAddTask: ()=>openTaskEditor(selectedPhase.id),
                                        onBulkAdd: ()=>setBulkAddOpen(true),
                                        onEditTask: openTaskEditor,
                                        onEditDate: (phaseId, taskId, deadline)=>updateTask(phaseId, taskId, {
                                                deadline
                                            }),
                                        onDeleteTask: confirmDeleteTask,
                                        onDeleteTasks: deleteTasks,
                                        onComplete: completeTask,
                                        onStatusChange: setTaskStatus,
                                        empty: "Completed checkpoints will collect here.",
                                        hideAdd: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 19
                                    }, this)
                                }, "archive", false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RightRail, {
                        overallProgress: overallProgress,
                        completedTasks: completedTasks.length,
                        totalTasks: allTasks.length,
                        nextTasks: activeTasks.filter((task)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTaskUnlocked"])(task, phases)).slice(0, 3),
                        recentCompleted: recentCompleted,
                        onOpenSettings: ()=>setSettingsOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: [
                    phaseEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PhaseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhaseModal"], {
                        phase: phaseEditor === "new" ? undefined : phaseEditor,
                        onClose: ()=>setPhaseEditor(null),
                        onSubmit: (phase)=>{
                            if (phaseEditor === "new") addPhase(phase);
                            else updatePhase(phaseEditor.id, phase);
                            setPhaseEditor(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    taskEditor && taskPhase && taskEditor.mode === "text" && taskEditor.task ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TaskTextModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskTextModal"], {
                        phase: taskPhase,
                        task: taskEditor.task,
                        onClose: ()=>setTaskEditor(null),
                        onSubmit: (task)=>{
                            updateTask(taskEditor.phaseId, taskEditor.task.id, task);
                            setTaskEditor(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this) : taskEditor && taskPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskModal"], {
                        phase: taskPhase,
                        phases: phases,
                        task: taskEditor.task,
                        onClose: ()=>setTaskEditor(null),
                        onSubmit: (task)=>{
                            if (taskEditor.task) updateTask(taskEditor.phaseId, taskEditor.task.id, task);
                            else addTask(taskEditor.phaseId, task);
                            setTaskEditor(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this) : null,
                    isBulkAddOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BulkAddTasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkAddTasks"], {
                        phases: phases,
                        defaultPhaseId: (_ref = (_selectedPhase_id = selectedPhase === null || selectedPhase === void 0 ? void 0 : selectedPhase.id) !== null && _selectedPhase_id !== void 0 ? _selectedPhase_id : (_phases_ = phases[0]) === null || _phases_ === void 0 ? void 0 : _phases_.id) !== null && _ref !== void 0 ? _ref : "",
                        onClose: ()=>setBulkAddOpen(false),
                        onCreate: (phaseId, tasks)=>addTasks(phaseId, tasks)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    isSettingsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UtilityDrawer, {
                        phases: phases,
                        inventoryCategories: inventoryCategories,
                        inventoryItems: inventoryItems,
                        packingContainers: packingContainers,
                        error: persistenceError,
                        lastSavedAt: lastSavedAt,
                        onClose: ()=>setSettingsOpen(false),
                        onRestore: replaceData,
                        onReset: resetToSampleData
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(Home, "4IMJ6rvVIwWCBuxQZU96YyCdkIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRelocationStore"]
    ];
});
_c = Home;
function Sidebar(param) {
    let { phases, selectedPhaseId, viewMode, onViewChange, onPhaseSelect, onAddPhase, onOpenSettings } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "order-2 rounded-[1.35rem] border border-black/8 bg-white/68 p-4 shadow-[0_12px_34px_rgba(23,23,23,0.035)] backdrop-blur-xl lg:sticky lg:top-5 lg:order-1 lg:h-[calc(100vh-2.5rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent/10 text-accent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-semibold leading-tight",
                                children: "Relocation Quest"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-black/42",
                                children: "Seoul to Berlin"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mt-7 grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-1",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onViewChange(item.id),
                        className: "inline-flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition ".concat(viewMode === item.id ? "bg-accent/10 text-accent" : "text-black/42 hover:bg-black/[0.035] hover:text-ink"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "[&_svg]:h-4 [&_svg]:w-4",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            item.label
                        ]
                    }, item.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-[0.18em] text-black/35",
                                children: "Phases"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddPhase,
                                className: "grid h-8 w-8 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-accent hover:text-accent",
                                "aria-label": "Add phase",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: phases.map((phase)=>{
                            const active = phase.id === selectedPhaseId;
                            const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhaseProgress"])(phase);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onPhaseSelect(phase.id),
                                className: "w-full rounded-xl px-3 py-2.5 text-left transition ".concat(active ? "bg-accent/8 text-ink ring-1 ring-accent/20" : "text-black/42 hover:bg-black/[0.035] hover:text-ink"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate text-sm ".concat(active ? "font-semibold" : "font-medium"),
                                                children: phase.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-full ".concat(progress === 100 ? "bg-accent/60" : active ? "bg-accent/35" : "bg-black/18")
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs ".concat(active ? "text-black/42" : "text-black/38"),
                                        children: [
                                            progress,
                                            "% ",
                                            " · ",
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateRange"])(phase.startDate, phase.endDate)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 346,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onOpenSettings,
                className: "mt-7 inline-flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-semibold text-black/42 transition hover:bg-black/[0.035] hover:text-ink",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    "Settings"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_c1 = Sidebar;
function PhaseHero(param) {
    let { phase, phases, progress, onPhaseSelect, onEdit, onDelete } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden rounded-[1.7rem] border border-black/8 bg-white/92 shadow-[0_18px_54px_rgba(23,23,23,0.055)] backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 p-6 sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid h-16 w-16 place-items-center rounded-[1.2rem] bg-accent/10 text-accent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                        className: "h-8 w-8"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-black/42",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateRange"])(phase.startDate, phase.endDate)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-1 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl",
                            children: phase.title
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-2xl text-base leading-7 text-black/56",
                            children: phase.description
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JourneyLine, {
                            phases: phases,
                            activePhaseId: phase.id,
                            onSelect: onPhaseSelect
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-48 rounded-2xl bg-paper/45 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex items-center justify-between text-sm font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-black/40",
                                    children: "Phase"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        progress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                            value: progress
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onEdit,
                                    className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-accent hover:text-accent",
                                    "aria-label": "Edit phase",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onDelete,
                                    className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-red-400 hover:text-red-500",
                                    "aria-label": "Delete phase",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 382,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_c2 = PhaseHero;
function JourneyLine(param) {
    let { phases, activePhaseId, onSelect } = param;
    _s1();
    const railRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyLine.useEffect": ()=>{
            var _activeRef_current;
            (_activeRef_current = activeRef.current) === null || _activeRef_current === void 0 ? void 0 : _activeRef_current.scrollIntoView({
                behavior: "auto",
                block: "nearest",
                inline: "center"
            });
        }
    }["JourneyLine.useEffect"], [
        activePhaseId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white/90 to-transparent"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white/90 to-transparent"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: railRef,
                className: "flex snap-x items-stretch gap-3 overflow-x-auto scroll-smooth pb-2 pl-1 pr-6 no-scrollbar",
                children: phases.map((item, index)=>{
                    const active = item.id === activePhaseId;
                    const done = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhaseProgress"])(item) === 100;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: active ? activeRef : undefined,
                        onClick: ()=>onSelect(item.id),
                        className: "group flex min-w-[190px] max-w-[260px] snap-start items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ".concat(active ? "border-accent/35 bg-accent/8 shadow-[0_10px_28px_rgba(15,143,104,0.10)]" : "border-black/8 bg-white/70 hover:border-black/16"),
                        "aria-label": "Go to ".concat(item.title),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold transition ".concat(active ? "border-accent bg-accent text-white" : done ? "border-accent/30 bg-accent/10 text-accent" : "border-black/12 bg-white text-black/35 group-hover:border-black/25"),
                                children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 25
                                }, this) : index + 1
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 438,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block whitespace-normal text-sm font-semibold leading-5 ".concat(active ? "text-ink" : "text-black/58"),
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5 block text-xs text-black/38",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhaseProgress"])(item),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 429,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_s1(JourneyLine, "BSJvoUz/u1/9YYbr9+b5PRKVy70=");
_c3 = JourneyLine;
function TaskWorkspace(props) {
    _s2();
    const [selectionMode, setSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTaskIds, setSelectedTaskIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const taskGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TaskWorkspace.useMemo[taskGroups]": ()=>getTaskDateGroups(props.tasks)
    }["TaskWorkspace.useMemo[taskGroups]"], [
        props.tasks
    ]);
    const selectedTaskIdSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TaskWorkspace.useMemo[selectedTaskIdSet]": ()=>new Set(selectedTaskIds)
    }["TaskWorkspace.useMemo[selectedTaskIdSet]"], [
        selectedTaskIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskWorkspace.useEffect": ()=>{
            const visibleIds = new Set(props.tasks.map({
                "TaskWorkspace.useEffect": (task)=>task.id
            }["TaskWorkspace.useEffect"]));
            setSelectedTaskIds({
                "TaskWorkspace.useEffect": (ids)=>{
                    const nextIds = ids.filter({
                        "TaskWorkspace.useEffect.nextIds": (id)=>visibleIds.has(id)
                    }["TaskWorkspace.useEffect.nextIds"]);
                    return nextIds.length === ids.length ? ids : nextIds;
                }
            }["TaskWorkspace.useEffect"]);
        }
    }["TaskWorkspace.useEffect"], [
        props.tasks
    ]);
    const exitSelectionMode = ()=>{
        setSelectionMode(false);
        setSelectedTaskIds([]);
    };
    const selectAllVisibleTasks = ()=>{
        setSelectedTaskIds(props.tasks.map((task)=>task.id));
    };
    const toggleSelectedTask = (taskId)=>{
        setSelectedTaskIds((ids)=>ids.includes(taskId) ? ids.filter((id)=>id !== taskId) : [
                ...ids,
                taskId
            ]);
    };
    const clearSelectedTasks = ()=>setSelectedTaskIds([]);
    const deleteSelectedTasks = ()=>{
        if (!selectedTaskIds.length) return;
        if (!window.confirm("Delete ".concat(selectedTaskIds.length, " selected ").concat(selectedTaskIds.length === 1 ? "task" : "tasks", "? This cannot be undone."))) return;
        props.onDeleteTasks(selectedTaskIds);
        exitSelectionMode();
    };
    var _props_empty;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[1.5rem] border border-black/8 bg-white/94 p-5 shadow-[0_18px_54px_rgba(23,23,23,0.045)] backdrop-blur-xl sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold",
                            children: props.title
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    !props.hideAdd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (selectionMode) exitSelectionMode();
                                    else {
                                        setSelectionMode(true);
                                        setSelectedTaskIds([]);
                                    }
                                },
                                className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition ".concat(selectionMode ? "border-accent/20 bg-accent/[0.055] text-accent hover:bg-accent/10" : "border-black/10 bg-white/55 text-black/50 hover:border-accent/30 hover:text-accent"),
                                children: [
                                    selectionMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 60
                                    }, this),
                                    selectionMode ? "Cancel selection" : "Select"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: selectionMode,
                                onClick: props.onBulkAdd,
                                className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/30 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this),
                                    "Bulk add"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 526,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: selectionMode,
                                onClick: props.onAddTask,
                                className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(15,143,104,0.12)] transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-black/20 disabled:shadow-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this),
                                    "Add task"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 512,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            !props.hideAdd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex gap-2 overflow-x-auto pb-1 no-scrollbar",
                children: [
                    [
                        "all",
                        "All"
                    ],
                    [
                        "available",
                        "To do"
                    ],
                    [
                        "in_progress",
                        "In progress"
                    ],
                    [
                        "completed",
                        "Done"
                    ]
                ].map((param)=>{
                    let [id, label] = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>props.onFilterChange(id),
                        className: "h-9 rounded-full px-4 text-sm font-semibold transition ".concat(props.filter === id ? "bg-accent/10 text-accent" : "bg-paper text-black/50 hover:text-ink"),
                        children: label
                    }, id, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 546,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 539,
                columnNumber: 9
            }, this),
            selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex flex-col gap-3 rounded-2xl border border-accent/12 bg-accent/[0.045] px-3 py-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-black/58",
                        children: [
                            selectedTaskIds.length,
                            " ",
                            selectedTaskIds.length === 1 ? "task" : "tasks",
                            " selected",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 font-medium text-black/38",
                                children: "Completion is paused."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 555,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: selectAllVisibleTasks,
                                disabled: !props.tasks.length,
                                className: "h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35",
                                children: "Select all visible"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 560,
                                columnNumber: 13
                            }, this),
                            selectedTaskIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: deleteSelectedTasks,
                                className: "h-9 rounded-full border border-red-200 bg-white/70 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50",
                                children: "Delete selected"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 564,
                                columnNumber: 15
                            }, this),
                            selectedTaskIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clearSelectedTasks,
                                className: "h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent",
                                children: "Clear selection"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: exitSelectionMode,
                                className: "h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent",
                                children: "Cancel selection"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 559,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 554,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-7",
                children: taskGroups.length ? taskGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-end justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold uppercase tracking-[0.18em] text-black/32",
                                                children: "Due"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "mt-1 text-lg font-semibold text-ink",
                                                children: group.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-paper px-3 py-1 text-xs font-semibold text-black/40",
                                        children: [
                                            group.tasks.length,
                                            " ",
                                            group.tasks.length === 1 ? "checkpoint" : "checkpoints"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 589,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 584,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskReorderGroup, {
                                group: group,
                                phases: props.phases,
                                dependencyTitle: props.dependencyTitle,
                                lastCompletedTaskId: props.lastCompletedTaskId,
                                lastUnlockedTaskId: props.lastUnlockedTaskId,
                                selectionMode: selectionMode,
                                selectedTaskIds: selectedTaskIdSet,
                                onSelectTask: toggleSelectedTask,
                                onComplete: props.onComplete,
                                onStatusChange: props.onStatusChange,
                                onEditTask: props.onEditTask,
                                onEditDate: props.onEditDate,
                                onDeleteTask: props.onDeleteTask,
                                onReorderTasks: props.onReorderTasks
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this)
                        ]
                    }, group.key, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 583,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-dashed border-black/12 bg-white p-8 text-center text-sm text-black/45",
                    children: (_props_empty = props.empty) !== null && _props_empty !== void 0 ? _props_empty : "No checkpoints here yet."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 597,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 506,
        columnNumber: 5
    }, this);
}
_s2(TaskWorkspace, "er4geO+JsydXSchdX65k53qVBqc=");
_c4 = TaskWorkspace;
function getTaskDateGroups(tasks) {
    const sortedTasks = [
        ...tasks
    ].sort((a, b)=>{
        const dateCompare = (a.deadline || "9999-12-31").localeCompare(b.deadline || "9999-12-31");
        if (dateCompare !== 0) return dateCompare;
        var _a_order, _b_order;
        return ((_a_order = a.order) !== null && _a_order !== void 0 ? _a_order : 0) - ((_b_order = b.order) !== null && _b_order !== void 0 ? _b_order : 0);
    });
    return sortedTasks.reduce((groups, task)=>{
        const key = task.deadline || "no-date";
        const existing = groups.find((group)=>group.key === key);
        if (existing) {
            existing.tasks.push(task);
            return groups;
        }
        groups.push({
            key,
            label: task.deadline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(task.deadline) : "No date",
            tasks: [
                task
            ]
        });
        return groups;
    }, []);
}
const inventoryFilterLabels = [
    {
        id: "all",
        label: "All"
    },
    {
        id: "already_have",
        label: "Already have"
    },
    {
        id: "need_to_buy",
        label: "Need to buy"
    },
    {
        id: "korea",
        label: "Buy in Korea"
    },
    {
        id: "germany",
        label: "Buy in Germany"
    }
];
const statusLabels = {
    already_have: "Already have",
    need_to_buy: "Need to buy",
    bought: "Bought",
    optional: "Optional",
    important: "Important"
};
const buyLocationLabels = {
    none: "No buy plan",
    korea: "Buy in Korea",
    germany: "Buy in Germany"
};
function CategoriesView(param) {
    let { categories, items, onAddItem, onUpdateItem, onDeleteItem, onDeleteItems } = param;
    _s3();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [editor, setEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bulkEditor, setBulkEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectionMode, setSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedItemIds, setSelectedItemIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const visibleItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategoriesView.useMemo[visibleItems]": ()=>items.filter({
                "CategoriesView.useMemo[visibleItems]": (item)=>{
                    if (filter === "all") return true;
                    if (filter === "korea" || filter === "germany") return item.buyLocation === filter;
                    return item.status === filter;
                }
            }["CategoriesView.useMemo[visibleItems]"])
    }["CategoriesView.useMemo[visibleItems]"], [
        filter,
        items
    ]);
    const selectedItemIdSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategoriesView.useMemo[selectedItemIdSet]": ()=>new Set(selectedItemIds)
    }["CategoriesView.useMemo[selectedItemIdSet]"], [
        selectedItemIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoriesView.useEffect": ()=>{
            const visibleIds = new Set(visibleItems.map({
                "CategoriesView.useEffect": (item)=>item.id
            }["CategoriesView.useEffect"]));
            setSelectedItemIds({
                "CategoriesView.useEffect": (ids)=>{
                    const nextIds = ids.filter({
                        "CategoriesView.useEffect.nextIds": (id)=>visibleIds.has(id)
                    }["CategoriesView.useEffect.nextIds"]);
                    return nextIds.length === ids.length ? ids : nextIds;
                }
            }["CategoriesView.useEffect"]);
        }
    }["CategoriesView.useEffect"], [
        visibleItems
    ]);
    const exitSelectionMode = ()=>{
        setSelectionMode(false);
        setSelectedItemIds([]);
    };
    const selectAllVisibleItems = ()=>{
        setSelectedItemIds(visibleItems.map((item)=>item.id));
    };
    const toggleSelectedItem = (itemId)=>{
        setSelectedItemIds((ids)=>ids.includes(itemId) ? ids.filter((id)=>id !== itemId) : [
                ...ids,
                itemId
            ]);
    };
    const clearSelectedItems = ()=>setSelectedItemIds([]);
    const deleteSelectedItems = ()=>{
        if (!selectedItemIds.length) return;
        if (!window.confirm("Delete ".concat(selectedItemIds.length, " selected ").concat(selectedItemIds.length === 1 ? "item" : "items", "? This cannot be undone."))) return;
        onDeleteItems(selectedItemIds);
        exitSelectionMode();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[1.5rem] border border-black/8 bg-white/94 p-5 shadow-[0_18px_54px_rgba(23,23,23,0.045)] sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-black/42",
                                children: "Inventory"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 695,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 text-3xl font-semibold",
                                children: "Categories"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 696,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-xl text-sm leading-6 text-black/50",
                                children: "Organize belongings by stable home categories and buying decisions."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 697,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 694,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (selectionMode) exitSelectionMode();
                                    else {
                                        setSelectionMode(true);
                                        setSelectedItemIds([]);
                                    }
                                },
                                className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition ".concat(selectionMode ? "border-accent/20 bg-accent/[0.055] text-accent hover:bg-accent/10" : "border-black/10 bg-white/55 text-black/50 hover:border-accent/30 hover:text-accent"),
                                children: [
                                    selectionMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 710,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 710,
                                        columnNumber: 58
                                    }, this),
                                    selectionMode ? "Cancel selection" : "Select"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: selectionMode,
                                onClick: ()=>setBulkEditor({}),
                                className: "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/30 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 714,
                                        columnNumber: 13
                                    }, this),
                                    "Bulk add items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 693,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex gap-2 overflow-x-auto pb-1 no-scrollbar",
                children: inventoryFilterLabels.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter(item.id),
                        className: "h-9 shrink-0 rounded-full px-4 text-sm font-semibold transition ".concat(filter === item.id ? "bg-accent/10 text-accent" : "bg-paper text-black/50 hover:text-ink"),
                        children: item.label
                    }, item.id, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 721,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 719,
                columnNumber: 7
            }, this),
            selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex flex-col gap-3 rounded-2xl border border-accent/12 bg-accent/[0.045] px-3 py-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-black/58",
                        children: [
                            selectedItemIds.length,
                            " ",
                            selectedItemIds.length === 1 ? "item" : "items",
                            " selected",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 font-medium text-black/38",
                                children: "Item status is paused."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 728,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: selectAllVisibleItems,
                                disabled: !visibleItems.length,
                                className: "h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35",
                                children: "Select all visible"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 733,
                                columnNumber: 13
                            }, this),
                            selectedItemIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: deleteSelectedItems,
                                className: "h-9 rounded-full border border-red-200 bg-white/70 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50",
                                children: "Delete selected"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 737,
                                columnNumber: 15
                            }, this),
                            selectedItemIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clearSelectedItems,
                                className: "h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent",
                                children: "Clear selection"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 742,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: exitSelectionMode,
                                className: "h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent",
                                children: "Cancel selection"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 732,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 727,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: categories.map((category)=>{
                    const categoryItems = visibleItems.filter((item)=>item.categoryId === category.id);
                    const totalCount = items.filter((item)=>item.categoryId === category.id).length;
                    const topicGroups = groupInventoryByTopic(categoryItems);
                    if (!categoryItems.length && filter !== "all") return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        open: true,
                        className: "rounded-2xl border border-black/6 bg-paper/38 px-3 py-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "flex cursor-pointer list-none items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate text-base font-semibold",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 762,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs font-medium text-black/38",
                                                children: [
                                                    totalCount,
                                                    " items"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 763,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex shrink-0 items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: selectionMode,
                                                onClick: (event)=>{
                                                    event.preventDefault();
                                                    setBulkEditor({
                                                        categoryId: category.id,
                                                        fixedCategory: true
                                                    });
                                                },
                                                className: "inline-flex h-8 items-center gap-1.5 rounded-full bg-white/60 px-2.5 text-xs font-semibold text-black/48 transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-35",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Bulk"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: selectionMode,
                                                onClick: (event)=>{
                                                    event.preventDefault();
                                                    setEditor({
                                                        categoryId: category.id
                                                    });
                                                },
                                                className: "inline-flex h-8 items-center gap-1.5 rounded-full bg-white/60 px-2.5 text-xs font-semibold text-black/48 transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-35",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Add"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 770,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 765,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 760,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 overflow-hidden rounded-xl bg-white/62",
                                children: [
                                    topicGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-black/[0.055] first:border-t-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2 px-2.5 py-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "truncate text-xs font-semibold uppercase tracking-[0.14em] text-black/34",
                                                            children: group.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: selectionMode,
                                                            onClick: ()=>setBulkEditor({
                                                                    categoryId: category.id,
                                                                    topic: group.key === "general" ? "" : group.label,
                                                                    fixedCategory: true
                                                                }),
                                                            className: "inline-flex h-7 items-center gap-1 rounded-full px-2 text-xs font-semibold text-black/38 transition hover:bg-paper hover:text-accent disabled:cursor-not-allowed disabled:opacity-30",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-3.5 w-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 782,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Add lines"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "divide-y divide-black/[0.045]",
                                                    children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryItemRow, {
                                                            item: item,
                                                            selectionMode: selectionMode,
                                                            selected: selectedItemIdSet.has(item.id),
                                                            onSelect: ()=>toggleSelectedItem(item.id),
                                                            onRename: (name)=>onUpdateItem(item.id, {
                                                                    name
                                                                }),
                                                            onToggleStatus: ()=>onUpdateItem(item.id, {
                                                                    status: item.status === "already_have" ? "need_to_buy" : "already_have"
                                                                }),
                                                            onEdit: ()=>setEditor({
                                                                    categoryId: category.id,
                                                                    item
                                                                }),
                                                            onDelete: ()=>{
                                                                if (window.confirm("Delete this inventory item?")) onDeleteItem(item.id);
                                                            }
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, group.key, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 778,
                                            columnNumber: 19
                                        }, this)),
                                    !categoryItems.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rounded-xl bg-white/65 p-3 text-sm text-black/42",
                                        children: "No items in this category yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 776,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 759,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 752,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: [
                    editor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryItemModal, {
                        categories: categories,
                        defaultCategoryId: editor.categoryId,
                        item: editor.item,
                        onClose: ()=>setEditor(null),
                        onSubmit: (item)=>{
                            if (editor.item) onUpdateItem(editor.item.id, item);
                            else onAddItem(item);
                            setEditor(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 801,
                        columnNumber: 11
                    }, this),
                    bulkEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulkInventoryModal, {
                        categories: categories,
                        defaultCategoryId: bulkEditor.categoryId,
                        defaultTopic: bulkEditor.topic,
                        fixedCategory: bulkEditor.fixedCategory,
                        onClose: ()=>setBulkEditor(null),
                        onSubmit: (drafts)=>{
                            drafts.forEach(onAddItem);
                            setBulkEditor(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 814,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 799,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 692,
        columnNumber: 5
    }, this);
}
_s3(CategoriesView, "6dQ8Uj6tqcbnNJThP2KfFEb699o=");
_c5 = CategoriesView;
function groupInventoryByTopic(items) {
    const groups = new globalThis.Map();
    for (const item of items){
        var _item_topic;
        const topic = (_item_topic = item.topic) === null || _item_topic === void 0 ? void 0 : _item_topic.trim();
        const key = topic ? topic.toLowerCase() : "general";
        const label = topic || "General";
        const existing = groups.get(key);
        if (existing) existing.items.push(item);
        else groups.set(key, {
            key,
            label,
            items: [
                item
            ]
        });
    }
    return Array.from(groups.values());
}
function TaskReorderGroup(param) {
    let { group, phases, dependencyTitle, lastCompletedTaskId, lastUnlockedTaskId, onComplete, onStatusChange, onEditTask, onEditDate, onDeleteTask, onReorderTasks, selectionMode, selectedTaskIds, onSelectTask } = param;
    var _group_tasks_;
    _s4();
    const phaseId = (_group_tasks_ = group.tasks[0]) === null || _group_tasks_ === void 0 ? void 0 : _group_tasks_.phaseId;
    const reorderEnabled = Boolean(!selectionMode && onReorderTasks && phaseId && group.tasks.every((task)=>task.phaseId === phaseId));
    const sourceTaskIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TaskReorderGroup.useMemo[sourceTaskIds]": ()=>group.tasks.map({
                "TaskReorderGroup.useMemo[sourceTaskIds]": (task)=>task.id
            }["TaskReorderGroup.useMemo[sourceTaskIds]"])
    }["TaskReorderGroup.useMemo[sourceTaskIds]"], [
        group.tasks
    ]);
    const [orderedTaskIds, setOrderedTaskIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sourceTaskIds);
    const orderedTaskIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(sourceTaskIds);
    const taskById = new globalThis.Map(group.tasks.map((task)=>[
            task.id,
            task
        ]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskReorderGroup.useEffect": ()=>{
            setOrderedTaskIds(sourceTaskIds);
            orderedTaskIdsRef.current = sourceTaskIds;
        }
    }["TaskReorderGroup.useEffect"], [
        sourceTaskIds
    ]);
    const setTransientOrder = (ids)=>{
        orderedTaskIdsRef.current = ids;
        setOrderedTaskIds(ids);
    };
    const persistOrder = ()=>{
        if (!phaseId || !onReorderTasks) return;
        onReorderTasks(phaseId, orderedTaskIdsRef.current);
    };
    const renderTask = (task)=>{
        var _task_dependsOn;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskRow, {
            task: task,
            phases: phases,
            dependencyNames: ((_task_dependsOn = task.dependsOn) !== null && _task_dependsOn !== void 0 ? _task_dependsOn : []).map((id)=>dependencyTitle.get(id)).filter(Boolean),
            active: lastCompletedTaskId === task.id || lastUnlockedTaskId === task.id,
            dragEnabled: reorderEnabled,
            selectionMode: selectionMode,
            selected: selectedTaskIds.has(task.id),
            onSelect: ()=>onSelectTask(task.id),
            onComplete: ()=>onComplete(task.phaseId, task.id),
            onStatusChange: (status)=>onStatusChange(task.phaseId, task.id, status),
            onEditText: ()=>onEditTask(task.phaseId, task, "text"),
            onEditFull: ()=>onEditTask(task.phaseId, task),
            onEditDate: (deadline)=>onEditDate(task.phaseId, task.id, deadline),
            onDelete: ()=>onDeleteTask(task.phaseId, task.id),
            onDragEnd: persistOrder
        }, task.id, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 898,
            columnNumber: 5
        }, this);
    };
    if (!reorderEnabled || !phaseId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: group.tasks.map(renderTask)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 919,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Group, {
        axis: "y",
        values: orderedTaskIds,
        onReorder: setTransientOrder,
        className: "space-y-1.5",
        children: orderedTaskIds.map((taskId)=>taskById.get(taskId)).filter((task)=>Boolean(task)).map(renderTask)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 923,
        columnNumber: 5
    }, this);
}
_s4(TaskReorderGroup, "1GN1ZuGLPrO2GWxnLBIrMRfItX4=");
_c6 = TaskReorderGroup;
function InventoryItemRow(param) {
    let { item, selectionMode, selected, onSelect, onRename, onToggleStatus, onEdit, onDelete } = param;
    _s5();
    const [isRenaming, setRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftName, setDraftName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(item.name);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const checked = item.status === "already_have" || item.status === "bought";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InventoryItemRow.useEffect": ()=>{
            setDraftName(item.name);
        }
    }["InventoryItemRow.useEffect"], [
        item.name
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InventoryItemRow.useEffect": ()=>{
            if (selectionMode) setRenaming(false);
        }
    }["InventoryItemRow.useEffect"], [
        selectionMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InventoryItemRow.useEffect": ()=>{
            var _inputRef_current;
            if (isRenaming) (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        }
    }["InventoryItemRow.useEffect"], [
        isRenaming
    ]);
    const saveRename = ()=>{
        const nextName = draftName.trim();
        if (!nextName) {
            setDraftName(item.name);
            setRenaming(false);
            return;
        }
        if (nextName !== item.name) onRename(nextName);
        setRenaming(false);
    };
    const cancelRename = ()=>{
        setDraftName(item.name);
        setRenaming(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-10 items-center gap-2 px-2.5 py-1.5 transition ".concat(selectionMode && selected ? "bg-accent/[0.055]" : "hover:bg-paper/55"),
        children: [
            selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (event)=>{
                    event.stopPropagation();
                    onSelect();
                },
                className: "grid h-5 w-5 shrink-0 place-items-center rounded-md border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(selected ? "border-accent bg-accent text-white" : "border-black/18 bg-white text-black/25 hover:border-accent/40"),
                "aria-label": selected ? "Unselect ".concat(item.name) : "Select ".concat(item.name),
                children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 993,
                    columnNumber: 24
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 984,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (event)=>{
                    event.stopPropagation();
                    if (!selectionMode) onToggleStatus();
                },
                disabled: selectionMode,
                className: "grid h-5 w-5 shrink-0 place-items-center rounded-md border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(checked ? "border-accent/50 bg-accent/10 text-accent" : "border-black/12 bg-white text-black/25 hover:border-black/25", " ").concat(selectionMode ? "cursor-not-allowed opacity-35" : ""),
                "aria-label": checked ? "Mark ".concat(item.name, " as need to buy") : "Mark ".concat(item.name, " as already have"),
                children: checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1006,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 996,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: isRenaming && !selectionMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: inputRef,
                    value: draftName,
                    onChange: (event)=>setDraftName(event.target.value),
                    onBlur: saveRename,
                    onKeyDown: (event)=>{
                        if (event.key === "Enter") saveRename();
                        if (event.key === "Escape") cancelRename();
                    },
                    className: "h-8 w-full rounded-lg border border-accent/30 bg-white px-2 text-sm font-semibold outline-none",
                    "aria-label": "Rename ".concat(item.name)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1010,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: (event)=>{
                        event.stopPropagation();
                        if (selectionMode) onSelect();
                        else setRenaming(true);
                    },
                    className: "block max-w-full truncate rounded-md px-1 py-0.5 text-left text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(selectionMode ? "cursor-pointer hover:bg-accent/5" : "hover:bg-paper/70"),
                    children: item.name
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1023,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1008,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 shrink-0 flex-wrap justify-end gap-1",
                children: [
                    item.quantity !== "1" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: item.quantity
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1037,
                        columnNumber: 35
                    }, this),
                    item.buyLocation === "korea" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: "KR"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1038,
                        columnNumber: 42
                    }, this),
                    item.buyLocation === "germany" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: "DE"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1039,
                        columnNumber: 44
                    }, this),
                    item.status === "important" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: "Important"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1040,
                        columnNumber: 41
                    }, this),
                    item.status === "need_to_buy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: "Need"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1041,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1036,
                columnNumber: 7
            }, this),
            !selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onEdit,
                        className: "grid h-7 w-7 place-items-center rounded-full text-black/36 transition hover:bg-paper hover:text-accent",
                        "aria-label": "Edit ".concat(item.name),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1045,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1044,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDelete,
                        className: "grid h-7 w-7 place-items-center rounded-full text-black/36 transition hover:bg-red-50 hover:text-red-500",
                        "aria-label": "Delete ".concat(item.name),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1048,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1047,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1043,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 982,
        columnNumber: 5
    }, this);
}
_s5(InventoryItemRow, "Hwm6vbNAJ06EsnQiiQG+ajqMTiw=");
_c7 = InventoryItemRow;
function InventoryBadge(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full bg-paper/80 px-1.5 py-0.5 text-[11px] font-semibold leading-4 text-black/42",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1056,
        columnNumber: 10
    }, this);
}
_c8 = InventoryBadge;
const UNASSIGNED_CONTAINER_ID = "__unassigned";
function PackingView(param) {
    let { categories, items, containers, onAssign, onDeleteItem, onReorderUnassigned } = param;
    var _moveSections_find;
    _s6();
    const [draggedItemId, setDraggedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDropId, setActiveDropId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [moveItem, setMoveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailContainerId, setDetailContainerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const categoryName = new globalThis.Map(categories.map((category)=>[
            category.id,
            category.name
        ]));
    const containerCards = containers.map((container)=>({
            ...container,
            description: getPackingDescription(container.name),
            items: items.filter((item)=>item.containerId === container.id),
            icon: getPackingIcon(container.name)
        }));
    const unassignedItems = [
        ...items.filter((item)=>!item.containerId)
    ].sort((a, b)=>{
        var _a_packingOrder, _b_packingOrder;
        return ((_a_packingOrder = a.packingOrder) !== null && _a_packingOrder !== void 0 ? _a_packingOrder : 0) - ((_b_packingOrder = b.packingOrder) !== null && _b_packingOrder !== void 0 ? _b_packingOrder : 0);
    });
    const filteredUnassigned = unassignedItems.filter((item)=>{
        const needle = query.trim().toLowerCase();
        if (!needle) return true;
        var _categoryName_get, _item_topic;
        return "".concat(item.name, " ").concat((_categoryName_get = categoryName.get(item.categoryId)) !== null && _categoryName_get !== void 0 ? _categoryName_get : "", " ").concat((_item_topic = item.topic) !== null && _item_topic !== void 0 ? _item_topic : "").toLowerCase().includes(needle);
    });
    const moveSections = [
        {
            id: UNASSIGNED_CONTAINER_ID,
            name: "Unassigned",
            description: "Not packed yet",
            items: unassignedItems,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1076,
                columnNumber: 117
            }, this)
        },
        ...containerCards
    ];
    const detailContainer = detailContainerId ? containerCards.find((container)=>container.id === detailContainerId) : undefined;
    const selectedContainerLabel = moveItem ? (_moveSections_find = moveSections.find((section)=>{
        var _moveItem_containerId;
        return section.id === ((_moveItem_containerId = moveItem.containerId) !== null && _moveItem_containerId !== void 0 ? _moveItem_containerId : UNASSIGNED_CONTAINER_ID);
    })) === null || _moveSections_find === void 0 ? void 0 : _moveSections_find.name : undefined;
    const moveToContainer = (itemId, containerId)=>{
        onAssign(itemId, containerId === UNASSIGNED_CONTAINER_ID ? undefined : containerId);
    };
    const handleDrop = (containerId)=>{
        if (!draggedItemId) return;
        const draggedItem = items.find((item)=>item.id === draggedItemId);
        if (containerId === UNASSIGNED_CONTAINER_ID && !(draggedItem === null || draggedItem === void 0 ? void 0 : draggedItem.containerId)) {
            setDraggedItemId(null);
            setActiveDropId(null);
            return;
        }
        moveToContainer(draggedItemId, containerId);
        setDraggedItemId(null);
        setActiveDropId(null);
    };
    const deleteInventoryItemFromPacking = (itemId)=>{
        if (!window.confirm("Delete this item from inventory? It will also be removed from Categories and Packing.")) return;
        onDeleteItem(itemId);
        setMoveItem((item)=>(item === null || item === void 0 ? void 0 : item.id) === itemId ? null : item);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[1.5rem] border border-black/8 bg-white/94 p-5 shadow-[0_18px_54px_rgba(23,23,23,0.045)] sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-black/42",
                        children: "Inventory"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 text-3xl font-semibold",
                        children: "Packing"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 max-w-xl text-sm leading-6 text-black/50",
                        children: "Move belongings into temporary travel containers. Categories remain the long-term organization after arrival."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Containers"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-paper px-3 py-1 text-xs font-semibold text-black/42",
                                children: [
                                    items.length - unassignedItems.length,
                                    " packed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex snap-x gap-3 overflow-x-auto pb-2 no-scrollbar xl:grid xl:grid-cols-5 xl:overflow-visible xl:pb-0",
                        children: containerCards.map((container)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackingContainerCard, {
                                container: container,
                                active: activeDropId === container.id,
                                onOpen: ()=>setDetailContainerId(container.id),
                                onDragOver: (event)=>{
                                    event.preventDefault();
                                    setActiveDropId(container.id);
                                },
                                onDragLeave: (event)=>{
                                    if (!event.currentTarget.contains(event.relatedTarget)) setActiveDropId(null);
                                },
                                onDrop: (event)=>{
                                    event.preventDefault();
                                    handleDrop(container.id);
                                }
                            }, container.id, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1119,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                onDragOver: (event)=>{
                    event.preventDefault();
                    setActiveDropId(UNASSIGNED_CONTAINER_ID);
                },
                onDragLeave: (event)=>{
                    if (!event.currentTarget.contains(event.relatedTarget)) setActiveDropId(null);
                },
                onDrop: (event)=>{
                    event.preventDefault();
                    handleDrop(UNASSIGNED_CONTAINER_ID);
                },
                className: "rounded-2xl border p-3 transition ".concat(activeDropId === UNASSIGNED_CONTAINER_ID ? "border-accent/35 bg-accent/[0.04]" : "border-black/6 bg-paper/42"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: "Unassigned"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-sm text-black/42",
                                        children: [
                                            unassignedItems.length,
                                            " items not packed yet"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: "Search unassigned...",
                                className: "h-10 w-full rounded-full border border-black/8 bg-white/70 px-4 text-sm outline-none transition focus:border-accent sm:w-64"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackingUnassignedQueue, {
                        items: filteredUnassigned,
                        categoryName: categoryName,
                        draggedItemId: draggedItemId,
                        reorderEnabled: !query.trim(),
                        onReorder: onReorderUnassigned,
                        onMove: setMoveItem,
                        onDelete: (itemId)=>deleteInventoryItemFromPacking(itemId),
                        onDragStart: (event, itemId)=>{
                            setDraggedItemId(itemId);
                            event.dataTransfer.effectAllowed = "move";
                            event.dataTransfer.setData("text/plain", itemId);
                        },
                        onDragEnd: ()=>{
                            setDraggedItemId(null);
                            setActiveDropId(null);
                        },
                        empty: query.trim() ? "No unassigned items match that search." : "Everything has a temporary home."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: [
                    detailContainer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "fixed inset-0 z-40 grid place-items-end bg-black/16 p-3 backdrop-blur-sm lg:place-items-center",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.16,
                                ease: "easeOut"
                            },
                            className: "flex max-h-[88vh] w-full max-w-2xl flex-col rounded-[1.45rem] border border-black/10 bg-paper p-4 shadow-soft",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "[&_svg]:h-5 [&_svg]:w-5",
                                                        children: detailContainer.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 1193,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-black/35",
                                                            children: "Container detail"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1196,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-1 truncate text-2xl font-semibold",
                                                            children: detailContainer.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1197,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm text-black/45",
                                                            children: [
                                                                detailContainer.items.length,
                                                                " items · ",
                                                                detailContainer.description
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setDetailContainerId(null),
                                            className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                                            "aria-label": "Close container detail",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1202,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1190,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onDragOver: (event)=>{
                                        event.preventDefault();
                                        setActiveDropId(detailContainer.id);
                                    },
                                    onDrop: (event)=>{
                                        event.preventDefault();
                                        handleDrop(detailContainer.id);
                                    },
                                    className: "min-h-28 flex-1 space-y-1.5 overflow-y-auto rounded-2xl bg-white/50 p-2",
                                    children: [
                                        detailContainer.items.map((item)=>{
                                            var _categoryName_get;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackingDetailRow, {
                                                item: item,
                                                categoryName: (_categoryName_get = categoryName.get(item.categoryId)) !== null && _categoryName_get !== void 0 ? _categoryName_get : "Uncategorized",
                                                containers: containers,
                                                onMove: moveToContainer,
                                                onDelete: ()=>deleteInventoryItemFromPacking(item.id),
                                                onDragStart: (event)=>{
                                                    setDraggedItemId(item.id);
                                                    event.dataTransfer.effectAllowed = "move";
                                                    event.dataTransfer.setData("text/plain", item.id);
                                                },
                                                onDragEnd: ()=>{
                                                    setDraggedItemId(null);
                                                    setActiveDropId(null);
                                                }
                                            }, item.id, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1217,
                                                columnNumber: 19
                                            }, this);
                                        }),
                                        !detailContainer.items.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "rounded-xl border border-dashed border-black/10 p-5 text-center text-sm text-black/42",
                                            children: "Drop items into this container."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1235,
                                            columnNumber: 51
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1189,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1188,
                        columnNumber: 11
                    }, this),
                    moveItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "fixed inset-0 z-40 grid place-items-end bg-black/16 p-3 backdrop-blur-sm sm:place-items-center",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.16,
                                ease: "easeOut"
                            },
                            className: "w-full max-w-sm rounded-[1.4rem] border border-black/10 bg-paper p-4 shadow-soft",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-black/35",
                                                    children: "Move item"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1245,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-1 truncate text-xl font-semibold",
                                                    children: moveItem.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-black/45",
                                                    children: [
                                                        "Currently in ",
                                                        selectedContainerLabel !== null && selectedContainerLabel !== void 0 ? selectedContainerLabel : "Unassigned"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setMoveItem(null),
                                            className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                                            "aria-label": "Close move menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1250,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-1.5",
                                    children: moveSections.map((section)=>{
                                        var _moveItem_containerId;
                                        const active = ((_moveItem_containerId = moveItem.containerId) !== null && _moveItem_containerId !== void 0 ? _moveItem_containerId : UNASSIGNED_CONTAINER_ID) === section.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                moveToContainer(moveItem.id, section.id);
                                                setMoveItem(null);
                                            },
                                            className: "flex h-11 items-center justify-between rounded-xl px-3 text-left text-sm font-semibold transition ".concat(active ? "bg-accent/10 text-accent" : "bg-white/65 text-black/58 hover:bg-white hover:text-ink"),
                                            children: [
                                                section.name,
                                                active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1267,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, section.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1257,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>deleteInventoryItemFromPacking(moveItem.id),
                                    className: "mt-3 h-10 rounded-full border border-red-200 bg-white/70 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50",
                                    children: "Delete item"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1242,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1241,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1105,
        columnNumber: 5
    }, this);
}
_s6(PackingView, "BRo5SlF+G7mZ0i1go7KlEDI4vUo=");
_c9 = PackingView;
function getPackingDescription(name) {
    const normalized = name.toLowerCase();
    if (normalized.includes("26")) return "Checked luggage";
    if (normalized.includes("20")) return "Cabin suitcase";
    if (normalized.includes("backpack")) return "Daily carry";
    if (normalized.includes("hip")) return "Essentials";
    if (normalized.includes("shipment")) return "Send later";
    return "Temporary container";
}
function getPackingIcon(name) {
    const normalized = name.toLowerCase();
    if (normalized.includes("backpack")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__["Backpack"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1295,
        columnNumber: 47
    }, this);
    if (normalized.includes("hip")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1296,
        columnNumber: 42
    }, this);
    if (normalized.includes("shipment")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1297,
        columnNumber: 47
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$luggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Luggage$3e$__["Luggage"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1298,
        columnNumber: 10
    }, this);
}
function PackingContainerCard(param) {
    let { container, active, onOpen, onDragOver, onDragLeave, onDrop } = param;
    const fill = Math.min(100, Math.round(container.items.length / 12 * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onOpen,
        onDragOver: onDragOver,
        onDragLeave: onDragLeave,
        onDrop: onDrop,
        className: "flex min-h-40 min-w-[15rem] snap-start flex-col justify-between rounded-2xl border p-4 text-left transition xl:min-w-0 ".concat(active ? "border-accent/35 bg-accent/[0.055] shadow-[0_14px_34px_rgba(15,143,104,0.08)]" : "border-black/6 bg-paper/50 hover:border-accent/18 hover:bg-paper/65"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "[&_svg]:h-6 [&_svg]:w-6",
                            children: container.icon
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1328,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-white/75 px-2.5 py-1 text-xs font-semibold text-black/45",
                        children: [
                            container.items.length,
                            " items"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-5 block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-base font-semibold",
                        children: container.name
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 block text-sm font-medium text-black/42",
                        children: container.description
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-3 block h-1.5 overflow-hidden rounded-full bg-white/70",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block h-full rounded-full bg-accent/55",
                            style: {
                                width: "".concat(fill, "%")
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1318,
        columnNumber: 5
    }, this);
}
_c10 = PackingContainerCard;
function PackingUnassignedQueue(param) {
    let { items, categoryName, draggedItemId, reorderEnabled, onReorder, onMove, onDelete, onDragStart, onDragEnd, empty } = param;
    _s7();
    const sourceIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PackingUnassignedQueue.useMemo[sourceIds]": ()=>items.map({
                "PackingUnassignedQueue.useMemo[sourceIds]": (item)=>item.id
            }["PackingUnassignedQueue.useMemo[sourceIds]"])
    }["PackingUnassignedQueue.useMemo[sourceIds]"], [
        items
    ]);
    const [orderedIds, setOrderedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sourceIds);
    const orderedIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(sourceIds);
    const itemById = new globalThis.Map(items.map((item)=>[
            item.id,
            item
        ]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackingUnassignedQueue.useEffect": ()=>{
            setOrderedIds(sourceIds);
            orderedIdsRef.current = sourceIds;
        }
    }["PackingUnassignedQueue.useEffect"], [
        sourceIds
    ]);
    const setTransientOrder = (ids)=>{
        orderedIdsRef.current = ids;
        setOrderedIds(ids);
    };
    const persistOrder = ()=>onReorder(orderedIdsRef.current);
    if (!items.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-dashed border-black/10 bg-white/45 p-5 text-center text-sm text-black/42",
            children: empty
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 1383,
            columnNumber: 12
        }, this);
    }
    if (!reorderEnabled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2 sm:grid-cols-2 xl:grid-cols-3",
            children: items.map((item)=>{
                var _categoryName_get;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackingItemCard, {
                    item: item,
                    categoryName: (_categoryName_get = categoryName.get(item.categoryId)) !== null && _categoryName_get !== void 0 ? _categoryName_get : "Uncategorized",
                    dragging: draggedItemId === item.id,
                    onMove: ()=>onMove(item),
                    onDelete: ()=>onDelete(item.id),
                    onDragStart: (event)=>onDragStart(event, item.id),
                    onDragEnd: onDragEnd
                }, item.id, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1390,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 1388,
            columnNumber: 7
        }, this);
    }
    const reorderForTarget = (targetId)=>{
        if (!draggedItemId || draggedItemId === targetId) return;
        const currentIds = orderedIdsRef.current;
        const fromIndex = currentIds.indexOf(draggedItemId);
        const toIndex = currentIds.indexOf(targetId);
        if (fromIndex === -1 || toIndex === -1) return;
        const nextIds = [
            ...currentIds
        ];
        const [movedId] = nextIds.splice(fromIndex, 1);
        nextIds.splice(toIndex, 0, movedId);
        setTransientOrder(nextIds);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-2 sm:grid-cols-2 xl:grid-cols-3",
        children: orderedIds.map((itemId)=>itemById.get(itemId)).filter((item)=>Boolean(item)).map((item)=>{
            var _categoryName_get;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: "position",
                initial: false,
                transition: {
                    layout: {
                        duration: 0.36,
                        ease: [
                            0.25,
                            0.1,
                            0.25,
                            1
                        ]
                    }
                },
                className: "min-w-0",
                onDragOver: (event)=>{
                    event.preventDefault();
                    reorderForTarget(item.id);
                },
                onDrop: persistOrder,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PackingItemCard, {
                    item: item,
                    categoryName: (_categoryName_get = categoryName.get(item.categoryId)) !== null && _categoryName_get !== void 0 ? _categoryName_get : "Uncategorized",
                    dragging: draggedItemId === item.id,
                    onMove: ()=>onMove(item),
                    onDelete: ()=>onDelete(item.id),
                    onDragStart: (event)=>onDragStart(event, item.id),
                    onDragEnd: ()=>{
                        persistOrder();
                        onDragEnd();
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1432,
                    columnNumber: 11
                }, this)
            }, item.id, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1420,
                columnNumber: 9
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1418,
        columnNumber: 5
    }, this);
}
_s7(PackingUnassignedQueue, "X5TKhSfyojYNSL7gl0e8pVHzaVU=");
_c11 = PackingUnassignedQueue;
function PackingItemCard(param) {
    let { item, categoryName, dragging, onMove, onDelete, onDragStart, onDragEnd } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        draggable: true,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        className: "group min-h-[5.75rem] cursor-grab rounded-xl border border-black/7 bg-white/78 px-3 py-2.5 shadow-[0_5px_14px_rgba(23,23,23,0.025)] transition duration-200 active:cursor-grabbing ".concat(dragging ? "opacity-85 shadow-[0_10px_22px_rgba(23,23,23,0.055)]" : "hover:border-accent/18 hover:bg-white"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 pr-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-sm font-semibold text-ink",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1460,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 truncate text-xs font-medium text-black/40",
                                children: [
                                    categoryName,
                                    item.quantity !== "1" ? " · Qty ".concat(item.quantity) : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1461,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 gap-1 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onMove,
                                className: "rounded-full bg-paper/80 px-2 py-1 text-xs font-semibold text-black/38 transition hover:text-accent",
                                children: "Move"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onDelete,
                                className: "rounded-full bg-paper/80 px-2 py-1 text-xs font-semibold text-black/38 transition hover:bg-red-50 hover:text-red-500",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1467,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 flex flex-wrap gap-1",
                children: [
                    item.buyLocation === "korea" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: "KR"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1473,
                        columnNumber: 42
                    }, this),
                    item.buyLocation === "germany" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: "DE"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1474,
                        columnNumber: 44
                    }, this),
                    item.status === "important" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: "Important"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1475,
                        columnNumber: 41
                    }, this),
                    item.topic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryBadge, {
                        children: item.topic
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1476,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1472,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1452,
        columnNumber: 5
    }, this);
}
_c12 = PackingItemCard;
function PackingDetailRow(param) {
    let { item, categoryName, containers, onMove, onDelete, onDragStart, onDragEnd } = param;
    var _item_containerId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        draggable: true,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        className: "flex items-center gap-2 rounded-xl bg-white/75 px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block truncate text-sm font-semibold",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1502,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0.5 block truncate text-xs font-medium text-black/40",
                        children: [
                            categoryName,
                            item.quantity !== "1" ? " · Qty ".concat(item.quantity) : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1501,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onMove(item.id, UNASSIGNED_CONTAINER_ID),
                className: "shrink-0 rounded-full border border-black/8 bg-paper px-2.5 py-1 text-xs font-semibold text-black/45 transition hover:border-accent/25 hover:text-accent",
                children: "Remove from container"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onDelete,
                className: "shrink-0 rounded-full border border-red-200 bg-white/70 px-2.5 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50",
                children: "Delete item"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: (_item_containerId = item.containerId) !== null && _item_containerId !== void 0 ? _item_containerId : "",
                onChange: (event)=>onMove(item.id, event.target.value || UNASSIGNED_CONTAINER_ID),
                className: "hidden h-8 max-w-36 shrink-0 rounded-full border border-black/8 bg-paper px-2 text-xs font-semibold text-black/50 outline-none transition focus:border-accent sm:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Unassigned"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1512,
                        columnNumber: 9
                    }, this),
                    containers.map((container)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: container.id,
                            children: container.name
                        }, container.id, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1514,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1511,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1500,
        columnNumber: 5
    }, this);
}
_c13 = PackingDetailRow;
function InventoryItemModal(param) {
    let { categories, defaultCategoryId, item, onClose, onSubmit } = param;
    _s8();
    const [showMore, setShowMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(item));
    var _item_name, _item_categoryId, _item_topic, _item_quantity, _item_status, _item_buyLocation, _item_priority, _item_notes, _item_packed;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: (_item_name = item === null || item === void 0 ? void 0 : item.name) !== null && _item_name !== void 0 ? _item_name : "",
        categoryId: (_item_categoryId = item === null || item === void 0 ? void 0 : item.categoryId) !== null && _item_categoryId !== void 0 ? _item_categoryId : defaultCategoryId,
        topic: (_item_topic = item === null || item === void 0 ? void 0 : item.topic) !== null && _item_topic !== void 0 ? _item_topic : "",
        quantity: (_item_quantity = item === null || item === void 0 ? void 0 : item.quantity) !== null && _item_quantity !== void 0 ? _item_quantity : "1",
        status: (_item_status = item === null || item === void 0 ? void 0 : item.status) !== null && _item_status !== void 0 ? _item_status : "already_have",
        buyLocation: (_item_buyLocation = item === null || item === void 0 ? void 0 : item.buyLocation) !== null && _item_buyLocation !== void 0 ? _item_buyLocation : "none",
        priority: (_item_priority = item === null || item === void 0 ? void 0 : item.priority) !== null && _item_priority !== void 0 ? _item_priority : "medium",
        notes: (_item_notes = item === null || item === void 0 ? void 0 : item.notes) !== null && _item_notes !== void 0 ? _item_notes : "",
        containerId: item === null || item === void 0 ? void 0 : item.containerId,
        packed: (_item_packed = item === null || item === void 0 ? void 0 : item.packed) !== null && _item_packed !== void 0 ? _item_packed : false
    });
    var _form_topic, _form_notes;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-40 grid place-items-end bg-black/18 p-3 backdrop-blur-sm sm:place-items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            onSubmit: (event)=>{
                var _form_topic, _form_notes;
                event.preventDefault();
                onSubmit({
                    ...form,
                    id: item === null || item === void 0 ? void 0 : item.id,
                    topic: ((_form_topic = form.topic) === null || _form_topic === void 0 ? void 0 : _form_topic.trim()) || undefined,
                    notes: ((_form_notes = form.notes) === null || _form_notes === void 0 ? void 0 : _form_notes.trim()) || undefined
                });
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.16,
                ease: "easeOut"
            },
            className: "w-full max-w-md rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.22em] text-black/38",
                                    children: "Inventory"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1551,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-2xl font-semibold",
                                    children: item ? "Edit item" : "Add item"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1552,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1550,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                            "aria-label": "Close inventory editor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1555,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1554,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1549,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.name,
                            onChange: (event)=>setForm((draft)=>({
                                        ...draft,
                                        name: event.target.value
                                    })),
                            placeholder: "Item name",
                            className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1559,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: form.categoryId,
                            onChange: (event)=>setForm((draft)=>({
                                        ...draft,
                                        categoryId: event.target.value
                                    })),
                            className: "h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent",
                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: category.id,
                                    children: category.name
                                }, category.id, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1561,
                                    columnNumber: 43
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1560,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setShowMore((value)=>!value),
                            className: "justify-self-start text-sm font-semibold text-black/45 transition hover:text-accent",
                            children: showMore ? "Hide options" : "More options"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1563,
                            columnNumber: 11
                        }, this),
                        showMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: (_form_topic = form.topic) !== null && _form_topic !== void 0 ? _form_topic : "",
                                    onChange: (event)=>setForm((draft)=>({
                                                ...draft,
                                                topic: event.target.value
                                            })),
                                    placeholder: "Topic, optional",
                                    className: "h-11 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1568,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.quantity,
                                    onChange: (event)=>setForm((draft)=>({
                                                ...draft,
                                                quantity: event.target.value
                                            })),
                                    placeholder: "Quantity",
                                    className: "h-11 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1569,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.status,
                                            onChange: (event)=>setForm((draft)=>({
                                                        ...draft,
                                                        status: event.target.value
                                                    })),
                                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent",
                                            children: Object.entries(statusLabels).map((param)=>{
                                                let [value, label] = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: value,
                                                    children: label
                                                }, value, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1572,
                                                    columnNumber: 73
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.buyLocation,
                                            onChange: (event)=>setForm((draft)=>({
                                                        ...draft,
                                                        buyLocation: event.target.value
                                                    })),
                                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent",
                                            children: Object.entries(buyLocationLabels).map((param)=>{
                                                let [value, label] = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: value,
                                                    children: label
                                                }, value, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1575,
                                                    columnNumber: 78
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1574,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.priority,
                                            onChange: (event)=>setForm((draft)=>({
                                                        ...draft,
                                                        priority: event.target.value
                                                    })),
                                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "low",
                                                    children: "Low"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1578,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "medium",
                                                    children: "Medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1579,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "high",
                                                    children: "High"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1580,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1577,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1570,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: (_form_notes = form.notes) !== null && _form_notes !== void 0 ? _form_notes : "",
                                    onChange: (event)=>setForm((draft)=>({
                                                ...draft,
                                                notes: event.target.value
                                            })),
                                    placeholder: "Optional notes",
                                    rows: 3,
                                    className: "resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1583,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1567,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1558,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1588,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: !form.name.trim(),
                            className: "h-11 rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:bg-black/20",
                            children: item ? "Save item" : "Add item"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1589,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1587,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 1538,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1537,
        columnNumber: 5
    }, this);
}
_s8(InventoryItemModal, "7kdIHAXk1FcpxVr92+izvv2FWf8=");
_c14 = InventoryItemModal;
function parseBulkInventoryLines(value) {
    return value.split(/\r?\n/).map((line)=>line.trim()).filter(Boolean);
}
function BulkInventoryModal(param) {
    let { categories, defaultCategoryId, defaultTopic, fixedCategory, onClose, onSubmit } = param;
    var _categories_;
    _s9();
    var _ref;
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_ref = defaultCategoryId !== null && defaultCategoryId !== void 0 ? defaultCategoryId : (_categories_ = categories[0]) === null || _categories_ === void 0 ? void 0 : _categories_.id) !== null && _ref !== void 0 ? _ref : "");
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTopic !== null && defaultTopic !== void 0 ? defaultTopic : "");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("already_have");
    const [buyLocation, setBuyLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const names = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BulkInventoryModal.useMemo[names]": ()=>parseBulkInventoryLines(text)
    }["BulkInventoryModal.useMemo[names]"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-40 grid place-items-end bg-black/18 p-3 backdrop-blur-sm sm:place-items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            onSubmit: (event)=>{
                event.preventDefault();
                if (!categoryId || !names.length) return;
                onSubmit(names.map((name)=>({
                        name,
                        categoryId,
                        topic: topic.trim() || undefined,
                        quantity: "1",
                        status,
                        buyLocation,
                        priority: "medium",
                        packed: false
                    })));
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.16,
                ease: "easeOut"
            },
            className: "w-full max-w-lg rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.22em] text-black/38",
                                    children: "Inventory"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1638,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-2xl font-semibold",
                                    children: "Bulk add items"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1639,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1637,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                            "aria-label": "Close bulk item editor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1642,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1641,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1636,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: categoryId,
                            disabled: fixedCategory,
                            onChange: (event)=>setCategoryId(event.target.value),
                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent disabled:text-black/42",
                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: category.id,
                                    children: category.name
                                }, category.id, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1647,
                                    columnNumber: 43
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1646,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: topic,
                            onChange: (event)=>setTopic(event.target.value),
                            placeholder: "Topic, optional: Cooking, Winter, Water...",
                            className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1649,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: text,
                            onChange: (event)=>setText(event.target.value),
                            rows: 9,
                            placeholder: "One item per line\npassport pouch\nwinter socks\n한국 비상약",
                            className: "resize-none rounded-xl border border-black/10 bg-white p-3 text-sm outline-none transition focus:border-accent"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1650,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: status,
                                    onChange: (event)=>setStatus(event.target.value),
                                    className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent",
                                    children: Object.entries(statusLabels).map((param)=>{
                                        let [value, label] = param;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: value,
                                            children: label
                                        }, value, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1653,
                                            columnNumber: 69
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1652,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: buyLocation,
                                    onChange: (event)=>setBuyLocation(event.target.value),
                                    className: "h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent",
                                    children: Object.entries(buyLocationLabels).map((param)=>{
                                        let [value, label] = param;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: value,
                                            children: label
                                        }, value, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1656,
                                            columnNumber: 74
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1655,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1651,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-xl bg-white/65 p-3 text-sm text-black/45",
                            children: names.length ? "".concat(names.length, " items ready to add.") : "Empty lines are ignored. Commas stay inside item names."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1659,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1645,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1662,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: !categoryId || !names.length,
                            className: "h-11 rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:bg-black/20",
                            children: [
                                "Add ",
                                names.length || "",
                                " items"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1663,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1661,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 1624,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1623,
        columnNumber: 5
    }, this);
}
_s9(BulkInventoryModal, "urKrWnAgCHUlQQCDJEds+N5djJg=");
_c15 = BulkInventoryModal;
function TaskRow(param) {
    let { task, phases, dependencyNames, active, onComplete, onStatusChange, onEditText, onEditFull, onEditDate, onDelete, dragEnabled, selectionMode, selected, onSelect, onDragEnd } = param;
    _s10();
    const [isDateOpen, setDateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStatusOpen, setStatusOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dependencyMessage, setDependencyMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [draftDate, setDraftDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(task.deadline);
    const blocked = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTaskUnlocked"])(task, phases);
    const completed = task.status === "completed";
    const overdue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverdue"])(task.deadline, completed);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskRow.useEffect": ()=>{
            setDraftDate(task.deadline);
        }
    }["TaskRow.useEffect"], [
        task.deadline
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskRow.useEffect": ()=>{
            if (!selectionMode) return;
            setDateOpen(false);
            setStatusOpen(false);
        }
    }["TaskRow.useEffect"], [
        selectionMode
    ]);
    const saveDate = ()=>{
        onEditDate(draftDate);
        setDateOpen(false);
    };
    const showDependencyMessage = ()=>{
        const names = dependencyNames.length ? dependencyNames.join(", ") : "the required task";
        setDependencyMessage(dependencyNames.length > 1 ? "Complete required tasks first: ".concat(names) : "Complete the required task first: ".concat(names));
    };
    const handleComplete = ()=>{
        if (selectionMode) return;
        if (blocked && !completed) {
            showDependencyMessage();
            return;
        }
        onComplete();
    };
    const handleStatusChange = (status)=>{
        if (status === "completed" && blocked && !completed) {
            showDependencyMessage();
            return;
        }
        onStatusChange(status);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskRow.useEffect": ()=>{
            if (!dependencyMessage) return;
            const timeout = window.setTimeout({
                "TaskRow.useEffect.timeout": ()=>setDependencyMessage(undefined)
            }["TaskRow.useEffect.timeout"], 3200);
            return ({
                "TaskRow.useEffect": ()=>window.clearTimeout(timeout)
            })["TaskRow.useEffect"];
        }
    }["TaskRow.useEffect"], [
        dependencyMessage
    ]);
    const RowShell = dragEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Item : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowShell, {
        value: task.id,
        layout: dragEnabled ? "position" : undefined,
        initial: false,
        animate: {
            opacity: isDragging ? 0.96 : 1,
            backgroundColor: active ? "rgba(15,143,104,0.08)" : "rgba(255,255,255,1)"
        },
        exit: {
            opacity: 0
        },
        whileDrag: {
            scale: 1.006,
            boxShadow: "0 16px 34px rgba(23,23,23,0.095)"
        },
        onDragStart: ()=>setDragging(true),
        onDragEnd: ()=>{
            setDragging(false);
            onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd();
        },
        transition: {
            opacity: {
                duration: 0.12,
                ease: "easeOut"
            },
            backgroundColor: {
                duration: 0.14,
                ease: "easeOut"
            },
            layout: {
                type: "spring",
                stiffness: 420,
                damping: 38,
                mass: 0.7
            }
        },
        className: "rounded-xl border border-black/8 px-3 py-2 shadow-[0_5px_16px_rgba(23,23,23,0.026)] transition-colors hover:border-black/14 ".concat(isDragging ? "relative z-20 cursor-grabbing border-accent/22" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 sm:gap-3",
                children: [
                    selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (event)=>{
                            event.stopPropagation();
                            onSelect();
                        },
                        className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(selected ? "border-accent bg-accent text-white" : "border-black/18 bg-white text-black/25 hover:border-accent/40"),
                        "aria-label": selected ? "Unselect ".concat(task.title) : "Select ".concat(task.title),
                        children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1785,
                            columnNumber: 23
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1776,
                        columnNumber: 9
                    }, this),
                    dragEnabled && !selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grid h-8 w-5 shrink-0 cursor-grab place-items-center text-black/24 transition hover:text-accent/65 active:cursor-grabbing",
                        "aria-label": "Drag to reorder",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1790,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1789,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (event)=>{
                            event.stopPropagation();
                            handleComplete();
                        },
                        disabled: selectionMode,
                        className: "grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-lg border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(completed ? "border-accent bg-accent text-white" : blocked ? "border-black/12 bg-white text-black/25 hover:border-black/20 hover:text-black/40" : "border-black/15 text-black/35 hover:border-accent hover:text-accent", " ").concat(selectionMode ? "cursor-not-allowed opacity-35" : ""),
                        "aria-label": completed ? "Reopen ".concat(task.title) : "Complete ".concat(task.title),
                        children: completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1800,
                            columnNumber: 24
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1793,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (event)=>{
                            event.stopPropagation();
                            if (selectionMode) onSelect();
                            else onEditText();
                        },
                        className: "group -m-1.5 flex min-w-0 flex-1 cursor-pointer items-center rounded-xl p-1.5 text-left transition focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(selectionMode ? "hover:bg-accent/5" : "hover:bg-black/[0.025]"),
                        "aria-label": selectionMode ? selected ? "Unselect ".concat(task.title) : "Select ".concat(task.title) : "Edit ".concat(task.title),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex min-w-0 items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 truncate text-[15px] font-semibold ".concat(completed ? "text-black/45 line-through decoration-accent/60" : "text-ink"),
                                            children: task.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1815,
                                            columnNumber: 13
                                        }, this),
                                        task.status === "in_progress" && !completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            children: "In progress"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1816,
                                            columnNumber: 61
                                        }, this),
                                        blocked && !completed && dependencyNames.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            children: "Waiting"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1817,
                                            columnNumber: 69
                                        }, this),
                                        overdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            tone: "warn",
                                            children: "Overdue"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1818,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1814,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 flex min-w-0 items-center gap-2 overflow-hidden text-xs leading-5 text-black/42",
                                    children: [
                                        blocked && dependencyNames.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden min-w-0 truncate sm:inline",
                                            children: [
                                                "Waiting for: ",
                                                dependencyNames.join(", ")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1821,
                                            columnNumber: 55
                                        }, this),
                                        task.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 truncate",
                                            children: task.note
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1822,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1820,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1813,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1803,
                        columnNumber: 7
                    }, this),
                    !selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateEditZone, {
                        deadline: task.deadline,
                        draftDate: draftDate,
                        overdue: overdue,
                        isOpen: isDateOpen,
                        onOpen: ()=>{
                            setStatusOpen(false);
                            setDateOpen(true);
                        },
                        onClose: ()=>{
                            setDraftDate(task.deadline);
                            setDateOpen(false);
                        },
                        onChange: setDraftDate,
                        onSave: saveDate,
                        className: "hidden sm:inline-flex"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1827,
                        columnNumber: 26
                    }, this),
                    !selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center justify-end gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusEditZone, {
                                status: task.status,
                                isOpen: isStatusOpen,
                                onOpen: ()=>{
                                    setDateOpen(false);
                                    setStatusOpen(true);
                                },
                                onClose: ()=>setStatusOpen(false),
                                onChange: handleStatusChange
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1846,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (event)=>{
                                    event.stopPropagation();
                                    onEditFull();
                                },
                                className: "grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/42 transition hover:bg-paper hover:text-accent",
                                "aria-label": "Edit task",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1857,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1856,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (event)=>{
                                    event.stopPropagation();
                                    onDelete();
                                },
                                className: "grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/42 transition hover:bg-red-50 hover:text-red-500",
                                "aria-label": "Delete task",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1860,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1859,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1845,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1774,
                columnNumber: 7
            }, this),
            !selectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateEditZone, {
                deadline: task.deadline,
                draftDate: draftDate,
                overdue: overdue,
                isOpen: isDateOpen,
                onOpen: ()=>{
                    setStatusOpen(false);
                    setDateOpen(true);
                },
                onClose: ()=>{
                    setDraftDate(task.deadline);
                    setDateOpen(false);
                },
                onChange: setDraftDate,
                onSave: saveDate,
                className: "mt-2 inline-flex sm:hidden"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1865,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: dependencyMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.14
                    },
                    className: "mt-3 rounded-xl bg-paper px-3 py-2 text-sm font-medium text-black/52",
                    children: dependencyMessage
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1884,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1882,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1755,
        columnNumber: 5
    }, this);
}
_s10(TaskRow, "nZT9r9CH/yfLmZhYiKr5M9VjSGE=");
_c16 = TaskRow;
const statusOptions = [
    {
        value: "available",
        label: "Available"
    },
    {
        value: "in_progress",
        label: "In progress"
    },
    {
        value: "completed",
        label: "Completed"
    }
];
function StatusEditZone(param) {
    let { status, isOpen, onOpen, onClose, onChange } = param;
    var _statusOptions_find;
    _s11();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _statusOptions_find_label;
    const activeLabel = (_statusOptions_find_label = (_statusOptions_find = statusOptions.find((option)=>option.value === status)) === null || _statusOptions_find === void 0 ? void 0 : _statusOptions_find.label) !== null && _statusOptions_find_label !== void 0 ? _statusOptions_find_label : "Available";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusEditZone.useEffect": ()=>{
            if (!isOpen) return;
            const handlePointerDown = {
                "StatusEditZone.useEffect.handlePointerDown": (event)=>{
                    var _menuRef_current;
                    if (!((_menuRef_current = menuRef.current) === null || _menuRef_current === void 0 ? void 0 : _menuRef_current.contains(event.target))) onClose();
                }
            }["StatusEditZone.useEffect.handlePointerDown"];
            const handleKeyDown = {
                "StatusEditZone.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") onClose();
                }
            }["StatusEditZone.useEffect.handleKeyDown"];
            document.addEventListener("pointerdown", handlePointerDown);
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "StatusEditZone.useEffect": ()=>{
                    document.removeEventListener("pointerdown", handlePointerDown);
                    document.removeEventListener("keydown", handleKeyDown);
                }
            })["StatusEditZone.useEffect"];
        }
    }["StatusEditZone.useEffect"], [
        isOpen,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "relative shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (event)=>{
                    event.stopPropagation();
                    if (isOpen) onClose();
                    else onOpen();
                },
                className: "grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/42 transition hover:bg-paper hover:text-accent focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(isOpen ? "bg-accent/10 text-accent" : ""),
                "aria-label": "Change status. Current status ".concat(activeLabel),
                "aria-haspopup": "menu",
                "aria-expanded": isOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 1947,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1935,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 z-30 mt-2 w-44 rounded-2xl border border-black/10 bg-white p-2 shadow-soft",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/35",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1952,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "menu",
                        className: "space-y-1",
                        children: statusOptions.map((option)=>{
                            const active = option.value === status;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "menuitemradio",
                                "aria-checked": active,
                                onClick: (event)=>{
                                    event.stopPropagation();
                                    onChange(option.value);
                                    onClose();
                                },
                                className: "flex h-10 w-full items-center justify-between rounded-xl px-3 text-left text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(active ? "bg-accent/10 text-accent" : "text-black/58 hover:bg-paper hover:text-ink"),
                                children: [
                                    option.label,
                                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1970,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, option.value, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1957,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1953,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1951,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1934,
        columnNumber: 5
    }, this);
}
_s11(StatusEditZone, "lbfKxozlpk19p2tUpYavRIkbEU0=");
_c17 = StatusEditZone;
function DateEditZone(param) {
    let { deadline, draftDate, overdue, isOpen, onOpen, onClose, onChange, onSave, className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative shrink-0 ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (event)=>{
                    event.stopPropagation();
                    onOpen();
                },
                className: "inline-flex h-8 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition hover:ring-4 hover:ring-accent/10 focus:outline-none focus:ring-4 focus:ring-accent/10 ".concat(overdue ? "bg-red-50 text-red-600" : "bg-paper text-black/45 hover:text-accent"),
                "aria-label": "Edit due date ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(deadline)),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2013,
                        columnNumber: 9
                    }, this),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(deadline)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2004,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 z-30 mt-2 w-64 rounded-2xl border border-black/10 bg-white p-3 shadow-soft",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/35",
                        children: "Due date"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2019,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: draftDate,
                        onChange: (event)=>onChange(event.target.value),
                        className: "h-10 w-full rounded-xl border border-black/10 bg-paper px-3 text-sm outline-none transition focus:border-accent"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2020,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex justify-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "h-9 rounded-full border border-black/10 px-3 text-sm font-semibold text-black/55",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 2027,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onSave,
                                className: "h-9 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-accent",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 2030,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2026,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2018,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 2003,
        columnNumber: 5
    }, this);
}
_c18 = DateEditZone;
function RightRail(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "order-3 space-y-3 text-black/50 lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)] lg:overflow-y-auto lg:pr-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailList, {
                title: "Next steps",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 2043,
                    columnNumber: 42
                }, void 0),
                items: props.nextTasks.map((task)=>({
                        title: task.title,
                        meta: task.phaseTitle
                    }))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2043,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "rounded-[1.35rem] bg-white/38 p-4 text-sm text-black/42 backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "cursor-pointer list-none font-semibold text-black/48",
                        children: "Journey progress"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2045,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
                            value: props.overallProgress
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 2047,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2046,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 leading-6",
                        children: [
                            props.completedTasks,
                            " of ",
                            props.totalTasks,
                            " checkpoints cleared."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2049,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2044,
                columnNumber: 7
            }, this),
            props.recentCompleted.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "rounded-[1.35rem] bg-white/38 p-4 text-sm text-black/42 backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "cursor-pointer list-none font-semibold text-black/48",
                        children: "Recently completed"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2053,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailListBare, {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 2055,
                                columnNumber: 33
                            }, void 0),
                            items: props.recentCompleted.map((task)=>({
                                    title: task.title,
                                    meta: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(task.deadline),
                                    done: true
                                }))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 2055,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2054,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2052,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: props.onOpenSettings,
                className: "inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-black/8 bg-white/35 px-4 text-sm font-semibold text-black/42 transition hover:border-accent/25 hover:text-accent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2060,
                        columnNumber: 9
                    }, this),
                    "Backup and settings"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2059,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 2042,
        columnNumber: 5
    }, this);
}
_c19 = RightRail;
function RailList(param) {
    let { title, icon, items } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[1.35rem] border border-black/6 bg-white/62 p-5 shadow-[0_10px_26px_rgba(23,23,23,0.025)] backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-black/62",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2070,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailListBare, {
                icon: icon,
                items: items
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2071,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 2069,
        columnNumber: 5
    }, this);
}
_c20 = RailList;
function RailListBare(param) {
    let { icon, items } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 space-y-2",
        children: items.length ? items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 rounded-xl bg-white/52 px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "grid h-5 w-5 place-items-center rounded-full ".concat(item.done ? "bg-accent/70 text-white" : "bg-black/5 text-black/35"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "[&_svg]:h-3 [&_svg]:w-3",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 2082,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2081,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block truncate text-sm font-semibold",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 2085,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-black/42",
                                children: item.meta
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 2086,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 2084,
                        columnNumber: 11
                    }, this)
                ]
            }, "".concat(item.title, "-").concat(item.meta), true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2080,
                columnNumber: 9
            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "rounded-xl bg-paper/70 p-3 text-sm text-black/45",
            children: "Nothing here yet."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 2089,
            columnNumber: 12
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 2078,
        columnNumber: 5
    }, this);
}
_c21 = RailListBare;
function UtilityDrawer(param) {
    let { phases, inventoryCategories, inventoryItems, packingContainers, error, lastSavedAt, onClose, onRestore, onReset } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-40 grid place-items-end bg-black/18 p-3 backdrop-blur-sm sm:place-items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.16,
                ease: "easeOut"
            },
            className: "w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.22em] text-black/38",
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 2100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-2xl font-semibold",
                                    children: "Backup and restore"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 2101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 2099,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55",
                            "aria-label": "Close settings",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 2104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 2103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 2098,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataSafetyPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataSafetyPanel"], {
                    phases: phases,
                    inventoryCategories: inventoryCategories,
                    inventoryItems: inventoryItems,
                    packingContainers: packingContainers,
                    error: error,
                    lastSavedAt: lastSavedAt,
                    onRestore: onRestore,
                    onReset: onReset
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 2107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 2097,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 2096,
        columnNumber: 5
    }, this);
}
_c22 = UtilityDrawer;
function EmptyRecovery(param) {
    let { error, phases, inventoryCategories, inventoryItems, packingContainers, lastSavedAt, onRestore, onReset } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[1.5rem] border border-red-200 bg-red-50 p-6 text-red-700 shadow-soft",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold",
                children: "Relocation data could not be loaded"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm leading-6",
                children: "Restore a valid JSON backup. Sample data will not overwrite the saved storage while it appears corrupted."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataSafetyPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataSafetyPanel"], {
                    phases: phases,
                    inventoryCategories: inventoryCategories,
                    inventoryItems: inventoryItems,
                    packingContainers: packingContainers,
                    error: error,
                    lastSavedAt: lastSavedAt,
                    onRestore: onRestore,
                    onReset: onReset
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 2119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 2118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 2115,
        columnNumber: 5
    }, this);
}
_c23 = EmptyRecovery;
function Badge(param) {
    let { children, tone = "neutral" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full px-2 py-0.5 text-xs font-semibold ".concat(tone === "warn" ? "bg-red-50 text-red-600" : "bg-paper text-black/42"),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 2126,
        columnNumber: 10
    }, this);
}
_c24 = Badge;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24;
__turbopack_context__.k.register(_c, "Home");
__turbopack_context__.k.register(_c1, "Sidebar");
__turbopack_context__.k.register(_c2, "PhaseHero");
__turbopack_context__.k.register(_c3, "JourneyLine");
__turbopack_context__.k.register(_c4, "TaskWorkspace");
__turbopack_context__.k.register(_c5, "CategoriesView");
__turbopack_context__.k.register(_c6, "TaskReorderGroup");
__turbopack_context__.k.register(_c7, "InventoryItemRow");
__turbopack_context__.k.register(_c8, "InventoryBadge");
__turbopack_context__.k.register(_c9, "PackingView");
__turbopack_context__.k.register(_c10, "PackingContainerCard");
__turbopack_context__.k.register(_c11, "PackingUnassignedQueue");
__turbopack_context__.k.register(_c12, "PackingItemCard");
__turbopack_context__.k.register(_c13, "PackingDetailRow");
__turbopack_context__.k.register(_c14, "InventoryItemModal");
__turbopack_context__.k.register(_c15, "BulkInventoryModal");
__turbopack_context__.k.register(_c16, "TaskRow");
__turbopack_context__.k.register(_c17, "StatusEditZone");
__turbopack_context__.k.register(_c18, "DateEditZone");
__turbopack_context__.k.register(_c19, "RightRail");
__turbopack_context__.k.register(_c20, "RailList");
__turbopack_context__.k.register(_c21, "RailListBare");
__turbopack_context__.k.register(_c22, "UtilityDrawer");
__turbopack_context__.k.register(_c23, "EmptyRecovery");
__turbopack_context__.k.register(_c24, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1a224f83._.js.map