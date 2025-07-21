# API 文档

欢迎使用我们的API！本文档提供了完整的API参考，包括认证、端点、请求/响应格式和代码示例。

## 🚀 API 概述

### 📋 基本信息

- **API版本**：v2.0
- **基础URL**：`https://api.company.com/v2`
- **协议**：HTTPS
- **数据格式**：JSON
- **字符编码**：UTF-8

### 🌟 API特性

- **RESTful设计**：遵循REST架构原则
- **统一响应格式**：标准化的响应结构
- **丰富的错误信息**：详细的错误代码和描述
- **速率限制**：防止API滥用
- **版本控制**：向后兼容的版本管理

## 🔐 认证授权

### 🔑 API密钥认证

#### 获取API密钥
1. 登录控制台：[console.company.com](https://console.company.com)
2. 进入"API管理"页面
3. 点击"创建API密钥"
4. 设置密钥名称和权限
5. 保存生成的密钥

#### 使用API密钥
```javascript
// 在请求头中添加API密钥
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}

fetch('https://api.company.com/v2/users', {
  method: 'GET',
  headers: headers
})
.then(response => response.json())
.then(data => console.log(data))
```

### 🎫 OAuth 2.0认证

#### 授权码流程
```javascript
// 第一步：获取授权码
const authUrl = 'https://api.company.com/oauth/authorize?' +
  'client_id=YOUR_CLIENT_ID&' +
  'redirect_uri=YOUR_REDIRECT_URI&' +
  'response_type=code&' +
  'scope=read write'

// 第二步：交换访问令牌
const tokenResponse = await fetch('https://api.company.com/oauth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    code: 'AUTHORIZATION_CODE',
    redirect_uri: 'YOUR_REDIRECT_URI'
  })
})

const tokenData = await tokenResponse.json()
const accessToken = tokenData.access_token
```

### 🔄 令牌刷新
```javascript
// 刷新访问令牌
const refreshResponse = await fetch('https://api.company.com/oauth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    refresh_token: 'YOUR_REFRESH_TOKEN'
  })
})
```

## 📊 响应格式

### ✅ 成功响应
```json
{
  "success": true,
  "data": {
    "id": 123,
    "name": "示例数据",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_123456789"
  }
}
```

### ❌ 错误响应
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "参数无效",
    "details": {
      "field": "email",
      "reason": "邮箱格式不正确"
    }
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_123456789"
  }
}
```

### 📄 分页响应
```json
{
  "success": true,
  "data": [
    {"id": 1, "name": "项目1"},
    {"id": 2, "name": "项目2"}
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 100,
    "total_pages": 5,
    "has_next": true,
    "has_prev": false
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_123456789"
  }
}
```

## 👥 用户管理 API

### 📋 获取用户列表

**端点**：`GET /users`

**参数**：
| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| page | integer | 否 | 页码，默认1 |
| per_page | integer | 否 | 每页数量，默认20，最大100 |
| search | string | 否 | 搜索关键词 |
| status | string | 否 | 用户状态：active, inactive, pending |
| sort | string | 否 | 排序字段：name, email, created_at |
| order | string | 否 | 排序方向：asc, desc |

**示例请求**：
```bash
curl -X GET "https://api.company.com/v2/users?page=1&per_page=10&status=active" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

**示例响应**：
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "张三",
      "email": "zhangsan@example.com",
      "status": "active",
      "avatar": "https://cdn.company.com/avatars/1.jpg",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 50,
    "total_pages": 5
  }
}
```

### 👤 获取用户详情

**端点**：`GET /users/{id}`

**路径参数**：
| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| id | integer | 是 | 用户ID |

**示例请求**：
```javascript
const userId = 123
const response = await fetch(`https://api.company.com/v2/users/${userId}`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})

const userData = await response.json()
console.log(userData)
```

### ➕ 创建用户

**端点**：`POST /users`

**请求体**：
```json
{
  "name": "李四",
  "email": "lisi@example.com",
  "password": "securePassword123",
  "role": "user",
  "profile": {
    "phone": "+86-138-0000-0000",
    "company": "示例公司",
    "department": "技术部"
  }
}
```

**示例代码**：
```python
import requests
import json

url = "https://api.company.com/v2/users"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "name": "李四",
    "email": "lisi@example.com",
    "password": "securePassword123",
    "role": "user"
}

