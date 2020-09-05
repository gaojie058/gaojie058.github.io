---
layout:     post
title:      "使用Google API将采访的音频数据转换成文本数据"
subtitle:   ""
date:       2020-05-08 17:56:00
author:     "Gao Jie"
header-img: "img/post-bg.jpg"
catalog: true
tags:
    - Research
---

该API提供了三种方式向Cloud Speech-To-Text(STT)发送`recognize`请求。最开始想要采用客户端库的方法自己在本地配置python发送请求，后来简单实践了一下发现非常麻烦。
故而决定此次先实现目的，选择最简单的方式，即**使用gcloud工具**。

# 1. 准备工作
不管采用哪种方式，都要进行这一步的设置。
