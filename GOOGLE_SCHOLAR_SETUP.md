# Google Scholar ID 设置说明

## 如何获取 Google Scholar ID

### 1. 找到您的 Google Scholar 个人资料
1. 访问 [Google Scholar](https://scholar.google.com)
2. 搜索您的姓名或论文
3. 点击您的个人资料

### 2. 获取用户ID
从您的个人资料URL中获取用户ID，例如：
```
https://scholar.google.com/citations?user=ABCDEFGHIJK&hl=en
```
这里的 `ABCDEFGHIJK` 就是您的用户ID。

### 3. 获取论文ID
1. 在您的个人资料页面，点击具体的论文
2. 从URL中获取论文ID，例如：
```
https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ABCDEFGHIJK&citation_for_view=ABCDEFGHIJK:LkGwnXOMwfcC
```
这里的 `ABCDEFGHIJK:LkGwnXOMwfcC` 就是完整的引用ID。

### 4. 在论文文件中设置
在您的论文markdown文件中，设置如下：
```yaml
google_scholar_id: "ABCDEFGHIJK:LkGwnXOMwfcC"
```

## 注意事项

⚠️ **重要提醒**：Google Scholar 不提供公开的API来获取引用计数。当前实现只会显示一个链接到Google Scholar的徽章，而不会显示实际的引用数量。

如果您需要显示引用计数，可以考虑以下替代方案：
1. 使用 Semantic Scholar API（原来的实现）
2. 使用 Crossref API
3. 使用 OpenCitations API
4. 手动更新引用计数

## 示例

```yaml
---
title: "Your Paper Title"
google_scholar_id: "ABCDEFGHIJK:LkGwnXOMwfcC"
---
```

这将在论文列表中显示一个链接到Google Scholar的徽章。