response = requests.post(url, headers=headers, data=json.dumps(data))
result = response.json()
print(result)
```

### ✏️ 更新用户

**端点**：`PUT /users/{id}`

**示例请求**：
```javascript
const updateUser = async (userId, userData) => {
  const response = await fetch(`https://api.company.com/v2/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  
  return await response.json()
}

// 使用示例
const result = await updateUser(123, {
  name: "张三（已更新）",
  status: "inactive"
})
```

### 🗑️ 删除用户

**端点**：`DELETE /users/{id}`

**示例请求**：
```bash
curl -X DELETE "https://api.company.com/v2/users/123" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## 📁 项目管理 API

### 📋 获取项目列表

**端点**：`GET /projects`

**查询参数**：
```javascript
const params = new URLSearchParams({
  page: 1,
  per_page: 20,
  status: 'active',
  owner_id: 123,
  search: '项目名称',
  sort: 'created_at',
  order: 'desc'
})

const url = `https://api.company.com/v2/projects?${params}`
```

### 🆕 创建项目

**端点**：`POST /projects`

**请求体结构**：
```typescript
interface CreateProjectRequest {
  name: string                    // 项目名称（必需）
  description?: string            // 项目描述
  template?: string              // 项目模板
  visibility: 'public' | 'private' // 可见性（必需）
  settings?: {
    auto_save?: boolean          // 自动保存
    collaboration?: boolean      // 协作功能
    notifications?: boolean      // 通知设置
  }
  tags?: string[]                // 项目标签
}
```

**示例**：
```javascript
const createProject = async (projectData) => {
  const response = await fetch('https://api.company.com/v2/projects', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: "新项目",
      description: "这是一个测试项目",
      visibility: "private",
      settings: {
        auto_save: true,
        collaboration: false
      },
      tags: ["测试", "开发"]
    })
  })
  
  return await response.json()
}
```

## 📊 数据管理 API

### 📤 数据上传

**端点**：`POST /data/upload`

**请求格式**：`multipart/form-data`

**示例代码**：
```javascript
const uploadData = async (file, options = {}) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('type', options.type || 'csv')
  formData.append('project_id', options.projectId)
  
  if (options.mapping) {
    formData.append('mapping', JSON.stringify(options.mapping))
  }
  
  const response = await fetch('https://api.company.com/v2/data/upload', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: formData
  })
  
  return await response.json()
}

// 使用示例
const fileInput = document.getElementById('file-input')
const file = fileInput.files[0]

const result = await uploadData(file, {
  type: 'csv',
  projectId: 123,
  mapping: {
    'user_id': 'id',
    'user_name': 'name',
    'user_email': 'email'
  }
})
```

### 🔍 数据查询

**端点**：`POST /data/query`

**查询语言**：支持类SQL语法

```javascript
const queryData = async (query) => {
  const response = await fetch('https://api.company.com/v2/data/query', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      format: 'json',
      limit: 1000
    })
  })
  
  return await response.json()
}

// 查询示例
const result = await queryData(`
  SELECT 
    name,
    email,
    COUNT(*) as order_count
  FROM users u
  JOIN orders o ON u.id = o.user_id
  WHERE u.status = 'active'
    AND o.created_at >= '2024-01-01'
  GROUP BY u.id, u.name, u.email
  ORDER BY order_count DESC
  LIMIT 100
`)
```

## 📈 报表 API

### 📊 创建报表

**端点**：`POST /reports`

**配置结构**：
```javascript
const reportConfig = {
  name: "销售报表",
  description: "月度销售数据分析",
  type: "dashboard",
  data_source: {
    type: "query",
    query: "SELECT * FROM sales WHERE date >= '2024-01-01'"
  },
  charts: [
    {
      type: "bar",
      title: "月度销售额",
      x_axis: "month",
      y_axis: "amount",
      config: {
        color: "#007bff",
        show_legend: true,
        show_grid: true
      }
    },
    {
      type: "pie",
      title: "产品分布",
      data_field: "product",
      value_field: "count",
      config: {
        show_percentage: true,
        colors: ["#ff6384", "#36a2eb", "#ffce56"]
      }
    }
  ],
  layout: {
    grid: {
      columns: 2,
      rows: 2
    },
    positions: [
      {chart_id: 0, x: 0, y: 0, width: 1, height: 1},
      {chart_id: 1, x: 1, y: 0, width: 1, height: 1}
    ]
  },
  settings: {
    auto_refresh: true,
    refresh_interval: 300, // 5分钟
    export_formats: ["pdf", "png", "excel"]
  }
}

const createReport = async (config) => {
  const response = await fetch('https://api.company.com/v2/reports', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(config)
  })
  
  return await response.json()
}
```

### 📤 导出报表

**端点**：`POST /reports/{id}/export`

```javascript
const exportReport = async (reportId, format = 'pdf') => {
  const response = await fetch(`https://api.company.com/v2/reports/${reportId}/export`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      format: format, // pdf, png, excel, csv
      options: {
        page_size: 'A4',
        orientation: 'landscape',
        include_data: true
      }
    })
  })
  
  if (response.ok) {
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `report-${reportId}.${format}`
    a.click()
  }
}
```

## 🔔 Webhook API

### 📝 创建Webhook

**端点**：`POST /webhooks`

```javascript
const createWebhook = async (webhookConfig) => {
  const response = await fetch('https://api.company.com/v2/webhooks', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: 'https://your-domain.com/webhook',
      events: [
        'user.created',
        'user.updated',
        'project.created',
        'report.generated'
      ],
      secret: 'your-webhook-secret',
      active: true,
      config: {
        content_type: 'json',
        insecure_ssl: false
      }
    })
  })
  
  return await response.json()
}
```

### 🔐 Webhook验证

```javascript
// 服务端验证Webhook签名
const crypto = require('crypto')

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  )
}

