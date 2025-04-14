---
nav: Js
group: 设计模式
toc: content
title: 适配器设计模式
---

## 适配器设计模式（Adapter）
假设我们有一个旧的接口 LegacyCharger，它只支持提供110伏特电压的电源，而我们有一个新的设备 ModernDevice 需要使用220伏特电压的电源。为了让新设备能够使用旧电源，我们需要一个适配器 PowerAdapter。
```js
// 定义旧设备所依赖的接口
interface LegacyCharger {
    providePower110V(): void;
}

// 实现旧设备
class LegacyChargerImpl implements LegacyCharger {
    providePower110V(): void {
        console.log("Providing 110V power");
    }
}

// 新设备所需的接口
interface ModernDevice {
    charge(): void;
}

// 实现新设备
class ModernDeviceImpl implements ModernDevice {
    charge(): void {
        console.log("Charging with 220V power");
    }
}

// 创建适配器类
class PowerAdapter implements ModernDevice {
    private legacyCharger: LegacyCharger;

    constructor(legacyCharger: LegacyCharger) {
        this.legacyCharger = legacyCharger;
    }

    // 实现新设备接口中的方法，并在内部调用旧设备的方法
    charge(): void {
        console.log("Adapting power...");
        this.legacyCharger.providePower110V();
        console.log("Converted to 220V.");
    }
}

// 测试适配器
const legacyCharger = new LegacyChargerImpl();
const adapter = new PowerAdapter(legacyCharger);

// 通过适配器，由旧电源给新设备充电
adapter.charge();

```



