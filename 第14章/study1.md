## promise的含义

- promise是一个人容器,保存着未来结束事件的结果有以下特点
```text
1 对象的状态不受外界影响，有三种状态:pending(进行中)，fulfilled(已成功),rejected(已失败)
2 一旦状态改变就不会再变，任何时候都可以得到这个结果，有两种可能，一个是从pending变为fulfilled,一个是从pending变为rejected。只要发生状态就不会再变，称为resovled,就是状态改变已经发生再对promise添加then回调也会得到结果
```