// Express.js示例
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-webhook-signature']
  const payload = JSON.stringify(req.body)
  const secret = 'your-webhook-secret'
  
  if (verifyWebhookSignature(payload, signature, secret)) {
    // 处理Webhook事件
    console.log('Webhook验证成功:', req.body)
    res.status(200).send('OK')
  } else {
    res.status(401).send('Unauthorized')
  }
})
```

## 🚦 错误代码

### 📋 HTTP状态码

| 状态码 | 含义 | 描述 |
|--------|------|------|
| 200 | OK | 请求成功 |
| 201 | Created | 资源创建成功 |
| 400 | Bad Request | 请求参数错误 |
| 401 | Unauthorized | 认证失败 |
| 403 | Forbidden | 权限不足 |
| 404 | Not Found | 资源不存在 |
| 429 | Too Many Requests | 请求频率超限 |
| 500 | Internal Server Error | 服务器内部错误 |

### 🔍 业务错误码

| 错误码 | 描述 | 解决方案 |
|--------|------|----------|
| INVALID_API_KEY | API密钥无效 | 检查API密钥是否正确 |
| EXPIRED_TOKEN | 令牌已过期 | 刷新访问令牌 |
| INSUFFICIENT_PERMISSIONS | 权限不足 | 联系管理员分配权限 |
| RESOURCE_NOT_FOUND | 资源不存在 | 检查资源ID是否正确 |
| VALIDATION_ERROR | 参数验证失败 | 检查请求参数格式 |
| RATE_LIMIT_EXCEEDED | 超出速率限制 | 降低请求频率 |
| QUOTA_EXCEEDED | 超出配额限制 | 升级套餐或联系客服 |

## 🚀 SDK 和工具

### 📚 官方SDK

#### JavaScript/Node.js
```bash
npm install @company/api-sdk
```

```javascript
const { CompanyAPI } = require('@company/api-sdk')

const client = new CompanyAPI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.company.com/v2'
})

// 使用示例
const users = await client.users.list({
  page: 1,
  per_page: 10
})

const newUser = await client.users.create({
  name: '张三',
  email: 'zhangsan@example.com'
})
```

#### Python
```bash
pip install company-api-sdk
```

```python
from company_api import CompanyAPI

client = CompanyAPI(api_key='YOUR_API_KEY')

# 获取用户列表
users = client.users.list(page=1, per_page=10)

# 创建新用户
new_user = client.users.create(
    name='张三',
    email='zhangsan@example.com'
)
```

#### PHP
```bash
composer require company/api-sdk
```

```php
<?php
use Company\API\Client;

$client = new Client([
    'api_key' => 'YOUR_API_KEY'
]);

// 获取用户列表
$users = $client->users()->list([
    'page' => 1,
    'per_page' => 10
]);

// 创建新用户
$newUser = $client->users()->create([
    'name' => '张三',
    'email' => 'zhangsan@example.com'
]);
?>
```

### 🛠️ 开发工具

#### Postman集合
- 下载地址：[postman-collection.json](https://api.company.com/postman)
- 包含所有API端点的预配置请求
- 支持环境变量配置

#### OpenAPI规范
- 规范文件：[openapi.yaml](https://api.company.com/openapi.yaml)
- 支持代码生成工具
- 兼容Swagger UI

## 📊 速率限制

### 🚦 限制规则

| 套餐类型 | 每分钟请求数 | 每小时请求数 | 每日请求数 |
|----------|-------------|-------------|------------|
| 免费版 | 60 | 1,000 | 10,000 |
| 基础版 | 300 | 10,000 | 100,000 |
| 专业版 | 1,000 | 50,000 | 500,000 |
| 企业版 | 无限制 | 无限制 | 无限制 |

### 📈 限制头信息

```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642234567
X-RateLimit-Window: 3600
```

### 🔄 处理限制

```javascript
const makeAPIRequest = async (url, options) => {
  const response = await fetch(url, options)
  
  if (response.status === 429) {
    const resetTime = response.headers.get('X-RateLimit-Reset')
    const waitTime = (resetTime * 1000) - Date.now()
    
    console.log(`速率限制，等待 ${waitTime}ms`)
    await new Promise(resolve => setTimeout(resolve, waitTime))
    
    // 重试请求
    return makeAPIRequest(url, options)
  }
  
  return response
}
```

---

::: tip 最佳实践
- 使用官方SDK可以自动处理认证和错误重试
- 实现指数退避算法处理速率限制
- 缓存不经常变化的数据减少API调用
- 使用Webhook接收实时事件通知
:::

::: info 获得帮助
- 📧 技术支持：api-support@company.com
- 💬 开发者社区：[community.company.com](https://community.company.com)
- 📚 更多示例：[examples.company.com](https://examples.company.com)
:::

::: warning 重要提醒
- 请妥善保管API密钥，不要在客户端代码中暴露
- 定期轮换API密钥以确保安全
- 遵守速率限制避免服务中断
- 及时更新SDK版本获得最新功能
:::