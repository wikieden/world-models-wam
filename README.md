# 世界模型与 WAM 流派

**在线阅读：<https://wikieden.github.io/world-models-wam/>** · [讲义目录](https://wikieden.github.io/world-models-wam/lessons/index.html) · [全部动画](https://wikieden.github.io/world-models-wam/animations/index.html) · [复习卡片](https://wikieden.github.io/world-models-wam/review.html) · [全部讲义书](https://wikieden.github.io/ai-books/)

> 13 章（连载中，已写第 1 章）· 每章一个动画（GIF + 可交互页面）· 复习卡片编号 C · 覆盖 2026 年 11 月以前的世界模型与世界动作模型（WAM）主要流派

## 这本书讲什么

从"世界模型和 WAM 各回答什么问题"讲起：联合生成怎么用一个网络当世界模型、逆动力学和 policy 三种角色，怎么训练、怎么推理；再看 2026 年下半年的新进展（推理时不想象的 Fast-WAM、慢想象快动作的双频设计、长上下文、开源模型和公共榜单），最后把先想后做、借视频特征、辅助 loss、隐动作、世界模型五派放到同一张地图上，落到"什么场景选哪派"。

- **适合谁**：知道 policy / VLA 是什么，听说过扩散或 flow matching；概率只用到条件概率和链式法则，用到时现场讲。
- **读完能做什么**：拿到一篇新的世界模型或 WAM 论文，能说出它属于哪一派、训练时和推理时各生成什么、快慢和数据要求大概在哪个量级、榜单分数该怎么看。
- **怎么读**：按章顺序读。每章先看讲解和动画，再自己做练习，最后用复习卡片隔几天考自己。

## 讲解的特点

- **每章一个动画**：GIF 嵌在讲义"动画演示"一节，同名 `.html` 打开就自动播放，点按钮可单步，目录见 [animations/README.md](https://wikieden.github.io/world-models-wam/animations/index.html)。
- **一次一小步**：每个概念按"白话类比 → 公式（每个符号说清楚怎么读）→ 小数字算一遍"讲。
- **对照原文**：引用的课程讲义和论文标了本地文本的行号；新论文只读了摘要的、来自新闻或公司自报的数字都单独标注。
- **保留真实的学习过程**：练习与作答记录里是学习时的原话、对错和点评。
- **术语不设门槛**：缩写第一次出现就给英文全称并逐词解释，全书缩写见 [缩写与术语表](https://wikieden.github.io/world-models-wam/lessons/appendix-glossary.html)。

## 示例动画

| |
|---|
| ![](https://wikieden.github.io/world-models-wam/animations/01-two-questions.gif)<br>**第 1 章** 同一个场景，世界模型、policy、WAM 各问什么 · [讲义](https://wikieden.github.io/world-models-wam/lessons/01-two-questions.html) · [▶ 交互](https://wikieden.github.io/world-models-wam/animations/01-two-questions.html) |

全部动画见 [animations/README.md](https://wikieden.github.io/world-models-wam/animations/index.html)。

## 目录

| 章 | 主题 | 卡片 | 动画 | 状态 |
|---|---|---|---|
| [1](https://wikieden.github.io/world-models-wam/lessons/01-two-questions.html) | 两个问题：做了会怎样 vs 该做什么 | C01 | [▶](https://wikieden.github.io/world-models-wam/animations/01-two-questions.html) | 进行中 |
| [附录](https://wikieden.github.io/world-models-wam/lessons/appendix-glossary.html) | 缩写与术语表 | — | — | 随讲随补 |

---

本仓库由私有学习仓库里的脚本 `tools/publish-transformer/build.py` 自动生成，内容摘自讲义目录，不要直接修改这里的文件。
