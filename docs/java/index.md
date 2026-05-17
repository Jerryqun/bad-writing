---
nav: Java
group: 基础
toc: content
title: Java 入门
---

## 首先明白一个最基本的原则

> **java 中一切代码都基于类，是构成 java 程序的砖块。所以方法，变量都不能在类外去定义。**

这是 Java 与 JavaScript、Python 等语言最根本的区别之一。在 Java 中：

- 所有代码必须写在**类（class）** 里面
- **方法（函数）** 不能独立存在，必须属于某个类
- **变量** 不能在类外定义，只能作为类的成员变量或方法内的局部变量
- 程序的入口是 `public static void main(String[] args)` 方法，它也必须在类中

```java
// ✅ 正确：所有代码都在类中
public class HelloWorld {
    // 成员变量
    private String name = "Java";

    // 方法
    public void sayHello() {
        System.out.println("Hello, " + name);
    }

    // 程序入口
    public static void main(String[] args) {
        HelloWorld hello = new HelloWorld();
        hello.sayHello();
    }
}
```

```java
// ❌ 错误：不能在类外定义变量和方法
String name = "Java";  // 编译错误！

void sayHello() {       // 编译错误！
    System.out.println("Hello");
}
```

## Java 基础注意事项

### 一、命名规范

- **类名**：大驼峰（PascalCase），如 `HelloWorld`、`StudentInfo`
- **方法名 / 变量名**：小驼峰（camelCase），如 `getUserName`、`studentAge`
- **常量**：全大写 + 下划线分隔，如 `MAX_SIZE`、`DEFAULT_NAME`
- **包名**：全小写，如 `com.example.project`

### 二、数据类型

Java 是**强类型语言**，变量必须先声明类型才能使用。

#### 基本类型（8 种）

| 类型 | 大小 | 范围 | 示例 |
|------|------|------|------|
| `byte` | 1 字节 | -128 ~ 127 | `byte b = 100;` |
| `short` | 2 字节 | -32768 ~ 32767 | `short s = 1000;` |
| `int` | 4 字节 | -2^31 ~ 2^31-1 | `int i = 100000;` |
| `long` | 8 字节 | -2^63 ~ 2^63-1 | `long l = 100000L;` |
| `float` | 4 字节 | 单精度浮点 | `float f = 3.14f;` |
| `double` | 8 字节 | 双精度浮点 | `double d = 3.14;` |
| `char` | 2 字节 | 单个字符 | `char c = 'A';` |
| `boolean` | 1 位 | true / false | `boolean flag = true;` |

#### 引用类型

- **String**（字符串）、**数组**、**类的实例**、**接口** 等都是引用类型
- 引用类型的默认值是 `null`

### 三、一个 Java 文件的基本结构

```java
// 1. 包声明（必须在第一行）
package com.example.demo;

// 2. 导入语句
import java.util.List;
import java.util.ArrayList;

// 3. 类定义（文件名必须和 public 类名一致）
public class MyClass {

    // 4. 成员变量
    private int count;
    private String name;

    // 5. 构造方法
    public MyClass(String name) {
        this.name = name;
        this.count = 0;
    }

    // 6. 普通方法
    public void doSomething() {
        System.out.println(name + " is doing something");
    }

    // 7. 程序入口（可选）
    public static void main(String[] args) {
        MyClass obj = new MyClass("Test");
        obj.doSomething();
    }
}
```

### 四、与 JavaScript 的关键区别

| 对比项 | Java | JavaScript |
|--------|------|-----------|
| **类型系统** | 强类型，编译时检查 | 弱类型，运行时检查 |
| **代码组织** | 一切基于类 | 函数可独立存在 |
| **编译/运行** | 先编译再运行（javac → java） | 解释执行 |
| **空值** | `null` | `null` 和 `undefined` |
| **字符串比较** | 用 `.equals()` | 用 `===` |
| **继承** | 单继承（extends） | 原型链 |
| **接口** | `interface` 关键字 | 无原生接口概念 |
| **包管理** | Maven / Gradle | npm / pnpm |

### 五、初学者常踩的坑

- **(1)** 文件名必须和 `public` 类名**完全一致**（包括大小写），否则编译报错
- **(2)** 字符串比较**不要用 `==`**，要用 `.equals()`，`==` 比较的是引用地址
- **(3)** 数组长度是 `.length`（属性），字符串长度是 `.length()`（方法），集合大小是 `.size()`
- **(4)** Java 没有**全局变量**，一切都在类中
- **(5)** `int` 除以 `int` 结果还是 `int`：`5 / 2 = 2` 而不是 `2.5`
- **(6)** 局部变量必须**先赋值再使用**，否则编译报错（成员变量有默认值）
