export default "* 读取文件\n\n```\nfs.readFile(filename, [options], callback)\nfs.readFileSync(filename, [options])\n```\n\n* 写入文件\n\n```\n* fs.writeFile(filename, data, [options], callback)\n* fs.writeFile(filename, data, [options])\n```\n\n* 创建目录\n\n```\n* fs.mkdir(path, [mode], callback)\n```\n\n* 读取目录\n\n```\n* fs.readdir(path, (err, files) => {})\n```\n\n* 查看文件/目录信息\n\n```\n* fs.stat(path, (err, stats) => {})\n```\n\n* 检查文件/目录是否存在\n\n```\n* fs.exists(path, (exists) => {})\n```\n\n* 获取文件的绝对路径\n\n```\n* fs.realpath(path, (err, resolvedPath) => {})\n```\n\n* 修改文件时间\n\n```\n* fs.utimes(path, atime, mtime, callback)\n```\n\n* 修改文件/目录的读取权限\n\n```\n* fs.chmod(path, mode, callback)\n```\n\n* 修改文件/目录的读取权限\n\n```\nfs.chmod(path, mode, callback)\n```\n\n* 移动/重命名文件\n\n```\nfs.rename(oldPath, newPath, callback)\n```\n\n* 创建和删除硬连接\n\n```\nfs.link(srcPath, dstPath, callback)\n```\n\n* 截断文件\n\n```\nfs.truncate(filename, len, callback)\n```\n\n* 删除空目录\n\n```\nfs.rmdir(path, callback)\n```\n\n* 监视文件/目录\n\n```\nfs.watchFile(filename, [options], listener)\nfs.unwatchFile(filename, [listener])\n```\n"