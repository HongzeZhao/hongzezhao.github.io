---
layout: single
title:  "直播pk算法的思考"
date:   2024-10-30 23:32:51 +0800
categories: algorithm
tags: livestream pk 匈牙利算法
---

## 直播 pk 推荐问题的工作流
直播 pk 主要分为随机pk和推荐pk，他们的流程分为是：
- **随机pk**:
  - 一段时间内，点击了随机pk的主播会被加到候选池，此时要对池子内的主播进行两两匹配，pk开始。
  - 如果其中一方主播不愿意继续打pk，可以退出，重新选择；否则直到一场pk完成（一般为5分钟）。
- **推荐pk**:
  - 主播在推荐列表内邀请主播pk；
  - 对面主播接受或拒绝邀请；
  - 开始pk，最终完成pk或中途结束
 
## 匈牙利算法
参考这篇写的比较好的文章：https://cp-algorithms.com/graph/hungarian-algorithm.html
