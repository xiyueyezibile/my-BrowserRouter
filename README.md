## Browser-router原理

react-router的源码中，BrowserRouter的实现，是创建了一个顶层的history、location、match等参数，通过Context.provider将状态向下传递，通过中间层组件Router实现核心功能。

这里将Router的实现一并揉进了BrowserRouter中实现，简化了一些额外的处理。
