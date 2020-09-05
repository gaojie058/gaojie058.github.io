---
layout:     post
title:      "Machine Learning"
subtitle:   "温故而知新"
date:       2020-04-26 12:00:00
author:     "Gao Jie"
header-img: "img/post-bg.jpg"
catalog: true
tags:
    - Study
---

# TensorFlow 2.0实践系列课程
### A primer in machine learning
- 深度学习是机器学习的进一步发展
- 深度学习主要是依靠神经网络
- TensorFlow中的一个API是Keras
- keras使得定义神经网络变得容易
- a neural network is basically a set of function which can learn patterns
- model = keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])]) 
   - the simplest neural network with only one neural
   - use **Dense** to define a layer of connected neurons
   - **a single neuron**: only one dense here, so there's only one layer, one unit in it
   - **sequence**: Successive layers are defined in sequence, hence the word Sequential
- model.compile(optimizer = 'sgd', loss = 'mean_squared_error')
