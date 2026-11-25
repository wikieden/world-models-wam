# 世界模型与 WAM 流派

**在线阅读：<https://wikieden.github.io/world-models-wam/>** · [讲义目录](https://wikieden.github.io/world-models-wam/lessons/index.html) · [全部动画](https://wikieden.github.io/world-models-wam/animations/index.html) · [复习卡片](https://wikieden.github.io/world-models-wam/review.html) · [全部讲义书](https://wikieden.github.io/ai-books/)

> 13 章 · 13 个动画（GIF + 可交互页面）· 14 张复习卡片（编号 C） · 覆盖 2026 年 11 月以前的世界模型与世界动作模型（WAM）主要流派

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

| | |
|---|---|
| ![](https://wikieden.github.io/world-models-wam/animations/02-noise-roles.gif)<br>**第 2 章** 同一个网络，挖空哪里就当什么角色 · [讲义](https://wikieden.github.io/world-models-wam/lessons/02-noise-roles.html) · [▶ 交互](https://wikieden.github.io/world-models-wam/animations/02-noise-roles.html) | ![](https://wikieden.github.io/world-models-wam/animations/04-joint-inference.gif)<br>**第 4 章** 少走几步、每块换成真实画面 · [讲义](https://wikieden.github.io/world-models-wam/lessons/04-joint-inference.html) · [▶ 交互](https://wikieden.github.io/world-models-wam/animations/04-joint-inference.html) |
| ![](https://wikieden.github.io/world-models-wam/animations/06-slow-fast.gif)<br>**第 6 章** 视频低频、动作高频，2v4a · [讲义](https://wikieden.github.io/world-models-wam/lessons/06-slow-fast.html) · [▶ 交互](https://wikieden.github.io/world-models-wam/animations/06-slow-fast.html) | ![](https://wikieden.github.io/world-models-wam/animations/08-coupling-axis.gif)<br>**第 8 章** P1 到纯 VLA 排成一条轴 · [讲义](https://wikieden.github.io/world-models-wam/lessons/08-coupling-axis.html) · [▶ 交互](https://wikieden.github.io/world-models-wam/animations/08-coupling-axis.html) |
| ![](https://wikieden.github.io/world-models-wam/animations/09-latent-action.gif)<br>**第 9 章** 从两帧里挤出隐动作 · [讲义](https://wikieden.github.io/world-models-wam/lessons/09-latent-action.html) · [▶ 交互](https://wikieden.github.io/world-models-wam/animations/09-latent-action.html) | ![](https://wikieden.github.io/world-models-wam/animations/12-landscape-2026.gif)<br>**第 12 章** 榜单分数和误差线 · [讲义](https://wikieden.github.io/world-models-wam/lessons/12-landscape-2026.html) · [▶ 交互](https://wikieden.github.io/world-models-wam/animations/12-landscape-2026.html) |

全部动画见 [animations/README.md](https://wikieden.github.io/world-models-wam/animations/index.html)。

## 目录

| 章 | 主题 | 一句话精要 | 动画 | 卡片 | 状态 |
|---|---|---|---|---|
| [1](https://wikieden.github.io/world-models-wam/lessons/01-two-questions.html) | 两个问题：做了会怎样 vs 该做什么 | 世界模型预测后果，WAM 首先是 policy | [▶](https://wikieden.github.io/world-models-wam/animations/01-two-questions.html) | C01、C02 | 进行中（题 3 待答） |
| [2](https://wikieden.github.io/world-models-wam/lessons/02-noise-roles.html) | 加噪还是不加噪：一个网络当四种角色 | 谁加噪谁干净，决定它是世界模型、IDM 还是 policy | [▶](https://wikieden.github.io/world-models-wam/animations/02-noise-roles.html) | C03 | 练习待答 |
| [3](https://wikieden.github.io/world-models-wam/lessons/03-joint-training.html) | 联合生成怎么训练 | flow matching loss、动作 ×10、无动作视频、时间对齐 | [▶](https://wikieden.github.io/world-models-wam/animations/03-joint-training.html) | C04 | 练习待答 |
| [4](https://wikieden.github.io/world-models-wam/lessons/04-joint-inference.html) | 联合生成怎么推理 | 16→4→1 步、丢视频、用真实观测重新锚定 | [▶](https://wikieden.github.io/world-models-wam/animations/04-joint-inference.html) | C05 | 练习待答 |
| [5](https://wikieden.github.io/world-models-wam/lessons/05-imagine-or-not.html) | 推理时还要想象吗 | 收益来自训练时学视频：Fast-WAM、HWAM | [▶](https://wikieden.github.io/world-models-wam/animations/05-imagine-or-not.html) | C06 | 练习待答 |
| [6](https://wikieden.github.io/world-models-wam/lessons/06-slow-fast.html) | 慢想象、快动作 | AHA-WAM 双塔、GR00T 2 的 2v4a | [▶](https://wikieden.github.io/world-models-wam/animations/06-slow-fast.html) | C07 | 练习待答 |
| [7](https://wikieden.github.io/world-models-wam/lessons/07-long-context.html) | 记得更久：长上下文 | 记忆就是上下文，Long-WAM 6 s → 19.2 s | [▶](https://wikieden.github.io/world-models-wam/animations/07-long-context.html) | C08 | 练习待答 |
| [8](https://wikieden.github.io/world-models-wam/lessons/08-coupling-axis.html) | 耦合强度这条轴 | P1 → P2 → P3 → P4 → 纯 VLA，综述三分法 | [▶](https://wikieden.github.io/world-models-wam/animations/08-coupling-axis.html) | C09 | 练习待答 |
| [9](https://wikieden.github.io/world-models-wam/lessons/09-latent-action.html) | 隐动作：用无标签视频的桥 | 窄瓶颈只装得下"变了什么" | [▶](https://wikieden.github.io/world-models-wam/animations/09-latent-action.html) | C10 | 练习待答 |
| [10](https://wikieden.github.io/world-models-wam/lessons/10-five-schools.html) | 世界模型五派：在哪个空间预测 | 隐状态、任务信号、特征、像素、物理 | [▶](https://wikieden.github.io/world-models-wam/animations/10-five-schools.html) | C11 | 练习待答 |
| [11](https://wikieden.github.io/world-models-wam/lessons/11-four-uses.html) | 推理的四种用法 | 离线想象、在线规划、直接出动作、交互模拟 | [▶](https://wikieden.github.io/world-models-wam/animations/11-four-uses.html) | C12 | 练习待答 |
| [12](https://wikieden.github.io/world-models-wam/lessons/12-landscape-2026.html) | 2026 年的 WAM 版图：开源模型和榜单 | 五个模型、MoE、标准误、读榜三件事 | [▶](https://wikieden.github.io/world-models-wam/animations/12-landscape-2026.html) | C13 | 练习待答 |
| [13](https://wikieden.github.io/world-models-wam/lessons/13-choose-and-frontier.html) | 选型与前沿 | 五个问题依次砍，前沿方向和开放问题 | [▶](https://wikieden.github.io/world-models-wam/animations/13-choose-and-frontier.html) | C14 | 练习待答 |
| [附录](https://wikieden.github.io/world-models-wam/lessons/appendix-glossary.html) | 缩写与术语表 | 全书的缩写和术语 | — | — | 已完成 |

## 联系与合作

欢迎来信：<wikieden@gmail.com>。可以合作的方向：

- 讲义勘误与建议
- 课程 / 企业内训
- 内容合作与转载授权
- 赞助本系列持续更新

赞助请发邮件联系。

---

本仓库由私有学习仓库里的脚本 `tools/publish-transformer/build.py` 自动生成，内容摘自讲义目录，不要直接修改这里的文件。
