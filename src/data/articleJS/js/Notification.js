export default "# 检测\n\n> window.Notification\n\n# 权限\n\n> Notification.permission\n\n* default\n* denied\n* granted\n\n# 询问\n\n> Notification.requestPermission(function(status) { // status: default、denied、granted })\n\n# 实例\n\n> new Notification(title, {})\n\n```\n属性\nvar n = new Notification(title, {\n    body: '',\n    icon: '',\n    tag: '',\n    lang: '',\n    dir: '', // auto, ltr, rtl\n});\n事件\nonshow\nonclose\nonerror\nonclick\n```\n\n# Demo\n\n```\nif(window.Notification && Notification.permission !== \"denied\") {\n  Notification.requestPermission(function(status) {    // 请求权限\n    if(status === 'granted') {\n      var n = new Notification('标题', {\n        body : '我是主体',\n        icon : 'https://assets-cdn.github.com/favicon.ico'\n      });\n    }\n  });\n}\n```\n"