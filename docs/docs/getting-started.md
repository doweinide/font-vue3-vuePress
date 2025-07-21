# 快速开始

欢迎使用我们的产品！本指南将帮助您在5分钟内快速上手，体验核心功能。

## 🎯 开始之前

### 📋 系统要求

在开始之前，请确保您的系统满足以下要求：

#### 💻 硬件要求
- **CPU**：双核2.0GHz或更高
- **内存**：4GB RAM（推荐8GB）
- **存储**：至少10GB可用空间
- **网络**：稳定的互联网连接

#### 🖥️ 操作系统支持
- **Windows**：Windows 10/11 (64位)
- **macOS**：macOS 10.14或更高版本
- **Linux**：Ubuntu 18.04+, CentOS 7+, 或其他主流发行版

#### 🌐 浏览器要求
- **Chrome**：版本90+（推荐）
- **Firefox**：版本88+
- **Safari**：版本14+
- **Edge**：版本90+

### 🔑 准备工作

1. **注册账号**：访问 [注册页面](https://www.company.com/register)
2. **邮箱验证**：检查邮箱并完成验证
3. **下载客户端**：根据需要下载相应的客户端

## 🚀 第一步：账号注册

### 📝 注册流程

1. **访问注册页面**
   ```
   https://www.company.com/register
   ```

2. **填写注册信息**
   - 用户名（3-20个字符）
   - 邮箱地址
   - 密码（至少8位，包含字母和数字）
   - 确认密码

3. **验证邮箱**
   - 检查邮箱收件箱
   - 点击验证链接
   - 完成邮箱验证

4. **完善个人信息**
   - 真实姓名
   - 手机号码
   - 公司信息（可选）

### 🔐 登录系统

注册完成后，使用以下方式登录：

```javascript
// 登录API示例
const loginData = {
  email: 'your-email@example.com',
  password: 'your-password'
}

fetch('/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(loginData)
})
.then(response => response.json())
.then(data => {
  console.log('登录成功:', data)
})
```

## 🏠 第二步：熟悉界面

### 🎨 主界面布局

登录后，您将看到以下主要区域：

```
┌─────────────────────────────────────────┐
│              顶部导航栏                  │
├─────────────┬───────────────────────────┤
│             │                           │
│   左侧      │        主要内容区域        │
│   菜单      │                           │
│             │                           │
├─────────────┼───────────────────────────┤
│             │        状态栏             │
└─────────────┴───────────────────────────┘
```

#### 🧭 顶部导航栏
- **Logo**：点击返回首页
- **搜索框**：全局搜索功能
- **通知**：系统通知和消息
- **用户菜单**：个人设置和退出

#### 📋 左侧菜单
- **仪表板**：数据概览和统计
- **项目**：项目管理和协作
- **数据**：数据管理和分析
- **报表**：报表生成和查看
- **设置**：系统设置和配置

#### 📊 主要内容区域
- **工作台**：主要操作界面
- **详情面板**：详细信息展示
- **操作按钮**：常用功能快捷入口

### 🎛️ 个性化设置

#### 🌈 主题设置
```css
/* 主题切换示例 */
.theme-light {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #007bff;
}

.theme-dark {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --primary-color: #0d6efd;
}
```

#### ⚙️ 界面配置
- **语言设置**：中文/English
- **时区设置**：选择您的时区
- **通知设置**：配置通知偏好
- **快捷键**：自定义快捷键

## 📁 第三步：创建第一个项目

### 🆕 新建项目

1. **点击"新建项目"按钮**
   ```
   位置：左侧菜单 → 项目 → 新建项目
   ```

2. **填写项目信息**
   ```yaml
   项目名称: "我的第一个项目"
   项目描述: "这是一个测试项目"
   项目类型: "标准项目"
   可见性: "私有"
   ```

3. **选择模板**（可选）
   - 空白项目
   - 电商模板
   - 企业官网模板
   - 数据分析模板

4. **配置基础设置**
   ```json
   {
     "name": "my-first-project",
     "description": "我的第一个项目",
     "template": "blank",
     "visibility": "private",
     "settings": {
       "autoSave": true,
       "collaboration": false
     }
   }
   ```

### 🔧 项目配置

#### 📊 数据源配置
```javascript
// 数据源配置示例
const dataSource = {
  type: 'database',
  config: {
    host: 'localhost',
    port: 3306,
    database: 'mydb',
    username: 'user',
    password: 'password'
  }
}

// 添加数据源
project.addDataSource('main', dataSource)
```

#### 🎨 界面设计
1. **选择布局**：网格布局、流式布局、自定义布局
2. **添加组件**：拖拽组件到画布
3. **配置属性**：设置组件属性和样式
4. **预览效果**：实时预览设计效果

## 📊 第四步：导入数据

### 📥 数据导入方式

#### 1. 文件上传
支持的文件格式：
- **CSV**：逗号分隔值文件
- **Excel**：.xlsx, .xls格式
- **JSON**：结构化数据文件
- **XML**：标记语言文件

```javascript
// 文件上传示例
const fileInput = document.getElementById('file-input')
const file = fileInput.files[0]

const formData = new FormData()
formData.append('file', file)
formData.append('type', 'csv')

fetch('/api/data/upload', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log('上传成功:', data)
})
```

#### 2. 数据库连接
```sql
-- 示例SQL查询
SELECT 
  id,
  name,
  email,
  created_at
FROM users
WHERE status = 'active'
ORDER BY created_at DESC
LIMIT 100
```

#### 3. API接口
```javascript
// API数据获取
const apiConfig = {
  url: 'https://api.example.com/data',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer your-token',
    'Content-Type': 'application/json'
  }
}

fetch(apiConfig.url, apiConfig)
.then(response => response.json())
.then(data => {
  // 处理数据
  processData(data)
})
```

### 🔄 数据处理

#### 数据清洗
- **去重**：移除重复记录
- **格式化**：统一数据格式
- **验证**：检查数据有效性
- **转换**：数据类型转换

#### 数据映射
```javascript
// 数据映射示例
const dataMapping = {
  'user_id': 'id',
  'user_name': 'name',
  'user_email': 'email',
  'create_time': 'created_at'
}

function mapData(rawData) {
  return rawData.map(item => {
    const mappedItem = {}
    for (const [oldKey, newKey] of Object.entries(dataMapping)) {
      mappedItem[newKey] = item[oldKey]
    }
    return mappedItem
  })
}
```

## 📈 第五步：创建报表

### 📊 选择图表类型

#### 基础图表
- **柱状图**：比较不同类别的数据
- **折线图**：显示数据随时间的变化
- **饼图**：显示部分与整体的关系
- **散点图**：显示两个变量之间的关系

#### 高级图表
- **热力图**：显示数据密度分布
- **雷达图**：多维度数据比较
- **漏斗图**：转化流程分析
- **地图**：地理位置数据可视化

### 🎨 图表配置

```javascript
// 图表配置示例
const chartConfig = {
  type: 'bar',
  data: {
    labels: ['一月', '二月', '三月', '四月', '五月'],
    datasets: [{
      label: '销售额',
      data: [12000, 19000, 15000, 25000, 22000],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '月度销售报表'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}
```

### 📋 报表布局

#### 仪表板设计
```html
<!-- 仪表板布局示例 -->
<div class="dashboard">
  <div class="dashboard-header">
    <h1>销售仪表板</h1>
    <div class="date-range-picker">...</div>
  </div>
  
  <div class="dashboard-grid">
    <div class="chart-container">
      <canvas id="sales-chart"></canvas>
    </div>
    
    <div class="kpi-cards">
      <div class="kpi-card">
        <h3>总销售额</h3>
        <span class="kpi-value">¥1,234,567</span>
      </div>
      <!-- 更多KPI卡片 -->
    </div>
  </div>
</div>
```

## 🔗 第六步：分享和协作

### 👥 团队协作

#### 邀请成员
1. **进入项目设置**
2. **点击"成员管理"**
3. **输入邮箱地址**
4. **选择权限级别**：
   - 查看者：只能查看
   - 编辑者：可以编辑
   - 管理员：完全权限

#### 权限管理
```javascript
// 权限配置示例
const permissions = {
  viewer: ['read'],
  editor: ['read', 'write'],
  admin: ['read', 'write', 'delete', 'manage']
}

function checkPermission(user, action) {
  const userRole = user.role
  const allowedActions = permissions[userRole]
  return allowedActions.includes(action)
}
```

### 📤 分享报表

#### 生成分享链接
```javascript
// 生成分享链接
function generateShareLink(reportId, options = {}) {
  const baseUrl = 'https://www.company.com/share'
  const params = new URLSearchParams({
    id: reportId,
    expires: options.expires || '7d',
    password: options.password || '',
    readonly: options.readonly || 'true'
  })
  
  return `${baseUrl}?${params.toString()}`
}
```

#### 嵌入代码
```html
<!-- 嵌入报表代码 -->
<iframe 
  src="https://www.company.com/embed/report/123456"
  width="800"
  height="600"
  frameborder="0">
</iframe>
```

## ⚡ 快捷操作

### ⌨️ 键盘快捷键

| 快捷键 | 功能 | 说明 |
|--------|------|------|
| Ctrl+N | 新建项目 | 快速创建新项目 |
| Ctrl+S | 保存 | 保存当前工作 |
| Ctrl+Z | 撤销 | 撤销上一步操作 |
| Ctrl+Y | 重做 | 重做撤销的操作 |
| Ctrl+F | 搜索 | 全局搜索 |
| F11 | 全屏 | 切换全屏模式 |

### 🔧 常用功能

#### 快速导航
- **Ctrl+K**：打开命令面板
- **Ctrl+P**：快速打开项目
- **Ctrl+Shift+P**：打开设置面板

#### 数据操作
- **Ctrl+D**：复制数据
- **Ctrl+R**：刷新数据
- **Ctrl+E**：导出数据

## 🆘 常见问题

### ❓ 登录问题

**Q: 忘记密码怎么办？**
A: 点击登录页面的"忘记密码"链接，输入邮箱地址，系统会发送重置密码的邮件。

**Q: 邮箱验证邮件收不到？**
A: 请检查垃圾邮件文件夹，或者联系客服重新发送验证邮件。

### 📊 数据问题

**Q: 支持哪些数据格式？**
A: 支持CSV、Excel、JSON、XML等常见格式，以及主流数据库连接。

**Q: 数据上传失败怎么办？**
A: 请检查文件格式和大小限制，确保文件完整且符合要求。

### 🔧 功能问题

**Q: 如何删除项目？**
A: 进入项目设置，在"危险操作"区域找到删除选项。注意：删除操作不可恢复。

**Q: 如何导出报表？**
A: 在报表页面点击"导出"按钮，选择导出格式（PDF、PNG、Excel等）。

## 📞 获得帮助

### 💬 联系支持

- **在线客服**：网站右下角聊天窗口
- **技术支持**：support@company.com
- **电话支持**：400-888-8888
- **文档中心**：[docs.company.com](https://docs.company.com)

### 🎓 学习资源

- **视频教程**：[tutorials.company.com](https://tutorials.company.com)
- **用户社区**：[community.company.com](https://community.company.com)
- **知识库**：[kb.company.com](https://kb.company.com)
- **博客文章**：[blog.company.com](https://blog.company.com)

---

::: tip 恭喜！
您已经完成了快速开始指南！现在您可以开始探索更多高级功能，或者查看详细的用户指南。
:::

::: info 下一步
建议您继续阅读：
- [用户指南](/docs/user-guide) - 详细的功能说明
- [最佳实践](/docs/best-practices) - 推荐的使用方式
- [API文档](/docs/api) - 开发者集成指南
:::

::: warning 重要提示
请定期保存您的工作，并建议开启自动保存功能。如遇到问题，请及时联系技术支持。
:::