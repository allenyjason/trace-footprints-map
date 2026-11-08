# 跟着名人去旅行 · 行迹图（史迹追踪）

> GitHub 仓库：`trace-footprints-map` · 中文展示名「历史足迹地图」

一组**纯静态单文件 HTML** 历史/地理行迹教学图：每位名人（或重大史事，如长征）一页，
在真实省界底图上标出行程路线、站点、诗词与史迹掌故。无后端、无构建步骤、无外部依赖，
可直接用 GitHub Pages 托管。

## 文件结构

```
index.html        首页（5 列卡片入口，按 people.js 生成）
people.js         首页卡片数据（姓名/朝代/故乡/一句话概览/是否已制作）
changzheng.html   长征路线图专题（1934—1936）
<姓名拼音>.html   30 位历史人物的行迹页（苏轼 sushi、李白 libai、郑和 zhenghe …）
```

每页地图 SVG 已内联，**不依赖** `map.json` / `world_ky.json` 等数据文件，也不引用任何 CDN。
`people.js` 必须与 `index.html` 放在**同一目录**，否则首页卡片读不到数据。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个空仓库，命名为 `trace-footprints-map`（也可自定，下文的 `<仓库名>` 相应替换）。
2. 把本目录下**所有文件**（含 `.nojekyll`）上传到仓库根。
3. 仓库 → Settings → Pages → Source 选 `Deploy from a branch` → Branch 选 `main`（或 `master`）、
   目录选 `/ (root)` → Save。
4. 等待约 1 分钟，访问 `https://<用户名>.github.io/<仓库名>/` 即可。

> 本目录已含 `.nojekyll`，GitHub 不会用 Jekyll 处理，`.html` 原样托管。

## 本地查看

直接双击 `index.html` 用浏览器打开即可（需与 `people.js` 同目录）。
也可在任意目录起一个静态服务器，例如：`python -m http.server`，再访问 `http://localhost:8000/`。

## 合规说明

每页页脚固定标注：「本文档由人工智能根据公开资料整理，仅用于教师个体备课、研究，
请务必做好审核后使用。」诗词原文均经联网核实，把握不足者只录可确证名句。

## 开源许可

本项目以 [MIT License](LICENSE) 发布，可自由使用、修改、分发。
