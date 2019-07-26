核心特性模块
风格 04-11
考虑把那些数量庞大、辅助性的、只用一次的类收集到核心模块中，让特性模块的结构更清晰简明。

坚持把那些“只用一次”的类收集到 CoreModule 中，并对外隐藏它们的实现细节。简化的 AppModule 会导入 CoreModule，并且把它作为整个应用的总指挥。

坚持在 core 目录下创建一个名叫 CoreModule 的特性模块（例如在 app/core/core.module.ts 中定义 CoreModule）。

坚持把要共享给整个应用的单例服务放进 CoreModule 中（例如 ExceptionService 和 LoggerService）。

坚持导入 CoreModule 中的资产所需要的全部模块（例如 CommonModule 和 FormsModule）。

为何？ CoreModule 提供了一个或多个单例服务。Angular 使用应用的根注入器注册这些服务提供商，让每个服务的这个单例对象对所有需要它们的组件都是可用的，而不用管该组件是通过主动加载还是惰性加载的方式加载的。

为何？CoreModule 将包含一些单例服务。而如果是由惰性加载模块来导入这些服务，它就会得到一个新实例，而不是所期望的全应用级单例。

坚持把应用级、只用一次的组件收集到 CoreModule 中。 只在应用启动时从 AppModule 中导入它一次，以后再也不要导入它（例如 NavComponent 和 SpinnerComponent）。

为何？真实世界中的应用会有很多只用一次的组件（例如加载动画、消息浮层、模态框等），它们只会在 AppComponent 的模板中出现。 不会在其它地方导入它们，所以没有共享的价值。 然而它们又太大了，放在根目录中就会显得乱七八糟的。

避免在 AppModule 之外的任何地方导入 CoreModule。

为何？如果惰性加载的特性模块直接导入 CoreModule，就会创建它自己的服务副本，并导致意料之外的后果。

为何？主动加载的特性模块已经准备好了访问 AppModule 的注入器，因此也能取得 CoreModule 中的服务。

坚持从 CoreModule 中导出 AppModule 需导入的所有符号，使它们在所有特性模块中可用。

为何？CoreModule 的存在就要让常用的单例服务在所有其它模块中可用。

为何？你希望整个应用都使用这个单例服务。 你不希望每个模块都有这个单例服务的单独的实例。 然而，如果 CoreModule 中提供了一个服务，就可能偶尔导致这种后果。
