import { Component, ComponentConstructor, ComponentType } from './Component';
import { IEntity } from './IEntity';

/**
 * 实体类
 */
export class Entity implements IEntity {
    public static New(): IEntity {
        return new Entity();
    }

    private constructor() {
    }

    public TryGet<T extends Component>(cc: ComponentConstructor<T> & ComponentType): T {
        let idx: uint = cc.IDX;
        if (void 0 === idx) {
            return void 0;
        }

        return <T>this._component_map[idx];
    }

    public Get<T extends Component>(cc: ComponentConstructor<T> & ComponentType): T {
        let idx: uint = cc.IDX;
        if (void 0 === idx) {
            throw "Error idx";
        }

        let com = this._component_map[idx];
        if (void 0 === com) {
            this._component_map[cc.IDX] = com = new cc(this);
        }
        return <T>com;
    }

    private _component_map: Component[] = [];
}
