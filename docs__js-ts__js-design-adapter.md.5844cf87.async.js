"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4087],{17470:function(a,e,n){n.r(e);var r=n(72269),u=n(93359),g=n(61788),h=n(19977),m=n(91558),i=n(24268),c=n(96057),E=n(85939),t=n(53683),o=n(80936),s=n(67294),d=n(74944),_=n(85893);function l(){return(0,_.jsx)(t.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(o.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u9002\u914D\u5668\u8BBE\u8BA1\u6A21\u5F0Fadapter",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9002\u914D\u5668\u8BBE\u8BA1\u6A21\u5F0Fadapter",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u9002\u914D\u5668\u8BBE\u8BA1\u6A21\u5F0F\uFF08Adapter\uFF09"]}),(0,_.jsx)("p",{children:d.texts[0].value}),(0,_.jsx)(i.Z,{lang:"js",children:d.texts[1].value})]})})})})}e.default=l},74944:function(a,e,n){n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:"\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u65E7\u7684\u63A5\u53E3 LegacyCharger\uFF0C\u5B83\u53EA\u652F\u6301\u63D0\u4F9B110\u4F0F\u7279\u7535\u538B\u7684\u7535\u6E90\uFF0C\u800C\u6211\u4EEC\u6709\u4E00\u4E2A\u65B0\u7684\u8BBE\u5907 ModernDevice \u9700\u8981\u4F7F\u7528220\u4F0F\u7279\u7535\u538B\u7684\u7535\u6E90\u3002\u4E3A\u4E86\u8BA9\u65B0\u8BBE\u5907\u80FD\u591F\u4F7F\u7528\u65E7\u7535\u6E90\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u9002\u914D\u5668 PowerAdapter\u3002",paraId:0,tocIndex:0},{value:`// \u5B9A\u4E49\u65E7\u8BBE\u5907\u6240\u4F9D\u8D56\u7684\u63A5\u53E3
interface LegacyCharger {
    providePower110V(): void;
}

// \u5B9E\u73B0\u65E7\u8BBE\u5907
class LegacyChargerImpl implements LegacyCharger {
    providePower110V(): void {
        console.log("Providing 110V power");
    }
}

// \u65B0\u8BBE\u5907\u6240\u9700\u7684\u63A5\u53E3
interface ModernDevice {
    charge(): void;
}

// \u5B9E\u73B0\u65B0\u8BBE\u5907
class ModernDeviceImpl implements ModernDevice {
    charge(): void {
        console.log("Charging with 220V power");
    }
}

// \u521B\u5EFA\u9002\u914D\u5668\u7C7B
class PowerAdapter implements ModernDevice {
    private legacyCharger: LegacyCharger;

    constructor(legacyCharger: LegacyCharger) {
        this.legacyCharger = legacyCharger;
    }

    // \u5B9E\u73B0\u65B0\u8BBE\u5907\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\uFF0C\u5E76\u5728\u5185\u90E8\u8C03\u7528\u65E7\u8BBE\u5907\u7684\u65B9\u6CD5
    charge(): void {
        console.log("Adapting power...");
        this.legacyCharger.providePower110V();
        console.log("Converted to 220V.");
    }
}

// \u6D4B\u8BD5\u9002\u914D\u5668
const legacyCharger = new LegacyChargerImpl();
const adapter = new PowerAdapter(legacyCharger);

// \u901A\u8FC7\u9002\u914D\u5668\uFF0C\u7531\u65E7\u7535\u6E90\u7ED9\u65B0\u8BBE\u5907\u5145\u7535
adapter.charge();

`,paraId:1,tocIndex:0}]}}]);
