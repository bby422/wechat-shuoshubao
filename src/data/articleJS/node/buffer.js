export default "# Buffer\n\n## 已废弃\n\n* new Buffer(size)\n* new Buffer(string[, encoding])\n* new Buffer(buffer)\n* new Buffer(array)\n* new Buffer(arrayBuffer[, byteOffset [, length]])\n\n## new\n\n* Buffer.alloc(size[, fill[, encoding]])\n```\nsize <Integer>\nfill <Integer> | <String> | <Buffer>; default: 0\nencoding <String>; default: 'utf-8'\n```\n* Buffer.allocUnsafe(size)\n* Buffer.allocUnsafeSlow(size)\n* Buffer.byteLength(string[, encoding])\n* Buffer.compare(buf1, buf2)"