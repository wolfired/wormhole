import { Component, ComponentConstructor } from './internal';

export interface IEntity {
    /**
     * 获取cc指定的组件，如果组件不存在，返回null
     */
    TryGet<T extends Component>(cc: ComponentConstructor<T>): T;
    /**
     * 获取cc指定的组件，如果组件不存在，构造一个新的
     */
    Get<T extends Component>(cc: ComponentConstructor<T>): T;
}
