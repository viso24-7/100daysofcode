"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon = (props) => {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props });
};
exports.Icon = Icon;
const Comp1 = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.Icon, { size: "sm" }), (0, jsx_runtime_1.jsx)(exports.Icon, { size: "l" })] }));
};
