export default "# 日期格式化\n\n\n## Date.prototype.toISOString\n\n```\nvar dt = new Date();\ndt.toISOString().slice(0, -5).replace(/[T]/g, ' ');\n```\n\n## RegExp\n\n```\nvar dt = new Date();\nvar date = [\n  [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-'),\n  [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':')\n].join(' ').replace(/(?=\\b\\d\\b)/g, '0');\n```\n\n## Date\n\n```\nfunction pad(s) {\n  return ('0' + s).slice(-2);\n}\nvar dt = new Date();\nvar date = dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate());\ndate += ' ';\ndate += pad(dt.getHours()) + ':' + pad(dt.getMinutes()) + ':' + pad(dt.getSeconds());\n```\n\n## 生成数组\n\n```\nArray.from(Array(N), (v, i) => i)\n```\n\n```\nArray.apply(null, {length: N}).map(Function.call, Number)\n```\n\n## 获取数组的最后一位\n\n```\narr.slice(-1)[0]\n```\n"