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

### 聊聊注解

> 我们之前的学习中，注解顶多起到一个说明的作用，比如 `@Override`。但是 Spring Boot，坊间有句玩笑话，叫**面向注解编程**。注解在 Spring Boot 中非常关键。

其实 Spring Boot 中这种开发方法，我们完全可以类比成我们前端开发 Vue 项目时，我们会通过写一个 Vue 指令来快速地完成某个功能。

**比如 `v-for` 这样一个指令：**
- 它在原生的 HTML 角度来说没有任何意义
- 但是 Vue 框架会在解析模板时，如果解析到了 `v-for` 指令，就去给你做循环渲染
- 这样你通过写一个 `v-for` 就可以快速地完成循环渲染

**其实 Spring Boot 也是一个道理：**
- 这些注解就像 Spring Boot 提供一些快速完成功能的指令
- 到时候 Spring Boot 扫描代码，看到某个注解就知道你要做什么事情

### 定义接口涉及到的注解

#### 1. @RestController

**作用**：告诉 Spring Boot 我这个文件是用来定义控制器的，并且这里的方法返回值直接序列化为 JSON 或者 XML。

**本质**：它是 `@Controller` 和 `@ResponseBody` 的组合体。

```java
@RestController  // = @Controller + @ResponseBody
public class UserController {
    // 所有方法的返回值都会自动转为 JSON/XML
}
```

#### 2. @GetMapping

**作用**：定义一个地址为指定路径的 GET 接口，请求该接口时，执行的 Java 代码为它之后紧跟的方法。

```java
@GetMapping("/api1")
public String getApi1() {
    // 处理 GET 请求 /api1
    return "GET /api1";
}

@GetMapping("/users")
public List<User> getUsers() {
    // 处理 GET 请求 /users，返回用户列表
    return userService.findAll();
}
```

#### 3. @PostMapping

**作用**：定义一个地址为指定路径的 POST 接口。

```java
@PostMapping("/api2")
public String postApi2() {
    // 处理 POST 请求 /api2
    return "POST /api2";
}

@PostMapping("/users")
public User createUser(@RequestBody User user) {
    // 处理 POST 请求 /users，创建新用户
    return userService.save(user);
}
```

#### 4. @RequestMapping

**作用**：不区分请求方式定义一个接口，一般用来定义接口统一前缀。

```java
// 定义类级别的路径前缀，该文件里所有的请求都有一个 user 前缀
@RequestMapping("/user")
@RestController
public class UserController {
    
    @GetMapping("/info")      // 实际路径：/user/info
    public User getInfo() {
        return userService.getInfo();
    }
    
    @PostMapping("/update")   // 实际路径：/user/update
    public void update(@RequestBody User user) {
        userService.update(user);
    }
}
```

### 常用注解对比

| 注解 | 请求方式 | 作用 | 示例 |
|------|---------|------|------|
| **@RestController** | - | 定义 REST 控制器，返回值自动转 JSON/XML | `@RestController` |
| **@GetMapping** | GET | 定义 GET 接口 | `@GetMapping("/users")` |
| **@PostMapping** | POST | 定义 POST 接口 | `@PostMapping("/users")` |
| **@RequestMapping** | 任意 | 定义路径前缀或通用接口 | `@RequestMapping("/user")` |
| **@PutMapping** | PUT | 定义 PUT 接口 | `@PutMapping("/users/{id}")` |
| **@DeleteMapping** | DELETE | 定义 DELETE 接口 | `@DeleteMapping("/users/{id}")` |
| **@RequestBody** | - | 将请求体 JSON 转为 Java 对象 | `public void save(@RequestBody User user)` |
| **@PathVariable** | - | 获取路径参数 | `@GetMapping("/users/{id}")` |
| **@RequestParam** | - | 获取查询参数 | `@GetMapping("/search?q={keyword}")` |

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

#### 1. Spring Boot 项目的核心构成

Spring Boot 本身等同于 Vue 框架，我们用 VSCode 生成的 Spring Boot 项目集成了一整套开箱即用的 Spring Boot 目录。

| 组成部分 | 技术 | 说明 |
|---------|------|------|
| **开启服务** | servlet + tomcat | 内嵌 Web 服务器，开箱即用 |
| **开发方式和指令** | Spring Boot 本身 | 提供简便的开发方式和注解 |
| **包管理和构建** | Maven | 依赖管理和项目构建打包 |

#### 2. Spring Boot 的目录结构

几个最关键的文件和文件夹：

| 文件/文件夹 | 作用 |
|------------|------|
| **application.properties / application.yml** | Spring Boot 的配置文件，关键配置都写在这里面 |
| **pom.xml**（最外层） | Maven 配置和管理第三方依赖的地方，每次要装一个第三方依赖都要用到它 |
| **src/main/java/${groupId}/${artifactId}** | 写 Java 代码的地方，一开始只有一个项目的启动文件在里面 |

#### 3. 核心理念

**约定优于配置，开箱即用**

- 就像 Vue CLI 帮你快速搭建前端项目一样
- Spring Boot 帮你快速搭建 Java 后端项目
- Maven 负责包管理和构建打包（类似 npm）
- 内嵌 Tomcat，无需额外部署（类似 Vite 开发服务器）

## MVC 全局配置

我们前面定义拦截器的时候，使用到了 MVC 全局配置。我们只需要定一个配置文件实现 `WebMvcConfigurer` 接口，主要用来配置以下内容：

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    // 在这里重写各种方法来自定义 MVC 行为
}
```

### 拦截器（Interceptors）：添加全局拦截器

拦截器可以在请求到达 Controller 之前/之后执行逻辑，类似前端的路由守卫。

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private LoginInterceptor loginInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/**")       // 拦截所有路径
                .excludePathPatterns("/login", "/register"); // 排除登录注册
    }
}
```

### 跨域（CORS）：配置全局跨域规则

类似前端开发时配置 `devServer.proxy`，后端也需要处理跨域问题。

```java
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")           // 所有接口
            .allowedOrigins("*")         // 允许的来源
            .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许的方法
            .allowedHeaders("*")         // 允许的请求头
            .allowCredentials(true)      // 允许携带 cookie
            .maxAge(3600);               // 预检请求缓存时间（秒）
}
```

### 视图解析（View Resolvers）：自定义视图解析逻辑

用于配置模板引擎（如 Thymeleaf、JSP）的视图解析规则，决定 Controller 返回的视图名如何映射到实际的页面文件。

```java
@Override
public void configureViewResolvers(ViewResolverRegistry registry) {
    registry.jsp("/WEB-INF/views/", ".jsp");
}
```

### 静态资源（Static Resources）：修改静态资源映射

配置静态资源的访问路径和存放位置，类似前端的 `publicPath` 配置。

```java
@Override
public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/static/**")           // 访问路径
            .addResourceLocations("classpath:/static/"); // 实际存放位置
}
```

### 消息转换（Message Converters）：自定义 HTTP 请求/响应的序列化方式

配置如何将 Java 对象序列化为 JSON、XML 等格式，类似前端 axios 的 `transformRequest` / `transformResponse`。

```java
@Override
public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
    // 添加 FastJSON 转换器
    FastJsonHttpMessageConverter converter = new FastJsonHttpMessageConverter();
    converters.add(converter);
}
```

### 参数解析（Argument Resolvers）：自定义 Controller 方法参数解析逻辑

当 Spring 内置的参数解析不能满足需求时，可以自定义参数解析器，比如从 token 中自动解析出当前登录用户。

```java
@Override
public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
    resolvers.add(new CurrentUserArgumentResolver());
}
```
