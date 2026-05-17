---
nav: Java
group: 数据库
toc: content
title: 数据库基础
---

## 库的操作与数据类型总结

### 核心要点

- **(1)** 表和库层面的创建和删除用到的指令都是一样的 `CREATE` 和 `DROP`。然后再更具体要操作什么就好，总结起来就是 `CREATE TABLE/DATABASE`，`DROP TABLE/DATABASE`
- **(2)** 创建一个表，要在创建的时候说明表内字段，一个字段起码要有**字段名**和**类型**
- **(3)** 数据的字段类型不会存在对象、数组这些，常用的类型有四类：
  - **整数**：`INT`
  - **浮点**：`FLOAT`
  - **字符串**：`VARCHAR(n)`
  - **日期时间类**：`DATETIME` 和 `TIMESTAMP`

### 快速参考

```sql
-- 创建数据库
CREATE DATABASE my_database;

-- 删除数据库
DROP DATABASE my_database;

-- 创建表（字段 = 字段名 + 类型）
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    salary FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 删除表
DROP TABLE users;
```

---

## SQL 语句增删改查总结

> 记住关键字按英语语法去理解就好

- **查询（SELECT）**：从某表中选出
  ```sql
  SELECT xx FROM tablename;
  ```
- **插入（INSERT）**：往某表中插入新数据
  ```sql
  INSERT INTO tablename (具体插入字段和字段顺序) VALUES (xx, xx, xx);
  ```
- **删除（DELETE）**：从某表中删除
  ```sql
  DELETE FROM tablename WHERE 条件判断;
  ```
- **更新（UPDATE）**：更新某个表，并说明更新啥
  ```sql
  UPDATE tablename SET column1 = xxx, column2 = xxx WHERE 条件判断;
  ```

### 速记口诀

| 操作 | 关键字 | 记忆方式 |
|------|--------|---------|
| **查** | `SELECT ... FROM` | 从哪里选什么 |
| **增** | `INSERT INTO ... VALUES` | 往哪里插入什么值 |
| **删** | `DELETE FROM ... WHERE` | 从哪里删除符合条件的 |
| **改** | `UPDATE ... SET ... WHERE` | 更新哪里设置什么值，条件是什么 |

---

## 日期类的一些疑问

### DATETIME 和 TIMESTAMP

| 区别点 | DATETIME | TIMESTAMP |
|--------|----------|-----------|
| **范围问题** | 1000-01-01 到 9999-12-31 | 1970-01-01 到 2038-01-19，2038 问题新版本在解决 |
| **大小** | 5 字节（MySQL 5.6.4 前为 8 字节） | 4 字节 |
| **自动更新** | 不支持 | 可以自动设为当前事件 |
| **时区问题** | 不支持自动转化时区 | 会根据你设置的时区自动更新 |
| **默认值** | 不支持函数默认值（5.6 前） | 支持数据插入时自动设为 CURRENT_TIMESTAMP |
| **总结** | 适合固定的未来或现在的某个时间，如果要大于 2038，只能用 DATETIME | 需要国际化，或者需要自动记录时间的。比如记录 OA 审批记录的最新操作时间，记录数据的更新时间等 |

### 如何选择？

- **用 DATETIME**：
  - 需要记录**固定的时间点**，如生日、合同签订日期、预定日期等
  - 时间范围**超过 2038 年**
  - 不需要跨时区转换

- **用 TIMESTAMP**：
  - 需要**自动记录**创建时间、更新时间
  - 系统涉及**国际化**，需要时区自动转换
  - 如审计日志、操作记录、数据变更时间等

### 建表示例

```sql
CREATE TABLE example (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    -- 固定时间用 DATETIME
    birthday DATETIME COMMENT '生日',
    contract_date DATETIME COMMENT '合同日期',
    -- 自动记录时间用 TIMESTAMP
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
);
```

---

## 约束

> **约束顾名思义，就是约束字段的值或者行为**（大部分约束是一样的，但是也存在某些数据库独有的约束。这里只说一些常用的标准 SQL 约束）

### 约束字段的值

