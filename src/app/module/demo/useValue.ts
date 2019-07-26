import { InjectionToken } from '@angular/core';

export const MY_DI_TOKEN = new InjectionToken<string>('test useVaule');
// 通过InjectionToken的参数可以知道，这个DI令牌我是用来测试useValue这种服务提供商的，
// 其实，这个参数的作用也是如此——更清楚的描述这个令牌的作用，并没有其他啥作用
// 通过InjectionToken的泛型参数我们可以知道，这个DI令牌使用来表示string类型的服务
