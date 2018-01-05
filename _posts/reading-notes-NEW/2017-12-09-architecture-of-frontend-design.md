---
layout: post
title: 前端架构设计
category: 读书笔记/前端架构设计✨✨
excerpt_separator: "excerpt_end"
---

评价呢?

我觉得只是一本给2星的书籍。作者结合他在RedHat的实践总结的经验，泛泛而谈，很多东西都挺虚的，不过总结的某些经验之谈，对于个人在项目实践过程也有所启发。下面整理一下自己的读书笔记，个人斟酌是否需要阅读原书。

excerpt_end

# 目录
* [x] 第1章 前端架构原则
* [x] 第2章 Alpha架构
* [x] 第3章 前端架构设计
* [x] 第4-6章 代码核心 HTML/CSS/JavaScript
* [x] ~~第7章 RedHat代码~~ —— 感觉一直在讲解CSS的编写规则(没什么大用)
* [x] 第8章 前端工作流
* [x] ~~第9章 任务处理器~~ —— 主要介绍了Gulp(现在使用webpack,所以也没什么大用)
* [x] 第10章 RedHat的工作流程
* [x] 第11章 单元测试
* [x] 第12章 性能测试 —— <span style="color:#D03C3C;">比较杂乱，需要实践再回来反思总结</span>
  * 原始指标
  * 混合度量标准
  * 设置性能测试
* [ ] 第13章 视觉还原测试<span style="color:#D03C3C;"> —— 待整理「无头浏览器测试」</span>
* [ ] 第14章 Red Hat测试 <span style="color:#D03C3C;">—— 待整理「无头浏览器测试」</span>
* [x] ~~第15章 样式文档~~ —— 主要介绍了hologram(已经使用不了了,没什么大作用)
* [x] ~~第16章 图形库~~ ——  主要介绍了[ Pattent Lab](http://patternlab.io)(没什么大作用)
* [x] ~~第17章 Red Hat文档~~
* [x] 第18章 总结
  * 主要还是说明了「每次迭代的过程中，或许我们有不断的重新去设计我们的架构，但这并不是说明我们做过的工作是毫无价值的。在不断的迭代和尝试过程中，慢慢的学会认清当前的优势和劣势，并慢慢的学会预知未来的机遇和变化」



## 前端架构原则
> 前端架构是一系列工具和流程的集合，旨在提升前端代码的质量，并实现高效、 可持续的工作流


前端架构原则？前端架构核心？ —— 达到可扩展性和可持续性

* 前端架构师的工作职责
  * **体系设计**

  * **工作规划**

  完整的工作流可能会用到多种工 具，如版本控制器、任务调度器、CSS处理器、文档工具、测试组件和服务器自动化工具等
  * **监督跟进**


* 前端架构的四个核心 :thumbsup::thumbsup::thumbsup:
  * 代码、流程、测试、文档


## 前端架构设计的四个核心

> 作为一名前端架构师，你的工作是不断地探索和评估新的技 术、平台、方法和框架。世界上没有一刀切式的解决方案，而前端架构师的使命正是将项 目的需求与前端开发的实际情况相结合。

前端架构设计的四个核心: **代码**,**流程**,**测试**,**文档**


### **代码**
* 可控性和自动化


##### **关于CSS**
* 面向对象的CSS ([http://oocss.org/](http://oocss.org/))
  * **两个重要的原则：**分离结构和外观，以及分离容器和内容
* SMACSS(Scalable and Modular Architecture for CSS，模块化架构的可扩展CSS)
  * **基础**—— 不添加CSS类名的情况
  * **模块**—— 设计中模块化、可复用的单元
  * **布局**—— 页面划分的区域
  * **状态** —— 特定情况下模块和布局的显示情况
  * **主题**—— 可选的视觉外壳


* Red Hat网站 —— 使用了SMACSS和BEM相混合的方案


> CSS 原则：
> * 分离容器和内容
> * 区分布局与组件的角色和职责
> * 在标记上使用单一、扁平的选择器
> * 使用其他原则，比如单一职责原则、单一样式来源、内容修饰符

> 通过对这些问题的探讨，你能够加深 对前端架构的思考，建立起什么是好架构和如何搭建架构的观念，并在代码评审时能够使 用其中的某些原则作为分析和评论的根据。这样做可以让你巩固代码核心，使之更好地支 撑起整个前端架构，并且帮助团队走向成功。


#### 关于JavaScript
* 维护整洁的JavaScript代码
  * 保持代码的整洁
  * 创造可复用的函数
* [PS 推荐阅读] - 《重构》、《代码整洁之道》


### **流程**
* 如何利用工具和流程打造高效不易出错的工作流
  * —— 提高生产力、加快效率和保持代码一致性

### **测试**

PS: 思考自己项目中的「单元测试」、「性能测试」、「回归测试」等

### **文档**

PS: 开发规范文档、功能模块拆分设计文档、组件设计文档、CHANGELOG文档以及维护文档等等

## Alpha架构

> * **模块化内容**
>
> 我们非常推崇Brad Frost提出的[原子设计方法论](http://patternlab.io)，希望尽可能复用 小的组件，而不是弄出几十个、甚至上百个不同的内容块。
> * **全面测试**
>
> 我们之前经常出现这样的情况:大量的前端代码合入到主干，然后导致几个月前的代码出现运行问题。这样太浪费时间了，所以我们决定要像测试后端代码一样测试我们的新框架，达到一样的代码覆盖水平。

> * **流式处理**
>
> 我们希望引入Git工作流程，用它来管理应用代码简直是游刃有余，但是我们要将功能分支分解为更小的、模块化的代码块。另外，也要把过去一直采用的容易出错的手动步骤自动化:更新样式表、创建图标字体、部署新代码等。
> * **详细的文档**
>
> 这个新系统的受众很广，包括前端开发人员、后端开发人员、设计师、市场经理、运维 人员，以及其他产品开发角色。我们希望每个人接触这套系统时，都能找到适合自己的、详细的文档。


* 每个大的需求的开发都要产出一个详尽的文档和回归测试方案


## 单元测试

> 单元测试是将应用程序分解为尽可能小的函数，并创建可重复的、自动化的测试用例的过程。

> “一次只做一件事，并把它做好”是构建基于单元测试的应用程序的原则

单元测试已经是老生常谈的事情了,上面两条经验是必备的,至于说开发前编写好测试用例,其实是有争议的。

PS: **测试驱动开发**应该处于「功能齐全,迭代功能或重构优雅代码阶段」的开发期。具体的流程:
* 确定测试覆盖率
* 编写测试用例
* 迭代功能/重构代码
* 跑通测试用例，保证现有的修改不改变代码原有功能


## 性能测试

PS: 请移步 [**Archives**]({{site.baseUrl}}/archives/) -> 前端性能一节