| 约束 | 说明 | 示例 |
|------|------|------|
| **UNIQUE** — 唯一约束 | 该字段的值不能重复 | `email VARCHAR(100) UNIQUE` |
| **NOT NULL** — 非空约束 | 该字段的值不能为空 | `name VARCHAR(50) NOT NULL` |
| **CHECK** — 检查约束 | 条件判断，如果条件为 true 则通过操作，否则不通过 | `age INT CHECK(age > 0)` |

### key 类约束

| 约束 | 说明 | 示例 |
|------|------|------|
| **PRIMARY KEY** — 主键约束 | 唯一标识一条记录，不能重复且不能为空 | `id INT PRIMARY KEY` |
| **FOREIGN KEY** — 外键约束 | 关联另一张表的主键，保证数据引用的完整性 | `FOREIGN KEY (dept_id) REFERENCES dept(id)` |

### 建表示例

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK(age > 0),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);
```

---

## 主键的一些问题

### 1. 主键可以设置多个字段吗？

可以，我们可以设置**复合主键**，把多个字段共同作为主键。一般可以用于没有唯一的字段可以作为主键的时候。

比如我们有一个图书馆借书记录表，表里有借书人 id 和书 id，但是一本书可以借给多个人，借书人也可能借多本数，这意味着哪个 id 其实在这个表里都不唯一。所以我们可以把**借书人 id 和书 id 以及借书时间**共同作为主键。

```sql
CREATE TABLE borrow_record (
    borrower_id INT,
    book_id INT,
    borrow_time DATETIME,
    PRIMARY KEY (borrower_id, book_id, borrow_time)
);
```

### 2. 一个字段设置了主键，他的查找速度会更快，别的字段会吗？

不会，所以建议**主键用于唯一，且经常用来查找的字段**。复合主键的时候，一般只有第一个字段会查找更快，或者两个一起查找更快。

> 💡 **本质原因**：主键会自动创建**聚簇索引**（Clustered Index），数据按主键顺序物理存储，所以主键查找最快。其他字段如果也需要加速查找，需要手动创建**索引**（Index）。

---

## 外键写法

外键不是写个某个字段的，而是**定义给表的**，所以他不写在字段后面，而是单独一行声明。

```sql
CREATE TABLE usersinfo (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ...
    FOREIGN KEY (user_id) REFERENCES users(id),
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
```

### 关键说明

- **`FOREIGN KEY (user_id)`**：声明本表的 `user_id` 字段是外键
- **`REFERENCES users(id)`**：关联到 `users` 表的 `id` 字段
- **`ON DELETE CASCADE`**：当父表（users）中的记录被删除时，子表（usersinfo）中关联的记录**自动删除**
- **`ON UPDATE CASCADE`**：当父表中的主键被更新时，子表中关联的外键值**自动更新**

### 外键的级联操作选项

| 选项 | 含义 |
|------|------|
| **CASCADE** | 父表删除/更新时，子表跟着删除/更新 |
| **SET NULL** | 父表删除/更新时，子表外键值设为 NULL |
| **RESTRICT** | 如果子表有关联数据，禁止父表删除/更新（默认行为） |
| **NO ACTION** | 和 RESTRICT 类似，检查时机略有不同 |

---

## 属性

> 属性一般用来说明一个字段的**默认值**，**自增**等取值问题

| 属性 | 说明 | 示例 |
|------|------|------|
| **DEFAULT** — 默认值 | 当插入数据时没有指定该字段的值，自动填入默认值 | `status INT DEFAULT 0` |
| **AUTO_INCREMENT** — 自增 | 每插入一条新数据，该字段自动 +1，通常用于主键 | `id INT AUTO_INCREMENT` |

### 示例

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,       -- 自增主键，不用手动传 id
    status INT DEFAULT 0,                    -- 默认订单状态为 0
    remark VARCHAR(200) DEFAULT '无备注',     -- 默认备注
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入时不传 id 和 status，会自动填充
INSERT INTO orders (remark) VALUES ('加急订单');
-- 结果：id=1, status=0, remark='加急订单', created_at=当前时间
```

---

## 最常用的索引创建方式

### 1. 普通索引

针对 users 表里的 `create_time` 创建普通索引：

```sql
CREATE INDEX idx_create_time ON users(create_time);
```

### 2. 唯一索引

针对用户名创建唯一索引：

```sql
CREATE UNIQUE INDEX idx_username ON users(username);
```

> 或者在建表的时候直接给用户名字段设置 `UNIQUE` 约束，效果一样。

### 3. 主键索引

无法主动创建，只能设置主键后**自动添加**。

```sql
-- 设置主键时会自动创建主键索引
id INT PRIMARY KEY AUTO_INCREMENT
```

### 关于索引的注意点

> ⚠️ **不要所有的字段都给索引！**

索引可以加快查找，但是也会带来代价：

**首先，代价是额外储存。** 就像你给书建立了目录，目录本身也是要占几页的。你给表建立了索引，本质上就是把相关字段的目录按 B-Tree 平衡树储存在了数据库里，他是要**占物理储存空间**的。

**其次，索引加快了查找，但是会增加修改和插入的开销。** 作为索引的字段修改的时候还必须更新索引树。如果一个表有 10 个字段，你建立 10 个索引，那么你插入一条数据，除了更新表，还必须更新 **10 个索引树**。

---

## 其他索引

我们除了基本的三个索引（普通索引、唯一索引、主键索引），还有一些特殊索引，他们用的场景比较少，或者只有某些数据库独特支持：

| 索引类型 | 说明 | 示例 |
|---------|------|------|
| **复合索引** | 把多个字段共同作为一个索引 | `CREATE INDEX idx_name_age ON users(name, age);` |
| **全文索引** | 一般用于文本查找 | `CREATE FULLTEXT INDEX idx_content ON articles(content);` |
| **空间索引** | 专门为地理空间几何建立的 | `CREATE SPATIAL INDEX idx_location ON maps(location);` |
| **前缀索引** | 只对前几位做索引，比如有一个产品码，前十位足够确定唯一一个产品 | `CREATE INDEX idx_code ON products(code(10));` |
| **函数索引** | 进行函数计算后，做索引 | `CREATE INDEX idx_upper_name ON users(UPPER(name));` |

---

## 条件判断一般怎么写

### 模糊匹配字符串

| 场景 | 语法 | 示例 |
|------|------|------|
| **以某个字符串开头** | `LIKE '字符%'` | `username LIKE '张%'` — 匹配"张三"、"张无忌" |
| **以某个字符串结尾** | `LIKE '%字符'` | `username LIKE '%三'` — 匹配"张三"、"李三" |
| **包含某个字符串** | `LIKE '%字符%'` | `username LIKE '%小%'` — 匹配"小明"、"张小三" |

> 💡 **记忆技巧**：`%` 代表任意多个字符，放在前面就是"前面任意"，放在后面就是"后面任意"。

---

## 连表查询

### 基本写法

```sql
SELECT 你要的字段
FROM 主表 AS 主表别名
INNER JOIN 联表 AS 联表别名 ON 联合条件
```

### 示例

```sql
SELECT u.id, u.username, c.company_name, c.location, c.scale
FROM users AS u
INNER JOIN companys AS c ON u.company_id = c.company_id;
```

### 关键说明

- **`INNER JOIN`**：内连接，只返回两个表中关联条件匹配的记录
- **`AS`**：给表起别名，简化后续字段引用（`AS` 可以省略）
- **`ON`**：指定关联条件，通常是外键 = 主键
- 使用**表别名。字段名** 的方式明确指定字段来自哪个表，避免字段名冲突

## 其他连表字段

连表还有其他一些连表关键字，下面列举三个常用的。**他们的区别主要两个表里存在数据不符合 on 后面的条件时，怎么处理。**

### 1. INNER JOIN

- **有数据匹配不上，则不返回这条数据**
- 只返回两个表中关联条件完全匹配的记录
- 示例：
  ```sql
  SELECT *
  FROM users AS u
  INNER JOIN companys AS c ON u.company_id = c.company_id;
  ```

### 2. LEFT JOIN

- **以主表为主，查询出所有主表的数据**
- 如果有 on 没匹配上的数据，联表的字段都按 null 处理，但依然返回主表记录
- 左表（主表）数据全部返回，右表只返回匹配的记录
- 示例：
  ```sql
  SELECT *
  FROM users AS u
  LEFT JOIN companys AS c ON u.company_id = c.company_id;
  ```

### 3. RIGHT JOIN

- **以联表为主，查询出联表数据**
- 如果有 on 没匹配上，主表的字段都按 null 处理
- 右表（联表）数据全部返回，左表只返回匹配的记录
- 示例：
  ```sql
  SELECT *
  FROM users AS u
  RIGHT JOIN companys AS c ON u.company_id = c.company_id;
  ```

### 三种 JOIN 对比

| JOIN 类型 | 主表数据处理 | 联表数据处理 | 匹配失败时 |
|-----------|-------------|-------------|-----------|
| **INNER JOIN** | 只返回匹配的 | 只返回匹配的 | 不返回该条记录 |
| **LEFT JOIN** | 全部返回 | 只返回匹配的 | 联表字段为 NULL |
| **RIGHT JOIN** | 只返回匹配的 | 全部返回 | 主表字段为 NULL |

---

## 聚合函数

> 聚合函数用于对一组数据进行统计计算，返回单个值

| 函数 | 说明 | 示例 |
|------|------|------|
| **COUNT()** | 计算总条数 | `SELECT COUNT(*) FROM users;` — 统计用户总数 |
| **SUM()** | 计算总和 | `SELECT SUM(salary) FROM employees;` — 计算工资总和 |
| **AVG()** | 计算平均值 | `SELECT AVG(age) FROM users;` — 计算平均年龄 |
| **MAX()** | 计算最大值 | `SELECT MAX(salary) FROM employees;` — 计算最高工资 |
| **MIN()** | 计算最小值 | `SELECT MIN(age) FROM users;` — 计算最小年龄 |

### 使用示例

```sql
-- 统计用户总数
SELECT COUNT(*) AS total_users FROM users;

-- 计算工资总和与平均工资
SELECT SUM(salary) AS total_salary, AVG(salary) AS avg_salary FROM employees;

-- 查找最高和最低工资
SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM employees;

-- 结合 GROUP BY 使用，统计每个部门的员工数和平均工资
SELECT dept_id, COUNT(*) AS emp_count, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept_id;
```

### 注意事项

- **COUNT(*)** 统计所有行（包括 NULL 值）
- **COUNT(字段名)** 只统计该字段非 NULL 的行数
- 聚合函数通常与 **GROUP BY** 配合使用，按组进行统计
- 聚合函数不能直接用在 WHERE 子句中，如需过滤聚合结果，使用 **HAVING** 子句

---

## 数据库函数提问

### 我们可以通过 Java 代码里写逻辑来代替 SQL 函数，为什么我们还要用 SQL 函数呢？

确实几乎所有函数，它的功能都可以用 Java 里写代码做，不去用函数。那么我们怎么选择呢？

#### 使用 SQL 函数的场景

**一般来说，对于大量数据做聚合运算，我们最好使用 SQL 来做。比如求和、平均值。**

**原因如下：**

假设有 10000 多条数据：
- ❌ **Java 方案**：先把 10000 条数据全部查询出来给到 Java，Java 再做循环计算
- ✅ **SQL 方案**：直接运用 SQL 优化好的函数，去做聚合运算

**效率对比：**
- SQL 方案效率更高，因为数据库内部已经对聚合函数做了深度优化
- 不用费心写 Java 循环代码
- 减少网络传输（不需要把大量数据从数据库传到应用）
- 减少内存消耗（Java 不需要加载所有数据到内存）

#### 使用 Java 代码的场景

**如果涉及到复杂逻辑判断或者算法，那必然 Java 更合适。**

**示例场景：**
- 项目独特的 ID 生成算法
- 复杂的多条件判断：
  - 找出出生年大于 1995
  - 并且消费次数大于 5
  - 并且资产大于 1000
  - 这样很复杂的判断条件的用户

#### 选择原则总结

| 场景 | 推荐方案 | 原因 |
|------|---------|------|
| **大量数据聚合运算** | SQL 函数 | 数据库优化好、效率高、减少数据传输 |
| **简单统计计算** | SQL 函数 | COUNT、SUM、AVG、MAX、MIN 等 |
| **复杂业务逻辑** | Java 代码 | 灵活、可维护、易测试 |
| **独特算法** | Java 代码 | 数据库不支持或实现复杂 |
| **多条件复杂判断** | Java 代码 | 逻辑清晰，便于后续维护 |

### 最佳实践

```sql
-- ✅ 推荐：用 SQL 做聚合
SELECT COUNT(*) AS total, AVG(salary) AS avg_salary FROM employees;

-- ❌ 不推荐：查出所有数据让 Java 计算
SELECT * FROM employees; -- 然后在 Java 里循环计算
```

```java
// ✅ 推荐：用 Java 处理复杂业务逻辑
public List<User> findQualifiedUsers(List<User> users) {
    return users.stream()
        .filter(u -> u.getBirthYear() > 1995)
        .filter(u -> u.getConsumptionCount() > 5)
        .filter(u -> u.getAssets() > 1000)
        .filter(u -> generateUniqueId(u).matches(pattern))
        .collect(Collectors.toList());
}
```

---

## 分组（GROUP BY）

> 我们把表里的数据，按某个属性如果相同，则合并为一条数据。以这样的方式查找数据就是分组。

### 基本概念

- 把所有用户按公司分组，同一个公司的用户就会合并为一组（表现出来就是只查为一条数据）
- 分组后，每组只返回一条记录
- 通常与**聚合函数**配合使用，对每组数据进行统计

### 基本语法

```sql
SELECT 字段 1 FROM 表名 GROUP BY 字段 1
```

### 示例

```sql
-- 把所有用户属于的公司做一个统计，以公司 id 做一个列表
SELECT company_id FROM users GROUP BY company_id;

-- 统计每个公司的用户数量
SELECT company_id, COUNT(*) AS user_count
FROM users
GROUP BY company_id;

-- 统计每个公司的平均工资
SELECT company_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY company_id;
```

### 分组 + 聚合函数（常用组合）

```sql
-- 统计每个部门的员工数和平均工资
SELECT dept_id, 
       COUNT(*) AS emp_count, 
       AVG(salary) AS avg_salary,
       MAX(salary) AS max_salary,
       MIN(salary) AS min_salary
FROM employees
GROUP BY dept_id;

-- 统计每天的新增用户数
SELECT DATE(created_at) AS date, COUNT(*) AS new_users
FROM users
GROUP BY DATE(created_at);
```

### 分组后过滤 - HAVING 子句

> **HAVING 是专门拿来筛选 GROUP BY 的分组结果的**
> 
> **WHERE** 过滤分组前的数据，**HAVING** 过滤分组后的结果

**使用场景：** 分组分出了几家公司，假设我们想挑选员工平均工资大于某个值的公司，就可以用 HAVING。

```sql
-- 第一步：按公司分组，并统计平均工资
SELECT company_id, AVG(salary) AS avg_salary
FROM users
GROUP BY company_id;

-- 第二步：基于分组结果，进一步筛选平均工资大于 400 的公司
SELECT company_id, AVG(salary) AS avg_salary
FROM users
GROUP BY company_id
HAVING avg_salary > 400;
```

**更多示例：**

```sql
-- 查询用户数大于 10 的公司
SELECT company_id, COUNT(*) AS user_count
FROM users
GROUP BY company_id
HAVING COUNT(*) > 10;

-- 查询平均工资大于 5000 的部门
SELECT dept_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept_id
HAVING AVG(salary) > 5000;
```

### WHERE vs HAVING 对比

**核心区别：**

1. **作用时机不同**
   - **WHERE** 要发生在分组前。分组的逻辑就是先选出来所有数据 → 再分组。所以如果有 WHERE 就是先按 WHERE 条件选出来数据，再分组。
   - **HAVING** 是基于分组后结果筛选，所以我们上一个例子，只能用 HAVING。

2. **能否使用聚合函数**
   - **WHERE** 后面是不能跟聚合函数的
   - **HAVING** 可以使用聚合函数

| 特性 | WHERE | HAVING |
|------|-------|--------|
| **作用时机** | 分组前过滤 | 分组后过滤 |
| **能否使用聚合函数** |  ❌ 不能 | ✅ 能 |
| **典型场景** | 过滤原始数据 | 过滤统计结果 |

**使用场景示例：**

```sql
-- 场景 1：统计所有公司，在我们用户中工资大于 1000 的人数
-- WHERE 更合适，这里的逻辑是先筛选出部分用户，再分组
SELECT company_id, COUNT(*) AS user_count
FROM users
WHERE salary > 1000
GROUP BY company_id;

-- 场景 2：统计各家公司在我们用户中的人数，但是不统计小于两人的
-- HAVING 更合适，因为是先分组统计再筛选
SELECT company_id, COUNT(*) AS user_count
FROM users
GROUP BY company_id
HAVING COUNT(*) >= 2;
```

### 完整示例

```sql
-- 查询 2024 年创建的部门中，平均工资大于 8000 的部门
SELECT dept_id, AVG(salary) AS avg_salary
FROM employees
WHERE created_at >= '2024-01-01'  -- 先过滤 2024 年的数据
GROUP BY dept_id
HAVING AVG(salary) > 8000;        -- 再过滤平均工资大于 8000 的组
```

### 注意事项

- **SELECT 子句中的字段**：要么是 GROUP BY 后面的字段，要么必须使用聚合函数包裹
-  错误示例：`SELECT name, COUNT(*) FROM users GROUP BY dept_id`（name 未在 GROUP BY 中）
- ✅ 正确示例：`SELECT dept_id, COUNT(*) FROM users GROUP BY dept_id`
- 多个字段分组：`GROUP BY dept_id, position` 按部门和职位同时分组

---

## 排序（ORDER BY）

> 回想现实工作中，我们经常会有排序的需求，要求接口给我们的数据按某个规则排序

### 为什么用 SQL 排序而不是 Java 排序？

| 方案 | 说明 | 评价 |
|------|------|------|
| **Java 排序** | 查出数据，在 Java 代码里循环排序 |  不合适，Java 还得写代码，排序效率低 |
| **SQL 排序** | 直接让数据库查出来就排序好 | ✅ 效率高速度快 |

### 基本语法

```sql
ORDER BY 排序依据字段 ASC/DESC
```

- **ASC**：升序（从小到大），默认值，可以省略
- **DESC**：降序（从大到小）

### 示例

```sql
-- 按工资升序排列
SELECT * FROM employees ORDER BY salary ASC;

-- 按工资降序排列
SELECT * FROM employees ORDER BY salary DESC;

-- 按入职时间降序排列（最新的在前）
SELECT * FROM employees ORDER BY created_at DESC;

-- 按年龄升序排列（默认 ASC，可省略）
SELECT * FROM users ORDER BY age;
```

### 多字段排序

```sql
-- 先按部门升序，部门相同的再按工资降序
SELECT * FROM employees
ORDER BY dept_id ASC, salary DESC;

-- 先按公司分组统计人数，再按人数降序排列
SELECT company_id, COUNT(*) AS user_count
FROM users
GROUP BY company_id
ORDER BY user_count DESC;
```

### 排序 + 分页（常用组合）

```sql
-- 查询工资最高的前 10 名员工
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 10;

-- 分页查询：第 2 页，每页 20 条
SELECT * FROM users
ORDER BY created_at DESC
LIMIT 20 OFFSET 20;  -- 或 LIMIT 20, 20
```

### 注意事项

- **ORDER BY 在 WHERE 之后执行**：先过滤数据，再排序
- **ORDER BY 在 GROUP BY 之后执行**：先分组统计，再排序
- **可以使用别名排序**：`SELECT AVG(salary) AS avg_salary FROM employees GROUP BY dept_id ORDER BY avg_salary DESC`
- **NULL 值排序**：NULL 值默认排在最后（升序）或最前（降序），不同数据库可能有差异

### 完整执行顺序

```sql
SELECT 字段
FROM 表名
WHERE 条件              -- 1. 先过滤
GROUP BY 分组字段        -- 2. 再分组
HAVING 分组条件          -- 3. 再过滤分组结果
ORDER BY 排序字段        -- 4. 最后排序
LIMIT 分页;              -- 5. 最后分页
```