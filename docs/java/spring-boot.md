---
nav: Java
group: Spring Boot
toc: content
title: Spring Boot 入门
---

## 什么是 Spring Boot

> 回想我们开发前端项目，我们不会从头构建一个项目目录结构出来，你要开发一个 Java 项目也是一样

### 前端 vs Java 项目对比

| 前端 Vue 项目 | Java Spring Boot 项目 |
|--------------|---------------------|
| Vue 提供简便开发方式和指令 | Spring Boot 提供简便的指令和功能 |
| Node.js + npm 为包管理依赖 | Maven 提供包管理和构建打包 |
| Webpack/Vite 为构建基础 | Spring Boot 内置构建配置 |

### 为什么需要 Spring Boot？

**传统 Spring 项目的问题：**
- 配置复杂，需要大量的 XML 配置
- 依赖管理繁琐，需要手动管理各种依赖版本
- 部署困难，需要配置外部 Tomcat 服务器
- 项目结构不统一，每个团队都有自己的规范

**Spring Boot 的优势：**
- ✅ **开箱即用**：提供快速启动的模板和项目结构
- ✅ **约定优于配置**：减少配置，默认配置满足大部分场景
- ✅ **内嵌服务器**：内置 Tomcat/Jetty，直接运行 jar 包即可
- ✅ **自动配置**：根据依赖自动配置 Spring 应用
- ✅ **生产就绪**：提供监控、指标、健康检查等功能

### Spring Boot 项目核心构成

| 组成部分 | 说明 |
|---------|------|
| **开启服务** | servlet + tomcat（内嵌 Web 服务器） |
| **更方便的开发方式和指令** | Spring Boot 本身源码提供的功能和注解 |
| **构建和包管理** | Maven（依赖管理和项目构建） |

### 核心概念

#### 1. Starter 依赖

Spring Boot 提供了一系列的 Starter，简化依赖管理：

```xml
<!-- Web 开发 Starter -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- 数据库 Starter -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- 测试 Starter -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
</dependency>
```

#### 2. 自动配置

Spring Boot 会根据 classpath 中的依赖自动配置：

```java
// 添加了 spring-boot-starter-web 依赖后
// Spring Boot 自动配置了：
// - Tomcat 服务器
// - Spring MVC
// - 默认视图解析器
// - 静态资源处理
```

#### 3. 内嵌服务器

无需部署 WAR 包到外部 Tomcat，直接运行 JAR：

```bash
# 打包
mvn clean package

# 运行
java -jar target/myapp.jar
```

### 项目结构

```
my-spring-boot-project/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ── com/
│   │   │       └── example/
│   │   │           ├── MyApplication.java    # 启动类
│   │   │           ├── controller/           # 控制器
│   │   │           ├── service/              # 服务层
│   │   │           └── repository/           # 数据访问层
│   │   └── resources/
│   │       ├── application.yml               # 配置文件
│   │       └── static/                       # 静态资源
│   ── test/
│       └── java/
│           └── com/
│               └── example/
│                   └── MyApplicationTests.java
├── pom.xml                                   # Maven 配置
└── README.md
```

### 快速开始

#### 1. 创建项目

使用 Spring Initializr：https://start.spring.io/

或者使用 Maven 命令：
```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=demo -DarchetypeArtifactId=maven-archetype-quickstart
```

#### 2. 启动类

```java
package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

#### 3. 配置文件

```yaml
# application.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver
```

#### 4. 创建 Controller

```java
package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
```

#### 5. 运行应用

```bash
# Maven 方式
mvn spring-boot:run

# 或者打包后运行
mvn clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

访问 `http://localhost:8080/hello` 即可看到返回结果。

### Spring Boot vs 传统 Spring

| 特性 | 传统 Spring | Spring Boot |
|------|------------|-------------|
| **配置方式** | 大量 XML 配置 | 注解 + 自动配置 |
| **依赖管理** | 手动管理版本 | Starter 统一管理 |
| **服务器** | 外部 Tomcat 部署 | 内嵌服务器 |
| **项目结构** | 自定义 | 标准约定 |
| **启动速度** | 慢 | 快 |
| **学习曲线** | 陡峭 | 平缓 |

### 总结

Spring Boot 的核心理念：**约定优于配置，开箱即用**

- 就像 Vue CLI 帮你快速搭建前端项目一样
- Spring Boot 帮你快速搭建 Java 后端项目
- Maven 负责包管理和构建打包（类似 npm）
- 内嵌 Tomcat，无需额外部署（类似 Vite 开发服务器）
