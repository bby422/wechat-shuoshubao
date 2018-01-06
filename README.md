# 小程序 - 硕鼠宝

* npm run dev // 开发模式
* npm run build // 上线模式(压缩)
* npm run deploy // md 转 js


# app.json

```
{
    pages: [
        'pages/index/index',
        'pages/categories/index',
        'pages/detail/index',
        'pages/about/index'
    ],
    window: {
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTextStyle: 'black',
        navigationBarTitleText: '硕鼠宝',
        backgroundColor: '#ffffff',
        backgroundTextStyle: 'light',
        enablePullDownRefresh: false,
        onReachBottomDistance: 50
    },
    tabBar: {
        clolor: '#27684C',
        selectedColor: '#0189BF',
        backgroundColor: '#F9F9F9',
        borderStyle: 'black',
        list: [
            {
                pagePath: 'pages/index/index',
                text: '首页',
                iconPath: './images/tabBar/home_icon.png',
                selectedIconPath: './images/tabBar/home_icon-press.png'
            },
            {
                pagePath: 'pages/about/index',
                text: '关于',
                iconPath: './images/tabBar/user_center_icon.png',
                selectedIconPath: './images/tabBar/user_center_icon-press.png'
            }
        ],
        position: 'bottom'
    },
    networkTimeout: {
        request: 60000,
        connectSocket: 60000,
        uploadFile: 60000,
        downloadFile: 60000
    },
    // debug: true
}
```


# page.json

```
{
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '',
    backgroundColor: '#ffffff',
    backgroundTextStyle: 'dark',
    enablePullDownRefresh: false,
    disableScroll: false,
    onReachBottomDistance: 50
}
```


# Page()

```
{
    data: {},

    onLoad(query) {},
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},

    onPullDownRefresh() {},
    onReachBottom() {},
    onShareAppMessage() {
        return {
            title: '',
            path: ''
        }
    },
    onPageScroll(scrollTop) {},
}
```


# Page.prototype

* Page.prototype.route
* Page.prototype.setData(data, callback)


# 路由

### getCurrentPages()

> 全局函数。获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面

### 路由的触发方式 vs 页面生命周期函数

* wx.navigateTo : <navigator open-type="navigateTo"/>
* wx.redirectTo : <navigator open-type="redirectTo"/>
* wx.navigateBack : <navigator open-type="navigateBack"> : 用户按左上角返回按钮
* wx.switchTab : <navigator open-type="switchTab"/> : 用户切换 Tab
* wx.reLaunch : <navigator open-type="reLaunch"/>

### Tips

* navigateTo, redirectTo 只能打开非 tabBar 页面
* switchTab 只能打开 tabBar 页面
* reLaunch 可以打开任意页面
* 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar
* 调用页面路由带的参数可以在目标页面的onLoad中获取


